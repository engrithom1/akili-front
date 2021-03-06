import {createStore} from 'vuex'
import axios from 'axios'

function updateLocalStorage(cart){
    localStorage.setItem('cart',JSON.stringify(cart))
}
function updateWishlistLocalStorage(wishlist){
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
}



export default createStore({

    state:{
       user:{},
       cart:[],
       errors:[],
       wishlist:[],
       name:'',
       api_url:"http://localhost:8000/api",//"https://leoleomarket.co.tz/akiliadmin/api  https://akiliadmin.dmtmelectrical.co.tz/api",
       api_image_url:"http://127.0.0.1:8000/images/",//'https://leoleomarket.co.tz/akiliadmin/akiliback/public/images/ http://akiliadmin.dmtmelectrical.co.tz/akiliback/public/images/',
       quick_view:{
           name:'super hd computer display',
           desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
           price:'120,000'
       }
    },
    getters:{
        
        authErrors(state){
            if(state.errors){
                return state.errors
            }
        },
        cartItemsNumber(state){
            if(state.cart){
                return state.cart.length
            }else{
                return 0
            }
           
        },
        wishlistItemsNumber(state){
            if(state.wishlist){
                return state.wishlist.length
            }else{
                return 0
            }
           
        },
        logedUser(state){
            if(state.user){
                return state.user
            }else{
                return null
            }
        },
        getCartItems(state){
            return state.cart
        },
        getWishlistItems(state){
            return state.wishlist
        },
        totalPrice(state){
            return state.cart.reduce((a,b) => a + (b.quantity * b.price),0)
        }
    },
    mutations:{
    
        setUser(state,user){
            state.user = user
        },
        setErrors(state,value){
            state.errors.push({value})
        },
        setZeroErrors(state){
            state.errors = []
        },
        
        quickView(state,product){
            state.quick_view = product
        },
        clearCart(state){
            state.cart = [];
            updateLocalStorage(state.cart)
        },
        clearWishlist(state){
            state.wishlist = [];
            updateWishlistLocalStorage(state.wishlist)
        },
        addToCart(state, product){
            let item = state.cart.find(i => i.id === product.id)

            if(item){
                item.quantity++
            }else{
                state.cart.push({...product, quantity:1})
            }

            updateLocalStorage(state.cart)
            //console.log(state.cart);
        },
        addToWishlist(state, product){
            let item = state.wishlist.find(i => i.id === product.id)

            if(item){
                state.wishlist = state.wishlist.filter(i => i.id !== product.id)
            }else{
                state.wishlist.push({...product})
            }

            updateWishlistLocalStorage(state.wishlist)
            //console.log(state.cart);
        },
        addCartQuantity(state, product){
            let item = state.cart.find(i => i.id === product.id)

            if(item.quantity <= 99){
                item.quantity++
            }

            updateLocalStorage(state.cart)
            //console.log(state.cart);
        },
        subCartQuantity(state, product){
            let item = state.cart.find(i => i.id === product.id)

            if(item.quantity >= 2){
                item.quantity--
            }

            updateLocalStorage(state.cart)
            //console.log(state.cart);
        },
        removeFromCart(state, product){
            let item = state.cart.find(i => i.id === product.id)

            if(item){
               state.cart = state.cart.filter(i => i.id !== product.id)
            }

            updateLocalStorage(state.cart)
            //console.log(state.cart);
        },
        removeFromWishlist(state, product){
            let item = state.wishlist.find(i => i.id === product.id)

            if(item){
               state.wishlist = state.wishlist.filter(i => i.id !== product.id)
            }

            updateWishlistLocalStorage(state.wishlist)
            //console.log(state.cart);
        },
        addToCartQuantity(state, [product, quan]){
            //alert(quan)
            let item = state.cart.find(i => i.id === product.id)

            if(item){
                item.quantity += quan
            }else{
                state.cart.push({...product, quantity:quan})
            }

            updateLocalStorage(state.cart)
            console.log(state.cart);
        },
        updateUserFromLocalStorage(state){
            const user = localStorage.getItem('user')
            if(user){
                state.user = JSON.parse(user)
            }
        },
        updateCartFromLocalStorage(state){
            const cart = localStorage.getItem('cart')
            if(cart){
                state.cart = JSON.parse(cart)
            }
        },
        updateWishlistFromLocalStorage(state){
            const wishlist = localStorage.getItem('wishlist')
            if(wishlist){
                state.wishlist = JSON.parse(wishlist)
            }
        }

    },
    actions:{
        createOrder({state,commit},order){
            axios.post(state.api_url+'/create-order',order).then(response =>{
               if(response.data === 'created'){
                  commit('clearCart')
                  window.location.replace('/'); 
               }
            })
        },
        loginUser({state,commit},user){
            commit('setZeroErrors');
            axios.post(state.api_url+'/login',user).then(response =>{
               
                
                if(response.data.user){
                    commit('setUser',response.data.user)
                    localStorage.setItem('user',JSON.stringify(response.data.user))
                    
                }
                if(response.data.token){
                    localStorage.setItem(
                        'user_token',response.data.token
                    )
                    window.location.replace('/');
  
                }
                if(response.data.error){
                    console.log('bad credential')
                    commit('setErrors',response.data.error); 
                }
            }).catch(errors =>{
                
                console.log(errors)
                console.log('bad credential')
                commit('setErrors',errors.data.error);
   
            })
        },
        registerUser({state,commit},user){
            commit('setZeroErrors');
            axios.post(state.api_url+'/register',user).then(response =>{
                //setErrors
                console.log(response.data)
                if(response.data.user && response.data.token){
                    commit('setUser',response.data.user)
                    localStorage.setItem('user',JSON.stringify(response.data.user))

                    localStorage.setItem('user_token',response.data.token)
                    window.location.replace('/');
                    
                }else{

                    if(response.data.name){
                        console.log(response.data.name)
    
                        response.data.name.forEach((value)=>{
                            commit('setErrors',value);
                        });
                    }
                    if(response.data.phonenumber){
                        console.log(response.data.phonenumber)
    
                        response.data.phonenumber.forEach((value)=>{
                            commit('setErrors',value);
                        });
                    }
                    if(response.data.password){
                        console.log(response.data.password)
    
                        response.data.password.forEach((value)=>{
                            commit('setErrors',value);
                        });
                    }
                }
            }).catch(error =>{
                
                console.log(error)

                
            })
        },
        logOut({state,commit}){
            axios
       .post(state.api_url+'/logout/')
       .then(response => {
 
          if(response.data.message){
              //console.log("loged succsessfuly")
              localStorage.removeItem("user_token")
              localStorage.removeItem("user")
              commit('setUser',{})
              window.location.replace('/');
             
          }
          
           });
       }
    },
    modules:{

    }
})