<template>
  <header>
    <div class="navbar">
      <li><RouterLink class="link" to="/"><div class="logo"></div></RouterLink></li>
      
      <ul class="links">
        <li><RouterLink class="link" to="/">Home</RouterLink></li>
        <li><RouterLink class="link" to="/formulario">Formulario</RouterLink></li>
        <!-- <li><RouterLink class="link" to="/registro">Registro</RouterLink></li> -->
        <button @click="handleSignOut" v-if="isLoggedIn" class="signOutClass">Sign Out</button>
        <!-- <li><a href="contact">Contact</a></li> -->
      </ul>
      <li><RouterLink v-if="isLoggedIn==false" class="action_btn" to="/registro">Sign In</RouterLink></li>
      <li><RouterLink v-if="isLoggedIn" class="links action_btnIngreso" to="/">{{ usuarioIgreso }}</RouterLink></li>
      <div class="toggle_btn" @click="toggleMenu">
        <i :class="menuIcon"></i>
      </div>
    </div>

    <!-- lo que aparecerá cuando se oculte menos de 992px -->
    <div class="dropdown_menu" :class="{ open: isMenuOpen }">
      <ul class="cajaLista">
        <li><RouterLink class="link" to="/">Home</RouterLink></li>
        <li><RouterLink class="link" to="/formulario">Formulario</RouterLink></li>
        <!-- <li><RouterLink class="link" to="/registro">Registro</RouterLink></li> -->
        <button @click="handleSignOut" v-if="isLoggedIn" class="signOutClass">Sign Out</button>
        <!-- <li><a href="contact">Contact</a></li> -->
        <li><RouterLink v-if="isLoggedIn==false" class="action_btn" to="/registro">Sign In</RouterLink></li>
        <li><RouterLink v-if="isLoggedIn" class="links action_btnIngreso" to="/">{{ usuarioIgreso }}</RouterLink></li>
      </ul>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const isMenuOpen = ref(false);
const menuIcon = ref("fa-solid fa-bars");
const usuarioIgreso = ref("");

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  menuIcon.value = isMenuOpen.value ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// -------------------------------------
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth,(user) =>{
    if(user){
      console.log("Ver informacion del usuario en barra",user.reloadUserInfo.email);
      usuarioIgreso.value = user.reloadUserInfo.email;
      isLoggedIn.value=true;
    }else{
      isLoggedIn.value=false;
    }
  });
})



const handleSignOut = () => {
  signOut(auth).then(() => {
    swal("Ohh Adiós!", "Esperamos verte pronto!", "warning");
    router.push("/")
  });
};
</script>


<style scoped>
li {
  list-style: none;
}

a {
  text-decoration: none;
  /* color: #fff; */
  color: #000;
  font-size: 1.2rem;
}

a:hover {
  color: #FF4879;
}

/* HEADER */
header {
  position: relative;
  padding: 0 2rem;
  background-color: #fff;
  backdrop-filter: blur(15px);
}

.navbar {
  width: 100%;
  height: 90px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
}

.logo{
  background-image: url('../assets/img/logo-sestao.png');
  background-repeat: no-repeat;
  background-size:contain;
  width: 9rem;
  height: 4rem;
  /* border: 1px solid red; */
}
.navbar .logo a {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar .links {
  display: flex;
  gap: 2rem;
}

/* menu hamburguesa */
.navbar .toggle_btn {
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
}

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
}

.action_btn:hover {
  scale: 1.05;
  color: #fff;
}

.action_btn:active {
  scale: 0.95;
}
.signOutClass{
  background: none;
  color: #FF4879;
  font-size: 1.2rem;
 border: none;
 margin: auto;
    display: block;

}


/* lo que aparecera cuando se oculte  DROPDOWN MENU*/
.dropdown_menu {
  /* oculto hasta dar click */
  display: none;
  position: absolute;
  right: 2rem;
  top: 60px;
  height: 0;
  width: 300px;
  /* background: rgba(255, 255, 255, 0.1); */
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 10000;
  background: rgba( 255, 255, 255, 1 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
/* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
}

/* esta ul  no se sabe donde aparece */
ul{
  padding: 0;
  margin: 0;
}
/* -AL DAR CLICK EN EL ICONO- */
.dropdown_menu.open {
  /* height: 240px; */
  height: auto;
  z-index: 30000;
}

.dropdown_menu li {
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown_menu .action_btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
/* -----------------------------------nombre del usuario al ingresar en barra--------- */
.action_btnIngreso{
  color: #FF4879;
}

/*------------------- RESPONSIVE DESIGN --------------------*/
/* se ocultaran cuando sea menos de este tamaño */
@media (max-width: 992px) {
  .navbar .links,
  .navbar .action_btn {
    display: none;
  }

  .navbar .toggle_btn {
    display: block;
  }

  .dropdown_menu {
    display: block;
  }
}

@media (max-width: 576px) {
  .dropdown_menu {
    left: 2rem;
    width: unset;
  }
}
</style>
