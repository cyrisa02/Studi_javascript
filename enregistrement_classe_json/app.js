//collection -> json -> clé pointe vers une valeur


const book = {
    title: 'Aux sources de ',
    year: 2021, 
    author: 'Fred '
}


console.log(book);


for (const arr of Object.entries(book)) {
    console.log(arr[0], ':', arr[1])
}

for (const array in book) {
    console.log(array, ':', book[array])
}

const user = {
    pseudo: 'Dupont',
    birthYear: 1990,
    birthMonth: 12,
    birthDar: 12
  }

  for (const composante in user) {
    if (composante !== 'pseudo') {
      console.log(user[composante])
    }
  }

  /** JavaScript : calcul du prix d'un panier. */
const basket = [
    { name: 'souris', price: 10.5 },
    { name: 'clavier', price: 25 },
    { name: 'écran', price: 50 }
  ]
  
  let sum = 0
  
  for (const item of basket) {
    sum = sum + item.price
  }
  
  console.log(sum)
  

  const employees = [
    { firstName: 'John', lastName: 'Doe', age: 25, job: 'ingénieur' },
    { firstName: 'Bob', lastName: 'Smith', age: 38, job: 'chercheur' },
    { firstName: 'Jeanne', lastName: 'Smith', age: 40, job: 'ingénieur' },
    { firstName: 'Mathieu', lastName: 'Simpson', age: 59, job: 'secrétaire' },
    { firstName: 'Constance', lastName: 'Martin', age: 40, job: 'directeur' },
    { firstName: 'Robert', lastName: 'Peter', age: 30, job: 'ingénieur' },
    { firstName: 'Richard', lastName: 'Stallman', age: 67, job: 'chercheur' }
  ]
  

  //calculer l'âge moyen des ingénieurs.
  let counter = 0
let sum1 = 0
for (const employee of employees) {
  if (employee.job === 'ingénieur') {
    sum1 = sum1 + employee.age
    counter = counter + 1
  }
}

const average = sum1 / counter
console.log(average)