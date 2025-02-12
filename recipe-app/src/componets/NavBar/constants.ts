import { cakes, carrots, fastFood, kidmenu, mainDishes, soup } from "../../assets";
import { MenuItemProps } from "./MenuItem";

export const menuItems: MenuItemProps[] = [
  {id: 1, children: "Home", href: "/Home" },
  { id: 2, children: "Vegetarianos", href: "/vegetarianos", icon: { src: carrots } },
  { id: 3, children: "Platos Principales", href: "/platosPrincipales", icon: { src: mainDishes }},
  { id: 4, children: "Tortas", href: "/tortas", icon: { src: cakes } },
  { id: 5, children: "Comida Rápida", href: "/comidaRapida", icon: { src: fastFood } },
  { id: 6, children: "Menú Niños", href: "/menuNiño", icon: { src: kidmenu } },
  { id: 7, children: "Sopas", href: "/sopas" , icon: { src: soup } },
];