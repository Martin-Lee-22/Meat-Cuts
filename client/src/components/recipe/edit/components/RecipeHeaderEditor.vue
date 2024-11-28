<script setup lang="ts">
import BaseUploadFile from '@/components/base/BaseUploadFile.vue';


    const props = defineProps(['recipe']);

</script>

<template>
    <div class="recipe-header-container">
        <!-- <img src="https://picsum.photos/200/100" alt="random image"/>
        <h1>{{props.recipe.name}}</h1> -->
        <!-- <Rating :rating="props.recipe.rating"/>
        <p>({{props.recipe.reviews.length}})</p> -->
        <!-- <p>By: <span>{{props.recipe.author}}</span></p> -->
        <!-- <div class="recipe-header-info">
            <div><p>Difficulty: <span>{{props.recipe.difficulty}}</span></p></div>
            <div><p>Servings: <span>{{props.recipe.servings}}</span></p></div>
            <div><p>Calories: <span>{{props.recipe.calories}}</span></p></div>
            <div><p>Duration: <span>{{props.recipe.duration}}</span></p></div>
        </div> -->
        <BaseUploadFile/>
        <div class="title-editor-container">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" :value="props.recipe.name">
        </div>
        <div class="recipe-header-info">
            <div>
                <label for="difficulty">Difficulty:</label>
                <select name="difficulty" id="difficulty">
                    <option value="Easy" :selected="props.recipe.difficulty === 'Easy'">Easy</option>
                    <option value="Medium" :selected="props.recipe.difficulty === 'Medium'">Medium</option>
                    <option value="Hard" :selected="props.recipe.difficulty === 'Hard'">Hard</option>
                </select>
            </div>
            <div>
                <label for="servings">Servings:</label>
                <input type="number" id="servings" name="servings" :value="props.recipe.servings">
            </div>
            <div>
                <label for="calories">Calories:</label>
                <input type="number" id="calories" name="calories" :value="props.recipe.calories">
            </div>
            <div>
                <label for="duration">Duration:</label>
                <input type="number" id="duration" name="duration" :value="props.recipe.duration">
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    input{
        width: 80%;
        text-align: center;
    }
    .title-editor-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;    
        & input{
            width: 45%;
        }
        & label{
            margin-right: 5px;
        }
    }
    .recipe-header-info div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & label{
            margin-bottom: 2px;
        }
    }
</style>