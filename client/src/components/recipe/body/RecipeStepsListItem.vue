<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useRecipeStore } from '@/stores/recipe';

    const recipe = ref(useRecipeStore().getRecipe())
    const props = defineProps(['step', 'editMode', 'index']);
    const checked = ref(false);
    const minSteps = 1 // minimum amount of steps a recipe can have for the delete button to appear

    watch(()=>props.editMode, () => {
        if(props.editMode) checked.value = false
    })
</script>

<template>
    <li>
        <button class="delete-button" v-if="editMode && recipe.steps.length > minSteps" @click="recipe.steps.splice(index, 1)"><span class="material-symbols-outlined">delete</span></button>
        <input v-if="!editMode" type="checkbox" @change="checked = !checked">
        <span :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">Step {{index + 1}}</span> 
        <p v-if="!editMode" :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">{{step}}</p>
        <textarea v-if="editMode" placeholder="Write your step here..." :value="step" @change="recipe.steps[index] = ($event.target as HTMLTextAreaElement).value" rows="5"></textarea>
    </li>
</template>

<style lang="css" scoped>
    li{
        line-height: 1.5rem;
    }
    input[type="checkbox"]{
        margin-right: 8px;
    }
    span{
        font-weight: 600;
        font-size: 0.95rem;
    }
    p{
        margin-top: 6px;
        font-size: 1rem;
        font-weight: 300;
    }
    button{
        float: right;
    }
    textarea{
        padding: 0.5em;
        width: 100%;
        min-height: 100px;
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        font-size: 0.95rem;
        resize: vertical; 
        field-sizing: content;
    }
</style>