<script setup lang="ts">
    const props = defineProps(['rating']);
    const rating = props.rating;

    const maxNumberOfStars = 5;
    const numberOfFullStars = Math.floor(rating);
    const numberOfHalfStars = rating % 1 > 0 ? 1 : 0;
    const numberOfEmptyStars = maxNumberOfStars - numberOfFullStars - numberOfHalfStars;

    const colorEmptyStar = "#efe8d3";
    const colorFullStar = "#D3A81E";
    const colorHalfStar = "#D3A81E";
</script>

<template>
    <!-- This is the SVG set/template for creating the stars. -->
    <svg style="display: none;" version="1.1">
        <symbol id="stars-empty-star" :fill="colorEmptyStar">
            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
        </symbol>
        <symbol id="stars-full-star" :fill="colorFullStar">
            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
        </symbol>
        <symbol id="stars-half-star" :fill="colorHalfStar">
            <use xlink:href="#stars-empty-star" />
            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 -100" />
        </symbol>
    </svg>

    <!-- This is the for loop that creates the SVG for the stars.-->
    <svg height="20" width="100%" class="rating">
        <use v-for="i in numberOfFullStars" :key="i" xlink:href="#stars-full-star" />
        <use v-for="i in numberOfHalfStars" :key="i" xlink:href="#stars-half-star" />
        <use v-for="i in numberOfEmptyStars" :key="i" xlink:href="#stars-empty-star" />
    </svg>
</template>

<style lang="css" scoped>
    .rating {
        margin-top: 2px;
        transform-origin: left;
        transform: scale(0.75);
    }
    use {
        &:nth-child(2) {
            transform: translateX(20px);
        }
        &:nth-child(3) {
            transform: translateX(40px);
        }
        &:nth-child(4) {
            transform: translateX(60px);
        }
        &:nth-child(5) {
            transform: translateX(80px);
        }
    }
</style>