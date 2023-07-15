import { Recipe } from "../typings";

export const tonfiskssallad: Recipe = {
    title: 'Tonfiskssallad',
    portions: 4,
    ingredients: [
        {
            unit: 'dl',
            title: 'crème fraiche',
            value: 3,
            category: 'mejeri'
        },
        {
            unit: 'ml',
            title: 'majonnäs',
            value: 10,
            category: 'skafferi'
        },
        {
            unit: 'g',
            title: 'tonfisk på burk',
            value: 340,
            category: 'skafferi'
        },
        {
            unit: 'st',
            title: 'ägg',
            value: 6,
            category: 'mejeri'
        },
        {
            unit: 'g',
            title: 'bladspenat',
            value: 175,
            category: 'frukt & grönt'
        },
        {
            unit: 'st',
            title: 'päron',
            value: 1,
            category: 'frukt & grönt'
        },
        {
            unit: 'g',
            title: 'småtomater',
            value: 250,
            category: 'frukt & grönt'
        },
        {
            unit: 'st',
            title: 'gurka',
            value: 1,
            category: 'frukt & grönt'
        },
],
    steps: [
        'Koka upp vatten och lägg i {ägg}. Låt koka i 10 minuter.',
        'Skölj {bladspenat} och lägg i en skål. Massera in med olivolja och salta och peppra.',
        'Hacka {päron}, {småtomater} och {gurka} och blanda med bladspenaten.',
        'Blanda {crème fraiche} och {majonnäs} i en skål. Salta och peppra.',
        'Skala och hacka äggen och blanda med {tonfisk på burk} och såsen.',
    ],
    tags: ['fisk', 'snabbt', 'johanna', 'vardagsmat', 'huvudrätt']
}