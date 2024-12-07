<script setup lang="ts">
    import RecipeIngredientList from './RecipeIngredientList.vue';
    import RecipeStepsList from './RecipeStepsList.vue';

    const props = defineProps(['recipe', 'editMode']);
</script>

<template>
    <div class="recipe-body-container">
        <RecipeIngredientList :ingredients="props.recipe.ingredients" :editMode="editMode"/>
        <RecipeStepsList :steps="recipe.steps" :editMode="editMode"/>
    </div>
</template>

<style lang="css" scoped>
    .recipe-body-container{
        display: grid;
        grid-template-columns: 0.6fr 1fr;
        column-gap: 15px;
    }
    :deep(.delete-button){
        width: 30px;
        aspect-ratio: 1;
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