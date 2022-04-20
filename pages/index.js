import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { useAuthorization } from "../hooks/useAuthorization";
import { TenantInfo } from "../components/TenantInfo";
import Loader from "../components/Loader";

const transformApiData = (apiData) => {
  let preferred = apiData.preferred,
    api = apiData.versions[preferred],
    info = api.info,
    externalDocs = api.externalDocs || {},
    contact = info.contact || {},
    externalUrl = externalDocs.url || contact.url,
    logo = info["x-logo"] || {},
    added = new Date(apiData.added)
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" "),
    title = info.title,
    url = externalUrl,
    description = info.description,
    category = api.info["x-apisguru-categories"],
    version = preferred,
    swaggerUrl = api.swaggerUrl,
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
    swaggerUrl,
  };
};

export default function Home() {
  const [authorizing, error] = useAuthorization();
  const [apis, setApis] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [apiOfCategory, setApiOfCategory] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.apis.guru/v2/list.json")
      .then((response) => response.json())
      .then((json) => Object.values(json).map((api) => transformApiData(api)))
      .then((data) => {
        setApis(data);
        setApiOfCategory(data);
        let apiCategories = data
          .map((api) => api.category)
          .filter((c) => Boolean(c))
          .flat(Infinity)
          .sort();
        let categories = Array.from(new Set(apiCategories));
        setCategories(["all", ...categories]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (currentCategory === "all") {
      setApiOfCategory(apis);
      return;
    }

    let apisOfCategory = apis.filter((api) =>
      api?.category?.join(" ").includes(currentCategory)
    );

    setApiOfCategory(apisOfCategory);
  }, [currentCategory]);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  const handleSearchByName = (name) => {
    if (!name) {
      setCurrentCategory("all");
      setApiOfCategory(apis);
      return;
    }
    let apisOfName = apis.filter((api) => api?.title?.includes(name));
    setApiOfCategory(apisOfName);
  };

  if (authorizing)
    return (
      <div className={styles.main}>
        <Loader width="100px" height="100px" />
      </div>
    );

  if (error)
    return (
      <div className={styles.main}>
        <p> Authorization Error.....</p>
      </div>
    );

  return (
    <>
      <Head>
        <title>OAS-Directory</title>
        <meta name="description" content="OAS-Directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TenantInfo />
        {/* Headers section  */}
        <section className={styles.content_wrapper}>
          <Menu
            categories={categories}
            currentCategory={currentCategory}
            handleCategoryClick={handleCategoryClick}
          />
          <CardList
            loading={loading}
            apis={apiOfCategory}
            handleSearchByName={handleSearchByName}
            currentCategory={currentCategory}
          />
        </section>
      </main>
    </>
  );
}
