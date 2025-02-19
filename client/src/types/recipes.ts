type review = {
    id: number,
    recipeId: number,
    name: string,
    comment: string,
    rating: number,
    date: Date,
    likes: number,
    dislikes: number
}

type rating = {
    id: number,
    heading: string,
    rating: number
}

type recipe = {
        id: number,
        name: string,
        ingredients: string[],
        steps: string[],
        image: string,
        duration: number,
        servings: number,
        calories: number,
        rating: number,
        author: string,
        views: number,
        animal: string,
        cut: string,
        published: Date,
        article: string
}

export type {recipe, review, rating}
