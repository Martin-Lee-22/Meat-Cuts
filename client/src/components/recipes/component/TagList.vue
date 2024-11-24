<script setup lang="ts">
    import type { recipe } from '@/types/recipes';
    import TagListItem from './TagListItem.vue';

    const props = defineProps(['recipe']);
    const recipe: recipe = props.recipe;
    
    const hours = Math.floor(recipe.duration / 60);
    const minutes = recipe.duration % 60;
    const calories = recipe.calories;
    const views = recipe.views;
    
    /**
     * Format the number of views to a more human-readable format.
     * If greater than 10,000 and less than 1,000,000, use 'K views' (e.g. 12.5K views)
     * If greater than 1,000,000 use 'M views' (e.g. 1.2M views)
     * Otherwise, use the number of views (e.g. 500 views)
     * @return {string}
     */
    function formatViews(){
        if(views > 10000 && views < 1000000){
            return (views / 1000) + 'K views';
        }
        if(views > 1000000){
            return (views / 1000000) + 'M views';
        }
        return views + ' views';
    }

</script>

<template>
    <div class="tag-list-container">
        <TagListItem symbol="timer" :text="hours === 0 ? (minutes + ' min') : (hours + ' hr ' + minutes + ' min')"/>
        <TagListItem symbol="bar_chart" :text="calories + ' calories'"/>
        <TagListItem :text="formatViews()"/>
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