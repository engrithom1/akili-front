<template>
    <div class="container body-container mt-3">
    
     <!-- =============== SECTION 1 sample 2 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">ITEMS IN CART</h4>
            </header>

           <div class="card card-home-category product-details">
             
                <div v-for="product in items" :key="product.id" class="item-row">
                    <CartItem :product="product"/>
                </div>
               
                <!-- row.// -->
                <div class="mt-3">
                    <router-link to="/" class="back">Back to shop</router-link>
                    <a href="#" @click="clearCart" class="clear-cart">Clear cart</a>
                </div>

                <div class="row mt-3">
                    <div class="col-sm-4 col-md-6"></div>
                    <div class="col-sm-8 col-md-6">
                        <div class="summary">
                            <p class="total"><strong>TOTAL</strong></p>
                            <p class="total-price"><strong class="total">{{ totalPrice.toLocaleString() }}</strong></p>
                        </div>
                        <div class="mt-2">
                            <router-link to="/checkout" class="back w-100">Proceed to Checkout</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->   
    </div> 
</template>

<script>
import CartItem from "../components/product/CartItem.vue"

export default {
    data(){
        return{

        }
    },
    components:{
        CartItem
    },
    computed:{
        items(){
            return this.$store.getters.getCartItems
        }
        ,
        totalPrice(){
            return this.$store.getters.totalPrice
        }
    },
    methods:{
        clearCart(){
            this.$store.commit('clearCart');
        }
    }
}
</script>

<style>
     .item-row{
        border-bottom: #888 1px solid;
        margin-top:2%;
     }
     .item-row:hover{
        
     }
    
     .back{
        padding: 0 25px;
        height: 50px;
        line-height: 50px;
        background-color: #ff9017;
        transition: all 0.5s;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        border: none;
        display: inline-block;
     }
     .clear-cart{
        padding: 0 25px;
        height: 50px;
        line-height: 50px;
        transition: all 0.5s;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        border: #000 1px solid ;
        display: inline-block;
        float: right;
     }
    .back:hover{
        border:#ff9017 1px solid;
        color:#ff9017;
         background-color: #fff;
    }
    .clear-cart:hover{
        border:#ff9017 1px solid;
        color:#ff9017;
    }
     .summary{
         border: 1px solid #ccc;
        background-color: #f6f7f9;
        border-radius: 0;
        padding: 30px;
        font-size: 16px;
     }
     .total{
        display: inline-block;
     }
     .total-price{
        display: inline-block;
        float: right; 
     }
     .total-price .total{
         color: #ff9017;
     }
     

     @media only screen and (max-width: 767px) {
    .product-details{
        padding-left:5%;
        padding-right:5%;
    }
    .btn{
        padding:2px 6px;
    }
    .summary{
        
        padding: 15px;
        font-size: 16px;
     }
   
    }
</style>