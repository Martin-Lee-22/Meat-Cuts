<script setup lang="ts">
    import RecipesListItem from './RecipesListItem.vue';
    import { getRecipesAPI, getRecipes } from '@/api/recipes';
    import { useCutsStore } from '@/stores/cuts';
    import { watch } from 'vue';

    const cutsStore = useCutsStore();

    // if the cut is not empty, get the recipes
    if(!cutsStore.isCutEmpty()) await getRecipesAPI()

    // Watch the cut changes, if the cut is not empty and the new cut object is different to the old, call recipes API
    watch(cutsStore.getCut(), async (newCut, oldCut) => {
        if(!cutsStore.isCutEmpty() && newCut !== oldCut) await getRecipesAPI()
    })
</script>

<template>
    <div class="recipes-list-container">
        <RecipesListItem v-for="recipe in getRecipes()" :key="recipe.id" :recipe="recipe"/>
    </div>
</template>

<style lang="css" scoped>
    .recipes-list-container{
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        row-gap: 10px;
        column-gap: 8px;
        overflow-y: scroll;
    }
</style>