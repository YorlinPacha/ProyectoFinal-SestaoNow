<template>
  
  <div class="contenedorFormulario">
    <form class="form">
      <p class="title">Registra tu anuncio</p>
      <p class="message">Muchas personas lo estaran esperando!!</p>
      <div class="flex">
        <label>
          <input required="" placeholder="" type="text" class="input" v-model="titulo"/>
          <span>Titulo</span>
        </label>

        <label>
          <input required="" placeholder="" type="text" class="input" v-model="nombre"/>
          <span>Nombre</span>
        </label>
      </div>
      <div class="cajasOpciones">
        <label class="message">Categoria:
          <select v-model="categoria" class="inputSelect">
            <option value="Elige...">Elige...</option>
            <option value="comida">Comida</option>
            <option value="empleo">Empleo</option>
            <option value="servicios">Servicios</option>
          </select>
      </label>

      <label class="message">Ubicacion:
        <select v-model="ubicacion" class="inputSelect">
          <option value="Elige...">Elige...</option>
          <option value="Albiz">Albiz</option>
          <option value="Aizpuru-La Benedicta">Aizpuru-La Benedicta</option>
          <option value="El Kasko">El Kasko</option>
          <option value="Kueto">Kueto</option>
          <option value="La Punta">La Punta</option>
          <option value="Markonzaga">Markonzaga</option>
          <option value="Rebonza">Rebonza</option>
          <option value="Simondrogas">Simondrogas</option>
          <option value="Txabarri-El Sol">Txabarri-El Sol</option>
          <option value="El Carmen-Azeta">El Carmen-Azeta</option>
        </select>
      </label>

      </div>
      

    
      <label>
        <input required="" placeholder="" type="text" class="input" v-model="descripcion" />
        <span>Descripcion</span>
      </label>

      <label>
        <input required="" placeholder="" type="text" class="input" v-model="telefono" />
        <span>Telefono</span>
      </label>
      <button class="submit" @click="CrearPost()">Postear anuncio</button>
      <!-- <label>
        <input required="" placeholder="" type="text" class="input" v-model="id"/>
        <span>Id del anuncio</span>
      </label> -->
      <button class="submit" @click="EliminarPost(id)">Eliminar anuncio</button>
      <button class="submit" @click="ActualizarCity(id)">Actualizar anuncio</button>
      <!-- <p class="signin">Already have an acount ? <a href="#">Signin</a></p> -->
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createCity } from "../data_api/callApi";
import { deleteCity } from "../data_api/callApi";
import { updateCity } from "../data_api/callApi";

const categoria = ref("Elige...");
const titulo = ref("");
const ubicacion = ref("Elige...");
const descripcion = ref("");
const nombre = ref("");
const telefono = ref("");
const id = ref("");

//console.log("+++info : ",categoria.value, titulo.value, ubicacion.value, nombre.value, telefono.value);

//Funcion para llamar API y crear una publicacion
const CrearPost = async () => {
  console.log(
    "+++Click función crear ciudad: ",
    categoria,
    titulo,
    ubicacion,
    descripcion,
    nombre,
    telefono
  );
  try {
    await createCity(
      categoria,
      titulo,
      ubicacion,
      descripcion,
      nombre,
      telefono
    );
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
  console.log(
    "+++Click función Actualizar anuncio: ",
    id,
    categoria,
    titulo,
    ubicacion,
    descripcion,
    nombre,
    telefono
  );
  try {
    await updateCity(
      id,
      categoria,
      titulo,
      ubicacion,
      descripcion,
      nombre,
      telefono
    );
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};
</script>

<style scoped>
.contenedorFormulario {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-direction: column;
}

/* ----------------------------------------- */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  /* z-index: -1000; */
}

.title {
  font-size: 28px;
  color:  #FF4879;;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #FF4879;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: #FF4879;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 1rem;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.inputSelect{
  padding: 5px 5px 10px 5px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  margin-bottom: .5rem;
  color: gray;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: #FF4879;
}

.submit {
  /* border: none;
  outline: none;
  background-color: royalblue; */
  border: 2px solid #FF4879;
  padding: 10px;
  border-radius: 10px;
  color: #FF4879;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  color: #fff;
  background-color: #FF4879;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
