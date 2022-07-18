<template>
  <div v-if=" products.length>0 ?true : false " >
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="visable0"
    >
      <q-carousel-slide  :name="1">
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[0] != undefined ? true : false " :product='products[0]'/>
          <CardForCarousel v-if="products[1] != undefined ? true : false " :product='products[1]'/>
        </div>
      </q-carousel-slide>
       
      <q-carousel-slide  :name="2" v-if=" products.length>2 ?true : false ">
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[2] != undefined ? true : false " :product='products[2]'/>
          <CardForCarousel v-if="products[3] != undefined ? true : false " :product='products[3]'/>
        </div>
      </q-carousel-slide>

      <q-carousel-slide  :name="3" v-if=" products.length>4 ?true : false ">
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[4] != undefined ? true : false " :product='products[4]'/>
          <CardForCarousel v-if="products[5] != undefined ? true : false " :product='products[5]'/>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="visable1"
    >
      <q-carousel-slide  :name="1"  >
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[0] != undefined ? true : false " :product='products[0]'/>
          <CardForCarousel v-if="products[1] != undefined ? true : false " :product='products[1]'/>
          <CardForCarousel v-if="products[2] != undefined ? true : false " :product='products[2]'/>
        </div>
      </q-carousel-slide>
      <q-carousel-slide  :name="2" v-if=" products.length>3 ?true : false " >
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[3] != undefined ? true : false " :product='products[3]'/>
          <CardForCarousel v-if="products[4] != undefined ? true : false " :product='products[4]'/>
          <CardForCarousel v-if="products[5] != undefined ? true : false " :product='products[5]'/>
        </div>
      </q-carousel-slide>
      <q-carousel-slide  :name="3" v-if=" products.length>6 ?true : false " >
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[6] != undefined ? true : false " :product='products[6]'/>
          <CardForCarousel v-if="products[7] != undefined ? true : false " :product='products[7]'/>
          <CardForCarousel v-if="products[8] != undefined ? true : false " :product='products[8]'/>
        </div>
      </q-carousel-slide>
    </q-carousel>

    
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="visable2"
    >
      <q-carousel-slide  :name="1"  >
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[0] != undefined ? true : false " :product='products[0]'/>
          <CardForCarousel v-if="products[1] != undefined ? true : false " :product='products[1]'/>
          <CardForCarousel v-if="products[2] != undefined ? true : false " :product='products[2]'/>
          <CardForCarousel v-if="products[3] != undefined ? true : false " :product='products[3]'/>
        </div>
      </q-carousel-slide>
      <q-carousel-slide  :name="2" v-if=" products.length>4 ?true : false " >
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[4] != undefined ? true : false " :product='products[4]'/>
          <CardForCarousel v-if="products[5] != undefined ? true : false " :product='products[5]'/>
          <CardForCarousel v-if="products[6] != undefined ? true : false " :product='products[6]'/>
          <CardForCarousel v-if="products[7] != undefined ? true : false " :product='products[7]'/>
        </div>
      </q-carousel-slide>
      <q-carousel-slide  :name="3" v-if=" products.length>8 ?true : false " >
        <div class=" row justify-between ">
          <CardForCarousel v-if="products[8] != undefined ? true : false " :product='products[8]'/>
          <CardForCarousel v-if="products[9] != undefined ? true : false " :product='products[9]'/>
          <CardForCarousel v-if="products[10] != undefined ? true : false " :product='products[10]'/>
          <CardForCarousel v-if="products[11] != undefined ? true : false " :product='products[11]'/>
        </div>
      </q-carousel-slide>
    </q-carousel>

  </div>
</template>

<script>
import { ref } from 'vue'
import CardForCarousel from '../CardForCarousel.vue'

export default {
  props:['products'],
    setup() {
        return {
            slide: ref(1),
        };
    },
    components: { CardForCarousel }
}
</script>
<style>
.carusel {
  border: 2px solid green;
}
.q-carousel__slide{
  padding: 0px;
}
@media screen and (min-width:900px) {
  .visable0{
    display: none;
  }
  .visable1{
    display: none;
  }
}
@media screen and (max-width:899px) and (min-width:500px) {
  .visable0{
    display: none;
  }
  .visable2{
    display: none;
  }
}
@media screen and (max-width:499px) {
  .visable1{
    display: none;
  }
  .visable2{
    display: none;
  }
}
</style>
