<template>
    <div>
      <div class="container" v-scrolls>
        <!-- cuadro izquierda-->
        <div class="card1"
          style="background-color: rgba(256, 256, 256, 0.35)"
        >
          <div class="d-flex row">
            <div
              class="ma-0 pa-0 d-sm-none col-12 col-sm-6"
              style="height: 100%"
            >
              <img
                :src="p3"
                style="height: 100%; width:100% ; object-fit: cover"
                alt="equipamiento"
              >
          </div>
            <div class="col-12 col-sm-6" style="color: black">
              <h1 align="center" style="color: orangered; margin-top: 8px" class="d-none d-sm-block">
                EQUIPAMIENTO WCW
              </h1>
              <h1 align="center" style="color: orangered; margin-top: 8px;font-size: 40px;" class="d-block d-sm-none">
                EQUIPAMIENTO WCW
              </h1>
              <p align="justify" style="padding-left: 3%; padding-right: 3%">
                Ofrecemos a nuestros clientes una gran variedad de soluciones en
                almacenamiento, como por ejemplo; Sistemas de Estantería
                Convencional, Estantería de Media Carga, Estantería Compacta o Drive
                In, Estantería Push back, equipos para almacenes, entre otros.
              </p>
              <br />
              <b
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                MÁS INFORMACIÓN
              </b>
            </div>
            <div
              class="ma-0 pa-0 d-none d-sm-flex  col-12 col-sm-6 flex d-flex align-self-stretch"
            >
              <img
                cover
                :src="p3"
                style="height: 100%;  width:100% ; object-fit: cover"
              >
        </div>
        </div>
        </div>
    </div>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import gerencia from "../../assets/Gloria/Gloria.jpg";
  import gerencia1 from "../../assets/Gloria/Gloria-op.jpg";

  export default defineComponent( {
    data() {
      return {
        p3: gerencia,
        p4: gerencia1,
      };
    },
  });
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
  .card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
}
  </style>
