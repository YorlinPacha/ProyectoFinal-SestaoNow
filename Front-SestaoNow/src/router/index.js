import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/formulario',
      name: 'formulario',
      // which is lazy-loaded when the route is visited. conviene hacerlo asi
      component: () => import('../views/AboutView.vue'),
      meta:{
        requiresAuth: true,
      },
    },
    {
      path: '/detalles',
      name: 'post-detalles',
      // which is lazy-loaded when the route is visited. conviene hacerlo asi
      component: () => import('../components/Detalles-Post.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      // which is lazy-loaded when the route is visited. conviene hacerlo asi
      component: () => import('../views/RegistroView.vue')
    }
  ]
});
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
    getAuth(), 
    (user) =>{
      removeListener();
      resolve(user);
    },
    reject);
  });
}

// router.beforeEach(async(to, from, next) => {
//   if(to.matched.some((record)=> record.meta.requiresAuth)){
//     if(await getCurrentUser()){
//       next();
//     }else{
//       // alert("Tu no tienes Acceso");
//       // swal("Buen trabajo!", "Texto copiado", "success");
//       swal({
//         icon: 'error',
//         title: 'Ups...',
//         text: 'Necesitas registrarte!',
//       })
//       next("/");
//     }
//   }else{
//     next();
//   }
// });

// ---------------------------------------------------------proteccion de ruta a formulario, solo con el correo puede entrar----------
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser();
    if (user) {
      // Verificar el correo del usuario
      if (user.email === "yorlin1517@gmail.com") {
        next();
      } else {
        swal({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'Solo se permite el acceso al Administrator',
        });
        next("/");
      }
    } else {
      swal({
        icon: 'error',
        title: 'Ups...',
        text: 'Necesitas registrarte!',
      });
      next("/");
    }
  } else {
    next();
  }
});



export default router
