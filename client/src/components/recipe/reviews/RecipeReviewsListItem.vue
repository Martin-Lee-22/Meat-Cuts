<script setup lang="ts">
    import BaseStarsRating from '@/components/base/BaseStarsRating.vue';
    import BaseThumbsUpDown from '@/components/base/BaseThumbsUpDown.vue';
    import type { review } from '@/types/recipes';
    import { formatDate } from '@/utils/helperFunctions';
    import RecipeReviewsListItemMore from '@/components/recipe/reviews/RecipeReviewsListItemMore.vue';

    const props = defineProps<{review: review}>();

    const exampleDate = new Date();

</script>

<template>
    <li class="recipe-reviews-list-item">
        <span class="reviewer-name">{{review.name}}</span>
        <!-- <time>{{review.date}}</time> -->
        <time>{{formatDate(exampleDate)}}</time>
        <BaseStarsRating :rating="review.rating" :editMode="false"/>
        <p>{{review.comment}}</p>
        <BaseThumbsUpDown :likes="review.likes" :dislikes="review.dislikes"/>
        <RecipeReviewsListItemMore/>
    </li>
</template>

<style lang="css" scoped>
    .recipe-reviews-list-item{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        row-gap: 4px;
        padding: 0.85rem;
        padding-left: 0;
        border-bottom: 1px solid rgb(228, 225, 225);
        position: relative;
    }
    p {
        font-weight: 400;
        font-size: 0.9rem;
    }
    time{
        font-weight: 200;
        font-size: 0.8rem;
    }
    .reviewer-name{
        font-weight: 500;
    }
</style>