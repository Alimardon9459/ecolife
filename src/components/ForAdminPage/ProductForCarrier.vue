<template >
    <div class="w-100pr p-50px ">
        <div class="w-100pr text-center fs-22px">
            Buyurtmalar
        </div>
        <div class="w-100pr row justify-between wrap ">
           
            <div v-for="(order,i) in OrdersApi" :key="i">
                    <!-- bitta maxsulot xarid qilganlar uchun -->
                <q-card 
                    :class="order.ready" 
                    class="my-card w-300px p-4pr mt-50px "
                >
                    

                    <q-card-section>                        
                        <div >
                            <div class="q-mt-sm">
                                <div class="fs-18px ">Oluvchi: {{order.userName}}</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div  class="q-mt-sm">
                                <div class="fs-18px ">Tel Raqami: {{order.phoneNumber}}</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div class="q-mt-sm">
                                <div class="fs-18px ">Manzili: {{order.address}}</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Umumiy maxsulotlar Narxi: {{order.total}} </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Olingan maxsulotlari: <span v-for="product in order.orderForUser"  :key="product"> {{product.product_name}}, </span> </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                        </div>
                    </q-card-section>
                    
                    <q-card-section class="q-pt-none ">
                        <div class="w-100pr row justify-around">
                            <q-btn  @click="SetOut(i)" :disable="order.ready.length==5 ? false :true" padding="10px 20px" class="text-black bg-lime-12">Yetkazish</q-btn>
                            <q-btn @click="getLocation(i)" class="bg-indigo-6 text-white br-20px "  > <q-icon name="location_on" class="ml-5px" color="white" size="20px"> </q-icon> Lakatsiya </q-btn>
                            <a :href="link_for_location" target="_blank" >bos </a>
                            <q-btn @click="Delivered(i)" class="bg-light-green-13 mt-15px"> Yetkazildi </q-btn>
                        </div>                      
                    </q-card-section>
                </q-card>
                
                
            </div>
        </div>
    </div>
</template>
<script>
import {ref, onMounted} from 'vue';
import axios from "axios";
export default {
    setup(){
        const OrdersApi=ref([]) 
        const latitude=ref('')
        const longitude=ref('')
        const user_carrier=ref('')
        const link_for_location=ref('')
        const user_position=ref('')
        onMounted(()=>{
            const getUserApi = async () => {
                try {
                    const Fetch_Product = await axios.get('http://adminmax.pythonanywhere.com/user/');
                    OrdersApi.value = Fetch_Product.data;
                    
                } 
                catch (err) {
                    console.log(err);
                }

            };
            setInterval(() => getUserApi() , 2000)            
            
        })
        // lakatsiyani olish funksiyasi
        const getLocation = (i)=>{ 
            if(navigator.geolocation){ 
                navigator.geolocation.getCurrentPosition((position)=>{ 
                    location.value = position 
                    latitude.value = location.value.coords.latitude 
                    longitude.value = location.value.coords.longitude 
                    user_carrier.value = latitude.value+','+longitude.value
                }) 
            } 
            else{ 
                alert('error'); 
            } 

            setTimeout(()=>{
                console.log(user_carrier.value) 
                user_position.value=OrdersApi.value[i].address_link
                console.log(user_position.value);
                link_for_location.value=`https://www.google.si/maps/dir/${user_carrier.value}/${user_position.value}/@${user_carrier.value},14z/data=!4m4!4m3!1m1!4e1!1m0`
                console.log(link_for_location.value);
            },1000)
        }
        return{
            OrdersApi,
            getLocation,
            latitude,
            longitude,
            link_for_location
        }

    
    
    
    
    
    },
    data() {
        return {
            
        }
    },
     methods:{
        // yetkazuvchi yetkazishni boshlaganini bildiradi va bu user dagi ready qiymati o'zgaradi
        SetOut(i){
            fetch(`http://adminmax.pythonanywhere.com/user/${this.OrdersApi[i].id}/`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ready:"SetOut"
                }) 
            })
        },

        // yetkazuvchi yetkazib bo'lganini bildiradi va bu user dagi ready qiymati o'zgaradi
        Delivered(i){
            fetch(`http://adminmax.pythonanywhere.com/user/${this.OrdersApi[i].id}/`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ready:"Delivered"
                }) 
            })
        },
        getloc(){
            
        }
    }
}
</script>

<style scoped>
    .bg-w{
        background: white;
    }
    .w-expansion{
        width: 50%;
    }
    .q-item{
        padding: 0px;
    }
    .q-card__section--vert {
    padding: 8px;
    } 
    .Preparation{
        background:  linear-gradient(
            to bottom,
            rgb(30, 0, 255),
            rgb(179, 0, 255),
            rgb(225, 0, 255),
            rgb(255, 0, 128) 
        );  
    }
    .Ready{
        background:  linear-gradient(
            to bottom,
            red,
            rgb(255, 47, 0),
            rgb(255, 111, 0),
            rgb(255, 208, 0) 
        );  
    }
    .SetOut{
        background:  linear-gradient(
            to bottom,
            rgb(255, 128, 0),
            rgb(225, 255, 0),
            rgb(170, 255, 0),
            rgb(0, 255, 128) 
        ); 
    }
    .Delivered{
        background:  linear-gradient(
            to bottom,
            rgb(94, 255, 0),
            rgb(0, 255, 166),
            rgb(0, 170, 255) 
        ); 
    }
    .products{
        box-shadow: 2px 2px 35px 0px  rgb(189, 186, 186);
    }
    @media screen and (max-width:730px) {
        .justify-between{
            justify-content: center;
        }
        .w-btn{
            width: 100%;
            margin-bottom: 20px;
        }
        .pb-20px{
            padding-bottom: 0px;
        }
    }
    @media screen and (max-width:840px) {
        .dblcard{
            width:350px ;
        }
        .pl-50px{
            padding-left: 20px;
        }
        .pr-50px{
            padding-right: 20px;
        }
    }
    @media screen and (min-width:841px) and ( max-width:1200px) {
        .dblcard{
            width:750px ;
            
        }
    }
    
</style>
<!-- <div class="w-100pr row justify-center">
    <q-btn class="bg-green text-white">Yetkazish</q-btn>
</div> -->