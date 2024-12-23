<script setup lang="ts">
    import type { review } from '@/types/recipes';
import RecipeReviewsListItem from './RecipeReviewsListItem.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
    
    const props = defineProps<{reviews: review[]}>();
</script>

<template>
    <div class="recipe-reviews-list-container">
        <div>
            <span>Sort by:</span>
            <BaseSelect :title="'Sort by:'" :data="'Date'" :options="['Date', 'Rating']"/>
        </div>
        <div class="recipe-reviews-list-inner-container">
            <ul>
                <RecipeReviewsListItem v-for="review in reviews" :review="review"/>
            </ul>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipe-reviews-list-container{
        margin-top: 65px;
    }
    .recipe-reviews-list-inner-container{
        display: flex;
        justify-content: center;
        padding-right: 18px;
    }
    ul{
        list-style: none;
        padding: 0;
        width: 100%;
    }
    span{
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 0.3rem;
    }
    select{
        border: none;
    }
</style>