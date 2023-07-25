import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//importando firebase ------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKi4s36AJ-_u6BKXT8ZTbBMCQA5em18M",
  authDomain: "sestao-now.firebaseapp.com",
  projectId: "sestao-now",
  storageBucket: "sestao-now.appspot.com",
  messagingSenderId: "235283033833",
  appId: "1:235283033833:web:6e36a96bb122533d704a78"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// -------------------------------------------------

// 1-----pinia----
import { createPinia } from 'pinia'
import { useSestaoStore } from './store/postStore'
// 2-----pinia----
const pinia = createPinia();

const app = createApp(App)

app.use(router)
// 3-----pinia----
app.use(pinia).provide("$store", useSestaoStore())
app.mount('#app')
