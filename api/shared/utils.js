const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// Função para ler os pedidos do arquivo JSON
const readFromFile = (dirname) => {
  const filePath = path.join(__dirname,dirname);
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    console.log("lendo");
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("leu: "+data);
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Função para escrever os pedidos no arquivo JSON
const writeToFile = (entities, dirname) => {
  try {
    const filePath = path.join(__dirname,dirname);
    console.log("escrevendo")
    fs.writeFileSync(filePath, JSON.stringify(entities, null, 2));
    console.log("escreveu");
  } catch (err) {
    console.error(err);
  }
};

// Função para verificar se o ID já existe
function doesIdExist(id, entities) {
    return entities.some(entity => entity.id === id);
  }

  // Função para gerar um novo ID único
  function generateUniqueId(entities) {
    let newId;
    do {
      newId = uuidv4();
    } while (doesIdExist(newId, entities));
    return newId;
  }

  module.exports = {
    readFromFile,
    writeToFile,
    generateUniqueId
  };
