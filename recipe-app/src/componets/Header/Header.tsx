import styles from "./header.module.scss";
import banner from "../../assets/banner.png";
import Menu from "../NavBar/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__navBar}>
        <section className={styles.contentTitle}>
        <h1 className={styles.contentTitle__title}>
        Recipe<span className={styles.contentTitle__title2}>App</span>
      </h1>
        </section>
        <Menu />
      </div>
      <div className={styles.header__banner}>
        <img className={styles.img} src={banner} alt="banner" />
        <section className={styles.contentBanner}>
          <p className={styles.textBanner1}>Recetas </p>
          <p className={styles.textBanner2}>para todos</p>
        </section>
      </div>
    </div>
  );
};
export default Header;
