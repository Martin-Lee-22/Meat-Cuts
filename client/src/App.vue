<script setup lang="ts">
import AnimalSelector from './components/animal_selector/AnimalSelector.vue';
import Recipes from './components/recipes/Recipes.vue'

const exampleRecipe = {
  "id": 1,
  "animal": "cow",
  "cut": "rib",
  "name": "Honey ribs",
  "ingredients": [
      "1 pound spaghetti",
      "1 cup tomato sauce",
      "1/2 cup grated Parmesan cheese",
      "Salt and pepper to taste"
  ],
  "steps": [
      "Cook the spaghetti according to the package instructions.",
      "In a separate pan, heat the tomato sauce and season with salt and pepper.",
      "Drain the cooked spaghetti and add it to the sauce.",
      "Serve the spaghetti with grated Parmesan cheese on top."
  ],
  "image": {},
  "duration": 3,
  "servings": 4,
  "calories": 6,
  "difficulty": "Easy",
  "rating": 4,
  "published": "2012-04-23T18:25:43.511Z",
  "views": 15000,
  "author": "Bobby Lee",
  "article": "example article"
}

const exampleRecipe2 = {
  "id": 0,
  "animal": "cow",
  "cut": "hair",
  "name": "Honey ribs",
  "ingredients": [
      "1 pound spaghetti",
      "1 cup tomato sauce",
      "1/2 cup grated Parmesan cheese",
      "Salt and pepper to taste"
  ],
  "steps": [
      "Cook the spaghetti according to the package instructions.",
      "In a separate pan, heat the tomato sauce and season with salt and pepper.",
      "Drain the cooked spaghetti and add it to the sauce.",
      "Serve the spaghetti with grated Parmesan cheese on top."
  ],
  "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "duration": 300000000000,
  "servings": 40000000,
  "calories": 600000000,
  "difficulty": "medium",
  "rating": 200000000,
  "published": "2012-04-23T18:25:43.511Z",
  "views": 1000000,
  "author": "kitty mannnnnn",
  "article": "example article"
}



const url = 'https://u1bltsp892.execute-api.us-east-2.amazonaws.com/dev/meat-cuts/'

async function postRecipe(){

  // const file = document.getElementById('file') as HTMLInputElement
  // if(file.files && file.files[0]){
  //   console.log('hello')
  //   console.log(`file.files[0]: ${file.files[0]}`)
  //   // exampleRecipe.image = URL.createObjectURL(file.files[0])
  //   exampleRecipe.image = file.files[0]
  //   exampleRecipe.animal = 'dragon'
  //   console.log(`exampleRecipe1: ${JSON.stringify(exampleRecipe)}`)

  // }
  console.log('Posting Recipe...')
  console.log(`exampleRecipe: ${JSON.stringify(exampleRecipe)}`)
  await fetch(url + 'cow/rib/1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exampleRecipe)
  }).then(response => response.json()).then(data => console.log(data))
  console.log('Recipe Posted!')
}

function getRecipe(){
  console.log('Getting Recipe...')
  fetch(url + 'cow/rib/0').then(response => response.json()).then(data => console.log(data))
  console.log('Recipe Got!')
}

function deleteRecipe(){
  console.log('Deleting Recipe...')
  fetch(url + 'cow/rib/0', {
    method: 'DELETE'
  }).then(response => response.json()).then(data => console.log(data))
  console.log('Recipe Deleted!')
}

function updateRecipe(){
  console.log('Updating Recipe...')
  fetch(url + 'cow/rib/0', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exampleRecipe2)
  }).then(response => response.json()).then(data => console.log(data))
  console.log('Recipe Updated!')
}
</script>

<template>
  <main class="main-container">
    <!-- <button @click="postRecipe">Post</button>
    <button @click="getRecipe">Get</button>
    <button @click="deleteRecipe">Delete</button>
    <button @click="updateRecipe">Update</button> -->
    <!-- <input type="file" id="file" name="file" accept="image/png, image/jpeg"> -->
    <AnimalSelector/>
    <Transition appear mode="out-in" name="fade-leftwards">
      <Recipes/>
    </Transition>
  </main>
</template>

<style scoped>
  .main-container{
    display: flex;
    height: 100vh;
    position: relative;
  }
</style>
