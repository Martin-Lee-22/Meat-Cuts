type review = {
    id: number,
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
        description: string,
        ingredients: string[],
        steps: string[],
        tags: string[],
        image: string,
        duration: number,
        servings: number,
        calories: number,
        difficulty: string,
        rating: number,
        reviews: review[],
        author: string,
        authorImage: string,
        views: number,
        animal: string,
        cut: string,
        published: Date,
        article: string
}

export type {recipe, review, rating}
