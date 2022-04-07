import { Card } from "./Card";
import styles from "../styles/Home.module.scss";

export const CardList = ({ loading, apis }) => {
  return (
    <article className={styles.content_list_wrapper}>
      <div className={styles.content_list}>
        {loading ? (
          <span> Loading .... </span>
        ) : (
          apis.map((api, index) => (
            <Card key={index} styles={styles} apiData={api} />
          ))
        )}
      </div>
    </article>
  );
};
