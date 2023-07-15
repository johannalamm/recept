import { Recipe } from "../typings";

export const kyckling_med_dragonsas : Recipe = {
    title: 'Kyckling med dragonsås',
    portions: 4,
    ingredients: [
    {
        unit: 'tärningar',
        title: 'köttbuljong',
        value: 2,
        category: 'kryddor & smaksättare'
    },
    {
        unit: 'g',
        title: 'smör',
        value: 150,
        category: 'mejeri'
    },
    {
        unit: 'dl',
        title: 'crème fraiche',
        value: 5,
        category: 'mejeri'
    },
    {
        unit: 'g',
        title: 'dragon',
        value: 20,
        category: 'kryddor & smaksättare'
    },
    {
        unit: 'dl',
        title: 'ris',
        value: 3,
        category: 'skafferi'
    },
    {
        unit: 'filéer',
        title: 'kyckling',
        value: 4,
        category: 'kött, fågel & chark'
    },
],
    steps: [
        'Sätt ugnen på 200 grader.',
        'Stek kycklingen i stekpanna, ca 4-5 minuter per sida.',
        'Lägg kycklingen i en ugnsform och stek i ugnen i ca 15 minuter.',
        'Koka {ris} enligt anvisning på förpackningen.',
        'Smält {smör} i en kastrull och tillsätt {köttbuljong} och till sist {crème fraiche}. Låt koka upp.',
    ],
    tags: ['jonathan', 'vardagsmat', 'huvudrätt']
}