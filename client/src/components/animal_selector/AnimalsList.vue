<script setup lang="ts">
    import { useCutsStore } from '@/stores/cuts';
    import AnimalListItem from './AnimalListItem.vue';
    import { staggerListOnEnter, staggerListOnLeave } from '@/shared/animations';
    import { animals } from '@/data/meat-cuts';

    const cutsStore = useCutsStore();

</script>

<template>
    <Transition appear mode="out-in" name="fade-upwards">
        <TransitionGroup appear mode="out-in" tag="div" @enter="staggerListOnEnter" @leave="staggerListOnLeave" class="animal-list-container"  v-if="cutsStore.isAnimalEmpty()">
            <AnimalListItem v-for="(animal, index) in animals" :key="animal.id" :animal="animal" :index="index" :setAnimal="cutsStore.setAnimal"/>   
        </TransitionGroup> 
    </Transition>
</template>

<style lang="css" scoped>
.animal-list-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    &:hover > * {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    &:hover > *:hover{
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
    &:hover > *:active{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
}
</style>