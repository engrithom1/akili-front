<template>
     
    <div class="product-grid6">
        <div class="product-image6">
            <router-link v-bind:to="'/product/'+product.slug+'/'+product.id">
                <img class="pic-1" :src="this.$store.state.api_image_url+product.thumb">
            </router-link>
        </div>
        <div class="product-content">
            <h3 class="title">
                <router-link v-bind:to="'/product/'+product.slug+'/'+product.id">{{product.name}}</router-link>
            </h3>
            <div v-if="product.percent" class="price">TZS {{ (product.price - (product.price * product.percent/100)).toLocaleString() }}</div>
            <div v-if="!product.percent" class="price">TZS {{ product.price.toLocaleString() }}</div>
        </div>
        <ul class="social">
            <li><a @click="setQuickViewProduct" data-toggle="modal" data-target="#demoModal"><i class="fa fa-eye"></i></a></li>
            <li><a @click="addToWishlist"><i class="fa fa-heart"></i></a></li>
            <li><a @click="addToCart"><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'RecommendedItem',
     props:{
         'product':Object
     },
     data(){
         return{
            
         }
     },
     methods:{
         setQuickViewProduct(){ 
          this.$store.commit('quickView',this.product)
         },
         addToCart(){
             this.$store.commit('addToCart',this.product)
             this.$toast.show('Added to cart');
         },
          addToWishlist(){
          //alert(this.quantity)
           this.$store.commit('addToWishlist' ,this.product)
           this.$toast.show(`Added to wishlist`);
        }
     }
}
</script>

<style scoped>

</style>