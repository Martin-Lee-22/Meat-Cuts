<script setup lang="ts">
    import BaseButton from '@/components/base/BaseButton.vue';
    import RecipeStepsListItem from './RecipeStepsListItem.vue';
    import { useRecipeStore } from '@/stores/recipe';
    import { ref } from 'vue';

    const recipe = ref(useRecipeStore().getRecipe())
    const props = defineProps(['steps', 'editMode']);
</script>

<template>
    <div class="recipe-steps-list-container">
        <h3>Directions:</h3>
        <ul>
            <RecipeStepsListItem v-for="(step, index) in steps" :step="step" :index="index" :editMode="props.editMode"/>
        </ul>
        <BaseButton v-if="editMode" :callBack="() => {recipe.steps.push('')}">
            <span class="material-symbols-outlined">add</span>
        </BaseButton>
    </div>
</template>

<style lang="css" scoped>
    ul{
        margin-top: 15px;
        padding: 0;
        list-style: none;
        & li{
            margin-bottom: 5px;
        }
    }
    button{
        display: block;
        margin-inline: auto;
    }
</style>