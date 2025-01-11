<script setup lang="ts">
import { countLines } from '@/utils/helperFunctions';
import { onMounted } from 'vue';

const props = defineProps<{comment: string, index: number}>();
const maxNumberOfLines = 3

onMounted(()=>{ 
    // If the comment has more lines than the max number of lines, show the expand button and keep the 'cutoff-text' class.
    const numberOfLines = countLines('review-comment-container-','review-comment-', props.index)
    const expandBtn = document.querySelector(`[name=expand-btn-${props.index}]`) as HTMLInputElement
    const divElement = document.querySelector(`[name=review-comment-container-${props.index}]`) as HTMLDivElement
    if(expandBtn && divElement && numberOfLines < maxNumberOfLines){
        expandBtn.style.display = 'none'
        divElement.classList.remove('cutoff-text')
    }
})

</script>

<template>
    <div class='review-comment-container cutoff-text' :name="`review-comment-container-${index}`">
        <p id="review-comment" :name="`review-comment-${index}`">{{comment}}</p>
    </div>
    <input type='checkbox' class="expand-btn" :name="`expand-btn-${index}`" value='Read More'/>
</template>

<style lang="css" scoped>
    #review-comment{
        font-weight: 300;
        font-size: 0.9em;
    }
    .review-comment-container{
        --max-lines: 3;
        --line-height: 1.4;
        display:flex;
        max-height: calc(var(--max-lines) * 1em * var(--line-height));
        line-height:var(--line-height);
        overflow:hidden;
        position:relative;
    }
    .cutoff-text:has(+ .expand-btn:not(:checked))::before{
        content:'';
        position:absolute;
        height: calc(1em * var(--line-height));
        width:100%;
        bottom:0;
        pointer-events:none;
        background: linear-gradient(to bottom, transparent, white)
    }

    .expand-btn{
        appearance:none;
        border: 1px solid rgb(205, 205, 205);
        padding: .5em;
        border-radius: .25em;
        cursor:pointer;
        width: fit-content;
        margin-top: 0.5rem;
        font-size: 0.8em;
        float: right;
        font-weight: 400;
        &:checked{
            display: none;
        }
    }

    .expand-btn:hover{
        background-color: rgb(243, 243, 243);
    }

    .expand-btn::before{
        content:'Show More';
    }

    .cutoff-text:has(+ .expand-btn:checked){
        max-height:100%;
    }
</style>