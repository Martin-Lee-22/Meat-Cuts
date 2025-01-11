<script setup lang="ts">
import RecipeReviewList from './RecipeReviewList.vue';
import RecipeReviewsSummary from './RecipeReviewsSummary.vue';
import Editor from '../components/editor/Editor.vue';
import type { editorExtensions } from '@/types/editor';

defineProps(['recipe']);

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
</script>

<template>
    <div id="recipe-reviews" class="recipe-reviews-container">
        <h3>Reviews</h3>
        <RecipeReviewsSummary :recipe="recipe"/>
        <div class="name-container">
            <label>Name:</label>
            <input type='text' placeholder="Full name" onkeydown="return /[a-z, ]/i.test(event.key)"/>
        </div>
        <Editor :extensions="editorExtensions"/>   
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
</style>