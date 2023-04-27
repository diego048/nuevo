<template>
    <transition name="fade" appear>
      <div class="dialog-overlay" @click="$emit('close')">
        <div class="dialog-box" @click.stop style="overflow-x: hidden">
          <slot></slot>
        </div>
      </div>
    </transition>
</template>
  
  <style>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dialog-box {
    min-height: 300px;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
  }
  .fade-enter-active,
.fade-leave-active {
 transition:  opacity .5s;
}
.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
</style>
