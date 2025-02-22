import { ref } from 'vue';
import type { recipe } from '@/types/recipes';
import { useRecipeStore } from '../stores/recipe';
import { generateRandomString } from '@/utils/helperFunctions';

const recipes = ref<recipe[]>([])
const url = 'https://u1bltsp892.execute-api.us-east-2.amazonaws.com/dev/meat-cuts/'
const s3Url = 'https://lj7wz9sr91.execute-api.us-east-2.amazonaws.com/dev/s3/meat-cuts/'


async function getRecipesAPI(animal:string, cut:string){
    try{
        await fetch(url + `${animal}/${cut}`, {
            method: 'GET'
        }).then(async response => await response.json()).then(data => {
            recipes.value = data.Items
        })
    }catch(e){
        console.log(`Error: ${e}`)
    }
}

async function postRecipe(recipe:recipe, id: number){
    const recipeStore = useRecipeStore()
    fetch(url  + `${recipe.animal}/${recipe.cut}/${id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(recipe)
    }).then(response => response.json()).then(data => recipeStore.setRecipe(data))
}

async function putRecipe(recipe:recipe){
    const recipeStore = useRecipeStore()
    await fetch(url  + `${recipe.animal}/${recipe.cut}/${recipe.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(recipe)
    }).then(response => response.json()).then(data => recipeStore.setRecipe(data))
}

async function deleteRecipeAPI(recipe:recipe){
    try{
        await fetch(url  + `${recipe.animal}/${recipe.cut}/${recipe.id}`, {
            method: 'DELETE'
        })
        console.log('Recipe Successfully deleted!')
    }catch(e){
        console.log('Error: Could not delete recipe: ' + e)
    }
}

async function putRecipeImage(file: File){
    const key = generateRandomString(5) + '_' + file.name
    try{
        const imgKey = await fetch(s3Url + `?keyId=${key}`, {
            method: 'PUT',
            body: file
        }).then(response => response.json()).then(data => {
            console.log('Image successfully uploaded!')
            return data.imgKey
        })
        return imgKey
    }catch(e){
        console.log(`Error - Cannot upload image: ${e}`)
    }
    return ''
}

async function deleteRecipeImage(imgKey: string){
    try{
        await fetch(s3Url, {
            method: 'DELETE',
            body: JSON.stringify({imgKey: imgKey})
        })
        console.log('Image successfully deleted!')
    }catch(e){
        console.log(`Error - Cannot delete image: ${e}`)
    }
}

/**
 * Returns the recipes data. The data is updated when the cut selection
 * changes in the cuts store.
 * @return {recipe[]} The recipes data.
 */
function getRecipes(): recipe[] {
    return recipes.value
}

/**
 * Updates the recipes data with the newRecipes parameter.
 * @param {recipe[]} newRecipes The new recipes data to update the store with.
 */
function setRecipes(newRecipes:recipe[]){
    recipes.value = newRecipes
}

/**
 * Returns true if the recipes array is empty, false otherwise.
 * @returns {boolean} true if recipes is empty
 */
function isRecipesEmpty(){
    return recipes.value.length === 0
}

/**
 * Clears the recipes array to an empty array.
 */
function clearRecipes(){
    recipes.value = []
}

export {getRecipes, getRecipesAPI, isRecipesEmpty, clearRecipes, setRecipes, postRecipe, putRecipe, deleteRecipeAPI, putRecipeImage, deleteRecipeImage}
