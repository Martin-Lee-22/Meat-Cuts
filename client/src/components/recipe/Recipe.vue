<script setup lang="ts">
    import {onMounted, onUnmounted, ref, watch } from 'vue';
    import {useRecipeStore} from '../../stores/recipe';
    import BaseButton from '../base/BaseButton.vue';
    import RecipeHeader from './header/RecipeHeader.vue';
    import RecipeBody from './body/RecipeBody.vue';
    import RecipeReviews from './reviews/RecipeReviews.vue';
    import RecipeFooter from './footer/RecipeFooter.vue';
    import { useCutsStore } from '@/stores/cuts';
    import { deleteRecipeAPI, deleteRecipeImageAPI, getRecipes, getRecipesAPI, putRecipe, putRecipeImageAPI } from '@/api/recipes';
    import type { recipe as recipeType, review as reviewType } from '@/types/recipes';
    import { getReviewsAPI } from '@/api/reviews';
    
    const cutStore = useCutsStore()
    const recipeStore = useRecipeStore()
    const recipe = ref(JSON.parse(JSON.stringify(recipeStore.getRecipe())))
    const editMode = ref(true)

    const reviews = ref<reviewType[]>([])
    const rating = ref(0)
    const isCallingDeletingAPI = ref(false)
    const isCallingPutAPI = ref(false)

    /**
     * Validates that all required inputs in the recipe object have been provided.
     * 
     * This function checks the 'name', 'author', 'ingredients', and 'steps' fields 
     * of the recipe to ensure they are not empty or whitespace. If any required field 
     * is missing or invalid, it adds error classes to the respective DOM elements 
     * and returns false. Otherwise, it returns true.
     * @returns {boolean} - Returns true if all required inputs are complete; 
     *                      otherwise, false.
     */
    function checkRequiredInputs(): boolean {
        let completeRequiredInputs = true
        const requiredInputs = [
            {key: 'name', ref:'.recipe-header-title-container', hasInput: true}, 
            {key: 'author', ref:'.recipe-header-info', hasInput: true}, 
            {key:'ingredients', ref:'.recipe-ingredient-list', hasInput: true}, 
            {key:'steps', ref:'.recipe-steps-list', hasInput: true}
        ]
        for (const [key, value] of Object.entries(recipe.value)) {
            const requiredInput = requiredInputs.find((x)=>{return x.key === key})
            if(requiredInput) {
                if(typeof(value) === 'string' && !value && !value.trim()){
                    completeRequiredInputs = false
                    let container = document.querySelector(requiredInput.ref) as HTMLDivElement
                    container.classList.add('has-error')
                    container.classList.add('empty-text-input')
                }
                if(typeof(value) === 'object' && Array.isArray(value)) {
                    const nonWhiteSpaceArray = value.filter((x)=>{
                            if (typeof x === 'string') return /\S/.test(x)
                            return false
                        }
                    )
                    if(nonWhiteSpaceArray.length === 0){
                        let container = document.querySelector(requiredInput.ref) as HTMLDivElement
                        completeRequiredInputs = false
                        container.classList.add('has-error')
                        container.classList.add('empty-list-input')
                    }
                }
            }
        }
        return completeRequiredInputs
    }

    /**
     * Updates the reviews for the current recipe by calling the getReviewsAPI.
     * The updated reviews are stored in the reviews reactive reference.
     * @returns {Promise<void>}
     */
    async function updateReviews(): Promise<void>{
        reviews.value = await getReviewsAPI(recipe.value.id)
    }

    /**
     * Calculates the average rating from the list of reviews for the current recipe.
     * If there are no reviews, it returns 0.
     * @returns {number} - The average rating of the reviews, rounded down to the nearest whole number.
     */
    function calculateRating(): number{
        let totalRating = 0
        if(reviews.value.length){
            totalRating = Math.floor(reviews.value.reduce((total, review) => total + review.rating, 0) / reviews.value.length)
        }
        return totalRating
    }

    /**
     * Handles the submission of a recipe by preventing the default form action, 
     * validating the inputs, posting the recipe to the server, and updating the recipes list.
     * @param {Event} e - The submit event.
     * @returns {Promise<void>}
     */
    async function onSubmit(e: Event): Promise<void>{
        e.preventDefault()

        const fileRef = document.querySelector('#image_input') as HTMLInputElement
        let newRecipe: recipeType = recipe.value

        if(!isCallingPutAPI.value){
            isCallingPutAPI.value = true
            if(fileRef.files) {
                const imageKey = await putRecipeImageAPI(fileRef.files[0])
                if(imageKey) newRecipe.image = imageKey
            }

            if(checkRequiredInputs()) {
                if(recipe.value.animal === '' && recipe.value.cut === ''){
                    newRecipe.animal = cutStore.getAnimal().type
                    newRecipe.cut = cutStore.getCut().value.cut
                    newRecipe.id = getRecipes()[0] ? getRecipes()[0].id + 1 : 0
                }
                await putRecipe(newRecipe)
                await getRecipesAPI(newRecipe.animal, newRecipe.cut)
                recipeStore.setRecipe(newRecipe)
                editMode.value = false
                recipeStore.setShowRecipe(false)
                if(recipeStore.getAddRecipeMode()) recipeStore.setAddRecipeMode(false); 
            }
            isCallingPutAPI.value = false
        }
    }

    /**
     * Closes the recipe by clearing the current recipe and toggling the showRecipe flag off.
     */
    function closeRecipe(): void{
        if(recipeStore.getAddRecipeMode()) recipeStore.setAddRecipeMode(false)
        recipeStore.clearRecipe()
        recipeStore.toggleShowRecipe()
    }

    /**
     * Cancels the current recipe by clearing the addRecipeMode flag, and 
     * resetting the recipe to the current recipe in the recipe store. If the 
     * recipe is not in add recipe mode, it sets the edit mode to false.
     */
    function cancelRecipe(): void{
        if(recipeStore.getAddRecipeMode()) {
            recipeStore.setAddRecipeMode(false); 
            recipeStore.setShowRecipe(false)
        }
        recipe.value = JSON.parse(JSON.stringify(recipeStore.getRecipe()))
        editMode.value = false
    }

    /**
     * Deletes the current recipe by calling the deleteRecipeAPI and deleteRecipeImageAPI functions and
     * toggling the showRecipe flag off. This function is only called if the isCallingDeletingAPI flag is false.
     * @returns {Promise<void>}
     */
    async function deleteRecipe(): Promise<void>{
        if(!isCallingDeletingAPI.value){
            isCallingDeletingAPI.value = true
            await deleteRecipeAPI(recipeStore.getRecipe())
            await deleteRecipeImageAPI(recipeStore.getRecipe().image)
            isCallingDeletingAPI.value = true
            recipeStore.setShowRecipe(false)
            editMode.value = false
        }
    }

    /**
     * - Sets the edit mode to false if the recipe is not in add recipe mode.
     * - calls the reviews api to get the reviews.
     */
    onMounted(async () => {
        if(!recipeStore.getAddRecipeMode()) editMode.value = false 
        reviews.value = await getReviewsAPI(recipe.value.id)
        rating.value = calculateRating()
    })

    /**
     * clears recipe if user selects another animal.
     */
    onUnmounted(() => {
        if(cutStore.isCutEmpty()) closeRecipe()
    })

    /**
     * Watch for changes in the length of the reviews array and update the rating accordingly.
     */
    watch(()=> reviews.value.length, () => {
        rating.value = calculateRating()
    })

</script>

<template>
    <Transition appear mode="out-in" name="horizontal-move">
        <article class="recipe-container" ref="container">
            <BaseButton title="Edit Recipe" :call-back="() => editMode = !editMode" class="edit-recipe-button">
                <span class="material-symbols-outlined">edit</span>
            </BaseButton>
            <BaseButton title="Close Recipe" :callBack="closeRecipe" class="close-recipe-button">
                <span class="material-symbols-outlined">close</span>
            </BaseButton>
            <RecipeHeader v-model:recipe="recipe" :editMode="editMode" :reviewsLength="reviews.length" :rating="rating"/>
            <RecipeBody v-model:recipe="recipe" :editMode="editMode"/>
            <RecipeFooter v-if="editMode" :cancelRecipe="cancelRecipe" :deleteRecipe="deleteRecipe" :isCallingDeletingAPI="isCallingDeletingAPI" :isCallingPutAPI="isCallingPutAPI"/>
            <RecipeReviews v-if="!editMode" :recipe="recipe" :reviews="reviews" :totalRating="rating" :updateReviews="updateReviews"/>
            <form id="form-recipe" method="P" v-on:submit="onSubmit"></form>
        </article>
    </Transition>
</template>

<style lang="css">
    .recipe-container{
        transition: 0.35s ease-in-out;
        position: absolute;
        top: 0;
        width: 100%;
        padding-bottom: 25px;
        background-color: white;
        & > div:nth-child(n + 4){
            margin-top: 20px;
        }
    }

    .edit-recipe-button{
        border: 1px solid red;
        color: rgb(76, 76, 76);
        float: right;
        margin-right: 5px;
        margin-top: 5px;
    }   

    .close-recipe-button{
        margin-top: 5px;
    }

    .has-error{
        & input{
            border: 1px solid red;
        }
    }

    .empty-text-input{
        &::after{
            content:'*Cannot be empty*';
            color: red;
            font-size: 0.95em;
        }
    }

    .empty-list-input{
        &::after{
            display: block;
            margin-inline: auto;
            width: fit-content;
            content:'*Must have at least one non-empty item*';
            color: red;
            font-size: 0.85em;
        }
    }

</style>