<script setup lang="ts">;
    import BaseUploadFile from '@/components/base/BaseUploadFile.vue';
    import RecipeHeaderInfo from './RecipeHeaderInfo.vue';
    import RecipeHeaderTitle from './RecipeHeaderTitle.vue';
    import BaseStarsRating from '@/components/base/BaseStarsRating.vue';
    import type { recipe } from '@/types/recipes';
    import { computed, onMounted, ref } from 'vue';
    import { getRecipeImageAPI } from '@/api/recipes';

    const props = defineProps<{recipe: recipe, editMode: boolean}>();
    const recipeModel = defineModel('recipe');
    const imgSrc = ref('')
    const imgSrcDefault = computed(() => {
        return new URL('@/../public/default_recipe_img_4.png', import.meta.url).href
    })

    onMounted(async () => {
        if(props.recipe.image) imgSrc.value = await getRecipeImageAPI(props.recipe.image)
    })
</script>

<template>
    <div class="recipe-header-container">
        <img :src="imgSrc ? imgSrc : imgSrcDefault" alt="random image" class="recipe-header-image" v-if="!editMode"/>
        <BaseUploadFile v-else/>
        <RecipeHeaderTitle v-model:title="(recipeModel as recipe).name" :edit-mode="editMode"/>
        <div v-if="!editMode" class="rating-container">
            <BaseStarsRating :rating="recipe.rating"/>
            <a href="#recipe-reviews">({{recipe.reviews ? recipe.reviews.length : '0'}}) Reviews</a>
        </div>
        <div class="article-info-container">
            <RecipeHeaderInfo title="Author" v-model:data="(recipeModel as recipe).author" :edit-mode="editMode" type="text" :width="'100%'"/>
            <RecipeHeaderInfo title="Published" v-model:data="(recipeModel as recipe).published" :edit-mode="editMode" type="date" :width="'90%'"/>
        </div>
        <div class="recipe-header-info-container">
            <RecipeHeaderInfo title="Servings" v-model:data="(recipeModel as recipe).servings" :edit-mode="editMode" type="number"/>
            <RecipeHeaderInfo title="Calories" v-model:data="(recipeModel as recipe).calories" :edit-mode="editMode" type="number"/>
            <RecipeHeaderInfo title="Duration (mins)" v-model:data="(recipeModel as recipe).duration" :edit-mode="editMode" type="number"/>
        </div>
    </div>
</template>

<style lang="css">
    .recipe-header-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px;
        text-align: center;
    }
    .recipe-header-image{
        width: 100%;
        height: 325px;
    }
    .article-info-container{
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
        & a:link {
            color: black;
        }
        & a:visited {
            color: black;
        }
    }
    .recipe-header-info-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 0.9rem;
        & div{
            width: 30%;
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
            font-size: 1rem;
            font-weight: 600;
        }
    }
</style>