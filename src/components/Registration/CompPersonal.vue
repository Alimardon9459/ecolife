<template> 
  <div class="w-100pr row justify-center"> 
    <!-- bosh sarlavha --> 
    
    <div 
      class=" w-100pr
        justify-center 
        content-center 
        shadow-up 
        q-pb-xl
        login 
      " 
    > 
      <div class="w-100pr h-480px q-ml-md items-center"> 
        <br /> 
        <div class=" text-grey contact text-h5 text-weight-bolder"> 
          1 Personal Information
        </div> 
        <!-- inputlar boshlanishi --> 
        
        <br /> 
        <form> 
          <div class="q-mt-xl q-ml-md items-start content-start"> 
            <q-input 
              type="text" 
              class="w-90pr mb-40px" 
              v-model="fullname" 
              label="Fullname" 
              :dense="dense" 
            /> 
            <q-input 
              type="number" 
              class="w-90pr mb-40px" 
              v-model="telnumber" 
              label="Number" 
              :dense="dense" 

            /> 
          </div> 
        </form> 
 
        <div class="q-mt-xl q-ml-md"> 
          <form> 
            <q-input 
              class="w-90pr" 
              type="text" 
              v-model="address" 
              label="Address" 
              :dense="dense" 
            /> 
          </form> 
        </div> 
 
        <div class="q-mt-xl w-100pr row justify-center "> 
          <q-btn @click="getLocation()" class="btn">Lakatsiyani jo'natish  <q-icon name="location_on" class="ml-10px" color="yellow" size="20px"></q-icon></q-btn>
        </div> 
        <br /> 
        <div class="row q-mt-md justify-center"> 
          <q-btn color="secondary" @click="setOrder()" label=" Buyurtma berish " /> 
        </div> 
        <br /><br /> 
        <!-- inputlar tugashi --> 
      </div> 
      <br /> 
    </div> 
    <!-- bosh sarlavha tugashi --> 
  </div> 
</template> 
<script> 
import { ref } from '@vue/reactivity';
import { mapMutations, mapState } from 'vuex';
import Pusher from 'pusher-js'
 Pusher.logToConsole = true;

    var pusher = new Pusher('1d0bd70d1290c50eab32', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('Arzon-development');
    channel.bind('fullname', function(data) {
      costs.push(JSON.stringify(data));
    });
export default { 
  setup(){
    
    const latitude=ref('')
    const longitude=ref('')
    const user_position=ref('')
    // lakatsiyani olish funksiyasi
    const getLocation = ()=>{ 
      if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition((position)=>{ 
          location.value = position 
          latitude.value = location.value.coords.latitude 
          longitude.value = location.value.coords.longitude  
          user_position.value= latitude.value+','+longitude.value
          console.log(user_position.value);

        }) 
        
      } 
      else{ 
        alert('error'); 
      } 
    }
    
    return{
      getLocation,
      latitude,
      longitude,
      user_position
    }
  },
  
  data() { 
    return {   
      fullname: "", 
      telnumber: "", 
      address: "",
      location:"",
      users:'',
      usersId:0,
      dense:true, 
    }; 
  }, 
  computed:{
    ...mapState(["costs","shot"])
  },
  methods:{
    ...mapMutations(["SET_ORDER","CALCULATION_SHOT"]),
    
    setOrder(){
      // foydalanusvchi ma'lumotlarini POST qilish
      if(this.costs.length >=0){
        fetch('http://adminmax.pythonanywhere.com/user/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            userName: this.fullname,
            phoneNumber: this.telnumber,
            address: this.address,
            address_link:this.user_position,
            total:this.shot  ,
            ready:"1",
            time:"u"
            
          }) 
        })
        // foydalanuvchilarni ro'yxatini api da olish
        console.log("salom");
        fetch('http://adminmax.pythonanywhere.com/user/')
        .then(res=>{return res.json()})
        setTimeout(()=>{this.result},1000)
        setTimeout(() => {this.postOrder}, 1200);
      }
      else{
        alert("sizda hech qanday buyurtma yo'q")
      }
     
    },
    result(results){
      this.users = results
      console.log(this.users);
    },
    postOrder(){
       // foydalanuvchini tekshirish 3 bosqichli va uni  idsini olish
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].userName== this.fullname && this.users[i].phoneNumber==this.telnumber && this.users[i].total==this.shot){
          this.usersId=this.users[i].id
        }
      }
      // olingan id bo'yicha foydalanuvchi olgan maxsulotlarni POST qilish
      for(let i=0; i<this.costs.length;i++){
        if(this.costs[i].tip==true && this.costs[i].liters!=null ){
          fetch('http://adminmax.pythonanywhere.com/orders/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              product_name: this.costs[i].name,
              litr: this.costs[i].liters,
              quantity:this.costs[i].amount ,
              summa:this.costs[i].overallPrice,
              weight:null,
              orderForUser:this.usersId
            }) 
          })
          
        }
        else if(this.costs[i].tip==true && this.costs[i].liters==null ){
          fetch('http://adminmax.pythonanywhere.com/orders/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              product_name: this.costs[i].name,
              quantity:this.costs[i].amount ,
              litr:null,
              weight:null,
              summa:this.costs[i].overallPrice,
              orderForUser:this.usersId
            }) 
          })
        }
        else if(this.costs[i].tip==false  ){
          fetch('http://adminmax.pythonanywhere.com/orders/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              product_name: this.costs[i].name,
              weight:this.costs[i].amount,
              litr:null,
              quantity:null,
              summa:this.costs[i].overallPrice,
              orderForUser:this.usersId
            }) 
          })
        }
      }
    }

      
  },
  
}; 
</script>
<style scoped>
.shadow-up{
  box-shadow: 3px 3px 15px 0px rgb(186, 185, 185);
}
.login{
  border-radius: 20px 0px 20px 0px;
}
.btn{
  background: linear-gradient(
   to left,
    rgba(132, 0, 255, 0.63),
    rgba(174, 0, 255, 0.63),
    rgba(255, 0, 191, 0.61)
  );
   color: beige;
}
.btn:active{
  background: linear-gradient(
   to left,
    rgba(132, 0, 255 ),
    rgba(174, 0, 255),
    rgba(255, 0, 191 )
  );
  color: beige;
}
</style>