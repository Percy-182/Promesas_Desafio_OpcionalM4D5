//Crear una función asíncrona que contenga la URL en una variable

// Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el método fetch, utilizando a la vez await para que retorne directamente el valor de la promesa

const obtenerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos"); //solicitud GET
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }
    const data = await response.json();
    data.slice(0, 20).forEach((data) => {
      console.log(data.title);
    });

    //console.log("Datos obtenidos:", data);

    recibirMensaje(); // Llama a la función para recibir el mensaje
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const obtenerMensaje = () => {
  // se declara constante con tiempo seteado y devuelva un msj
  return new Promise((resolve, reject) => {
    //
    setTimeout(() => {
      resolve("Información Enviada");
    }, 3000);
  });
};

const recibirMensaje = async () => {
  try {
    const mensaje = await obtenerMensaje();
    console.log("Mensaje recibido:", mensaje);
  } catch (error) {
    console.error("Error al recibir el mensaje:", error);
  }
};

obtenerDatos();
