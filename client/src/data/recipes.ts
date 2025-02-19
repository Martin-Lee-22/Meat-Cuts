import type { recipe } from "@/types/recipes"

const recipes:recipe[] = [
    {
        "id": 0,
        "animal": "cow",
        "cut": "rib",
        "name": "Juicy New York Strip Rib",
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
        "duration": 30,
        "servings": 4,
        "calories": 600,
        "rating": 4,
        "published": new Date("2018-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "article": "example article"
    },
    {
        "id": 1,
        "name": "Parmesean Chicken Breast",
        "animal": "chicken",
        "cut": "breast",
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
        "duration": 300,
        "servings": 40,
        "calories": 6000,
        "rating": 3,
        "published": new Date("2019-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "article": "example article"
    }
]

export {recipes}