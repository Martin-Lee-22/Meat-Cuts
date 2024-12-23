<script setup lang="ts">
    import { ref, watch } from 'vue';

    const props = defineProps(['step', 'editMode', 'index']);
    const checked = ref(false);

    watch(()=>props.editMode, () => {
        if(props.editMode) checked.value = false
    })
</script>

<template>
    <li>
        <button class="delete-button" v-if="editMode"><span class="material-symbols-outlined">delete</span></button>
        <input v-if="!editMode" type="checkbox" @change="checked = !checked">
        <span :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">Step {{props.index + 1}}</span> 
        <p v-if="!editMode" :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">{{props.step}}</p>
        <textarea v-if="editMode" :value="props.step" rows="5"></textarea>
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
        width: 100%;
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        font-size: 0.95rem;
        resize: vertical; 
    }
</style>