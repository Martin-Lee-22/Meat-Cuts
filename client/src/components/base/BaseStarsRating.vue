<script setup lang="ts">
    import { ref } from 'vue';
    import ratingData from '../../data/ratings.json'

    const props = defineProps({rating: {type: Number, default: 0}, editMode: {type: Boolean, default: false}});

    const ratingModel = defineModel('ratingModel');

    const maxNumberOfStars = 5;
    const numberOfFullStars = Math.floor(props.rating);
    const numberOfEmptyStars = maxNumberOfStars - numberOfFullStars;

    const rate = ref(0) // The official star rating the user has chosen. 
    const rating = ref(0) // The star rating that is displayed when user hovers over the stars.

    function onClick(i:number){
        rate.value = i
        if(ratingModel) ratingModel.value = i
    }
</script>

<template>
    <div v-if="!editMode" class="stars-rating-container">
        <span v-for="i in numberOfFullStars" :key="i" class="material-symbols-rounded">&#9733;</span>
        <span v-for="i in numberOfEmptyStars" :key="i" class="material-symbols-outlined">&#9734;</span>
    </div>
    <div v-else class="stars-rating-container">
        <span v-for="i in maxNumberOfStars" :key="i" :class="['star-edit-mode', rating >= i ? 'material-symbols-rounded' : 'material-symbols-outlined']" @mouseover="rating = i" @mouseleave="rating = rate" @click="onClick(i)">{{rating >= i ? '&#9733' : '&#9734'}}</span>
        <span class="rating-heading">{{rating > 0 ? ratingData.find(r => r.rating === rating)?.heading : ''}}</span>
    </div>
</template>

<style lang="css" scoped>
    .stars-rating-container{
        cursor: default;
        width: fit-content;
        display: inline-block;
        &:hover{
            .rating-heading{
                display: inline-block;
            }
        }
    }
    span{
        color: rgb(255, 191, 0);
    }
    .star-edit-mode{
        cursor: pointer;
    }
    .rating-heading{
        display: none;
        color: black;
        font-weight: 400;
        margin-left: 0.5rem;
    }
</style>