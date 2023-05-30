<template>
  <div style="background-color: rgb(246, 246, 246); overflow-x: hidden">
    <br />
    <br />
    <div class="contenedor1">
      <img
        :src="p1"
        alt="estanteria"
        style="
          filter: brightness(25%);
          height: 160px;
          width: 100%;
          object-fit: cover;
        "
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
            En LOGICORPERU nos especializamos en el diseño, la medición, ejecución 
            y supervisión de losas planas y superplanas para almacenes operados por 
            equipos de gran altura en pasillos angostos en trafico aleatorio y/o definido.
          </p>
          <br />
        </div>
        <div
          class="ma-0 pa-0 col-12 col-sm-6 order-2 order-sm-1"
          style="height: 50vh; min-height: 287px"
        >
          <img alt="estanteria" :src="p3" style="object-fit: cover; height: 100%; width: 100%" />
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
        <div class="ma-0 pa-0 col-12 col-sm-6">
          <img
            :src="p4"
            alt="plano"
            style="object-fit: contain; height: 100%; width: 100%"
          />
        </div>
      </div>
    </div>
    <br />
    <h1 align="center" v-scrolls>Proyectos</h1>
    <p align="center" v-scrolls>Algunas imagenes de nuestros proyectos</p>
    <div class="container">
      <div class="d-flex row">
        <div
          class="card2"
          align="justify"
          @click="showDialog1()"
          style="cursor: pointer"
          v-if="!activador1"
        >
          <div class="overlay"></div>
          <span style="white-space: normal">
            <h5 align="center" style="text-decoration: none">MÁS INFO</h5>
          </span>
        </div>
        <div
          v-if="activador1"
          v-for="card in cards"
          :key="card.id"
          align="center"
          class="flex d-flex align-self-stretch col-6 col-md-4 col-sm-4"
          style="padding-bottom: 20px"
        >
          <div
            @click="showDialog(card)"
            class="card1"
            align="center"
            style="cursor: pointer; width: 100%"
            v-scrolls
          >
            <img
              v-if="card.cover"
              :src="card.src"
              :alt="card.titulo"
              style="height: 300px; width: 100%; object-fit: cover"
            />
            <img
              v-if="!card.cover"
              :alt="card.titulo"
              style="height: 300px; width: 100%; object-fit: contain"
              :src="card.src"
            />
          </div>
          <dibox v-show="card.show" @close="hideDialog(card)">
            <div fluid class="accent pa-0 align-start container">
              <div class="col">
                <div color="rgba(0,0,0,0.45)">
                  <div style="position: relative">
                    <img
                      style="height: 100%; width: 100%; object-fit: contain"
                      :src="card.src"
                      :alt="card.titulo"
                    />
                    <div style="position: absolute; top: 0; right: 0">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="hideDialog(card)"
                      >
                        <span class="mdi mdi-arrow-u-left-bottom" style="color: white"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dibox>
        </div>
        <div
          v-for="card in cards1"
          v-if="activador1"
          :key="card.id"
          align="center"
          v-scrolls
          class="col-6 col-md-4 col-sm-4"
        >
          <div class="card1">
            <video
              controls
              style="width: 100%; height: 290px; object-fit: cover"
            >
              <source :src="card.src" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
    <br />
    <pie />
    <dibox v-show="login" @close="hideDialog1()">
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
            <button type="button" class="btn btn-danger" @click="hideDialog1()">
              <span class="mdi mdi-arrow-u-left-bottom" style="color: white"></span>
            </button>
          </div>
          <div class="row" align="center">
            <div align="center" class="register col-12">
              <h2 style="color: black">Log in</h2>
              <br />
              <input type="text" placeholder="Username" v-model="username" />
              <input
                type="password"
                placeholder="password"
                v-model="password"
              />
              <button v-on:click="log2()">log in</button>
            </div>
          </div>
        </div>
      </div>
    </dibox>
  </div>
</template>

<script>







import video1 from "../assets/imagenes/super2.mp4";
import video2 from "../assets/imagenes/super3.mp4";
export default {
  beforeMount() {
    if (localStorage.getItem("token")) {
      this.activador1 = true;
    }
  },
  setup() {
    useHead({
      title: "Losa Superplana",
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
          content: "Losa Superplana",
        },
        {
          property: "og:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "og:image",
          content: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto42.jpg",
        },
        {
          property: "og:url",
          content: "/losa-superplana",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:tittle",
          content: "Losa Superplana",
        },
        {
          name: "twitter:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          name: "twitter:image",
          content: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto42.jpg",
        },
      ],
    });
  },
  unmounted() {
    document.body.style.position = "static";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflowY = "";
    window.scrollTo({ top: this.scrollPosition, behavior: "instant" });
  },
  data() {
    return {
      login: false,
      scrollPosition: 0,
      activador1: false,
      username: "",
      password: "",
      state: false,
      alert: false,
      p1: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/imagen19.jpg",
      p3: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/losa4.png",
      p4: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto42.jpg",
      cards: [
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/losa1.png",
          titulo: "Estantería Convencional",
          info: "Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes.",
          cover: true,
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/losa2.png",
          titulo: "Estantería Convencional",
          info: "Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes.",
          cover: true,
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/losa3.png",
          titulo: "Estantería Convencional",
          info: "Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes.",
          cover: true,
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision3.jpg",
          titulo: "Diagrama 1",
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision4.jpg",
          titulo: "Diagrama 2",
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision5.jpg",
          titulo: "Diagrama 3",
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision6.jpg",
          titulo: "Diagrama 4",
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision7.jpg",
          titulo: "Supervisión de losas superplanas 1",
          cover: true,
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision8.jpg",
          titulo: "Supervisión de losas superplanas 2",
          cover: true,
        },
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision9.jpg",
          titulo: "Supervisión de losas superplanas 3",
          cover: true,
        },
      ],
      cards1: [
        {
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/super.mp4",
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
    };
  },
  methods: {
    async log2() {
      let result = await axios
        .post("http://107.23.179.170:5000/login", {
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
        this.username = "";
        this.password = "";
        this.activador1 = true;
        this.state = true;
        this.$bus.$emit("activador", this.state);
        localStorage.setItem("token", true);
        return;
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
      window.scrollTo({ top: this.scrollPosition, behavior: "instant" });
    },
    showDialog1() {
      this.scrollPosition = window.pageYOffset;
      this.login = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";
    },
    hideDialog1() {
      this.login = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({ top: this.scrollPosition, behavior: "instant" });
    },
  },
};
</script>
<style scoped>
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
