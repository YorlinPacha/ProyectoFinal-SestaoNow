<template>
  <section class="contenedorSlider">
    <div class="section_hero">
      <div class="d-sm-flex align-items-center justify-content-between section_slider">
        <div class="col-md-4 mx-auto mb-4 mb-sm-0 headline cajaTextoPadre">
          <h1 class="display-4  font-weight-bold cajaTexto">
            ¡Encuentra lo que buscas y ofrece lo que quieras! <span class="textSpan" style="color: #1B1E48">Todo en un mismo lugar</span>
          </h1>
          <li class="botonTexto" v-if="isLoggedIn == false"><RouterLink class="action_btn" to="/registro">Registro</RouterLink></li>
          <li class="botonTexto" v-if="isLoggedIn"><RouterLink class="action_btn" to="/">Bienvenido</RouterLink></li>
        </div>
        <!-- in mobile remove the clippath -->
        <div id="sliderChange" class="col-md-8 h-100 clipped"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
 import { ref, onMounted } from 'vue';
 // -------------------------- Para verificar si esta autenticado o no 1 -------------
import { getAuth, onAuthStateChanged } from "firebase/auth";

 let i = ref(0);
 let slider = ref(null);
 let imagenes = [
   "/img/imagen-1.png",
   "/img/imagen-2.png",
   "/img/imagen-3.png",
   "/img/imagen-4.png"
   
 ];
 let time = 2000;

 function cambiarBanner() {
  //  console.log("imagen del banner");
   slider.value = document.getElementById("sliderChange");
   if (i.value < imagenes.length) {
    //  console.log("contador" + i.value);
     // Agregar imagenes de fondo del banner (background-image) se crea aqui
     slider.value.style.backgroundImage = `url(${imagenes[i.value]})`;
    //  console.log("ruta de imagen", slider.value.style.backgroundImage);
     i.value++;
   } else {
     i.value = 0;
   }
   setTimeout(cambiarBanner, time);
 }

 onMounted(cambiarBanner);

 // -------------------------- Para verificar si esta autenticado o no 2-------------
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>



<style scoped>
li {
  list-style: none;
}

/* .cajaTextoPadre{

  width: 30rem;
} */
.cajaTexto{
  /* border: 1px solid orange; */
  
  color: #1B1E48;
  font-weight: bold;
}
.textSpan{
  font-weight: lighter;
  display: block;
  font-size: 2.3rem;
  margin: 1rem auto;
}

.contenedorSlider{
  display: flex;
  justify-content: center;
  width: 100%;
  /* border: 1px solid orange; */
}

/* .section_hero{
  max-width: 70rem;
} */

#sliderChange{
  z-index: -10;
  /* border: 2px solid blue;  */
}

.clipped {
  /* clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%); */
  min-height: 350px;
  /* background-image: url(../assets/img/imagen-1.png); */
  background-position: center;
  background-size: cover;
  /* border: 1px solid red; */
  
}
.section_hero{
  width: 90%;
  /* height: 100vh; */
}
.section_slider{
  width: 100%;
  height: 80vh;
  /* border: 1px solid red; */
}
/* -------------------- */
/* estilos del boton */
.action_btn {
  background-color: #FF4879;
  color: #fff;
  padding: 1rem 1.3rem;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: scale 0.2 ease;
  text-decoration: none;
 
}

.action_btn:hover {
  scale: 1.05;
  color: #fff;
}

.action_btn:active {
  scale: 0.95;
}

.botonTexto{
  margin: 3rem auto 1rem auto;
}

/*------------------- RESPONSIVE DESIGN --------------------*/
/* se ocultaran cuando sea menos de este tamaño */
@media (max-width: 992px) {
  .section_slider{
  width: 100%;
  height: 50vh;
}

.cajaTexto{
 font-size: 2rem;
}
.textSpan{
  font-size: 1.5rem;
}

}

@media (max-width: 576px) {
  .section_slider{
  width: 100%;
  height: 30vh;
}

.clipped {
  clip-path: none;
  min-height: 350px;
  /* background-image: url(../assets/img/imagen-1.png); */
  background-position: center;
  background-size: cover;
  /* border: 1px solid red; */
}

.contenedorSlider{
  height: 35rem;
}
}
</style>

