<script setup lang="ts">
        defineProps(['title', 'selected', 'options']);
</script>

<template>
    <select :name=title :id=title>
        <option v-for="option in options" :key="option" :value="option" :selected="selected === option">{{option}}</option>
    </select>
</template>