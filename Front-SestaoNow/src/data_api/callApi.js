// 1 importar axios : en terminal -> npm i axios

import axios from "axios";

//-------------OBTENER UNA CIUDAD
export async function getCity(id) {
  //console.log("id dentro de get city", id);
  const url = "http://127.0.0.1:5000/cities/" + id.value;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data;
      //console.log("dentro de get una city", data);
      return data;
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};


//-------------OBTENER TODAS los anuncios por categoria

export async function getAllpostCategoria(categoria) {
  const url = "http://127.0.0.1:5000/categoria/" + categoria;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data;

      console.log("dentro de getAllpostCategoria", data);
      return data;
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};


//-------------OBTENER TODAS LAS CIUDADES

export async function getAllCity() {
  const url = "http://127.0.0.1:5000/categoria";
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data;

      console.log("dentro de getAll", data);
      return data;
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};

//-------------CREAR UNA publicacion  /add

export async function createCity( categoria, titulo, ubicacion, descripcion, nombre, telefono) {
  console.log("+++DENTRO de crear publicacion: ", categoria.value, titulo.value, ubicacion.value, descripcion.value, nombre.value, telefono.value);
  const url = "http://127.0.0.1:5000/add";
  try {
    const response = await axios.post(url, {
      categoria: categoria.value,
      titulo: titulo.value,
      ubicacion: ubicacion.value,
      descripcion: descripcion.value,
      nombre: nombre.value,
      telefono: telefono.value
    });

    if (response.status === 200) {
      //console.log("dentro de create city", response);
      location.reload();
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};

//-------------BORRAR UNA CIUDAD  sin id.value porque ya lo esta tomando

export async function deleteCity(id) {
  console.log("+++dentro de eliminar city INFO : ", id);
  const url = "http://127.0.0.1:5000/delete/" + id;
  try {
    const response = await axios.delete(url);

    if (response.status === 200) {
      console.log("++++++++ conexion borrar exitosa")
      location.reload();
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};

//-------------ACTUALIZAR UNA CIUDAD
export async function updateCity(id, categoria, titulo, ubicacion, descripcion, nombre, telefono) {
  const url = "http://127.0.0.1:5000/anuncio/" + id.value;
  try {
    const response = await axios.put(url, {
      categoria: categoria.value,
      titulo: titulo.value,
      ubicacion: ubicacion.value,
      descripcion: descripcion.value,
      nombre: nombre.value,
      telefono: telefono.value
    });

    if (response.status === 200) {
      location.reload();
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
}

//export default { getCity, createCity, updateCity, deleteCity }
