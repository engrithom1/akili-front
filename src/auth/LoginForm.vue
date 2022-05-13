<template>

<div class="cont">
    <div class="d-flex justify-content-center h-100">
        <div class="card mt-5">
            <div class="card-header">
                <h3>Sign In</h3>
                <!--div class="d-flex justify-content-end social_icon">
                    <span><i class="fab fa-facebook-square"></i></span>
                    <span><i class="fab fa-google-plus-square"></i></span>
                    <span><i class="fab fa-twitter-square"></i></span>
                </div-->
            </div>
            <div class="card-body">
                <form action="#" @submit.prevent="handleLogin">
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" v-model="user.name" name="name" id="name" placeholder="Username" class="form-control">

                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" v-model="user.password" name="password" placeholder="Password" id="password" class="form-control">
                    </div>
                   
                    <div class="form-group">
                        <input type="submit" value="Login" class="btn float-right login_btn">
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-center links">
                    Don't have an account?<router-link to="/register">Sign Up</router-link>
                </div>
                <div class="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//import axios from "axios"

export default {
    name:'LoginForm',
    
    data(){
        return {
            secrets:[],
            user:{
                name:'',
                password:''
            },
            prevRoute: null
        }
    },
    methods:{
       handleLogin(){
          this.$store.dispatch('loginUser',this.user)
       }
       
    },
    created(){
        /*beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from
        },()=>{
            console.log(this.prevRoute.path);
        })
       }*/
    }
}
</script>

<style scoped>
        html,
        .cont {
            /*background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
            background-size: cover;
            background-repeat: no-repeat;*/
            padding-top: 5% !important;
            padding-bottom: 5% !important;
           background-color: #333;
            height: 100% !important;
            font-family: 'Numans', sans-serif;
        }

        .container {
            height: 100% !important;
            align-content: center !important;
        }
        .justify-content-center {
    justify-content: center !important;
}
.d-flex {
    display: flex !important;
}

        .h-100 {
            height: 100% !important;
        }

        .card {
            height: 370px;
            margin-top: auto;
            margin-bottom: auto;
            width: 400px;
            background-color: rgba(0, 0, 0, 0.5) !important;
        }

        .social_icon span {
            font-size: 60px;
            margin-left: 10px;
            color: #ff9017;
        }

        .social_icon span:hover {
            color: white;
            cursor: pointer;
        }

        .card-header h3 {
            color: white;
        }

        .social_icon {
            position: absolute;
            right: 20px;
            top: -45px;
        }

        .input-group>.input-group-prepend>.input-group-text {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .input-group {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-align: stretch;
            align-items: stretch;
            width: 100%;
            margin-bottom: 1rem;
        }

        .input-group-prepend {
            display: flex;
        }

        .input-group-prepend span {
            width: 50px !important;
            background-color: #ff9017;
            color: black;
            border: 0 !important;
        }

        input:focus {
            outline: 0 0 0 0 !important;
            box-shadow: 0 0 0 0 !important;

        }

        .remember {
            color: white;
        }

        .remember input {
            width: 20px;
            height: 20px;
            margin-left: 15px;
            margin-right: 5px;
        }

        .login_btn {
            color: black;
            background-color: #ff9017 !important;
            width: 100px;
            padding: 7px;
            text-align: center;
            font-weight: 600;
        }

        .float-right {
            float: right !important;
        }

        .login_btn:hover {
            color: black;
            background-color: white;
        }

        .links {
            color: white;
        }

        .links a {
            margin-left: 4px;
        }
        .card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);
}

.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
}
input {
    text-align:left;
    background-color: #fff !important;
   }
</style>