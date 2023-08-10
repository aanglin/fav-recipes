'use client';
import React, { useState } from 'react';

const RecipeInput = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(recipe);
  setRecipe({
    title: '',
    ingredients: '',
    instructions: '',
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-bold mb-12 mt-12">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4 text-xl p-5 m-5 text-silver ">
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
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="w-full border p-2 recipe-ingrediants text-[#000]"
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeInput;
