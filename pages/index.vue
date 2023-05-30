<template>
    <div style="overflow-x:hidden" lang="es">
      <br />
        <div style="position: relative">
            <video autoplay loop muted playsinline class="video" poster="https://ik.imagekit.io/qewkcqaku/tr:w-800/imagenes/plantilla.jpg">
                <source src="https://ik.imagekit.io/qewkcqaku/tr:w-1000/imagenes/logicorp1.mp4" />
            </video>
            <div class="p1 container" align="center">
                <h2>
                LÍDERES EN CONSULTORIA Y EQUIPAMIENTO DE ALMACENES DE CLASE MUNDIAL
                </h2>
            </div>
        </div>
        <div cover id="background">
            <InicioSegundoco />
        </div>
        <div style="background-color: rgba(215, 86, 0, 0.92)">
      <InicioContador />
    </div>
    <br />
    <NuxtLink :to="{ name: 'consultoria-de-proyectos' }" style="text-decoration: none">
      <InicioParrafod1 />
    </NuxtLink>
    <br />
    <NuxtLink :to="{ name: 'equipos' }" style="text-decoration: none">
      <InicioParrafoi1 />
    </NuxtLink>
    
    <br />
    <div
      cover
      id="background1"
    >
      <br />
      <div style="color: white" align="center">
        <h1 style="text:bold">PROYECTOS</h1>
        <p>Estas son algunas fotos de nuestros proyectos, pulse en alguna para verlas</p>
        <InicioCuadros1 />
      </div>
      <br />
    </div>
    <br />
    <h1 align="center" style="color: blue">CONTACTO</h1>
    <div>
      <div class="container">
        <img :src="ima1" style="height: 500px; width: 100%; object-fit: cover" alt="mapa de nuestras oficinas">
      </div>
    </div>
    <br />
    <div>
    <InicioForm id="formulario" />
    </div>
    <br />
    <!-- Pie de pagina -->
    <div>
        <pie />
    </div>
    </div>
</template>
<style scoped>
#background1 {
  background: url("../assets/botica/GERENCIA-2.jpg");
  background-size: cover;
}
#background {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://ik.imagekit.io/qewkcqaku/tr:w-800/botica/render.jpg");
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: cover;
}
.im1 {
  width: 100%;
  filter: brightness(25%);
  height: 80vh;
  object-fit: cover;
}
.im2 {
  width: 100%;
  filter: brightness(25%);
  height: 35vh;
  object-fit: cover;
}
.im3 {
  width: 100%;
  filter: brightness(9%);
  height: 25vh;
  object-fit: cover;
}
.p1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.video {
  filter: brightness(45%);
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  display: block;
}
 video::-internal-media-controls-overlay-cast-button {
  display: none;
}
</style>
<script>
import { defineComponent } from "vue";
export default defineComponent ({
    unmounted(){
        window.scrollTo({top: 0, behavior: "instant"});
  },
  data () {
    return {
      ima1: "https://ik.imagekit.io/qewkcqaku/tr:w-900/imagenes/imagen30.png",
    }
  }
})
</script>
