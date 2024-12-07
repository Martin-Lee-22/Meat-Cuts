<script setup lang="ts">;
    import BaseUploadFile from '@/components/base/BaseUploadFile.vue';
    import RecipeHeaderInfo from './RecipeHeaderInfo.vue';
    import RecipeHeaderSelect from './RecipeHeaderSelect.vue';
    import RecipeHeaderTitle from './RecipeHeaderTitle.vue';
    import BaseStarsRating from '@/components/base/BaseStarsRating.vue';
    import type { recipe } from '@/types/recipes';

    const props = defineProps<{recipe: recipe, editMode: boolean}>();
</script>

<template>
    <div class="recipe-header-container">
        <img src="https://picsum.photos/200/100" alt="random image" class="recipe-header-image" v-if="!editMode"/>
        <BaseUploadFile v-else/>
        <RecipeHeaderTitle :title="props.recipe.name" :edit-mode="editMode"/>
        <div class="rating-container">
            <BaseStarsRating :rating="recipe.rating"/>
            <p>({{props.recipe.reviews.length}}) Reviews</p>
        </div>
        <div class="article-container">
            <RecipeHeaderInfo title="Author" :data="props.recipe.author" :edit-mode="editMode" type="text" :width="'100%'"/>
            <RecipeHeaderInfo title="Published" :data="props.recipe.published" :edit-mode="editMode" type="date" :width="'90%'"/>
        </div>
        <div class="recipe-header-info-container">
            <RecipeHeaderSelect title="Difficulty" :data="props.recipe.difficulty" :options="['Easy', 'Medium', 'Hard']" :edit-mode="editMode"/>
            <RecipeHeaderInfo title="Servings" :data="props.recipe.servings" :edit-mode="editMode" type="number"/>
            <RecipeHeaderInfo title="Calories" :data="props.recipe.calories" :edit-mode="editMode" type="number"/>
            <RecipeHeaderInfo title="Duration (mins)" :data="props.recipe.duration" :edit-mode="editMode" type="number"/>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipe-header-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;
        & h1{
            font-size: 1.5rem;
        }
    }
    .recipe-header-image{
        width: 100%;
        height: 325px;
    }
    .article-container{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        align-content: start;
        & p{
            font-weight: 200;
        }
    }
    .author-image{
        border-radius: 50%;
        width: 30px;
        aspect-ratio: 1;
    }
    .rating-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 8px;
        text-align: center;
        & p{
            text-wrap: nowrap;
        }
    }
    :deep(.recipe-header-info-container){
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 0.9rem;
        & div{
            width: 22%;
            text-align: center;
            padding: 18px 0 18px 0;
            border-top: 2px solid #eee;
            border-bottom: 2px solid #eee;
            border-right: 1px solid #eee;
            &:last-child{
                border-right: none;
            }
        }
        & p{
            font-weight: 200;
        }
        & span{
            font-weight: 600;
        }
    }
</style>