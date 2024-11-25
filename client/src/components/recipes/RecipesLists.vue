<script setup lang="ts">
    import RecipeListSkeleton from './component/RecipeListSkeleton.vue';
    import RecipesList from './RecipesList.vue';
</script>

<template>
    <div class="recipes-list-container">
        <Suspense>
            <template #default>
                <RecipesList/>
            </template>
            <template #fallback>
                <RecipeListSkeleton/>
            </template>
        </Suspense>
    </div>
</template>

<style lang="css" scoped>
    .recipes-list-container{
            width: 100%;
            margin-inline: auto;
            padding: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-content: flex-start;
            row-gap: 10px;
        }
</style>