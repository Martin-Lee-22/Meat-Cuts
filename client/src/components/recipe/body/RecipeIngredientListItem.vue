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
        <input v-else type="text" :value="props.ingredient">
        <button class="delete-button" v-if="editMode"><span class="material-symbols-outlined">delete</span></button>
    </li>
</template>

<style lang="css" scoped>
    li{
        display: flex;
        flex-direction: row;
        column-gap: 8px;
    }
    input[type="text"]{
        font-size: 0.85rem;
        font-weight: 400;
        width: 100%;
        padding: 5px 0 5px 5px;
    }
    .ingredient{
        font-weight: 300;
        font-size: 0.9rem;
    }
</style>