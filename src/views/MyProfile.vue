
<template>
    <div class="container body-container mt-3">
    
     <!-- =============== SECTION 1 sample 2 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">My Profile</h4>
            </header>
            <div class="row">
                <div class="col-sm-12 col-md-8">
                  <div class="card card-home-category product-details">
                    <h5 v-if="orders.length">Waiting Orders</h5>
                    <div v-for="items in orders" :key="items.id" class="summary mb-3">
                            <h5 class="text-center">Order ID : {{items.id}}</h5>
                            
                            <div>
                                <p class="total"><strong>PRODUCT</strong></p>
                                <p class="total-price"><strong>PRICE</strong></p>
                            </div>
        
                            <table class="table">
                                <tr v-for="product in items.order_details" :key="product.id">
                                    <td class="">{{product.name}} <strong>x {{ product.quantity }}</strong></td>
                                    <td class="text-right">{{(product.quantity * product.price).toLocaleString()}}</td>
                                </tr>
                            </table>
                            <hr/>
                            <p class="total"><strong>TOTAL</strong></p>
                            <p class="total-price"><strong class="total">{{items.total.toLocaleString()}}</strong></p>
                    </div>
                    <div v-if="!orders.length" class="card card-home-category product-details">
                      <img src="assets/images/logos/empty.png" class="img img-fluid" alt=""/>
                      <h4 class="text-center">Empty Order !</h4>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div class="card card-home-category product-details">
                    <h5>Change password</h5>
                        <div>
                            <div class="mt-5 form-group">
                                <label for="fullname">Current Password</label>
                                <input type="text" class="form-control" id="fullname" placeholder="Current Password">   
                            </div>
                            <div class="form-group">
                                <label for="phone">New Password</label>
                                <input type="text" class="form-control" id="phone" placeholder="New Password">
                            </div>
                            <div class="form-group">
                                <label for="phone">Confirm Password</label>
                                <input type="text" class="form-control" id="phone" placeholder="Confirm Password">
                            </div>
                            <div class="mt-2">
                              <button @click="changePassword" class="back w-100">Change Password</button>
                            </div>
                        </div>
                  </div>
                </div>
            </div>
        </section>    
           
    </div>        
</template>

<script>
import axios from "axios"
export default {
    data() {
      return{
         orders:[]
      }  
    },
    methods:{
      getOrders(){
          if(this.user.id){
            axios
            .get(this.$store.state.api_url+'/get-orders/'+this.user.id)
            .then(response => {
             this.orders = response.data;
             console.log(response.data);
            });
          }
      },
      changePassword(){
         this.$toast.error('unable to change password');
      }
    },
    computed:{
       user(){
            //console.log(this.$store.getters.logedUser)
            return this.$store.getters.logedUser
        },
    },
    created(){
      this.getOrders()
    }
}
</script>

<style scoped>
    input {
    text-align:left;
    height: 50px;
    background-color: #fff !important;
   }
</style>