import { ReactNode } from "react";
import styles from "./CardItem.module.scss";

interface ICardItem {
  icon: string;
  text: string;
  title: ReactNode | string;
}

const CardItem: React.FC<ICardItem> = ({ icon, text, title }) => {
  return (
    <div className={styles.contentItem}>
      <img src={icon} alt="icon" className={styles.icon} />
      <span className={styles.title}>{title}</span>
      <span>{text}</span>
    </div>
  );
};

export default CardItem;
