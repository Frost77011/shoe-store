<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="info">
        <router-link :to="product.page">
            <h1>{{product.name}}</h1>
        </router-link>
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" v-on:click="addCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  }, 
  methods: {
    addCart(product) {
      this.$root.$data.cartSize += 1;
      this.$root.$data.cart.push(product);
      this.$root.$data.empty = false;
    }
  }
}
//<button class="auto" @click="addCart(product.name)">Add to Cart</button>
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover
}

.product .image {
  display: flex;
  justify-content: center;
}

.info {
  background: #48dbee;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
  
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}


button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

button:hover{
  background: rgb(50, 143, 50);
}

.auto {
  margin-left: auto;
}
</style>