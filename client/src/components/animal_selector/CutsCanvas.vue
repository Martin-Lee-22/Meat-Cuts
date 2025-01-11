<script setup lang="ts">
    import { useCutsStore } from '@/stores/cuts';
    import BaseButton from '../base/BaseButton.vue';
    import { computed } from 'vue';
    import type { animal } from '@/types/animals';
    const cutsStore = useCutsStore();
    const selectedAnimal: animal = cutsStore.getAnimal()

    const imgSrc = computed(() => {
        return new URL(`../../assets/images/${selectedAnimal.type}.png`, import.meta.url).href
    })

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
        <div class="cuts-canvas-container">
            <canvas v-if="!cutsStore.isAnimalEmpty()">
            </canvas>
            <img :src="imgSrc" usemap="#image-map">
            <map name="image-map">
                <area target="" alt="chuck" title="chuck" href="" coords="1210,663,1207,397,1212,193,1541,177,1588,386,1597,561,1593,656" shape="poly">
                <area target="" alt="rib" title="rib" href="" coords="792,250,779,704,1203,663,1208,197" shape="poly">
                <area target="" alt="short loin" title="short loin" href="" coords="525,231,790,250,775,699,530,771" shape="poly">
                <area target="" alt="sirloin" title="sirloin" href="" coords="284,228,275,324,520,342,527,233" shape="poly">
                <area target="" alt="tenderloin" title="tenderloin" href="" coords="275,332,276,412,682,407,675,371" shape="poly">
                <area target="" alt="sirloin" title="sirloin" href="" coords="273,423,269,535,511,527,514,419" shape="poly">
                <area target="" alt="sirloin" title="sirloin" href="" coords="271,541,287,886,407,811,525,771,513,532" shape="poly">
                <area target="" alt="round" title="round" href="" coords="276,230,128,264,65,324,49,407,62,475,78,562,96,645,99,736,81,818,117,854,205,882,278,882" shape="poly">
                <area target="" alt="shank" title="shank" href="" coords="81,841,22,941,22,995,46,1036,76,1068,115,1059,165,1022,201,973,244,927,278,886" shape="poly">
                <area target="" alt="flank" title="flank" href="" coords="285,888,445,909,541,932,668,963,745,979,799,979,779,709,607,750,450,798" shape="poly">
                <area target="" alt="plate" title="plate" href="" coords="783,709,806,977,1051,945,1121,932,1224,941,1201,662" shape="poly">
                <area target="" alt="briskey" title="briskey" href="" coords="1205,666,1226,948,1396,932,1479,873,1521,823,1554,784,1577,743,1588,700,1593,659" shape="poly">
                <area target="" alt="shank" title="shank" href="" coords="1389,938,1226,948,1262,1108,1292,1136,1326,1136,1359,1113,1377,1090" shape="poly">
            </map>
    </div>
    </Transition>
    <!-- <button @click="cutsStore.setCut({})">old cut</button>
    <button @click="cutsStore.setCut({})">new cut</button> -->
</template>

<style lang="css" scoped>
    h1{
        margin-bottom: 1rem;
        display: inline-block;
    }
    button{
        float: left;
    }
    .cuts-canvas-container{
        --width: 60%;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 525px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        & canvas{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: var(--width);
        }
        & img{
            width: var(--width);
            min-width: 600px;
            margin-inline: auto;
        }
    }
</style>