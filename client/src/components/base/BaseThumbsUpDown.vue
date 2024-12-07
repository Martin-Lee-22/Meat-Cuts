<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps<{likes: number, dislikes: number}>();
    const likes = ref(props.likes);
    const dislikes = ref(props.dislikes);
    const isLiked = ref(false);
    const isDisliked = ref(false);

    const color = 'rgb(100, 100, 100)';

    /**
     * Handles click events on the thumbs-up and thumbs-down buttons.
     * 
     * @param {MouseEvent} e - The mouse event triggered on button click.
     * Determines which button is clicked and updates the likes or dislikes count
     * accordingly. Toggles the visual state of the button to indicate whether it
     * has been liked or disliked, and ensures that a user cannot like and dislike
     * simultaneously.
     */
    function onClick(e: MouseEvent) {
    const button = e.currentTarget as HTMLButtonElement;

    if(button.name === 'thumbs-up-button'){
        if(!isLiked.value){
            likes.value++;
            isLiked.value = true;
            if(isDisliked.value) dislikes.value--;
            isDisliked.value = false;
        } else {
            likes.value--;
            isLiked.value = false;
        }
    } else {
        if(!isDisliked.value){
            dislikes.value++;
            isDisliked.value = true;
            if(isLiked.value) likes.value--;
            isLiked.value = false;
        } else {
            dislikes.value--;
            isDisliked.value = false;
        }
    }
}

</script>

<template>
    <div class="base-thumbs-up-down-container">
        <button ref="thumbs-up-button" name="thumbs-up-button" class="thumb-button" @click="onClick">
            <span :class="isLiked ? 'material-symbols-rounded':'material-symbols-outlined'" :style="{color: isLiked ? color : ''}">thumb_up</span>
            <span v-if="likes > 0">{{likes}}</span>
        </button>
        <button ref="thumbs-down-button" name="thumbs-down-button" class="thumb-button" @click="onClick">
            <span :class="isDisliked ? 'material-symbols-rounded':'material-symbols-outlined'" :style="{color: isLiked ? color : ''}">thumb_down</span>
            <span v-if="dislikes > 0">{{dislikes}}</span>
        </button>
    </div>
</template>

<style lang="css" scoped>
    .base-thumbs-up-down-container{
        display: flex;
        width: fit-content;
        flex-direction: row;
    }
    .thumb-button{
        cursor: pointer;
        display: flex;
        align-items: center;
        column-gap: 0.25rem;
        background-color: transparent;
        border: none;
        padding: 0.4rem;
        border-radius: 5px;
        &:hover{
            background-color: rgb(242, 240, 240);
            & span:first-of-type{
                transition: 0.15s ease-in-out;
                transform: scale(1.2);
            }
        }
        &:active{
            transform: scale(1.1);
        }
    }
    span{
        font-size: 1rem;
        font-weight: 400;
    }
</style>