<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseSelect from '../base/BaseSelect.vue';
import { getRecipes,setRecipes } from '@/api/recipes';
import BaseButton from '../base/BaseButton.vue';
import { useRecipeStore } from '@/stores/recipe';

const recipeStore = useRecipeStore();
const sortFunction = ref();

function sortByNameAsc(a:any, b:any){
    if (a.name > b.name) {
        return -1;
}
    if (a.name < b.name) {
        return 1;
    }
    return 0;
};

function sortByNameDesc(a:any, b:any){
    if (a.name < b.name) {
        return -1;
}
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

function sortByRatingAsc(a: any, b: any){
    return a.rating - b.rating
}
function sortByRatingDesc(a: any, b: any){
    return b.rating - a.rating
}

function sortByDurationAsc(a: any, b: any){
    return a.duration - b.duration
}
function sortByDurationDesc(a: any, b: any){
    return b.duration - a.duration
}

function sortByCaloriesAsc(a: any, b: any){
    return a.calories - b.calories
}
function sortByCaloriesDesc(a: any, b: any){
    return b.calories - a.calories
}

function sortByServingsAsc(a: any, b: any){
    return a.servings - b.servings
}
function sortByServingsDesc(a: any, b: any){
    return b.servings - a.servings
}
const options = [
    {name:'Name (descending)', function: sortByNameDesc}, 
    {name:'Name (ascending)', function: sortByNameAsc},
    {name:'Rating: Highest', function:sortByRatingDesc},
    {name:'Rating: Lowest', function:sortByRatingAsc},
    {name:'Duration: Longest', function:sortByDurationDesc},
    {name:'Duration: Shortest', function:sortByDurationAsc},
    {name:'Calories: Highest', function:sortByCaloriesDesc},
    {name:'Calories: Lowest', function:sortByCaloriesAsc},
    {name:'Servings: Highest', function:sortByServingsDesc},
    {name:'Servings: Lowest', function:sortByServingsAsc},
]

function addRecipe(){
    recipeStore.clearRecipe()
    recipeStore.createDefaultRecipe()
    recipeStore.setAddRecipeMode(true)
    recipeStore.setShowRecipe(true)
}

watch(sortFunction, () => {
    setRecipes(getRecipes().sort(sortFunction.value))
})
</script>

<template>
    <header class="recipes-header">
        <span>Sort by: </span><BaseSelect v-model="sortFunction" :options="options"/>
        <BaseButton title="Add Recipe" :callBack="() => {addRecipe()}">
            <span class="material-symbols-outlined">add</span>
        </BaseButton>
    </header>
</template>

<style lang="css" scoped>
    .recipes-header{
        min-height: 8%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        column-gap: 0.5rem;
        padding: 1rem 0 1rem 0;
        position: relative;
        & select{
            height: 2rem;
            padding: 0.25em;
        }
    }
</style>