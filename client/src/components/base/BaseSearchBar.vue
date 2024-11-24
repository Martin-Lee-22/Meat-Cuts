<script setup lang="ts">

</script>

<template>
    <div class="search-bar-container">
        <button class="search-button"><span class="material-symbols-outlined">search</span></button>
        <input type="text" placeholder="What are you looking for?">
    </div>
</template>

<style lang="css" scoped>
    .search-bar-container{
        position: relative;
        width: 35%;
    }
    .search-button{
        position: absolute;
        height: 90%;  
        width: 15%;
        border: none;
        background: none;
        &:hover{
            cursor: pointer;
        }
        & span{
            position: absolute;
            font-size: 1.25rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    input{
        width: 100%;
        font-size: 0.75rem;
        padding: 5% 5% 5% 15%; 
        border: 1px solid gray;
        border-radius: 5px;
        height: 2rem;
        &:focus{
            outline: none;
        }
    }
</style>