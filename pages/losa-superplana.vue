<template>
    <div style="background-color: rgb(246, 246, 246);overflow-x:hidden">
        <br />
        <br />
        <div class="contenedor1">
            <img
            :src="p1"
            style="filter: brightness(25%); height: 160px; width: 100%; object-fit: cover;"
            />
            <div class="centrado">
            <h1 align="center" color="white">LOSA SUPERPLANA</h1>
            </div>
        </div>
        <div class="container">
        <!--los cuadros de informacion-->
        <br />
        <div class="row" v-scrolls>
          <div class="col-12 col-sm-6 order-1 order-sm-2" align="center">
            <h1>DESCRIPCIÓN</h1>
            <p
              align="justify"
              style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
            >
              LOGICORPERU compañía especializada en medición, definición y control
              de superficies para pisos de concreto especializada en la
              construcción de losas superplanas especiales para almacenes en donde
              se opera a grandes alturas con equipos de pasillo angosto y tráfico
              definido.
            </p>
            <br />
          </div>
          <div
            class="ma-0 pa-0 col-12 col-sm-6 order-2 order-sm-1"
            style="height: 50vh; min-height: 287px"
          >
            <img
              :src="p3"
              style="object-fit: cover; height: 100%; width: 100%"
            >
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="row" v-scrolls>
          <div class="col-12 col-sm-6" align="center">
            <h1>DISEÑO Y EJECUCIÓN</h1>
            <p
              align="justify"
              style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
            >
              Nos encargamos de diseñar y garantizar la excelencia en la plenitud
              de la losa. Somos los primeros especialistas en este rubro
              desarrollando la especialidad desde hace más de 15 años.
            </p>
            <br />
          </div>
          <div
            class="ma-0 pa-0 col-12 col-sm-6"
            style="height: 50vh"
          >
            <img
              :src="p4"
              style="object-fit: contain; height: 100%; width: 100%"
            >
          </div>
        </div>
      </div>
      <br />
      <h1 align="center" v-scrolls>Fotos</h1>
      <p align="center" v-scrolls>Algunas imagenes de nuestros proyectos</p>
      <div class="container">
        <div class="d-flex row">
            <div
                v-for="card in cards"
                :key="card.id"
                align="center"
                class="flex d-flex align-self-stretch col-6 col-md-4 col-sm-4"
                style="padding-bottom: 20px"
            >
                <div @click="showDialog(card)" class="card1" align="center" style="cursor: pointer; width: 100%"  v-scrolls>
                    <img
                    v-if="card.cover"
                    :src="card.src"
                    style="height: 300px; width: 100%; object-fit: cover"
                  >
                  <img
                    v-if="!card.cover"
                    style="height: 300px; width: 100%; object-fit: contain"
                    :src="card.src"
                  >
                </div>                
                <dibox v-show="card.show" @close="hideDialog(card)">
                    <div fluid class="accent pa-0 align-start container">
                        <div class="col">
                        <div color="rgba(0,0,0,0.45)">
                            <div style="position: relative">
                            <img
                                style="height: 100%; width: 100%; object-fit: contain"
                                :src="card.src"
                            >
                            <div
                                style="position: absolute; top: 0; right: 0"
                            >
                                <button
                                type="button"
                                class="btn btn-white"
                                style="color: rgb(203, 50, 52)"
                                @click="hideDialog(card)"
                                >
                                <h2>X</h2>
                                </button
                                >
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </dibox>
            </div>
            <div
            v-for="card in cards1"
            :key="card.id"
            align="center"
            v-scrolls
            class="col-6 col-md-4 col-sm-4"
          >
            <div class="card1">
              <video controls style="width: 100%; height: 290px; object-fit:cover">
                <source :src="card.src" type="video/mp4" />
              </video>
            </div>
          </div>           
        </div>
    </div>
    <br />
    <pie />
  </div>
</template>

<script>
  import losa from "../assets/imagenes/losa4.png";
  import losa1 from "../assets/imagenes/losa1.png";
  import losa2 from "../assets/imagenes/losa2.png";
  import losa3 from "../assets/imagenes/losa3.png";
  import losa4 from "../assets/imagenes/proyecto42.jpg";
  import super1 from "../assets/imagenes/supervision3.jpg";
  import super2 from "../assets/imagenes/supervision4.jpg";
  import super3 from "../assets/imagenes/supervision5.jpg";
  import super4 from "../assets/imagenes/supervision6.jpg";
  import super5 from "../assets/imagenes/supervision7.jpg";
  import super6 from "../assets/imagenes/supervision8.jpg";
  import super7 from "../assets/imagenes/supervision9.jpg";
  import video from "../assets/imagenes/super.mp4";
  import video1 from "../assets/imagenes/super2.mp4";
  import video2 from "../assets/imagenes/super3.mp4";
  import ima1 from "../assets/imagenes/imagen19.jpg";
export default {
    setup(){
      useHead({
        title: "Losa Superplana",
        meta: [
        {
          name: "robots",
          content: "index, follow"
        },
        {
          name: "description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "site_name",
          content: "LogicorPeru"
        },
        {
          property: "og:title",
          content: "Losa Superplana"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "../assets/imagenes/losa4.png",
        },
        {
          property: "og:url",
          content: "/losa-superplana"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Losa Superplana"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "../assets/imagenes/losa4.png"
        },
      ],
      })
    },
      unmounted(){
    document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo({top: this.scrollPosition, behavior: "instant"});
  },
  data() {
    return {
      scrollPosition: 0,
      p1: ima1,
      p3: losa,
      p4: losa4,  
      cards: [
          {
            src: losa1,
            titulo: "Estantería Convencional",
            info: "Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes.",
            cover: true,
          },
          {
            src: losa2,
            titulo: "Estantería Convencional",
            info: "Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes.",
            cover: true,
          },
          {
            src: losa3,
            titulo: "Estantería Convencional",
            info: "Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes.",
            cover: true,
          },
          {
            src: super1,
            titulo: "Diagrama 1",
          },
          {
            src: super2,
            titulo: "Diagrama 2",
          },
          {
            src: super3,
            titulo: "Diagrama 3",
          },
          {
            src: super4,
            titulo: "Diagrama 4",
          },
          {
            src: super5,
            titulo: "Supervisión de losas superplanas 1",
            cover: true,
          },
          {
            src: super6,
            titulo: "Supervisión de losas superplanas 2",
            cover: true,
          },
          {
            src: super7,
            titulo: "Supervisión de losas superplanas 3",
            cover: true,
          },
        ],
        cards1: [
          {
            src: video,
            titulo: "Video de supervisión de losas superplanas 1",
          },
          {
            src: video1,
            titulo: "Video de supervisión de losas superplanas 2",
          },
          {
            src: video2,
            titulo: "Video de supervisión de losas superplanas 3",
          },
        ],
    }
  },
  methods: {
    showDialog(card) {
        this.scrollPosition = window.pageYOffset;
        (card.show) = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    hideDialog(card) {
        (card.show) = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    }
  }
}
</script>
<style scoped>
.contenedor1 {
  position: relative;
  text-align: center;
  color: white;
  height: 160px;
  width: 100%;
}
.centrado {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  position: relative;
}
</style>
