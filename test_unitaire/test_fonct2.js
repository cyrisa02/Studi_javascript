function checkAccount (account, amount) {
    if (account.balance >= amount) {
      return true
    }
    return false
  }
  
  function buy (account, product) {
    // Copie de la variable account
    const newAccount = { ...account }
    if (checkAccount(newAccount, product.price)) {
      newAccount.balance = newAccount.balance - product.price
      console.log('Produit acheté:', product.name)
    } else {
      console.log('Echec de la transaction')
    }
    return newAccount
  }
  

  let account = {
    owner: 'Pierre', 
    balance: 10
  }

  const product = {
    name: 'Traces',
    price: 19
  }

  




function testBuy () {
    let acc = {
      owner: 'Jean Dupont',
      balance: 100
    }
    const prod = {
      name: 'Carte graphique',
      price: 60
    }
    acc = buy(acc, prod)
    // Paiement réussi
    if (acc.balance !== 40) {
      console.log('Test buy échoué sur le premier paiement')
      return false
    }
  
    acc = buy(acc, prod)
    // Echec du paiement
    if (acc.balance !== 40) {
      console.log('Test buy échoué sur le second paiement')
      return false
    }
    console.log('Test réussi')
    return true
  }
  
  testBuy()