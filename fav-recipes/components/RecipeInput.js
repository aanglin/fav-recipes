"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { db, storage } from "../lib/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const RecipeInput = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    ingredients: "",
    instructions: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission logic here
    const recipeRef = collection(db, "recipes");
    const payload = {
      // uid: user.uid,
      title: recipe.title,
      category: recipe.category,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    };
    const docRef = await addDoc(recipeRef, payload);
    console.log("Document written with ID: ", docRef.id);
    const storageRef = ref(storage, `recipes/${docRef.id}`);
    uploadBytes(storageRef, recipe.image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("Uploaded a blob or file!");
        updateDoc(doc(db, "recipes", docRef.id), {
          image: url,
        });
      });
    });

    console.log(recipe);
    setRecipe({
      image: "",
      title: "",
      category: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <div className="container flex flex-col justify-center items-center max-w-2xl px-6 mx-auto my-1 text-[#fff] ">
      <h1 className="text-2xl text-center font-bold mb-1 mt-2">
        Add New Recipe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-xl p-5 m-2 text-silver "
      >
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border  p-2"
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full border p-2 text-[#000]"
          />
        </div>
        <div>
          <label htmlFor="title">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={recipe.category}
            onChange={handleChange}
            className="w-full border p-2 text-[#000]"
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="w-full border p-2  text-[#000]"
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="w-full border p-2 text-[#000]"
          />
        </div>
        <div className="flex">
          <button type="submit" className="btn btn-primary">
            Add Recipe
          </button>
          <Link href="/recipes">
            <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RecipeInput;
