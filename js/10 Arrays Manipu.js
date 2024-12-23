// Arrays modificaciones

const tecnologias = ['HTML','CSS','JAVA','React.js','Node.js']

// Puedes agregar indices inexistentes con:
//  tecnologias[5] = 'hola'
// Ojo si generas uno en una posicion muy fuera porque si la crea 
//  tecnologias[20] = 'hola'

tecnologias.push('aaaa')


// 
// Metodos de una lista
// Para eliminar el primer elemento de la lista (Mutable)
// .shift
// Para eliminar el primer elemento de la lista (No Mutable)
// .filter(Function(element){})


// Para modificar el algun elemento de la lista (Mutable)
// tecnologias[0] = 'html'
// Para MODIFICAR elementos de la lista (No Mutable)
// .map(Function(element){})