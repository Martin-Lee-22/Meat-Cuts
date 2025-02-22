<script setup lang="ts">
    import { onMounted, ref, useTemplateRef } from 'vue';

    const input = useTemplateRef('file-upload')
    const previewImgSrc = ref('')

    /**
     * - Previews a photo by reading the selected file from an input element.
     * If a file is selected, it uses FileReader to read the file as a data URL
     * and sets the resulting data URL to the previewImgSrc ref for display.
     */
    const onChange = () => {
        const file = input.value!.files;
        if (file) {
            // Code belows is to preview the image
            const fileReader = new FileReader();
            fileReader.onload = function (event) {
                if(event.target?.result) previewImgSrc.value = event.target.result as string
            }
            fileReader.readAsDataURL(file[0]);
        }
    }

    onMounted(()=>{
        input.value?.addEventListener("change", onChange);
    })
    
</script>

<template>
    <div class="upload-file-container" :style="{backgroundImage: 'url(' + previewImgSrc +')'}">
        <span class="material-symbols-outlined big-upload" v-if="!previewImgSrc" >upload</span>
        <input type="file" id="image_input" name="image" accept="image/png, image/jpeg" ref="file-upload">
        <label for="image" class="upload-file-label" v-if="!previewImgSrc">Drop or Click to upload image.</label>
        <span class="material-symbols-outlined small-upload" v-if="previewImgSrc">upload</span>
    </div>
</template>

<style lang="css" scoped>
    .upload-file-container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size:contain;
        background-position: center;
        background-repeat:no-repeat;
        width: 99%;
        height: 325px;
        border-radius: 8px;
        &:hover{
            outline: 2px solid rgb(188, 197, 252);
        }
        & input{
            height: 100%;
            width: 100%;
            opacity: 0;
            &:hover{
                cursor: pointer;
            }
        }
        & span{
            position: absolute;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            color: rgb(173, 171, 171);
            border-radius: 5px;
            background-color: rgb(223, 222, 222);
            &:hover{
            cursor: pointer;
        }
        }
        & label{
            margin-top: 8px;
            text-align: center;
            font-weight: 600;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .big-upload{
        top: 45%;
        left: 50%;
        font-size: 4rem;
        transform: translate(-50%, -50%);
    }
    .small-upload{
        bottom: 10px;
        right: 10px;
        color: white;
    }
    .upload-file-label{
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(128, 128, 128);
    }
</style>