import PropTypes from 'prop-types';

const Calculations = ({ recipes, handlecooking, currentcook, times, calories }) => {

    let tot_time = 0;
    let tot_calories = 0;
    const timehandling = () => {
        const newtime = tot_time + times;
        return newtime;
    }
    const calorihandling = () => {
        const newcalories = tot_calories + calories;
        return newcalories;
    }

    return (
        <div className="w-1/3 ml-6 border-2 border-slate-200 rounded-2xl py-3">

            <table className='table-fixed w-96 mx-auto'>
                <caption className="caption-top font-bold text-2xl border-b-2 border-slate-200 mb-4 pb-4">
                    Want to Cook : {recipes.length}
                </caption>
                <thead>
                    <tr>
                        <th className='pb-3'>Name</th>
                        <th className='pb-3'>Time</th>
                        <th className='pb-3'>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipes.map((recipe, idx) => <tr key={idx} className='mt-3 text-slate-600 bg-slate-100'>
                            <td className="text-center p-2">{recipe.recipe_name}</td>
                            <td className="text-center p-2">{recipe.preparing_time} minutes</td>
                            <td className="text-center p-2">{recipe.calories} calories</td>
                            <td><button onClick={() => handlecooking(recipe)} className="btn btn-success rounded-2xl text-black p-2">Preparing</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>


            <table className='table-fixed  w-96 mx-auto mt-6'>
                <caption className="caption-top border-b-2 border-slate-200 font-bold text-2xl mb-4 pb-4">
                    Currently cooking : {currentcook.length}
                </caption>
                <thead>
                    <tr>
                        <th className='pb-3'>Name</th>
                        <th className='pb-3'>Time</th>
                        <th className='pb-3'>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentcook.map(cookrecipe => <tr key={cookrecipe.recipe_id} className="bg-slate-100 pt-6">
                            <td className="pl-2 p-2 text-slate-600">{cookrecipe.recipe_name}</td>
                            <td className="p-2 text-center text-slate-600">{cookrecipe.preparing_time} minutes</td>
                            <td className="p-2 text-center text-slate-600">{cookrecipe.calories} calories</td>
                        </tr>)
                    }
                    <tr className='text-slate-600 font-medium text-base'>
                        <td></td>
                        <td className='pr-2 pt-2 text-cente'>Total Time = {timehandling()} minutes</td>
                        <td className='pl-2 pt-2 text-cente'>Total Calories = {calorihandling()} calories</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

Calculations.propTypes = {
    recipes: PropTypes.array.isRequired,
    handlecooking: PropTypes.func.isRequired,
    currentcook: PropTypes.array.isRequired,
    times: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired
}

export default Calculations;
