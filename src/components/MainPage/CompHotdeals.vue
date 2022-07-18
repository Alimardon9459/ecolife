<template >
  <div>
    <div class="w-100pr ">
      <div class="w-100pr h-7pr bg-white">
        <div class="text-h5">
          Mega chegirmalar
        </div>
        <div class="text-grey">
          Har haftalik mega chegiramalar
        </div>
      </div>
      <CompCarusel2 :products="productMega" />
     
      <div class="w-100pr  ">
        <div class="w-100pr h-7pr bg-white">
          <div class="text-h5">
            Chegirmalar
          </div>
          <div class="text-grey">
            Har oylik chegiramalar
          </div>
        </div>

        <div class="w-95pr row wrap justify-between ml-5pr  ">
          <div  v-for="(product , i) in products" :key="i">
            <div v-if="product != undefined ? true : false " class="cart w-205px h-320px  q-mt-md row justify-center content-center ">
              <div class="w-90pr h-90pr">
                <div class="h-45pr">
                  <div class="w-100pr h-100pr" v-for="imgSrc in product.rasmlari" :key="imgSrc" >
                    <q-img height="100%" :src="imgSrc.link">
                      <div class="search w-100pr h-100pr row content-center justify-center" style="background: none;">
                        <q-icon class="icon" size="25px" name="search" />
                      </div>
                    </q-img>
                  </div>
                </div>
                <div class="text w-90pr h-30pr mt-20px ml-10px ">
                  <div class="row justify-between" >
                    <span>{{ product.nomi }}</span>
                    <span v-if="product.litri.length>0 ? true : false " >{{product.litri}}L</span> 
                  </div>
                  <div class="row items-center">
                    <q-icon name="star" color="yellow" size="17px" />
                    <q-icon name="star" color="yellow" size="17px" />
                    <q-icon name="star" color="yellow" size="17px" />
                    <q-icon name="star" color="yellow" size="17px" />
                    <q-icon name="star" color="yellow" size="17px" />
                  </div>
                  <div>
                    <del v-if=" product.narx.length!=0 ? true :false " class="text-grey">{{ product.narx }}So'm</del>
                    <span class="ml-5px text-dark text-subtitle1">{{ product.chegirma_narx }}$</span>
                    <q-icon class="ml-20px" @click="addBacket(i)" color="yellow" size="25px" name="shopping_cart" />
                  </div>
                </div>
              </div>
              <q-dialog class="MyDialog bg-transparent" full-width v-model="toolbar">
                <q-card class="w-90pr ">
                  <div class="w-100pr  bg-dark row items-center justify-center" >

                    <div class="text-white w-90pr fs-20px_md-16px_sm-12px text-center">
                      <q-icon name="check" class="mr-10px" size="24px" />  Ushbu maxsulot Savatga qo'shildi
                    </div>
                    <div class="w-10pr row justify-end">
                      <q-icon @click="dialogVisable" name="close" class=" text-white mr-10px" size="24px" />
                    </div>
                  </div>
                  <ForAlert :product="alertApi" />
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import {ref, onMounted} from 'vue';
import axios from "axios";
import CompCarusel2 from './CompCarusel2.vue';
import ForAlert from '../ShopAlert/ForAlert.vue';
export default {
  components: {
    CompCarusel2,
    ForAlert
},
computed:{
    ...mapState(['costs'])
  },
setup() {
      const ProductsApi=ref([])
      const productFilter=ref([])
      const productMega=ref([])
      const products=ref([])
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
        const getFilter = async ()=>{
          productFilter.value=[]
          productMega.value=[]
          // productlarni  saralash
          for(let j=0 ; j <  ProductsApi.value.length ; j++ ){
            // chegirmasi bo'lgan  productlarni  saralash
            if( ProductsApi.value[j].chegirma_foizi.length>0 && ProductsApi.value[j].mega == false ){
              productFilter.value.push(ProductsApi.value[j])
            }
            // mega chegirmada bo'lgan productlarni  saralash
            if(ProductsApi.value[j].mega == true){
              productMega.value.push(ProductsApi.value[j])
            }
          }
          products.value=[]
          for( let i=0; i < 10 ; i++ ){
            products.value.push(productFilter.value[i])
          }
        }
        

        let timerId = setInterval(() => {getComment()}, 1000);
        
        setTimeout(() => { clearInterval(timerId) }, 2000);
        // setTimeout(() => { clearInterval(timerImg) }, 2150);
        setTimeout(() => {
          getFilter()
        }, 2100);
        
      }
  
    )
    return {
      ProductsApi,
      productFilter,
      products,
      productMega
      
    }
  },

  data() {
    return {
      yangi:0,
      toolbar:false,
      alertApi:'',
      id:""
    }
  },
  
   mounted() {
    // maxsulot rasmiga responsiv
    function decimalAdjust(type, value, exp) {
      // Если степень не определена, либо равна нулю...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Если значение не является числом, либо степень не является целым числом...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Сдвиг разрядов
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Обратный сдвиг
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Десятичное округление к ближайшему
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    
  },
  methods: {
    // cardning ostidagi iconni bosganda quyidagi amal bajariladi
      ...mapMutations(["ADD_BACKET","CALCULATION_SHOT","INCREMENT"]),     
      // maxsulotni savatga qo'shish funksiyasi
      addBacket(i){
        // maxsulot oldin savatga qo'shilgan yoki qo'shilmaganligini tekshirish
        this.yangi=0 
        for(let j=0 ; j<this.costs.length ; j++){
          if(this.products[i].nomi==this.costs[j].name){
            this.yangi++
            this.id=j
          }
        }
        
        // qo'shilmagan bo'lsa uni yangi obyektga tenglashtirib qo'shish
        if( this.yangi<1){
          const cost ={
            id:this.products[i].id,
            name: this.products[i].nomi,
            mass:this.products[i].kilogramm,
            tip:this.products[i].tip,
            liters:this.products[i].litri,
            quantity:this.products[i].soni,
            oldPrice: this.products[i].narx,
            price: this.products[i].chegirma_narx,
            skitka:this.products[i].chegirma_foizi,
            categoriya:this.products[i].mahsulot,
            imgLink:this.products[i].rasmlari,
            amount:1,
            overallPrice:this.products[i].chegirma_narx
          }
          // vuex ga qiymatni jo'natish va sho'tni xisoblash
          this.ADD_BACKET(cost,i)
          this.CALCULATION_SHOT(i)
          // q'shilgan malumotlarni dialog oynasiga jo'natish
          this.alertApi=cost
        }
        else{
          // oldin qo'shilgan bo'lsa uni sononi bittaga ortirish
          this.INCREMENT(this.id)
          this.CALCULATION_SHOT(i)
          this.alertApi=this.costs[this.id]
        }
        this.toolbar=true
        
      },
      dialogVisable(){
        this.toolbar=false
      }
    },
}

</script>
<style scoped>
@media screen and ( max-width:900px ) and (min-width:500px) {

   .text-subtitle1 , .text-subtitle2 , .content-info{
    font-size: 12px;
   }
   .icon-btn-check{
    display: none;
   }
}

.text {
  line-height: 2.3;
}

.cart {
  border: 1px solid rgb(229, 228, 228);
}

.a {
  text-decoration: none;
}

.href {
  text-decoration: none;
  color: grey;
}

.href:hover {
  margin-left: 10px;
  color: green;
  transition: 1s;
}

.cart:hover {
  border: 2px solid green;
}

.search {
  opacity: 0;
}

.search:hover {
  opacity: 1;
}

.icon {
  background-color: #fff;
  border-radius: 22px;
  padding: 10px;
  color: grey;
}

.icon:hover {
  background-color: red;
  color: #fff;
  transition: 1s;
}

</style>