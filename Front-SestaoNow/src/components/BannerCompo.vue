<template>
  <div class="banner-container">
    <div class="banner">
      <div class="shoe">
        <img src="../assets/img/shoe.png" alt="Imagen Zapatos" />
      </div>
      <div class="content">
        <span>descuento</span>
        <h3>50% 0ff</h3>
        <p>finaliza en 5 dias</p>
        <a href="#" class="btn">ver oferta</a>
      </div>
      <!-- <div class="content">
        <span>upto</span>
        <h3>50% 0ff</h3>
        <p>offer ends after 5 days</p>
        <a href="#" class="btn">veiw offer</a>
      </div> -->
      <div class="women">
        <img src="../assets/img/women.png" alt="Imagen de una modelo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
*{
    margin:0; padding:0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    /* border: 1px solid blue; */
}

.text{
    padding:40px;
    background:#eee;
}

.text h3{
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    padding:10px;
}

.banner-container{
    /* max-width: 1200px;
    margin: 0 auto; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-container .banner{
    background:linear-gradient(-55deg, #FF4879 29%, #fff 29.1%, #fff 68%, #FF4879 68.1%);
    border-radius: 5px;
    margin:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 0 5px 10px #0005;
    overflow: hidden;
}

.banner-container .banner .shoe{
    flex:1 1 250px;
    padding:15px;
    text-align: center;
}

.banner-container .banner .shoe img{
    width:80%;
}

.banner-container .banner .content{
    flex:1 1 250px;
    text-align: center;
    padding:10px;
    text-transform: uppercase;
}

.banner-container .banner .content span{
    color:#1B1E48;
    font-size: 25px;
}

.banner-container .banner .content h3{
    color:#1B1E48;
    font-size: 40px;
}

.banner-container .banner .content p{
    color:#1B1E48;
    font-size: 20px;
    padding:10px 0;
}

.banner-container .banner .content .btn{
    display: block;
    height:40px;
    width:150px;
    line-height: 40px;
    background: #1B1E48;
    color:#fff;
    margin:5px auto;
    text-decoration: none;
}

.banner-container .banner .women{
    position: relative;
    bottom: -33px;
    padding:10px;
    flex:1 1 250px;
}

.banner-container .banner .women img{
    width:100%;
}

@media (max-width:768px){
    .banner-container .banner .women{
        display: none;
    }
}</style>
