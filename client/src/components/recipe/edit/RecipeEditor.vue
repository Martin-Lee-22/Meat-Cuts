<script setup lang="ts">
    import RecipeHeaderEditor from './components/RecipeHeaderEditor.vue';

    const props = defineProps(['recipe']);

</script>

<template>
    <form>
        <RecipeHeaderEditor :recipe="props.recipe"/>
        <input type="submit" value="Save">
    </form>
</template>

<style lang="css" scoped>
</style>