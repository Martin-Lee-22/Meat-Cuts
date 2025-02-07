<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { formatDate } from '@/utils/helperFunctions';
import { onMounted, onUpdated, useTemplateRef } from 'vue';

const props = defineProps(['title', 'data', 'editMode', 'type', 'width']);
const data = defineModel('data');
const inputRef = useTemplateRef('inputRef')
const containerRef = useTemplateRef('containerRef')

// onMounted is needed to format the date to the correct format due to v-model directive.
onMounted(()=>{
    if(props.type === 'date' && inputRef.value) {
        inputRef.value.value = formatDate(new Date())
    }
    if(props.type === 'date') {
        data.value = formatDate(new Date(data.value as Date)); 
    }
})
onUpdated(()=>{
        if(containerRef.value?.classList.contains('empty-text-input') && containerRef.value?.classList.contains('has-error') && 
            inputRef.value) {
            containerRef.value.classList.remove('empty-text-input')
            containerRef.value.classList.remove('has-error')
        }
    })
</script>

<template>
    <div v-if="!editMode"><p>{{title}}: <span>{{type === 'date' ? formatDate(new Date(data as Date)) : data}}</span></p></div>
    <div :name="title.charAt(0).toLowerCase() + title.slice(1)" ref="containerRef" class="recipe-header-info" v-else>
        <label :for=title>{{title}}:</label>
        <input ref="inputRef" :readonly="type === 'date'" :type=type :id=title :name=title v-model="data" :style="{width: (width || '50%')}">
    </div>
</template>

<style lang="css" scoped>
    .recipe-header-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        & input{
            width: 50%;
            text-align: center;
        }
    }
</style>