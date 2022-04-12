import { Card } from "./Card";
import styles from "../styles/Home.module.scss";
import Loader from "./Loader";
import Image from "next/image";
import { Search } from "./Search";

export const CardList = ({
  loading,
  apis,
  handleSearchByName,
  currentCategory,
}) => {
  return (
    <article className={styles.content_list_wrapper}>
      {!loading && (
        <div className={styles.search_wrapper}>
          <Search
            handleSearchByName={handleSearchByName}
            currentCategory={currentCategory}
          />
        </div>
      )}
      {!loading && apis.length > 0 && (
        <div className={styles.content_list}>
          {apis.map((api, index) => (
            <Card key={index} styles={styles} apiData={api} />
          ))}
        </div>
      )}

      <div className={styles.content_list_loader}>
        {loading && <Loader width="100px" height="100px" />}
        {!loading && !apis.length && (
          <div className={styles.no_content_search} >
            <Image
              src="/no-result-found.png"
              alt="no-result-found"
              width={40}
              height={40}
            />
            <p> Sorry, we couldn&#39;t find any results for your search</p>
          </div>
        )}
      </div>
    </article>
  );
};
