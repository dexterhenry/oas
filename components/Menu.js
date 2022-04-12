import styles from "../styles/Home.module.scss";

export const Menu = ({ categories, currentCategory, handleCategoryClick }) => {
  return (
    <aside className={styles.content_nav}>
      <ul>
        {categories.map((category, index) => {
          let isActive = currentCategory === category;
          return (
            <li
              key={index}
              className={isActive ? styles.active_category : undefined}
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
