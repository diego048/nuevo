<template>
  <div>
    <div v-if="loading" class="spinner-wrapper">
       <div class="spinner-border" role="status">
         <span class="visually-hidden">Loading...</span>
       </div>
     </div>
    <NuxtLayout style="z-index: -1">
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
display: flex;
justify-content: center;
align-items: center;
}
.spinner-border {
height: 60px;
width: 60px;
}
</style>
