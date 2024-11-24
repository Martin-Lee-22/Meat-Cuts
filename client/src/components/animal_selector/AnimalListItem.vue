<script setup lang="ts">
    import { defineProps } from 'vue';
    const props = defineProps(['animal', 'index', 'setAnimal']);
</script>

<template>
    <div class="animal-item" @click="props.setAnimal(props.animal)" :data-index="index">
        {{props.animal.type}}
    </div>
</template>

<style lang="css" scoped>
    .animal-item{
        cursor: pointer;
        transition: 0.15s;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        width: 160px;
        aspect-ratio: 1;
        border-radius: 10px;

        /* These styles are for the gsap animation */
        opacity: 0;
        transform: translateY(60px);

        &:hover{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        }
        &:active{
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }
    }
</style>