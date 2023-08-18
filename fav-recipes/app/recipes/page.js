"use client";
import { useState, useContext, useEffect } from "react";
import { authContext } from "@/lib/store/auth-context";
import SignIn from "@/components/SignIn";
import RecipeCards from "@/components/RecipeCards";
import Link from "next/link";

function page() {
  const { user } = useContext(authContext);

  if (!user) {
    return <SignIn />;
  }
  return (
    <>
      <RecipeCards />
      <Link href="/" className="flex justify-center items-center">
        <button className="btn btn-primary ">Create Recipes</button>
      </Link>
    </>
  );
}

export default page;
