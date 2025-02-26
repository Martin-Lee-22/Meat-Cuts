<script setup lang="ts">
    import BaseSelect from '@/components/base/BaseSelect.vue';
    defineProps(['data', 'title', 'options', 'editMode']);
</script>

<template>
    <div v-if="!editMode"><p>{{title}}: <span>{{data}}</span></p></div>
    <div v-else>
        <label :for=title>{{title}}:</label>
        <BaseSelect :title=title :selected=data :options="options"/>
    </div>
</template>