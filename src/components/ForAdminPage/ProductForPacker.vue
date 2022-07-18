<template >
    <div class="w-100pr row wrap justif-center p-20px">
        <div class="w-100pr text-center fs-32px">
            Buyurtmalar
        </div>
        <div class="w-100pr row justify-between wrap ">
            <div
                v-for="(order,i) in OrdersApi"
                :key="i">
                    <!-- bitta maxsulot xarid qilganlar uchun -->
                <q-card 
                    :class="order.ready" 
                    class="my-card w-300px p-4pr mt-50px "
                    v-if="order.orderForUser.length==1 ? true :false"
                >

                    <q-card-section v-for="product in order.orderForUser" :key="product">
                    
                        <div class="w-100pr">
                            <div class="fs-16px">Nomi:{{product.product_name}}</div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                        <div v-if="product.weight != null ? true : false" class="w-100pr">
                            <div class="fs-16px">Vazni: {{product.weight}}</div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                        <div v-if="product.quantity != null ? true : false" class="w-100pr">
                            <div class="fs-16px">Soni:{{product.quantity}} </div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                        <div v-if="product.litr != null ? true : false" class="w-100pr">
                            <div class="fs-16px">Litri:{{product.litr}} </div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                        <q-expansion-item
                            expand-separator
                            icon="perm_identity"
                            label="Qabul Qiluvchi"
                            :caption="order.userName"
                            class="text-grey-7 br-5px bg-grey-2 q-mt-md"
                        >
                            <q-card>
                                <q-card-section>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Oluvchi:{{order.userName}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Tel raqami: {{order.phoneNumber}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Manzili:{{order.address}} </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>
                    </q-card-section>
                    
                    <q-card-section class="q-pt-none ">
                        <div class="w-100pr row justify-center">
                            <q-btn   @click="Preparation(i)" :disable="order.ready.length==1 ? false : true"  class="bg-yellow">Tayyorlash</q-btn>
                        </div>
                        <div class="mt-20px w-100pr row justify-center">
                            <q-btn :disable="order.ready.length==11 ? false : true" @click="Ready(i)" class="bg-green-6">Tayyor</q-btn>
                        </div>
                        
                    </q-card-section>
                </q-card>
                <!-- ikki va undan ko'p maxsulot xarid qilganlar uchun -->
                <div 
                    class="dblcard mt-50px bg-w br-20px"  
                    v-if="order.orderForUser.length!=1 ? true :false" 
                    :class="order.ready" 
                >
                
                    <div class=" w-100pr row justify-between">
                        <div v-for="product in order.orderForUser" :key="product" class=" m-15px bg-white  br-10px products p-10px w-150px">
                            <div class="w-100pr">
                                <div class="fs-18px">Nomi:{{product.product_name}}</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div v-if="product.weight != null ? true : false" class="w-100pr">
                                <div class="fs-18px">Vazni: {{product.weight}}</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div v-if="product.quantity != null ? true : false" class="w-100pr">
                                <div class="fs-18px">Soni:{{product.quantity}} </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div v-if="product.litr != null ? true : false" class="w-100pr">
                                <div class="fs-18px">Litri:{{product.litr}} </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                        </div>    
                        
                    </div>
                    <div class="w-100pr row justify-center">
                        <q-expansion-item
                            class="bg-grey-4 br-5px m-10px "
                            expand-icon-toggle
                            expand-separator
                            icon="perm_identity"
                            label="Qabul Qiluvchi"
                            :caption="order.userName"
                        >
                            <q-card>
                                <q-card-section>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Oluvchi:{{order.userName}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Tel raqami: {{order.phoneNumber}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Manzili:{{order.address}} </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>
                    </div>
                    <div class="m-20px pb-20px row wrap justify-between">
                        <div class="w-btn row justify-center">
                            <q-btn  @click="Preparation(i)" :disable="order.ready.length==1 ? false : true"  padding="10px 20px" class=" bg-yellow">Tayyorlash</q-btn>
                        </div>
                        <div class=" w-btn row justify-center">
                            <q-btn padding="10px 20px" :disable="order.ready.length==11 ? false : true" @click="Ready(i)" class="bg-green-6">Tayyor</q-btn>
                        </div>
                    </div>
                </div>
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
        const a=ref(0)
        onMounted(()=>{
            // user malumotlarini olish
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
            
            // for(let i=0; i<2;i++){
            //     a.value++
            //     if(a.value==1){
            //         let TimeOff=setInterval(() => getUserApi() , 1000);
            //     setTimeout(()=>{
            //         clearInterval(TimeOff)
            //     },2000)
            //     }
            //     else{
            //         setInterval(() => getUserApi() , 2000)
            //     }
            // }
            
        })
        return{
            OrdersApi
        }
    },
    methods:{
        // qadoqlovchi qadoqlashni boshlaganini bildiradi va bu user dagi ready qiymati o'zgaradi
        Preparation(i){
            fetch(`http://adminmax.pythonanywhere.com/user/${this.OrdersApi[i].id}/`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ready:"Preparation"
                }) 
            })
        },
        // qadoqlovchi qadoqlab bo'lganini bildiradi va bu user dagi ready qiymati o'zgaradi
        Ready(i){
            fetch(`http://adminmax.pythonanywhere.com/user/${this.OrdersApi[i].id}/`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ready:"Ready"
                }) 
            })
        }
    }
}
</script>
<style scoped>
    .bg-w{
        background: white;
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
    @media screen and (max-width:840px ) and (min-width: 500px) {
        .dblcard{
            width:600px ;
            
        }
    }
    @media screen and (max-width: 500px) {
        .dblcard{
            width:350px ;
            
        }
        .m-15px{
            margin: 10px;
        }
    }
    @media screen and (min-width:841px) and ( max-width:1200px) {
        .dblcard{
            width:auto; ;
            
        }
    }
    
</style>