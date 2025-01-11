<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({editor:{type: Object, default: null}, extensions:{type: Object}})

/**
 * Prompt the user for a YouTube URL and insert a YouTube video into the editor at the user's current position.
 */
function addVideo() {
    const url = prompt('Enter YouTube URL')
    props.editor.commands.setYoutubeVideo({
        src: url,
        width: 500,
        height: 300,
    })
    }
</script>

<template>
    <div class="editor-panel-menu-container">
        <button title="Bold" @click="editor?.chain().focus().toggleBold().run()" :disabled="!editor?.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor?.isActive('bold') }"><span class="material-symbols-outlined" :class="{ 'active-button': editor?.isActive('bold') }">format_bold</span></button>
        <button title="Italic" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }"><span class="material-symbols-outlined" :class="{ 'active-button': editor?.isActive('italic') }">format_italic</span></button>
        <button title="Underline" @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }"><span class="material-symbols-outlined">format_underlined</span></button>
        <button title="Bullet List" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }"><span class="material-symbols-outlined" :class="{ 'active-button': editor?.isActive('bulletList') }">format_list_bulleted</span></button>
        <button title="Ordered List" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }"><span class="material-symbols-outlined" :class="{ 'active-button': editor?.isActive('orderedList') }">format_list_numbered</span></button>
        <button title="Heading 1" v-if="extensions?.addHeadings" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"><span>H1</span></button>
        <button title="Heading 2" v-if="extensions?.addHeadings" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"><span>H2</span></button>
        <button title="Heading 3" v-if="extensions?.addHeadings" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"><span>H3</span></button>
        <button title="Highlight" v-if="extensions?.addHighlights" @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }"><span class="material-symbols-outlined">format_ink_highlighter</span></button>
        <button title="Text align left" v-if="extensions?.addTextAlignments" @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"><span class="material-symbols-outlined">format_align_left</span></button>
        <button title="Text align center" v-if="extensions?.addTextAlignments" @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"><span class="material-symbols-outlined">format_align_center</span></button>
        <button title="Text align right" v-if="extensions?.addTextAlignments" @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"><span class="material-symbols-outlined">format_align_right</span></button>
        <button title="Add Youtube Video" v-if="extensions?.addYoutubeVideo" @click="addVideo"><span class="material-symbols-outlined">youtube_activity</span></button>
    </div>
</template>

<style lang="css" scoped>
.editor-panel-menu-container{
    position: absolute;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    right: 0;
    display: flex;
}
.active-button{
    color: black;
}
</style>