<script setup lang="ts">
    import BaseButton from '@/components/base/BaseButton.vue';
    import RecipeIngredientListItem from './RecipeIngredientListItem.vue';
    import { useRecipeStore } from '@/stores/recipe';
    import { ref } from 'vue';

    const recipe = ref(useRecipeStore().getRecipe())
    defineProps(['ingredients', 'editMode']);
</script>

<template>
    <div class="recipe-ingredient-list-container">
        <h3>Ingredients</h3>
        <ul>
            <RecipeIngredientListItem v-for="(ingredient, index) in ingredients" :ingredient="ingredient" :index="index" :editMode="editMode"/>
        </ul>
        <BaseButton v-if="editMode" :callBack="() => {recipe.ingredients.push('')}">
            <span class="material-symbols-outlined">add</span>
        </BaseButton>
    </div>
</template>

<style lang="css" scoped>
    .recipe-ingredient-list-container{
        & ul{
            margin-top: 15px;
            list-style: none;
            padding: 0;
            & li{
                margin-bottom: 7px;
            }
        }
        & button{
            display: block;
            margin-inline: auto;
        }
    }
</style>