<script setup lang="ts">
    import RecipesListItem from './RecipesListItem.vue';
    import { getRecipesAPI, getRecipes, isRecipesEmpty } from '@/api/recipes';
    import { staggerListOnEnter } from '@/shared/animations';
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
    <TransitionGroup appear @enter="staggerListOnEnter" v-if="!isRecipesEmpty()">
        <RecipesListItem v-for="(recipe, index) in getRecipes()" :key="recipe.id" :recipe="recipe" :index="index"/>
    </TransitionGroup>
</template>