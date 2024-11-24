<script setup lang="ts">
    import type { recipe } from '@/types/recipes';
    import Rating from './component/Rating.vue';
    import TagList from './component/TagList.vue';
    import { useRecipeStore } from '@/stores/recipe';

    const props = defineProps(['recipe', 'index']);
    const recipe: recipe = props.recipe;

    const recipeStore = useRecipeStore();
</script>

<template>
    <div class="recipes-list-item-container" :data-index="index" @click="recipeStore.setRecipe(recipe)">
        <img src="https://picsum.photos/175/255" alt="random image"/>
        <div class="recipe-list-item-info-container">
            <h5 class="recipes-list-item-title">{{recipe.name}}</h5>
            <Rating :rating="recipe.rating"/>
            <TagList :recipe="recipe"/>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipes-list-item-container{
        transition: 0.25s;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        &:hover{
            cursor: pointer;
            transform: scale(1.01);
        }
    }
    .recipes-list-item-title{
        margin-top: 2rem;
    }
    .recipe-list-item-info-container{
        position: absolute;
        bottom: 0%;
        left: 0%;
        background: linear-gradient(transparent, rgba(0, 0, 0, 60%) 50%);
        width: 100%;
        color: white;
        border-radius: 5px;
        padding: 0 0.5rem 0 0.5rem;
        & p{
            margin-top: 0.25em;
            font-size: 0.6rem;
            font-weight: 200;
        }
    }
</style>