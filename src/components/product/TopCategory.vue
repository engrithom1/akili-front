<template>
    
    <div class="card-banner border-bottom">
        <div class="py-3" style="width:80%">
            <h6 class="card-title">{{ category.name }}</h6>
            <router-link :to="'/category/'+category.id" class="btn btn-warning btn-sm">View more</router-link>
        </div>
        <router-link :to="'/category/'+category.id">
            <img :src="this.$store.state.api_image_url+category.thumb" height="80" class="img-bg" />
        </router-link>
    </div>
    
</template>

<script>


export default {
    name:'TopCategory',
    props:{
        category:Object
    }
}
   
</script>
