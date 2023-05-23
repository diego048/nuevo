<template>
    <div>
      <!-- cuadro derecha-->
      <div class="container" v-scrolls>
        <div class="card1"
          style="background-color: rgba(256, 256, 256, 0.35)"
        >
          <div class="row">
            <div class="col-12 col-sm-6"
            >
              <img
                :src="p3"
                style="object-fit: contain; height: 100%; width: 100%;"
                alt="proyecto gloria"
              >
          </div>
            <div class="col-12 col-sm-6" style="color:black">
              <h1 align="center" style="color: orangered; margin-top: 8px" class="d-none d-sm-block">
                CONSULTORÍA
              </h1>
              <h1 align="center" style="color: orangered; margin-top: 8px; font-size: 40px;" class="d-block d-sm-none">
                CONSULTORÍA
              </h1>
              <p
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                La Consultoría tiene como objetivo principal la optimización del
                diseño de sus almacenes, utilizando tecnología de última generación
                la misma que permitirá la optimización de los procesos de la cadena
                de abastecimiento en todas sus etapas.
              </p>
              <br />
              <b
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                MÁS INFORMACIÓN
              </b>
              <br />
            </div>
        </div>
        </div>
    </div>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import gerencia from "../../assets/imagenes/diseño1.png";
  import gerencia1 from "../../assets/imagenes/diseño1.png";

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
