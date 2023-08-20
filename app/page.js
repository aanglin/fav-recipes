"use client";
import { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import RecipeInput from '@/components/RecipeInput'
import SignIn from "@/components/SignIn";



export default function Home() {
  const { user } = useContext(authContext);
  

  if (!user) {
    return <SignIn />
  }
  
  return (
   <RecipeInput />
    
  )
}
