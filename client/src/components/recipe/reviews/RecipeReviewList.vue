<script setup lang="ts">
    import type { review } from '@/types/recipes';
    import RecipeReviewsListItem from './RecipeReviewsListItem.vue';
    import BaseSelect from '@/components/base/BaseSelect.vue';
    import {onMounted, ref } from 'vue';
    import BaseLoadSpinner from '@/components/base/BaseLoadSpinner.vue';
    
    const props = defineProps<{reviews: review[] | undefined}>();
    const sortFunction = ref();
    const loading = ref(true);

    /**
     * Sorts reviews in ascending order by date.
     * @param {any} a The first review to compare.
     * @param {any} b The second review to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByDateAsc(a:any, b:any):number{
        return (new Date(a.published) as any) - (new Date(b.published) as any)
    };

    /**
     * Sorts reviews in descending order by date.
     * @param {any} a The first review to compare.
     * @param {any} b The second review to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByDateDesc(a:any, b:any):number{
        return (new Date(b.published) as any) - (new Date(a.published) as any)
    };

    /**
     * Sorts reviews in ascending order by rating.
     * @param {any} a The first review to compare.
     * @param {any} b The second review to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByRatingAsc(a: any, b: any):number{
        return a.rating - b.rating
    }

    /**
     * Sorts reviews in descending order by rating.
     * @param {any} a The first review to compare.
     * @param {any} b The second review to compare.
     * @returns {number} A negative number if a should be ordered before b, a positive number if a should be ordered after b, or 0 if the order is equal.
     */
    function sortByRatingDesc(a: any, b: any):number{
        return b.rating - a.rating
    }
    
    const options = [
        {name:'Date (newest)', function: sortByDateDesc}, 
        {name:'Date (oldest)', function: sortByDateAsc},
        {name:'Highest Rating', function:sortByRatingDesc},
        {name:'Lowest Rating', function:sortByRatingAsc},
    ] 

    onMounted(()=>{
        if(props.reviews) loading.value = false
    })
</script>

<template>
    <div v-if="reviews" class="recipe-reviews-list-container">
        <div v-if="reviews.length > 0">
            <span>Sort by:</span>
            <BaseSelect v-model="sortFunction" :options="options"/>
        </div>
        <div :class="reviews.length > 0 ? '' : 'empty-list' +' recipe-reviews-list-inner-container'">
            <BaseLoadSpinner v-if="loading" spinner-height="100px" spinner-width="100px"/>
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
        min-height: 200px;
        position: relative;
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
    .empty-list{
        &::before{
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -60%);
            display: block;
            width: 90px;
            height: 90px;
            background-image: url('../../../../public/no_reviews.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        &::after{
            content: 'No Reviews found. Be the first to write one!';
            white-space: pre;
            position: absolute;
            text-align: center;
            top: 80%;
            left: 50%;
            font-family: "Roboto Flex", sans-serif;
            font-weight: 500;
            font-size: 0.95rem;
            color: rgb(147, 147, 147);
            transform: translate(-50%, -10%);
        }
    }
</style>