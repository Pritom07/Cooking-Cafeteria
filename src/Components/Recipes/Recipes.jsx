import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({ handlerecipes }) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('Foods.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="grid grid-cols-2 gap-7 w-2/3">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handlerecipes={handlerecipes}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handlerecipes: PropTypes.func
}

export default Recipes;