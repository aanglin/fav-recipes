import React, { useContext, useEffect, useState } from "react";
import RecipeCardData from "./RecipeCardData";
import {
  collection,
  deleteDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { authContext } from "@/lib/store/auth-context";

function RecipeCards() {
  const [recipe, setRecipe] = useState([]);
  const { user } = useContext(authContext);
  // Create function to get all recipes from Firestore to display on page and call it in useEffect
  const getRecipes = async () => {
    if (!user) return;
    const recipeRef = collection(db, "recipes");
    const q = query(recipeRef, where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const recipes = [];
    querySnapshot.forEach((doc) => {
      recipes.push({ ...doc.data(), id: doc.id });
    });
    setRecipe(recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

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