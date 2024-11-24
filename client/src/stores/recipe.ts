import type { recipe } from "@/types/recipes"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useRecipeStore = defineStore('recipe', () => {
    const recipe = ref<recipe>({} as recipe)

    /**
     * Retrieves the current value of the recipe object.
     * @returns {Object} The current recipe object.
     */
    function getRecipe(){
        return recipe.value
    }

    /**
     * Returns true if the recipe object is empty, false otherwise.
     * @returns {boolean} true if recipe is empty
     */
    function isRecipeEmpty(){
        return Object.keys(recipe.value).length === 0
    }

    
    /**
     * Sets the recipe object to the given value.
     * @param {Object} value - the value to set the recipe object to
     */
    function setRecipe(value: recipe){
        recipe.value = value
    }

    
    /**
     * Resets the recipe object to an empty object.
     */
    function resetRecipe(){
        recipe.value = {} as recipe
    }

    return { getRecipe, isRecipeEmpty, setRecipe, resetRecipe }
})