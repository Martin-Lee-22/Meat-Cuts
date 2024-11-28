<script setup lang="ts">;
    import Rating from '../../../recipes/component/Rating.vue';

    const props = defineProps(['recipe']);

</script>

<template>
    <div class="recipe-header-container">
        <img src="https://picsum.photos/200/100" alt="random image"/>
        <h1>{{props.recipe.name}}</h1>
        <!-- <Rating :rating="props.recipe.rating"/>
        <p>({{props.recipe.reviews.length}})</p> -->
        <!-- <p>By: <span>{{props.recipe.author}}</span></p> -->
        <div class="recipe-header-info">
            <div><p>Difficulty: <span>{{props.recipe.difficulty}}</span></p></div>
            <div><p>Servings: <span>{{props.recipe.servings}}</span></p></div>
            <div><p>Calories: <span>{{props.recipe.calories}}</span></p></div>
            <div><p>Duration: <span>{{props.recipe.duration}}</span></p></div>
        </div>
    </div>
</template>