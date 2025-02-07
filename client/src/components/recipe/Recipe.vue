<script setup lang="ts">
    import {onMounted, onUnmounted, onUpdated, ref, useTemplateRef, watch } from 'vue';
    import {useRecipeStore} from '../../stores/recipe';
    import BaseButton from '../base/BaseButton.vue';
    import RecipeHeader from './header/RecipeHeader.vue';
    import RecipeBody from './body/RecipeBody.vue';
    import RecipeReviews from './reviews/RecipeReviews.vue';
    import RecipeFooter from './footer/RecipeFooter.vue';
    import { useCutsStore } from '@/stores/cuts';

    const container = useTemplateRef('container')
    const cutStore = useCutsStore()
    const recipeStore = useRecipeStore()
    const recipe = ref(JSON.parse(JSON.stringify(recipeStore.getRecipe())))
    const editMode = ref(true)

    // watch(container, (newRecipe, oldRecipe) => {
    //     if(!recipeStore.isRecipeEmpty() && newRecipe !== oldRecipe) recipeStore.toggleRecipe()
    // })

    /**
     * Toggles between edit mode.
     * In edit mode, the recipe is wrapped in a form element.
     * In non-edit mode, the form element is removed.
     */
    function formMode(){
        const article = document.querySelector('.recipe-container')!
        editMode.value = !editMode.value
        // if(!editMode.value) {
        //     editMode.value = true
        //     const form = document.createElement('form')
        //     form.classList.add('form-recipe-container')
        //     form.setAttribute("id", "form-recipe");
        //     form.method = "POST";
        //     form.onsubmit = onSubmit;
        //     article?.parentNode?.insertBefore(form, article)
        //     form.appendChild(article)
        // } else {
        //     editMode.value = false
        //     const form = document.getElementById('form-recipe')!
        //     form.replaceWith(...form.childNodes)
        // }
    }

    function onSubmit(e: Event){
        e.preventDefault()
        let completeInputs = true
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
                    completeInputs = false
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
                        completeInputs = false
                        container.classList.add('has-error')
                        container.classList.add('empty-list-input')
                    }
                }
            }
        }
        if(completeInputs) {
            recipeStore.setRecipe(recipe.value)
            editMode.value = false
        }
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

onUpdated(()=>{
    console.log(recipe.value.published)
        console.log(typeof(recipe.value.published))
})
</script>

<template>
    <Transition appear mode="out-in" name="horizontal-move">
        <article class="recipe-container" ref="container">
            <button @click="formMode">Edit Mode</button>
            <BaseButton :callBack="closeRecipe" class="close-recipe-button">
                <span class="material-symbols-outlined">close</span>
            </BaseButton>
            <RecipeHeader v-model:recipe="recipe" :editMode="editMode"/>
            <RecipeBody v-model:recipe="recipe" :editMode="editMode"/>
            <RecipeFooter v-if="editMode" v-model:editMode="editMode" v-model:recipe="recipe"/>
            <RecipeReviews v-if="!editMode" :recipe="recipe"/>
            <form id="form-recipe" v-on:submit="onSubmit"></form>
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