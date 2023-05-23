<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator/>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="es">
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
