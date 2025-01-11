<script setup lang="ts">
import Editor from '../components/editor/Editor.vue';
import type { editorExtensions } from '@/types/editor';

defineProps<{article: string, editMode: boolean}>()

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
    <Editor v-if="editMode" :content="article" :extensions="editorExtensions"/>
    <article v-else class="recipe-article" v-html="article"></article>
</template>

<style lang="css" scoped>
:deep(iframe){
    display: block;
    margin-inline: auto;
}
</style>