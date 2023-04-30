<template>
  <div style="overflow-x: hidden">
    <br />
    <br />
    <div>
      <!-- La cabecera con la info-->
      <div style="position: relative">
        <div
          style="position: absolute; width: 100%; height: 100%"
        >
          <video autoplay loop muted playsinline class="video1">
            <source src="../assets/imagenes/proyect.mp4" type="video/webm" />
            <source src="../assets/imagenes/proyect.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="container" align="center">
          <div class="row">
            <div class="col-12 col-sm-5 col-md-4 align-self-center">
              <br class="d-block d-md-none" />
              <br class="d-block d-md-none" />
              <h1 style="color: rgb(255, 102, 26)" align="left">
                Diseño de Almacenes WCW
              </h1>
              <p align="justify">
                Analizando los volúmenes, flujos de mercadería, ordenes de
                compras recibidas, pedidos diarios despachados y los
                procedimientos que usan.
              </p>
            </div>
            <div class="col-1 col-md-1 d-sm-none d-md-block"></div>
            <div
              class="col-12 col-sm-7 col-md-7"
              align="justify"
              style="height: 100%"
            >
              <h1 align="center">Índice</h1>
              <div v-if="activador1">
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di1"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>1. Diseño de Almacenes Nuevos WCW</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di8"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>2. Análisis financiero</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di2"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>3. Optimización de Almacenes</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di3"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>4. Selección de WMS para CDs WCW</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di4"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5 align="justify">
                        5. Gestión y/o ejecución de proyectos
                      </h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di5"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>6. Cubicaje</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di6"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>7. Ratios</h5>
                    </span>
                  </NuxtLink>
                </div>
                <div class="card2">
                  <div class="overlay"></div>
                  <NuxtLink
                    class="link"
                    to="#di7"
                    style="text-decoration: none; color: white"
                  >
                    <span style="white-space: normal">
                      <h5>8. Profiling</h5>
                    </span>
                  </NuxtLink>
                </div>
              </div>
              <div
                v-for="(card, index) in cards"
                :key="index"
                v-if="!activador1"
              >
                <div
                  class="card2"
                  align="justify"
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
      <div v-for="(card, index) in cards" :key="index" v-if="!activador1">
        <dibox v-show="card.show" @close="hideDialog(card)">
          <div class="row">
            <div class="col-0 col-md-1" cols="0" md="1"></div>
            <div
              class="col-12 col-md-10"
              cols="12"
              md="10"
              style="width: 90vw; height: 100%"
            >
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
                  @click="hideDialog(card)"
                >
                  <h1>X</h1>
                </button>
              </div>
              <div class="row" align="center">
                <div align="center" class="register col-12">
                  <h2 style="color: black">Log in</h2>
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
        </dibox>
      </div>
      <div v-if="activador1" class="container">
        <!--los cuadros de informacion-->
        <br id="di1" />
        <br />
        <div class="card1" v-scrolls>
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-6" style="min-height: 287px">
                <img
                  :src="p1"
                  style="
                    object-fit: contain;
                    height: 100%;
                    width: 100%;
                    padding: 5px;
                  "
                />
              </div>
              <div class="col-12 col-sm-6 col-md-6" align="center">
                <h2 align="center">Diseño de Almacenes Nuevos WCW</h2>
                <br />
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  1. Metodología
                  <br />
                  2. Layouts Generales
                  <br />
                  3. Patio de Maniobras
                  <br />
                  4. Recepción
                  <br />
                  5. Oficinas
                  <br />
                  6. Sistemas de Almacenamiento
                  <br />
                  7. Equipos de Material Handling
                  <br />
                  8. Picking
                  <br />
                  9. Despacho
                  <br />
                  10. Integración
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="card1" v-scrolls>
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6 order-2 order-sm-1" align="center">
                <br />
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  1. Operaciones Especificas
                </p>
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 6vh; font-size: 100%"
                >
                  1.1 Transpaletas Manuales vs Eléctricas
                  <br />
                  1.2 Transpaletas Eléctricas vs Transportadores de Fajas
                </p>
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  2. Diseños Integrales
                </p>
              </div>
              <div
                style="min-height: 287px"
                class="col-12 col-sm-6 order-1 order-sm-2"
              >
                <img style="width: 100%; height: 100%" :src="p2" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br id="di8" />
        <br />
        <br />
        <div class="card1" v-scrolls>
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6" style="min-height: 287px">
                <img
                  :src="p3"
                  style="object-fit: contain; height: 100%; width: 100%"
                />
              </div>
              <div class="col-12 col-sm-6" align="center">
                <h2 align="center">Análisis financiero</h2>
                <br />
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  1. Inversiones
                  <br />
                  2. Costo de Operación
                  <br />
                  3. Homologación de Alternativas
                  <br />
                  4. ROI
                  <br />
                  5. Etapas
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br id="di2" />
        <br />
        <div class="card1" v-scrolls>
          <div class="row">
            <div class="col-12 col-sm-6 order-2 order-sm-1" align="center">
              <h2 align="center">Optimización de Almacenes</h2>
              <br />
              <p
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                1. Volúmenes y flujos de mercadería
                <br />
                2. OC Recibidas
                <br />
                3. Pedidos despachados
              </p>
            </div>
            <div
              class="col-12 col-sm-6 ma-0 pa-0 order-1 order-sm-2"
              style="min-height: 287px"
            >
              <img
                style="height: 100%; width: 100%; object-fit: contain"
                :src="p4"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br id="di3" />
        <br />
        <div class="card1" v-scrolls>
          <div class="container">
            <h2 align="center">Selección de WMS para CDs WCW</h2>
            <br />
            <div class="row">
              <div
                class="col-12 col-sm-6 col-md-4"
                style="min-height: 287px; height: 100%; padding: 5px"
              >
                <h3 align="center">HARDWARE</h3>
                <br />
                <img
                  :src="p5"
                  style="object-fit: contain; height: 100%; width: 100%"
                />
              </div>
              <div
                class="col-12 col-sm-6 col-md-4"
                style="min-height: 287px; height: 100%; padding: 5px"
              >
                <h3 align="center">WMS</h3>
                <img
                  :src="p6"
                  style="object-fit: contain; height: 100%; width: 100%"
                />
              </div>
              <div class="col-sm-3 d-none d-sm-block d-md-none"></div>
              <div
                style="min-height: 287px; height: 100%; padding: 5px"
                class="col-12 col-md-4 col-sm-6"
              >
                <h3 align="center">SOFTWARE</h3>
                <img
                  :src="p7"
                  style="object-fit: contain; height: 100%; width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br id="di4" />
        <br />
        <div class="card1" v-scrolls>
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6" style="min-height: 287px">
                <img
                  style="
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                    padding: 8px;
                  "
                  :src="p8"
                />
              </div>
              <div class="col-12 col-sm-6" align="center">
                <h2 align="center">
                  Gestión y/o ejecución de proyectos logísticos
                </h2>
                <br />
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  1. Pert
                  <br />
                  <br />
                  2. Diagrama gantt
                  <br />
                  <br />
                  3. Seguimiento
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br id="di5" />
        <cubicaje1 />
      </div>
      <br v-if="activador1" />
      <!--pie de pagina -->
    </div>
    <pie />
  </div>
</template>

<script>
import ima1 from "../assets/imagenes/diseño1.png";
import ima2 from "../assets/imagenes/diseño2.png";
import ima3 from "../assets/imagenes/diseño3.png";
import ima4 from "../assets/imagenes/diseño5.png";
import ima5 from "../assets/imagenes/diseño6.png";
import ima6 from "../assets/imagenes/diseño7.png";
import ima7 from "../assets/imagenes/diseño8.png";
import ima8 from "../assets/imagenes/diseño4.png";
import axios from "axios";
export default {
  name: "diseño-almacen",
  unmounted() {
    document.body.style.position = "static";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflowY = "";
    window.scrollTo({top: this.scrollPosition, behavior: "instant"});
  },
  beforeMount() {
    if (localStorage.getItem("token")) {
      this.activador1 = true;
    }
  },
  setup() {
    useHead({
      title: "Diseño de almacenes",
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
          content: "Diseño de almacenes",
        },
        {
          property: "og:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "og:image",
          content:
            "https://mecaluxes.cdnwm.com/articulos-de-logistica/diseno-y-layout-de-un-almacen-6-factores-basicos/image-0.1.0.jpg",
        },
        {
          property: "og:url",
          content: "/diseño-almacen",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:tittle",
          content: "Diseño de almacenes",
        },
        {
          name: "twitter:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          name: "twitter:image",
          content:
            "https://mecaluxes.cdnwm.com/articulos-de-logistica/diseno-y-layout-de-un-almacen-6-factores-basicos/image-0.1.0.jpg",
        },
      ],
    });
  },
  data() {
    return {
      scrollPosition: 0,
      activador1: false,
      username: "",
      password: "",
      state: false,
      alert: false,
      p1: ima1,
      p2: ima2,
      p3: ima3,
      p4: ima4,
      p5: ima5,
      p6: ima6,
      p7: ima7,
      p8: ima8,
      cards: [
        { nom: "1. Diseño de Almacenes Nuevos WCW", tit: "#di1", show: false },
        { nom: "2. Análisis financiero", tit: "#di8", show: false },
        { nom: "3. Optimización de Almacenes", tit: "#di2", show: false },
        { nom: "4. Selección de WMS para CDs WCW", tit: "#di3", show: false },
        {
          nom: "5. Gestión y/o ejecución de proyectos",
          tit: "#di4",
          show: false,
        },
        { nom: "6. Cubicaje", tit: "#di5", show: false },
        { nom: "7. Ratios", tit: "#di6", show: false },
        { nom: "8. Profiling", tit: "#di7", show: false },
      ],
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

.video1 {
  filter: brightness(25%);
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
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
