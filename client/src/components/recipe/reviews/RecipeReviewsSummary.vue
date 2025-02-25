<script setup lang="ts">
    import BaseStarsRating from '@/components/base/BaseStarsRating.vue';
    import type { review } from '@/types/recipes';
    import { ref } from 'vue';
    import RecipeReviewsSummaryMenu from './RecipeReviewsSummaryMenu.vue';

    defineProps<{reviews: review[], rating: number}>()
    const showMenu = ref(false)
    
</script>

<template>
    <div class="recipe-reviews-summary-container">
        <BaseStarsRating :rating="reviews.length ? rating : 0"/>
        <span>{{rating ? rating : 0}}</span>
        <div class="recipe-reviews-amount-container">
            <button @mouseover="showMenu = true" @mouseleave="showMenu = false">
                <span class="recipe-reviews-amount">{{reviews ? reviews.length : 0}} comments</span>
                <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
            <RecipeReviewsSummaryMenu v-if="showMenu" :reviews="reviews"/>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipe-reviews-summary-container{
        display: flex;
        width: 50%;
        flex-direction: row;
        align-items: center;
        column-gap: 8px;
    }
    span{
        font-size: 0.9rem;
        font-weight: 400;
    }
    button{
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 112px;
    }
    .recipe-reviews-amount-container{
        border-left: 1.5px solid rgb(223, 223, 223);
        width: inherit;
        padding-left: 5px;
        position: relative;
    }
</style>