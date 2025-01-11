<script setup lang="ts">
    import {ref, useTemplateRef } from 'vue';
    import {useRecipeStore} from '../../stores/recipe';
    import BaseButton from '../base/BaseButton.vue';
    import RecipeHeader from './header/RecipeHeader.vue';
    import RecipeBody from './body/RecipeBody.vue';
    import RecipeReviews from './reviews/RecipeReviews.vue';
    import RecipeFooter from './footer/RecipeFooter.vue';

    const container = useTemplateRef('container')
    const recipeStore = useRecipeStore()
    const recipe = ref(recipeStore.getRecipe())
    const editMode = ref(false)

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

    function onSubmit(){
        console.log('submitted')
    }


</script>

<template>
    <Transition appear mode="out-in" name="horizontal-move">
        <article class="recipe-container" ref="container">
            <button @click="formMode">Edit Mode</button>
            <BaseButton :callBack="recipeStore.toggleShowRecipe" class="close-recipe-button">
                <span class="material-symbols-outlined">close</span>
            </BaseButton>
            <RecipeHeader v-model:recipe="recipe" :editMode="editMode"/>
            <RecipeBody v-model:recipe="recipe":editMode="editMode"/>
            <RecipeFooter v-if="editMode"/>
            <RecipeReviews v-if="!editMode" :recipe="recipe"/>
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
</style>