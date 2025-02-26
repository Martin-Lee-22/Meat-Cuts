<script setup lang="ts">
    import RecipesLists from './RecipesLists.vue';
    import Recipe from '../recipe/Recipe.vue';
    import { useRecipeStore } from '@/stores/recipe';
    import { watch } from 'vue';
    import { useCutsStore } from '@/stores/cuts';

    const recipeStore = useRecipeStore();
    const cutsStore = useCutsStore();

    // Watch the cut changes, if the cut is not empty and the new cut object is different to the old, call clears the recipes
    watch(cutsStore.getCut(), (newCut, oldCut) => {
        if(newCut !== oldCut){
            recipeStore.clearRecipe()
            recipeStore.setShowRecipe(false)
        }
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