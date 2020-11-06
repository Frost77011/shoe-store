<template>
<div>
    <h1>Your Cart</h1>
    <div v-if="this.$root.$data.empty">
        <p>The cart is empty!</p>   
    </div>
    <div v-else>
        <CartList :products="products" />
    </div>
    <footer>https://github.com/</footer>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
    name: 'Cart',
    components: {
        CartList
    },
    data() {
        return{
            cart: '',
        }
    },
    computed: {
        products() {
            return this.$root.$data.cart;
        }
    }
}
</script>