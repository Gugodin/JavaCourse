// Fetch API con promesas

const url = "https://jsonplaceholder.typicode.com/posts";

// Sintaxis de fetch
// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Error en la peticion");
//   })
//   .then((data) => {
//     console.log("ESTO ES LA DATA DE LA API");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("ERROR");
//     console.log(error);
//   });

// Sintaxis async await

const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("ESTO ES LA DATA DE LA API");
      console.log(data);
    } else {
      throw new Error("Error en la peticion");
    }
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  }
}

fetchData();