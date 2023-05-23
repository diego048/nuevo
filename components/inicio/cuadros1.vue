<template>
    <div>
     <div class="container">
       <div class="row">
         <div class="col-6 col-md-4 col-sm-6"
           v-for="card in cards"
           :key="card.id"
           align="center"
           v-scrolls
         >
         <div v-if="activador">
           <NuxtLink to="/proyectos" style="text-decoration: none">
             <div class="card1">
              <div class="overlay"></div>
               <img
                 :src="card.src"
                 style="height:300px; width: 100%; object-fit: cover"
                 :alt="card.alt"
               >
             </div>
           </NuxtLink>
           </div>
           <div v-if="!activador">
           <NuxtLink :to="{ name: 'login' }" style="text-decoration: none">
             <div class="card1">
              <div class="overlay"></div>
               <img
                 :src="card.src"
                 style="height:300px; width: 100%; object-fit: cover"
                 :alt="card.alt"
               >
             </div>
           </NuxtLink>
           </div>
        </div>
        
        <div class="col-6 col-md-4 col-sm-6 d-block d-sm-block d-md-none"
           align="center"
           v-scrolls
         >
         <div v-if="activador">
           <NuxtLink to="/proyectos" style="text-decoration: none">
             <div class="card1">
              <div class="overlay"></div>
               <img
                 :src="imag1"
                 style="height:300px; width: 100%; object-fit: cover"
                 alt="imagen de proyecto"
               >
             </div>
           </NuxtLink>
           </div>
           <div v-if="!activador">
           <NuxtLink :to="{ name: 'login' }" style="text-decoration: none">
             <div class="card1">
              <div class="overlay"></div>
               <img
                 :src="imag1"
                 style="height:300px; width: 100%; object-fit: cover"
                 alt="imagen de proyecto"
               >
             </div>
           </NuxtLink>
           </div>
        </div>
        
        </div>
    </div>
    </div>
</template>
<script>
 import { defineComponent } from "vue";
 
   //imagenes
   import ima1 from "../../assets/Gloria/Gloria.jpg";
   import ima2 from "../../assets/imagenes/proyecto8.jpg";
   import ima3 from "../../assets/imagenes/poderosa.jpg";
   import ima4 from "../../assets/imagenes/proyecto3.jpg";
   export default defineComponent({
     beforeMount(){
       if(localStorage.getItem("token")){
         this.activador = true
       };
     },
     data() {
       return {
         activador: false,
         imag1: ima4, 
         cards: [
           {
             id: 1,
             src: ima1,
             flex: 6,
             flex1: 4,
             show: false,
             alt: "proyecto de gloria"
           },
           {
             id: 2,
             src: ima2,
             flex: 6,
             flex1: 4,
             show: false,
             alt: "proyecto"
           },
           {
             id: 3,
             src: ima3,
             flex: 6,
             flex1: 4,
             show: false,
             alt: "proyecto de minera"
           },
         ],
       };
     },
   });
</script>
<style scoped>
.card1:hover .overlay {
  opacity: 1;
  background-color: rgba(129, 129, 129, 0.171);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
   .before-enter {
     opacity: 0;
     transform: translateX(100px);
     transition: all 1s ease-out;
   }
   .enter {
     opacity: 1;
     transform: translateX(0px);
   }
   .card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
}
</style>
