<script setup lang="ts">
    import RecipeListItemSkeleton from './RecipeListItemSkeleton.vue';
    const numberOfSkeletons = 9;
</script>

<template>
    <RecipeListItemSkeleton v-for="_ in numberOfSkeletons" :key="_"/>
</template>
