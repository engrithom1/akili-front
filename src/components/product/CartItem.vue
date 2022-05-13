<template>
    <div class="row">
        <div class="col-sm-4 col-md-1 col-4">
            <img :src="this.$store.state.api_image_url+product.thumb" :alt="product.name">
        </div>    
        <div class="col-sm-8 col-md-4 col-8">
            <h5>{{product.name}}</h5>
        </div>
        <div class="col-sm-3 col-md-2 col-3">
            <p>{{product.price.toLocaleString()}}</p>
        </div>
        <div class="col-sm-4 col-md-2 col-4">
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
        <div class="col-sm-4 col-md-2 col-4 text-center">
            <p>{{(product.quantity * product.price).toLocaleString()}}</p>
        </div>
        <div class="col-sm-1 col-md-1 col-1">
            <button @click="removeFromCart" class="btn btn-danger">x</button>
        </div>    
    </div>
</template>

<script>

export default {
   name: 'CartItem',
     props:{
         'product':Object
     },
     computed:{
         quantity(){
             return this.product.quantity
         }
     },
     data(){
         return{
            
         }
     },
     methods:{
         addItems(){
            this.$store.commit('addCartQuantity',this.product)
        },
        subItems(){
            this.$store.commit('subCartQuantity',this.product)
        },
        removeFromCart(){
            this.$store.commit('removeFromCart',this.product)
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
