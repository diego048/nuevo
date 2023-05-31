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
            <div style="color: white" align="center">
              <h1>
                Proyectos
              </h1>
              <br />
              <p>
                Diseño y Equipamiento de más de 1000 CDs en Perú, Bolivia.
                Chile, Argentina, Colombia, Venezuela y El Salvador.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="model1">
      <!-- La cabecera con la info-->
        <br />
      <div class="container">
        <!--los cuadros de informacion-->
        <div class="card1" v-scrolls>
          <div >
            <div class="row">
              <div class="col-12 col-sm-6">
                <swiper :modules="modules" :loop="true" style="height: 100%; width: 100%; min-height: 287px; color: black">
                    <swiper-slide v-for="card in cards6" :key="card.ima">
                      <img :src="card.ima" style="width:100%; height: 100%; object-fit: cover" alt="..." />
                    </swiper-slide>
                    <div class="boton1">
                    <boton />
                  </div>
                  </swiper>
              </div>
              <div align="center" class="col-12 col-sm-6 align-self-center">
                <h2>Experiencia</h2>
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  - Diseño e Implementación del primer almacén con montacargas
                  Trilaterales en Perú en Laboratorios Hersil.
                  <br />
                  <br />
                  - Diseño e Implementación del Almacén más Alto del Perú en
                  Gloria SA.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="card1" v-scrolls>
          <div>
            <div class="row">
              <div
                class="col-12 col-sm-6 order-1 order-sm-2"
              >
              <swiper :modules="modules" :loop="true" style="height: 350px;width:100% ; min-height: 287px">
                    <swiper-slide v-for="card in cards7" :key="card.ima">
                      <img :src="card.ima" style="width:100%; height: 100%; object-fit: cover" alt="..." />
                    </swiper-slide>
                    <div class="boton1">
                    <boton />
                  </div>
                  </swiper>
              </div>
              <div align="center" class="col-12 col-sm-6 align-self-center order-2 order-sm-1">
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  - Supervisión de la losa Superplana más grande de Sudamérica
                  en Falabella Chile, Santiago.
                  <br />
                  <br />
                  - Diseño e Implementación del Almacén más moderno del Perú en
                  Nestlé SA.
                  <br />
                  <br />
                  - Estudio de Ubicación Geográfica para CD de Ripley.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br id="pr1" />
        <br />
        </div>
        <dialog2 />
        <div class="container">
        <br id="pr2" />
        <br />
        <h2 align="center">EMPRESAS QUE CONFIARON EN NOSOTROS</h2>
        <br />
        <div class="body1">
    <swiper
        :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
        }"
        :slidesPerView="2"
        :spaceBetween="20"
        class="mySwiper"
        style="padding-top: 20px; position: relative; padding-left: 10px; padding-right: 10px"
      >
        <swiper-slide v-for="(card, index) in cards1" :key="index" @click="setActive(index,card.titulo)" style="height: 300px;">

          <div
                style="width: 100%; height: 100%; cursor: pointer"
              >
              <div class="overlay"></div>
                <img
                  v-if="!(activeIndex === index)"
                  :src="card.ima"
                  style="object-fit: contain; background-color: white"
                >
                <Transition>
                <div  class="d-flex align-items-center justify-content-center" style=" height: 100%; background-color: #2196F3"  v-if="activeIndex === index">
                  <div  class="text">
                    <h4
                      align="center"
                      style="word-break: break-word; color: white"
                    >
                      {{ card.titulo }}
                  </h4>
                  </div>
                </div>
                </Transition>
              </div>
        </swiper-slide>
        <div class="boton1" >
        <boton />
      </div>
        <br />
      </swiper>
    </div>
      </div>
      <br />
      <br />  
      <!--pie de pagina -->
      <pie />
    </div>
  </div>
</template>

<script>
export default {
unmounted(){
        window.scrollTo({top: 0, behavior: "instant"});
  },
  setup(){
    useHead({
      title: "Proyectos",
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
        content: "Proyectos"
      },
      {
        property: "og:description",
        content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
      },
      {
        property: "og:image",
        content: "../assets/imagenes/proyecto41.jpg",
      },
      {
        property: "og:url",
        content: "/proyectos"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:tittle",
        content: "Proyectos"
      },
      {
        name: "twitter:description",
        content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
      },
      {
        name: "twitter:image",
        content: "../assets/imagenes/proyecto41.jpg"
      },
    ],
    });
    return {
          modules: [],
        };
  },
  beforeMount(){
    if(true){
      this.model1 = true
    }
    else{
      navigateTo("/login")
    };
    
  },
  data() {
    return {
      activeText: '',
      activeIndex: null,
      model: null,
      model1: false,
      p3: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/imagen16.jpg",
      p4: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto3.jpg",
      p5: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto4.jpg",
      cards7: [
        {ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto70.png"},
        {ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/supervision7.jpg"},
        {ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto71.png"},
        {ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto3.jpg"},
      ],
      cards6: [
        {ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto63.jpg"},
        {ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto64.jpg"},
        {ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto65.jpg"},
      ],
      cards5: [
        { ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto41.jpg" },
        { ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto43.jpg" },
        { ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto44.jpg" },
        { ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto62.jpg" },
        { ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto46.jpg" },
        { ima: "https://ik.imagekit.io/qewkcqaku/tr:w-700/Gloria/Gloria.jpg" },
      ],
      cards1: [
         {
          titulo: "MINERA PODEROSA",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/logo-poderosa.png",
        },
        {
          titulo: "CORPORACION BOTICAS PERU ",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/boticas-peru.png",
        },
        {
          titulo: "SUPERMERCADOS PERUANOS S.A",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/Supermercados_Peruanos_logo.png",
        },
        {
          titulo: "SOCIEDAD MINERA CERRO VERDE S.A.A.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/cerro-verde.jpg",
        },
        {
          titulo: "MINERA BARRICK MISQUICHILCA S.A.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/barrick.png",
        },
        {
          titulo: "NESTLE PERU S.A.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/nestle.png",
        },
        {
          titulo: "CREDITEX S.A.A",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-600/imagenes/creditex.jpg",
        },
        {
          titulo: "TIENDAS POR DEPARTAMENTO RIPLEY S.A.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/ripley.png",
        },
        {
          titulo: "TALMA SERVICIOS AEROPORTUARIOS S.A.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/talma.png",
        },
        {
          titulo: "COMERCIAL CONTE S.A.C.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/conte-group.jpg",
        },
        {
          titulo: "ARCOR DE PERÚ S.A.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/Arcor_logo.png",
        },
        {
          titulo: "CONECTA RETAIL S.A.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/efe.jpg",
        },
        {
          titulo: "POLIMETALES S.A.C.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/logo_polimetales.png",
        },
        {
          titulo: "ALDEA LOGISTICA",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/aldea-logistica.jpg",
        },
        {
          titulo: "EULEN",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/grupo-eulen.jpg",
        },
        {
          titulo: "UNIVERSIDAD DE INGENIERIA Y TECNOLOGIA",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/UTEC.jpg",
        },
        {
          titulo: "FOX PRINT E.I.R.L.",
          ima: "https://ik.imagekit.io/qewkcqaku/tr:w-500/imagenes/fox-print.jpg",
        },
      ],
    };
  },
  methods: {
    setActive(index,text) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
        this.activeText = '';
      } else {
        this.activeIndex = index;
        this.activeText = text;
      }
    }
  }
};
</script>
  <style scoped>
  .boton1 {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    position: absolute; 
    top: 30px; 
    width: 98%; 
    height: 100%
  }
  .swiper:hover .boton1 {
  opacity: 1
}

  .swiper-slide:hover .overlay {
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
#background {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/imagen19.jpg");
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
}
  
.swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .body1 {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    position: relative;
    height: 100%;
  }
  .v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
  
  </style>
