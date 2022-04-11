import { Card } from "./Card";
import styles from "../styles/Home.module.scss";
import Loader from "./Loader";
import Image from "next/image";

export const CardList = ({ loading, apis }) => {
  return (
    <article className={styles.content_list_wrapper}>
      {!loading && !apis.length && (
        <div className={styles.no_content_search}>
          <div>
            <Image src="/no-result-found.png" width={40} height={40} />
            <p> Sorry, we couldn&#39;t find any results for your search</p>
          </div>
        </div>
      )}

      {loading && (
        <div className={styles.content_list_loader}>
          <Loader width="100px" height="100px" />
        </div>
      )}
      {!loading && apis.length > 0 && (
        <div className={styles.content_list}>
          {apis.map((api, index) => (
            <Card key={index} styles={styles} apiData={api} />
          ))}
        </div>
      )}
    </article>
  );
};
