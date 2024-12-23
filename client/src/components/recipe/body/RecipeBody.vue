<script setup lang="ts">
    import type { recipe } from '@/types/recipes';
    import RecipeArticle from './RecipeArticle.vue';
    import RecipeIngredientList from './RecipeIngredientList.vue';
    import RecipeStepsList from './RecipeStepsList.vue';

    const props = defineProps<{recipe: recipe, editMode: boolean}>();
</script>

<template>
    <div class="recipe-body-container">
        <RecipeArticle :article="props.recipe.article" :editMode="editMode"/>
        <div class="recipe-body-list-container">
            <RecipeIngredientList :ingredients="props.recipe.ingredients" :editMode="editMode"/>
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
        margin-top: 40px;
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
</style>