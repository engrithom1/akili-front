<template>
<div class="container body-container">
    <section class="padding-bottom">
		<div class="card product-details">
			<div class="container-fliud">
                <div class="wrapper row">
                    <div class="col-12 text-center h-100" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.8902106347451!2d39.22604665223386!3d-6.780094713634146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f7f90b236ab%3A0xf54aaa27bd9105b9!2sAkilikubwa%20digital!5e0!3m2!1sen!2stz!4v1653979730008!5m2!1sen!2stz" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- =============== SECTION 1 sample 2 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Talk to Us</h4>
            </header>

           <div class="card card-home-category product-details">
                <!-- row.// -->
               
                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <h5>Talk to us anything about our services</h5>
                        <img src="/assets/images/banners/contactus.JPG" class="mt-3" with="100%" alt="">
                    </div>

                    <div class="col-sm-12 col-md-7">
                        
                        <div class="summary">
                           <div>
                            <div class="form-group">
                                <label for="fullname">Fullname</label>
                                <input type="text" class="form-control" v-model="fullname" id="fullname" placeholder="Andrew Carnigue">   
                            </div>
                            
                            <div class="form-group">
                                <label for="phone">Phone / Email</label>
                                <input type="text" class="form-control" v-model="phonenumber" id="phone" placeholder="phone number or email">
                            </div>
                            <div class="form-group">
                                <label for="phone">Talk to us</label>
                                <textarea class="form-control" v-model="user_desc" id="phone" placeholder="Anything to say" rows="3"></textarea>
                            </div>
                            
                        </div> 
                        </div>
                       
                        <div class="mt-2">
                            <h5>Send to us through whatsapp or email</h5>
                            <!--https://api.whatsapp.com/send/?phone=255686255811&text=sample%20orderd%20by%20richard%20%0ALG%2045inch%20LED%20TV%20with%20amazing%20HD%20x%204%20=%204360000,%20%250AGoPro%20Digital%20camera%20x%202%20=%201100000,%20%250ATotal%20600,000&app_absent=0-->
                            <a href="#" @click="sendEmail" class="back"><i class="fa fa-envelope"> </i> Email</a>
                            <a @click="contactWhatsapp" href="#" class="clear-cart whatsapp"><i class="fab fa-whatsapp"> </i> Whatsapp</a>
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
export default {
     data(){
        return{
          user_desc:"",
          phonenumber:"",
          fullname:""
        }
    },

    methods:{
       sendEmail(){
          
              
            if(this.fullname && this.phonenumber && this.user_desc){
              
               this.$toast.success('Email received!');
              
           }else{
              
               this.$toast.error('fill required fields');
           }   
       },
       contactWhatsapp(){
           
           if(this.fullname && this.phonenumber && this.user_desc){
               window.location.href = this.whatsappText
              
           }else{
              
               this.$toast.error('fill required fields');
           }         
       }
   },
    computed:{
       
        whatsappText(){
            var msg = this.fullname+" says, "+this.user_desc+" , Contact "+this.phonenumber+" , "
           
            let encoded = encodeURI(msg)

            return "https://api.whatsapp.com/send/?phone=255759100526&text="+encoded+"&app_absent=0"
        },
       
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


