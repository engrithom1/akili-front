<template>
     
    <div class="product-grid6">
        <div class="product-image6">
            <a href="#">
                <img class="pic-1" :src="'http://127.0.0.1:8000/images/'+product.thumb">
            </a>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">{{product.name}}</a></h3>
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
         },
          addToWishlist(){
          //alert(this.quantity)
           this.$store.commit('addToWishlist' ,this.product)
        }
     }
}
</script>

<style scoped>

</style>