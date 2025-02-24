import type { review } from '@/types/recipes';

const url = 'https://4chbsj911i.execute-api.us-east-2.amazonaws.com/dev/'
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
