import { useState } from "react";
import SvgIcon, { SvgIconProps } from "./SvgComponent";
import styles from "./Nav.module.scss";
import useIsDesktop from "../utils/sizeWindow";

export interface MenuItemProps {
  id: number;
  children: string;
  href: string;
  icon?: SvgIconProps;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, children, href, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const isDesktop = useIsDesktop();

  return (
    <button
      key={id}
      className={styles.button}
      onClick={(e) => {
        e.preventDefault();
        setIsActive(!isActive);
      }}
    >
      {isDesktop && (
        <div className={styles.contentSvg}>{icon && <SvgIcon {...icon} className={styles.svgMenu}/>}</div>
      )}

      <a href={href} className={isActive ? styles.link__active : styles.link}>
        {children}
      </a>
    </button>
  );
};

export default MenuItem;
