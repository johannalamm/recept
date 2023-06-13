import { Recipe } from "../typings";

export const gron_artsoppa: Recipe = {
    title: 'Grön Ärtsoppa',
    portions: 4,
    ingredients: [
        {
            unit: 'ml',
            title: 'matlagningsgrädde',
            value: 2.5,
            category: 'mejeri'
        },
        {
            unit: 'g',
            title: 'frysta gröna ärtor',
            value: 500,
            category: 'frysdisken'
        },
        {
            unit: 'st',
            title: 'gul lök',
            value: 1,
            category: 'frukt & grönt'
        },
        {
            unit: 'tärningar',
            title: 'grönsaksbuljong',
            value: 2,
            category: 'kryddor & smaksättare'
        },
        {
            unit: 'dl',
            title: 'vatten',
            value: 7,
            category: 'skip'
        },
],
    steps: [
        'Skala och hacka {gul lök}.',
        'Koka upp {vatten} och {grönsaksbuljong} i en kastrull. Lägg i {frysta gröna ärtor} och löken. Låt det koka under lock ca 5 min.',
        'Mixa soppan och tillsätt {matlagningsgrädde}.',
        'Låt det koka upp.',
    ],
    tags: ['vegetariskt', 'snabbt', 'johanna', 'vardagsmat', 'huvudrätt']
}