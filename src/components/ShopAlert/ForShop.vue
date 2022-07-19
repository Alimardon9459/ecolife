<template>
  <div>
    <q-page>
      <div class="row justify-around">
          <div class="w-40pr_md-90pr_sm-95pr mt-30px">
            <q-carousel
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
              <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
              <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
            </q-carousel> 
          </div>
        <div class="w-40pr_md-95pr_sm-95pr lh-3 fs-15px mt-80px q-ml-md">
          <span class="text-h5 ">Pizza Mushrooms</span>
          <div class="text-subtitle1 text-bold">Reference: <span class="text-weight-regular">demo_24</span></div>
          <div class="row wrap items-center ml-m3pr ">
            <div class="Mya">
              <q-icon name="fa-solid fa-comment-dots" class="q-mx-sm"/>
              <span>Read reviews (1)</span>
            </div>
            <div class="Mya ml-10px ">
              <q-icon class="q-mx-sm" name="fa-solid fa-clipboard"/>
              <span>Write a review</span>
            </div>
          </div>
          <div class="mt-15px">
            <span class="text-h6 text-strike text-grey">$23.90</span>
            <span class="text-h5 q-mx-md">$23.90</span>
            <q-badge class="bg-red q-py-sm q-px-md" label="Save 10%" />
          </div>
          <q-card class="bg-grey h-1px q-my-lg no-shadow"></q-card>
          <div class="row justify-right">
            <div class="row justify-around  ">
              <span class="text-bold w-100pr text-center">How Mony</span>
              <div class=" ml-20px w-80px h-40px row" style="border: 1px solid grey">
                  <div
                    class="w-65pr h-100pr row justify-center items-center"
                    style="border-right: 1px solid grey"
                  >
                    5
                  </div>
                  <div class="w-35pr h-100pr">
                    <div
                      class="w-100pr h-50pr row justify-center items-center"
                      style="border-bottom: 1px solid grey"
                    >
                      <button class="btn-inc w-100pr h-100pr row justify-center items-center" @click="Increment(i)">
                        <q-icon size="18px" name="expand_less" />
                      </button>
                    </div>
                    <div class="w-100pr h-50pr row justify-center items-center">
                      <button class="btn-inc w-100pr h-100pr row justify-center items-center" @click="Decrement(i)">
                        <q-icon size="18px" name="expand_more" />
                      </button>
                    </div>
                  </div>
              </div>
              <div class="ml-20px">
                 Ummumiy narxi 45500 so'm
              </div>
            </div>
          </div>
          <div class="row justify-center">
            <div class="w-40pr_md-60pr_sm-50pr h-40px mt-35px mb-35px">
              <q-btn class="bg-red text-white fit" icon="add" rounded>Add To Card</q-btn>
            </div>
          </div>

          <div class=" row items-center fs-18px">
            <span class="text-bold">Shere</span>
            <div class="row justify-around w-150px">
              <q-icon class="Mya" name="facebook"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-instagram-square"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-google"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-telegram"></q-icon>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
<script>
import { ref } from 'vue'
import { mapMutations, mapState } from 'vuex';
export default {
  data(){
    return {
      slide:1,
      model: ref(2.3),
      badges:[
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},

      ],
      stars:[
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'}
      ],
      tab: ref(true),
      innerTab: ref('innerDescription'),
      splitterModel: ref(20)
    }
  },
  computed:{
    ...mapState(['costs'])
  },
  methods:{
    ...mapMutations(["INCREMENT","DECREMENT","REMOWE","CALCULATION_SHOT"]),
    Increment(i){
      this.INCREMENT(i)
      // this.costs[i].amount++
      // this.costs[i].overallPrice=Math.round10(this.costs[i].amount*this.costs[i].price , -2)
      this.CALCULATION_SHOT()
    },
    Decrement(i){
      if(this.costs[i].amount >1){
        this.DECREMENT(i)
        // this.costs[i].amount--
        // this.costs[i].overallPrice=Math.round10(this.costs[i].amount*this.costs[i].price , -2)
        this.CALCULATION_SHOT()
      }
    },
  }
}
</script>
<style scoped>
.Mya{
  text-decoration: none;
  color: gray;
}
.Mya:hover{
  color: red;
  justify-content: space-around;
}
.btn-inc {
  background: rgb(255, 255, 255);
  border: none;
  width: 100%;
  height: 100%;
}
.btn-inc:active {
  background: rgb(184, 183, 183);
}
</style>
