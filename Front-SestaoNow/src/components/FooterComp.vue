<template>
   <footer>
        <div class="footer_contenedor">
          <div class="item_footer footer1">
            <h4>Ubicacion</h4>
            <p class="parrafo_footer">Sestao - Vizcaya</p>
          </div>
          <div class="footer2">
            <!-- Style en linea no recomendado, solo puesto por practicidad  -->
          </div>
          <div class="item_footer footer1">
            <h4>Contactanos</h4>
            <a class="enlace_footer" href="mailto:yorlin1517@gmail.com">yorlin1517@gmail.com</a>
          </div>
        </div>
      </footer> 
</template>

<script lang="ts" setup>

</script>

<style scoped>
.footer_contenedor {
  width: 100%;
  height: 9rem;
  background: #E3E6E9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.item_footer {
  width: 25rem;
  /* width: calc(100%/3); */
  /* border: 1px solid #fff; */
  color: #1B1E48;
  text-align: center;
  padding-top: 2rem;
}
.footer2{
    /* background-color: #fff; */
    background-image: url('../assets/img/logo-sestao-removebg.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 13rem;
    height: 100%;
   
    /* border: 1px solid red; */
}

.enlace_footer {
  font-size: 1rem;
  color: #1B1E48;
  text-decoration: none;
}

.fa-brands {
  padding-top: 2rem;
  margin-left: 1rem;
  font-size: 2rem;
}

.fa-brands:hover {
  transform: scale(1.2);
}

.parrafo_footer {
  font-size: 1rem;
  text-align: center;
  color: #1B1E48;
}

/*------------------- RESPONSIVE DESIGN --------------------*/
/* se ocultaran cuando sea menos de este tamaño */
@media (max-width: 992px) {
    .footer_contenedor {
    padding: 0 2rem;
  }
}

@media (max-width: 576px) {
    .footer_contenedor {
    padding: 0 1rem;
    flex-direction: column;
    height: 21rem;
  }
  .item_footer{
    padding-top: 2rem;
    padding-bottom: 2rem;
}
}

</style>