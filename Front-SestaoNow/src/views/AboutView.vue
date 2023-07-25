<template>

  <!-- <div class="bannerReg"></div> -->
  <BannerSencilloVue />
  <div>
    <formularioCrudModern class="formularioCrud"/>
    <TodosPost class="todosAnuncios" />
  </div>
  <BannerCompo />
</template>

<script setup>
import TodosPost from '../components/TodosPost.vue'
import FormularioCrudModern from '../components/FormularioCrudModern.vue';
import BannerCompo from '../components/BannerCompo.vue';
import BannerSencilloVue from '../components/BannerSencillo.vue';
</script>

<style scoped>
.todosAnuncios { 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
 }
/* .formularioCrud{
  position: relative;
  z-index: -1;
} */
.bannerReg{
  width: 100%;
  height: 6rem;
  background-color: aqua;
}
</style>
