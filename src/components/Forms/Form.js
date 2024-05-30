import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import initialRecipes from '../Forms/recipes.json';
import { RecipeForm } from './RecipeForm/RecipeForm';
import { MyForm } from './MyForm';
import EditPost from './MyFormReading';

export class Form extends Component {
  state = {
    recipes: initialRecipes,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
      };
    });
  };

  render() {
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
        <MyForm />
        <EditPost />
      </Layout>
    );
  }
}
