import { Recipe } from "../typings";

export const kottfarssas: Recipe = {
    title: 'Köttfärssås',
    portions: 4,
    ingredients: [
        {
            unit: 'g',
            title: 'nötfärs',
            value: 500,
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
            unit: 'g',
            title: 'timjan',
            value: 20,
            category: 'kryddor & smaksättare'
        },
        {
            unit: 'burkar',
            title: 'champinjoner på burk',
            value: 1,
            category: 'skafferi'
        },
        {
            unit: 'g',
            title: 'spaghetti',
            value: 400,
            category: 'skafferi'
        },
    ],
    steps: [
        'Koka upp vatten och tillsätt {spaghetti}.',
        'Stek {nötfärs}.',
        'Häll i {crème fraiche}, {tomatpuré}, {ketchup}, {timjan} och {champinjoner på burk}.',
    ],
    tags: ['snabbt', 'jonathan', 'vardagsmat', 'huvudrätt']
}