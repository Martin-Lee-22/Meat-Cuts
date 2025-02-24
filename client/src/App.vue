<script setup lang="ts">
import AnimalSelector from './components/animal_selector/AnimalSelector.vue';
import Recipes from './components/recipes/Recipes.vue'


</script>

<template>
  <main class="main-container">

    <AnimalSelector/>
    <Transition appear mode="out-in" name="fade-leftwards">
      <Recipes/>
    </Transition>
  </main>
</template>

<style scoped>
  .main-container{
    display: flex;
    height: 100vh;
    position: relative;
  }
</style>
