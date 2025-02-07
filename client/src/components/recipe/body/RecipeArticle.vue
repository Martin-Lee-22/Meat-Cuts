<script setup lang="ts">
import Editor from '../components/editor/Editor.vue';
import type { editorExtensions } from '@/types/editor';

defineProps<{article: string | undefined, editMode: boolean}>()
const contentModel = defineModel('contentModel');

const editorExtensions: editorExtensions = {
    addImages: false,
    addHeadings: true, 
    addRating: false,
    addPost: false,
    addHighlights: true,
    addTextAlignments: true,
    addYoutubeVideo: true,
    addUnderline: true
}
</script>

<template>
    <h5 v-if="editMode">(Optional) Write an article about your recipe:</h5>
    <Editor v-if="editMode" v-model:contentModel="contentModel" :extensions="editorExtensions"/>
    <article v-else class="recipe-article" v-html="article ? article : ''"></article>
</template>

<style lang="css" scoped>
:deep(iframe){
    display: block;
    margin-inline: auto;
}
</style>