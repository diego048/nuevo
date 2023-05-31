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
            <p>
              INICIO
             </p>
            </NuxtLink>
            <br />
          </div>
          <div class="col-1 col-sm-2 col-md-2">
            <NuxtLink
              style="font-weight: bold"
              class="link d-none d-sm-block d-md-none"
              :to="{ name: 'index' }"
            >
            <p>
              INICIO
              </p>
            </NuxtLink>
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'empresa' }"
            >
            <p>
              EMPRESA
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'empresa' }"
              style="font-weight: lighter"
            >
            <p>
              NOSOTROS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'empresa' }"
              style="font-weight: lighter"
            >
            <p>
              STATS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/empresa#mision"
              style="font-weight: lighter"
            >
            <p>
              MISIÓN
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/empresa#vision"
              style="font-weight: lighter"
            >
            <p>
              VISIÓN
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link"
              to="/empresa#historia"
              style="font-weight: lighter"
            >
            <p>
              HISTORIA
              </p>
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link"
              to="/login"
              style="font-weight: lighter"
            >
            <p>
              HISTORIA
              </p>
            </NuxtLink>
          </div>
          <div class="col-3 col-sm-4 col-md-3">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'consultoria-de-proyectos' }"
            >
            <p>
              CONSULTORÍA
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'diseño-almacen' }"
            >
            <p>
              DISEÑO DE ALMACENES WCW
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'ingenieria' }"
            >
            <p>
              INGENIERÍA DE PROYECTOS LOGÍSTICOS
              </p>
            </NuxtLink>
            <br />
          </div>
          <div class="col-4 col-sm-3 col-md-3">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'equipos' }"
            >
            <p>
              EQUIPAMIENTO WCW
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'sistema-de-almacenaje' }"
            >
            <p>
              SISTEMAS DE ALMACENAJE
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'equipo-mh' }"
            >
            <p>
              EQUIPOS MH
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'losa-superplana' }"
            >
            <p>
              LOSAS SUPERPLANAS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'equipos-de-rampas' }"
            >
            <p>
              EQUIPO DE RAMPA
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'oficinas-modulares' }"
            >
            <p>
              OFICINAS MODULARES
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'wms' }"
            >
            <p>
              SISTEMA WMS
              </p>
            </NuxtLink>
          </div>
          <div class="d-none d-md-flex col-2 col-sm-2 col-md-2">
            <div v-if="valor">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'proyectos' }"
              style="font-weight: lighter"
            >
            <p>
              EXPERIENCIA
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/proyectos#pr1"
              style="font-weight: lighter"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/proyectos#pr2"
              style="font-weight: lighter"
            >
            <p>
              CLIENTES
              </p>
            </NuxtLink>
            </div>
            <div v-if="!valor">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
            <p>
              EXPERIENCIA
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
            <p>
              CLIENTES
              </p>
            </NuxtLink>
            </div>
          </div>
          <div class="col-1 col-sm-2 col-md-1">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
            <p>
              LOGIN
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: bold"
              to="/#formulario"
            >
            <p>
              CONTACTO
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link d-none d-sm-flex d-md-none"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link d-none d-sm-flex d-md-none"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
          </div>
        </div>
        <div class="d-flex d-sm-none row">
          <div class="col" align="center">
            <br />
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'index' }"
            >
            <p>
              INICIO
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'empresa' }"
            >
            <p>
              EMPRESA
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'consultoria-de-proyectos' }"
            >
            <p>
              CONSULTORÍA
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'equipos' }"
            >
            <p>
              EQUIPAMIENTO WCW
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
            <p>
              PROYECTOS
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
            <p>
              LOGIN
              </p>
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: bold"
              to="/#formulario"
            >
            <p>
              CONTACTO
             </p>
            </NuxtLink>
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
