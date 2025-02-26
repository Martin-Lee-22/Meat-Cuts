export type review = {
    recipeId: number,
    userName: string,
    review: string,
    rating: number,
    published: Date,
    likes: number,
    dislikes: number,
    reviewId: string
}

export type rating = {
    id: number,
    heading: string,
    rating: number
}

export type recipe = {
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
