<script setup lang="ts">
import { formatElementTextSize } from '@/utils/helperFunctions';
import { onMounted } from 'vue';

    defineProps<{editMode: boolean}>();
    const title = defineModel('title');

    onMounted(()=>{
        formatElementTextSize('recipe-header-title', 30, 6)
    })
</script>

<template>
    <h1 v-if="!editMode" id="recipe-header-title">{{title}}</h1>
    <input v-else type="text" v-model="title" placeholder="Input name of recipe"/>
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
</style>