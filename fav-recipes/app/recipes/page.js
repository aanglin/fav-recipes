"use client";
import { useState, useContext, useEffect } from "react";
import { authContext } from "@/lib/store/auth-context";
import SignIn from '@/components/SignIn'
import RecipeCards from "@/components/RecipeCards";

function page() {
  const { user } = useContext(authContext);

  // if (!user) {
  //   return <SignIn />
  // }
  return (
    <>
    <RecipeCards />
   
    </>
  )
}

export default page