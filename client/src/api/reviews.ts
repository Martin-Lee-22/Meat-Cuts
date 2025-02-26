import type { review } from '@/types/recipes';

const url = 'https://4chbsj911i.execute-api.us-east-2.amazonaws.com/dev/'

/**
 * Retrieves reviews for the given recipe from the API and returns them as an array of review objects.
 * @param {number} recipeId - The id of the recipe for which to retrieve the reviews.
 * @returns {Promise<review[]>} A promise that resolves to an array of reviews for the given recipe.
 */
export async function getReviewsAPI(recipeId: number): Promise<review[]> {
    let reviews: review[] = []
    try{
        await fetch(url + `?recipeId=${recipeId}`, {
            method: 'GET'
        }).then(async response => await response.json()).then(data => {
            reviews = data.Items
            return reviews
        })
    }catch(e){
        console.log(`Error: ${e}`)
    }
    return reviews
}

/**
 * Posts the given review to the API.
 * @param {review} review - The review object containing the review details to post.
 * @returns {Promise<void>} A promise that resolves when the review has been posted.
 */
export async function postReviewsAPI(review: review): Promise<void> {
    try{
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        console.log('Review Posted!')
    }catch(e){
        console.log(`Error: ${e}`)
    }
}
