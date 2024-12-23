<script setup lang='ts'>
    import { useEditor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    import EditorPanel from './EditorPanel.vue';

    const props = defineProps({extensions:{type: Object}, content:{type: String}})

    const editor = useEditor({
        content: props.content || 'Start writing an article about your recipe here! 😊👍',
        extensions: [StarterKit]
    })

    function onSubmit(e: Event) {
        e.preventDefault()
    }
</script>

<template>
    <form class="editor-container" @submit="onSubmit">
        <editor-content :editor="editor" />
        <EditorPanel :editor="editor" :extensions="extensions"/>
        <input v-if="extensions?.addPost" type="submit" value="Post">
    </form>
</template>


<style lang="css" scoped>
.editor-container{
    position: relative;
    margin-top: 25px;
}
input[type="submit"]{
    float: right;
    margin-top: 0.75rem;
    background-color: transparent;
    border: 1px solid rgb(185, 185, 185);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 400;
    font-size: 0.89rem;
    &:hover{
        cursor: pointer;
        background-color: rgb(240, 240, 240);
    }
}
:deep(.tiptap){
    border: 1px solid rgb(216, 216, 216);
    padding: 1rem 1rem 3rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    &:focus{
        outline: 1px solid black;
    }
}
</style>