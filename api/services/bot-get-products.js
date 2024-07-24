const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const { URL } = require('url');

(async () => {
  // Inicia o navegador
  const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
  const page = await browser.newPage();

  // Define a largura e a altura da viewport para corresponder à tela inteira
  const { width, height } = await page.evaluate(() => ({
    width: window.screen.availWidth,
    height: window.screen.availHeight,
  }));
  await page.setViewport({ width, height });

  // URL do site a ser acessado
  await page.goto('https://xbzbrindes.com.br/brindes/Bar-e-Bebidas');

  // Aguarde até que os produtos estejam visíveis
  await page.waitForSelector('.img-prod img');

  // Obtém todos os links de imagem da página que contêm 'timthumb'
  const imageUrls = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.img-prod img'))
      .map(img => img.src)
      .filter(src => src.includes('timthumb'));
  });

  // Define a categoria para o nome do arquivo
  const category = 'Category';

  // Função para baixar e salvar a imagem
  const downloadImage = async (imageUrl, index) => {
    try {
      const parsedUrl = new URL(imageUrl);
      const filePath = parsedUrl.pathname;
      const fileName = path.basename(filePath, path.extname(filePath));
      const timestamp = Date.now();
      const newFileName = `${category}_${fileName}_${timestamp}_${index}.png`;
      const downloadPath = path.resolve(__dirname, 'downloads', newFileName);

      // Cria a pasta de download se não existir
      await fs.ensureDir(path.dirname(downloadPath));

      // Faz o download da imagem
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
    } catch (error) {
      console.error('Erro ao baixar a imagem:', error);
    }
  };

  // Baixa todas as imagens encontradas
  for (const [index, imageUrl] of imageUrls.entries()) {
    await downloadImage(imageUrl, index);
  }

  // Fecha o navegador
  await browser.close();
})();
