<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import BaseButton from '../../base/BaseButton.vue';
import { deleteRecipeAPI } from '@/api/recipes';

const editMode = defineModel('editMode')
const recipeModel = defineModel('recipe')
const recipeStore = useRecipeStore()

function cancelRecipe(){
    if(recipeStore.getAddRecipeMode()) {
        recipeStore.setAddRecipeMode(false); 
        recipeStore.setShowRecipe(false)
    }
    recipeModel.value = JSON.parse(JSON.stringify(recipeStore.getRecipe()))
    editMode.value = false
}

async function deleteRecipe(){
    await deleteRecipeAPI(recipeStore.getRecipe())
    recipeStore.setShowRecipe(false)
    editMode.value = false
}
</script>

<template>
    <div class="recipe-footer-container">
        <BaseButton :callBack="deleteRecipe" class="delete-recipe-button">Delete</BaseButton>
        <div class="save-cancel-container">
            <input form="form-recipe" type="submit" value="Save" class="save-recipe-input">
            <BaseButton :callBack="cancelRecipe" class="cancel-recipe-button">Cancel</BaseButton>
        </div>
    </div>
</template>

<style lang="css" scoped>
.recipe-footer-container{
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 18px;
}
.save-cancel-container{
    display: flex;
    gap: 10px;
}
.save-recipe-input{
    &:hover{
        background-color: rgb(34, 34, 251);
    }
}
.cancel-recipe-button{
    &:hover{
        background-color: rgb(212, 212, 212);
    }
}
.delete-recipe-button{
    &:hover{
        background-color: red;
    }
}
button, input[type="submit"]{
    min-width: 70px;
    border: 1px solid rgb(185, 185, 185);
    border-radius: 3px;
    padding: 0.5rem 0.5rem;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    background-color: transparent;
    & span{
        font-size: var(--font-size);
    }
    &:hover{
        cursor: pointer;
        color: white;
    }
    &:active{
        transform: scale(0.95);
    }
}
</style>