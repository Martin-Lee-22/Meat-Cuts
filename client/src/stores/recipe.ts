import type { recipe } from "@/types/recipes"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useRecipeStore = defineStore('recipe', () => {
    const recipe = ref<recipe>({} as recipe)
    const showRecipe = ref(false)
    const addRecipeMode = ref(false)

    const defaultRecipe = {
        id: 0,
        name: '',
        description: '',
        ingredients: [''],
        steps: [''],
        tags: [''],
        image: '',
        duration: 0,
        servings: 0,
        calories: 0,
        difficulty: '',
        rating: 0,
        reviews: [],
        author: '',
        authorImage: '',
        views: 0,
        animal: '',
        cut: '',
        published: new Date(),
        article: ''
    }

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
     * Clears the recipe object to an empty object.
     */
    function clearRecipe(){
        recipe.value = {} as recipe
    }

    /**
     * Toggles the visibility state of the recipe.
     * Changes the boolean value of `showRecipe` to its opposite.
     */
    function toggleShowRecipe(){
        showRecipe.value = !showRecipe.value
    }

    /**
     * Sets the visibility state of the recipe to the given boolean value.
     * @param {boolean} x - the value to set the visibility state to
     */
    function setShowRecipe(x: boolean){
        showRecipe.value = x
    }

    /**
     * Retrieves the current visibility state of the recipe.
     * @returns {boolean} true if the recipe is visible, false otherwise
     */
    function getShowRecipe(){
        return showRecipe.value
    }

    function createDefaultRecipe() {
        recipe.value = defaultRecipe
    }

    function getAddRecipeMode() {
        return addRecipeMode.value
    }

    function setAddRecipeMode(x: boolean){
        addRecipeMode.value = x
    }

    return { getRecipe, isRecipeEmpty, setRecipe, clearRecipe, toggleShowRecipe, getShowRecipe, setShowRecipe, createDefaultRecipe, getAddRecipeMode, setAddRecipeMode }
})