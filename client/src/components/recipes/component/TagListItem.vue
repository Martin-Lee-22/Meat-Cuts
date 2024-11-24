<script setup lang="ts">
    import { defineProps } from 'vue';
    const props = defineProps(['symbol', 'text'])
</script>

<template>
    <div class="tag-list-item-container">
        <span class="material-symbols-outlined">
            {{props.symbol ? props.symbol : ''}}
        </span>
        <span>{{props.text}}</span>
    </div>
</template>

<style lang="css" scoped>
    .tag-list-item-container{
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 5px;
        padding: 0.15rem 0.2rem 0.15rem 0.20rem;
        background-color: rgb(128, 128, 128, 0.5);
    }
    span{
        font-size: 0.55rem;
    }
</style>