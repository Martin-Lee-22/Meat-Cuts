<script setup lang="ts">
    const props = defineProps<{rating: number}>();

    const maxNumberOfStars = 5;
    const numberOfFullStars = Math.floor(props.rating);
    const numberOfEmptyStars = maxNumberOfStars - numberOfFullStars;

</script>

<template>
    <div class="stars-rating-container">
        <span v-for="i in numberOfFullStars" :key="i" class="material-symbols-rounded">&#9733;</span>
        <span v-for="i in numberOfEmptyStars" :key="i" class="material-symbols-outlined">&#9734;</span>
    </div>
</template>

<style lang="css" scoped>
    .stars-rating-container{
        cursor: default;
        width: fit-content;
    }
    span{
        color: rgb(255, 191, 0);
    }
</style>