<script setup lang="ts">
    import {onUpdated, ref, useTemplateRef, watch } from 'vue';

    const showMenu = ref(false)
    const menuContainer = useTemplateRef('more-menu-container')

    // const onClickOutside = (element: HTMLElement | null) => {
    //     document.addEventListener('click', e => {
    //         if (element && !element.contains(e.target as Node)) console.log('Clicked outside!')
    //     });
    // };

    // onMounted(()=>{
    //     document.addEventListener('click', e => {
    //         if(e.target !== container.value) {console.log('Clicked outside!')
    //             console.log(container.value)
    //             console.log(e.target)
    //             showMenu.value = false
    //         }
    //     })
    // })

    function onClickOutside(e: MouseEvent) {
        console.log(e.target)
        console.log(menuContainer.value)
        if(e.target !== menuContainer.value) {
            console.log('clikked outside!')
            document.removeEventListener('click', onClickOutside)
        }
    }

    onUpdated(() => {
        if(showMenu.value){
            document.addEventListener('click', onClickOutside)
        }
    })

</script>

<template>
    <div class="base-more-container">
        <div v-if="showMenu" class="more-menu-container" ref="more-menu-container">
            <div class="more-menu-item" @click="showMenu = !showMenu">
                <span class="material-symbols-outlined">flag</span>
                <span>Report</span>
            </div>
        </div>
        <button @click="showMenu = !showMenu">
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
        column-gap: 10px;
        width: fit-content;
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
        border: 1px solid red;
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