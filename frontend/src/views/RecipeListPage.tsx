import { Dispatch, SetStateAction } from "react"
import Header from "../components/Header"


export const RecipeListPage = (props: {
  setLikedRecipes?:Dispatch<SetStateAction<any>> 
}) => {
  return (

    <>
    <Header selectedPage="recipes" fontSize={22} />
    </>
  )
}
