<template>
<div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


      <div class="container">
        <div class="row">
          <div class="col-md shoes">
              <router-link to="/ULTRABOOST20">
                <img src="/images/shoes2.jpg" class="shoes"><p>ULTRABOOST 20 SHOES<br>$180</p>
              </router-link>
        </div>
        <div class="col-md shoes">
            <router-link to="/X9000L4">
              <img src="/images/shoes1.jpg" class="shoes"><p>X9000L4 Shoes<br>$150</p>
            </router-link>
        </div>
        <div class="col-md shoes">
            <router-link to="/PUREMOTION">
              <img src="/images/puremotion.jpg" class="shoes"><p>PUREMOTION SHOES<br>$70</p>
            </router-link>
          </div>
        </div>
      </div>


      <router-link to="/Browse"><div class="storeButton"><span>Full Store</span></div></router-link>
    
</div>
</template>


<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
.bg {
    background-image: url("/images/header.jpg");
    height: 45%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
}

.shoes{
    height:100%;
    width: 100%;
    
}



  footer {
    padding-top: 200px;
}

</style>