
const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/photos";
const url3 = "https://jsonplaceholder.typicode.com/users";

const fetchDataSingle = async (url) => {
    try {
        const inicio = performance.now();
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log("ESTO ES LA DATA DE LA API");
            // console.log(data);
        } else {
            throw new Error("Error en la peticion");
        }
        const final = performance.now();
        console.log("Tiempo de ejecucion: (Escalonado)", final - inicio);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  }

const fetchDataBunch = async () => {
    try {
        const inicio = performance.now();

        const response = await fetch(url1);
        const data = await response.json();
        // console.log("Data 1");
        // console.log(data);

        const response2 = await fetch(url2);
        const data2 = await response2.json();
        // console.log("Data 2");
        // console.log(data2);

        const response3 = await fetch(url3);
        const data3 = await response3.json();
        // console.log("Data 3");
        // console.log(data3);


        const final = performance.now();
        console.log("Tiempo de ejecucion: (Escalonado)", final - inicio);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  }

const fetchDataPerformace = async () => {
    try {
        const inicio = performance.now();

        const [data1, data2, data3] = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3)
        ]);
        
        const [data1Json, data2Json, data3Json] = await Promise.all([
            data1.json(),
            data2.json(),
            data3.json()
        ]);

        // const data1Json = await data1.json();
        // const data2Json = await data2.json();
        // const data3Json = await data3.json();

        // console.log("Data 1");
        // console.log(data1Json);

        // console.log("Data 2");
        // console.log(data2Json);

        // console.log("Data 3");
        // console.log(data3Json);

        const final = performance.now();
        console.log("Tiempo de ejecucion: (Paralelo)", final - inicio);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  }

fetchDataBunch()
fetchDataPerformace()

// fetchDataSingle(url1);
// fetchDataSingle(url2);   