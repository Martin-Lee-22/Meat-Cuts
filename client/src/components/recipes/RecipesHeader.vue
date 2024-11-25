<script setup lang="ts">
import BaseSearchBar from '../base/BaseSearchBar.vue';
</script>

<template>
    <header class="recipes-header">
        <BaseSearchBar/>
    </header>
</template>

<style lang="css" scoped>
    .recipes-header{
        min-height: 8%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem 0 1rem 0;
        position: relative;
    }
</style>