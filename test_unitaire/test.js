function bubbleSort (unsortedList) {
    const intList = unsortedList.slice()
    for (let i = intList.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (intList[j + 1] < intList[j]) {
          // Echanger les deux valeurs
          const temp = intList[j + 1]
          intList[j + 1] = intList[j]
          intList[j] = temp
        }
      }
    }
    return intList
  }

  
  function testBubbleSort () {
    if (bubbleSort([3, 2, 1]).toString() !== [1, 2, 3].toString()) {
      console.log('Test échoué pour [3, 2, 1]')
      return false
    }
    if (bubbleSort([1, 2, 3]).toString() !== [1, 2, 3].toString()) {
      console.log('Test échoué pour [1, 2, 3]')
      return false
    }
    if (bubbleSort([1, 3, 2]).toString() !== [1, 2, 3].toString()) {
      console.log('Test échoué pour [1, 3, 2]')
      return false
    }
    console.log('Test réussi')
    return true
    if (bubbleSort([]).toString() !== [].toString()) {
        console.log('Test échoué pour []')
        return false
      }
  }
  
  testBubbleSort()