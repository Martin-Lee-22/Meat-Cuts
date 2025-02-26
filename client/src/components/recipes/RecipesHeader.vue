<script setup lang="ts">
    import { ref, watch } from 'vue';
    import BaseSelect from '../base/BaseSelect.vue';
    import { getRecipes,setRecipes } from '@/api/recipes';
    import BaseButton from '../base/BaseButton.vue';
    import { useRecipeStore } from '@/stores/recipe';

    const recipeStore = useRecipeStore();
    const sortFunction = ref();

    /**
     * Sorts recipes in ascending order by name.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByNameAsc(a:any, b:any):number{
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    };

    /**
     * Sorts recipes in descending order by name.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByNameDesc(a:any, b:any):number{
        if (a.name < b.name) {
            return -1;
    }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };

    /**
     * Sorts recipes in ascending order by rating.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByRatingAsc(a: any, b: any):number{
        return a.rating - b.rating
    }

    /**
     * Sorts recipes in descending order by rating.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByRatingDesc(a: any, b: any):number{
        return b.rating - a.rating
    }

    /**
     * Sorts recipes in ascending order by duration.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByDurationAsc(a: any, b: any):number{
        return a.duration - b.duration
    }
    
    /**
     * Sorts recipes in descending order by duration.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByDurationDesc(a: any, b: any):number{
        return b.duration - a.duration
    }

    /**
     * Sorts recipes in ascending order by calories.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByCaloriesAsc(a: any, b: any):number{
        return a.calories - b.calories
    }
    /**
     * Sorts recipes in descending order by calories.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByCaloriesDesc(a: any, b: any):number{
        return b.calories - a.calories
    }

    /**
     * Sorts recipes in ascending order by servings.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByServingsAsc(a: any, b: any):number{
        return a.servings - b.servings
    }

    /**
     * Sorts recipes in descending order by servings.
     * @param {any} a The first recipe to compare.
     * @param {any} b The second recipe to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByServingsDesc(a: any, b: any):number{
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

    /**
     * Clears the current recipe, creates a default new recipe, sets addRecipeMode to true, and shows the recipe dialog.
     * This is used to add a new recipe to the list of recipes.
     */
    function addRecipe():void{
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