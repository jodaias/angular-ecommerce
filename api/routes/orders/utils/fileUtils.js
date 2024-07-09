const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const ordersFilePath = path.join(__dirname, '../../../data/orders.json');

// Função para ler os pedidos do arquivo JSON
const readOrdersFromFile = () => {
  try {
    if (!fs.existsSync(ordersFilePath)) {
      fs.writeFileSync(ordersFilePath, JSON.stringify([]));
    }
    console.log("lendo");
    const data = fs.readFileSync(ordersFilePath, 'utf8');
    console.log("leu: "+data);
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Função para escrever os pedidos no arquivo JSON
const writeOrdersToFile = (orders) => {
  try {
    console.log("escrevendo")
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    console.log("escreveu");
  } catch (err) {
    console.error(err);
  }
};


  // Função para verificar se o ID já existe
  function doesIdExist(id, orders) {
    return orders.some(order => order.id === id);
  }

  // Função para gerar um novo ID único
  function generateUniqueId() {
    const orders = readOrdersFromFile();
    let newId;
    do {
      newId = uuidv4();
    } while (doesIdExist(newId, orders));
    return newId;
  }

module.exports = {
  readOrdersFromFile,
  writeOrdersToFile,
  generateUniqueId
};
