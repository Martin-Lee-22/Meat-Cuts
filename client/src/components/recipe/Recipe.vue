<script setup lang="ts">
    import { ref, useTemplateRef } from 'vue';
    import {useRecipeStore} from '../../stores/recipe';
    import BaseButton from '../base/BaseButton.vue';
    import RecipeHeader from './header/RecipeHeader.vue';
    import RecipeBody from './body/RecipeBody.vue';
    import type { recipe } from '@/types/recipes';
import RecipeReviews from './reviews/RecipeReviews.vue';

    const container = useTemplateRef('container')
    const recipeStore = useRecipeStore()
    const recipe = ref(recipeStore.getRecipe())
    const editMode = ref(false)

    // watch(container, (newRecipe, oldRecipe) => {
    //     if(!recipeStore.isRecipeEmpty() && newRecipe !== oldRecipe) recipeStore.toggleRecipe()
    // })
</script>

<template>
    <Transition appear mode="out-in" name="horizontal-move">
        <article class="recipe-container" ref="container">
            <button @click="editMode = !editMode">Edit Mode</button>
            <BaseButton :callBack="recipeStore.toggleShowRecipe">
                <span class="material-symbols-outlined">close</span>
            </BaseButton>
            <RecipeHeader :recipe="recipe" :editMode="editMode"/>
            <RecipeBody :recipe="recipe" :editMode="editMode"/>
            <RecipeReviews v-if="!editMode" :recipe="recipe"/>
        </article>
    </Transition>
</template>

<style lang="css" scoped>
    .recipe-container{
        transition: 0.35s ease-in-out;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        & > div:nth-child(n + 4){
            margin-top: 30px;
        }
    }
</style>