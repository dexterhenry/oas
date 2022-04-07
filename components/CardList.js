import { Card } from "./Card";
import styles from "../styles/Home.module.scss";

export const CardList = () => {
  return (
    <article className={styles.content_list_wrapper}>
      <div className={styles.content_list}>
        {[...Array(16).keys()].map((i) => (
          <Card key={i} styles={styles} />
        ))}
      </div>
    </article>
  );
};
