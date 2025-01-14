<script setup lang="ts">
    import { useCutsStore } from '@/stores/cuts';
    import BaseButton from '../base/BaseButton.vue';
    import { computed, onMounted, watch } from 'vue';
    import type { animal } from '@/types/animals';

    const cutsStore = useCutsStore();
    const selectedAnimal: animal = cutsStore.getAnimal()

    const imgSrc = computed(() => {
        return new URL(`../../assets/images/${selectedAnimal.type}.png`, import.meta.url).href
    })

    /**
     * Resets the current animal and cut selection in the cuts store.
     */
    function resetAnimal(){
        cutsStore.resetAnimal()
        cutsStore.resetCut()
    }

    /**
     * Removes the given class from the first element found with the given class.
     * @param {string} x - The class to be removed.
     */
    function removeClassFromElement(x: string){
        const element = document.getElementsByClassName(x)[0] as HTMLElement
        if(element) element.classList.remove(x)
    }

    /**
     * When the component is mounted, 
     * - add event listeners to the cut SVG elements to update the selected cut in the cutsStore.
     * - remove all the "selected-cut" classes from the cut SVG elements and then add the class "selected-cut" to the 
     *   selected cut element.
     */
    onMounted(()=>{
        const cuts = document.querySelectorAll('#cut-svg')
        if(cuts) cuts.forEach((cut) => {
            cut.addEventListener('click', (e) => {
                const target = e.target as HTMLElement
                if(target.dataset.cut && JSON.parse(target.dataset.cut).id !== cutsStore.getCut().value.id){
                    removeClassFromElement('selected-cut')
                    target.classList.add('selected-cut')
                    cutsStore.setCut(JSON.parse(target.dataset.cut))
                }
            }
        )})
    })

    /** Watch for changes in the cut object in the cuts store and update the width of the cuts selector container */
    watch(cutsStore.getCut(), () => {
        const element = document.getElementsByClassName('cuts-selector-container')[0] as HTMLElement
        if(element && !cutsStore.isCutEmpty()){
            element.style.setProperty('--cuts-width', `${80}%`)
        } else {
            element.style.setProperty('--cuts-width', `${60}%`)
        }
    })
</script>

<template>
    <BaseButton :callBack="resetAnimal">
        <span class="material-symbols-outlined">arrow_back</span>
    </BaseButton>
    <Transition mode="out-in" name="fade-upwards">
        <h1 v-if="!cutsStore.isAnimalEmpty()">Select a cut</h1>
    </Transition>
    <Transition mode="out-in" name="fade-upwards">
        <div class="cuts-selector-container">
            <img :src="imgSrc" usemap="#image-map">
            <svg id="cut-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 579">
                <path v-for="cut in selectedAnimal.cuts" :key="cut.id" :d="cut.coords" :data-cut="JSON.stringify(cut)" fill="transparent"/>
            </svg>
    </div>
    </Transition>
</template>

<style lang="css" scoped>
    h1{
        margin-bottom: 1rem;
        display: inline-block;
    }
    button{
        float: left;
    }
    .cuts-selector-container{
        --cuts-width: 60%;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 525px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        & img, svg{
            width: var(--cuts-width);
            margin-inline: auto;
        }
        & svg{
            position: absolute;
            z-index: 1;
        }
    }
    path {
        --fill: rgb(255, 255, 255, 0.15);
        --stroke-color: gold;
        transition: 0.1s;
        transform-origin: 50%;
        &:hover{
            fill:var(--fill);
            cursor: pointer;
            stroke: var(--stroke-color);
            stroke-width: 4px;
        }
        &:active{
            stroke-width: 8px;
            fill: transparent;
        }
    }
    .selected-cut{
        fill:var(--fill);
        stroke: var(--stroke-color);
        stroke-width: 4px;
    }
</style>