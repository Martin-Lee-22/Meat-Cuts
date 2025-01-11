<script setup lang="ts">
import BaseButton from '../../base/BaseButton.vue';
</script>

<template>
    <div class="recipe-footer-container">
        <BaseButton :callBack="()=>{}" class="save-recipe-button">Save</BaseButton>
        <BaseButton :callBack="()=>{}" class="cancel-recipe-button">Cancel</BaseButton>
    </div>
</template>

<style lang="css" scoped>
.recipe-footer-container{
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    padding-right: 18px;
}
.save-recipe-button{
    &:hover{
        background-color: rgb(34, 34, 251);
    }
}
.cancel-recipe-button{
    &:hover{
        background-color: rgb(188, 188, 188);
    }
}
button{
    min-width: 70px;
    border: 1px solid rgb(185, 185, 185);
    border-radius: 3px;
    padding: 0.5rem 0.5rem;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    background-color: transparent;
    & span{
        font-size: var(--font-size);
    }
    &:hover{
        cursor: pointer;
        color: white;
    }
    &:active{
        transform: scale(0.95);
    }
}
</style>