<template>
  <!-- <h1>Hola Detalles</h1>
  <pre> {{ anuncioDetalles }}</pre>
  <pre> {{ anuncioDetalles.categoria }}</pre> -->

  <!-- ------------------------------------------------ -->
  <BannerSencillo />
  <div class="contenedorCategorias">
    <div class="card" v-if="isLoggedIn">
      <div class="header">
        <div>
          <a class="title" href="#">
            {{ anuncioDetalles.titulo }}
          </a>
          <p class="nameCateg">{{ anuncioDetalles.categoria }}</p>
          <p class="name">{{ anuncioDetalles.nombre }}</p>
        </div>
        <span class="image">
          <!-- <img
            class="imgSpan"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
            alt="sample87"
          /> -->
          <img class="imgSpan" v-if="anuncioDetalles.categoria == 'comida'" src="../assets/img/cateComida.png" alt="imagen categoria comida"/>
          <img class="imgSpan" v-if="anuncioDetalles.categoria == 'empleo'" src="../assets/img/cateEmpleo.png" alt="imagen categoria empleo"/>
          <img class="imgSpan" v-if="anuncioDetalles.categoria == 'servicios'" src="../assets/img/cateServicio.png" alt="imagen cagegoria servicio"/>
        </span>
      </div>
      <p class="description">
        {{ anuncioDetalles.descripcion }}
      </p>
      <dl class="post-info">
        <div class="cr">
          <dt class="dt">{{ anuncioDetalles.telefono }}</dt>
          <dd class="dd">Contacto!!</dd>
        </div>
        <div class="cr">
          <dt class="dt">{{ anuncioDetalles.fecha }}</dt>
          <dd class="dd">{{ anuncioDetalles.ubicacion }}</dd>
        </div>
      </dl>
    </div>
    <!-- --------------------------------------- mostrar si no esta autenticado ------------- -->
    <div class="notificationCard" v-if="isLoggedIn == false">
      <p class="notificationHeading">Upss!!</p>
      <svg class="bellIcon" viewBox="0 0 448 512">
        <path
          d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
        ></path>
      </svg>
      <p class="notificationPara">
        "Para ver más detalles del anuncio, por favor inicia sesión. Es rápido y sencillo. ¡Descubre lo que te estamos preparando!"
      </p>
      <div class="buttonContainer">
        <!-- <button class="AllowBtn">Allow</button> -->
        <RouterLink class="action_btn" to="/registro">Sign In</RouterLink>
        <!-- <button class="NotnowBtn"> Now </button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerSencillo from "../components/BannerSencillo.vue";
import { useSestaoStore } from "../store/postStore";
import { ref, onMounted, watch } from "vue";
// -------------------------- Para verificar si esta autenticado o no 1 -------------
import { getAuth, onAuthStateChanged } from "firebase/auth";

const store = useSestaoStore();
const anuncioDetalles = ref([]);

anuncioDetalles.value = store.postDetalles;

onMounted(() => {
  console.log("Dentro de detalles", anuncioDetalles.value);
  store.obtenerPostDetalles();
});

watch(
  () => store.postDetalles,
  (newDetalles) => {
    anuncioDetalles.value = newDetalles;
  }
);

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
.contenedorCategorias {
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
}
.card {
  /* max-width: 320px; */
  width: 30rem;
  position: relative;
  display: block;
  overflow: hidden;
  border: 1px solid rgba(243, 244, 246);
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #fff;
  /* --------------------------------- */
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}

.header {
  display: flex;
  justify-content: space-between;
  grid-gap: 1rem;
  gap: 1rem;
}

.title {
  font-size: 1.8rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: rgba(17, 24, 39, 1);
  text-decoration: none;
}

.title:hover {
  text-decoration: underline royalblue;
}

.name {
  margin-top: 0.25rem;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 500;
  color: #FF4879;
}

.nameCateg {
  margin-top: 0.25rem;
  font-size: 1.3rem;
  line-height: 1rem;
  font-weight: 500;
  color: rgba(75, 85, 99, 1);
}

.image {
  display: block;
  flex-shrink: 0;
  height: 10rem;
  width: 10rem;
  border-radius: 0.5rem;
  object-fit: cover;
  /* background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg); */
  /* background-size: cover; */
}
.imgSpan {
  max-width: 100%;
}

.description {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.25rem;
  color: rgba(107, 114, 128, 1);
}

.post-info {
  margin-top: 1.5rem;
  display: flex;
  grid-gap: 1rem;
  gap: 3rem;
}

.cr {
  display: flex;
  flex-direction: column-reverse;
}

.dt {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #ff4879;
}

.dd {
  font-size: 1rem;
  line-height: 1rem;
  color: rgba(107, 114, 128, 1);
}


/* -------------------------------------------------------------------seccion de aviso autenticacion -------------------- */
.notificationCard {
  width: 360px;
  height: 440px;
  background: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
  gap: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.123);
  border-radius: 20px;
}

.bellIcon {
  width: 50px;
  margin: 20px 0px;
}

.bellIcon path {
  fill: #ff4879;
}

.notificationHeading {
  color: #1B1E48;
  font-weight: 600;
  font-size: 2.5rem;
}

.notificationPara {
  color: rgb(133, 133, 133);
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.AllowBtn {
  width: 120px;
  height: 34px;
  background-color: #ff4879;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.NotnowBtn {
  width: 120px;
  height: 25px;
  color: #ff4879;
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 0.7em;
  cursor: pointer;
  border-radius: 20px;
}

.NotnowBtn:hover {
  background-color: rgb(239, 227, 255);
}

.AllowBtn:hover {
  background-color: rgb(153, 110, 255);
}


.action_btn {
  background-color: #FF4879;
  color: #fff;
  padding: .6rem 2rem;
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


/*------------------- RESPONSIVE DESIGN --------------------*/
/* se ocultaran cuando sea menos de este tamaño */
@media (max-width: 992px) {
}

@media (max-width: 576px) {
  .header {
    flex-direction: column;
    align-items: center;
  }
  .post-info {
    justify-content: center;
  }
  .description {
    text-align: center;
  }
}
</style>
