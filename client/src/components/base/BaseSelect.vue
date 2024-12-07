<script setup lang="ts">
        defineProps(['title', 'data', 'options']);
</script>

<template>
    <select :name=title :id=title>
        <option v-for="option in options" :key="option" :value="option" :selected="data === option">{{option}}</option>
    </select>
</template>