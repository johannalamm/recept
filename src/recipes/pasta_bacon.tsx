import { Recipe } from "../typings";

export const pasta_bacon: Recipe = {
    title: 'Pasta bacon',
    portions: 4,
    ingredients: [
        {
            unit: 'g',
            title: 'bacon',
            value: 240,
            category: 'kött, fågel & chark'
        },
        {
            unit: 'dl',
            title: 'crème fraiche',
            value: 5,
            category: 'mejeri'
        },
        {
            unit: 'g',
            title: 'fusilli',
            value: 500,
            category: 'skafferi'
        },
    ],
    steps: [
        'Koka upp vatten och tillsätt {fusilli}.',
        'Stek {bacon}.',
        'Blanda {crème fraiche}, baconen och pastan i en kastrull och värm upp.',
    ],
    tags: ['snabbt', 'jonathan', 'vardagsmat', 'huvudrätt']
}