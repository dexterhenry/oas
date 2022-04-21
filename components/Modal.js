import styles from "../styles/Modal.module.scss";
import { handleImgError } from "./Card";

const Modal = ({ closeModal, modalData }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={closeModal} />
      <article className={styles.centered}>
        <section className={styles.modal}>
          <aside
            className={styles.brandContainer}
            style={{ backgroundColor: modalData?.logo.backgroundColor }}
          >
            <img
              src={modalData?.logo.url}
              alt="Logo"
              onError={handleImgError}
            />
          </aside>
          <div className={styles.modalContent}>
            <header>
              <a target="_blank" rel="noreferrer" href={modalData?.url}>
                <h5 className={styles.heading}>
                  {modalData?.title} <span>{modalData?.version} </span>
                </h5>
              </a>
              <div className={styles.headingDates}>
                <p>
                  <span> Added: </span>
                  {modalData?.added}
                </p>
                <p>
                  <span> Updated at: </span>
                  {modalData?.updated}
                </p>
                <p>
                  <span>{modalData?.category} </span>
                </p>
              </div>
            </header>
            <div className={styles.modalInfo}>
              <p>{modalData?.description}</p>
              <div className={styles.modalOpenApiInfo}>
                <header>
                  <h5>
                    OpenAPI:<span> {modalData?.openapiVer}</span>
                  </h5>
                </header>
                <div className={styles.modalInfoActions}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={modalData?.swaggerUrl}
                  >
                    JSON
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={modalData?.swaggerYamlUrl}
                  >
                    YAML
                  </a>
                  <a target="_blank" rel="noreferrer" href={modalData?.origUrl}>
                    Orig
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={modalData?.externalUrl}
                  >
                    Docs
                  </a>
                </div>

                <div className={styles.modalInfoTools}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={modalData?.tools?.swagger_ui}
                  >
                    Swagger UI
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={modalData?.tools?.swagger_editor}
                  >
                    Swagger Editor
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={modalData?.tools?.open_api_gui}
                  >
                    OpenAPI-GUI
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={modalData?.tools?.stoplight_elements}
                  >
                    <span>Stoplight Elements</span>
                  </a>
                </div>
              </div>
            </div>
            <footer>
              <div className={styles.actionsContainer}>
                <button className={styles.cancelBtn} onClick={closeModal}>
                  Go back
                </button>
              </div>
            </footer>
          </div>
        </section>
      </article>
    </>
  );
};

export default Modal;
