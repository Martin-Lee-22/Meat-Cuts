<script setup lang="ts">
    import {ref, useTemplateRef, watch } from 'vue';

    const showMenu = ref(false)
    const moreContainer = useTemplateRef('base-more-container')

    /**
     * Listens for mouseup events outside of the menu container and sets showMenu to false
     * @param {MouseEvent} e - The mouse event triggered on mouse up.
     */
    function onOutsideClick(e: MouseEvent): void {
        const target = e.target as HTMLElement
        if(!moreContainer.value?.contains(target)) showMenu.value = false
    }

    // Watch for changes in showMenu and add or remove event listeners
    watch(showMenu, () => {
        if(showMenu.value) {
            document.addEventListener('mouseup', onOutsideClick)
        } else {
            document.removeEventListener('mouseup', onOutsideClick)
        }
    })

</script>

<template>
    <div class="base-more-container"  ref="base-more-container">
        <div v-if="showMenu" class="more-menu-container" ref="more-menu-container">
            <div class="more-menu-item" @click="showMenu = !showMenu">
                <span class="material-symbols-outlined">flag</span>
                <span>Report</span>
            </div>
        </div>
        <button @click="showMenu = !showMenu;">
            <span class="material-symbols-outlined">more_horiz</span>
        </button>
    </div>
</template>

<style lang="css" scoped>
    .base-more-container{
        position: absolute;
        right: 0;
    }
    .more-menu-container{
        position: absolute;
        left: 0;
        transform: translate(-100%, 0);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 5px;
        padding: 0.25rem;
    }
    .more-menu-item{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        min-width: 100px;
        padding: 0.25rem;
        border-radius: 5px;
        &:hover{
            background-color: red;
            color: white;
            cursor: pointer;
        }
        & span{
            font-size: 0.9rem;
            font-weight: 400;
        }
    }
    span{
        font-size: 1.2rem;
    }
    button{
        padding: 0 3px 0 3px;
        border: none;
        background-color: transparent;
        border-radius: 50%;
        color: rgb(189, 189, 189);
        &:hover{
            background-color: rgb(241, 240, 240);
            cursor: pointer;
        }
        &:active{
            background-color: rgb(228, 228, 228);
        }
    }
</style>