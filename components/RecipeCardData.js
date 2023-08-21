import Image from "next/image";
import React from "react";

function RecipeCardData({ recipe }) {
  console.log(recipe);
  return (
    <div>
      <div className="flex flex-col m-3  overflow-hidden w-80  bg-zinc-500 rounded-2x rounded-xl">
        <div className="h-[30rem] overflow-y-auto">
          <Image
            className=" object-cover  overflow-hidden h-72   "
            src={recipe.image}
            alt="login"
            width={400}
            height={400}
            priority
          />
          <div className="">
            <h2 className="text-2xl text-center p-3 ">{recipe.title}</h2>
          </div>
          <h1 className="text-center font-bold underline">Ingredients:</h1>
          <ul className="recipe-ingredients">
            {recipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index} className="text-center">
                {ingredient}
              </li>
            ))}
          </ul>
          <h1 className="text-center font-bold underline ">Instructions:</h1>
          <ol className="recipe-instructions  p-2">
            {" "}
            {/* Use <ol> for ordered list */}
            {recipe.instructions.split(",").map((instruction, index) => (
              <li key={index} className="text-center">
                <span className="font-bold text-sm">{index + 1}.</span>{" "}
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeCardData;
