<template>
    <div class="banner">
      <div class="banner__bg">
        <div class="banner__container">
          <div class="banner__data">
            <h2 class="banner__title">¡Tu voz merece ser escuchada! </h2>
            <p class="banner__description">
              "¡Únete ahora y desata tu creatividad! Regístrate en nuestra plataforma y accede a un mundo de posibilidades. Crea anuncios ilimitados y llega a una audiencia global. ¡Únete a nuestra comunidad de anunciantes y da vida a tus ideas!"
            </p>
            <a href="#Unete" class="button">Únete</a>
          </div>

          <figure>
            <img
              class="banner__img"
              src="../assets/img/banner.png"
              alt="banner"
              width="250"
              height="250"
            />
          </figure>
          
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* border: 1px solid blue; */
}

/* body {
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  padding: 0 20px;
} */

figure {
  display: flex;
}

/* Empezamos con el banner  */

.banner {
  text-align: center;
  /* padding-top: 3rem; */
  margin-bottom: 5rem;
}

.banner__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 0;
}

.banner__bg {
  border-radius: 10px;
  background-color: #FF4879;
  margin-top: 3rem;
}

.banner__title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
}

.banner__description {
  font-size: 18px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
}

.banner__title,
.banner__description {
  color: white;
}

.banner__img {
  width: 250px;
}

/* Btn  */
.button {
  text-decoration: none;
  text-transform: uppercase;
 border-radius: 20px;
  outline: none;
  background-color: #fff;
  padding: 1rem 1.3rem;
  display: flex;
  max-width: fit-content;
  margin: 0 auto;
  color: #FF4879;
  font-size: 12px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.button:hover,
.button:focus {
  background-color: #e7e6e6;
}

@media (min-width: 768px) {
  .banner {
    text-align: left;
  }

  .banner__container {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 30px;
  }

  .button {
    margin-right: auto;
    margin-left: 0;
  }
}
</style>