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
             title: "ESTANTERÍA CONVENCIONAL",
             info: "La Paletización Convencional constituye la solución más adecuada para aquellos almacenes en los que es necesario almacenar productos paletizados con gran variedad de referencias. Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes. Fácil control de stocks, ya que cada hueco pertenece a una paleta, y es adaptable a cualquier tipo de carga, tanto por peso como por volumen.",
             src: ima1,
             flex: 6,
             flex1: 4,
             show: false,
           },
           {
             id: 2,
             title: "ESTANTERÍA COMPACTA (DRIVE-IN)",
             info: "Este sistema de almacenaje está constituido por un conjunto de estantería, que forma calles interiores de carga, con carriles de apoyo para las paletas. Las carretillas ingresan en dichas calles interiores con la carga elevada por encima del nivel en el que va a ser depositada. Esta estantería requiere un mínimo de pasillos para maniobrar, además se logra una máxima utilización del espacio disponible (85%). Es ideal para almacenar productos homogéneos, cuya rotación o acceso directo no sea un factor determinante.",
             src: ima2,
             flex: 6,
             flex1: 4,
             show: false,
           },
           {
             id: 3,
             title: "ESTANTERÍA MEDIA CARGA",
             info: "Los Racks de Media Carga, están diseñados para aquellas bodegas donde la mercancía no será almacenada en pallets, sino que se depositará y retirará de los racks manualmente. Son idóneos cuando las referencias son muchas, las cantidades pequeñas o variables y la rotación fraccionada. El acceso se hace a pie desde el suelo o desde pasarelas elevadas colocadas entre los racks. (Pasillos elevados)",
             src: ima3,
             flex: 6,
             flex1: 4,
             show: false,
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
