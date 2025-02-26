<template>
    <div class="recipe-list-item-skeleton-container skeleton-bg">
        <div class="recipe-list-item-skeleton-info-container">
            <div class="recipe-list-item-skeleton-title skeleton"></div>
            <div class="recipe-list-item-skeleton-rating skeleton"></div>
            <div class="recipe-list-item-skeleton-tags skeleton"></div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .recipe-list-item-skeleton-container{
        height: 255px;
        width: 175px;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .recipe-list-item-skeleton-info-container{
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 100%;
        height: 44%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0.5rem 0.25rem 0.5rem;
    }
    .recipe-list-item-skeleton-title{
        margin-top: 2rem;
        width: 80%;
        height: 1rem;
    }
    .recipe-list-item-skeleton-rating{
        width: 50%;
        height: 1rem;
    }
    .recipe-list-item-skeleton-tags{
        width: 100%;
        height: 2rem;
    }
</style>