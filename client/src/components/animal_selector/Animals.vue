<script setup lang="ts">
import AnimalsList from './AnimalsList.vue';
</script>

<template>
    <Transition appear mode="out-in" name="fade-upwards">
        <h1>Select an animal</h1>
    </Transition>
    <AnimalsList/>
</template>

<style lang="css" scoped>
    h1{
        margin-bottom: 1rem;
    }
</style>