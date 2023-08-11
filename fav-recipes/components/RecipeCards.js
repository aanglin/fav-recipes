import React from "react";

function RecipeCards() {
  // Create me a dummy recipe card with a title, image, category, ingredients, and instructions
  const recipe = {
    title: "Chicken Parmesan",
    image:
      "https://images.unsplash.com/photo-1621139563018-0710d6fb8de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxyZWNpcGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Dinner",
    ingredients: "Chicken, Parmesan, Tomato Sauce, Pasta",
    instructions:
      "Cook the chicken, add the sauce, add the cheese, bake, serve with pasta",
  };

  return (
    <div className="container max-w-2xl px-6 mx-auto my-48 text-[#fff]  ">
      <h1 className="text-2xl text-center font-extrabold text-white mb-12 mt-12">
        Favorite Recipes
      </h1>
      <div className="flex flex-col mb-56 m-3  overflow-hidden w-fit  bg-zinc-500 rounded-2x rounded-xl">
        <div className="h-96 ">
          <img
            className="object-cover w-full h-1/2 "
            src={recipe.image}
            alt="login"
          />
          <div className="">
            <h2 className="text-2xl text-center ">{recipe.title}</h2>
          </div>
          <h1 className="text-center font-bold">Ingredients:</h1>
          <ul>
            {recipe.ingredients.split(",").map((ingredient) => (
                <li className="text-center">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      ;
    </div>
  );
}

export default RecipeCards;
