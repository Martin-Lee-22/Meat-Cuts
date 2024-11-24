type ingredients = {
    amount:number,
    unit:string,
    ingredient:string
}

type review = {
    name: string,
    comment: string,
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
        cut: string
}

export type {recipe}
