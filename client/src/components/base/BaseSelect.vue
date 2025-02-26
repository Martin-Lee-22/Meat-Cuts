<script setup lang="ts">
    defineProps(['options']);
    const selected = defineModel();
</script>

<template>
    <select v-model="selected">
        <option v-for="option in options" :key="option.name" :value="option.function">{{option.name}}</option>
    </select>
</template>

<style lang="css" scoped>
    select, option{
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        font-size: 0.9em;
    }
</style>