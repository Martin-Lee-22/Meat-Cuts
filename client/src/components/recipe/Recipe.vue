<script setup lang="ts">
    import { useTemplateRef, watch } from 'vue';
    import {useRecipeStore} from '../../stores/recipe';
    import BaseButton from '../base/BaseButton.vue';
    import RecipeHeader from './RecipeHeader.vue';
    import type { recipe } from '@/types/recipes';

    const container = useTemplateRef('container')
    const recipeStore = useRecipeStore()
    const recipe = recipeStore.getRecipe()

    watch(container, (newRecipe, oldRecipe) => {
        if(!recipeStore.isRecipeEmpty() && newRecipe !== oldRecipe) recipeStore.toggleRecipe()
    })
</script>

<template>
    <article class="recipe-container" ref="container" :style="{left: recipeStore.getShowRecipe() ? '0.25%' : '100%'}">
        <BaseButton :callBack="recipeStore.toggleRecipe">
            <span class="material-symbols-outlined">close</span>
        </BaseButton>
        <RecipeHeader :recipe="recipe"/>
    </article>
</template>

<style lang="css" scoped>
    .recipe-container{
        transition: 0.35s ease-in-out;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
    }
</style>