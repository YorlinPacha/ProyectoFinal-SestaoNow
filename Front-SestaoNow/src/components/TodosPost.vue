<template>
  <div class="Tarjeta">
    <div class="weather-summary" v-for="(anuncio, index) in anuncios" :key="index">


      <figure class="snip1336">
        <img v-if="anuncio.categoria == 'comida'" src="../assets/img/cateComida.png" alt="imagen categoria comida"/>
        <img v-if="anuncio.categoria == 'empleo'" src="../assets/img/cateEmpleo.png" alt="imagen categoria empleo"/>
        <img v-if="anuncio.categoria == 'servicios'" src="../assets/img/cateServicio.png" alt="imagen cagegoria servicio"/>
        <figcaption>
          <h2>{{ anuncio.titulo }}<span>{{ anuncio.categoria }} - {{ anuncio.ubicacion }}</span></h2>
          <p>{{ anuncio.descripcion }} </p>
          <p>{{ anuncio.nombre }} </p>
          <p>{{ anuncio.telefono }} </p>
          <p>{{ anuncio.fecha }} </p>
          <p>{{ anuncio.id }} </p>
          <!-- <a href="#" class="follow">Follow</a> -->
          <button class="botonDetalles full-rounded" type="button" @click="EliminarPost(anuncio.id)">
          <span>Eliminar</span>
          <div class="border full-rounded"></div></button>
          <!-- <a href="#" class="info">More Info</a> -->
        </figcaption>
      </figure>
   
      <!-- comparacion para colocar la imagen -->
      <img v-if="anuncio[3] >= 0.5" src="../images/rain.png" alt="loading" />
      <img v-if="anuncio[3] < 0.5" src="../images/sunny.png" alt="loading" />
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAllCity, deleteCity} from "../data_api/callApi";
console.log("++++getAllCity", getAllCity);
const anuncios = ref("");

//Se llama automaticamente apenas carga la web
onMounted(async () => {
  try {
    anuncios.value = await getAllCity();
    // anuncios tendra TODA la informacion de la llamada en array
    console.log("++++anuncios.value", anuncios.value);
  } catch (error) {
    console.log(error);
    // Handle error
  }
});

//Funcion para llamar API y eliminar cel post
const EliminarPost = async (id) => {
  console.log("+++Click función ELIMINAR post id: ", id);
  try {
    await deleteCity(id);
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};
</script>

<style scoped>

.weather-summary {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  border-radius: 5%;
  display: inline-block;
  padding: 2rem;
  /* border: 0.5px solid grey; */
}

/* ------------------------------------------------ */
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);
.snip1336 {
  font-family: 'Roboto', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  color: #141414;
  text-align: left;
  line-height: 1.4em;
  background-color: #141414;
  border-radius: 10px;
  box-shadow:
  3.1px 3.9px 5.3px rgba(0, 0, 0, 0.028),
  10.3px 13px 17.9px rgba(0, 0, 0, 0.042),
  46px 58px 80px rgba(0, 0, 0, 0.07)
;
}

.snip1336:hover{
  box-shadow:
  0px 0px 5.3px rgba(0, 0, 0, 0.069),
  0px 0px 17.9px rgba(0, 0, 0, 0.101),
  0px 0px 80px rgba(0, 0, 0, 0.17)
;
}
.snip1336 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.snip1336 img {
  max-width: 100%;
  vertical-align: top;
  opacity: 0.85;
}
.snip1336 figcaption {
  width: 100%;
  background-color: #EBEEF6;
  padding: 8px 25px;
  position: relative;
}
/* .snip1336 figcaption:before {
  position: absolute;
  content: '';
  bottom: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 55px 0 0 400px;
  border-color: transparent transparent transparent #EBEEF6;
} */
.snip1336 figcaption a {
  padding: 5px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 0.7em;
  text-transform: uppercase;
  margin: 10px 0;
  display: inline-block;
  opacity: 0.65;
  width: 47%;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
.snip1336 figcaption a:hover {
  opacity: 1;
}
.snip1336 .profile {
  border-radius: 50%;
  position: absolute;
  bottom: 100%;
  left: 25px;
  z-index: 1;
  max-width: 90px;
  opacity: 1;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.snip1336 .follow {
  margin-right: 4%;
  border-color: #FF4879;
  color: #FF4879;
}
.snip1336 h2 {
  margin: 0 0 5px;
  font-weight: 300;
}
.snip1336 h2 span {
  display: block;
  font-size: 0.7em;
  color: #FF4879;
}
.snip1336 p {
  margin: 0 0 3px;
  font-size: 0.8em;
  letter-spacing: 1px;
  /* opacity: 0.8; */
}



.botonDetalles {
 color: #FF4879;
 border: 0.1rem solid #FF4879;
 padding: .5em 2em .5em 2em;
}
.link{
  font-size: .9rem;
  text-decoration: none;
  color: #FF4879;
}

.botonDetalles :hover {
  opacity: .6;
}

/* .full-rounded {
 border-radius: 2em;
} */


</style>
