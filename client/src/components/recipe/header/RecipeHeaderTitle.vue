<script setup lang="ts">
    import { formatElementTextSize } from '@/utils/helperFunctions';
    import { onMounted, onUpdated, useTemplateRef } from 'vue';

    defineProps<{editMode: boolean}>();
    const title = defineModel('title');
    const containerRef = useTemplateRef('containerRef')
    const inputRef = useTemplateRef('inputRef')

    // Sets the size of the title element
    onMounted(()=>{
        formatElementTextSize('recipe-header-title', 30, 6)
    })

    // Removes the error classes if the input is valid.
    onUpdated(()=>{
        if(containerRef.value?.classList.contains('empty-text-input') && containerRef.value?.classList.contains('has-error') && 
            inputRef.value) {
            containerRef.value.classList.remove('empty-text-input')
            containerRef.value.classList.remove('has-error')
        }
    })
</script>

<template>
    <div ref="containerRef" class="recipe-header-title-container">
        <h1 v-if="!editMode" id="recipe-header-title">{{title}}</h1>
        <input v-else ref="inputRef" type="text" v-model="title" placeholder="Input name of recipe"/>
    </div>
</template>

<style lang="css" scoped>
    h1{
        font-size: 1.5rem;
        margin-inline: 18px;
        word-break: break-word;
    }
    input{
        width: 70%;
        text-align: center;
        font-size: 1.15rem;
        height: 2rem;
    }
    .recipe-header-title-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>