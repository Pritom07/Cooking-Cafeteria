import PropTypes from 'prop-types';
import { GoDotFill } from "react-icons/go";
import { MdTimer } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";

const Recipe = ({ recipe }) => {
    const { recipe_img, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border-2 border-slate-200">
                <figure>
                    <img className='p-3 rounded-3xl'
                        src={recipe_img} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-2xl">{recipe_name}</h2>
                    <p className='text-lg text-[#878787] border-b-2 border-slate-200 pb-4'>{short_description}</p>
                    <h2 className='font-medium text-lg mt-2'>Ingredients : {ingredients.length}</h2>
                    <ul className='pb-2'>
                        {
                            ingredients.map((ingredient, idx) => <div key={idx} className='flex items-center text-lg text-slate-600 mt-1'>
                                <GoDotFill /><li className='ml-1'>{ingredient}</li>
                            </div>)
                        }
                    </ul>
                    <div className='flex justify-between items-center border-t-2 border-slate-200 pt-3'>
                        <p className='flex items-center'><MdTimer /><span className='ml-1'>{preparing_time} minutes</span></p>
                        <p className='flex items-center'><PiBowlFoodFill /><span className='ml-1'>{calories} calories</span></p>
                    </div>
                    <button className="btn btn-success rounded-3xl mt-3">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;