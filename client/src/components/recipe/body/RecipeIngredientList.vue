<script setup lang="ts">
    import BaseButton from '@/components/base/BaseButton.vue';
    import RecipeIngredientListItem from './RecipeIngredientListItem.vue';
    import { onMounted, onUpdated, useTemplateRef } from 'vue';
    import type { recipe as recipeType } from '@/types/recipes';
    
    const ingredientsModel = defineModel<string[]>('ingredientsModel');
    const listRef = useTemplateRef('listRef')
    const props = defineProps<{ingredients: recipeType['ingredients'], editMode: boolean}>();

    onMounted(()=>{
        if(ingredientsModel.value && props.ingredients.length === 0) ingredientsModel?.value.push('')
    })

    /**
     * Checks to see if the ingredientsModel array is empty and if so, adds an empty string to it. 
     */
    onUpdated(()=>{
        if(listRef.value?.classList.contains('empty-list-input') && listRef.value?.classList.contains('has-error') && 
            (props.ingredients && props.ingredients.filter((x)=>{return /\S/.test(x)}))) {
                listRef.value.classList.remove('empty-list-input')
                listRef.value.classList.remove('has-error')
        }
    })

    /**
     * Adds an empty string to the ingredientsModel array, used to dynamically add new input fields for recipe ingredients.
     * This function is called when the user clicks the "Add ingredient" button in the recipe form.
     */
    function addIngredient() {
        if(ingredientsModel.value) ingredientsModel.value.push('')
    }
</script>

<template>
    <div class="recipe-ingredient-list-container">
        <h3>Ingredients</h3>
        <ul ref="listRef" class="recipe-ingredient-list">
            <RecipeIngredientListItem v-for="(ingredient, index) in ingredients" v-model:ingredientsModel="ingredientsModel" :ingredient="ingredient" :ingredients="ingredients" :index="index" :editMode="editMode"/>
        </ul>
        <BaseButton title="Add ingredient" v-if="editMode" :callBack="addIngredient">
            <span class="material-symbols-outlined">add</span>
        </BaseButton>
    </div>
</template>

<style lang="css" scoped>
    .recipe-ingredient-list-container{
        margin-inline: auto;
        & ul{
            text-align: center;
            margin-top: 15px;
            list-style: none;
            padding: 0;
            & li{
                text-align: start;
                margin-bottom: 7px;
            }
        }
        & button{
            display: block;
            margin-inline: auto;
        }
    }
</style>