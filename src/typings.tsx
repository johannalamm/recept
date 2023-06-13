export type Recipe = {
    title: string;
    portions: number;
    ingredients: Ingredient[];
    steps: string[];
    tags: Tag[];
}

export type Ingredient = {
    [Title in IngredientTitle]: {
      title: Title;
      value: number;
      unit: IngredientUnitMap[Title];
      category: IngredientCategoryMap[Title];
    };
  }[IngredientTitle];

export type IngredientTitle = 
'matlagningsgrädde' | 
'frysta gröna ärtor' |
'gul lök' |
'grönsaksbuljong' |
'vatten' |
'falukorv' |
'crème fraiche' |
'tomatpuré' |
'ketchup' |
'nötfärs' |
'timjan' |
'champinjoner på burk' |
'spaghetti' |
'ris';

type IngredientUnitMap = {
    'matlagningsgrädde': 'ml';
    'frysta gröna ärtor': 'g';
    'gul lök': 'st';
    'grönsaksbuljong': 'tärningar';
    'vatten': 'dl';
    'falukorv': 'g';
    'crème fraiche': 'dl';
    'tomatpuré': 'g';
    'ketchup': 'g';
    'ris': 'dl';
    'nötfärs': 'g';
    'timjan': 'g';
    'champinjoner på burk': 'burkar';
    'spaghetti': 'g';
};

type IngredientCategoryMap = {
    'matlagningsgrädde': 'mejeri';
    'frysta gröna ärtor': 'frysdisken';
    'gul lök': 'frukt & grönt';
    'grönsaksbuljong': 'kryddor & smaksättare';
    'vatten': 'skip';
    'falukorv': 'kött, fågel & chark';
    'crème fraiche': 'mejeri';
    'tomatpuré': 'kryddor & smaksättare';
    'ketchup': 'kryddor & smaksättare';
    'ris': 'skafferi';
    'nötfärs': 'kött, fågel & chark';
    'timjan': 'kryddor & smaksättare';
    'champinjoner på burk': 'skafferi';
    'spaghetti': 'skafferi';
  };

export type Category = 'mejeri' | 'frysdisken' | 'frukt & grönt' | 'kryddor & smaksättare' | 'kött, fågel & chark' | 'skafferi' | 'skip';

export type Tag = 'vegetariskt' | 'snabbt' | 'jonathan' | 'johanna' | 'vardagsmat' | 'huvudrätt';

