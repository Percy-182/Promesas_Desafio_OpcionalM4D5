//Crear una función asíncrona que contenga la URL en una variable

// Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el método fetch, utilizando a la vez await para que retorne directamente el valor de la promesa

const obtenerDatos = async () => {
  // Se declara una constante llamada obtenerDatos que contiene una función asíncrona.
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos"); //solicitud GET
    if (!response.ok) {
      //Se verifica si la respuesta de la solicitud fue exitosa. Si no lo fue, se lanza un error.
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
}; //cierre bloque

const obtenerMensaje = () => {
  // se declara constante con tiempo seteado y devuelva un msj
  return new Promise((resolve, reject) => {
    //
    setTimeout(() => {
      //Se utiliza setTimeout para setear/ejecutar la función después de un cierto tiempo (en este caso, 3000 milisegundos/3 segundos).
      resolve("Información Enviada"); //Se llama a la función resolve de la promesa, lo que significa que la promesa se resuelve con el mensaje "Información Enviada" después de 3 segundos.
    }, 3000);
  });
}; //cierre bloque

const recibirMensaje = async () => {
  try {
    const mensaje = await obtenerMensaje();
    console.log("Mensaje recibido:", mensaje);
  } catch (error) {
    console.error("Error al recibir el mensaje:", error);
  }
}; //cierre bloque

obtenerDatos();
