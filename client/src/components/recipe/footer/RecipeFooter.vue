<script setup lang="ts">
    import BaseButton from '../../base/BaseButton.vue';
    import BaseLoadSpinner from '@/components/base/BaseLoadSpinner.vue';

    defineProps<{cancelRecipe: Function, deleteRecipe: Function, isCallingDeletingAPI: boolean, isCallingPutAPI: boolean}>()
</script>

<template>
    <div class="recipe-footer-container">
        <BaseButton :callBack="deleteRecipe" class="delete-recipe-button">
            <BaseLoadSpinner v-if="isCallingDeletingAPI" spinner-height="18px" spinner-width="18px"/>
            <span v-else>Delete</span>
        </BaseButton>
        <div class="save-cancel-container">
            <button class="save-recipe-button" form="form-recipe" type="submit" :disabled="isCallingPutAPI ? true : false">
                <BaseLoadSpinner v-if="isCallingPutAPI" spinner-height="18px" spinner-width="18px"/>
                <span v-else>Save</span>
            </button>
            <BaseButton :callBack="cancelRecipe" class="cancel-recipe-button">Cancel</BaseButton>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipe-footer-container{
        display: flex;
        gap: 5px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-inline: 18px;
    }
    .save-cancel-container{
        display: flex;
        gap: 10px;
    }
    .save-recipe-button{
        &:hover{
            background-color: rgb(34, 34, 251);
        }
    }
    .cancel-recipe-button{
        &:hover{
            background-color: rgb(212, 212, 212);
        }
    }
    .delete-recipe-button{
        &:hover{
            background-color: red;
        }
    }
    button, input[type="submit"]{
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