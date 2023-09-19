import Image from "next/image";
import React, { useState } from "react";
import {
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { db, storage } from "../lib/firebase";
import { deleteObject, ref, } from "firebase/storage";


function RecipeCardData({ recipe }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState({ ...recipe });

  const deleteRecipe = async () => {
    const recipeRef = doc(db, "recipes",  recipe.id);
    await deleteDoc(recipeRef);

    // delete image from storage
    const storageRef = ref(storage, `recipes/${recipe.id}`);
    await deleteObject(storageRef);
  };

  const updateRecipe = async () => {
    const recipeRef = doc(db, "recipes", recipe.id);

    try {
      // Update the recipe data in Firestore
      await updateDoc(recipeRef, updatedRecipe);
      setIsEditing(false); // Exit edit mode after successful update
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({
      ...updatedRecipe,
      [name]: value,
    });
  };



  return (
    <div>
    <div className="flex flex-col m-3 overflow-hidden w-80 bg-zinc-500 rounded-2x rounded-xl">
      <div className="h-[30rem] overflow-y-auto">
        {isEditing ? (
          // Render input fields for editing
          <div  className="text-center text-lg m-5 p-1 text-black">
            <h2 className="text-[#fff]">Title</h2>
            <input
              type="text"
              name="title"
              value={updatedRecipe.title}
              onChange={handleInputChange}
              className="text-lg m-2 p-1 text-black"
            />
            <h2 className="text-[#fff]">Ingredients</h2>
            <textarea
              name="ingredients"
              value={updatedRecipe.ingredients}
              onChange={handleInputChange}
              className="text-center text-lg m-3 p-1 text-black"
            ></textarea>
            <h2 className="text-[#fff]">Instructions</h2>
            <textarea
              name="instructions"
              value={updatedRecipe.instructions}
              onChange={handleInputChange}
              className="text-center text-lg m-3 p-1 text-black"
            ></textarea>
            <button className="btn btn-primary" onClick={updateRecipe}>
              Save
            </button>
          </div>
        ) : (
          // Render recipe details
          <div>
            <Image
              className="object-cover overflow-hidden h-72"
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
        )}
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          className="btn btn-primary"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Update"}
        </button>
        <button className="btn btn-secondary" onClick={deleteRecipe}>
          Delete
        </button>
      </div>
    </div>
  </div>
  );
}

export default RecipeCardData;
