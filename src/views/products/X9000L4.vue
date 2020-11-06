<template>
<div>
      <div class="container">
        <div class="row">
          <div class="col-md shoeFormat">
            <p><img src="/images/productpage/X9000.jpg" class="shoe_page"></p>
          </div>
          <div class="col-md shoeFormat">
              <h1>X9000L4 SHOES</h1>
            <p class="price"><strong>Adidas</strong><br>$180</p>
            <p>Always online, always plugged in, always moving forward. These adidas X9000L Shoes are designed for the fast pace and high energy 
                of our hyperconnected world. Floating triangles and supportive underlays create a bold design on the mesh upper. 
                The outsole tread pattern was inspired by computer-generated data and provides reliable traction on city streets.</p>
          </div>
        </div>
      </div>
      <router-link to="/Browse"><div class="storeButton"><span>Back to Browse</span></div></router-link>
</div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
.shoeFormat{
    padding: 60px;
}

.shoe_page {
    filter: drop-shadow(0px 2px 2px rgb(95, 93, 93));
    height:100%;
    width: 100%;
}
</style>