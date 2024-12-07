<script setup lang="ts">
    import RecipeReviewList from './RecipeReviewList.vue';

    const props = defineProps(['recipe']);
</script>

<template>
    <div class="recipe-reviews-container">
        <h3>Reviews</h3>
        <RecipeReviewList :reviews="props.recipe.reviews"/>
    </div>
</template>

<style lang="css" scoped>
    .recipe-reviews-container{
        padding-left: 18px;
    }
    h3{
        margin-bottom: 15px;
    }
</style>