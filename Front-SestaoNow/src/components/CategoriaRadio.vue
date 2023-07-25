<template>
    <!--------- seccion de seleccion de genero ------->
    <div class="radio-inputs">
      <label>
        <input
          class="radio-input"
          type="radio"
          name="engine"
          value="todo"
          id="todo"
          v-model="selectedOption"
        
        />
        <span class="radio-tile">
          <span class="radio-icon">
            <img src="../assets/img/todo.png" alt="icono de una mujer" title="icono mujer"/>
          </span>
          <span class="radio-label">Todo</span>
        </span>
      </label>
      <label>
        <input
          class="radio-input"
          type="radio"
          name="engine"
          value="comida"
          id="comida"
          v-model="selectedOption"
        
        />
        <span class="radio-tile">
          <span class="radio-icon">
            <img src="../assets/img/comida.png" alt="icono de una mujer" title="icono mujer"/>
          </span>
          <span class="radio-label">Comida</span>
        </span>
      </label>
      <label>
        <input
          class="radio-input"
          type="radio"
          name="engine"
          value="empleo"
          id="empleo"
          v-model="selectedOption"
        />
        <span class="radio-tile">
          <span class="radio-icon">
            <img src="../assets/img/trabajo.png" alt="icono de un hombre" title="icono hombre"/>
          </span>
          <span class="radio-label">Empleo</span>
        </span>
      </label>
      <label>
        <input
          class="radio-input"
          type="radio"
          name="engine"
          value="servicios"
          id="servicios"
          v-model="selectedOption"
        />
        <span class="radio-tile">
          <span class="radio-icon">
            <img
              src="../assets/img/servicio.png"
              alt="icono de un niño o una niña"
              title="icono niñ@"
            />
          </span>
          <span class="radio-label">Servicios</span>
        </span>
      </label>
    </div>

    <!-- <p>Store prueba {{ obtenerCategoriaStore.storeCategotia }}</p> -->
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  //6
  import { useSestaoStore } from '../store/postStore';
  const obtenerCategoriaStore = useSestaoStore();
  const selectedOption = ref('');
  
  function handleOptionSelection() {
    // Imprimir la opción seleccionada en la consola
    console.log("Imprimir la opción seleccionada", selectedOption.value);
  }

  //7
  watch(() => selectedOption.value, (newOption) =>{
    selectedOption.value = newOption;
    obtenerCategoriaStore.storeCategotia = selectedOption.value;
    console.log("almacenar la opción seleccionada", obtenerCategoriaStore.storeCategotia);
})

  </script>
  

<style scoped>
.radio-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-inputs > * {
  margin: 6px;
}

.radio-input:checked + .radio-tile {
  border-color: #000;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #000;
}

.radio-input:checked + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
  background-color: #000;
  border-color: #000;
}

.radio-input:checked + .radio-tile .radio-icon svg {
  fill: #000;
}

.radio-input:checked + .radio-tile .radio-label {
  color: #000;
}

.radio-input:focus + .radio-tile {
  border-color: #000;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
}

.radio-input:focus + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
}

.radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 125px;
  min-height: 125px;
  border-radius: 0.5rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
}

.radio-tile:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
}

.radio-tile:hover {
  border-color: #FF4879;
}

.radio-tile:hover:before {
  transform: scale(1);
  opacity: 1;
}

.radio-icon svg {
  width: 2rem;
  height: 2rem;
  fill: #494949;
}
.radio-icon img {
  width: 3rem;
  height: 3rem;
}

.radio-label {
  color: #707070;
  transition: 0.375s ease;
  text-align: center;
  font-size: 1rem;
  padding-top: 1rem;
}

.radio-input {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}


/*------------------- RESPONSIVE DESIGN --------------------*/
/* se ocultaran cuando sea menos de este tamaño */
@media (max-width: 992px) {

}

@media (max-width: 576px) {

}
</style>