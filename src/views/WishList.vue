<template>
    <div class="container body-container mt-3">
    
     <!-- =============== SECTION 1 sample 2 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">ITEMS IN WISHLIST</h4>
            </header>

           <div class="card card-home-category product-details">
                <div v-for="product in items" :key="product.id" class="item-row">
                    <WishlistItem :product="product"/>
                </div>
               
               <div class="mt-3">
                    <router-link to="/" class="back">Back to shop</router-link>
                    <a href="#" @click="clearWishlist" class="clear-cart">Clear List</a>
                </div>
                <!-- row.// -->
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->   
    </div> 
</template>

<script>
import WishlistItem from "../components/product/WishlistItem.vue"

export default {
    data(){
        return{

        }
    },
    components:{
        WishlistItem
    },
    computed:{
        items(){
            return this.$store.getters.getWishlistItems
        }
    },
     methods:{
        clearWishlist(){
            this.$store.commit('clearWishlist');
        }
    }
}
</script>

<style scoped>
     .item-row{
        border-bottom: #888 1px solid;
        margin-top:2%;
     }
     .item-row:hover{
        
     }

     @media only screen and (max-width: 767px) {
    .product-details{
        padding-left:5%;
        padding-right:5%;
    }
    
     .item-row{
        padding-bottom: 5%;
    }
    }
</style>