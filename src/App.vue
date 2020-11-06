<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1>FrostedBacon Store</h1>
      </router-link>
    </div>
    <div id="left">
      <router-link to="/browse">
        <div class="menu-item browse">
          <h2>Browse</h2>
        </div>
      </router-link>
    </div>
    <div id="side">
      <div v-if="emptyCart">
        <router-link to="/cart">
          <div class="menu-item">
            <h2>Your Cart: {{cart}}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <router-view />
</div>
</template>


<script>
export default {
  computed: {
    cart() {
      return this.$root.$data.cartSize;
    },
    emptyCart() {
      if(this.$root.$data.cartSize > 0) {
        return true;
      } else {
        return false;
      }
    }
  
  },
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#left{
  text-align: left;
}


</style>
