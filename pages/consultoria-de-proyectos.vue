<template>
  <div>
    <br />
    <br />
    <div class="contenedor">
      <img
        alt="Estanterias"
        :src="p3"
        style="filter: brightness(25%); height: 160px; object-fit: cover; width: 100%"
      />
      <div class="centrado ">
        <h1 align="center" color="white">CONSULTORÍA</h1>
      </div>
    </div>
    <div>
      <!-- La cabecera con la info-->
      <div class="container">
        <br />
        <div class="d-flex justify-content-center row">
          <div
            v-for="card in cards"
            :key="card.id"
            align="center"
            v-scrolls
            class="flex d-flex align-self-stretch col-6 col-sm-6 col-md-4"
          >
            <NuxtLink
              :to="{ name: card.link }"
              style="text-decoration: none; width: 100%"
              class="flex d-flex align-self-stretch"
            >
              <div class="card1" style="width: 100%">
                <div class="overlay"></div>
                <img v-if="card.ok" :alt="card.title" :src="card.src" style="height:200px; width: 100%; object-fit: contain; border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)">
                <img
                  v-if="!card.ok"
                  :alt="card.title"
                  :src="card.src"
                  style="height:200px; width: 100%; object-fit: contain; border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)"
                >

                <p
                  class="text-pre-wrap"
                  align="center"
                  style="word-break: break-word; color: black;font-size: 1.2em; font-weight: 600"
                >
                  {{ card.title }}
                </p>
                <p align="center" style="color: rgba(185,185,185,1)"> Más info </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div style="margin-top: 50px;" class="d-flex d-sm-none" ></div>
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
      title: "Consultoria de proyectos",
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
        content: "Consultoria de proyectos"
      },
      {
        property: "og:description",
        content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
      },
      {
        property: "og:image",
        content: "https://mecaluxes.cdnwm.com/articulos-de-logistica/diseno-y-layout-de-un-almacen-6-factores-basicos/image-0.1.0.jpg",
      },
      {
        property: "og:url",
        content: "/consultoria-de-proyectos"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:tittle",
        content: "Consultoria de Proyectos"
      },
      {
        name: "twitter:description",
        content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
      },
      {
        name: "twitter:image",
        content: "https://mecaluxes.cdnwm.com/articulos-de-logistica/diseno-y-layout-de-un-almacen-6-factores-basicos/image-0.1.0.jpg"
      },
    ],
    })
  },
  data() {
    return {
      p3: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/imagen19.jpg",
      cards: [
        {
          id: 1,
          ok: true,
          title: "DISEÑO DE ALMACENES WCW",
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/dise%C3%B1o5.png",
          flex: 6,
          flex1: 4,
          show: false,
          link: "diseño-almacen",
        },
        {
          id: 3,
          ok: true,
          title: "INGENIERÍA DE PROYECTOS LOGÍSTICOS",
          src: "https://ik.imagekit.io/qewkcqaku/tr:w-700/imagenes/proyecto54.jpg",
          flex: 6,
          flex1: 4,
          show: false,
          link: "ingenieria",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contenedor {
  position: relative;
  text-align: center;
  color: white;
  height: 160px;
}
.centrado {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
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
</style>
