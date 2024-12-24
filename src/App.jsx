import './App.css'
import Calculations from './Components/Calculations/Calculations'
import Navbar from './Components/Navbar/Navbar'
import RecipeHeading from './Components/RecipeHeading/RecipeHeading'
import Recipes from './Components/Recipes/Recipes'
import Topbanner from './Components/Topbanner/Topbanner'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Topbanner></Topbanner>
      <RecipeHeading></RecipeHeading>
      <div className='flex max-w-7xl mx-auto mt-9 mb-6'>
        <Recipes></Recipes>
        <Calculations></Calculations>
      </div>
    </div>
  )
}

export default App
