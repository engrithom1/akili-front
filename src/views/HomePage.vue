<template>
   <div class="container body-container">
  <!-- ========================= SECTION MAIN  =========================
        col-lg col-md-3 flex-lg-grow-0 -->
        <section class="section-main padding-y">
            <main class="card">
                <div class="card-body">
                    <div class="row">
                        <aside class="col-lg col-md-3 flex-lg-grow-0">
                            <nav class="nav-home-aside">
                                <h6 class="title-category">
                                    MY MARKETS
                                </h6>
                                <ul class="menu-category">
                                    <li  v-for="tag in tags" :key="tag.id">
                                        <router-link :to="'/tag/'+tag.id"><span class="sp-img"><img :src="this.$store.state.api_image_url+tag.thumb"
                                                    class="span-img" alt=""></span> {{ tag.name }}</router-link>
                                    </li>

                                </ul>
                                <div class="text-center h-100" v-if="!tags.length">
                                    <img width="50" height="50" src="assets/images/icons/loading.gif" class="img img-fluid mt-5" alt=""/>
                                </div>
                            </nav>
                        </aside>
                        <!-- col.// -->
                        <div class="col-md-7 col-xl-7 col-lg-7">
                            <!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
                            <div id="carousel1_indicator" class="slider-home-banner carousel slide"
                                data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                                    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="assets/images/posts/2.jpg" alt="First slide" />
                                        <div class="carousel-caption">
                                            <h5>Nice products</h5>
                                            <p>Some content for the first slide.</p>
                                            <button class="btn btn-warning">Buy now</button>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/images/banners/banner9.jpg" alt="Second slide" />
                                        <div class="carousel-caption">
                                            <h5>Nice products</h5>
                                            <p>Some representative placeholder.</p>
                                            <button class="btn btn-warning">View more</button>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/images/posts/1.jpg" alt="Third slide" />
                                        <div class="carousel-caption">
                                            <h5>Nice products</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                            <button class="btn btn-warning">Buy now</button>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carousel1_indicator" role="button"
                                    data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel1_indicator" role="button"
                                    data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->
                        </div>
                        <!-- col.//col-md d-none d-lg-block flex-grow-1 -->
                        <div class="col-sm-6 col-md-2 popular-category">
                            <aside class="special-home-right h-100">
                                <h6 class="bg-warning text-center text-white mb-0 p-2">Popular category</h6>
                                <div v-for="category in categories" :key="category.id">
                                    <TopCategory :category="category"/>
                                </div>
                                <div class="text-center h-100" v-if="!categories.length">
                                    <img width="50" height="50" src="assets/images/icons/loading.gif" class="img img-fluid mt-5" alt=""/>
                                </div>
                            </aside>
                        </div>
                        <!-- col.// -->
                    </div>
                    <!-- row.// -->
                </div>
                <!-- card-body.// -->
            </main>
            <!-- card.// -->
        </section>
        <!-- ========================= SECTION MAIN END// ========================= -->

        <!-- =============== SECTION DEAL =============== -->
        <section class="padding-bottom">
            <div class="card card-deal">
                <div class="col-heading content-body">
                    <header class="section-heading">
                        <h3 class="section-title">Deals and offers</h3>
                        <!--p>Hygiene equipments</p-->
                    </header>
                    <!-- sect-heading -->
                    <!--div class="timer">
                        <div>
                            <span class="num">04</span>
                            <small>Days</small>
                        </div>
                        <div>
                            <span class="num">12</span>
                            <small>Hours</small>
                        </div>
                        <div>
                            <span class="num">58</span>
                            <small>Min</small>
                        </div>
                        <div>
                            <span class="num">02</span>
                            <small>Sec</small>
                        </div>
                    </div-->
                    <div class="add-image">
                       <router-link to="/">
                           <img class="img img-fluid" src="/assets/images/items/8.jpg">
                       </router-link> 
                    </div>
                </div>
                <!-- col.// -->
                <div class="row no-gutters items-wrap">
                    <div class="col-6 col-md-3 col-sm-6" v-for="product in offers" :key="product.id">
                       <ProductTop :product="product" /> 
                    </div>
                    <div v-if="!offers.length" class="col-12 text-center">
                        <img width="50" height="50" src="/assets/images/icons/loading.gif" class="img img-fluid mt-5" alt=""/> 
                    </div>
                </div>
            </div>
        </section>
        <!-- =============== SECTION DEAL // END =============== -->

        <!-- =============== SECTION 1 sample 4 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">POPULAR PRODUCTS</h4>
            </header>

            <div class="card card-home-category">
                <div class="row">
                    <div class="col-6 col-md-3 col-sm-6" v-for="product in products" :key="product.id">
                       <ProductTop :product="product" /> 
                    </div>
                    <div v-if="!products.length" class="col-12 text-center mb-5 mt-5">
                        <img width="50" height="50" src="/assets/images/icons/loading.gif" class="img img-fluid loading-img" alt=""/> 
                    </div>    
                </div>
                <!-- row.// -->
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->
       
        <!-- =============== SECTION 1 sample 6 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">RECOMMENDED ITEMS</h4>
            </header>

            <div class="card card-home-category">
                <div class="row">
                    <div class="col-md-2 col-6 col-sm-6" v-for="product in recommendeds" :key="product.id">
                         <RecommendedItem :product="product" />
                    </div>

                    

                    <div v-if="!recomendeds.length" class="col-12 text-center mb-5 mt-5">
                        <img width="50" height="50" src="/assets/images/icons/loading.gif" class="img img-fluid loading-img" alt=""/> 
                    </div>
                </div>
                <div v-if="recomendeds.length">
                    <div v-if="more_btn" class="text-center m-3">
                        <button @click="moreProducts" class="btn-width">MORE PRODUCTS</button>
                    </div>
                </div>
                <!-- row.// -->
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->




        <!-- =============== SECTION REQUEST =============== -->

        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Testimonial</h4>
            </header>

            <div class="row">
                <div class="col-md-12">
                    <section class="testimonial-section2">

                        <div id="testim" class="testim">

                            <!--         <div class="testim-cover"> -->
                            <div class="wrap">

                                <span id="right-arrow" class="arrow right fa fa-chevron-right"></span>
                                <span id="left-arrow" class="arrow left fa fa-chevron-left "></span>
                                <ul id="testim-dots" class="dots">
                                    <li class="dot active"></li>
                                    <!--
                                           -->
                                    <li class="dot"></li>
                                    <!--
                                           -->
                                    <li class="dot"></li>
                                    <!--
                                           -->
                                    <li class="dot"></li>
                                    <!--
                                           -->
                                    <li class="dot"></li>
                                </ul>
                                <div id="testim-content" class="cont">
                                    <div class="active">
                                        <div class="img"><img src="assets/images/misc/template_0.jpg" alt=""></div>
                                        <div class="h4">Kellie</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco.</p>
                                    </div>

                                    <div>
                                        <div class="img"><img src="assets/images/misc/template_0.jpg" alt=""></div>
                                        <div class="h4">Jessica</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco.</p>
                                    </div>

                                    <div>
                                        <div class="img"><img src="assets/images/misc/template_0.jpg" alt=""></div>
                                        <div class="h4">Kellie</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco.</p>
                                    </div>

                                    <div>
                                        <div class="img"><img src="assets/images/misc/template_0.jpg" alt="">
                                        </div>
                                        <div class="h4">Jessica</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco.</p>
                                    </div>

                                    <div>
                                        <div class="img"><img src="https://image.ibb.co/gUPag7/image.jpg" alt=""></div>
                                        <div class="h4">Kellie</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!--         </div> -->
                    </section>
                </div>

            </div>
            <!-- row // -->
        </section>

        <!-- =============== SECTION REQUEST .//END =============== -->


        <!-- =============== SECTION SERVICES =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Trade services</h4>
            </header>

            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="assets/images/posts/1.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Trade Assurance</h6>
                            <p class="small text-uppercase text-muted">Order protection</p>
                        </div>
                    </article>
                    <!-- card.// -->
                </div>
                <!-- col.// -->
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="assets/images/posts/2.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Pay anytime</h6>
                            <p class="small text-uppercase text-muted">Finance solution</p>
                        </div>
                    </article>
                    <!-- card.// -->
                </div>
                <!-- col.// -->
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="assets/images/posts/3.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Inspection solution</h6>
                            <p class="small text-uppercase text-muted">Easy Inspection</p>
                        </div>
                    </article>
                    <!-- card.// -->
                </div>
                <!-- col.// -->
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="assets/images/posts/4.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Ocean and Air Shipping</h6>
                            <p class="small text-uppercase text-muted">Logistic services</p>
                        </div>
                    </article>
                    <!-- card.// -->
                </div>
                <!-- col.// -->
            </div>
            <!-- row.// -->
        </section>
        <!-- =============== SECTION SERVICES .//END =============== -->



        <article class="my-4">
            <!--img src="assets/images/banners/ad-sm.png" class="w-100" /-->
        </article>

        
    </div>    
</template>

<script>
import axios from 'axios'
import ProductTop from '../components/product/ProductTop.vue'
import RecommendedItem from '../components/product/RecommendedItem.vue'
import TopCategory from '../components/product/TopCategory.vue'

export default {
  data(){
      return {
          products:[],
          offers:[],
          recomendeds:[],
          categories:[],
          tags:[],
          length:6,
          more_btn:true
         
      }
  },
  components:{
    ProductTop,
    RecommendedItem,
    TopCategory
  },
  methods:{

      getProducts(){
          axios
      .get(this.$store.state.api_url+'/products')
      .then(response => {
          this.products = response.data[0];
          this.offers = response.data[1];
          this.recomendeds = response.data[2];
          //console.log(response.data);
          });
      },
      topCategory(){
          axios
      .get(this.$store.state.api_url+'/top-categories')
      .then(response => {  
          this.categories = response.data;
          //console.log(response.data);
          });
      },
      topTags(){
          axios
      .get(this.$store.state.api_url+'/top-tags')
      .then(response => {  
          this.tags = response.data;
          console.log(response.data);
          });
      },
      moreProducts(){

          this.length = this.length + 6;

          if (this.length >= this.recomendeds.length){
              this.more_btn = false;
          }
            
        }
  },
  computed: {
        recommendeds() {
            return this.recomendeds.slice(0, this.length);
        }
  },
  created (){
     
     
     this.getProducts();
     this.topCategory();
     this.topTags();
     axios.defaults.headers.common["Authorization"] = "Bearer "+localStorage.getItem("user_token");
  }
}
</script>

<style scoped>
.loading-img{
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: auto !important;
    margin-bottom: auto !important;
    
}
</style>
