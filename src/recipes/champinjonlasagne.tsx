import { Recipe } from "../typings";

export const chaminjonlasagne: Recipe = {
    title: 'Champinjonlasagne',
    portions: 4,
    ingredients: [
        {
            unit: 'dl',
            title: 'crème fraiche',
            value: 5,
            category: 'mejeri'
        },
        {
            unit: 'ml',
            title: 'kantarellfond',
            value: 1,
            category: 'kryddor & smaksättare'
        },
        {
            unit: 'ml',
            title: 'soja',
            value: 1,
            category: 'kryddor & smaksättare'
        },
        {
            unit: 'klyftor',
            title: 'vitlök',
            value: 2,
            category: 'frukt & grönt'
        },
        {
            unit: 'g',
            title: 'bladspenat',
            value: 130,
            category: 'frukt & grönt'
        },
        {
            unit: 'g',
            title: 'färska champinjoner',
            value: 400,
            category: 'frukt & grönt'
        },
        {
            unit: 'g',
            title: 'lasagneplattor',
            value: 250,
            category: 'skafferi'
        },
        {
            unit: 'g',
            title: 'riven ost',
            value: 75,
            category: 'mejeri'
        },
        {
            unit: 'st',
            title: 'tomater',
            value: 3,
            category: 'frukt & grönt'
        },
],
    steps: [
        'Sätt ugnen på 200°C.',
        'Skiva och stek {färska champinjoner} och pressa i {vitlök}. Häll sedan i spenatbladen.',
        'Blanda {crème fraiche}, {kantarellfond} och {soja} i en skål.',
        'Skiva {tomater} och lägg i botten på en ugnsform. Lägg sedan på ett lager med champinjonblandningen och ett lager med lasagneplattor. Upprepa tills ingredienserna är slut.',
        'Toppa med {riven ost} och gratinera i mitten av ugnen tills den har fått fin färg, ca 25 min.',
    ],
    tags: ['vegetariskt', 'johanna', 'vardagsmat', 'huvudrätt']
}