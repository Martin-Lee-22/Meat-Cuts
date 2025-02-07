import { recipes } from "./temporaryDB.js";
import {dateScalar} from "./scalars.js"

export const resolvers = {
    Date: dateScalar,
    Query:{
        recipes(_, args){
            return recipes.filter((recipe) => (recipe.animal === args.animal && recipe.cut === args.cut))
        },
        recipe(_, args){
            return recipes.find((recipe) => {
                if(typeof recipe.id === 'number') return recipe.id.toString() === args.id
                return recipe.id === args.id})
        },
    },
    Review:{
        // Finish the code below when you separate the reviews from recipes to make it its own collection.
        // reviews(parent){
        //     return reviews.filter((review) => review.recipe_id === parent.id)
        
    },
    Mutation: {
        createRecipe(_, args){
            const newRecipe = {
                id: recipes.length,
                ...args.recipe
            }
            recipes.push(newRecipe)
            return newRecipe
        },
        deleteRecipe(_, args){
            // Won't actually delete the recipe from the database due to recipes being an import
            return recipes.filter((recipe) => {
                if(typeof recipe.id === 'number') return recipe.id.toString() !== args.id
                return recipe.id !== args.id
            })
        },
        updateRecipe(_, args){
            const newRecipes = recipes.map((recipe) => {
                if(typeof recipe.id === 'number') return recipe.id.toString() === args.id ? {...recipe, ...args.edits} : recipe
                return recipe.id === args.id ? {...recipe, ...args.edits} : recipe
            })
            return newRecipes.find((recipe) => {
                if(typeof recipe.id === 'number') return recipe.id.toString() === args.id
                return recipe.id === args.id})
        }
    }
}