<template>
  <div style="overflow-x:hidden">
    <br />
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="align-self-center col-12 col-md-4 col-sm-4">
          <div style="width: 100%">
          <h1 style="color: rgb(255, 102, 26)" class="d-sm-none d-md-block">SISTEMAS DE ALMACENAJE</h1>
          <h2 style="color: rgb(255, 102, 26)" class="d-none d-sm-block d-md-none">SISTEMAS DE ALMACENAJE</h2>
          <p align="justify">
            Ofrecemos a nuestros clientes una variedad de soluciones en
            almacenamiento.
          </p>
          <br />
          <button type="button" class="btn btn-light" style="background-color:rgb(255, 102, 26)">
            <NuxtLink
              class="link"
              to="sistema-de-almacenaje#estanterias"
              style="text-decoration: none; color: black"
            >
              <span style="white-space: normal"> MÁS INFORMACIÓN </span>
            </NuxtLink>
          </button>
        </div>
        </div>
        <div class="algin-self-stretch col-12 col-md-8 col-sm-8">
          <img :src="p1" style="width: 100%; height: 100%; object-fit: cover" />
        </div>
      </div>
    </div>
    <br />
    <div class="container" id="estanterias">
      <h2 style="color: rgb(255, 102, 26)">SISTEMAS DE ALMACENAJE</h2>
      <br />
      <h2 align="center">Carga Paletizada y Gran Volumen</h2>
      <br />
      <div class="d-flex row">
        <div
          v-for="card in cards"
          :key="card.id"
          class="flex d-flex align-self-stretch col-6 col-sm-6 col-md-4"
          style="padding-bottom: 20px"
        >
          <div
            @click="showDialog(card)"
            elevation="21"
            align="center"
            style="width: 100%; cursor: pointer"
            v-scrolls
            class="card1"
          >
            <img :src="card.src" style="height: 200px; width: 100%; object-fit:cover" v-if="!card.show1" />
            <img :src="card.src" style="height: 200px; width: 100%; object-fit:cover; border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)" v-if="card.show1" />
            <h5
              class="text-pre-wrap d-none d-sm-block justify-content-center"
            >
              {{ card.title }}
            </h5>
            <h6
              class="text-pre-wrap d-block d-sm-none justify-content-center"
            >
              {{ card.title }}
            </h6>
            <p style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
          <dibox v-show="card.show" @close="hideDialog(card)">
            <div class="container" style="overflow-x: hidden">
              <div class="d-flex justify-content-between">
                <div>
                  <h2
                    class="d-flex justify-end text-pre-wrap"
                  >
                    {{ card.title }}
                  </h2>
                </div>
                <div class="d-flex justify-start">
                  <button
                  class="btn btn-danger"
                    @click="hideDialog(card)"
                  >
                    <h2>></h2>
                  </button>
                </div>
              </div>
              <hr class="solid">
              <div class="flex d-flex align-self-stretch row">
                <div class="col-12 col-sm-6 col-md-6 align-self-center">
                  {{ card.info }}
                  <br />
                  <br />
                  <div align="center">
                    <button
                      type="button"
                      class="btn btn-ligth"
                      @click="hideDialog(card)"
                      to="/#formulario"
                      style="text-decoration: none; color: black; background-color: rgb(255, 102, 26)"
                    >
                    <NuxtLink
                      class="link"
                      to="/#formulario"
                      style="text-decoration: none; color: black"
                    >
                      <span style="white-space: normal"> MÁS INFORMACIÓN </span>
                     </NuxtLink>
                    </button>
                  </div>
                  <br />
                </div>
                <div class="col-12 col-sm-6 col-md-6">
                  <div class="d-none d-sm-flex">
                    <div style="min-height: 400px; width: 100%">
                      <br />
                      <img :src="card.src" />
                    </div>
                  </div>
                  <div class="d-flex d-sm-none" style="width: 100%; height: 100%">
                    <img :src="card.src" />
                  </div>
                </div>
              </div>
            </div>
          </dibox>
        </div>
      </div>
      <br />
      <h2 align="center">Carga Media y Ligera</h2>
      <br />
      <div class="d-flex row">
        <div
          v-for="card in cards2"
          :key="card.id"
          class="flex d-flex align-self-stretch col-6 col-sm-6 col-md-4"
          style="padding-bottom: 20px"
        >
          <div
            @click="showDialog(card)"
            elevation="21"
            align="center"
            style="width: 100%; cursor: pointer"
            v-scrolls
            class="card1"
          >
            <img :src="card.src" style="height:200px; width: 100%; object-fit: cover" v-if="!card.show1" />
            <img :src="card.src" style="height: 200px; width: 100%; object-fit:cover; border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)" v-if="card.show1" />
            <h5
              class="text-pre-wrap d-none d-sm-block justify-content-center"
              align="center"
            >
              {{ card.title }}
            </h5>
            <h6
              class="text-pre-wrap d-block d-sm-none" align="center justify-content-center"
            >
              {{ card.title }}
            </h6>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
          <dibox v-show="card.show" @close="hideDialog(card)">
            <div class="d-flex justify-content-between">
              <h2 class="d-flex justify-end">{{ card.title }}</h2>
              <div class="d-flex justify-start">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="hideDialog(card)"
                >
                  <h2>></h2>
                </button>
              </div>
            </div>
            <hr class="solid">
            <div class="flex d-flex align-self-stretch row">
              <div class="col-12 col-sm-6 col-md-6 align-self-center">
                {{ card.info }}
                <br />
                <br />
                <div align="center">
                  <button
                    class="btn btn-ligth"
                    @click="hideDialog(card)"
                    to="/#formulario"
                    style="text-decoration: none; color: black; background-color: rgb(255, 102, 26)"
                  >
                  <NuxtLink
                      class="link"
                      to="/#formulario"
                      style="text-decoration: none; color: black"
                    >
                    <span style="white-space: normal"> MÁS INFORMACIÓN </span>
                   </NuxtLink>
                  </button>
                </div>
                <br />
              </div>

              <div class="col-12 col-sm-6 col-md-6">
                <div class="d-none d-sm-flex">
                  <div style="min-height: 400px; width: 100%;">
                    <br />
                    <img :src="card.src" style="object-fit: contain; width: 100%; height:60vh" />
                  </div>
                </div>
                <div class="d-flex d-sm-none">
                  <img :src="card.src" style="width: 100%; height: 100%" />
                </div>
              </div>
            </div>
          </dibox>
        </div>
      </div>
      <br />
      <br />
      <h2 align="center">Sistemas Integrados</h2>
      <br />
      <div class="d-flex row">
        <div
          v-for="card in cards1"
          :key="card.id"
          class="flex d-flex align-self-stretch col-6 col-sm-6 col-md-4"
          style="padding-bottom: 20px"
        >
          <div
            @click="showDialog(card)"
            elevation="21"
            align="center"
            style="width: 100%; cursor:pointer"
            v-scrolls
            class="card1"
          >
            <img :src="card.src" style="height: 200px; width: 100%; object-fit: cover"
             />
            <h5
              class="text-pre-wrap d-none d-sm-block justify-content-center"
            >
              {{ card.title }}
            </h5>
            <h6
              class="text-pre-wrap d-block d-sm-none" align="center justify-content-center"
            >
              {{ card.title }}
            </h6>
            <div style="color: rgba(185,185,185,0.8)">más info</div>
          </div>
          <dibox v-show="card.show" @close="hideDialog(card)">
            <div class="d-flex justify-content-between">
              <h2 class="d-flex justify-end">{{ card.title }}</h2>
              <div class="d-flex justify-start">
                <button
                  class="btn btn-danger"
                  @click="hideDialog(card)"
                >
                  <h2>></h2>
                </button>
              </div>
            </div>
            <hr class="solid">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-6 align-self-center">
                {{ card.info }}
                <br />
                <br />
                <div align="center">
                  <button
                    type="button"
                    class="btn"
                    @click="hideDialog(card)"
                    to="/#formulario"
                    style="text-decoration: none; color: black; background-color: rgb(255, 102, 26)"
                  >
                  <NuxtLink
                      class="link"
                      to="/#formulario"
                      style="text-decoration: none; color: black"
                    >
                    <span style="white-space: normal"> MÁS INFORMACIÓN </span>
                    </NuxtLink>
                  </button>
                </div>
                <br />
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <div class="d-none d-sm-flex">
                  <div style="min-height: 400px; width: 100%">
                    <br />
                    <img style="object-fit: cover; width: 100%" :src="card.src" />
                  </div>
                </div>
                <div class="d-flex d-sm-none">
                  <img :src="card.src" style="width: 100%; height: 100%" />
                </div>
              </div>
            </div>
          </dibox>
        </div>
      </div>
    </div>
    <br />
    <pie />
  </div>
</template>

<script>
import ima1 from "../assets/imagenes/almacen1.png";
import ima1_op from "../assets/imagenes/imagen17-opti.jpg";
import ima2 from "../assets/imagenes/almacen2.png";
import ima2_op from "../assets/imagenes/imagen16-opti.jpg";
import ima3 from "../assets/imagenes/almacen3.png";
import ima3_op from "../assets/imagenes/imagen15-opti.jpg";
import ima4 from "../assets/imagenes/imagen14.jpg";
import ima4_op from "../assets/imagenes/imagen14-opti.jpg";
import ima5 from "../assets/imagenes/almacen4.png";
import ima6 from "../assets/imagenes/almacen5.png";
import ima6_op from "../assets/imagenes/imagen13-opti.jpg";
import ima7 from "../assets/imagenes/almacen6.png";
import ima8 from "../assets/imagenes/imagen12.jpg";
import ima8_op from "../assets/imagenes/imagen12-opti.jpg";
import ima9 from "../assets/imagenes/imagen11.jpg";
import ima11 from "../assets/imagenes/imagen10.jpg";
import ima12 from "../assets/imagenes/almacen7.png";
import ima13 from "../assets/imagenes/alm.jpg";
export default {
  setup() {
    useHead({
      title: "Sistema de Almacenaje",
      meta: [
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "site_name",
          content: "LogicorPeru",
        },
        {
          property: "og:title",
          content: "Sistema de Almacenaje",
        },
        {
          property: "og:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "og:image",
          content: "../assets/imagenes/alm.jpg",
        },
        {
          property: "og:url",
          content: "/sistema-de-almacenaje",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:tittle",
          content: "Sistema de Almacenaje",
        },
        {
          name: "twitter:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          name: "twitter:image",
          content: "../assets/imagenes/alm.jpg",
        },
      ],
    });
  },
  unmounted() {
    document.body.style.position = "static";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflowY = "";
    window.scrollTo({top: this.scrollPosition, behavior: "instant"});
  },
  data() {
    return {
      p1: ima13,
      scrollPosition: 0,
      cards: [
        {
          id: 1,
          title: "ESTANTERÍA CONVENCIONAL",
          sub: "Apreta para mas informacion",
          info: "La estantería convencional constituye la solución más adecuada para aquellos almacenes en los que es necesario almacenar productos paletizados con gran variedad de referencias. Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes. Fácil control de stocks, debido que cada hueco pertenece a una paleta, y es adaptable a cualquier tipo de carga, tanto por peso como por volumen.",
          src: ima1,
          opti: ima1_op,
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 2,
          title: "ESTANTERÍA COMPACTA (DRIVE-IN)",
          sub: "Apreta para mas informacion",
          info: "Este sistema de almacenaje está constituido por un conjunto de estantería, que forma pasillos de carga, con carriles de apoyo para las paletas. Las montacarga ingresan en dichas pasillos con la carga elevada por encima del nivel en el que va a ser almacenada. Esta estantería requiere un mínimo de pasillos para maniobrar, además se logra una máxima utilización del espacio disponible (85%). Es ideal para almacenar productos homogéneos, cuya rotación o acceso directo no sea un factor determinante.",
          src: ima2,
          opti: ima2_op,
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 4,
          title: "ESTANTERÍA DINAMICA POR GRAVEDAD",
          sub: "Apreta para mas informacion",
          info: "La estantería para paletización dinámica por gravedad incorpora caminos de rodillos, con una ligera pendiente que permite el deslizamiento de las paletas sobre éstos. Ofrece perfecta rotación del producto gracias al desplazamiento de la carga (sistema FIFO: la primera paleta en entrar es la primera en salir); ahorro de espacio y tiempo en la manipulación de las paletas; eliminación de interferencias en la preparación de pedidos, al contar con pasillos de carga y descarga; y excelente control de stock, pues en cada pasillo de carga hay una sola referencia.",
          src: ima4,
          opti: ima4_op,
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 5,
          title: "ESTANTERIA SATELITAL MAXIPACKER",
          sub: "Apreta para mas informacion",
          info: "Este sistema ofrece una solución radical para el almacenamiento con aprovechamiento muy alto de espacio. El sistema está basado en una o más plataformas que transportan la carga dentro de los túneles de almacenamiento. Cada unidad es operada por control satelital y puede ser transferida a diferentes túneles por cualquier tipo de montacargas. Es adecuado tanto para disciplinas primero entra-primero sale: “FIFO” y último entra-primero sale: “LIFO”. Mientras el Radio Shuttle transporta la carga, el operario puede hacer otras tareas. Varias unidades pueden ser controladas por un mismo transmisor.",
          src: ima12,
          opti: ima11,
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 1,
          title: "ESTANTERÍA CANTILEVER",
          sub: "Apreta para mas informacion",
          info: "La estantería Cantiléver o estructura en voladizo es especialmente apta para el almacenamiento de cargas largas. Tanto en su versión pesada como ligera, este sistema ofrece la posibilidad de situar los niveles (brazos) a un solo lado o a ambos de la estructura, que es totalmente autónoma. La estantería cantiléver es ideal para el almacenaje de barras, perfiles, tubos, maderas, etc.",
          src: ima5,
          opti: ima4_op,
          flex: 6,
          flex1: 4,
          show: false,
          show1: true
        },
      ],
      cards1: [
        {
          id: 2,
          title: "MEZZANINE CON ENTREPLANTA",
          sub: "Apreta para mas informacion",
          info: "La Mezzanine con entreplanta es la solución ideal que permite el aprovechamiento máximo de la altura de una nave duplicando o triplicando la superficie útil de la misma. Son estructuras independientes, de fácil montaje y adaptables a cualquier espacio y necesidad de los clientes. Las entreplantas poseen varios complementos como barandillas, escaleras, puntos de descarga de paletas, etc, y los suelos que forman las mismas, pueden ser de diferentes materiales como pisos de madera, tramex, etc.",
          src: ima7,
          opti: ima6_op,
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 3,
          title: "ALMACENES AUTOPORTANTES",
          sub: "Apreta para mas informacion",
          info: "En este sistema es la propia estantería la que soporta todos los esfuerzos propios del edificio, ahorrándose con ello la construcción de la estructura del almacén. Diseñada y fabricada con la mejor tecnología, LOGICORPERU responde siempre a todos los condicionamientos técnicos requeridos. El almacén autoportante constituye la solución más acertada para un almacenamiento a grandes alturas, puesto que está concebido para que la estantería forme un grupo compacto junto con las cubiertas y los laterales del propio almacén, evitando así las columnas que le restan capacidad de almacenamiento.",
          src: ima8,
          opti: ima8_op,
          flex: 6,
          flex1: 4,
          show: false,
        },
      ],
      cards2: [
        {
          id: 1,
          title: "ESTANTERÍA SIN TORNILLOS",
          sub: "Apreta para mas informacion",
          info: "Esta es la estantería sin tornillos que ha revolucionado el mundo del almacenaje, proporcionando claras ventajas con respecto a la estantería convencional permitiendo una mayor capacidad de carga, un montaje cómodo y fácil, debido que se monta y se desmonta únicamente con la ayuda de un martillo de goma. Estantería de gran rigidez, debido a la perfecta unión de los largueros a los puntales. Los entrepaños son regulables en altura y se adaptan a las medidas estándar de material de oficina, productos como cajones de plástico, cajas de cartón, carga suelta pequeña pero pesada como tarros, botellas etc.",
          src: ima9,
          opti: ima9,
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 2,
          title: "ESTANTERIAS MOVILES",
          sub: "Apreta para mas informacion",
          src: ima11,
          opti: ima11,
          info:
            "Este sistema consiste en un conjunto de estantes /armarios montados sobre bases móviles que se desplazan sobre rieles, lo que garantiza un orden y distribución óptimos en el archivo o almacén, permitiendo obtener las siguientes ventajas:" +
            "\n" +
            "\n" +
            "- Mayor aprovechamiento de espacio, ya que solo es necesario un pasillo entre armarios." +
            "\n" +
            "- Total seguridad del material archivado, tanto ante la entrada de intrusos como del polvo y de posibles incendios." +
            "\n" +
            "- Excelente capacidad de adaptación a cualquier espacio disponible. " +
            "\n" +
            "- Facilidad de montaje.",
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 3,
          title: "ESTANTERÍA MEDIA CARGA",
          sub: "Apreta para mas informacion",
          info: "Los Racks de Media Carga, están diseñados para aquellas almacenes donde la mercancía no será almacenada en pallets, sino que se almacenara y retirará de los racks manualmente. Son idóneos cuando las referencias son muchas, las cantidades pequeñas o variables y la rotación fraccionada.",
          src: ima3,
          opti: ima3_op,
          flex: 6,
          flex1: 4,
          show: false,
        },
        {
          id: 5,
          title: "ENTREPLANTA",
          sub: "Apreta para mas informacion",
          info: "El Sistema de Almacenaje de Entreplanta es la solución óptima para el almacenamiento manual cuando el espacio o área disponible es limitado. Se trata por tanto de un sistema de almacenaje selectivo, ya que permite el acceso inmediato a todas las unidades de carga y/o referencias almacenadas, y versátil, debido a las posibilidades que ofrece para adaptarse a cualquier tipo de unidad de carga. Con este sistema, se proporciona un excelente aprovechamiento en altura, a través de la creación de diferentes niveles de pasillos de carga en altura, a los cuales se acceden a través de escaleras.",
          src: ima6,
          opti: ima6_op,
          flex: 6,
          flex1: 4,
          show: false,
          show1: true,
        },
      ],
    };
  },
  methods: {
    showDialog(card) {
      this.scrollPosition = window.pageYOffset;
      card.show = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    hideDialog(card) {
      card.show = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
  },
};
</script>
<style scoped>
.texto {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 410%;
}
.contenedor {
  position: relative;
}
.m2 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
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
