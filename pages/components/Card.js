import Image from "next/image";
import styles from "../../styles/Home.module.scss";

export const Card = ({
  apiUrl = "https://nextjs.org",
  apiUrlLabel = "API url",
  apiImgSource = "/api."
}) => {
  return (
    <>
      <article className={styles.card}>
        <header>
          <a target="_blank" rel="noreferrer" href={apiUrl}>
            {apiUrlLabel}
          </a>
        </header>
        <section>
          <div className={styles.panel_logo}>
            <a target="_blank" rel="noreferrer" href={apiUrl}>
            <Image src={apiImgSource} alt="Logo" width={90} height={90} />
            </a>
          </div>
          <div  className={styles.panel_description}>
            <p> dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam  </p>
          </div>
        </section>
        <footer>
          <p> Footer </p>
        </footer>
      </article>
    </>
  );
};
