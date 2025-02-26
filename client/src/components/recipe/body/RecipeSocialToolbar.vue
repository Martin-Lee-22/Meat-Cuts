<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';

function printRecipe(){
    print()
}
</script>

<template>
    <iframe name="printFrame"></iframe>
    <div class="recipe-social-toolbar-container">
        <BaseButton :callBack="printRecipe"><span title="Print Recipe" class="material-symbols-outlined">print</span></BaseButton>
        <BaseButton>
            <a href="mailto:hello@hello.com?subject=Email Subject&body=Contents of email">
                <span title="Email Recipe" class="material-symbols-outlined">mail</span>
            </a>
        </BaseButton>
    </div>
</template>

<style lang="css" scoped>
    .recipe-social-toolbar-container{
        display: flex;
        gap: 5px;
        flex-direction: row;
        padding-right: 18px;
        justify-content: end;
        align-items: center;
        & button{
            border: 1px solid rgb(205, 205, 205);
            border-radius: 50%;
            cursor:pointer;
            font-size: 0.8em;
        }
        & a{
            color: black;
        }
    }
    iframe{
        display:none;
    }
</style>