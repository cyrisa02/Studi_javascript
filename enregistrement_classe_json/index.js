//On souhaite développer un programme qui demande à l'utilisateur d'entrer une liste de produits à mettre dans un panier et qui les enregistre grâce à une imbrication d'enregistrements. Ensuite, le programme itère sur les enregistrements et retourne le prix du panier


//Installer prompt
// npm install prompt-sync
// const prompt = require("prompt-sync")({ sigint: true });            en haut du programme


const prompt = require("prompt-sync")({ sigint: true });
let otherItem = true
const listItem = []
while (otherItem) {
  const nameItem = prompt('Donner le nom du produit')
  const priceItem = Number(prompt('Donner le prix du produit'))
  const item = {
    name: nameItem,
    price: priceItem
  }
  listItem.push(item)

  otherItem = (prompt('Autre produit? O ou N?') === 'O')
}

let sum = 0
for (const item of listItem) {
  sum = sum + item.price
}

console.log(sum)

console.log(listItem)