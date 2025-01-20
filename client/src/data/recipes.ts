import type { recipe } from "@/types/recipes"

const recipes:recipe[] = [
    {
        "id": 0,
        "animal": "cow",
        "cut": "steak",
        "name": "A",
        "description": "Delicious spaghetti recipe",
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
        "tags": ["pasta", "spaghetti", "tomato sauce", "grated cheese"],
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "duration": 30,
        "servings": 4,
        "calories": 600,
        "difficulty": "Easy",
        "rating": 4,
        "reviews": [
            {
                "id": 0,
                "name": "John Doe",
                "comment": "This recipe is amazing! I tried it and it was delicious! alksdjfalksdjfas flkajflkasdj flkasj flaksjdf laksdjflkasj flkwajeofl awef jaw;ifj aw;lkf j;aslj fawoei f;owaeh f;oweh fo;aw efo;we a;of jaw;l efaj we;fo wa;ofh o;wa hf;owa fwiae fo;whe fjaweljf;alkf ajw efjw;aofkj awejfae awekfj lweafo;weijhgew afjew;alkfj awefljwae;fhlaw;lefkj awefj;owaejf;awe f efjkweajf;lkwajef;lk awejf;wlaef",
                "rating": 5,
                "date": new Date("2024-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 1,
                "name": "Jane Smith",
                "comment": "I love this recipe! It's simple and delicious.",
                "rating": 4,
                "date": new Date("2023-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 2,
                "name": "Bob Johnson",
                "comment": "The instructions were clear and easy to follow.",
                "rating": 4,
                "date": new Date("2022-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 3,
                "name": "Asmon Gold",
                "comment": "I prefer steak.",
                "rating": 1,
                "date": new Date("2024-03-25"),
                "likes": 10,
                "dislikes": 2
            }
        ],
        "published": new Date("2018-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "authorImage": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "article": "example article"
    },
    {
        "id": 1,
        "name": "B",
        "animal": "chicken",
        "cut": "breast",
        "description": "Delicious spaghetti recipe",
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
        "tags": ["pasta", "spaghetti", "tomato sauce", "grated cheese"],
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "duration": 300,
        "servings": 40,
        "calories": 6000,
        "difficulty": "Easy",
        "rating": 3,
        "reviews": [
            {
                "id": 0,
                "name": "John Doe",
                "comment": "This recipe is amazing! I tried it and it was delicious! alksdjfalksdjfas flkajflkasdj flkasj flaksjdf laksdjflkasj flkwajeofl awef jaw;ifj aw;lkf j;aslj fawoei f;owaeh f;oweh fo;aw efo;we a;of jaw;l efaj we;fo wa;ofh o;wa hf;owa fwiae fo;whe fjaweljf;alkf ajw efjw;aofkj awejfae awekfj lweafo;weijhgew afjew;alkfj awefljwae;fhlaw;lefkj awefj;owaejf;awe f efjkweajf;lkwajef;lk awejf;wlaef",
                "rating": 5,
                "date": new Date("2024-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 1,
                "name": "Jane Smith",
                "comment": "I love this recipe! It's simple and delicious.",
                "rating": 4,
                "date": new Date("2023-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 2,
                "name": "Bob Johnson",
                "comment": "The instructions were clear and easy to follow.",
                "rating": 4,
                "date": new Date("2022-03-25"),
                "likes": 10,
                "dislikes": 2
            }
        ],
        "published": new Date("2019-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "authorImage": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "article": "example article"
    },
    {
        "id": 2,
        "name": "C",
        "animal": "sheep",
        "cut": "rack",
        "description": "Delicious spaghetti recipe",
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
        "tags": ["pasta", "spaghetti", "tomato sauce", "grated cheese"],
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "duration": 3,
        "servings": 2,
        "calories": 60,
        "difficulty": "Easy",
        "rating": 1,
        "reviews": [
            {
                "id": 0,
                "name": "John Doe",
                "comment": "This recipe is amazing! I tried it and it was delicious! alksdjfalksdjfas flkajflkasdj flkasj flaksjdf laksdjflkasj flkwajeofl awef jaw;ifj aw;lkf j;aslj fawoei f;owaeh f;oweh fo;aw efo;we a;of jaw;l efaj we;fo wa;ofh o;wa hf;owa fwiae fo;whe fjaweljf;alkf ajw efjw;aofkj awejfae awekfj lweafo;weijhgew afjew;alkfj awefljwae;fhlaw;lefkj awefj;owaejf;awe f efjkweajf;lkwajef;lk awejf;wlaef",
                "rating": 5,
                "date": new Date("2024-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 1,
                "name": "Jane Smith",
                "comment": "I love this recipe! It's simple and delicious.",
                "rating": 4,
                "date": new Date("2023-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 2,
                "name": "Bob Johnson",
                "comment": "The instructions were clear and easy to follow.",
                "rating": 4,
                "date": new Date("2022-03-25"),
                "likes": 10,
                "dislikes": 2
            }
        ],
        "published": new Date("2017-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "authorImage": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "article": "example article"
    },
    {
        "id": 3,
        "name": "D",
        "animal": "duck",
        "cut": "wing",
        "description": "Delicious spaghetti recipe",
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
        "tags": ["pasta", "spaghetti", "tomato sauce", "grated cheese"],
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "duration": 20,
        "servings": 5,
        "calories": 300,
        "difficulty": "Easy",
        "rating": 2,
        "reviews": [
            {
                "id": 0,
                "name": "John Doe",
                "comment": "This recipe is amazing! I tried it and it was delicious! alksdjfalksdjfas flkajflkasdj flkasj flaksjdf laksdjflkasj flkwajeofl awef jaw;ifj aw;lkf j;aslj fawoei f;owaeh f;oweh fo;aw efo;we a;of jaw;l efaj we;fo wa;ofh o;wa hf;owa fwiae fo;whe fjaweljf;alkf ajw efjw;aofkj awejfae awekfj lweafo;weijhgew afjew;alkfj awefljwae;fhlaw;lefkj awefj;owaejf;awe f efjkweajf;lkwajef;lk awejf;wlaef",
                "rating": 5,
                "date": new Date("2024-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 1,
                "name": "Jane Smith",
                "comment": "I love this recipe! It's simple and delicious.",
                "rating": 4,
                "date": new Date("2023-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 2,
                "name": "Bob Johnson",
                "comment": "The instructions were clear and easy to follow.",
                "rating": 4,
                "date": new Date("2022-03-25"),
                "likes": 10,
                "dislikes": 2
            }
        ],
        "published": new Date("2016-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "authorImage": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "article": "example article"
    },
    {
        "id": 4,
        "name": "Spaghetti",
        "animal": "horse",
        "cut": "leg",
        "description": "Delicious spaghetti recipe",
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
        "tags": ["pasta", "spaghetti", "tomato sauce", "grated cheese"],
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "duration": 30,
        "servings": 4,
        "calories": 600,
        "difficulty": "Easy",
        "rating": 4,
        "reviews": [
            {
                "id": 0,
                "name": "John Doe",
                "comment": "This recipe is amazing! I tried it and it was delicious! alksdjfalksdjfas flkajflkasdj flkasj flaksjdf laksdjflkasj flkwajeofl awef jaw;ifj aw;lkf j;aslj fawoei f;owaeh f;oweh fo;aw efo;we a;of jaw;l efaj we;fo wa;ofh o;wa hf;owa fwiae fo;whe fjaweljf;alkf ajw efjw;aofkj awejfae awekfj lweafo;weijhgew afjew;alkfj awefljwae;fhlaw;lefkj awefj;owaejf;awe f efjkweajf;lkwajef;lk awejf;wlaef",
                "rating": 5,
                "date": new Date("2024-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 1,
                "name": "Jane Smith",
                "comment": "I love this recipe! It's simple and delicious.",
                "rating": 4,
                "date": new Date("2023-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 2,
                "name": "Bob Johnson",
                "comment": "The instructions were clear and easy to follow.",
                "rating": 4,
                "date": new Date("2022-03-25"),
                "likes": 10,
                "dislikes": 2
            }
        ],
        "published": new Date("2015-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "authorImage": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "article": "example article"
    },
    {
        "id": 5,
        "name": "Spaghetti",
        "animal": "pig",
        "cut": "pork chops",
        "description": "Delicious spaghetti recipe",
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
        "tags": ["pasta", "spaghetti", "tomato sauce", "grated cheese"],
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "duration": 30,
        "servings": 4,
        "calories": 600,
        "difficulty": "Easy",
        "rating": 4,
        "reviews": [
            {
                "id": 0,
                "name": "John Doe",
                "comment": "This recipe is amazing! I tried it and it was delicious! alksdjfalksdjfas flkajflkasdj flkasj flaksjdf laksdjflkasj flkwajeofl awef jaw;ifj aw;lkf j;aslj fawoei f;owaeh f;oweh fo;aw efo;we a;of jaw;l efaj we;fo wa;ofh o;wa hf;owa fwiae fo;whe fjaweljf;alkf ajw efjw;aofkj awejfae awekfj lweafo;weijhgew afjew;alkfj awefljwae;fhlaw;lefkj awefj;owaejf;awe f efjkweajf;lkwajef;lk awejf;wlaef",
                "rating": 5,
                "date": new Date("2024-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 1,
                "name": "Jane Smith",
                "comment": "I love this recipe! It's simple and delicious.",
                "rating": 4,
                "date": new Date("2023-03-25"),
                "likes": 10,
                "dislikes": 2
            },
            {
                "id": 2,
                "name": "Bob Johnson",
                "comment": "The instructions were clear and easy to follow.",
                "rating": 4,
                "date": new Date("2022-03-25"),
                "likes": 10,
                "dislikes": 2
            }
        ],
        "published": new Date("2014-01-10"),
        "views": 15000,
        "author": "Bobby Lee",
        "authorImage": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "article": "example article"
    }
]

export {recipes}