<script setup lang="ts">
    import { computed, defineProps} from 'vue';

    const props = defineProps(['animal', 'index', 'setAnimal']);
    
    // Get the image source due to build process of vite/vue
    const imgSrc = computed(() => {
        return new URL(`../../assets/images/${props.animal.type}.png`, import.meta.url).href
    })
</script>

<template>
    <div class="animal-item" @click="props.setAnimal(props.animal)" :data-index="props.index">
        <img :src="imgSrc" :alt="props.animal.type"/>
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
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        & img{
            transform: scale(0.8);
        }

        /* These styles are for the gsap animation */
        opacity: 0;
        transform: translateY(60px);
    }
</style>