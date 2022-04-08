import styles from "../styles/Home.module.scss";

export const Card = ({ apiData }) => {
  const { title, url, logo, description, category, version, added } = apiData;

  const handleImgError = (e) => (e.target.src = "https://api.apis.guru/v2/cache/logo/https_apis.guru_assets_images_no-logo.svg");

  return (
    <>
      <article className={styles.card}>
        <header>
          <a target="_blank" rel="noreferrer" href={url}>
            {title}
          </a>
        </header>
        <section>
          <div
            className={styles.panel_logo}
            style={{ backgroundColor: logo.backgroundColor }}
          >
            <a target="_blank" rel="noreferrer" href={url}>
              <img
                src={logo.url}
                alt="Logo"
                onError={handleImgError}
              />
            </a>
          </div>
          <div
            className={styles.panel_description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </section>
        <footer>
          <div className={styles.footer_header}>
            <span> {category} </span>
          </div>
          <div className={styles.footer_versions}>
            <div className={styles.footer_date}>
              <span>{added} </span>
            </div>
            <div className={styles.footer_version}>
              <span>{version} </span>
            </div>
          </div>
          <div className={styles.footer_action}>
            <div className={styles.download}>
              <svg width="18px" height="24px">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
};
