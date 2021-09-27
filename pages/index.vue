<template>
  <div class="container-fluid">
    <Header />
    <!-- <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Products</h2>
    <ProductList />
    <hr />
    <ShoppingCart /> -->
  </div>
</template>




<script lang="ts">
import Vue from 'vue'
import { currency } from '../plugins/currency'
import Header from '../components/Layout/Header.vue';
// import ProductList from '../components/ProductList.vue'
// import ShoppingCart from '../components/ShoppingCart.vue'
Vue.filter('currency', currency)
export default Vue.extend({
  components: { Header },
})
</script>
<style scoped>
.container-fluid {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f7f0f6;
}
</style>
