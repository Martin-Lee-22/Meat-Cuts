import { ref } from 'vue';
import type { recipe } from '@/types/recipes';
import { useRecipeStore } from '../stores/recipe';
import { generateRandomString } from '@/utils/helperFunctions';

const recipes = ref<recipe[]>([])
const bucket = 'meat-cuts'
const url = 'https://u1bltsp892.execute-api.us-east-2.amazonaws.com/dev/meat-cuts/'
const s3Url = `https://lj7wz9sr91.execute-api.us-east-2.amazonaws.com/dev/s3/${bucket}/`


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

async function putRecipeImageAPI(file: File){
    if(file){
        const fileName = generateRandomString(5) + '_' + file.name
        try{
            await fetch(s3Url + fileName, {
                method: 'PUT',
                body: file
            })
            console.log('Image Uploaded Successfully!')
            return fileName
        }catch(e){
            console.log(`Error - Cannot upload image: ${e}`)
        }
        }
    return ''
}

async function deleteRecipeImageAPI(imgKey: string){
    try{
        await fetch(s3Url + imgKey, {
            method: 'DELETE'
        })
        console.log('Image successfully deleted!')
    }catch(e){
        console.log(`Error - Cannot delete image: ${e}`)
    }
}

async function getRecipeImageAPI(imgKey: string): Promise<string>{
    let url = ''
    try{
        return await fetch(s3Url + imgKey, {
            method: 'GET'
        }).then(async response => await response.blob()).then(blob => {return URL.createObjectURL(blob)})
    }catch(e){
        console.log(`Error - Cannot get image: ${e}`)
    }
    return url
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

export {getRecipes, getRecipesAPI, isRecipesEmpty, clearRecipes, setRecipes, postRecipe, putRecipe, deleteRecipeAPI, putRecipeImageAPI, deleteRecipeImageAPI, getRecipeImageAPI}
