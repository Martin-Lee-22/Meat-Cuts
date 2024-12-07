<script setup lang="ts">
    defineProps(['title', 'data', 'editMode', 'type', 'width']);
</script>

<template>
    <div v-if="!editMode"><p>{{title}}: <span>{{data}}</span></p></div>
    <div class="recipe-header-info" v-else>
        <label :for=title>{{title}}:</label>
        <input :type=type :id=title :name=title :value="data" :style="{width: (width || '50%')}">
    </div>
</template>

<style lang="css" scoped>
    .recipe-header-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        & input{
            width: 50%;
            text-align: center;
        }
    }
</style>