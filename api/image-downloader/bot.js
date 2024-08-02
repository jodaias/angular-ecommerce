const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { URL } = require('url');

const downloadImagesAndDescriptions = async (categoryUrl, categoryName) => {
  const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
  const page = await browser.newPage();

  const { width, height } = await page.evaluate(() => ({
    width: window.screen.availWidth,
    height: window.screen.availHeight,
  }));
  await page.setViewport({ width, height });

  await page.goto(categoryUrl);
  await page.waitForSelector('.img-prod img');

  const products = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.img-prod a')).map(anchor => ({
      link: anchor.href,
      imageUrl: anchor.querySelector('img').src
    })).filter(product => product.imageUrl.includes('timthumb'));
  });

  const downloadImage = async (imageUrl, index) => {
    try {
      const parsedUrl = new URL(imageUrl);
      const filePath = parsedUrl.pathname;
      const fileName = path.basename(filePath, path.extname(filePath));
      const timestamp = Date.now();
      const newFileName = `${fileName}_${timestamp}.png`;
      const downloadPath = path.resolve(__dirname, '../../src/assets/images/products', categoryName.toLowerCase(), newFileName);
  
      await fs.ensureDir(path.dirname(downloadPath));
  
      const response = await axios({
        method: 'GET',
        url: imageUrl,
        responseType: 'stream'
      });
  
      response.data.pipe(fs.createWriteStream(downloadPath))
        .on('finish', () => {
          console.log(`Imagem salva como ${newFileName}`);
        })
        .on('error', (e) => {
          console.error('Erro ao salvar a imagem:', e);
        });
  
      return newFileName;
    } catch (error) {
      console.error('Erro ao baixar a imagem:', error);
    }
  };

  const getProductDetails = async (productPageUrl) => {
    try {
      const productPage = await browser.newPage();
      await productPage.goto(productPageUrl);
      await productPage.waitForSelector('.caracs');

      const productName = await productPage.evaluate(() => {
        return document.querySelector('.produto-nome')?.innerText.trim();
      });

      const description = await productPage.evaluate(() => {
        const descriptions = Array.from(document.querySelectorAll('.caracs .desc')).map(desc => {
          const title = desc.querySelector('.desc-tit')?.innerText.split(':')[0].trim();
          const value = desc.querySelector('.desc-sub')?.innerText.trim();
          return { [title]: value };
        });
        return Object.assign({}, ...descriptions);
      });

      await productPage.close();
      return { productName, description };
    } catch (error) {
      console.error('Erro ao obter detalhes do produto:', error);
    }
  };

  const updateJsonFiles = async (categoryName, productName, productDescription, imageName) => {
    const categoriesFilePath = path.resolve('C:/dev/works/srDomingos/angular-ecommerce/api/data/product-categories.json');
    const productsFilePath = path.resolve('C:/dev/works/srDomingos/angular-ecommerce/api/data/products.json');
    
    const categories = await fs.readJson(categoriesFilePath);
    const products = await fs.readJson(productsFilePath);
  
    let category = categories.find(cat => cat.categoryName === categoryName);
    if (!category) {
      const newCategory = { id: categories.length + 1, categoryName };
      categories.push(newCategory);
      category = newCategory;
    }
  
    const newProduct = {
      id: uuidv4(),
      sku: `SKU${Math.floor(Math.random() * 100000)}`,
      name: productName || `${categoryName} Product`,
      description: productDescription['Descrição'] || 'Descrição não disponível',
      unitPrice: 0,
      imageUrl: `assets/images/products/${categoryName.toLowerCase()}/${imageName}`, // Caminho relativo
      active: true,
      unitsInStock: 0,
      dateCreated: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      categoryId: category.id
    };
  
    products.push(newProduct);
  
    await fs.writeJson(categoriesFilePath, categories, { spaces: 2 });
    await fs.writeJson(productsFilePath, products, { spaces: 2 });
  
    console.log('Arquivos JSON atualizados com sucesso!');
  };

  for (const [index, product] of products.entries()) {
    const imageName = await downloadImage(product.imageUrl, index);
    const { productName, description } = await getProductDetails(product.link);
    
    if (imageName && description) {
      const jsonFileName = imageName.replace('.png', '.json');
      const jsonFilePath = path.resolve(__dirname, '../../src/assets/images/products', categoryName.toLowerCase(), jsonFileName);
      await fs.writeJson(jsonFilePath, description, { spaces: 2 });
      console.log(`JSON salvo como ${jsonFileName}`);
      
      await updateJsonFiles(categoryName, productName, description, imageName);
    }
  }

  await browser.close();
};

module.exports = downloadImagesAndDescriptions;
