<script setup lang="ts">
    import BaseButton from '@/components/base/BaseButton.vue';
import RecipeStepsListItem from './RecipeStepsListItem.vue';
    const props = defineProps(['steps', 'editMode']);
</script>

<template>
    <div class="recipe-steps-list-container">
        <h3>Directions:</h3>
        <ul>
            <RecipeStepsListItem v-for="(step, index) in steps" :step="step" :index="index" :editMode="props.editMode"/>
        </ul>
        <BaseButton v-if="editMode">
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
            margin-bottom: 20px;
        }
    }
    button{
        display: block;
        margin-inline: auto;
    }
</style>