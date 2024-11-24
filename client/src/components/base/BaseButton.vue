<script setup lang="ts">
    const props = defineProps(['callBack'])
</script>

<template>
    <button @click="props.callBack()">
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
    button{
        background: transparent;
        border: none;
        border-radius: 5px;
        padding-top: 0.25rem;
        &:hover{
            cursor: pointer;
            background-color: rgb(243, 243, 243);
        }
        &:active{
            transform: scale(0.95);
        }
    }
</style>