<template>
  <div class="cajaRegistros">
   <SignIn />
   <RegistroComp /> 
  </div>
  <BannerCompo />
</template>

<script lang="ts" setup>
import RegistroComp from '../components/RegistroComp.vue';
import SignIn from '../components/SignIn.vue';
import BannerCompo from '../components/BannerCompo.vue';
</script>

<style scoped>
.cajaRegistros{
  height: auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  gap: 100px;
  /* margin-bottom: 13rem; */
  flex-wrap: wrap;
  margin-top: 6rem;
}

</style>