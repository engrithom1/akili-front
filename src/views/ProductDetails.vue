
<template>
<div class="container body-container">
    <section class="padding-bottom">
		<div class="card product-details">
			<div class="container-fliud">
        <div class="wrapper row" v-if="!product.id">
          <div class="col-12 text-center h-100" >
              <img width="50" height="50" src="/assets/images/icons/loading.gif" class="img img-fluid mt-5" alt=""/>
          </div>
        </div>  
				<div class="wrapper row" v-if="product.id">
          <div class="col-12 text-center h-100" v-if="!product.id">
              <img width="50" height="50" src="/assets/images/icons/loading.gif" class="img img-fluid mt-5" alt=""/>
          </div>
					<div class="col-md-5">
						
					<img :src="this.$store.state.api_image_url+product.thumb" />
						
					</div>
					<div class="details col-md-7 mt-3">
						<h2 class="">{{ product.name }}</h2>
						
						<p class="product-description">{{ product.desc}}</p>
						<h5 class="price">current price : <span v-if="product.percent">TZS {{ product.price - (product.price * product.percent/100) }}</span> <span v-if="!product.percent">TZS {{ product.price }}</span></h5>
					  <router-link :to="'/category/'+product.category_id"><h5 class="price">{{product.category}}</h5></router-link>
            <div class="mt-5">
                <div class="row">
                    
                    <div class="col-sm-4 col-6">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-dark btn-sm" @click="subItems" id="minus-btn"><i class="fa fa-minus"></i></button>
                            </div>
                            <input type="text" id="qty_input" v-model="quantity" class="form-control"  readonly>
                            <div class="input-group-prepend">
                                <button class="btn btn-dark btn-sm"  @click="addItems" id="plus-btn"><i class="fa fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-6"></div>
                </div>
            </div>
                         
						<div class="action">
							<router-link class="add-to-cart btn btn-default" @click="addToCart" type="button" to="/cart">add to cart</router-link>
              <router-link class="buy-now btn btn-default" @click="addToCart" type="button" to="/checkout">buy now</router-link>
							<button class="like btn btn-default" @click="addToWishlist" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>

    </section>

     <!-- =============== SECTION 1 sample 2 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">RELATED PRODUCTS</h4>
            </header>

           <div class="card card-home-category">
                <div class="row">
                    <div class="col-6 col-md-3 col-sm-6" v-for="product in relateds" :key="product.id">
                       <ProductTop :product="product" /> 
                    </div>    
                </div>
                <!-- row.// -->
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->   
    </div> 
</template>

<script>
import axios from 'axios'
import ProductTop from '../components/product/ProductTop.vue'
export default {

     data(){
      return {
          product:{},
          relateds:[],
          quantity:1
      }
  },
  components:{
    ProductTop,
  },
  methods:{

      getProduct(id){
          axios
      .get(this.$store.state.api_url+'/product/'+id)
      .then(response => {
          this.product = response.data;
           
          //console.log(response.data);
          });
      },
      getRelated(id){
          axios
      .get(this.$store.state.api_url+'/related/'+id)
      .then(response => {
          this.relateds = response.data;
           
          //console.log(response.data);
          });
      },
      addViews(id){
          axios
          .get(this.$store.state.api_url+'/views/'+id).then(response =>{
            response.data
          })
      },

       addItems(){
            if(this.quantity <= 99){
                this.quantity += 1
            }
        },
        subItems(){
             if(this.quantity >= 2){
                this.quantity -= 1
            }
        },
        addToCart(){
          //alert(this.quantity)
           this.$store.commit('addToCartQuantity' ,[this.product,this.quantity])
        },
        addToWishlist(){
          //alert(this.quantity)
           this.$store.commit('addToWishlist' ,this.product)
        }
  },
  created (){
     this.getProduct(this.$route.params.id);
     this.getRelated(this.$route.params.id);
     this.addViews(this.$route.params.id);
     //alert(this.$route.params.id);
  }
    
}

</script>

<style>
.btn-sm{
    border-radius: 0;
}
input { 
    text-align: center; 
    background-color: #fff !important;
}
.padding-bottom{
    margin-top: 20px;
}
.product-details{
    background:#fff !important;
    padding:4%;
}
    img {
  max-width: 100%; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 10px;
  line-height: 1.5em; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: 600; }

.checked, .price span {
  color: #ff9017; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0;
  font-size: 18px; }
  .price, .colors{
      font-size: 16px;
  }

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like, .buy-now {
  background: #ff9017;
  padding: 0.65em 0.85em;
  border: none;
  margin: 1%;
  text-transform: UPPERCASE;
  font-weight: 400;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
.buy-now{
    background: #d7292a;
}
.add-to-cart:hover, .like:hover {
    background:#fff;
    color: #ff9017;
    border:1px solid #ff9017; 
}
.buy-now:hover {
    background:#fff;
    color: #d7292a;
    border:1px solid #d7292a; 
}



.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9017; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@media only screen and (max-width: 767px) {
    .product-details{
        padding-left:5%;
        padding-right:5%;
    }

    .product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: 600; }

  .product-title {
  font-size: 16px; }
  .price, .colors{
      font-size: 14px;
  }
}            

</style>