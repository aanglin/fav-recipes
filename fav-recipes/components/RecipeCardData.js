import Link from 'next/link'
import React from 'react'

function RecipeCardData({ recipe }) {
  return (
    <div>
 <div className="flex flex-col m-3  overflow-hidden w-80  bg-zinc-500 rounded-2x rounded-xl">
    <div className="h-96 overflow-y-auto">
      <img
        className="object-cover w-full h-1/2 overflow-hidden  "
        src={recipe.image}
        alt="login"
      />
      <div className="">
        <h2 className="text-2xl text-center p-3 ">{recipe.title}</h2>
      </div>
      <h1 className="text-center font-bold underline">Ingredients:</h1>
      <ul className="recipe-ingredients">
        {recipe.ingredients.split(",").map((ingredient, index) => (
            <li key={index} className="text-center">{ingredient}</li>
        ))}
      </ul>
      <h1 className="text-center font-bold underline ">Instructions:</h1>
      <ol className="recipe-instructions  p-2"> {/* Use <ol> for ordered list */}
          {recipe.instructions.split(',').map((instruction, index) => (
            <li key={index} className="text-center">
              <span className="font-bold text-sm">{index + 1}.</span> {instruction}
            </li>
          ))}
        </ol>
    </div>
  </div>
  <Link href="/" className='flex justify-center items-center'>
  <button className="btn btn-primary ">Create Recipes</button>
  </Link>
    </div>
   
  )
}

export default RecipeCardData