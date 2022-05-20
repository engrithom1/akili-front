<template>
    <div class="container body-container mt-3">
    
     <!-- =============== SECTION 1 sample 2 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">CHECKOUT</h4>
            </header>

           <div v-if="totalPrice" class="card card-home-category product-details">
                <!-- row.// -->
               
                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <h5>Fill this form to place your Order</h5>
                        <div>
                            <div class="form-group">
                                <label for="fullname">Fullname</label>
                                <input type="text" class="form-control" v-model="user.fullname" id="fullname" placeholder="Andrew Carnigue">   
                            </div>
                            <div class="form-group">
                                <label for="region">Region</label>
                                <select class="form-control" v-model="user.region" id="region">
                                    <option value="Arusha">Arusha</option>
                                    <option value="Dar es Salaam">Dar es Salaam</option>
                                    <option value="Dodoma">Dodoma</option>
                                    <option value="Iringa">Iringa</option>
                                    <option value="Kagera">Kagera</option>
                                    <option value="Pemba North">Pemba North</option>
                                    <option value="Zanzibar North">Zanzibar North</option>
                                    <option value="Kigoma">Kigoma</option>
                                    <option value="Kilimanjaro">Kilimanjaro</option>
                                    <option value="Pemba South">Pemba South</option>
                                    <option value="Zanzibar South">Zanzibar South</option>
                                    <option value="Lindi">Lindi</option>
                                    <option value="Mara">Mara</option>
                                    <option value="Mbeya">Mbeya</option>
                                    <option value="Zanzibar West">Zanzibar West</option>
                                    <option value="Morogoro">Morogoro</option>
                                    <option value="Mtwara">Mtwara</option>
                                    <option value="Mwanza">Mwanza</option>
                                    <option value="Pwani">Pwani</option>
                                    <option value="Rukwa">Rukwa</option>
                                    <option value="Ruvuma">Ruvuma</option>
                                    <option value="Shinyanga">Shinyanga</option>
                                    <option value="Singida">Singida</option>
                                    <option value="Tabora">Tabora</option>
                                    <option value="Tanga">Tanga</option>
                                    <option value="Manyala">Manyara</option>
                                    <option value="Geita">Geita</option>
                                    <option value="Katavi">Katavi</option>
                                    <option value="Njombe">Njombe</option>
                                    <option value="Simiyu">Simiyu</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="address">Street Address</label>
                                <input type="text" class="form-control" v-model="user.address" id="address" placeholder="House number and street">
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="form-control" v-model="user.phonenumber" id="phone" placeholder="House number and street">
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-7">
                        <div class="summary">
                            <div>
                                <p class="total"><strong>PRODUCT</strong></p>
                                <p class="total-price"><strong>PRICE</strong></p>
                            </div>
        
                            <table class="table">
                                <tr v-for="product in items" :key="product.id">
                                    <td class="">{{product.name}} <strong>x {{ product.quantity }}</strong></td>
                                    <td class="text-right">{{(product.quantity * product.price).toLocaleString()}}</td>
                                </tr>
                            </table>
                            <hr/>
                            <p class="total"><strong>TOTAL</strong></p>
                            <p class="total-price"><strong class="total">{{totalPrice.toLocaleString()}}</strong></p>
                        </div>
                        <div v-if="!user.name" class="mt-2">
                            <p>before place order</p>
                            <router-link to="/register" class="back">Register</router-link>
                            <router-link to="/login" class="clear-cart">Login</router-link>
                        </div>
                        <div v-if="user.name" class="mt-2">
                            <h5>place your order on whatsapp or direct on this website</h5>
                            <!--https://api.whatsapp.com/send/?phone=255686255811&text=sample%20orderd%20by%20richard%20%0ALG%2045inch%20LED%20TV%20with%20amazing%20HD%20x%204%20=%204360000,%20%250AGoPro%20Digital%20camera%20x%202%20=%201100000,%20%250ATotal%20600,000&app_absent=0-->
                            <a href="#" @click="createOrder" class="back"><i class="fa fa-globe"> </i> Website</a>
                            <a @click="createOrderWhatsapp" href="#" class="clear-cart whatsapp"><i class="fab fa-whatsapp"> </i> Whatsapp</a>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!totalPrice" class="card card-home-category product-details">
                <img src="assets/images/logos/empty.png" class="img img-fluid" alt=""/>
                <h4 class="text-center">Nothing to Checkout!</h4>
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->   
        
    </div> 
</template>

<script>
//import useValidate from '@vuelidate/core'
//import {required} from '@vuelidate/validators'
export default {
    
    data(){
        return{
          
        }
    },
   
   methods:{
       createOrder(){
           var order = {
               user:this.user,
               items:this.items,
               total_price:this.totalPrice
           }
              
           
            if(this.user.fullname && this.user.address && this.user.region && this.user.phonenumber){
               this.$store.dispatch('createOrder',order)
               this.$toast.success('Order received!');
              
           }else{
               //console.log(this.user)
               this.$toast.error('fill required fields');
           }   
       },
       createOrderWhatsapp(){
           //this.v$.$validate();
           if(this.user.fullname && this.user.address && this.user.region && this.user.phonenumber){
               window.location.href = this.whatsappText
              
           }else{
               //console.log(this.user)
               this.$toast.error('fill required fields');
           }         
       }
   },
    computed:{
        items(){
            return this.$store.getters.getCartItems
        },
        whatsappText(){
            var msg = 'Order by '+this.user.fullname+" from "+this.user.region+" , "+this.user.address+" , "
            let items = this.$store.getters.getCartItems
            items.forEach(function (item) {
                msg += item.name+" x "+item.quantity+" = "+(item.quantity*item.price).toLocaleString()+", "
            });
            msg += "Total "+this.totalPrice.toLocaleString()

            let encoded = encodeURI(msg)

            return "https://api.whatsapp.com/send/?phone=255686255811&text="+encoded+"&app_absent=0"
        },
        user(){
            //console.log(this.$store.getters.logedUser)
            return this.$store.getters.logedUser
        },
        totalPrice(){
            return this.$store.getters.totalPrice
        }
    },
    
}
</script>

<style scoped>
     .whatsapp{
         color:#fff;
         background-color: #25D366;
         border: #25D366 1px solid;
     }
      .whatsapp:hover{
         color: #25D366;
         border:  #25D366 1px solid;
         background-color: #fff;
     }
     input {
    text-align:left;
    height: 50px;
    background-color: #fff !important;
   }
    select {
        text-align:left;
        height: 50px;
        background-color: #fff !important;
    }
     
</style>

