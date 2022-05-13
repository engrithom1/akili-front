<template>
    <div class="row">
        <div class="col-sm-4 col-md-1 col-4">
            <img :src="this.$store.state.api_image_url+product.thumb" :alt="product.name">
        </div>    
        <div class="col-sm-8 col-md-8 col-8">
            <router-link v-bind:to="'/product/'+product.slug+'/'+product.id"><h5>{{product.name}}</h5></router-link>
        </div>

        <div class="col-sm-10 col-md-2 col-10">
            <p>TZS {{product.price.toLocaleString()}}</p>
        </div>
        <div class="col-sm-2 col-md-1 col-2">
            <button @click="removeFromWishlist" class="btn btn-danger">x</button>
        </div>    
    </div>
</template>

<script>

export default {
   name: 'WishlistItem',
     props:{
         'product':Object
     },
     data(){
         return{
            
         }
     },
     methods:{
        
        removeFromWishlist(){
            this.$store.commit('removeFromWishlist',this.product)
        }
     }
}

</script>

<style scoped>
  @media only screen and (max-width: 767px) {
    
    .btn{
        padding:2px 6px;
    }
    .form-control{
        padding:0px 0px !important;
        height: 24px;
    }
    }
</style>
