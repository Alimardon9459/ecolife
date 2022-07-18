<template >
    <div class="w-20pr_md-30pr_sm-45pr h-300px card " >
        <div class="w-100pr h-50pr p-5px">
            <q-img v-for="img in product.rasmlari" :key="img" class="h-100pr" :src="img.link" />
        </div>
        <div class="w-100pr h-50pr p-5px">
            <div class="fs-16px row justify-between">
                <span>{{product.nomi}}</span> 
                <span v-if="product.litri.length>0 ? true : false " >{{product.litri}}L</span> 
            </div>
            <div class="fs-16px row justify-between mt-10px">
                <del class="fs-14px" v-if="product.chegirma_foizi.length>0 ? true : false " >{{product.narx}}so'm</del> 
                <span>{{product.chegirma_narx}} so'm</span> 
            </div>
            <div class="row justify-center mt-10px">
                <q-btn @click="addBacket(i)" ><q-icon color="yellow" size="25px" name="shopping_cart" /> </q-btn>
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
</template>
<script>
import { mapMutations, mapState } from "vuex";
import ForAlert from './ShopAlert/ForAlert.vue';
export default {
    components:{
        ForAlert
    },
    props:['product'],

    data(){
        return {
            yangi:0,
            toolbar:false,
            alertApi:'',
            id:""
        }
    } ,
    computed:{
        ...mapState(['costs'])
    },
    methods: {
    // cardning ostidagi iconni bosganda quyidagi amal bajariladi
      ...mapMutations(["ADD_BACKET","CALCULATION_SHOT","INCREMENT"]),     
      // maxsulotni savatga qo'shish funksiyasi
      addBacket(i){
        // maxsulot oldin savatga qo'shilgan yoki qo'shilmaganligini tekshirish
        this.yangi=0 
        for(let j=0 ; j<this.costs.length ; j++){
          if(this.product.nomi==this.costs[j].name){
            this.yangi++
            this.id=j
          }
        }
        
        // qo'shilmagan bo'lsa uni yangi obyektga tenglashtirib qo'shish
        if( this.yangi<1){
          const cost ={
            id:this.product.id,
            name: this.product.nomi,
            mass:this.product.kilogramm,
            tip:this.product.tip,
            liters:this.product.litri,
            quantity:this.product.soni,
            oldPrice: this.product.narx,
            price: this.product.chegirma_narx,
            skitka:this.product.chegirma_foizi,
            categoriya:this.product.mahsulot,
            imgLink:this.product.rasmlari,
            amount:1,
            overallPrice:this.product.chegirma_narx
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
    .card{
        border: 1px rgb(226, 223, 223) solid;
    }
</style>