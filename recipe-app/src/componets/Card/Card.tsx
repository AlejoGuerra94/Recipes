import styles from "./Card.module.scss";
import iconHeart from "../../assets/ic_heart.svg";
import iconPortion from "../../assets/svgviewer-dish.svg";
import iconTime from "../../assets/svgviewer-output.svg";
import iconDifficulty from "../../assets/svgviewer-chef.svg";
import IconStar from "../../assets/ic_star.svg";
import SvgIcon from "../NavBar/SvgComponent";
import CardItem from "../CardItem/CardItem";
import { IRecipe } from "../../types/recipes";

interface CardProps {
  recipes: IRecipe[];
}
const Card: React.FC<CardProps> = ({ recipes }) => {
  return (
    <div className={styles.contentCards}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={styles.contentCards__card}>
          <div className={styles.contentCards__card__cardDetails}>
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className={styles.img}
              />
            )}
            <div className={styles.contentCards__card__cardDetails__cardBody}>
              <h3 className={styles.titleCard}>{recipe.title}</h3>
              <div className={styles.cardItems}>
              <CardItem
                title="Tamaño de la porción"
                icon={iconPortion}
                text={recipe.portionSize}
              />
              <CardItem
                title="Tiempo de preparación "
                icon={iconTime}
                text={recipe.preparationTime}
              />
              <CardItem
                title="Dificultad"
                icon={iconDifficulty}
                text={recipe.difficulty}
              />
            </div>
              <div
                className={styles.cardFooter}
              >
                <div className={styles.footerItem}>
                  <SvgIcon src={IconStar} className={styles.svgMenu} />
                  <span>{recipe.aggregateLikes}</span>
                </div>
                <SvgIcon src={iconHeart} className={styles.svgMenu} />
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
