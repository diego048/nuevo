<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="align-self-center col-12 col-sm-12 col-md-4">
          <div>
            <h1 style="color: rgb(255, 102, 26)">EQUIPO MH</h1>
            <p align="justify">
              Ofrecemos la venta y alquiler de toda la gama de equipos de
              “Material Handling”
            </p>
            <br />
            <button type="button" class="btn" style="background-color:rgb(255, 102, 26)">
            <NuxtLink
              class="link"
              to="equipo-mh#equipomh1"
              style="text-decoration: none; color: black"
            >
              <span style="white-space: normal"> MÁS INFORMACIÓN </span>
            </NuxtLink>
          </button>

          </div>
        </div>
        <div cols="12" sm="12" md="8" class="col-12 col-sm-12 col-md-8">
          <div class="d-none d-sm-flex">
            <div>
              <img :src="p1" :lazy-src="p1" style="height: 80vh; width: 100%; object-fit: contain" />
            </div>
          </div>
          <div class="d-flex d-sm-none">
            <img :src="p1" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="equipomh1">
      <h1 align="center">EQUIPOS DE MH</h1>
      <br />
      <div class="d-flex row">
        <div
          style="padding-bottom: 20px"
          v-for="card in cards"
          :key="card.id"
          class="flex d-flex align-self-stretch col-6 col-md-4 col-sm-6"
        >
          <div
            @click="showDialog(card)"
            align="center"
            class="card1"
            style="width: 100%; height: 100%; cursor: pointer"
            v-scrolls
          >
            <div class="overlay"></div>
            <img :src="card.p3" style="width: 100%; height: 200px; object-fit: contain" />
            <h5
              class="text-pre-wrap"
              style="word-break: break-word"
              align="center"
            >
              {{ card.p1 }}
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
          <dibox v-show="card.show" @close="hideDialog(card)">
            <div class="d-flex justify-content-between">
              <h2
                class="d-flex justify-end text-pre-wrap"
                style="word-break: break-word"
              >
                {{ card.p1 }}
              </h2>
              <div class="d-flex justify-start">
                <button
                  type="button" class="btn btn-white"
                  style="color: rgb(203, 50, 52)"
                  @click="hideDialog(card)"
                >
                  <h2>X</h2>
                </button>
              </div>
            </div>
            <hr class="solid">
            <div class="row">
              <div class="align-self-center col-12 col-sm-6 col-md-6">
                {{ card.p2 }}
                <br />
                <br />
                <div align="center">
                  <button
                    type="button"
                    class="btn"
                    to="/#formulario"
                    style="text-decoration: none; color: black; background-color: rgb(255, 102, 26)"
                  >
                    <span style="white-space: normal"> MÁS INFORMACIÓN </span>
                  </button>
                </div>
                <br />
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <img :src="card.p3" style="height: 70vh; width: 100%; object-fit: contain" />
              </div>
            </div>
          </dibox>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12 col-md-6">
          <div>
            <br />
            <h2 align="center">ALQUILER DE EQUIPOS DE MATERIAL HANDLING</h2>
            <div align="justify" class="text-body-1 font-weight-regular">
              Ofrecemos la mayor variedad de equipos de alquiler, nuevos y
              usados, garantizando el mayor nivel de eficiencia en sus
              operaciones. Nuestro servicio de alquiler incluye el mantenimiento
              integral de las máquinas y la capacitación en el uso de las
              máquinas para sus operadores.
            </div>
          
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img :src="p2" style=" width: 100%; object-fit: contain" />
        </div>
      </div>
    </div>
    <br />
    <pie />
  </div>
</template>

<script>
import transver from "../assets/imagenes/transelevador.jpg";
import montacarga from "../assets/imagenes/carro.jpeg";
import order from "../assets/imagenes/order1.png";
import retractiles from "../assets/imagenes/Multidireccional.png";
import trilateral from "../assets/imagenes/trilateral.jpg";
import ima1 from "../assets/imagenes/cabecera.png";
import ima2 from "../assets/imagenes/cabecera1.png";
import traspaleta from "../assets/imagenes/Transpaleta.png";
import montacargas from "../assets/imagenes/Montacarga.png";
export default {
  setup() {
    useHead({
      title: "Equipo MH",
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
          content: "Equipo MH",
        },
        {
          property: "og:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "og:image",
          content:
            "https://mecaluxes.cdnwm.com/manual-de-almacenaje/transpaletas/image-1.1.0.jpg",
        },
        {
          property: "og:url",
          content: "/equipo-mh",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:tittle",
          content: "Equipo MH",
        },
        {
          name: "twitter:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          name: "twitter:image",
          content:
            "https://mecaluxes.cdnwm.com/manual-de-almacenaje/transpaletas/image-1.1.0.jpg",
        },
      ],
    });
  },
  unmounted() {
    document.body.style.position = "static";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflowY = "auto";
    window.scrollTo({top: this.scrollPosition, behavior: "instant"});
  },
  data() {
    return {
      p1: ima1,
      p2: ima2,
      scrollPosition: 0,
      cards: [
        {
          id: 1,
          p1: "Transpaleta",
          p2: "No montan ningún dispositivo eléctrico, por lo que los movimientos de desplazamiento se realizan arrastrándolas manualmente. Sus patines (las plataformas paralelas que sostienen la carga) se pueden elevar ligeramente para levantar el palet del suelo y facilitar así su desplazamiento. Son de uso muy generalizado en la mayoría de los almacenes, sobre todo en trabajos auxiliares.",
          p3: traspaleta,
          p4: traspaleta,
        },
        {
          id: 2,
          p1: "Montacargas CB",
          p2: "Estos son uno de los tipos más populares de montacargas elevadores industriales, pueden ser eléctricos o de combustión interna (duales o Diesel). Estos pueden llegar desde 3 a 6 metros y pueden manejar cargas a a partir de 1 a 10 toneladas",
          p3: montacargas,
          p4: montacargas,
        },
        {
          id: 5,
          p1: "Retractiles",
          p2: "El retráctil es una máquina eléctrica que realiza el desplazamiento y las maniobras de giro y elevación retrayendo el mástil, con lo que lo desplazan hacia el centro de gravedad de la máquina.",
          p3: retractiles,
          p4: retractiles,
        },
        {
          id: 3,
          p1: "Montacargas Articulado",
          p2: "El Montacargas Articulado tiene una influencia directa sobre las soluciones de almacenaje debido que determinan la anchura mínima de los pasillos y, como consecuencia, la cantidad de estanterías que se puedan instalar y la capacidad de almacenaje. A su vez, los montacargas también inciden en la altura máxima de las estanterías, pudiendo ser mayor o menor según los casos. Los montacargas de almacén son responsables del movimiento interno de la mercancía, desde los muelles a las ubicaciones de las estanterías, o desde las áreas de producción al almacén.",
          p3: montacarga,
          p4: montacarga,
        },
        {
          id: 4,
          p1: "Order Pickers",
          p2: "Los recolectores de pedidos se utilizan principalmente para operaciones de recolección de material de rack de almacén. alta selección de material de la repisa. con capacidad de carga de 1t, con una altura de elevación de 6 m; con el controlador usa curtis;",
          p3: order,
          p4: order,
        },
        {
          id: 6,
          p1: "Trilaterales",
          p2: "Los trilaterales son máquinas para trabajar en pasillos estrechos (de entre 1.500 y 1.800 mm), gracias a lo cual se aumenta considerablemente la capacidad de almacenaje. Estos pueden alcanzar alturas de elevación de la carga por encima de los 14 m.",
          p3: trilateral,
          p4: trilateral,
        },
        {
          id: 7,
          p1: "Transelevador",
          p2: "Su estructura se compone de dos columnas verticales y, en el medio, se ubica la cuna de elevación, con la que se accede a todos los niveles de almacenaje. Es un tipo de transelevador más robusto y resistente que el monocolumna, por lo que resulta perfecto cuando hay que manipular cargas más pesadas. A su vez, también proporciona un elevado rendimiento en cuanto a agilidad.",
          p3: transver,
          p4: transver,
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
.card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
  position: relative;
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
</style>
