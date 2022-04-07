import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

export default function Home() {
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
          <Header />
        </section>
        <section className={styles.content_wrapper}>
          <Menu />
          <CardList />
        </section>
      </main>
    </>
  );
}
