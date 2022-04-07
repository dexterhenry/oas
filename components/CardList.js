import { Card } from "./Card";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

const transformApiData = (apiData) => {
  let preferred = apiData.preferred,
    api = apiData.versions[preferred],
    info = api.info,
    externalDocs = api.externalDocs || {},
    contact = info.contact || {},
    externalUrl = externalDocs.url || contact.url,
    logo = info["x-logo"] || {},
    added = new Date(apiData.added).toDateString(),
    title = info.title,
    url = externalUrl,
    description = info.description,
    category = api.info["x-apisguru-categories"],
    version = preferred,
    origUrl;

  api.info["x-origin"]
    ? (origUrl = api.info["x-origin"][0].url)
    : (origUrl = api.swaggerUrl);

  return {
    title,
    url,
    logo,
    description,
    category,
    version,
    added,
  };
};

export const CardList = () => {
  const [apis, setApis] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.apis.guru/v2/list.json")
      .then((response) => response.json())
      .then((json) => Object.values(json).map((api) => transformApiData(api)))
      .then((data) => {
        setApis(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

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
