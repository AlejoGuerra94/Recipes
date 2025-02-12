import Header from "../../componets/Header/Header";
import Card from "../../componets/Card/Card";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { IRecipe } from "../../types/recipes";
import { getRecipes } from "../../services/api";
import Footer from "../../componets/Footer/Footer";

const Home = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await getRecipes(4, false);
        const formattedRecipes = data.map((recipe: any) => ({
          id: recipe.id,
          image: recipe.image,
          title: recipe.title,
          aggregateLikes: recipe.aggregateLikes || 0,
          portionSize: `${recipe.servings} servings`,
          preparationTime: `${recipe.readyInMinutes} min`,
          difficulty: "Medium",
        }));
        setRecipes(formattedRecipes);
      } catch (error) {
        console.error("Error loading recipes:", error);
      }
    };

    loadRecipes();
  }, []);
  return (
    <div className={styles.content}>
      <Header />
      <h2 className={styles.subTitle}>Nuevas Recetas</h2>
      <Card recipes={recipes} />
      <Footer/>
    </div>
  );
};

export default Home;
