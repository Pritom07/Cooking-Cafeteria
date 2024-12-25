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
            <h1 className="font-bold text-2xl text-center mb-4">Want to Cook : {recipes.length}</h1>
            <div className="border-t-2 border-slate-200 "></div>
            <table className="mt-4 text-slate-600">
                <tr className="flex justify-around">
                    <th className="pl-14">Name</th>
                    <th className="pl-14">Time</th>
                    <th className="pl-8">Calories</th>
                </tr>
            </table>


            {
                recipes.map(recipe => <table key={recipe.recipe_id} className='mt-3 text-slate-600'>
                    <tbody>
                        <tr className='flex justify-between items-center bg-slate-100 p-2'>

                            <td className="text-center">{recipe.recipe_name}</td>
                            <td className="text-center">{recipe.preparing_time} minutes</td>
                            <td className="text-center">{recipe.calories} calories</td>
                            <td><button onClick={() => handlecooking(recipe)} className="btn btn-success rounded-2xl text-black">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>)
            }


            <div className="mt-12 mb-3">
                <h1 className="font-bold text-2xl text-center mb-4">Currently cooking : {currentcook.length}</h1>
                <div className="border-t-2 border-slate-200 "></div>
                <table className="mt-4 text-slate-600">
                    <tr className="flex justify-around">
                        <th className="pl-12">Name</th>
                        <th className="pl-16">Time</th>
                        <th className="pl-8">Calories</th>
                    </tr>
                </table>
            </div>


            {
                currentcook.map(cookrecipe => <div key={cookrecipe.recipe_id} className="bg-slate-100">
                    <table className="p-4">
                        <tr>
                            <td className="p-2">1</td>
                            <td className="p-2">{cookrecipe.recipe_name}</td>
                            <td className="p-2 text-center">{cookrecipe.preparing_time} minutes</td>
                            <td className="p-2 text-center">{cookrecipe.calories} calories</td>
                        </tr>
                    </table>
                </div>)
            }

            <div className='font-medium text-lg text-slate-600 flex justify-evenly ml-6'>
                <p>Total Time = {timehandling()} minutes</p>
                <p>Total Calories = {calorihandling()} calories</p>
            </div>


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