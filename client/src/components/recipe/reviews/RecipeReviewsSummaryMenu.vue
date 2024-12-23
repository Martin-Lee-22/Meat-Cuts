<script setup lang="ts">
    import type { review } from '@/types/recipes';
    import ratingsData from '../../../data/ratings.json'
    import { ref } from 'vue';

    const props = defineProps<{reviews: review[]}>()
    const totalReviews = ref(props.reviews.length)
    const color = 'rgb(255, 191, 0)'
    const backgroundColor = 'rgb(223, 223, 223)'
</script>

<template>
    <table class="recipe-reviews-summary-menu-container">
        <tr v-for="(rating) in ratingsData" :key="rating.id" class="recipe-reviews-summary-menu-item">
            <th>{{rating.heading}}</th>
            <td>
                <span class="recipe-reviews-amount-bar" :style="{background: `linear-gradient(to right, ${color} ${Math.round(((reviews.filter(review => review.rating === rating.rating).length) / totalReviews) * 100)}%, ${backgroundColor} 0)`}"/>
            </td>
            <td>{{Math.round(((reviews.filter(review => review.rating === rating.rating).length) / totalReviews) * 100)}}%</td>
        </tr>
    </table>
</template>

<style lang="css" scoped>
    .recipe-reviews-summary-menu-container{
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0.5rem;
        z-index: 1;
        background-color: white;
        column-gap: 5px;
        border-spacing: 5px;
        & tr, th{
            font-weight: 400;
            text-wrap: nowrap;
            text-align: start;
        }
    }
    .recipe-reviews-summary-menu-item{
        background-color: transparent;
        & td:nth-of-type(2){
            text-align: center;
        }
    }
    .recipe-reviews-amount-bar{
        display: block;
        height: 0.5rem;
        border-radius: 5px;
        width: 125px;
    }
</style>
