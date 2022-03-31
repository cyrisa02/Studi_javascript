/** JavaScript : teste fonctionnellement le transfert d'argent. */
function checkAccount (account, amount) {
    if (account.balance >= amount) {
      return true
    }
    return false
  }
  
  function transfer (srcAccount, tgtAccount, amount) {
    // Copies des variables
    const newSrcAccount = { ...srcAccount }
    const newTgtAccount = { ...tgtAccount }
    if (checkAccount(newSrcAccount, amount)) {
      newSrcAccount.balance = newSrcAccount.balance - amount
      newTgtAccount.balance = newTgtAccount.balance + amount
      console.log('Transfert réussi')
    } else {
      console.log('Echec du transfert')
    }
    return [newSrcAccount, newTgtAccount]
  }
  
  function testTransfer () {
    let srcAcc = { owner: 'Jean Dupont', balance: 100 }
    let tgtAcc = { owner: 'Anne Martin', balance: 20 }
  
    let transferRes = transfer(srcAcc, tgtAcc, 60)
    srcAcc = transferRes[0]
    tgtAcc = transferRes[1]
    // Transfert réussi
    if (srcAcc.balance !== 40 || tgtAcc.balance !== 80) {
      console.log('Test transfer échoué lors du premier transfert.')
      return false
    }
  
    transferRes = transfer(srcAcc, tgtAcc, 60)
    srcAcc = transferRes[0]
    tgtAcc = transferRes[1]
    // Transfert échoué donc les comptes doivent être inchangés
    if (srcAcc.balance !== 40 || tgtAcc.balance !== 80) {
      console.log('Test transfer échoué lors du second transfert.')
      return false
    }
    console.log('Test réussi')
    return true
  }
  
  testTransfer()
  