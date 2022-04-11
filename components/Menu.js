import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

export const Menu = ({ categories, currentCategory, handleCategoryClick }) => {
  useEffect(() => {
    console.log(categories[0]);
  }, [categories]);

  return (
    <aside className={styles.content_nav}>
      <ul>
        {categories.map((category, index) => {
          console.log(category);
          let isActive = currentCategory === category;
          return (
            <li
              key={index}
              className={isActive && styles.active_category}
              onClick={() => handleCategoryClick(category)}
            >
              <a>{category}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
