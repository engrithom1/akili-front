// eslint-disable-next-line vue/multi-word-component-names

<template>
    <!-- ========================= SECTION SUBSCRIBE  ========================= -->
    <section class="section-subscribe padding-y-lg">
        <div class="container">
            <p class="pb-2 text-center text-white">Delivering the latest product trends and industry news straight
                to your inbox</p>

            <div class="row justify-content-md-center">
                <div class="col-lg-5 col-md-6">
                    <form class="form-row">
                        <div class="col-md-8 col-7">
                            <input class="form-control border-0" placeholder="Your Email" type="email" />
                        </div>
                        <!-- col.// -->
                        <div class="col-md-4 col-5">
                            <button type="submit" class="btn btn-block btn-warning">
                                <i class="fa fa-envelope"></i> Subscribe
                            </button>
                        </div>
                        <!-- col.// -->
                    </form>
                    <small class="form-text text-white-50">We’ll never share your email address with a
                        third-party.</small>
                </div>
                <!-- col-md-6.// -->
            </div>
        </div>
    </section>
    <!-- ========================= SECTION SUBSCRIBE END// ========================= -->

    <!-- ========================= FOOTER ========================= -->
    <footer class="section-footer bg-secondary">
        <div class="container">
            <section class="footer-top padding-y-lg text-white">
                <div class="row">
                    <aside class="col-md col-6">
                        <h6 class="title">Brands</h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">Adidas</a>
                            </li>
                            <li>
                                <a href="#">Puma</a>
                            </li>
                            <li>
                                <a href="#">Reebok</a>
                            </li>
                            <li>
                                <a href="#">Nike</a>
                            </li>
                        </ul>
                    </aside>
                    <aside class="col-md col-6">
                        <h6 class="title">Company</h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Find a store</a>
                            </li>
                            <li>
                                <a href="#">Rules and terms</a>
                            </li>
                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul>
                    </aside>
                    <aside class="col-md col-6">
                        <h6 class="title">Help</h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Money refund</a>
                            </li>
                            <li>
                                <a href="#">Order status</a>
                            </li>
                            <li>
                                <a href="#">Shipping info</a>
                            </li>
                            <li>
                                <a href="#">Open dispute</a>
                            </li>
                        </ul>
                    </aside>
                    <aside class="col-md col-6">
                        <h6 class="title">Account</h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">User Login</a>
                            </li>
                            <li>
                                <a href="#">User register</a>
                            </li>
                            <li>
                                <a href="#">Account Setting</a>
                            </li>
                            <li>
                                <a href="#">My Orders</a>
                            </li>
                        </ul>
                    </aside>
                    <aside class="col-md">
                        <h6 class="title">Social</h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-youtube"></i> Youtube
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
                <!-- row.// -->
            </section>
            <!-- footer-top.// -->

            <section class="footer-bottom text-center">
                <p class="text-muted">&copy; 2021 Company name, All rights reserved</p>
                <br />
            </section>


        </div>
        <!-- //container -->
    </footer>
    <!-- ========================= FOOTER END // ========================= -->

    <!-- Modal -->
        <div class="modal fade auto-off" id="demoModal" tabindex="-1" role="dialog" aria-labelledby="demoModal" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">

                    <div class="container-fluid">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="row">
                            
                            <div class="col-md-5 text-center col-sm-12 py-5 px-sm-5">
                                <img class="img img-fluid" :src="this.$store.state.api_image_url+this.$store.state.quick_view.thumb" />
                            </div>
                            <div class="col-md-7 text-center col-sm-12 py-5 px-sm-5">
                                <h2 class="mt-2">{{ this.$store.state.quick_view.name }}</h2>
                                <h5 class="price">current price : 
                                    <span v-if="this.$store.state.quick_view.percent">TZS {{ this.$store.state.quick_view.price - (this.$store.state.quick_view.price * this.$store.state.quick_view.percent/100) }}</span> 
                                    <span v-if="!this.$store.state.quick_view.percent">TZS {{ this.$store.state.quick_view.price }}</span>
                                </h5>

                                <div class="quantity-input mt-3 mb-3">

                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-dark btn-sm" @click="subItems" id="minus-btn"><i class="fa fa-minus"></i></button>
                                        </div>
                                        <input type="text" v-model="this.quantity" id="qty_input" class="form-control"  readonly>
                                        <div class="input-group-prepend">
                                            <button class="btn btn-dark btn-sm" @click="addItems" id="plus-btn"><i class="fa fa-plus"></i></button>
                                        </div>
                                    </div>
  
                                </div>
                                <div class="action">
                                    <router-link class="add-to-cart btn btn-default" @click="addToCart" to="/cart" type="button" data-dismiss="modal" aria-label="Close">add to cart</router-link>
                                    <router-link class="buy-now btn btn-default" @click="addToCart" to="/checkout" type="button" data-dismiss="modal" aria-label="Close">buy now</router-link>
                                    <router-link class="like btn btn-default" @click="addToWishlist" to="/wishlist" type="button" data-dismiss="modal" aria-label="Close"><span class="fa fa-heart"></span></router-link>
                                </div>
                            </div>
                            <div class="col-md-12 text-center pt-2 pb-5 px-sm-5 ">  
                                <p class="text-muted">{{ this.$store.state.quick_view.desc }}</p> 
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- Modal Ends -->

</template>

<script>
 export default{
     name:'MyFooter',
     data(){
         return{
            quantity:1
         }
     },
     computed:{
         product(){
             return this.$store.state.quick_view
         }
     },
    methods:{
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
            ///alert(this.quantity)
           this.$store.commit('addToCartQuantity' ,[this.product,this.quantity])
         },
          addToWishlist(){
          //alert(this.quantity)
           this.$store.commit('addToWishlist' ,this.product)
        }
    }
 }
</script>

<style scoped>

.modal .modal-content {
    border: 0;
    border-radius: 3px
}

.modal.fade.modal-top-left .modal-dialog {
    width: 100%;
    position: absolute;
    top: 0
}


.modal .close {
    position: absolute;
    z-index: 1;
    right: 10px !important;
    top: 10px !important;
    height: 2.5rem;
    width: 2.5rem;
    background: #ff9017 !important;
    border-radius: 50%;
    font-size: 1.8rem;
    padding: 0
}

.modal .close:focus {
    outline: 0
}

.modal .close span {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    color: transparent;
    text-shadow: none;
    background-position: center
}

.modal .close.light span {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff9017' viewBox='0 0 16 16'%3E%3Cpath d='M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z'/%3E%3C/svg%3E")
}

.modal .close.size-sm {
    transform: scale(.5);
    right: .5rem;
    top: .5rem
}

.modal .close.close-pinned {
    top: -19px;
    right: -19px
}

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
.btn-sm{
    border-radius: 0;
}
input { 
    text-align: center; 
    background-color: #fff !important;
}
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

  .quantity-input{
      align-items: center !important;
      width: 72% !important;
      margin-left: 14% !important;}

  @media only screen and (max-width: 767px) {
     .quantity-input{
      align-items: center !important;
      width: 74% !important;
      margin-left: 13% !important;
    }
   
  }

 

</style>
