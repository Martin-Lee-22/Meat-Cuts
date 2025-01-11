<script setup lang="ts">
    import type { recipe } from '@/types/recipes';
    import Rating from './component/Rating.vue';
    import TagList from './component/TagList.vue';
    import { useRecipeStore } from '@/stores/recipe';
    import { formatLength } from '@/utils/helperFunctions';

    const props = defineProps<{recipe: recipe, index: number}>();
    
    const maxLength = 37
    const name = formatLength(props.recipe.name, maxLength)

    const recipeStore = useRecipeStore();

    /**
     * Sets the current recipe in the recipe store and toggles the recipe panel
     */
    function onClick(){
        recipeStore.setRecipe(props.recipe)
        recipeStore.toggleShowRecipe()
    }
</script>

<template>
    <div class="recipes-list-item-container" @click="onClick" :data-index="index">
        <img src="https://picsum.photos/175/255" alt="random image"/>
        <div class="recipe-list-item-info-container">
            <h5 class="recipes-list-item-title">{{name}}</h5>
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
        height: 255px;
        width: 175px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        &:hover{
            cursor: pointer;
            transform: scale(1.01);
        }

        /* These styles are for the gsap animation */
        opacity: 0;
        transform: translateY(60px);
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
        overflow-wrap: break-word;
        & p{
            margin-top: 0.25em;
            font-size: 0.6rem;
            font-weight: 200;
        }
        & h5{
            
        }
    }
</style>