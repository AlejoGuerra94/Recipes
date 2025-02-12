import useIsDesktop from "../utils/sizeWindow";
import { menuItems } from "./constants";
import MenuItem from "./MenuItem";
import styles from "./Nav.module.scss"

const Menu = () => {
  const isDesktop = useIsDesktop(); 
  const filteredMenuItems = menuItems.filter((item) => {
    if (item.id === 1 && isDesktop) {
      return false;
    }
    return true;
  });

  return (
    <div className={styles.menu}>
      {filteredMenuItems.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Menu;


