<script setup lang="ts">
import BaseStarsRating from '@/components/base/BaseStarsRating.vue';
import EditorPanelMenu from './EditorPanelMenu.vue';
import { ref, watch, useTemplateRef } from 'vue';

defineProps({editor:{type: Object, default: null}, extensions:{type: Object}})
const showMenu = ref(false)
const menuContainer = useTemplateRef('editor-panel-menu-container')

/**
 * Listens for mouseup events outside of the menu container and sets showMenu to false
 * @param {MouseEvent} e - The mouse event triggered on mouse up.
 */
function onOutsideClick(e: MouseEvent) {
    const target = e.target as HTMLElement
    if(!menuContainer.value?.contains(target)) showMenu.value = false
}

watch(showMenu, () => {
    if(showMenu.value) {
        document.addEventListener('mouseup', onOutsideClick)
    } else {
        document.removeEventListener('mouseup', onOutsideClick)
    }
})

</script>

<template>
    <div class="editor-panel-container">
        <BaseStarsRating v-if="extensions?.addRating" :rating="3" :edit-mode="true"/>
        <div class="editor-controls-container">
            <button title="Text Formatting" @click="showMenu = !showMenu">
                <span class="material-symbols-outlined">match_case</span>
            </button>
            <button v-if="extensions?.addImages" title="Add Image" @click="editor?.chain().focus().toggleBold().run()" :disabled="!editor?.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor?.isActive('bold') }">
                <span class="material-symbols-outlined">image</span>
            </button>
            <div ref="editor-panel-menu-container">
                <EditorPanelMenu v-if="showMenu" :editor="editor" :show-menu="showMenu" :extensions="extensions"/>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .editor-panel-container{
        position: absolute;
        justify-content: space-between;
        width: 100%;
        padding: 0 0.5rem 0.15rem 0.5rem;
        bottom:0;
        z-index: 1;
        display: flex;
        display: block;
    }
    .editor-controls-container{
        position: relative;
        float: right;
    }
    :deep(button){
        background:none;
        border: none;
        color: gray;
        &:hover{
            cursor: pointer;
            color: black;
        }
    }
</style>