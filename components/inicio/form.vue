<template>
    <div>
     <div class="container" v-scrolls>
       <div class="row">
         <div class="col">
             <div class="alert alert-danger" role="alert" v-if="alert">
                Mensaje enviado
             </div>
         </div>
        </div>
       <div class="row">
         <div class="col-12 col-md-6 col-sm-6">
           <h1>Preguntas</h1>
           <p>
             Para todo tipo de preguntas, comentarios e inquietudes; por favor
             llámanos: 956 754 176 o completa el formulario a continuación
           </p>
           <br />
           <p>
             Jr. Tinajones 181 <br />
             Santiago de Surco <br />
             Lima - Perú<br />
           </p>
           <br />
           <h1>Oficina principal</h1>
           <p align="justify">
             jfield@logicorperu.com <br />
             Teléfono: 956 754 176
           </p>
        </div>
         <div class="col-12 col-md-6 col-sm-6">
           <h1 align="center" style="color: orangered">Contactanos</h1>
           <input class="input1" type="text" placeholder="Nombre" v-model="nombre" />
           <input class="input1" type="email" placeholder="E-mail" aria-describedby="emailHelp" v-model="correo" />
           <textarea class="textarea1" type="text" rows="6" placeholder="Mensaje" v-model="texto" ></textarea>
           <button v-on:click="form" class="button1">Enviar</button>
         </div>
        </div>
    </div>
    </div>
</template>
 
 <script>
   import axios from "axios";
   export default {
     data() {
       return {
         correo: "",
         nombre: "",
         texto: "",
         alert: false,
       };
     },
     methods: {
       async form() {
         let result = await axios.post("http://3.232.232.195:5000/correo", {
           correo: this.correo,
           nombre: this.nombre,
           texto: this.texto,
         });
         console.warn(result);
         if (result.data.success == true) {
           this.alert = true;
             setTimeout(() => {
               this.alert = false;
             }, 5000);
             this.correo = "";
             this.nombre = "";
             this.texto = "";
         }
       },
     },
   }
 </script>
 
   <style scoped>
   .before-enter {
     opacity: 0;
     transform: translateX(100px);
     transition: all 1s ease-out;
   }
   .enter {
     opacity: 1;
     transform: translateX(0px);
   }
   .input1 {
     width: 100%;
     height: 40px;
     display: block;
     margin: 20px;
     margin-bottom: 30px;
     margin-right: auto;
     margin-left: auto;
     border: 1px solid #a3a3a3;
     border-radius: 5px;
     padding-left: 20px;
   }
   .textarea1 {
     width: 100%;
     display: block;
     border: 1px solid #a3a3a3;
     border-radius: 5px;
     resize: none;
     padding-left: 20px;
     margin-bottom: 30px;
   }
   .button1 {
     width: 300px;
     height: 40px;
     padding-left: 20px;
     display: block;
     margin-bottom: 30px;
     margin-right: auto;
     margin-left: auto;
     background-color: #2640d3;
     color: #fff;
     border: none;
     border-radius: 5px;
     text-decoration: none;
   }
   </style>
   
