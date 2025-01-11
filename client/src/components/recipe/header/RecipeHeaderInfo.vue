<script setup lang="ts">
import { formatDate } from '@/utils/helperFunctions';
import { onMounted } from 'vue';

defineProps(['title', 'data', 'editMode', 'type', 'width']);
const data = defineModel('data');

// onMounted is needed to format the date to the correct format due to v-model directive.
onMounted(()=>{
    if(data.value instanceof Date) data.value = formatDate(data.value)
})
</script>

<template>
    <div v-if="!editMode"><p>{{title}}: <span>{{data}}</span></p></div>
    <div class="recipe-header-info" v-else>
        <label :for=title>{{title}}:</label>
        <input :type=type :id=title :name=title v-model="data" :style="{width: (width || '50%')}">
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