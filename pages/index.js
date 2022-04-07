import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { useEffect, useState } from "react";

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

export default function Home() {
  const [apis, setApis] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.apis.guru/v2/list.json")
      .then((response) => response.json())
      .then((json) => Object.values(json).map((api) => transformApiData(api)))
      .then((data) => {
        setApis(data);
        setCategories([{ all: data }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let categoryToFill = categories;
    apis.forEach((api) => {
      let apiCategories = api.category;
      if (!apiCategories) return;

      apiCategories.forEach((cat) => {
        categoryToFill[cat] ||= [];
        categoryToFill[cat].push(api);
      });
    });
    setCategories(setCategories);
  }, [apis]);

  return (
    <>
      <Head>
        <title>OAS-Directory</title>
        <meta name="description" content="OAS-Directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Headers section  */}
        <section className={styles.header}>
          <Header amount={apis.length} />
        </section>
        <section className={styles.content_wrapper}>
          <Menu categories={categories} />
          <CardList loading={loading} apis={apis} />
        </section>
      </main>
    </>
  );
}
