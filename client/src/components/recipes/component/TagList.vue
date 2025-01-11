<script setup lang="ts">
    import type { recipe } from '@/types/recipes';
    import TagListItem from './TagListItem.vue';

    const props = defineProps<{recipe: recipe}>();
    
    const hours = Math.floor(props.recipe.duration / 60);
    const minutes = props.recipe.duration % 60;
    const calories = props.recipe.calories;
    const servings = props.recipe.servings;

</script>

<template>
    <div class="tag-list-container">
        <TagListItem symbol="timer" :text="hours === 0 ? (minutes + ' min') : (hours + ' hr ' + minutes + ' min')"/>
        <TagListItem :text="calories + ' calories'"/>
        <TagListItem :text="servings + ' Servings'"/>
    </div>
</template>

<style lang="css" scoped>
    .tag-list-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
        justify-content: space-evenly;
        & > div{
            width: 30%;
        }
    }
</style>