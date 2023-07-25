<template >
  <sliderCard class="sliderClass"/>
  <div class="templateClass">
    <CategoriaRadio class="categoriaCss"/>
  </div>
   <BannerCompo />
   <TodosPostFiltroNoLogin class="todosPostFiltro"/>
 </template>

<script setup>
import CategoriaRadio from '../components/CategoriaRadio.vue';
import TodosPostFiltroNoLogin from '../components/TodosPostFiltroNoLogin.vue';
import sliderCard from '../components/sliderCard.vue';
import BannerCompo from '../components/BannerCompo.vue';

     
</script>

<style scoped>

/* .sliderClass{
  height: 100vh;
} */


.todosPostFiltro { 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
 }

 .categoriaCss{
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #000; */
  margin: 3rem auto;
 }

 .templateClass{
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EBEEF6;
  margin: 6rem auto;
 }

 /*------------------- RESPONSIVE DESIGN --------------------*/
/* se ocultaran cuando sea menos de este tamaño */
@media (max-width: 992px) {

}

@media (max-width: 576px) {
  .categoriaCss{
  flex-wrap: wrap;
 }
}

</style>


