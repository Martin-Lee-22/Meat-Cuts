<script setup lang="ts">
    import RecipesLists from './RecipesLists.vue';
    import Recipe from '../recipe/Recipe.vue';
    import { useRecipeStore } from '@/stores/recipe';
    import { watch } from 'vue';

    const recipeStore = useRecipeStore();

    watch(recipeStore.getShowRecipe, () => {

    })
</script>

<template>
    <article class="recipes-content-container">
        <RecipesLists/>
        <Recipe v-if="recipeStore.getShowRecipe()"/>
    </article>
</template>

<style lang="css" scoped>
    .recipes-content-container{
        float: right;
        width: 99.5%;
        position: relative;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>