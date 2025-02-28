import { ref } from 'vue';
import type { recipe } from '@/types/recipes';
import { useRecipeStore } from '../stores/recipe';
import { generateRandomString } from '@/utils/helperFunctions';
import { callToast } from '@/shared/toast';
import { TYPE } from 'vue-toastification';

// The recipes array stores the recipes data.
const recipes = ref<recipe[]>([])

const url = import.meta.env.VITE_RECIPES_URL
const s3Url = import.meta.env.VITE_RECIPE_IMAGE_URL

/**
 * Retrieves recipes for the given animal and cut from the API and stores them in the recipes array.
 * @param {string} animal - The animal for which to retrieve recipes.
 * @param {string} cut - The cut for which to retrieve recipes.
 */
export async function getRecipesAPI(animal:string, cut:string): Promise<void> {
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

/**
 * Posts the given recipe to the API and updates the current recipe in the recipe store.
 * @param {recipe} recipe - The recipe to post.
 * @param {number} id - The id of the recipe to post.
 */
export async function postRecipe(recipe:recipe, id: number): Promise<void> {
    const recipeStore = useRecipeStore()
    fetch(url  + `${recipe.animal}/${recipe.cut}/${id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(recipe)
    }).then(response => response.json()).then(data => recipeStore.setRecipe(data))
}

/**
 * Updates an existing recipe in the API and updates the recipe store with the response.
 * @param {recipe} recipe - The recipe object containing updated details to be stored.
 */
export async function putRecipe(recipe:recipe, toast: boolean = true): Promise<void> {
    const recipeStore = useRecipeStore()
    try{
        await fetch(url  + `${recipe.animal}/${recipe.cut}/${recipe.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recipe)
        }).then(response => response.json()).then(data => recipeStore.setRecipe(data))
        if(toast) callToast(TYPE.SUCCESS, 'Success! Recipe saved.')
    }catch(e){
        console.log(`Error: ${e}`)
        callToast(TYPE.ERROR, 'ERROR: Recipe not saved. Please try again later.')
    }
}

/**
 * Deletes the given recipe from the API.
 * @param {recipe} recipe - The recipe object to delete.
 */
export async function deleteRecipeAPI(recipe:recipe): Promise<void> {
    try{
        await fetch(url  + `${recipe.animal}/${recipe.cut}/${recipe.id}`, {
            method: 'DELETE'
        })
        callToast(TYPE.SUCCESS, 'Success! Recipe Deleted.')
    }catch(e){
        console.log('Error: Could not delete recipe: ' + e)
        callToast(TYPE.ERROR, 'ERROR: Recipe not deleted. Please try again later.')
    }
}

/**
 * Uploads a file to the AWS S3 bucket with a generated random string.
 * Returns the filename with the random string prepended if the upload is successful.
 * @param {File} file - The file object to upload.
 * @returns {string} The filename with a random string prepended, or an empty string if the upload failed.
 */
export async function putRecipeImageAPI(file: File): Promise<string> {
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

/**
 * Deletes the given image from the AWS S3 bucket.
 * @param {string} imgKey - The filename of the image to delete.
 */
export async function deleteRecipeImageAPI(imgKey: string): Promise<void> {
    try{
        await fetch(s3Url + imgKey, {
            method: 'DELETE'
        })
        console.log('Image successfully deleted!')
    }catch(e){
        console.log(`Error - Cannot delete image: ${e}`)
    }
}

/**
 * Retrieves an image from the AWS S3 bucket using the given image key.
 * Converts the image blob into a URL and returns it.
 * @param {string} imgKey - The filename of the image to retrieve.
 * @returns {Promise<string>} A promise that resolves to a URL representing the image object,
 * or an empty string if the retrieval fails.
 */

export async function getRecipeImageAPI(imgKey: string): Promise<string>{
    try{
        return await fetch(s3Url + imgKey, {
            method: 'GET'
        }).then(async response => await response.blob()).then(blob => {return URL.createObjectURL(blob)})
    }catch(e){
        console.log(`Error - Cannot get image: ${e}`)
    }
    return ''
}

/**
 * Returns the recipes data. The data is updated when the cut selection
 * changes in the cuts store.
 * @return {recipe[]} The recipes data.
 */
export function getRecipes(): recipe[] {
    return recipes.value
}

/**
 * Updates the recipes data with the newRecipes parameter.
 * @param {recipe[]} newRecipes The new recipes data to update the store with.
 */
export function setRecipes(newRecipes:recipe[]): void {
    recipes.value = newRecipes
}

/**
 * Returns true if the recipes array is empty, false otherwise.
 * @returns {boolean} true if recipes is empty
 */
export function isRecipesEmpty(): boolean {
    return recipes.value.length === 0
}

/**
 * Clears the recipes array to an empty array.
 */
export function clearRecipes(): void {
    recipes.value = []
}