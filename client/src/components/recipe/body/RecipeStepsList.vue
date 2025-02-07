<script setup lang="ts">
    import BaseButton from '@/components/base/BaseButton.vue';
    import RecipeStepsListItem from './RecipeStepsListItem.vue';
    import { useRecipeStore } from '@/stores/recipe';
    import { onUpdated, ref, useTemplateRef } from 'vue';

    const recipe = ref(useRecipeStore().getRecipe())
    const props = defineProps(['steps', 'editMode']);
    const listRef = useTemplateRef('listRef')
    const stepsModel = defineModel<string[]>('stepsModel');

    onUpdated(()=>{
        if(listRef.value?.classList.contains('empty-list-input') && listRef.value?.classList.contains('has-error') && 
            (recipe.value.steps.filter((x)=>{return /\S/.test(x)}))) {
                listRef.value.classList.remove('empty-list-input')
                listRef.value.classList.remove('has-error')
        }
    })

    function addStep(){
        if(stepsModel.value) stepsModel.value.push('')
    }
</script>

<template>
    <div class="recipe-steps-list-container">
        <h3>Directions:</h3>
        <ul ref="listRef" class="recipe-steps-list">
            <RecipeStepsListItem v-for="(step, index) in steps" v-model:stepsModel="stepsModel" :step="step" :stepsLength="steps.length" :index="index" :editMode="props.editMode"/>
        </ul>
        <BaseButton title="Add Step" v-if="editMode" :callBack="addStep">
            <span class="material-symbols-outlined">add</span>
        </BaseButton>
    </div>
</template>

<style lang="css" scoped>
    .recipe-steps-list-container{
        margin-inline: auto;
    }
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