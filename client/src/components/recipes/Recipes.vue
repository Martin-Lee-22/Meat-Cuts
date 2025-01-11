<script setup lang="ts">
    import { useCutsStore } from '@/stores/cuts';
    import { useResizeStore } from '@/stores/resize';
    import { onUpdated, useTemplateRef} from 'vue';
    import RecipesContent from './RecipesContent.vue';

    const cutsStore = useCutsStore();
    const resizeStore = useResizeStore();

    const sectionRef = useTemplateRef('recipes-section');
    const borderWidth = 5 // border width in px; should be the same as the value in the CSS

    // a function for the event listeners below that recalls the resize function in the resize store.
    function resize(e: MouseEvent){
        resizeStore.resizeElement(e)
    }

    // Once the component is updated, the event listeners are added for resizing.
    onUpdated(() => {
        sectionRef.value?.addEventListener('mousedown', (e) => {
            // Call on resize function when mouse is held down at border; border width value should be the same as its CSS value.
            if(e.offsetX < borderWidth) document.addEventListener('mousemove', resize)
        })
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", resize);
        });
    })
</script>

<template>
        <section class="recipes-container" v-if="!cutsStore.isCutEmpty()" :style="{width: resizeStore.getSecondElementWidth() + '%'}" ref="recipes-section">
            <RecipesContent/>
        </section>
</template>

<style lang="css" scoped>
    .recipes-container{
        position: absolute;
        right: 0;
        height: inherit;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            border-left: 1px solid black;
            height: 100%;
            width: 5px;
            cursor: ew-resize;
        }
        & header:nth-of-type(1){
            height: 7%;
        }
        & div:nth-of-type(1){
            height: 93%;
        }
    }
</style>