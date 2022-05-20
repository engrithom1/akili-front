<template>
   <div class="container body-container">
  
    
        <!-- =============== SECTION DEAL =============== -->
        <section class="padding-bottom">
            <div class="card card-deal">
                <div class="col-heading content-body">
                    <header class="section-heading">
                        <h3 class="section-title">{{category.name}}</h3>
                        
                    </header>
                    <!-- sect-heading -->
                    
                    <div class="add-image">
                       <img class="img img-fluid" :src="this.$store.state.api_image_url+category.banner"> 
                    </div>
                </div>
                <!-- col.// -->
                <div class="row no-gutters items-wrap">
                    <div class="col-6 col-md-3 col-sm-6" v-for="product in products" :key="product.id">
                       <ProductTop :product="product" /> 
                    </div> 
                    
                </div>
            </div>
        </section>
        <!-- =============== SECTION DEAL // END =============== -->

        <!-- =============== SECTION 1 sample 4 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">RECOMMENDED ITEMS</h4>
            </header>

            <div class="card card-home-category">
                <div class="row">
                    <div class="col-6 col-md-2 col-sm-6" v-for="product in recomendeds" :key="product.id">
                       <RecommendedItem :product="product" /> 
                    </div>    
                </div>
                <!-- row.// -->
                <div class="text-center m-3">
                    
                        <button class="btn-width">MORE PRODUCTS</button>
                   
                </div>
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->
       

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
          recomendeds:[],
          category:{},
         
      }
  },
  computed:{
      
  },
  components:{
    ProductTop,
    RecommendedItem,
    TopCategory
  },
  methods:{

      getProducts(id){
          axios
      .get(this.$store.state.api_url+'/products-category/'+id)
      .then(response => {
          this.products = response.data[0];
          this.recomendeds = response.data[1];
          //console.log(response.data);
          });
      },
      getCategory(id){
          axios
      .get(this.$store.state.api_url+'/get-category/'+id)
      .then(response => {  
          this.category = response.data;
          console.log(response.data);
          });
      }
  },
  created (){
      
     this.getProducts(this.$route.params.id);
     this.getCategory(this.$route.params.id);
     //axios.defaults.headers.common["Authorization"] = "Bearer "+localStorage.getItem("user_token");
  }
}
</script>

<style scoped>
     .btn-width{
        padding: 8px 12px;
        font-weight: 600;
        font-size: 16px;
        border-radius: 4px;
        transition: all .3s;
        border: 1px solid transparent;
        background: #333;
        color: #fff;
     }
     .btn-width:hover{
        background: #ff9017; 
     }

     @media only screen and (max-width: 767px) {
         .btn-width{
            padding: 4px 8px;
            font-weight: 400;
            font-size: 13px;  
         }
     }
</style>
