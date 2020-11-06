<template>
<div>
      <div class="container">
        <div class="row">
          <div class="col-md shoeFormat">
            <p><img src="/images/productpage/Ultraboost_20_Shoes_Black_EG0691_01_standard.jpg" class="shoe_page"></p>
          </div>
          <div class="col-md shoeFormat">
              <h1>ULTRABOOST 20 SHOES</h1>
            <p class="price"><strong>Adidas</strong><br>$150</p>
            <p>A new day. A new run. Make it your best. These high-performance shoes feature a foot-hugging knit upper. Stitched-in reinforcement is precisely placed to 
                give you support in the places you need it most. The soft elastane heel delivers a more comfortable fit. Responsive cushioning returns energy to your stride 
                with every footstrike for that I-could-run-forever feeling.</p>
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

button {
  height: 50px;
  background: #32ad57;
  color: white;
  border: none;
}

</style>