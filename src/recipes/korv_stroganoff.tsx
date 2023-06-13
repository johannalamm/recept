import { Recipe } from "../typings";

export const korv_stroganoff : Recipe = {
    title: 'Korv Stroganoff',
    portions: 4,
    ingredients: [
    {
        unit: 'g',
        title: 'falukorv',
        value: 800,
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
        title: 'tomatpuré',
        value: 50,
        category: 'kryddor & smaksättare'
    },
    {
        unit: 'g',
        title: 'ketchup',
        value: 50,
        category: 'kryddor & smaksättare'
    },
    {
        unit: 'dl',
        title: 'ris',
        value: 3,
        category: 'skafferi'
    },
],
    steps: [
        'Koka {ris} enligt anvisning på förpackningen.',
        'Skär upp {falukorv} i lagom stora bitar och stek så att de får en fin yta.',
        'Tillsätt {crème fraiche}, {tomatpuré} och {ketchup}.',
    ],
    tags: ['snabbt', 'jonathan', 'vardagsmat', 'huvudrätt']
}