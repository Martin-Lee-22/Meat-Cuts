<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useRecipeStore } from '@/stores/recipe';
    
    const recipe = ref(useRecipeStore().getRecipe())
    const props = defineProps(['ingredient', 'editMode', 'index']);
    const checked = ref(false);
    const minIngredients = 1 // minimum amount of ingredients a recipe can have for the delete button to appear

    watch(()=>props.editMode, () => {
        if(props.editMode) checked.value = false
    })
</script>

<template>
    <li>
        <input v-if="!editMode" type="checkbox" @change="checked = !checked" >
        <p v-if="!editMode" class="ingredient" :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">{{props.ingredient}}</p>
        <textarea placeholder="Write your ingredient here..." v-else @change="recipe.ingredients[index] = ($event.target as HTMLTextAreaElement).value" :value="props.ingredient"/>
        <button class="delete-button" v-if="editMode && recipe.ingredients.length > minIngredients" @click="recipe.ingredients.splice(index, 1)"><span class="material-symbols-outlined">delete</span></button>
    </li>
</template>

<style lang="css" scoped>
    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 8px;
    }
    textarea{
        font-size: 0.9rem;
        width: 100%;
        resize: none;
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        padding: 0.5em;
        field-sizing: content;
    }
    .ingredient{
        font-weight: 300;
        font-size: 0.9rem;
    }
</style>