import Image from "next/image";
import styles from "../styles/Home.module.scss";

export const Card = ({
  apiUrl = "https://nextjs.org",
  apiUrlLabel = "API url",
  apiImgSource = "/api.",
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
              {/* <Image src={apiImgSource} alt="Logo" width={90} height={90} /> */}
              <img src="https://fakeimg.pl/90x90/"></img>
            </a>
          </div>
          <div className={styles.panel_description}>
            <p>
              dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed
              quia non numquam
            </p>
          </div>
        </section>
        <footer>
          <div className={styles.footer_header}>
            <span> Footer description </span>
          </div>
          <div className={styles.footer_versions}>
            <div className={styles.footer_date}>
              <span>2019-05-01 </span>{" "}
            </div>
            <div className={styles.footer_version}>
              <span>v 2.5.0-pre </span>
            </div>
          </div>
          <div className={styles.footer_action}>
            <div className={styles.download}>
              <svg width="18px" height="24px" >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
};
