<template>
    <div>
      <br />
      <div>
        <!-- La cabecera con la info-->
        <div class="container">
          <div class="card1" v-scrolls>
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-6 order-2 order-sm-1">
                  <div>
                  <h2 align="center">Cubicaje</h2>
                  <p align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%">
                    <br />
                    1. Elaboración de maestro de articulos
                    <br />
                    <br />
                    2. Elaboración de maestro de articulos por item y empaque master
                    <br />
                    <br />
                    3. Servicio de medición permanente de skus
                  </p>
                  </div>
                </div>
                <div align="center" class="col-12 col-sm-6 col-md-6 order-1 order-sm-2">
                    <swiper :loop="true" style="width:100%; min-height: 287px; color: black">
                    <swiper-slide>
                      <img :src="p3"  alt="..." style="height: 300px; width: 100%; object-fit: contain">
                    </swiper-slide>
                    <swiper-slide>
                      <img :src="p4" alt="..." style="height: 300px; width: 100%; object-fit: contain">
                    </swiper-slide>
                    <swiper-slide>
                      <img :src="p5" alt="..." style="height: 300px; width: 100%; object-fit: contain">
                    </swiper-slide>
                    <swiper-slide>
                      <video controls style="width: 100%; height: 100%; object-fit: cover">
                        <source :src="p1" type="video/mp4" />
                        </video>
                    </swiper-slide>
                    <swiper-slide>
                      <video controls style="width: 100%; height: 100%; object-fit: cover">
                        <source :src="p2" type="video/mp4" />
                      </video>
                    </swiper-slide>
                    <div class="boton1">
                    <boton />
                  </div>
                    </swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br id="di6" />

        <div class="container">
          <!--los cuadros de informacion-->
          <br />
          <br />
          <div class="card1" v-scrolls>
            <div class="container">
              <div class="row">
                <div
                  class="col-12 col-sm-6"
                >
                  <img
                    :src="p6"
                    style="height: 100%; width: 100%; padding: 5px;object-fit: contain"
                  >
                </div>
                <div class="col-12 col-sm-6" align="center">
                  <h2 align="center">Ratios</h2>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 6vh; font-size: 100%"
                  >
                    1. Cubicaje
                    <br />
                    2. Inventarios Representativos
                    <br />
                    3. Reporte de Pedidos
                    <br />
                    4. Reporte de Ingresos
                    <br />
                    5. Proyecciones
                    <br />
                    6. DOP
                    <br />
                    7. DDP
                    <br />
                    8. Matriz de Proximidad
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br id="di7" />
          <br />
          <br />
          <div class="card1" v-scrolls>
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6  order-1 order-sm-2">
                  <img
                    :src="p7"
                    style="object-fit: cover; height: 100%; width: 100%; padding: 5px; object-fit: contain"
                  >
                </div>
                <div class="col-12 col-sm-6 order-2 order-sm-1" align="center">
                  <h2 align="center">Profiling</h2>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 6vh; font-size: 100%"
                  >
                    1. Densidad
                    <br />
                    2. Posiciones Almacenadas
                    <br />
                    3. Skus
                    <br />
                    4. Paretto
                    <br />
                    5. Throughput
                    <br />
                    6. Pedidos Despachados/día
                    <br />
                    7. Líneas por Pedido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </template>
  
  <script>
  import video1 from "../assets/imagenes/Multimedia2.mp4";
  export default {
    name: "CubicajeP",
    data() {
      return {
        p1: "https://ik.imagekit.io/qewkcqaku/tr:w-800/imagenes/Multimedia1.mp4",
        p2: video1,
        p3: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/cubicaje-1.png",
        p4: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/cubicaje-2.png",
        p5: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/cubicaje-3.png",
        p6: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/cubicaje-4.png",
        p7: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/cubicaje-5.png",
        justify: ["start", "end", "center", "baseline", "auto", "stretch"],
      };
    },
  };
  </script>
  
  <style scoped>
  .boton1 {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    position: absolute; 
    top: 30px; 
    width: 100%; 
    height: 100%
  }
  .swiper:hover .boton1 {
  opacity: 1
}
    .card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
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
  </style>
