<script setup lang="ts">
    import BaseButton from '@/components/base/BaseButton.vue';
import RecipeIngredientListItem from './RecipeIngredientListItem.vue';

    const props = defineProps(['ingredients', 'editMode']);

</script>

<template>
    <div class="recipe-ingredient-list-container">
        <h3>Ingredients</h3>
        <ul>
            <RecipeIngredientListItem v-for="ingredient in props.ingredients" :ingredient="ingredient" :editMode="editMode"/>
        </ul>
        <BaseButton v-if="editMode">
            <span class="material-symbols-outlined">add</span>
        </BaseButton>
    </div>
</template>

<style lang="css" scoped>
    .recipe-ingredient-list-container{
        & ul{
            margin-top: 15px;
            list-style: none;
            padding: 0;
            & li{
                margin-bottom: 7px;
            }
        }
        & button{
            display: block;
            margin-inline: auto;
        }
    }
</style>