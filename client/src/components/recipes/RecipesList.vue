<script setup lang="ts">
    import RecipesListItem from './RecipesListItem.vue';
    import { getRecipesAPI, isRecipesEmpty } from '@/api/recipes';
    import { staggerListOnEnter } from '@/shared/animations';
    import { useCutsStore } from '@/stores/cuts';
    import type { recipe } from '@/types/recipes';

    const cutsStore = useCutsStore()
    defineProps<{recipes: recipe[]}>()

    // if the cut is not empty, get the recipes and check if the recipes list is empty; if so add the empty-list class, otherwise
    // remove the empty-list class
    if(!cutsStore.isCutEmpty()) {
        await getRecipesAPI()
        if(isRecipesEmpty()) {
            document.getElementsByClassName('recipes-list-container')[0].classList.add('empty-list')
        } else {
            document.getElementsByClassName('recipes-list-container')[0].classList.remove('empty-list')
        }
    }
</script>

<template>
    <TransitionGroup appear @enter="staggerListOnEnter" v-if="!isRecipesEmpty()">
        <RecipesListItem v-for="(recipe, index) in recipes" :key="recipe.id" :recipe="recipe" :index="index"/>
    </TransitionGroup>
</template>