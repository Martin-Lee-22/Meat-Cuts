<script setup lang="ts">
    import { useCutsStore } from '@/stores/cuts';
    import BaseButton from '../base/BaseButton.vue';
    const cutsStore = useCutsStore();

/**
 * Resets the current animal and cut selection in the cuts store.
 */
    function onClick(){
        cutsStore.resetAnimal()
        cutsStore.resetCut()
    }
</script>

<template>
    <BaseButton :callBack="onClick">
        <span class="material-symbols-outlined">arrow_back</span>
    </BaseButton>
    <Transition mode="out-in" name="fade-upwards">
        <h1 v-if="!cutsStore.isAnimalEmpty()">Select a cut</h1>
    </Transition>
    <Transition mode="out-in" name="fade-upwards">
        <canvas class="cut-canvas" v-if="!cutsStore.isAnimalEmpty()">
        </canvas>
    </Transition>
    <button @click="cutsStore.setCut({cut: 'old', path:'old'})">old cut</button>
    <button @click="cutsStore.setCut({cut: 'new', path:'new'})">new cut</button>
</template>

<style lang="css" scoped>
    h1{
        margin-bottom: 1rem;
        display: inline-block;
    }
    button{
        float: left;
    }
    .cut-canvas{
        width: 100%;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
</style>