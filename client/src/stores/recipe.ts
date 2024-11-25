import type { recipe } from "@/types/recipes"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useRecipeStore = defineStore('recipe', () => {
    const recipe = ref<recipe>({} as recipe)
    const showRecipe = ref(false)

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

    /**
     * Toggles the visibility state of the recipe.
     * Changes the boolean value of `showRecipe` to its opposite.
     */
    function toggleRecipe(){
        showRecipe.value = !showRecipe.value
    }

    /**
     * Retrieves the current visibility state of the recipe.
     * @returns {boolean} true if the recipe is visible, false otherwise
     */
    function getShowRecipe(){
        return showRecipe.value
    }

    return { getRecipe, isRecipeEmpty, setRecipe, resetRecipe, toggleRecipe, getShowRecipe }
})