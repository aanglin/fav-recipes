"use client";
import { useState, useContext, useEffect } from "react";

import { authContext } from "@/lib/store/auth-context";
import RecipeCards from '@/components/RecipeCards'
import RecipeInput from '@/components/RecipeInput'
import SignIn from '@/components/SignIn'


export default function Home() {
  const { user } = useContext(authContext);
  

  if (!user) {
    return <SignIn />
  }
  
  return (
   <RecipeInput />
  )
}
