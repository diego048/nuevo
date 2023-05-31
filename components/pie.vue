<template>
    <div id="background1">
      <div class="container" style="color: white">
        <br class="d-none d-sm-flex" />
        <div class="d-none d-sm-flex row">
          <div class="col-1 col-sm-0 col-md-1 d-sm-none d-md-block">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'index' }"
            >
              INICIO
            </NuxtLink>
            <br />
          </div>
          <div class="col-1 col-sm-2 col-md-2">
            <NuxtLink
              style="font-weight: bold"
              class="link d-none d-sm-block d-md-none"
              :to="{ name: 'index' }"
            >
              INICIO
            </NuxtLink>
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'empresa' }"
            >
              EMPRESA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'empresa' }"
              style="font-weight: lighter"
            >
              NOSOTROS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'empresa' }"
              style="font-weight: lighter"
            >
              STATS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/empresa#mision"
              style="font-weight: lighter"
            >
              MISIÓN
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/empresa#vision"
              style="font-weight: lighter"
            >
              VISIÓN
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link"
              to="/empresa#historia"
              style="font-weight: lighter"
            >
              HISTORIA
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link"
              to="/login"
              style="font-weight: lighter"
            >
              HISTORIA
            </NuxtLink>
          </div>
          <div class="col-3 col-sm-4 col-md-3">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'consultoria-de-proyectos' }"
            >
              CONSULTORÍA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'diseño-almacen' }"
            >
              DISEÑO DE ALMACENES WCW
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'ingenieria' }"
            >
              INGENIERÍA DE PROYECTOS LOGÍSTICOS
            </NuxtLink>
            <br />
          </div>
          <div class="col-4 col-sm-3 col-md-3">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'equipos' }"
            >
              EQUIPAMIENTO WCW
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'sistema-de-almacenaje' }"
            >
              SISTEMAS DE ALMACENAJE
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'equipo-mh' }"
            >
              EQUIPOS MH
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'losa-superplana' }"
            >
              LOSAS SUPERPLANAS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'equipos-de-rampas' }"
            >
              EQUIPO DE RAMPA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'oficinas-modulares' }"
            >
              OFICINAS MODULARES
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'wms' }"
            >
              SISTEMA WMS
            </NuxtLink>
          </div>
          <div class="d-none d-md-flex col-2 col-sm-2 col-md-2">
            <div v-if="valor">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'proyectos' }"
              style="font-weight: lighter"
            >
              EXPERIENCIA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/proyectos#pr1"
              style="font-weight: lighter"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/proyectos#pr2"
              style="font-weight: lighter"
            >
              CLIENTES
            </NuxtLink>
            </div>
            <div v-if="!valor">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
              EXPERIENCIA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
              CLIENTES
            </NuxtLink>
            </div>
          </div>
          <div class="col-1 col-sm-2 col-md-1">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              LOGIN
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: bold"
              to="/#formulario"
            >
              CONTACTO
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link d-none d-sm-flex d-md-none"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
              PROYECTOS
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link d-none d-sm-flex d-md-none"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              PROYECTOS
            </NuxtLink>
          </div>
        </div>
        <div class="d-flex d-sm-none row">
          <div class="col" align="center">
            <br />
            <div>
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'index' }"
            >
                <div style="height: 100%">
                INICIO
              </div>
            </NuxtLink>
            </div>
            <br />
            <div>
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'empresa' }"
            >
            <div style="height: 100%">
              EMPRESA
              </div>
            </NuxtLink>
            </div>
            <br />
            <div>
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'consultoria-de-proyectos' }"
            >
            <div style="height: 100%">
              CONSULTORÍA
              </div>
            </NuxtLink>
            </div>
            <br />
            <div>
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'equipos' }"
            >
            <div style="height: 100%">
              EQUIPAMIENTO WCW
              </div>
            </NuxtLink>
            </div>
            <br />
            <div>
            <NuxtLink
              v-if="valor"
              class="link"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
            <div style="height: 100%">
              PROYECTOS
              </div>
            </NuxtLink>
            </div>
            <div>
            <NuxtLink
              v-if="!valor"
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
            <div style="height: 100%">
              PROYECTOS
              </div>
            </NuxtLink>
            </div>
            <br />
            <div>
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
            <div style="height: 100%">
              LOGIN
              </div>
            </NuxtLink>
            </div>
            <br />
            <div>
            <NuxtLink
              class="link"
              style="font-weight: bold"
              to="/#formulario"
            >
            <div style="height: 100%">
              CONTACTO
              </div>
            </NuxtLink>
            </div>
          </div>
        </div>
        <br />
        <p align="center" style="font-size: 1.5em; font-weight: bold;">
          © 2022 LogicorPeru SAC - Todos los derechos reservados.
        </p>
        <br />
      </div>
    </div>
  </template>
  <script>
  export default {
    beforeMount() {
      if(localStorage.getItem("token")){
        this.valor = true
      }
    },
    data(){
      return {
        valor: false,
      };
    }
  }
  </script>
  <style scoped>
  .link {
    color: #fff;
    text-decoration: none;
  }
  .link1 {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  #background1 {
    background: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)),
      url("https://ik.imagekit.io/qewkcqaku/tr:w-600/botica/INGRESO-A-OFICINAS.jpg");
    background-position: 50% 30%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
