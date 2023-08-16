import React from "react";
import RecipeCardData from "./RecipeCardData";

function RecipeCards() {
  // Create me an array of dummy recipe card with a title, image, category, ingredients, and instructions
  const recipe = [
    {
      title: "Chicken Parmesan",
      image:
        "https://images.unsplash.com/photo-1621139563018-0710d6fb8de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxyZWNpcGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Dinner",
      ingredients:
        "4pcs Chicken, 10oz Parmesan, 2-24oz cans Tomato Sauce, 1lb Pasta",
      instructions:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Chicken Parmesan",
      image:
        "https://images.unsplash.com/photo-1621139563018-0710d6fb8de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxyZWNpcGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Dinner",
      ingredients:
        "4pcs Chicken, 10oz Parmesan, 2-24oz cans Tomato Sauce, 1lb Pasta",
      instructions:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Chicken Parmesan",
      image:
        "https://images.unsplash.com/photo-1621139563018-0710d6fb8de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxyZWNpcGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Dinner",
      ingredients:
        "4pcs Chicken, 10oz Parmesan, 2-24oz cans Tomato Sauce, 1lb Pasta",
      instructions:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className="container flex flex-col justify-center items-center max-w-2xl px-6 mx-auto  text-[#fff]  ">
      <h1 className="text-2xl text-center font-extrabold mb-5 mt-12">
        Favorite Recipes
      </h1>
      <div className="flex  overflow-x-auto w-full h-full">
        <div className="flex flex-nowrap">
          {recipe.map((recipe, index) => (
            <RecipeCardData key={index} recipe={recipe} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default RecipeCards;
