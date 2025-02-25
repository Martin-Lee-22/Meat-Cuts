<script setup lang="ts">

defineProps<{spinnerWidth: string, spinnerHeight: string}>()

</script>

<template>
    <span class="loader" :style="{width: spinnerWidth, height: spinnerHeight}"></span>
</template>

<style lang="css" scoped>
.loader {
  width: 50px;
  height: 50px;
  border: 3px dotted #afafaf;
  border-radius: 50%;
  display: block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 7s linear infinite;
  margin-inline: auto;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>