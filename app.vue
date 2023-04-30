<template>
  <div>
    <NuxtLayout>
      <div class="spinner-wrapper">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
useHead({
  link: [
    {
      href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
      rel:"stylesheet", 
      integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
      crossorigin:"anonymous"
    },
    {
      rel:"stylesheet",
      href:"https://cdn.materialdesignicons.com/6.4.95/css/materialdesignicons.min.css"
    },
    {
      rel:"stylesheet",
      href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
    },
  ],
  script: [
    {
      src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", 
      integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4", 
      crossorigin:"anonymous"
    },
  ]
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
html {
overflow-x: hidden;
}
.spinner-wrapper {
background-color : white;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 9999;
display: flex:
justify: content;
align-items: center;
}
.spinner-border {
height: 60px;
width: 60px;
}
</style>
