<template>
    <div style="background-color: rgb(246, 246, 246); overflow-x:hidden">
        <br />
        <br />
        <br />
        <div class="container">
            <div class="row">
            <div class="align-self-center col-12 col-sm-4 col-md-4">
              <div>
                <h1 style="color: rgb(255, 102, 26)">EQUIPOS DE RAMPA</h1>
                <p align="justify">
                  Ofrecemos toda la gama de equipos para el muelle de carga
                </p>
                <br />
              </div>
            </div>
            <br />
            <div class="col-12 col-sm-8 col-md-8">
            <div class="d-none d-sm-flex">
              <div style="height: 85vh; width: 100%">
                <img
                alt="mapa de equipos de rampa"
                :src="p1"
                style="height: 85vh; width: 100%; object-fit: contain"
              />
              </div>
             </div>
              <div class="d-flex d-sm-none">
                <img alt="mapa de equipos de rampa" :src="p1" style="width: 100%; height: 100%">
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      <div class="container">
        <div class="d-flex row">
            <div
                style="padding-bottom: 20px"
                v-for="card in cards"
                :key="card.id"
                align="center"
                class="flex d-flex align-self-stretch col-6 col-sm-6 col-md-4"
            >
                <div class="card1" @click="showDialog(card)" align="center" style="width: 100%"  v-scrolls>
                    <div class="overlay" ></div>
                    <img :alt="card.title" :src="card.src" style="height: 200px; width: 100%; object-fit: contain; border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)" v-if="!card.cover">
                    <img :alt="card.title" :src="card.src" style="height: 200px; width: 100%; object-fit: cover" v-if="card.cover">
                    <h5
                        class="text-pre-wrap d-none d-sm-block"
                        align="center"
                    >
                        {{ card.title }}
                    </h5>
                    <h6
                        class="text-pre-wrap d-block d-sm-none"
                        align="center"
                    >
                        {{ card.title }}
                    </h6>
                    <p align="center" style="color: rgba(185,185,185,0.8)"> más info </p>
                </div>                
                <dibox v-show="card.show" @close="hideDialog(card)">
                    <div class="d-flex justify-content-between">
                      <h2 class="d-flex justify-end text-pre-wrap" style="word-break: break-word">
                        {{ card.title }}
                        </h2>
                      <div class="d-flex justify-start">
                        <button
                          type="button"
                          class="btn btn-danger"
                          @click="hideDialog(card)"
                        >
                          <span class="mdi mdi-arrow-u-left-bottom" style="color: white"></span>
                        </button>
                      </div>
                      </div>
                      <hr class="solid">
                      <div align="justify" class="text-pre-wrap row">
                            <div class="align-self-center col-12 col-sm-6 col-md-6">
                              {{ card.info }}
                              <br />
                              <br />
                              <div align="center" style="width: 100%">
                                <NuxtLink
                                  to="/#formulario"
                                  style="text-decoration: none"
                                  class="flex d-flex align-self-stretch link"
                                >
                              <button
                                class="btn btn-white" type="button"
                                style="text-decoration: none; color: black; background-color:rgb(255, 102, 26)"
                              >
                                <span style="white-space: normal">
                                  MÁS INFORMACIÓN
                                </span>
                            </button>
                            </NuxtLink>
                            </div>
                            <br />
                            </div>
                            <div class="col-12 col-sm-6 col-md-6">
                            <div class="d-none d-sm-flex"  v-if="!card.show1">
                                <div style="min-height: 400px; width:100%">
                                    <br />
                                    <img style="min-height: 400px; width:100%; object-fit: contain" :src="card.src" :alt="card.title">
                                </div>
                            </div>
                            <div class="d-flex d-sm-none"  v-if="!card.show1">
                                <img :alt="card.title" :src="card.src" style="width: 100%; height: 100%; object-fit: contain">
                            </div>
                            <swiper class="mySwiper" style="height: 100%" :loop="true"  v-if="card.show1" :autoHeight="true">
                        <swiper-slide v-for="card1 in card.src1">
                          <img :src="card1" :alt="card.title" style="width: 100%; height: 100%; object-fit: contain">
                        </swiper-slide>
                        <swiper-slide v-if="card.video1">
                          <video controls style="width:100%; height: 100%; object-fit: contain">
                                            <source src="https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/logicorp1.mp4" type="video/webm" />
                                            <source src="https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/logicorp1.mp4" type="video/mp4" />
                                        </video>
                        </swiper-slide>
                        <div class="boton1">
                    <boton />
                  </div>
                      </swiper>              
                            </div>
                      </div>
                </dibox>
            </div>           
        </div>
    </div>
    <br />
    <br />
    <pie />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(){
      useHead({
        title: "Equipos de Rampas",
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
          content: "Equipos de Rampas"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "https://www.ritehite.com/-/media/Widen/Photo/2020/12/01/17/05/RHH4-YTG-Glamour-jpg.ashx",
        },
        {
          property: "og:url",
          content: "/equipos-de-rampas"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Equipos de Rampas"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "https://www.ritehite.com/-/media/Widen/Photo/2020/12/01/17/05/RHH4-YTG-Glamour-jpg.ashx"
        },
      ],
      })
      return {
        modules: [Navigation],}
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
      p1: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas.png",
      scrollPosition: 0,
      cards: [
          {
            id: 1,
            cover: false,
            title: "NIVELADOR DE RAMPAS",
            info: "Un nivelador de rampa es un equipo que se utiliza para nivelar la diferencia de altura entre el piso de un almacén y el vehículo de entrega. Tiene una altura ajustable que se puede utilizar para varios vehículos."+ "\n" + "\n" + "Con la rampa niveladora, se garantiza una transición suave cuando las mercancías se cargan o descargan desde/hacia un camión. El nivelador se encuentra generalmente en las instalaciones del almacén y en el patio de embarque o tren.",
            src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampasA.jpeg",
            flex: 6,
            flex1: 4,
            show1: false,
            show: false,
          },
          {
            id: 2,
            cover: true,
            title: " SELLO Y ABRIGOS DE MUELLES ELEVADORES",
            info: "Los sellos de muelle son almohadillas de espuma en las que se comprime el remolque cuando retrocede y se apoya contra los parachoques del muelle, formando un sello alrededor de tres lados del remolque. Por lo general, los sellos para andenes brindan un sello hermético a un precio relativamente bajo, pero pueden desgastarse fácilmente en los andenes de carga que reciben mucho tráfico. Los sellos de muelle se usan mejor cuando hay una pequeña variación en el tamaño y el estilo de los remolques que se sirven." + "\n" + "\n" + "Los abrigos de muelle son recintos que sellan el perímetro del remolque para formar un sello.",
            src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/sellos.jpeg",
            flex: 6,
            flex1: 4,
            show1: false,
            show: false,
          },
          {
            id: 3,
            cover: false,
            title: "PLATAFORMA NIVELADORA HORIZONTAL DE RAMPA",
            info: "Las mesas elevadoras de tijera doble son una solución segura y eficiente para el almacenamiento y la transferencia de productos en la planta. Las mismas características de construcción de alta calidad que se encuentran en los andenes de elevación estacionarios se incorporan en todos los elevadores de tijera. Cada cilindro de elevación está encerrado en una carcasa de acero resistente a la intemperie.",
            src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/plataforma-niveladora.jpg",
            flex: 6,
            flex1: 4,
            show1: false,
            show: false,
          },
          {
            id: 4,
            cover: true,
            title: "PUERTAS SECCIONALES",
            info: "La puerta seccional esta compuesta por elementos individuales, denominados paneles, unidos entre si por bisagras. Una ventaja de las puetas seccionales es que ante el choque de un montacarga, no es necesario cambiar toda la puerta sino solo el panel dañado.",
            src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas1.png",
            src1: ["https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas1.png", "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas4.png", "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas5.png"],
            flex: 6,
            flex1: 4,
            show1: true,
            show: false,
          },
          {
            id: 4,
            cover: true,
            title: "PUERTA DE APERTURA RÁPIDA",
            info: "Las puertas de apertura rápida se utilizan para facilitar un tráfico fluido en los zonas del almacén con mucho tránsito, ofreciendo numerosas ventajas. Una ellas es el ahorro energético, flujo de trabajo rápido, entre otras.",
            src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas2.png",
            src1: ["https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas2.png"],
            flex: 6,
            flex1: 4,
            show1: true,
            show: false,
            video1: true,
          },
          {
            id: 5,
            cover: true,
            title: "PUERTA ENROLLABLE",
            info: "Las puertas enrollables son idealmente usadas para las puertas exteriores del almacén, debido a la gran seguridad que ofrecen. Se utilizan principalmente en garajes, locales comerciales, muelles de carga en almacenes, interiores y exteriores de almacenes.",
            src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas3.png",
            src1: ["https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas3.png", "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/rampas6.png"],
            flex: 6,
            flex1: 4,
            show1: true,
            show: false,
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
        document.body.style.overflowY = 'scroll';
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-x: hidden;
  position: relative;
  cursor: pointer;
}
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
</style>
