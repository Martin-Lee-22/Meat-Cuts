<script setup lang="ts">
    import { useCutsStore } from '@/stores/cuts';
    import RecipeListSkeleton from './component/RecipeListSkeleton.vue';
    import RecipesHeader from './RecipesHeader.vue';
    import RecipesList from './RecipesList.vue';
    import { clearRecipes} from '@/api/recipes';
    import { watch } from 'vue';

    const cutsStore = useCutsStore()

    // Watch the cut changes, if the cut is not empty and the new cut object is different to the old, call clears the recipes
    // and refresh the RecipesList component so it can fetch the new recipes in an async call. Also remove empty-list class
    // from recipes-list-container.
    watch(cutsStore.getCut(), (newCut, oldCut) => {
        if(!cutsStore.isCutEmpty() && newCut !== oldCut) {
            document.getElementsByClassName('recipes-list-container')[0].classList.remove('empty-list')
            clearRecipes()
        }
    })
</script>

<template>
    <div>
        <RecipesHeader/>
        <div class="recipes-list-container">
            <Suspense :key="cutsStore.getCut().value.cut"> 
                <template #default>
                    <RecipesList/>
                </template>
                <template #fallback>
                    <RecipeListSkeleton/>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipes-list-container{
            width: 100%;
            padding-inline: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            align-content: start;
            gap: 8px;
    }
    .empty-list{
        &::before{
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-45%, -100%);
            display: block;
            width: 175px;
            height: 175px;
            background-image: url('../../../public/empty.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        &::after{
            content: 'No recipes found.\a Please try another cut';
            white-space: pre;
            position: absolute;
            text-align: center;
            top: 50%;
            left: 50%;
            font-family: "Roboto Flex", sans-serif;
            font-weight: 500;
            font-size: 1.2rem;
            color: gray;
            transform: translate(-50%, 0%);
        }
    }
</style>