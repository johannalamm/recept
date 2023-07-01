import './App.css';
import './List.css';
import recipes from './recipes';

import React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import Delete from '@mui/icons-material/Delete';
import Autocomplete from '@mui/joy/Autocomplete';
import { Ingredient, Recipe, Tag } from './typings';

let all_tags: Tag[] = recipes.reduce((acc: Tag[], recipe) => { return [...acc, ...recipe.tags] }, []);
all_tags = [...new Set(all_tags)];

const categories : {[key: string]: {[key: string]: Ingredient}} = {'frukt & grönt': {}, 'kött, fågel & chark': {}, 'mejeri': {}, 'frysdisken':{}, 'kryddor & smaksättare': {}, 'skafferi': {}};

function App() {
  const [recipe, setRecipe] = React.useState<Recipe | undefined>(undefined);
  const [nonAddedRecipes, setNonAddedRecipes] = React.useState<Recipe[]>(recipes);
  const [addedRecipes, setAddedRecipes] = React.useState<Recipe[]>([]);
  const [shoppningList, setShoppingList] = React.useState(categories);

  return (
    <div className="App">
        <Grid container spacing={2}>
        <Grid xs={12} md={5}>
            <Autocomplete
              id="tags-default"
              multiple
              options={all_tags}
              getOptionLabel={(option) => option}
              defaultValue={[all_tags[3], all_tags[4]]}
              onChange={(_event, newValue) => {
                let recipesWithTags = [...recipes];
                newValue.forEach((tag) => {
                  recipesWithTags = recipesWithTags.filter((recipe) => recipe.tags.includes(tag));
                });  
                const filteredRecipes = recipesWithTags.filter((recipe: Recipe) => !addedRecipes.includes(recipe));
                setNonAddedRecipes([...filteredRecipes]);
              }}
              renderTags={(tags, getTagProps) =>
                      tags.map((item, index) => (
                        <Chip
                          variant="solid"
                          color="primary"
                          endDecorator={<Close fontSize="small" />}
                          {...getTagProps({ index })}
                        >
                    {item}
                  </Chip>
                ))
              }
            />
            <List>
            {addedRecipes?.map((recipe) => 
                            <ListItem
                            key={recipe.title}
                            endAction={
                              <IconButton aria-label="Delete" size="sm" color="danger"
                              onClick={() => {
                                setNonAddedRecipes([...nonAddedRecipes, recipe]);
                                setAddedRecipes(addedRecipes.filter((r) => r.title !== recipe.title));
                                for (const ingredient of recipe.ingredients) {
                                  if (ingredient.category === 'skip') {
                                    continue;
                                  }
                                  const oldIngredient = shoppningList[ingredient.category]?.[ingredient.title];
                                  if (!oldIngredient) {
                                    continue;
                                  }
                                  if (oldIngredient.value <= ingredient.value) {
                                    delete shoppningList[ingredient.category][ingredient.title];
                                  } else {
                                    shoppningList[ingredient.category][ingredient.title].value = oldIngredient.value - ingredient.value;
                                  }
                                  setShoppingList({...shoppningList})
                                }
                              }}
                              >
                                <Delete />
                              </IconButton>
                            }
                          >
                            <ListItemButton
                            onClick={() => {
                              setRecipe(recipe);
                            }}
                          >
                            {recipe.title}</ListItemButton>
                    </ListItem>
              )}
              {nonAddedRecipes?.map((recipe) => 
                            <ListItem
                            key={recipe.title}
                            startAction={
                              <IconButton aria-label="Add" size="sm" variant="plain" color="neutral"
                              onClick={() => {
                                setAddedRecipes([...addedRecipes, recipe]);
                                setNonAddedRecipes(nonAddedRecipes.filter((r) => r.title !== recipe.title));
                                for (const ingredient of recipe.ingredients) {
                                  if (ingredient.category === 'skip') {
                                    continue;
                                  }
                                  const oldIngredient = shoppningList[ingredient.category]?.[ingredient.title];
                                  if (!oldIngredient) {
                                    shoppningList[ingredient.category][ingredient.title] = {...ingredient};
                                    setShoppingList({...shoppningList})
                                  } else {
                                    shoppningList[ingredient.category][ingredient.title].value = oldIngredient.value + ingredient.value;
                                    setShoppingList({...shoppningList})
                                  }
                                }
                              }}
                              >
                                <Add />
                              </IconButton>
                            }
                          >
                            <ListItemButton
                            onClick={() => {
                              setRecipe(recipe);
                            }}
                          >
                            {recipe.title}</ListItemButton>
                          </ListItem>
              )}
            </List>
          </Grid>
          <Grid xs={12} md={5} className="List">
            <div>
              {Object.keys(categories).map((category) => {
                return (
                  <div className="ListItem" key={category}>
                    <div className="ListHeading">{category}</div>
                  {Object.keys(shoppningList[category]).map((title) => {
                    const ingredient = shoppningList[category][title];
                    return <Checkbox color="neutral" variant="outlined" label={ingredient.value + ' ' + ingredient.unit + ' ' +ingredient.title} key={ingredient.title} />
                  }
                )
              }</div>)})}
            </div>
          </Grid>
        </Grid>
        <Modal open={!!recipe} onClose={() => setRecipe(undefined)}>
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout="fullscreen"
        >
          <ModalClose />
          <Typography id="layout-modal-title" component="h2">
          {recipe?.title}
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={12} md={5} className="List Ingredients">
              {recipe?.ingredients.map((ingredient) => {
                return (
                  <div className="ListItem" key={ingredient.title}> 
                  {ingredient.value} {ingredient.unit} {ingredient.title}
                  </div>
                );
              })}
            </Grid>
            <Grid xs={12} md={7}>
              {recipe?.steps.map((step) => {
                  let modifiedStep = step;

                  recipe.ingredients.forEach((ingredient) => {
                    const ingredientReference = `{${ingredient.title}}`;
                    modifiedStep = modifiedStep.replace(ingredientReference, ingredient.value + ' ' + ingredient.unit + ' ' + ingredient.title);
                  });
                return (
                  <div className="ListItem" key={step}> 
                  • {modifiedStep}
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </ModalDialog>
      </Modal>
    </div>
  );
}

export default App;
