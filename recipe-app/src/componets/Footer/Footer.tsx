import styles from "./Footer.module.scss"
import footerImg from "../../assets/products.png"

const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <p className={styles.footer__textFooter}>Con el Patrocinio de</p>
            <img className={styles.footer__imgFooter} src={footerImg} alt="" />
        </footer>
    )

}

export default Footer;