<template>
<div>
      <div class="container">
        <div class="row">
          <div class="col-md shoeFormat">
            <p><img src="images/productpage/NMD_R1_Shoes_Black_B42200_01_standard.jpg" class="shoe_page"></p>
          </div>
          <div class="col-md shoeFormat">
              <h1>NMD_R1 SHOES</h1>
            <p class="price"><strong>Adidas</strong><br>$140</p>
            <p>Run with it. These adidas NMD_R1 Shoes are a little technical and a lot street smart. Their midsole plugs flash back to the '80s, 
                but the knit upper, full-length cushioned midsole and EVA inserts are 100 percent fashion forward.</p>
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