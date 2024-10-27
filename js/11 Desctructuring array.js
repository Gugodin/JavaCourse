const tecnologias = ['HTML','CSS','JAVA','React.js','Node.js']

// Forma viejita
// const java = tecnologias[2];

// Destructuring
// En este caso las variables que vamos sacando son en base a la posicion del arreglo
// element3 = JAVA
const [element1,element2,element3] = tecnologias
// Si en dado caso queremos por ejemplo el ultimo del arreglo PERO no queremos crear todas las variables
// Se haria de la siguiente forma
const [ , , , ,last] = tecnologias
// Denotando espacios vacios en las posiciones que no nos interesan
// En este caso es muchisimo mejor utilizar la forma
