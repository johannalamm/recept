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
'champinjoner' |
'spaghetti' |
'ris' |
'kyckling' |
'dragon' |
'köttbuljong' |
'smör' |
'fusilli' |
'bacon' |
'kantarellfond' |
'soja' |
'vitlök' |
'bladspenat' |
'lasagneplattor' |
'färska champinjoner' |
'riven ost' |
'tomater' |
'gurka' |
'småtomater' |
'päron' |
'ägg' |
'tonfisk på burk' |
'majonnäs';

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
    'champinjoner': 'burkar';
    'spaghetti': 'g';
    'kyckling': 'filéer';
    'dragon': 'g';
    'köttbuljong': 'tärningar';
    'smör': 'g';
    'fusilli': 'g';
    'bacon': 'g';
    'kantarellfond': 'ml';
    'soja': 'ml';
    'vitlök': 'klyftor';
    'bladspenat': 'g';
    'lasagneplattor': 'g';
    'färska champinjoner': 'g';
    'riven ost': 'g';
    'tomater': 'st';
    'gurka': 'st';
    'småtomater': 'g';
    'päron': 'st';
    'ägg': 'st';
    'tonfisk på burk': 'g';
    'majonnäs': 'ml';
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
    'champinjoner': 'skafferi';
    'spaghetti': 'skafferi';
    'kyckling': 'kött, fågel & chark';
    'dragon': 'kryddor & smaksättare';
    'köttbuljong': 'kryddor & smaksättare';
    'smör': 'mejeri';
    'fusilli': 'skafferi';
    'bacon': 'kött, fågel & chark';
    'kantarellfond': 'kryddor & smaksättare';
    'soja': 'kryddor & smaksättare';
    'vitlök': 'frukt & grönt';
    'bladspenat': 'frukt & grönt';
    'lasagneplattor': 'skafferi';
    'färska champinjoner': 'frukt & grönt';
    'riven ost': 'mejeri';
    'tomater': 'frukt & grönt';
    'gurka': 'frukt & grönt';
    'småtomater': 'frukt & grönt';
    'päron': 'frukt & grönt';
    'ägg': 'mejeri';
    'tonfisk på burk': 'skafferi';
    'majonnäs': 'skafferi';
  };

export type Category = 'mejeri' | 'frysdisken' | 'frukt & grönt' | 'kryddor & smaksättare' | 'kött, fågel & chark' | 'skafferi' | 'skip';

export type Tag = 'vegetariskt' | 'snabbt' | 'jonathan' | 'johanna' | 'vardagsmat' | 'huvudrätt' | 'fisk' ;

