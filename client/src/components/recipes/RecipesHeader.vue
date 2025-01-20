<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseSearchBar from '../base/BaseSearchBar.vue';
import BaseSelect from '../base/BaseSelect.vue';
import { getRecipes,setRecipes } from '@/api/recipes';


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
    {name:'Highest Rating', function:sortByRatingDesc},
    {name:'Lowest Rating', function:sortByRatingAsc},
    {name:'Duration (descending)', function:sortByDurationDesc},
    {name:'Duration (ascending)', function:sortByDurationAsc},
    {name:'Calories (descending)', function:sortByCaloriesDesc},
    {name:'Calories (ascending)', function:sortByCaloriesAsc},
    {name:'Servings (descending)', function:sortByServingsDesc},
    {name:'Servings (ascending)', function:sortByServingsAsc},
]

watch(sortFunction, () => {
    setRecipes(getRecipes().sort(sortFunction.value))
})
</script>

<template>
    <header class="recipes-header">
        <BaseSelect v-model="sortFunction" :options="options"/>
    </header>
</template>

<style lang="css" scoped>
    .recipes-header{
        min-height: 8%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem 0 1rem 0;
        position: relative;
    }
</style>