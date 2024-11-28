<script setup lang="ts">
</script>

<template>
    <div class="upload-file-container">
        <span class="material-symbols-outlined">upload</span>
        <input type="file" id="image" name="image">
        <label for="image" class="upload-file-label">Upload Image (.jpg, .png)</label>
    </div>
</template>

<style lang="css" scoped>
    .upload-file-container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(240, 240, 240);
        width: 95%;
        height: 325px;
        border-radius: 8px;
        &:hover{
            border: 2px solid rgb(188, 197, 252);
        }
        & input{
            height: 100%;
            width: 100%;
            opacity: 1;
            &:hover{
                cursor: pointer;
            }
        }
        & span{
            position: absolute;
            text-align: center;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            top: 45%;
            left: 50%;
            font-size: 4rem;
            color: rgb(200, 199, 199);
            transform: translate(-50%, -50%);
            border-radius: 5px;
            background-color: rgb(223, 222, 222);
        }
    }
    .upload-file-label{
        position: absolute;
            top: 62%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: rgb(128, 128, 128);
    }
</style>