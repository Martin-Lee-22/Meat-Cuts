<script setup lang="ts">
    import { ref, useTemplateRef } from 'vue';
    import {useRecipeStore} from '../../stores/recipe';
    import BaseButton from '../base/BaseButton.vue';
    import RecipePublish from './publish/RecipePublish.vue';
    import RecipeEditor from './edit/RecipeEditor.vue';

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
            <BaseButton :callBack="recipeStore.toggleShowRecipe">
                <span class="material-symbols-outlined">close</span>
            </BaseButton>
            <RecipePublish v-if="editMode" :recipe="recipe"/>
            <RecipeEditor v-else :recipe="recipe"/>
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
    }
    :deep(.recipe-header-container){
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;
        & img{
            width: 100%;
            height: 325px;
        }
        & h1{
 
            font-size: 1.5rem;
        }
    }
    :deep(.recipe-header-info){
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        & div{
            width: 22%;
            text-align: center;
            padding: 18px 0 18px 0;
            border-top: 2px solid #eee;
            border-bottom: 2px solid #eee;
            border-right: 1px solid #eee;
            &:last-child{
                border-right: none;
            }
        }
        & p{
            font-weight: 200;
        }
        & span{
            font-weight: 600;
        }
    }
</style>