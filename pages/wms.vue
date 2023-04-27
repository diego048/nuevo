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
              <h1 style="color: white" align="center">SISTEMA WMS</h1>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <!--los cuadros de informacion-->
        <br />
        <br />
        <div class="card1" v-scrolls>
          <div class="row">
            <div
              class="ma-0 pa-0 d-none d-sm-flex col-12 col-sm-6"
              style="height: 50vh; min-height: 287px"
            >
              <img
                cover
                src="https://ff95bf1581c181ae3e2b-8be01e280b8e7aa4ff8eaae97998fa2c.ssl.cf1.rackcdn.com/Warehouse-Management-System-WMS-721-min.jpg"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
            <div class="col-12 col-sm-6" align="center">
              <br />
              <p
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                Los almacenes se encuentran en el centro de las operaciones de
                fabricación y cadena de suministro porque contienen todo el
                material utilizado o producido en esos procesos, desde las
                materias primas hasta los productos terminados. El propósito de
                un WMS es ayudar a garantizar que los bienes y materiales se
                muevan a través de los almacenes de la manera más eficiente y
                rentable.
              </p>
              <br />
            </div>
            <div
              class="ma-0 pa-0 d-flex d-sm-none col-12 col-sm-6 d-flex justify-content-center"
              style="height: 50vh; min-height: 287px"
            >
              <img
                src="https://ff95bf1581c181ae3e2b-8be01e280b8e7aa4ff8eaae97998fa2c.ssl.cf1.rackcdn.com/Warehouse-Management-System-WMS-721-min.jpg"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="card1" v-scrolls>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6" align="center">
              <br />
              <p
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                Un WMS maneja muchas funciones que permiten estos movimientos,
                incluido el seguimiento de inventario, la selección, la
                recepción y el almacenamiento. Un WMS también proporciona
                visibilidad del inventario de una organización en cualquier
                momento y lugar, ya sea en una instalación o en tránsito.
              </p>
              <br />
            </div>
            <div
              class="ma-0 pa-0 col-12 col-sm-6 col-md-6"
              style="height: 50vh; min-height: 287px"
            >
              <img
                style="height: 100%; width: 100%; object-fit: cover; width: 100%"
                src="https://mecaluxpe.cdnwm.com/blog/img/implantacion-sistema-gestion-almacenes.1.0.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <!--pie de pagina -->
      <pie />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "WMS",
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
          content: "WMS",
        },
        {
          property: "og:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "og:image",
          content:
            "https://mecaluxpe.cdnwm.com/documents/20128/455199/screens.png/7d70a473-c593-d893-14d6-c375cf0de9a7?t=1529911398000&e=png",
        },
        {
          property: "og:url",
          content: "/wms",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:tittle",
          content: "WMS",
        },
        {
          name: "twitter:description",
          content:
            "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          name: "twitter:image",
          content:
            "https://mecaluxpe.cdnwm.com/documents/20128/455199/screens.png/7d70a473-c593-d893-14d6-c375cf0de9a7?t=1529911398000&e=png",
        },
      ],
    });
  },
  data() {
    return {};
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
</style>
