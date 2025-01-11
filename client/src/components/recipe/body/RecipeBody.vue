<script setup lang="ts">
    import type { recipe } from '@/types/recipes';
    import RecipeArticle from './RecipeArticle.vue';
    import RecipeIngredientList from './RecipeIngredientList.vue';
    import RecipeStepsList from './RecipeStepsList.vue';
    import RecipeSocialToolbar from './RecipeSocialToolbar.vue';

    defineProps<{recipe: recipe, editMode: boolean}>();
</script>

<template>
    <div class="recipe-body-container">
        <a class="jump-to-recipe-link" href="#recipe-lists">Recipe<span class="material-symbols-outlined">arrow_downward</span></a>
        <RecipeArticle :article="recipe.article" :editMode="editMode"/>
        <RecipeSocialToolbar v-if="!editMode"/>
        <div id="recipe-lists" class="recipe-body-list-container">
            <RecipeIngredientList :ingredients="recipe.ingredients" :editMode="editMode"/>
            <RecipeStepsList :steps="recipe.steps" :editMode="editMode"/>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipe-body-container{
        padding-inline: 18px;
    }
    .recipe-body-list-container{
        display: grid;
        grid-template-columns: 0.6fr 1fr;
        column-gap: 15px;
        margin-top: 20px;
    }
    #recipe-lists{
        scroll-margin-top: 70px
    }
    :deep(.delete-button){
        width: 30px;
        height: 30px;
        padding: 0;
        border: none;
        background:none;
        border-radius: 3px;
        &:hover{
            cursor: pointer;
            background-color: red;
            color: white;
        }
        &:active{
            transform: scale(0.95);
        }
        & span{
            font-size: 1rem;
        }
    }
    .jump-to-recipe-link{
        --font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        width: fit-content;
        border: 1px solid rgb(185, 185, 185);
        border-radius: 3px;
        padding: 0.25rem 0.5rem;
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        font-size: var(--font-size);
        background-color: transparent;
        margin-inline: auto;
        text-decoration: none;
        color: black;
        & span{
            font-size: var(--font-size);
        }
        &:hover{
            cursor: pointer;
            background-color: rgb(243, 243, 243);
        }
        &:active{
            transform: scale(0.95);
        }
        &:visited{
            color: black;
        }
    }
</style>