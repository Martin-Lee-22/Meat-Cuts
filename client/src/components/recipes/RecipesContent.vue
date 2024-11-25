<script setup lang="ts">
    import RecipesLists from './RecipesLists.vue';
    import Recipe from '../recipe/Recipe.vue';
</script>

<template>
    <article class="recipes-content-container">
        <RecipesLists/>
        <Recipe/>
    </article>
</template>

<style lang="css" scoped>
    .recipes-content-container{
        float: right;
        width: 99.5%;
        position: relative;
        height: 92%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>