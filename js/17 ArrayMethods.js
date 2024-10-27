// Array methods
const tecnologias = ['HTML','CSS','JAVA','React.js','Node.js']
const numeros = [1,34,5,45]



// Filter 
// Para filtrar un arreglo
const newArray = numeros.filter((element) => element !== 'HTML')
// Se puede hacer esto tambien
// const newArray = numeros.filter(element => element !== 'HTML')

// Includes
// Sirve para ver si existe ese elemento dentro del arreglo
const existCss = tecnologias.includes('CSS')

// Find
// Devuelve el primer elemento que cumpla una funcion
const resultado = numeros.find((element) => element > 0)
// Resultado => 1

// Every
// Devuelve true or false si todos cumplen la condicion
const allAreUpToOne = numeros.every((element)=> element > 1)

// Reduce
// Sirve para realizar una acumulacion, en este caso el segundo parametro '0' indica con que valor comenzara la
// variable 'total' y conforme vaya pasando en el arreglo se ira acumulando su valor
const reduce = numeros.reduce((total, numeroActual) => total + numeroActual ,0)



