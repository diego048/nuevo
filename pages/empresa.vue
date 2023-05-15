<template>
  <div style="overflow-x:hidden">
    <div>
      <video autoplay loop muted playsinline class="video">
        <source src="../assets/imagenes/logicorp1.mp4" type="video/webm" />
        <source src="../assets/imagenes/logicorp1.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="class1">
    <div class="container" style="position: relative">
      <div>
      <br />
      <br />
      <br />
      <br />
      <div style="position: relative">
        <div class="row" style="color: white">
        <div class="col-0 col-md-1"></div>
        <div class="col-md-10">
          <div>
            <h1 align="center">NOSOTROS</h1>
            <br />
            <h5 style="text-align: justify; width: 100%; height: 100%">
                Somos un grupo de profesionales especializados en diseño, construcción y equipamiento de almacenes. Contamos
                con más de 30 años de experiencia en el mercado como los mejores
                Asesores para el Equipamiento de Almacenes de Clase Mundial el cual te
                permitirá obtener el mejor ahorro en costo operativo.
            </h5>
            <br />
            <h5 style="text-align: justify; width: 100%; height: 100%">
                Tenemos el objetivo de crecer con nuestro cliente a la medida que sus
                necesidades lo requieran y brindarle la mejor asesoría para cada etapa
                de su negocio distribuyendo su almacén de la manera óptima.
            </h5>
            <br />
          </div>
        </div>
        </div>
      </div>
      <br />
      <br />
      <InicioContador />
      <br />
      <div style="position: relative">
        <div class="row" style="position: static; height: 100%" v-scrolls>
          <div
            align="center"
            class="align-self-center col-12"
          >
            <div>
              <h1 class="p1">
                Diseño y Equipamiento de Almacenes de Clase Mundial (WCW)
              </h1>
              <i class="bi bi-arrow-down" style="color:white; font-size: 70px"></i>
            </div>
          </div>
        </div>
      </div>
      <br id="mision" />
      <br />
      <div style="position: relative">
        <div class="row" style="position: static; height: 100%" v-scrolls>
          <div class="align-self-center d-none d-sm-flex col-0 col-sm-3">
          </div>
          <div class="col-12 col-sm-6" >
            <div align="center" class="ma-0 pa-0">
              <div class="container card1" style="background-color: aliceblue">
                <br />
                <h1 style="overflow-wrap: break-word">MISIÓN</h1>
                <img
                  src="https://d1ih8jugeo2m5m.cloudfront.net/2021/12/mision-de-una-empresa.jpg"
                  style="width: 100%"
                >
                <br />
                <br />
                <h6 align="justify" style="height: 100%; width: 100%">
                  Somos una empresa dedicada al diseño y equipamiento de
                  almacenes WCW, destinada a brindar la solución al problema del
                  cliente de acuerdo a su posibilidad económica, cuyas
                  soluciones analizaremos ordenadamente poniendo de por medio la
                  máxima dedicación posible y a nuestro alcance.
                </h6>
                <br />
              </div>
            </div>
          </div>
          <div class="align-self-center d-none d-sm-flex col-0 col-sm-3">
          </div>
        </div>
      </div>
      <br />
      <div style="position: relative" id="vision">
        <div class="row" style="position: static; height; 100%" v-scrolls>
          <div
            align="center"
            class="align-self-center col-0 col-sm-3"
          >
          </div>
          <div class="col-12 col-sm-6">
            <div
              class="card1"
              align="center"
              style="background-color: aliceblue"
            >
              <div class="container">
                <br />
                <h1 style="overflow-wrap: break-word">VISIÓN</h1>
                <img
                  src="https://concepto.de/wp-content/uploads/2016/03/vision.jpg"
                  style="width: 100%"
                >
                <br />
                <br />
                <h6 style="height: 100%; width: 100%">
                  Convertirnos en el líder latinoamericano de Diseño y
                  Equipamiento de Almacenes de Clase Mundial.
                </h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br id="historia" />
      <br />
      <div v-if="activador1" style="position: relative" id="emp1">
          <div>
          <h1 align="center" style="overflow-wrap: break-word; color: white">HISTORIA</h1>
          <h3 align="center" style="color:white">BenchMarks</h3>
          <br />
          <section style="background-color: transparent;">
              <div class="container py-5">
                  <div class="main-timeline">
                  <div class="timeline left">
                      <div class="card">
                      <div class="card-body p-4">
                          <h3>1998</h3>
                          <p class="mb-0">FUNDACIÓN: LOGICORP SA</p>
                      </div>
                      </div>
                  </div>
                  <div class="timeline right">
                      <div class="card">
                      <div class="card-body p-4">
                          <h3>2001</h3>
                          <div class="d-flex justify-center flex-row">
                            <img src="https://yt3.googleusercontent.com/ytc/AL5GRJX59cQqSf8oLdZ9hewy-n7ZgNRoKV_jz8abDPxl=s900-c-k-c0x00ffffff-no-rj" class="rounded-circle" style="width: 50px;"
                            alt="Avatar" />
                            <div>HERSIL</div>
                          </div>
                          <p class="mb-0">Primer almacén con trilaterales del Perú.</p>
                      </div>
                      </div>
                  </div>
                  <div class="timeline left">
                      <div class="card">
                      <div class="card-body p-4">
                          <h3>2004</h3>
                          <div class="d-flex justify-center flex-row">
                          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/21085935.545af7959670b.png" class="rounded-circle" style="width: 50px;"
                            alt="Avatar" />
                    <div class="text-h6 pl-2">Gloria</div>
                  </div>
                          <p class="mb-0">Centro de distribución más alto del país (18 metros y medio).</p>
                      </div>
                      </div>
                  </div>
                  <div class="timeline right">
                      <div class="card">
                      <div class="card-body p-4">
                          <h3>2014</h3>
                          <div class="d-flex justify-center flex-row">
                            <img src="https://logos-world.net/wp-content/uploads/2020/09/Nestle-Logo-2015-present.jpg" class="rounded-circle" style="width: 50px;"
                            alt="Avatar" />
                    <div class="text-h6 pl-2">NESTLE</div>
                  </div>
                          <p class="mb-0">Centro de distribución más moderno del país</p>
                      </div>
                      </div>
                  </div>
                  <div class="timeline left">
                      <div class="card">
                      <div class="card-body p-4">
                          <h3>2018</h3>
                          <div class="d-flex justify-center flex-row">
                            <img src="https://yt3.googleusercontent.com/ytc/AL5GRJUE3TXjZ37ihpKdEPKApQxwXd1utqiBTDT88V6l=s900-c-k-c0x00ffffff-no-rj" class="rounded-circle" style="width: 50px;"
                            alt="Avatar" />
                    <div class="text-h6 pl-2">Minera Poderosa</div>
                  </div>
                          <p class="mb-0"> Primer almacén autoportante y autosostenible de América latina.</p>
                      </div>
                      </div>
                  </div>
                  <div class="timeline right">
                      <div class="card">
                      <div class="card-body p-4">
                          <h3>2019</h3>
                          <div class="d-flex justify-center flex-row">
                            <img src="https://www.practicas.pe/organizaciones/practicas-supermercados-peruanos-sa.png" class="rounded-circle" style="width: 50px;"
                            alt="Avatar" />
                    <div class="text-h6 pl-2">SPSA</div>
                  </div>
                          <p class="mb-0">Primer centro de distribución E-comerce.</p>
                      </div>
                      </div>
                  </div>
                  <div class="timeline left">
                      <div class="card">
                      <div class="card-body p-4">
                          <h3>2022</h3>
                          <div class="d-flex justify-center flex-row">
                            <img src="https://uma.edu.pe/wp-content/uploads/2022/07/cuadro-boticasperu.jpg" class="rounded-circle" style="width: 50px;"
                            alt="Avatar" />
                    <div class="text-h6 pl-2">Boticas Perú</div>
                  </div>
                          <p class="mb-0"> Nuevo centro de distribución Boticas Perú, 20.3 metros de altura.</p>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
          </div>
      </div>

      <div v-if="!activador1">
        <div class="card14" @click="showDialog()" color="transparent" align="justify" style="cursor: pointer">
              <span style="white-space: normal">
                <h2 align="center" style="text-decoration: none; color: white"> Más info</h2>
              </span>
        </div>
      </div>
      </div>
    </div>
    </div>
    <div v-if="!activador1">
          <dibox v-show="show1" @close="hideDialog()">
            <div class="row" style="width: 80vw">
              <div class="col-0 col-md-1"></div>
              <div class="col-12 col-md-10">
                  <div
                    class="alert alert-danger" role="alert"
                    transition="slide-y-transition"
                    v-if="alert"
                  >
                    Usuario o Contraseña Equivocado
                  </div>
                  <div class="d-flex justify-content-end">
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click="hideDialog()"
                    >
                      <h1>X</h1>
                  </button>
                  </div>
                  <div class="container">
                    <div class="row" align="center">
                      <div align="center" class="register col-12">
                        <h2>Log in</h2>
                        <br />
                        <input type="text" placeholder="Username" v-model="username" />
                        <input type="password" placeholder="password" v-model="password" />
                        <button v-on:click="log2()">log in</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </dibox>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
// Components

export default defineComponent({
  name: "empresa",
    unmounted(){
      const element = document.querySelector('.class1');
      element.style.position = "static";
      document.body.style.top = `-${this.scrollPosition}px`;
      element.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
},
  beforeMount(){
  if(localStorage.getItem("token")){
      this.activador1 = true
    }
},
  setup(){
    useHead({
      title: "Empresa",
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
        content: "Empresa"
      },
      {
        property: "og:description",
        content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
      },
      {
        property: "og:image",
        content: "https://d1ih8jugeo2m5m.cloudfront.net/2021/12/mision-de-una-empresa.jpg",
      },
      {
        property: "og:url",
        content: "/empresa"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:tittle",
        content: "Empresa"
      },
      {
        name: "twitter:description",
        content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
      },
      {
        name: "twitter:image",
        content: "https://d1ih8jugeo2m5m.cloudfront.net/2021/12/mision-de-una-empresa.jpg"
      },
    ],
    })
  },
  data() {
    return {
      show1: false,
      activador1: false,
      username: "",
      password: "",
      state: false,
      alert: false,
      isFixed: true,
      scrollPosition: 0,
      topPos: '',
    };
  },
  methods: {
    async log2() {
      let result = await axios
        .post("https://pagina1.onrender.com/login", {
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
        this.state = true;
        this.activador1 = true;
        this.$bus.$emit("activador", this.state);
        localStorage.setItem("token", true);
        this.show = false;
        const element = document.querySelector('.class1');
        element.style.position = "static";
        return document.getElementById('emp1').scrollIntoView();
      }
    },
    showDialog() {
      this.scrollPosition = window.pageYOffset;
      this.show1 = true;
      this.isFixed = false;
      const element = document.querySelector('.class1');
      element.style.position = "fixed";
      element.style.width = "100%";
      element.style.bottom = "0";
      document.body.style.overflowY = 'scroll';

  },
  hideDialog() {
      this.show1 = false;
      this.isFixed = true;
      const element = document.querySelector('.class1');
      element.style.position = "static";
      document.body.style.top = `-${this.scrollPosition}px`;
      element.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
  }
  },
});
</script>
<style scoped>
.class1 {
position: relative;
}
.card1 {
background-color: #fff;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
overflow: hidden;
}
.p1 {
  position: static;
  color: white;
  width: 100%;
}
.video {
  filter: brightness(25%);
  position: fixed;
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  z-index: -1;
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
.static1 {
position: static;
}
.fixe1 {
  position: fixed;
}
/* The actual timeline (the vertical ruler) */
.main-timeline {
position: relative;
}

/* The actual timeline (the vertical ruler) */
.main-timeline::after {
content: "";
position: absolute;
width: 6px;
background-color: #939597;
top: 0;
bottom: 0;
left: 50%;
margin-left: -3px;
}

/* Container around content */
.timeline {
position: relative;
background-color: inherit;
width: 50%;
}

/* The circles on the timeline */
.timeline::after {
content: "";
position: absolute;
width: 25px;
height: 25px;
right: -13px;
background-color: #939597;
border: 5px solid #f5df4d;
top: 15px;
border-radius: 50%;
z-index: 1;
}

/* Place the container to the left */
.left {
padding: 0px 40px 20px 0px;
left: 0;
}

/* Place the container to the right */
.right {
padding: 0px 0px 20px 40px;
left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
content: " ";
position: absolute;
top: 18px;
z-index: 1;
right: 30px;
border: medium solid white;
border-width: 10px 0 10px 10px;
border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
content: " ";
position: absolute;
top: 18px;
z-index: 1;
left: 30px;
border: medium solid white;
border-width: 10px 10px 10px 0;
border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
left: -12px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
.main-timeline::after {
  left: 31px;
}

/* Full-width containers */
.timeline {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
}

/* Make sure that all arrows are pointing leftwards */
.timeline::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Make sure all circles are at the same spot */
.left::after,
.right::after {
  left: 18px;
}

.left::before {
  right: auto;
}

/* Make all right containers behave like the left ones */
.right {
  left: 0%;
}
}
</style>
