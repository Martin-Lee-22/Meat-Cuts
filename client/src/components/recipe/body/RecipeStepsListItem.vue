<script setup lang="ts">
    import { ref, watch } from 'vue';

    const props = defineProps(['step', 'editMode', 'index', 'stepsLength']);
    const checked = ref(false);
    const stepsModel = defineModel<string[]>('stepsModel');
    const minSteps = 1 // minimum amount of steps a recipe can have for the delete button to appear

    watch(()=>props.editMode, () => {
        if(props.editMode) checked.value = false
    })

    function onChange(e: Event){
        const target = e.target as HTMLTextAreaElement
        if(stepsModel.value) stepsModel.value[props.index] = target.value
    }
</script>

<template>
    <li>
        <div>
            <button class="delete-button" v-if="editMode && stepsLength > minSteps" @click="stepsModel?.splice(index, 1)"><span class="material-symbols-outlined">delete</span></button>
            <input v-if="!editMode" type="checkbox" @change="checked = !checked">
            <span class="step" :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">Step {{index + 1}}</span> 
        </div>
        <p v-if="!editMode" :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">{{step}}</p>
        <textarea v-if="editMode" placeholder="Write your step here..." :value="step" @change="onChange" rows="5"></textarea>
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

    .step{
        display: inline-block;
    }
    
    textarea{
        padding: 0.5em;
        width: 100%;
        min-height: 100px;
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        font-size: 0.95rem;
        resize: vertical; 
        width: 305px;
        field-sizing: content;
    }
</style>