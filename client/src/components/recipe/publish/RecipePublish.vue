<script setup lang="ts">
    import RecipeHeader from './components/RecipeHeader.vue';

    const props = defineProps(['recipe']);

</script>

<template>
    <RecipeHeader :recipe="props.recipe"/>
</template>

<style lang="css" scoped>
</style>