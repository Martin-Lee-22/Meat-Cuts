<script setup lang="ts">
    import RecipesListItem from './RecipesListItem.vue';
    import { getRecipesAPI, isRecipesEmpty } from '@/api/recipes';
    import { staggerListOnEnter } from '@/shared/animations';
    import { useCutsStore } from '@/stores/cuts';
    import { getRecipes } from '@/api/recipes';
    import { watch } from 'vue';
    import { useRecipeStore } from '@/stores/recipe';

    const cutsStore = useCutsStore()
    const recipeStore = useRecipeStore()

    // if the cut is not empty, get the recipes and check if the recipes list is empty; if so add the empty-list class, otherwise remove the empty-list class
    if(!cutsStore.isCutEmpty()) {
        await getRecipesAPI(cutsStore.getAnimal().type, cutsStore.getCut().value.cut)
        if(isRecipesEmpty()) {
            document.getElementsByClassName('recipes-list-container')[0].classList.add('empty-list')
        } else {
            document.getElementsByClassName('recipes-list-container')[0].classList.remove('empty-list')
        }
    }

    watch(()=>recipeStore.getShowRecipe(), async ()=>{
        await getRecipesAPI(cutsStore.getAnimal().type, cutsStore.getCut().value.cut)
    })
</script>

<template>
    <TransitionGroup appear @enter="staggerListOnEnter" v-if="!isRecipesEmpty()">
        <RecipesListItem v-for="(recipe, index) in getRecipes()" :title="recipe.name" :key="recipe.name" :recipe="recipe" :index="index"/>
    </TransitionGroup>
</template>