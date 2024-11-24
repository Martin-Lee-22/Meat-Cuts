<script setup lang="ts">
    import animals from '../../data/meat-cuts.json';
    import { useCutsStore } from '@/stores/cuts';
    import AnimalListItem from './AnimalListItem.vue';
    import { staggerListOnEnter, staggerListOnLeave } from '@/shared/animations';

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
}
</style>