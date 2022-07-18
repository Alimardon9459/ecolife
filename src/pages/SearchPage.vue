<template >
    <div class=" w-100pr mb-50px" >
        
        <div v-if="search_product!=undefined ? true : false" >
            <Suspense>
                <Shopcards :products="search_product"   />
            </Suspense>
        </div>
        
    </div>
</template>
<script>
import Shopcards from 'src/components/ShopPage/Shopcards.vue'
import {mapState } from 'vuex';
export default {
  components: {
    Shopcards
},
computed:{
    ...mapState(['search_product'])
  },

}
</script>
<style scoped >
    
</style>