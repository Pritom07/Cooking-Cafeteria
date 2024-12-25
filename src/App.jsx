import { useState } from 'react'
import './App.css'
import Calculations from './Components/Calculations/Calculations'
import Navbar from './Components/Navbar/Navbar'
import RecipeHeading from './Components/RecipeHeading/RecipeHeading'
import Recipes from './Components/Recipes/Recipes'
import Topbanner from './Components/Topbanner/Topbanner'

function App() {
  const [recipes, Setrecipes] = useState([]);
  const [currentcook, Setcurrentcook] = useState([]);
  const [times, Settimes] = useState(0);
  const [calories, Setcalories] = useState(0);

  const handlerecipes = (recipe) => {
    const newrecipes = [...recipes, recipe];
    Setrecipes(newrecipes);
  }

  const handlecooking = (recipe) => {
    const remaingwantcook = recipes.filter(eachrecipe => eachrecipe.recipe_id !== recipe.recipe_id);
    Setrecipes(remaingwantcook);
    const newcurrentcook = [...currentcook, recipe];
    Setcurrentcook(newcurrentcook);
    const newtime = times + recipe.preparing_time;
    Settimes(newtime);
    const newcalories = calories + recipe.calories;
    Setcalories(newcalories);
  }

  return (
    <div>
      <Navbar></Navbar>
      <Topbanner></Topbanner>
      <RecipeHeading></RecipeHeading>
      <div className='flex max-w-7xl mx-auto mt-9 mb-6'>
        <Recipes handlerecipes={handlerecipes}></Recipes>
        <Calculations recipes={recipes} handlecooking={handlecooking} currentcook={currentcook} times={times} calories={calories}></Calculations>
      </div>
    </div>
  )
}

export default App
