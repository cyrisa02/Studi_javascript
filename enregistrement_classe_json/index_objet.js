class Item {
    constructor () {
      this.name = ''
      this.price = 0
    }
  }
  
  let otherItem = true
  const listItem = []
  while (otherItem) {
    const item = new Item()
    item.name = prompt('Donner le nom du produit')
    item.price = Number(prompt('Donner le prix du produit'))
    listItem.push(item)
  
    otherItem = (prompt('Autre produit? O ou N?') === 'O')
  }
  
  let sum = 0
  for (const item of listItem) {
    sum = sum + item.price
  }
  
  console.log(sum)
  