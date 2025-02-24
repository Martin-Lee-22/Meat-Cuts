<script setup lang="ts">
    import type { review } from '@/types/recipes';
    import RecipeReviewsListItem from './RecipeReviewsListItem.vue';
    import BaseSelect from '@/components/base/BaseSelect.vue';
    import {ref } from 'vue';
    
    defineProps<{reviews: review[] | undefined}>();
    const sortFunction = ref();

    function sortByDateAsc(a:any, b:any){
        return a.published - b.published;
    };

    function sortByDateDesc(a:any, b:any){
        return b.published - a.published;
    };

    function sortByRatingAsc(a: any, b: any){
        return a.rating - b.rating
    }
    function sortByRatingDesc(a: any, b: any){
        return b.rating - a.rating
    }
    const options = [
        {name:'Date (newest)', function: sortByDateDesc}, 
        {name:'Date (oldest)', function: sortByDateAsc},
        {name:'Highest Rating', function:sortByRatingDesc},
        {name:'Lowest Rating', function:sortByRatingAsc},
    ] 
</script>

<template>
    <div v-if="reviews" class="recipe-reviews-list-container">
        <div>
            <span>Sort by:</span>
            <BaseSelect v-model="sortFunction" :options="options"/>
        </div>
        <div class="recipe-reviews-list-inner-container">
            <ul>
                <RecipeReviewsListItem v-for="(review, index) in reviews.sort(sortFunction)" :key="review.reviewId" :index="index" :review="review"/>
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
        border: 0.5px solid lightgray;
        outline: none;
        padding: 0.2rem;
    }
</style>