
<template>
  <Navbar/>
  <div class="">  
  <router-view :key="$route.fullPath"/>
  </div>
  <Footer/>
<!--footer-->
</template>

<script>
    import Navbar from "./components/layouts/NavBar.vue";
    import Footer from "./components/layouts/MyFooter.vue";

    export default{
        components:{
          Navbar,
          Footer
        },
        mounted(){
          this.$store.commit('updateCartFromLocalStorage')
          this.$store.commit('updateUserFromLocalStorage')
          this.$store.commit('updateWishlistFromLocalStorage')
        }
    }
</script>

<style>
  /*@import './assets/css/bootstrap.css';
  @import './assets/css/ui.css';
  @import './assets/css/responsive.css';
  @import './assets/css/all.min.css';
  @import './assets/css/mine.css';
  /*@import './assets/js/jquery.min.js';*/
  /*@import './assets/js/bootstrap.bundle.min.js';*/
</style>
