import axiosInstance from "../config/axios";

export const getRecipes = async (number: number = 4,includeNutrition:false) => {
  try {
    const response = await axiosInstance.get(`/recipes/random`, {
      params: {
        number: number, 
        includeNutrition: includeNutrition
      },
    });
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error; 
  }
};