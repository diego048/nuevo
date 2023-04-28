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
import video2 from "../assets/imagenes/proyect.mp4";
import imagen2 from "../assets/imagenes/imagen16.jpg";
//ima
import imagen9 from "../assets/imagenes/proyecto41.jpg";
import imagen11 from "../assets/imagenes/proyecto43.jpg";
import imagen12 from "../assets/imagenes/proyecto44.jpg";
import imagen13 from "../assets/imagenes/proyecto62.jpg";
import imagen14 from "../assets/imagenes/proyecto46.jpg";
import imagen15 from "../assets/Gloria/Gloria.jpg";
import imagen16 from "../assets/imagenes/proyecto3.jpg";
import imagen17 from "../assets/imagenes/proyecto4.jpg";
import imagen18 from "../assets/imagenes/proyecto63.jpg";
import imagen19 from "../assets/imagenes/proyecto64.jpg";
import imagen20 from "../assets/imagenes/proyecto65.jpg";

import imagen21 from "../assets/imagenes/proyecto70.png";
import imagen22 from "../assets/imagenes/supervision7.jpg";
import imagen23 from "../assets/imagenes/proyecto71.png";
import imagen24 from "../assets/imagenes/proyecto3.jpg";
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
    // import required modules
    import { Pagination, Navigation } from 'swiper';
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
          modules: [Pagination, Navigation],
        };
  },
  beforeMount(){
    if(localStorage.getItem("token")){
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
      p2: video2,
      p3: imagen2,
      p4: imagen16,
      p5: imagen17,
      cards7: [
        {ima: imagen21},
        {ima: imagen22},
        {ima: imagen23},
        {ima: imagen24},
      ],
      cards6: [
        {ima: imagen18},
        {ima: imagen19},
        {ima: imagen20},
      ],
      cards5: [
        { ima: imagen9 },
        { ima: imagen11 },
        { ima: imagen12 },
        { ima: imagen13 },
        { ima: imagen14 },
        { ima: imagen15 },
      ],
      cards1: [
        {
          titulo: "SUPERMERCADOS PERUANOS S.A",
          ima: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Supermercados_Peruanos_logo.svg/2560px-Supermercados_Peruanos_logo.svg.png",
        },
        {
          titulo: "SOCIEDAD MINERA CERRO VERDE S.A.A.",
          ima: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sociedad_Minera_Cerro_Verde.jpg/800px-Sociedad_Minera_Cerro_Verde.jpg",
        },
        {
          titulo: "MINERA BARRICK MISQUICHILCA S.A.",
          ima: "data:image/png;base64,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",
        },
        {
          titulo: "NESTLE PERU S.A.",
          ima: "data:image/png;base64,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",
        },
        {
          titulo: "UNIVERSIDAD DE INGENIERIA Y TECNOLOGIA",
          ima: "https://www.carreras.pe/userfiles/images/Logos%20y%20fachadas/Logo%20UTEC.jpg",
        },
        {
          titulo: "HIODROMEC INGENIEROS S.A.C.",
          ima: "https://panel.construproductos.com/images/products/624703d6383fd.jpg",
        },
        {
          titulo: "CREDITEX S.A.A",
          ima: "https://media.licdn.com/dms/image/C4D0BAQG8qubWhwymbg/company-logo_200_200/0/1519885635880?e=2147483647&v=beta&t=etNmsZgZqPS2OFGhRwbpFGMz07AKPfj133U5PWHPmYM",
        },
        {
          titulo: "CORETECH S.A.",
          ima: "https://coretech.com.pe/storage/brands/June2022/qTu75UWTlaHwnFitcP5f.png",
        },
        {
          titulo: "FOX PRINT E.I.R.L.",
          ima: "https://compuempresa.com/timthumb.php?src=files/1bd36592dc7b68ce4fb3682260f92fbf.gif&h=200&w=200&zc=2",
        },
        {
          titulo: "TIENDAS POR DEPARTAMENTO RIPLEY S.A.",
          ima: "https://s3.amazonaws.com/media.greatplacetowork.com/peru/best-workplaces-in-peru/2019/tiendas-por-departamento-ripley/logo.png",
        },
        {
          titulo: "TALMA SERVICIOS AEROPORTUARIOS S.A.",
          ima: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAACCCAMAAABxTU9IAAAA5FBMVEX///8ARoeDuBcAP4QARIZ9tQB4mbwAPoMAQYTr89yOvi+kutAAO4J/tgAAOoHb6r1IeKfx9flbgqz0+OmZxEsAN4Bwpi4PUH1pjrS11Hm/zt4ETo2Vscv9/vsASov4+/Dq8fbl8M3i6vOKpsQAU5Hg7cTq89bM4aLI2ObW57Ssz2fH3pkANH+ZtM08cKLS5azA2o+mzFu714Wvxdl+nr/W4OqLvSWVwj8nW5S11HxxlLgsZpy3y91hiLEVWpacxkahvbM7d2ZgmDkAPpEraWZLgVpflkYqY4XQ3tMAK3qhyVSnzGKBISGQAAAT7ElEQVR4nO1dB3fqSpIGIRkR2pi0SxIiR5scjG3MzL7dnRn8///PVifRQoUFXJjrc1ffe+c9cEtdVV2xkx0KBQgQIECAAAECBAgQIECAAAECBAhwU1ixa5D93Wz/Wcjm4pdjNbB/N99/FFJEuxxG93ez/WeheI0SSOd3s/1HwVpdoQNtbf1uvv8odK5yhMHvZvvPwtC4xhPav5vtPwr21zWesA4q1LPRS/jib9ekBGN4ISPpOUb7LjL/NKS3UdMHyb9flRIudYTlp5d05P0uQv80LF91P/z1X1foQLt4ktCMho8ph83mPWT+cZibetgHf12hAmNzcX36ZHpJV0v3kPnHIRPx00Hkvy+ORsZ6fDEj6aSXtDmq3V7iH4iyryMk/+cCJRBCDGO1iV3OyEfeSzr6dnuBfyBKiOhu6OX//Q8M6xyG/ddmmLpq3e4t6qX9+P8jGjWRIHCM/8Twj39mMdjWlWsVtXdvStDDjdtK+zORxrKhZywQRDPp23JSqnoJm0+3pfFDAQWqvxIwJG9dOy6QAsGs3JjIz0TFtzY6pYTejTnBolFreWMiPxPnRCMMeuvG0aiBMGI+1W5L5GcifWUwCpuFG3OSQAqEm4e8n4n543U60PVbL6xhBWr+48ZEfiQaT49+i3f4oob+6l87phX4c4IUCHrZ/720G+c96tvrGdSu7sOD5ZM/0PLJxAvUWmPZ+/hIJCrNxcNDYVvIcGwLi5f58lu+LylQ0+lGrzefvzQXi4dtYZvJOGQKD4vmS6KkkmLPvlQWD29b+WThrVmZl2pnjRDQWvZKQKzSbKrUoI+Xj+9FuiXQ1P34cvRU5v2zZSbzz8/P+Xz+MZlMRqPRSESuR0ejj/nn/Ps20TvFdsFbpemmEvLSMBSJl8X2afTZSiYlFUoj4vhsBOgkk4/5/HOy9fSQaL5lRq/VPH1WPOqwk6ScVkcPH9/4cyPz/lquPkqRjqhBH9AUeS28/Ds0UcN0oCePaseabup+OV43zXArU6mhZPwK1MprqwyZiIZHPexbTdAHq/zh08/SZ94fTqadZdXUv3udASi8ZhK4SDdEAltb0j+POY6eV2bpZr61QHheJr3vu0Lee0QP+w++m9Y5z0TzozkueOlMKnok2arceXUFq1rC0eMCtXTGCpQj98i7KveCVGlqgYrNIm4EM/KGDmHCf59FQjdHd51VNpA4EQ5Xj50Y9ZeTYieP69s0tqnxvLyy/0sRRSfmiwv0rkfKx0nylsCqFqRArVw039DLRyGg8Y4UqOqc/AHzx5shOkJ8ASkVvoGp33oZR8EbFme8Wy0XDpKedEs9R56JbA/tmJIOa7vh87PFieeSI6/ko8sioPl6v4iERqP8se+lt3koD2mBmHzkYEXqiZkelXrher+A6VCJWbg/lgXgc+QRyewc6qtm9DGCPpf32vFnUkgkRXoUIp0gFLnbGgtWtQC9Y+9NL2D28rZYNJvNigDMbWidHj4x4353ddFCopEa8h6wWcRLusbRaDSW8wXmLLQb2iyx7L0U0O3c6NZT7W+3hbcHRKSWfkKk1l00EDqREM1Xz3P4hCVdWyYyj7hbqxXS8tnbHnEVqGcscy+3WOT0FNOhj1dsvfbdkxVOiNRYJka413lM80ZAq5YLHa+EBVf3AiCW1tU5+TLvM4vgQBOHRwmhHjKn0S+K6KVPTAv3Wm5EE+KlZ4GwOYSuK2OcziBqyiuj4jeLEGhie3PICT5kCC9TQmiO5ah7KQE9GHbxVgu6BKhwvERSghryfJUk8IIpAVkERFbDzlkVVlDDvPvme40Cb1g0uvgsEDYJKKszMUTVpkIE2wfXX70xG9uqNR+8/CAjiOSE79DAlBC9U05ATBSi9YVuV8MMXRXa7/hjAlvmRnb2tlgJ4F0ZSiP8RLzV0XfAfPde1RFaoOrVUxqv0ZX3ROKFIpGYf/SWjRr8uOGzOJdGikZXCYvOXZGdvTNjfe+8DCNF+hAiUYlKQqRS2dvFvY7noIsRCLH0stQsvJcjbGrD/sMQjUb08ucIjZ+K0CWEiivkYWb3jgwuUgBgFr5AnvNM1mrLeXP7XtUjjjj8A4hU/Rxh9cqdzo+jBaruIdaobF/LMJf0rvPTpX+6i4AIrUQJ7AxgXjH0HjJXwXb20ELXe3AJTfPRmuuZZTMD08zLRCrf58QmejBML7uNpvRkPkZ8N3SOO0kexrCGpYSIMiiYkh690Qjrx7P5BOgh0c/t3YmnfPL8dWzZxWWp/Wwk0N1lV4FaK7SuWek3lQUztEBV2jHL1ZFycImlBO9ULfSC6Vzx7uVb9WINhJEtlhthiyVEVwpLtE6um30LVegKIrJrUNDiysttBXHH6ML7HJKi9Jaj03Qled2qef4+l+vS6ORcLVAr+JKkL1whDT1IoBaomJKUZW4JLNTr3jidrmKOV5PNb5dGVkkpf59ohJVyUKAeHiic2O7STbauzYENsXr/poas8bvu55x5iaqGhXrkns8cYdrx7vT2HJHQKI3sSNwCaIEaOaQw7OBiWI8mzc/3TEHiARvDqDKNxS6puApUv1mEAFagYnEaK1CTslZbYH6gJx+rn0/bg0hYgRq9T4GKVi3hqFNblhC/DpuvD72aqxu/441Y+7PS7qskAbT6987tsVUfZyMVu7AVNj+bJXc9jJVh5fssHOEF6mEVH4vB3j0+7KCAXq19Oyiuqv3MAhW97GIiDoOleeHd6Lwo+eSZx2HGd68CFasSDpOkHtKMrK+W0GVYpd2nakf9UfeQ+XZwVSDL3c5JvwQmsDfWY1kFK8NuAXQ/51Cgou7vzZcPPlU5tgdwVYHqQ0cCi0YylGATEmQejB1qyJ84QfaLSKPl8qP0TTTMIFMjbAalbkyiG5dKAGhig4tcosLidMsbpxvolkONtdWw4tW7POIXYG8J9Grt4SxQDxldM+MV2mdTCI2vVxSomMlcWqBia1TI6moPW1i/02/gWGCeEHFqPixjIBy/+AiGHSRQ22uY5Z47uN44ncbO1sglEHQB0FsCICfzdP3fWKAq2/NYSoh6drFQoaNK4YjGV6X93Fv+fv1IqbCUoH/TR9Ib+bBodKcCFVtrVLdIsHUlvVU76gU93lhW2zGJlDB85iWqc+P0BxJKomIJJI2J5K330PPjd7rg+IKtJCpngfDD2pmjaQJ2KiGiZA40vqoFKjaLUJe5ZT/omoVXKiyURIR3o0qAPHc0AUAvOCIb2bcAevxROQtUQc/Cm/nRw8v8oyTQw4o+9cRRAWtXDsNgxx8j3vSPHUhw9SOB1WrONAv/BRORyKj54khUKqEnP+4TjfCrtZEDsRNXKHQzqlerZeeUqE+BihyGc7U3EX/DCtTvl6cdLNFaTXr3HDkHyJ4w9YNEyOYyBL773JhCF+fUQgw/m8dYov/Kf5BOlMp7iSyFm37HH5Gt+yUWzZENUKwWO3h3GvV+IdI3EqEL67cAetTddYanhxxNPAfqrm/C59wDdl8OS4JnXkRHo/7zwWESF97HksB88wY4cT/HNUmqYKuo/lBOzqGDkve5n4MUjWg/yG9KWmK1mjrLr5x58+6oizvdTMAL1KOVwkT+io1A9YgUWsAqm0botQVkfcq30BX4QPiJukLJInnF71s5ZJXb4g3dSjieJC0L+sW7/Gon2Kql2o4q6dMrMXbPB1lCCW0xo3GvvPWeqherATlWcxP4FagC6XnGTEbPOpugszvI0aR6ZxBTtVrA9pB+IsjyNNKP6yK6BHoV5fhC9sdIP0ckdv5IZ5fK/3Wn/Zxnenf9CNFHbN+iNn94alXpRXe6Myh2B/k1Mp0PfAT6CofLrdf3p0xhUVGOP7aSHiJJ9XT0Nu9lIors52D9fHqZLf3LK1QeOaFXSyxGrzqIxK7DSXW4RYrSsvXzdfS0fVvc6ZrU8u0Bwal9i9qyVFnQX6tQBe7Y3a4o1Um11fp8Hz1l6K+bmJeWy0aj5ha4hlFRXbuJMeEdXLwf7+CWkOfe8GNztUap8pZ5b7VgQs2urEXZCUMh0vatWUl8UJFqtfukg6vBfhVHj02Ue73lcgkM/jAOL0a65hKp0bjpb3cJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgF+GnRoPh91+x2KfHdihUJZ/qrM/sGy3U3XxRjbVz7JW8UdnrTbrIcufEn+O2W53h8NxxyET63eH3W7b88ea+92+7KbuEO+wnijaHVvtYtKV/ccEc04z42Jcl1/UtzsHsdqM8azsoy1ej427UjoxBu2Ow5Xssz4G+m2HYIxKCAN33jB/h9iUGAb9Y9bGDL6NDQfA50x+Xg2B9Z1B+CvZtbGyWSuTJTZgPRAjDl9TBmF/lzxWhJ9p9G9kt9k74zV/xjCOtJCCn7cFK3GH+CQUahPxmQwYGSsVF10W2fe9bN6xUcgWiSDI6HcObwPBQ8fGjjKuiWGdGnHOjrVjLQxDR+oZtY7YyviiP7aHggDpMqNp75lE8IPL/xD7sQ72Bpmk6u3UeNqHrxMYQ24I8M0qGmv6cbIySJ3yTjjHQ0J4a9wSPRRT9Xq7OwHNdInW4XrSZvVOvUuMNX2pT4xdtw1kJlP3H83O7g2NDPnnzgo64sRj9BVtAh/HOc0o0tauZuz69Xp9Sgj7vjb2fWgGC8jB0/bAILM2EIwTQhloa4S+3d9rZACaBsMekFUXfgCCDIy18IS18cXZ6ROiafyjtTFW0HFqCGbT51xN6M8HhAza9Xo/TrQU10180gZ0p7/sCkVpqpyBgRFXBihnDNgH8I8us1lu5MTYWKyVWoi9MnZ1tb81H5IVV1hfM4ZMJ7sQiqKx/5JtMOwKLzOuvlA2bqzgfx1wVWaB1hchNBgSg+tuwHxvIOWoE+bSE8JtnHqtJZ7biaGPy6G3+bPUB7WNZvAObMkPuCId/THnamhQy2PP0nYwQZL9Zlwvwl46JEM2R6aHb504twHqoH0mNmUZLIWR78RlAEsp/e0Maup1jXDpKMtFZjYDlDxEjdTYIHxMhkTlZWrsbdHD7kA1RL2VhrQOt1NQI7XMrBxOahQDiw55TnmbwrF6+izXS0wqsghtmsGFBbUxTwv1DdY6Y1zByIh+7C8CRmFPiXZ6VC/EUCPxyRhyL09gK22aGvf7fZbfUkQb29lsFjyQBZ6csadRX9O6IdZKTcOe8qAkYPHB2JCV8FEYhA2zLvI17Lc7R8aTnYJy6lKNUxKH1A0YQ49W3BjEgDjkLK3P+pFq5EoA5VMSVl2jXHUNQ7gjKKFoUWP4Ym9DEOEhO7sSg0zpiSgOw8ysv03D7dTgkbK+IkMqdWpHVpTdPZO6TbjUUgnUMNcTkCimSH8t7HGcpjCypvkLLFg7ZEYa39e5XG4HKZfxOmNeIy1qbKxA7tjaZePCtnZGTgx3fcV+kC3S3EhWu6GL5yFVlk3E8MQ1kU0JjXZEiwPxHOQj+k5dE0YrfQKy12w4nBRZvrJm0puET9grbUXfjkPG4w0xFlLVoWchhlV0eyrDUMSEPie80yA1MK6YZw0ds4IwTH3Cnqwpt9p6dpOoZHXq/ZnGktWErMZ1ClaHQYL4GgzWjg1AkOlLxmV6q4u0JZDiAkIOE4MNihQmmu1A8ifC1Tmoymzb2vPAA8rYMOKsJAZ73Q8GX7I26moajz50yHI060Am1bRVfDq0maetRJ9t5lcd9ja4wZcMcH3HV2ZSAojrLKRAHuvYNqRyJueMrEDqHBEBVeSegchQzKyExHas3R9orkjwa5gSmkkPdQMF2HzWsvoa2fDv2TWZQMScOa22RwlcRRYUMIKzqatHyCP7wzcYBCM3nU6hzqBWBvlBKfYgU7Qt24KMzoQf8pokxAZhxuxx36nXOzHWe3ZPZEHBh5haO7y9I3LoaPiwJVWhMK5OSne1n05zrI5i2SRmWfW4yI6Q6Kn2944cQ1f5AMFJ+1VXkEqECEwDyM4YHCpImycwC4rAjmT/aybTm8VbYVgVS5ACrogIRyknCDC0VzJhU4CXDDbFYvGL2yAMu1LszQwWkceiQAVT4MoGv6EDC0XD8PAw+IWw7tSKFrDWhFt7X5OeRwtq8eyUCCWkWKiEInlNuSiuNTr7oeEH/gcBjmeqLi/Miyz4ArIayzlS5tjuVN13NmyYYWZtO9suMiu0IKnFGOhEEyyEZ2BZHAJDK1nI0VBCW6GoJZu6bdkxOpOFNM0sHfx8A+aU7caNNbwam6Vitm3H+mtu84J43JiCp1lUkbTYhYHrcOqxQ7EMFs+GExJzPAVk6kWu1pRG1DkS2HmxAwT7ceY5cg4DAyzmNmD1U0cdZEiZg8kfLVrZrAfYAMXRgCVrpw6EVJtzRb/CRCLXAfr9PTMVezbuwMDFUlNCfnWuBqIRjhyVrCO/EWoFThTdyTltFjKRCE1OerMhKsJMB96ps1KUWR6bvq5W4OcsbY353BK+fh1qUJpgef+gOkirdLolsGOFIh80eJfOSkLtOO0S6OSY0BNpmQI0QTOCLIXA7H4queSBMRaXYRTIaexZwp4FUxOhs83Kkbosffn8A3hbM2678IIGBMiAmlFMSqTl2qFfhJ2aDPa73X4z5gsQRQe0Kivy9QH6QWh7unNGsV3cZEUfxeluNy2OwW5imyLnyRpv9rvcdNhm8mW7m6/dbjeYHNZd4Iezogwo/WIxBl7pEB+zVj4WdrE44+Vzd5BzOIVXJq5QbLWBxH4w4UtJ8Dbn2NoUefUCnDlKYxzLZxltzlCx2AW3lN/rRcqfPSmKeNqefOV2X7MUI2D3J6yPTeomtVGAAAECBAgQIECAAAECBAgQIECAABT/B5uXNunjWxh0AAAAAElFTkSuQmCC",
        },
        {
          titulo: "COMERCIAL CONTE S.A.C.",
          ima: "https://imagenes.presupuestos.pe/proveedores/em/logos/0c00cda5fc7fef3ec9ea1582f1c09917.jpg",
        },
        {
          titulo: "ARCOR DE PERÚ S.A.",
          ima: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Arcor_logo.svg/800px-Arcor_logo.svg.png",
        },
        {
          titulo: "CONECTA RETAIL S.A.",
          ima: "data:image/jpeg;base64,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",
        },
        {
          titulo: "POLIMETALES S.A.C.",
          ima: "https://www.polimetales.com/img/logo_polimetales.png",
        },
        {
          titulo: "CORPORACION BOTICAS PERU ",
          ima: "https://www.boticasperu.com.pe/wp-content/uploads/2018/06/Logotipo-Final-Franja.png",
        },
        {
          titulo: "MINERA PODEROSA",
          ima: "http://www.poderosa.com.pe/Content/img/compartir.jpg",
        },
        {
          titulo: "ALDEA LOGISTICA",
          ima: "https://media.licdn.com/dms/image/C4D0BAQG8xTVLzz6L-g/company-logo_200_200/0/1614960241671?e=2147483647&v=beta&t=c0XQjBPbuTORDjpQrpUq_EFF2a413eggwMiPE_ABSAs",
        },
        {
          titulo: "EULEN",
          ima: "https://aearboricultura.org/wp-content/uploads/2022/05/logo-grupo-eulen.jpg",
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
    url("../assets/imagenes/imagen19.jpg");
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
