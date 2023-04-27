<template>
    <div ref="hola">
      <div class="container" v-scrolls>
        <div class="row">
          <div 
            class="col-6 col-md-3"
            v-for="card in cards"
            :key="card.duration"
            align="center"
            style="color: white"
          >
            <count-up
              v-if="vrd"
              :key="card.delay"
              :duration="card.duration"
              :delay="card.delay"
              :end-val="card.val"
              :options="card.options"
              style="font-size: 40px; font: sans-serif"
            ></count-up>
            <p style="font: sans-serif">{{ card.parra }}</p>
        </div>
        </div>
    </div>
    </div>
  </template>
  <script>
  import CountUp from "vue-countup-v3";
  import { defineComponent } from "vue";
  export default defineComponent({
    components: { CountUp },
    data() {
      return {
        vrd: false,
        cards: [
          {
            duration: "4",
            delay: "2",
            val: 25,
            parra: "Años de Experiencia Diseñando Proyectos Logísticos",
          },
          { duration: "4", delay: "2", val: 2000, parra: "Proyectos Diseñados" },
          { duration: "4", delay: "2", val: 1000, parra: "Proyectos Ejecutados" },
          {
            duration: "4",
            delay: "2",
            val: 1,
            parra: "De PP implementadas",
            options: { suffix: "M", prefix: "+ " },
          },
        ],
      };
    },
    methods: {
      scrol1() {
        const animatedScrollObserv = new IntersectionObserver(
          (entries, animatedScrollObserv) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.vrd = true;
                animatedScrollObserv.unobserve(entry.target);
              }
            });
          }
        );
        animatedScrollObserv.observe(this.$refs.hola);
      },
    },
    mounted() {
      this.scrol1();
    },
  });
  </script>
  <style scoped>
  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
  </style>
  