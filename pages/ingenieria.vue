<template>
  <div style="overflow-x: hidden">
    <br />
    <br />
    <div>
      <div style="position: relative">
        <div style="position: absolute; z-index: -1; object-fit:cover; width: 100%; height: 100%">
          <video autoplay loop muted playsinline class="video">
            <source src="../assets/imagenes/proyect.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="container" align="center">
          <div class="row">
            <div class="col-12 col-sm-5 col-md-4 align-self-center">
              <h1 style="color: rgb(255, 102, 26)" align="left">
                Ingeniería de Proyectos Logísticos
              </h1>
              <p align="justify" style="color: white">
                es el conjunto de conocimientos, actitudes y herramientas de la
                gestión, que prestan apoyo al desarrollo más conveniente o más
                económico de la actividad empresarial, optimizando el resultado.
              </p>
            </div>
            <div class="col-0 col-sm-2 col-md-3"></div>
            <div align="justify" class="h-auto col-12 col-sm-5 col-md-5">
              <h1 align="center" style="color: white">Índice</h1>
              <div v-if="activador1">
                <div class="card2" color="transparent">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#in1"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h4>1. Estudio Mecanica de Suelos</h4>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#in2"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h4>2. Planos de Arquitectura</h4>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#in3"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>3. Planos de especialidades</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#in7"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>4. Medición de Planitud de una Losa</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#in4"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5 align="justify">
                        5. Simuladores para Definir Sistemas de Almacenaje
                      </h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#in5"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>
                        6. Simuladores para Definir Equipos de Material Handling
                      </h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#in6"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>7. Simuladores para Picking</h5>
                    </span>
                  </NuxtLink>
                </div>
              </div>
              <div
                v-for="(card, index) in cards4"
                :key="index"
                v-if="!activador1"
              >
                <div
                  align="justify"
                  class="card2"
                  @click="showDialog(card)"
                  style="cursor: pointer"
                >
                  <div class="overlay"></div>
                  <span style="white-space: normal">
                    <h5 style="text-decoration: none; color: white">
                      {{ card.nom }}
                    </h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- La cabecera con la info-->
      <div v-if="activador1">
        <div class="container">
          <br id="in1" />
          <br />

          <!--Estudio Mecanica de Suelos-->
          <br />
          <div v-scrolls>
              <div class="row card1">
                <div align="center" class="align-self-center col-12 col-sm-6 order-2 order-sm-1">
                  <h1 align="center">Estudio Preliminares</h1>
                  <br />
                  <p
                    align="justify"
                    style="
                      padding-right: 3vh;
                      padding-left: 3vh;
                      font-size: 100%;
                    "
                  >
                    1. Estudio Mecanica de Suelos
                    <br />
                    <br />
                    2. Levantamiento Topografico
                    <br />
                    <br />
                    3. Levantamiento Arquitectonico
                    <br />
                    <br />
                    4. Sistema de Utilización en Media Tensión
                  </p>
                  <br />
                </div>
                <div
                  class="col-12 col-sm-6 order-1 order-sm-2"
                >
                  <swiper :loop="true" style="height: 60vh; width:100%; min-height: 287px; color: black">
                    <swiper-slide v-for="card in cards" :key="card.src">
                      <img :src="card.src" style="width:100%; height: 100%; object-fit: contain" alt="..." />
                    </swiper-slide>
                    <div class="boton1">
                    <boton />
                  </div>
                  </swiper>
                </div>
              </div>
          </div>
          <br />
          <br id="in2" />
          <br />
          <br />
          <!--Planos de Arquitectura-->
          <br />
          <div v-scrolls>
            <div class="container">
              <div class="row card1">
                <div
                  style="min-height: 287px; height: 400px"
                  class="col-12 col-sm-6"
                >
                  <swiper :loop="true" style="height: 60vh; min-height: 287px; color: black">
                    <swiper-slide v-for="card in cards1" :key="card.src">
                      <img :src="card.src" style="width:100%; height: 100%; object-fit: contain" alt="..." />
                    </swiper-slide>
                    <div class="boton1">
                    <boton />
                  </div>
                  </swiper>
                </div>
                <div align="center" class="align-self-center col-12 col-sm-6">
                  <h1 align="center">Planos de Arquitectura</h1>
                  <br />
                  <p
                    align="justify"
                    style="
                      padding-right: 3vh;
                      padding-left: 3vh;
                      font-size: 100%;
                    "
                  >
                    1. Desarrollo de AnteProyecto
                    <br />
                    <br />
                    2. Desarrollo de Proyecto
                    <br />
                    <br />
                    3. Modelado 3D.
                    <br />
                    <br />
                    4. Renderizado y Simulación 3D.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br id="in3" />
          <br />
          <!--Planos de Especialidades-->
          <div v-scrolls>
            <div class="container">
              <div class="row card1">
                <div
                  style="height: 50vh; min-height: 287px"
                  class="col-12 col-sm-6 order-1 order-sm-2"
                >
                  <swiper :loop="true" style="height: 100%; min-height: 287px; color: black">
                    <swiper-slide v-for="card in cards5" :key="card">
                      <img :src="card" style="width:100%; height: 100%; object-fit: contain" alt="..." />
                    </swiper-slide>
                    <div class="boton1">
                    <boton />
                  </div>
                  </swiper>
                </div>
                <div align="center" class="align-self-center col-12 col-sm-6 order-2 order-sm-1">
                  <h1 align="center">Planos de especialidades</h1>
                  <br />
                  <p
                    align="justify"
                    style="
                      padding-right: 3vh;
                      padding-left: 3vh;
                      font-size: 100%;
                    "
                  >
                    1. Planos Estructurales
                    <br />
                    <br />
                    2. Planos Instalaciones Sanitarias
                    <br />
                    <br />
                    3. Planos Instalaciones Electricas
                    <br />
                    <br />
                    4. Planos de Data y Comunicaciones
                    <br />
                    <br />
                    5. Planos Mecánicos
                    <br />
                    <br />
                    6. Planos Sistema Contra Incendios
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br id="in7" />
          <br />

          <!--Medición de Planitud de una Losa-->
          <br />
          <div>
            <div v-scrolls>
              <div class="card1">
              <div class="container">
                <div class="row">
                  <div
                    align="center"
                    class="col-12 align-self-center justify-center d-none d-sm-flex"
                  >
                    <h1 align="center">Medición de Planitud de una Losa</h1>
                    <br />
                  </div>
                  <div style="height: 350px; min-height: 287px" class="col-12">
                    <swiper :loop="true" style="height: 100%; min-height: 287px; color: black">
                    <swiper-slide v-for="card in cards2" :key="card.show">
                      <img :src="card.src" style="width:100%; height: 100%; object-fit: contain" alt="..." />
                    </swiper-slide>
                    <div class="boton1">
                    <boton />
                  </div>
                  </swiper>
                  </div>
                  <div
                    align="center"
                    class="col-12 align-self-center d-flex d-sm-none justify-center"
                  >
                    <h1 align="center">Medición de Planitud de una Losa</h1>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <br />
          <br id="in4" />
          <br />

          <!--Simuladores para Definir Sistemas de Almacenaje-->
          <div>
            <h1 align="center">
              Simuladores para Definir Sistemas de Almacenaje
            </h1>
            <br />
            <div class="row">
              <div
                class="col-12 col-md-6 col-sm-6"
                v-for="card in cards3"
                :key="card.id"
                align="center"
                v-scrolls
                style="padding-bottom: 25px"
              >
                <div
                  @click="showDialog(card)"
                  align="center"
                  style="width: 100%; cursor: pointer"
                  v-scrolls
                  class="card1"
                >
                  <div class="overlay"></div>
                  <img v-if="card.cover" :src="card.src" style="height: 300px; width: 100%; object-fit: cover" />
                  <img v-if="!card.cover" style="height: 300px; width: 100%; object-fit: contain" :src="card.src" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <!--Simuladores para Definir Equipos de Material Handling-->
            <div
              id="in5"
              class="col-12 col-md-6 col-sm-6"
              align="center"
              v-scrolls
            >
              <h1 align="center">
                Simuladores para Definir Sistemas de Almacenaje
              </h1>
              <div
                @click="showDialog1()"
                elevation="21"
                align="center"
                style="width: 100%; cursor: pointer"
                v-scrolls
                class="card1"
              >
                <div class="overlay"></div>
                <img style="height: 300px; width: 100%; object-fit: contain" :src="p6" :lazy-src="p6" />
              </div>
            </div>
            <!--Simuladores para Picking-->
            <div
              id="in6"
              align="center"
              v-scrolls
              class="col-12 col-md-6 col-sm-6"
            >
              <br />
              <h1>Simuladores para Picking</h1>
              <div
                @click="showDialog2()"
                align="center"
                v-scrolls
                class="card1"
                style="cursor: pointer; width: 100%"
              >
                <div class="overlay"></div>
                <img style="height: 300px; width: 100%; object-fit: contain" :src="p7" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div v-for="card in cards3">
          <dibox v-show="card.show" @close="hideDialog(card)">
            <div elevation="0">
              <div style="position: relative; width: 80vw">
                <img style="height: 100%; width: 100%" :src="card.src" />
                <div style="position: absolute; top: 0; right: 0">
                  <button
                    class="btn btn-danger"
                    @click="hideDialog(card)"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </dibox>
        </div>
      </div>
      <dibox v-show="show1" @close="hideDialog1()"
        >div
        <div outlined elevation="0">
          <div style="position: relative; width: 80vw">
            <img style="height: 100%; width: 100%" :src="p6" :lazy-src="p6" />
            <div style="position: absolute; top: 0; right: 0">
              <button class="btn btn-danger" @click="hideDialog1()">X</button>
            </div>
          </div>
        </div>
      </dibox>
      <dibox v-show="show2" @close="hideDialog2()">
        <div>
          <div style="position: relative; width: 80vw">
            <img
              class="d-none d-sm-flex"
              style="height: 100%; width: 100%"
              :src="p7"
            />
            <img
              class="d-flex d-sm-none"
              style="height: 100%; width: 90vw"
              :src="p7"
            />
            <div style="position: absolute; top: 0; right: 0">
              <button class="btn btn-danger" @click="hideDialog2()">
                X
              </button>
            </div>
          </div>
        </div>
      </dibox>
      <div v-for="(card, index) in cards4" :key="index" v-if="!activador1">
        <dibox v-show="card.show" @close="hideDialog(card)">
          <div class="row">
            <div class="col-0 col-md-1"></div>
            <div class="col-12 col-md-10" style="width: 90vw; height: 100%">
              <div
                class="alert alert-danger"
                role="alert"
                v-if="alert"
                transition="slide-y-transition"
              >
                Usuario o Contraseña Equivocado
              </div>
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="card.show = false"
                >
                  <h1>X</h1>
                </button>
              </div>
              <div class="container">
                <div class="row" align="center">
                  <div align="center" class="register col-12">
                    <h2>Log in</h2>
                    <br />
                    <input
                      type="text"
                      placeholder="Username"
                      v-model="username"
                    />
                    <input
                      type="password"
                      placeholder="password"
                      v-model="password"
                    />
                    <button v-on:click="log2(card)">log in</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dibox>
      </div>
      <!--pie de pagina -->
    </div>
    <pie />
  </div>
</template>

<script>
import { Navigation } from 'swiper';
import ima1 from "../assets/imagenes/ingenieria1.png";
import ima2 from "../assets/imagenes/ingenieria2.png";
import ima3 from "../assets/imagenes/ingenieria3.png";
import ima4 from "../assets/imagenes/proyecto48.jpg";
import ima5 from "../assets/imagenes/proyecto49.jpg";
import ima6 from "../assets/imagenes/proyecto50.jpg";
import ima7 from "../assets/imagenes/proyecto51.jpg";
import ima8 from "../assets/imagenes/proyecto52.jpg";
import ima9 from "../assets/imagenes/proyecto53.jpg";
import ima10 from "../assets/imagenes/proyecto54.jpg";
import ima11 from "../assets/imagenes/proyecto55.jpg";
import ima12 from "../assets/imagenes/proyecto56.jpg";
import ima13 from "../assets/imagenes/losa1.png";
import ima14 from "../assets/imagenes/losa2.png";
import ima15 from "../assets/imagenes/supervision3.jpg";
import ima16 from "../assets/imagenes/supervision4.jpg";
import ima17 from "../assets/imagenes/supervision5.jpg";
import ima18 from "../assets/imagenes/supervision6.jpg";
import ima19 from "../assets/imagenes/proyecto57.jpg";
import ima20 from "../assets/imagenes/proyecto58.jpg";
import ima21 from "../assets/imagenes/proyecto59.jpg";
import ima22 from "../assets/imagenes/proyecto60.jpg";
import ima23 from "../assets/imagenes/proyecto61.jpg";
import ima24 from "../assets/imagenes/planos.png";
import ima25 from "../assets/imagenes/planos1.png";
import ima26 from "../assets/imagenes/planos2.png";
import ima27 from "../assets/imagenes/planos3.png";
import video from "../assets/imagenes/Multimedia3.mp4";
import axios from "axios";
export default {
  name: "Ingenieria de proyectos logisticos",
  beforeMount() {
    this.activador = true;
    if (localStorage.getItem("token")) {
      this.activador1 = true;
    }
  },
  setup() {
    useHead({
      title: "Ingenieria de proyectos logisticos",
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
          content: "Ingenieria de proyectos logisticos",
        },
        {
          property: "og:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "og:image",
          content:
            "https://storage.icograms.com/templates/preview/warehouse-technology.png",
        },
        {
          property: "og:url",
          content: "/ingenieria",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:tittle",
          content: "Ingenieria de proyectos logisticos",
        },
        {
          name: "twitter:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          name: "twitter:image",
          content:
            "https://storage.icograms.com/templates/preview/warehouse-technology.png",
        },
      ],
    });
    return {
        modules: [Navigation],
      };
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
      scrollPosition: 0,
      show1: false,
      show2: false,
      activador1: false,
      activador: false,
      state: false,
      alert: false,
      p1: ima1,
      p2: video,
      p3: ima2,
      p4: ima3,
      p5: ima8,
      p6: ima22,
      p7: ima23,
      p8: ima10,
      username: "",
      password: "",
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      cards: [
        { id: 1, show: false, src: ima4, cover: true },
        { id: 2, show: false, src: ima5, cover: true },
        { id: 3, show: false, src: ima6, cover: true },
        { id: 4, show: false, src: ima7, cover: false },
      ],
      cards1: [
        { id: 1, show: false, src: ima9, cover: false },
        { id: 2, show: false, src: ima10, cover: false },
        { id: 3, show: false, src: ima11, cover: false },
        { id: 4, show: false, src: ima12, cover: false },
      ],
      cards2: [
        { id: 1, show: false, src: ima13, cover: true },
        { id: 2, show: false, src: ima14, cover: true },
        { id: 3, show: false, src: ima15, cover: false },
        { id: 4, show: false, src: ima16, cover: false },
        { id: 5, show: false, src: ima17, cover: false },
        { id: 6, show: false, src: ima18, cover: false },
        { id: 7, show: false, src: ima19, cover: false },
      ],
      cards3: [
        { id: 1, show: false, src: ima20, cover: false },
        { id: 2, show: false, src: ima21, cover: false },
      ],
      cards4: [
        { nom: "1. Estudio Mecanica de Suelos", tit: "#in1", show: false },
        { nom: "2. Planos de Arquitectura", tit: "#in2", show: false },
        { nom: "3. Planos de especialidades", tit: "#in3", show: false },
        {
          nom: "4. Medición de Planitud de una Losa",
          tit: "#in7",
          show: false,
        },
        {
          nom: "5. Simuladores para Definir Sistemas de Almacenaje",
          tit: "#in4",
          show: false,
        },
        {
          nom: "6. Simuladores para Definir Equipos de Material Handling",
          tit: "#in5",
          show: false,
        },
        { nom: "7. Simuladores para Picking", tit: "#in6", show: false },
      ],
      cards5: [ima24, ima25, ima26, ima27],
    };
  },
  methods: {
    async log2(card) {
      const element = document.getElementById(card.tit);
      let result = await axios
        .post("http://3.232.232.195:5000/login", {
          username: this.username,
          password: this.password,
        })
        .catch((error) => {
          console.log(error);
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 5000);
          this.username = "";
          this.password = "";
        });
      if (result.data.success == true) {
        card.show = false;
        document.body.style.position = "static";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";
        window.scrollTo(0, this.scrollPosition);
        this.username = "";
        this.password = "";
        this.state = true;
        this.activador1 = true;
        this.$bus.$emit("activador", this.state);
        localStorage.setItem("token", true);
        card.show = false;
        return navigateTo(card.tit);
      }
    },
    showDialog(card) {
      this.scrollPosition = window.pageYOffset;
      card.show = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog1() {
      this.scrollPosition = window.pageYOffset;
      this.show1 = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog2() {
      this.scrollPosition = window.pageYOffset;
      this.show2 = true;
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
    hideDialog1() {
      this.show1 = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
    hideDialog2() {
      this.show2 = false;
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
.card2 {
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2;
  position: relative;
}
.card2:hover .overlay {
  opacity: 1;
  z-index: -1;
  background-color: rgba(129, 129, 129, 0.171);
}
.card1:hover .overlay {
  opacity: 1;
  z-index: -1;
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
.video {
  filter: brightness(25%);
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
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
.register input {
  width: 100%;
  height: 40px;
  display: block;
  margin-bottom: 30px;
  padding-left: 20px;
  border: 1px solid #535353;
  border-radius: 5px;
}
.register button {
  width: 100%;
  height: 40px;
  display: block;
  margin-bottom: 30px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.register h2 {
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
}
</style>
