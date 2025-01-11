<script setup lang="ts">
    import Animals from './Animals.vue';
    import CutsCanvas from './CutsCanvas.vue';
    import { useCutsStore } from '@/stores/cuts';
    import { useResizeStore } from '@/stores/resize';
    import '../../shared/animations.css'

    const resizeStore = useResizeStore()
</script>

<template>
    <section class="animal-selector-container" :style="{width: resizeStore.getFirstElementWidth() + '%'}">
        <Transition appear mode="out-in" name="fade-upwards">
            <div class="animals-container" v-if="useCutsStore().isAnimalEmpty()">
                <Animals/>
            </div>
            <div class="cuts-container" v-else>
                <CutsCanvas/>
            </div>
        </Transition>
    </section>
</template>

<style lang="css">
    .animal-selector-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: 0.5s ease-in-out;
    }
    .animals-container{
        width: 60%;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .cuts-container{
        width: 70%;
        text-align: center;
    }
</style>