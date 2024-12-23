<script setup lang="ts">
import RecipeReviewList from './RecipeReviewList.vue';
import RecipeReviewsSummary from './RecipeReviewsSummary.vue';
import Editor from '../components/editor/Editor.vue';
import type { editorExtensions } from '@/types/editor';

const props = defineProps(['recipe']);

const editorExtensions: editorExtensions = {
    addImages: false,
    addHeadings: false, 
    addRating: true,
    addPost: true,
    addHighlights: false,
    addTextAlignments: false
}
</script>

<template>
    <div class="recipe-reviews-container">
        <h3>Reviews</h3>
        <RecipeReviewsSummary :recipe="recipe"/>
        <Editor :extensions="editorExtensions"/>   
        <RecipeReviewList :reviews="recipe.reviews"/>
    </div>
</template>

<style lang="css" scoped>
    .recipe-reviews-container{
        padding-left: 18px;
        padding-right: 15px;
    }
</style>