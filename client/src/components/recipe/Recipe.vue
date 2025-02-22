<script setup lang="ts">
    import {onMounted, onUnmounted, ref } from 'vue';
    import {useRecipeStore} from '../../stores/recipe';
    import BaseButton from '../base/BaseButton.vue';
    import RecipeHeader from './header/RecipeHeader.vue';
    import RecipeBody from './body/RecipeBody.vue';
    import RecipeReviews from './reviews/RecipeReviews.vue';
    import RecipeFooter from './footer/RecipeFooter.vue';
    import { useCutsStore } from '@/stores/cuts';
    import { getRecipes, getRecipesAPI, putRecipe, putRecipeImage } from '@/api/recipes';
    import type { recipe as recipeType } from '@/types/recipes';

    const cutStore = useCutsStore()
    const recipeStore = useRecipeStore()
    const recipe = ref(JSON.parse(JSON.stringify(recipeStore.getRecipe())))
    const editMode = ref(true)

    function checkRequiredInputs(){
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

    async function onSubmit(e: Event){
        e.preventDefault()

        const fileRef = document.querySelector('#image_input') as HTMLInputElement
        let newRecipe: recipeType = recipe.value

        if(fileRef.files) {
            const imageKey = await putRecipeImage(fileRef.files[0])
            if(imageKey) newRecipe.image = imageKey
        }

        // if(checkRequiredInputs()) {
        //     if(recipe.value.animal === '' && recipe.value.cut === ''){
        //         newRecipe.animal = cutStore.getAnimal().type
        //         newRecipe.cut = cutStore.getCut().value.cut
        //         newRecipe.id = getRecipes()[0] ? getRecipes()[0].id + 1 : 0
        //     }
        //     console.log(newRecipe)
        //     await putRecipe(newRecipe)
        //     await getRecipesAPI(newRecipe.animal, newRecipe.cut)
        //     recipeStore.setRecipe(newRecipe)
        //     editMode.value = false
        // }
    }

    /**
     * Closes the recipe by clearing the current recipe and toggling the showRecipe flag off.
     */
    function closeRecipe(){
        if(recipeStore.getAddRecipeMode()) recipeStore.setAddRecipeMode(false)
        recipeStore.clearRecipe()
        recipeStore.toggleShowRecipe()
    }

    /**
     * Sets the edit mode to false if the recipe is not in add recipe mode.
     */
    onMounted(() => {
        if(!recipeStore.getAddRecipeMode()) editMode.value = false 
    })

    /**
     * clears recipe if user selects another animal.
     */
    onUnmounted(() => {
        if(cutStore.isCutEmpty()) closeRecipe()
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
            <RecipeHeader v-model:recipe="recipe" :editMode="editMode"/>
            <RecipeBody v-model:recipe="recipe" :editMode="editMode"/>
            <RecipeFooter v-if="editMode" v-model:editMode="editMode" v-model:recipe="recipe"/>
            <RecipeReviews v-if="!editMode" :recipe="recipe"/>
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