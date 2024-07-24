const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
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
      const newFileName = `${categoryName}_${fileName}_${timestamp}_${index}.png`;
      const downloadPath = path.resolve(__dirname, 'downloads', categoryName, newFileName);

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

  const getDescription = async (productPageUrl) => {
    try {
      const productPage = await browser.newPage();
      await productPage.goto(productPageUrl);
      await productPage.waitForSelector('.caracs');

      const description = await productPage.evaluate(() => {
        const descriptions = Array.from(document.querySelectorAll('.caracs .desc')).map(desc => {
          const title = desc.querySelector('.desc-tit')?.innerText.split(':')[0].trim();
          const value = desc.querySelector('.desc-sub')?.innerText.trim();
          return { [title]: value };
        });
        return Object.assign({}, ...descriptions);
      });

      await productPage.close();
      return description;
    } catch (error) {
      console.error('Erro ao obter descrição:', error);
    }
  };

  for (const [index, product] of products.entries()) {
    const imageName = await downloadImage(product.imageUrl, index);
    const description = await getDescription(product.link);
    
    if (imageName && description) {
      const jsonFileName = imageName.replace('.png', '.json');
      const jsonFilePath = path.resolve(__dirname, 'downloads', categoryName, jsonFileName);
      await fs.writeJson(jsonFilePath, description, { spaces: 2 });
      console.log(`JSON salvo como ${jsonFileName}`);
    }
  }

  await browser.close();
};

module.exports = downloadImagesAndDescriptions;
