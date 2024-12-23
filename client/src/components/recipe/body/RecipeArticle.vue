<script setup lang="ts">
import Editor from '../components/editor/Editor.vue';
import type { editorExtensions } from '@/types/editor';

defineProps<{article: string, editMode: boolean}>()

const editorExtensions: editorExtensions = {
    addImages: true,
    addHeadings: true, 
    addRating: false,
    addPost: false,
    addHighlights: true,
    addTextAlignments: true
}
</script>

<template>
    <Editor v-if="editMode" :content="article" :extensions="editorExtensions"/>
    <article v-else v-html="article"></article>
</template>

<style lang="css" scoped>
</style>