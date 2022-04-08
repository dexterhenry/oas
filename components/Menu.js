import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

export const Menu = ({ categories }) => {
  useEffect(() => {
    console.log(categories[0])
  }, [categories])

  

  return (
    <aside className={styles.content_nav}>
      <ul>
        {   categories.map((category, index) => {
            console.log(category)
            return (
              <li key={index}>
                <a>{category}</a>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};
