import { Card } from "./Card";
import styles from "../styles/Home.module.scss";
import Loader from "./Loader";

export const CardList = ({ loading, apis }) => {
  return (
    <article className={styles.content_list_wrapper}>
      <div className={styles.content_list}>
        {loading ? (
          <div className={styles.content_list_loader}>
            <Loader width="100px" height="100px" />
          </div>
        ) : (
          apis.map((api, index) => (
            <Card key={index} styles={styles} apiData={api} />
          ))
        )}
      </div>
    </article>
  );
};
