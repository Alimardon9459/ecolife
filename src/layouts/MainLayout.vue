<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal class="navbar h-80px content-center">
      <q-toolbar>
        <router-link to="/">
          <div class="w-100pr h-40px mt-10px row items-center">
            <img class="ml-20px"
              src="../assets/Arzon_free-file.png"
              width="60"
              alt="" />
          </div>
        </router-link>
        <div class="row w-85pr h-50px mt-10px items-center justify-between">
          <div>
            <span class="span q-ml-xl text-subtitle2 text-weight-bold text-black"> <router-link to="/shop">Shop</router-link> </span>
          </div>
         <div>
          <router-link to="/carrier">Carrier</router-link>
          <router-link class="ml-20px" to="/packer">Packer</router-link>
         </div>
          <div class="w-40pr_md-45pr_sm-50pr inp-search-max">
            <router-link to="search">
              <q-input rounded outlined v-model="search_massage" label="Mahsulotlarni qidirish" >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </router-link>
         
          </div>
          <div>
            <router-link to="login" class="fs-18px mr-20px"> Log In </router-link>
            <!-- <q-icon color="white" size="25px" name="search" class="q-mr-md" /> -->
            <router-link to="/basket">
              <q-icon color="white" size="25px" name="shopping_cart" /><strong
              class="mt-3px ml-10px mr-10px text-white text-weight-bold">{{shot}} $</strong>
            </router-link>
          </div>
        </div>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <!-- <div class="w-100pr navbar mt-20px row justify-center items-center" >
        <div  class="w-90pr search-inp">
            <router-link to="search">
              <q-input class="mt-10px mb-5px" rounded outlined v-model="search_massage" label="Mahsulotlarni qidirish" >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </router-link>
         
          </div>
      </div> -->
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-black text-white h-600px  mt-500px">
      <div class="w-100pr  h-70pr row justify-center items-center content-center">
        <div class="w-92pr h-60pr row">
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">
              Ish vaqti
            </div>
            <div class="q-mt-lg text-grey text-weight-bold">
              Monday – Friday: 8am – 4pm
            </div>
            <div class="mt-10px text-grey text-weight-bold">
              Saturday: 9am – 5pm
            </div>
            <div class="q-mt-lg">
              <q-icon class="icon" name="fab fa-facebook-f" />
              <q-icon class="icon q-ml-md" name="fab fa-twitter" />
              <q-icon class="icon q-ml-md" name="fab fa-youtube" />
              <q-icon class="icon q-ml-md" name="fab fa-google" />
              <q-icon class="icon q-ml-md" name="fab fa-instagram-square" />
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">INFORMATION</div>
            <div class="a-href column q-mt-lg text-weight-bold">
              <a href="">Dlivery</a>
              <a href="">About Us</a>
              <a href="">Secure Paymett</a>
              <a href="">Contact Us</a>
              <a href="">Sitemap</a>
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">
              CUSTOM LINKS
            </div>
            <div class="a-href column q-mt-lg text-weight-bold">
              <a href="">Legal Notice</a>
              <a href="">Prices Drop</a>
              <a href="">New Product</a>
              <a href="">Best Sales</a>
              <a href="">Login</a>
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">NEWSLETTER</div>
            <div class="q-mt-lg text-grey text-weight-bold">
              Be the first to know about our new arrivals and exclusive offers.
            </div>
            <div class="q-mt-md">
              <form>
                <q-input outlined type="email" bg-color="white" v-model="email" :dense="dense" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <q-separator class="w-90pr bg-dark"> </q-separator>
      </div>
      <div class="w-100pr h-29pr column justify-center items-center content-center">
        <div>
          <img src="http://demo.posthemes.com/pos_ecolife_fastfood/img/cms/payment.png" alt="" />
        </div>
        <div class="q-mt-xl">Copyright © Posthemes. All Rights Reserved</div>
      </div>
    </q-footer>
  </q-layout>
</template>


<script>
import { mapMutations, mapState } from 'vuex';
import {ref, onMounted, watch} from 'vue';
import axios from "axios";
export default {
computed:{
    ...mapState(['costs'])
  },
setup() {
  // ko'ringanida apidan maxsulotlarni oladi
      const ProductsApi=ref([])
      const rightDrawerOpen = ref(false)
      onMounted(()=>{
        const getComment = async () => {
          try {
            const Fetch_Product = await axios.get('http://adminmax.pythonanywhere.com/productlar/');
            ProductsApi.value = Fetch_Product.data;
          } 
          catch (err) {
            console.log(err);
          }

        };
        let timerId = setInterval(() => {getComment() }, 500);
        setTimeout(() => { clearInterval(timerId) }, 2000);        
      }
  
    )
    return {
      ProductsApi,
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }      
    }
  },

  data() {
    return {
      email:"",
      product_name:'',
      search_name:'',
      search_massage:"",
      search_products:[],
      search_test:false,
      dense:true,
    }
  },
  computed:{
    ...mapState(["shot"])
  },
  //vuex da productlarni olish
  methods:{
    // qidirish tugmasi bosilganida qidirilayotgan maxulot ni topib uni  search_products ga qo'shib qo'yadi va vuex ga jo'natadi
    ...mapMutations(['SEND_SEARCH_PRODUCT']),
    SendSearchMassage(){
      this.search_products=[]
      for(let j=0;j<this.ProductsApi.length;j++){
        this.product_name=this.ProductsApi[j].nomi.toLowerCase()
        this.search_name=this.search_massage.toLowerCase()
        this.search_test=this.product_name.includes(this.search_name)
        if(this.search_test){
          this.search_products.push(this.ProductsApi[j])
        }
      }
      this.SEND_SEARCH_PRODUCT(this.search_products)  
      
    },
  },
  watch:{
    search_massage() {
      this.SendSearchMassage()
    }

  }
}
</script>
<style scoped>
.fs-18px{
  text-decoration: none;
  color: white;
}
.fs-18px:hover{
  color:rgb(0, 255, 247);
}
a{
  text-decoration: none;
}
.navbar{
  background: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgb(176, 253, 253),
    rgb(74, 152, 226)
  ) ;
}
.span {
  cursor: pointer;
  background: transparent;
}

.icon {
  color: grey;
}

.icon:hover {
  color: red;
  cursor: pointer;
}

.a-href a {
  text-decoration: none;
  color: grey;
}

.a-href a:hover {
  color: red;
  margin-left: 5px;
  cursor: pointer;
}

.a-href {
  line-height: 2.5;
  color: grey;
}
.search-inp{
    display: none;
  }
@media screen and (max-width:600px) {
  .search-inp{
    display: block;
  }
  .inp-search-max{
    display: none;
  }
  
}


</style>
