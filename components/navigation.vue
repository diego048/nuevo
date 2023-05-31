<template>
    <div>
        <nav class="navbar navbar-dark navbar-expand bg-black shadow fixed-top">
            <div class="container-fluid d-flex justify-content-between">
                <div class="d-flex justify-content-start">
                    <NuxtLink class="navbar-brand" to="/">
                        <img :src="p1" alt="logo de logicorp" style="max-height: 40px; width:100%; height:100%; object-fit: contain">
                    </NuxtLink>
                </div>
                <div>
                    <div class="d-none d-sm-none d-md-block align-items-center" style="width: 100%">
                        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center" style="width: 100%">
                            <li class="nav-item">
                                <NuxtLink class="nav-link"  :to="{ name: 'index' }">HOME</NuxtLink>
                            </li>
                            <li class="nav-item dropdown">
                                <NuxtLink class="nav-link dropdown-toggle" :to="{ name: 'empresa' }">
                                    EMPRESA
                                </NuxtLink>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <NuxtLink v-for="(item, index) in items3"
                                            :key="index"
                                            :value="index"   
                                            :to="item.name"
                                            class="dropdown-item"
                                        >
                                            {{ item.title }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <NuxtLink class="nav-link dropdown-toggle"  :to="{ name: 'consultoria-de-proyectos' }">CONSULTORÍA</NuxtLink>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <NuxtLink v-for="(item, index) in items"
                                            :key="index"
                                            :value="index"   
                                            :to="{ name: item.name }"
                                            class="dropdown-item"
                                        >
                                            {{ item.title }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <NuxtLink class="nav-link dropdown-toggle" align="center"  :to="{ name: 'equipos' }">
                                    EQUIPAMIENTO
                                    <br />
                                    WCW
                                </NuxtLink>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <NuxtLink v-for="(item, index) in items2"
                                            :key="index"
                                            :value="index"   
                                            :to="{ name: item.name }"
                                            class="dropdown-item"
                                        >
                                            {{ item.title }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item" v-if="!state">
                                <NuxtLink class="nav-link"  :to="{ name: 'login' }">LOGIN</NuxtLink>
                            </li>
                            <li class="nav-item dropdown" v-if="state">
                                <NuxtLink class="nav-link dropdown-toggle" align="center"  :to="{ name: 'proyectos' }">
                                    PROYECTOS
                                </NuxtLink>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <NuxtLink v-for="(item, index) in items4"
                                            :key="index"
                                            :value="index"   
                                            :to="item.name"
                                            class="dropdown-item"
                                        >
                                            {{ item.title }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item" v-if="state">
                                <NuxtLink class="nav-link" align="center"  :to="{ name: 'logicorp-news' }">
                                    LOGICORP
                                    <br />
                                    NEWS
                                </NuxtLink>
                            </li>
                            <li class="nav-item nav-link" v-if="state" @click="logout" style="cursor: pointer">
                                LOG OUT 
                            </li>
                        </ul>
                    </div>
                    <button class="btn btn-black d-block d-sm-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span class="navbar-toggler-icon">logo de boton de celular</span>
                    </button>
                </div>
            </div>
        </nav>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="width: 50vw; max-width: 360px">
                <div class="offcanvas-header">
                     <NuxtLink class="navbar-brand" align="center" to="/" style="width: 100%">
                        <img alt="logo de logicorp" :src="p2" style="width: 100%; height: 100%; object-fit: contain" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    </NuxtLink>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <NuxtLink class="nav-link"  :to="{ name: 'index' }">
                            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                HOME
                            </button>
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink class="nav-link"  :to="{ name: 'empresa' }">
                            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                EMPRESA
                            </button>
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink class="nav-link"  :to="{ name: 'consultoria-de-proyectos' }">
                            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                CONSULTORÍA
                            </button>
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink class="nav-link"  :to="{ name: 'equipos' }">
                            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                EQUIPAMIENTO WCW
                            </button>
                        </NuxtLink>
                    </div>
                    <div v-if="!state">
                        <NuxtLink class="nav-link"  :to="{ name: 'login' }">
                            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                LOGIN
                            </button>
                        </NuxtLink>
                    </div>
                    <div v-if="state">
                        <NuxtLink class="nav-link"  :to="{ name: 'proyectos' }">
                            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                PROYECTOS
                            </button>
                        </NuxtLink>
                    </div>
                    <div  v-if="state">
                        <NuxtLink class="nav-link"  :to="{ name: 'logicorp-news' }">
                            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                LOGICORP NEWS
                            </button>
                        </NuxtLink>
                    </div>
                    <div v-if="state" @click="logout">
                        <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            LOG OUT
                        </button>
                    </div>
                </div>
        </div>
    </div>
</template>
<style scoped>
    .dropdown-menu {
        display:block;
        opacity: 0;
        transition: all 0.3s;
        visibility: hidden;
    }
    .dropdown:hover > .dropdown-menu {
        display:block;
        margin-top: 0;
        opacity: 1;
        visibility: visible;
    }
    .dropdown-menu.dropdown-menu-end {
        right: 0;
        left: auto
    }
    .dropdown-toggle:after {
        display:none }
</style>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
      return {
      p1: "https://ik.imagekit.io/qewkcqaku/tr:w-600/imagenes/logicorpweb.png",
      p2: "https://ik.imagekit.io/qewkcqaku/tr:w-600/imagenes/logicorpweb1.png",
      state: false,
      links1: null,
      items: [
      { title: "DISEÑO DE ALMACENES WCW", name: "diseño-almacen" },
      {
        title: "INGENIERÍA DE PROYECTOS LOGÍSTICOS",
        name: "ingenieria",
      },
    ],
    items2: [
      { title: "SISTEMAS DE ALMACENAJE", name: "sistema-de-almacenaje"},
      { title: "EQUIPOS MH", name: "equipo-mh" },
      { title: "EQUIPOS DE RAMPA", name: "equipos-de-rampas" },
      { title: "LOSAS SUPERPLANAS", name: "losa-superplana" },
      { title: "OFICINAS MODULARES", name: "oficinas-modulares" },
      { title: "SISTEMA WMS", name: "wms" },
    ],
    items3: [
      {title: "NOSOTROS", name: "empresa"},
      {title: "MISIÓN", name: "empresa#mision"},
      {title: "VISIÓN", name: "empresa#vision"},
      {title: "TIMELINE", name: "empresa#historia"},
      {title: "CONTACTANOS", name: "/#formulario"}
    ],
    items4: [
      { title: "EXPERIENCIA", name: "/proyectos" },
      { title: "PROYECTOS", name: "/proyectos#pr1" },
      { title: "CLIENTES", name: "/proyectos#pr2" },
    ],
      }
  },
  beforeMount() {
  this.links1 = localStorage.getItem("token")
  },
  methods: {
    logout() {
        this.state = false;
        localStorage.clear();
        this.$router.push("/");
    },
  },
  mounted(){
  this.$bus.$on("activador", (isOpen) => {
    this.state = isOpen;
  });
  if (this.links1) {
    this.state = true;
    return;
  }
},
})
</script>
<script setup>
useHead({
   script: [
      {
         src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", 
         integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4", 
         crossorigin:"anonymous"
       },
      ]
})
</script>
