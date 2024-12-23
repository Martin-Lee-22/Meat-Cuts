<script setup lang="ts">
    import { ref, watch } from 'vue';

    const props = defineProps(['ingredient', 'editMode']);
    const checked = ref(false);

    watch(()=>props.editMode, () => {
        if(props.editMode) checked.value = false
    })
</script>

<template>
    <li>
        <input v-if="!editMode" type="checkbox" @change="checked = !checked" >
        <p v-if="!editMode" class="ingredient" :style="{'text-decoration': checked && !editMode ? 'line-through' : 'none'}">{{props.ingredient}}</p>
        <textarea v-else :value="props.ingredient"/>
        <button class="delete-button" v-if="editMode"><span class="material-symbols-outlined">delete</span></button>
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
        padding: 0.25rem;
    }
    .ingredient{
        font-weight: 300;
        font-size: 0.9rem;
    }
</style>