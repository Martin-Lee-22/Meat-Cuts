<script setup lang="ts">
    defineProps(['title', 'editMode']);
</script>

<template>
    <h1 v-if="!editMode">{{title}}</h1>
    <input v-else type="text" :id="title" :value="title" placeholder="Input name of recipe"/>
</template>

<style lang="css" scoped>
    input{
        width: 70%;
        text-align: center;
        font-size: 1.15rem;
        height: 2rem;
    }
</style>