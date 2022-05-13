<template>
     
        <div class="product-grid4 mb-1">
            <div class="product-image4">
                <router-link v-bind:to="'/product/'+product.slug+'/'+product.id">
                    <img class="pic-1" :src="this.$store.state.api_image_url+product.thumb">
                    <img class="pic-2" :src="this.$store.state.api_image_url+product.thumb">
                </router-link>
                <ul class="social">
                    <li><a @click="setQuickViewProduct" data-toggle="modal" data-target="#demoModal"><i class="fa fa-eye"></i></a></li>
                    <li><a @click="addToWishlist"><i class="fa fa-heart"></i></a>
                    </li>
                    <li><a @click="addToCart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>

                <span v-if="product.percent" class="product-discount-label">-{{ product.percent}}%</span>
            </div>
            <div class="product-content">
                <h3 class="title">
                    <router-link v-bind:to="'/product/'+product.slug+'/'+product.id">{{ product.name }}</router-link>
                </h3>
                <div v-if="product.percent" class="price">
                    TZS {{ (product.price - (product.price * product.percent/100)).toLocaleString() }}
                    <span>{{ product.price.toLocaleString() }}</span>
                </div>
                <div v-if="!product.percent" class="price">
                    TZS {{ product.price.toLocaleString() }}
                   
                </div>
                <router-link @click="addToCart" class="add-to-cart" to="/cart">ADD TO CART</router-link>
            </div>
        </div>

</template>

<script>
export default {
    name: 'ProductTop',
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
.add-to-cart{
    color:#fff;
}
</style>