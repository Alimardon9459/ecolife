<template>
  <div class="mb-100px ">
    <div class="fit row wrap justify-center items-start">
      <div
        v-for=" (product,i) in products " :key="i" class="w-235px pb-20px q-mx-md border  br-4px mt-2pr"
      >
        <div class="d-f jc-sp_btw q-mt-md">
          <div  class="bg-red br-4px text-white text-weight-bold q-ml-md">
            <span v-if="product.chegirma_foizi>1 ? true :false">
              -{{product.chegirma_foizi}}%
            </span>
          </div>
          <div
            class="
              bg-red
              br-4px
              text-white text-weight-bold
              w-50px
              text-center
              q-mr-md
            "
          >
            Yangi
          </div>
        </div>
        <div class="p-15px h-250px">
          <q-img v-for="img in product.rasmlari " :key="img"
            height="100%"
            class="img"
            :src="img.link"
          />
        </div>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column">
            <q-rating
              v-model="ratingModel"
              size="24px"
              color="yellow-5"
              icon="star_border"
              icon-selected="star"
            />
          </div>
          
        </div>
        <div class="text-h6 q-ml-md row justify-between"><span>{{product.nomi}}</span> <span v-if="product.litri!=null ? true :false" class="mr-10px text-italic  ">{{product.litri}}L </span></div>
        <div class="text-italic  q-ml-md d-f mt-15px">
          <del v-if="product.chegirma_foizi>1 ? true :false" class="fs-16px text-weight-light">{{product.narx}}so'm</del>
          <span class="text-red q-ml-md text-weight-bolder fs-18px">{{product.chegirma_narx}}so'm</span>
        </div>
        <div class="w-100pr row justify-center mt-15px" >
          <q-btn @click="addBacket(i)" class="bg-yellow" > <q-icon name="shopping_cart" /> Savatga qo'shish</q-btn>
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
    <div class="w-100pr h-100vh " v-if="products.length<1 ? true : false">
            
    </div>
  </div>
</template>

<script>
import ForAlert from '../ShopAlert/ForAlert.vue';
import { mapMutations, mapState } from 'vuex';
// import { ref } from '@vue/reactivity';
// import { onMounted } from '@vue/runtime-core';
// import axios from "axios";
// import { useRoute } from 'vue-router';
export default {
  props:["products"],
  computed:{
    ...mapState(['costs'])
  },
  components:{
    ForAlert
  },
  data() {
    return {
      ratingModel:3.5,
      yangi:0,
      toolbar:false,
      alertApi:'',

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
.border {
  border: 1px solid rgb(214, 210, 210);
}
.border:hover {
  border: 1px solid rgb(223, 44, 44);
}
.position {
  position: absolute;
  top: 3460px;
  margin: 80px;
}
.but .position {
  opacity: 0;
}
.but .position:hover {
  opacity: 1;
}
</style>
