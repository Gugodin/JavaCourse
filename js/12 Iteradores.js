// Iteradores

const tecnologias = ['HTML','CSS','JAVA','React.js','Node.js']

// For comun
// for (let i = 0; i < array.length; i++) {
//     const element = tecnologias[i];
    
// }

// Iterador que recorre los elementos NO tiene posiciones
tecnologias.forEach(element => {
    
});

// Iterador que CREA nuevo arreglo en base a las condiciones de la funcion
const newArray = tecnologias.map((element)=>{return `${element} Hola`})

// For of MUCHO MEJOR

for(const a of tecnologias){
    
}

console.log(newArray);
