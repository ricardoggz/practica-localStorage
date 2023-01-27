//Uso del localStorage
//Mandar información
localStorage.setItem('name', 'Ricardo')

//Obtener información
console.log(localStorage.getItem('name'))

//Borrar toda la información
//localStorage.clear()

//Borrar información específica
localStorage.removeItem('name')

//Mandar un arreglo u objeto al localStorage con JSON
const names = ['Emily', 'Luis','Alexis', 'Ian', 'Sandra', 'Roberto']
localStorage.setItem('names', JSON.stringify(names))

//Convertir un string a un arreglo/objeto
console.log(JSON.parse(localStorage.getItem('names')))