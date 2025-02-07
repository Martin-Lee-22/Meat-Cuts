<script setup lang="ts">
import RecipeReviewList from './RecipeReviewList.vue';
import RecipeReviewsSummary from './RecipeReviewsSummary.vue';
import Editor from '../components/editor/Editor.vue';
import type { editorExtensions } from '@/types/editor';
import { onMounted, ref, useTemplateRef, watch } from 'vue';

defineProps(['recipe']);

const nameContainer = useTemplateRef('nameContainer');
var container: HTMLDivElement | null = null
var panelContainer: HTMLDivElement | null = null


const userName = ref('');
const review = ref('');
const rating = ref(0);

const editorExtensions: editorExtensions = {
    addImages: false,
    addHeadings: false, 
    addRating: true,
    addPost: true,
    addHighlights: false,
    addTextAlignments: false,
    addYoutubeVideo: false,
    addUnderline: false
}

function onSubmit(e: Event){
    e.preventDefault();
    if(userName.value.length === 0){
        nameContainer.value?.classList.add('empty-text-input');
        nameContainer.value?.classList.add('has-error-input');
    }
    if(review.value.length === 0 && container && panelContainer){
        container.classList.add('has-error')
        panelContainer.classList.add('empty-text-input')
    }
}

onMounted(()=>{
    container = document.querySelector('.editor-container') as HTMLDivElement
    panelContainer = document.querySelector('.editor-panel-container') as HTMLDivElement
})

watch(()=> review.value, () => {
    if(review.value.length <= 7) review.value = ''
    if(container && panelContainer){
        if(container.classList.contains('has-error') && panelContainer.classList.contains('empty-text-input')) {
        container.classList.remove('has-error')
        panelContainer.classList.remove('empty-text-input')
        }
    }
})
watch(()=> userName.value, () => {
    if(userName.value.length > 0) {
        nameContainer.value?.classList.remove('empty-text-input');
        nameContainer.value?.classList.remove('has-error-input');
    }
})
</script>

<template>
    <div id="recipe-reviews" class="recipe-reviews-container">
        <h3>Reviews</h3>
        <RecipeReviewsSummary :recipe="recipe"/>
        <form id="form-review" @submit="onSubmit">
            <div ref="nameContainer" class="name-container">
                <label>Name:</label>
                <input type='text' placeholder="Full name" v-model="userName" onkeydown="return /[a-z, ,-]/i.test(event.key)"/>
            </div>
            <Editor v-model:contentModel="review" v-model:ratingModel="rating" :extensions="editorExtensions"/>   
        </form>
        <RecipeReviewList :reviews="recipe.reviews"/>
    </div>
</template>

<style lang="css" scoped>
    .recipe-reviews-container{
        padding-left: 18px;
        padding-right: 15px;
    }
    .name-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 10px;
        margin-top: 15px;
        & input[type="text"]{
            border-radius: 5px;
            height: 2rem;
            padding-left: 5px;
            font-size: 1rem;
        }
    }
    .empty-text{
        &::after{
            content:'*Cannot be empty*';
            color: red;
            font-size: 0.95em;
        }
    }
    .has-error{
        border: 1px solid red;
    }
    .has-error-input{
        & input{
            border: 1px solid red;
        }
    }
</style>