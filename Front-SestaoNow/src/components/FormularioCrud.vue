<template>
    <div class="contenedorFormulario">
        <h2>Formulario</h2>
        <label>Categoria: 
        <select v-model="categoria">
          <option value="Elige...">Elige...</option>
          <option value="comida">Comida</option>
          <option value="empleo">Empleo</option>
          <option value="servicios">Servicios</option>
        </select></label>
        <label>Titulo: <input type="text" v-model="titulo"></label>
        <label>Ubicacion: <select v-model="ubicacion">
          <option value="Elige...">Elige...</option>
          <option value="Sestao">Sestao</option>
          <option value="Barakaldo">Barakaldo</option>
          <option value="Portugalete">Portugalete</option>
        </select></label>
        <label>Descripcion: <input type="text" v-model="descripcion"></label>
        <label>Nombre: <input type="text" v-model="nombre"></label>
        <label>Telefono: <input type="text" v-model="telefono"></label>
        <!-- la fecha se pone automaticamente desde sqlite -->
        <button @click="CrearPost()">POST - Crear Publicacion</button>
        <label>Id: <input type="text" v-model="id"></label>
        <button @click="EliminarPost(id)">DEL - Borrar Publicacion (ID)</button>
        <button @click="ActualizarCity(id)">PUT - Actualizar Publicacion</button>
    </div>

  
</template>

<script setup>
import { ref } from "vue";
import { createCity } from "../data_api/callApi";
import { deleteCity } from "../data_api/callApi";
import { updateCity } from "../data_api/callApi";

const categoria = ref("Elige...")
const titulo = ref("");
const ubicacion = ref("Elige...")
const descripcion = ref("");
const nombre = ref("");
const telefono = ref("");
const id = ref("");

//console.log("+++info : ",categoria.value, titulo.value, ubicacion.value, nombre.value, telefono.value);
 
//Funcion para llamar API y crear una publicacion
const CrearPost = async () => {
  console.log("+++Click función crear ciudad: ", categoria, titulo, ubicacion, descripcion, nombre, telefono);
  try {
    await createCity( categoria, titulo, ubicacion, descripcion, nombre, telefono);
 
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};

//Funcion para llamar API y eliminar ciudad
const EliminarPost = async () => {
  console.log("+++Click función ELIMINAR post id: ", id.value);
  try {
    await deleteCity(id);
 
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};

//Funcion para llamar API y eliminar ciudad
const ActualizarCity = async () => {
  console.log("+++Click función Actualizar anuncio: ",id, categoria, titulo, ubicacion, descripcion, nombre, telefono);
  try {
    await updateCity(id, categoria, titulo, ubicacion, descripcion, nombre, telefono);
 
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};
</script>

<style scoped>
.contenedorFormulario{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}


</style>