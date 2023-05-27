<template>
  <div style="overflow-x:hidden">
    <br />
    <br />
    <div cover id="background">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <br />
            <br />
            <div>
              <h1 style="color: white" align="center">OFICINAS MODULARES</h1>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <br />
      <div class="row" v-scrolls>
        <div
          class="ma-0 pa-0 d-none d-sm-flex align-self-center col-12 col-sm-6"
          style="height: 50vh; min-height: 287px"
        >
          <img style="object-fit: cover; width: 100%; height: 100%" :src="p1" />
        </div>
        <div class="col-12 col-sm-6" align="center">
          <h1>CARACTERÍSTICAS</h1>
          <br />
          <p
            align="justify"
            style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
          >
            1-. Estructura Metalica con Acero de Calidad A36
            <br />
            2-.Paredes y techos con paneles sándwich termoaislantes
            <br />
            3-.Piso de Triplay fenólico de 18mm con acabado de vinílico
            <br />
            4-.Puertas y Ventanas con estructura de metálicas y vidrios de 4 mm
            <br />
            5-. Instalaciones electricas y Sanitarias
          </p>
          <br />
        </div>
        <div
          class="ma-0 pa-0 d-flex d-sm-none col-12 col-sm-6"
          style="height: 50vh; min-height: 287px"
        >
          <img style="object-fit: cover; width: 100%; height: 100%" :src="p1" />
        </div>
      </div>
      <br />
      <br />
      <div class="row" v-scrolls>
        <div class="col-12 col-sm-6" align="center">
          <h1>BENEFICIOS</h1>
          <p
            align="justify"
            style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
          >
            Reducción de costos del proyecto y entrega rápida a diferencia de un
            método tradicional
            <br />
            <br />
            Los contenedores se pueden transportar armandos o desarmados
            <br />
            <br />
            Aislamiento acústico y térmico
            <br />
            <br />
            Flexibilidad para aumentar más módulos
            <br />
            <br />
            Fácil reubicación de los modulos
            <br />
            <br />
            Los módulos se pueden personalizar para el uso y gusto de cada
            cliente
          </p>
          <br />
        </div>
        <div
          class="ma-0 pa-0 align-self-center col-12 col-sm-6"
        >
          <img cover :src="p2" style="height: 100%; width: 100%; object-fit:contain" />
        </div>
      </div>
      <br />
      <br />
      <h1 align="center" v-scrolls>FOTOS</h1>
      <p align="center" v-scrolls>Algunas de nuestras imagenes</p>
      <br />
    </div>
    <div class="container">
      <div class="d-flex row">
        <div
          v-for="card in cards"
          :key="card.id"
          align="center"
          class="col-6 col-md-4 col-sm-4"
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
            <img v-if="card.cover" :src="card.src" style="height: 300px; width: 100%; object-fit: cover" />
            <img v-if="!card.cover" style="height: 300px; width: 100%; object-fit: contain" :src="card.src" />
          </div>
          <dibox v-show="card.show" @close="hideDialog(card)">
            <div class="accent pa-0 align-start container fluid" style="position: relative">
              <div class="col" style="position: relative">
                <div style="position: relative">
                  <div style="position: relative">
                    <img
                      style="height: 100%; width: 100%; object-fit: contain;"
                      :src="card.src"
                    />
                  </div>
                </div>
                <div style="position: absolute; top: 0; right: 0">
                      <button
                        class="btn btn-danger"
                        @click="hideDialog(card)"
                      >
                        <span class="mdi mdi-arrow-u-left-bottom" style="color: white"></span>
                      </button>
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
import imagen1 from "../assets/imagenes/oficina4.jpg";
import imagen2 from "../assets/imagenes/oficina5.jpg";
import imagen3 from "../assets/imagenes/oficina3.png";
import ima1 from "../assets/imagenes/oficina2.png";
import ima2 from "../assets/imagenes/oficina1.png";
export default {
  setup() {
    useHead({
      title: "Oficinas Modulares",
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
          content: "Oficinas Modulares",
        },
        {
          property: "og:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "og:image",
          content: "../assets/imagenes/oficina3.png",
        },
        {
          property: "og:url",
          content: "/oficinas-modulares",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:tittle",
          content: "Oficinas Modulares",
        },
        {
          name: "twitter:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          name: "twitter:image",
          content: "../assets/imagenes/oficina3.png",
        },
      ],
    });
  },
  data() {
    return {
      scrollPosition: 0,
      p1: ima1,
      p2: ima2,
      cards: [
        { src: imagen1, cover: true },
        { src: imagen2, cover: true },
        { src: imagen3, cover: true },
      ],
    };
  },
  unmounted() {
    document.body.style.position = "static";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflowY = "";
    window.scrollTo({top: this.scrollPosition, behavior: "instant"});
  },
  methods: {
    showDialog(card) {
      this.scrollPosition = window.pageYOffset;
      card.show = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";
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
.contenedor {
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
}
.centrado {
  position: absolute;
  top: 50px;
}
#background {
  background: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
    url("../assets/imagenes/oficina3.png");
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
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
