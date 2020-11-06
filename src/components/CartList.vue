<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" v-on:click="removeCart(product)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  }, 
  methods: {
    removeCart(product) {
      this.$root.$data.cartSize -= 1;
      let index = this.$root.$data.cart.indexOf(product);
      this.$root.$data.cart.splice(index, 1);
      if(this.$root.$data.cart.length === 0) {
          this.$root.$data.empty = true;
      }
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
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #282cf0;
  color: rgb(255, 255, 255);
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
  background: rgb(26, 136, 31);
  color: white;
  border: none;
}

button:hover{
  background: red;
}

.auto {
  margin-left: auto;
}
</style>