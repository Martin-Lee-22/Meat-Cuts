<script setup lang="ts">
    import type { recipe, recipe } from '@/types/recipes';

    const props = defineProps(['recipe']);
    const recipe: recipe = props.recipe
</script>

<template>
    <section class="recipe-header-container">
        <div class=""></div>
        <h1>{{recipe.name}}</h1>
    </section>
</template>

<style>
</style>