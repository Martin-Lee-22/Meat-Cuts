<script setup lang="ts">
    import RecipeListItemSkeleton from './RecipeListItemSkeleton.vue';
    const numberOfSkeletons = 9;
</script>

<template>
    <div class="recipes-list-skeleton-container">
        <RecipeListItemSkeleton v-for="_ in numberOfSkeletons" :key="_"/>
    </div>
</template>

<style lang="css" scoped>
    .recipes-list-skeleton-container{
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        row-gap: 10px;
        column-gap: 8px;
        overflow-y: scroll;
    }
</style>