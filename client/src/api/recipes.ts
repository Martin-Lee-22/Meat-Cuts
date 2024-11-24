import { ref } from 'vue';
import data from '../data/recipes.json'
import type { recipe } from '@/types/recipes';

const recipes = ref<recipe[]>([])

/**
 * Mock api call for retrieving recipes based on the current cut selection.
 * Updates the recipes data with the mocked data after a 0.5 second wait.
 */
async function getRecipesAPI(){
    await new Promise((resolve)=>{setTimeout(resolve, 2500)})
    recipes.value = data as recipe[]
}

/**
 * Returns the recipes data. The data is updated when the cut selection
 * changes in the cuts store.
 * @return {Object} The recipes data.
 */
function getRecipes(){
    return recipes.value
}

export {getRecipes, getRecipesAPI}
