<script setup lang="ts">
    import type { review } from '@/types/recipes';
import RecipeReviewsListItem from './RecipeReviewsListItem.vue';
    
    const props = defineProps<{reviews: review[]}>();
</script>

<template>
    <div class="recipe-reviews-list-container">
        <ul>
            <RecipeReviewsListItem v-for="review in reviews" :review="review"/>
        </ul>
    </div>
</template>

<style lang="css" scoped>
    .recipe-reviews-list-container{
        display: flex;
        justify-content: center;
        padding-right: 18px;
    }
    ul{
        list-style: none;
        padding: 0;
        width: 100%;
    }
</style>