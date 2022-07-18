<template>
  <div class="main-corusel w-100pr ">
    <q-carousel swipeable animated :autoplay="true" arrows v-model="slide" infinite style="height: auto;">
      <q-carousel-slide class="w-100pr" :name="1">
        <q-img class="w-100pr h-610px"
          src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612484057_90-p-ovoshchi-na-serom-fone-169.jpg">
          <div class="w-100pr h-100pr row items-center" >
            <div class="fs-25px w-26pr w-60pr q-ml-xl">
              <div class="text-yellow-6 fs-28px_md-22px_sm-18px ">COFFEE CREAM & CHOCOLATE</div>
              <div class="fs-28px_md-26px_sm-24px mt-7px text-white text-weight-bold">
                Girella Motta Cacao <br> Soft Sponge Cake
              </div>
              <div class="q-mt-lg">
                <q-btn class="btn" unelevated rounded to="/shop/" color="secondary" size="15px" label="SHOP NOW" />
              </div>
            </div>
          </div>
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="2">
        <q-img class="w-100pr h-610px"
          src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612756773_1-p-fon-goluboi-s-fruktami-1.jpg">
          <div class="w-100pr h-100pr row items-center" >
            <div class="fs-25px w-26pr w-60pr q-ml-xl" style="background: none">
              <div class="text-yellow-6 fs-28px_md-22px_sm-18px">COFFEE CREAM & CHOCOLATE</div>
              <div class="fs-28px_md-26px_sm-24px mt-7px text-white text-weight-bold">
                Girella Motta Cacao Soft Sponge Cake
              </div>
              <div class="q-mt-lg">
                <q-btn class="btn" unelevated rounded to="/shop/" color="secondary" size="15px" label="SHOP NOW" />
              </div>
            </div>
          </div>
        </q-img>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
<style scoped>
.btn {
  padding: 5px 20px;
  font-size: 10px;
}

.q-carousel__slide,
.q-carousel .q-carousel--padding {
  padding: 0px;
}


</style>
