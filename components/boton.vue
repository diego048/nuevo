<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
  <div class="container">
    <button @click="swiper.slidePrev()" class="left-btn">  &lt </button>
    <button @click="swiper.slideNext()" class="right-btn"> > </button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.left-btn,
.right-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
  z-index: 100000;
}

.left-btn:hover,
.right-btn:hover {
  opacity: 1;
}

.left-btn {
  left: 0;
}

.right-btn {
  right: 0;
}

</style>