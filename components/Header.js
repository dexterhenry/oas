import Image from "next/image";
import styles from "../styles/Home.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1> OpenAPI Directory </h1>
      <h4> Documentation and Test Consoles for Over 1400 Public APIs</h4>
      <p>
        Powered by
        <a target="_blank" rel="noreferrer" href="http://apis.guru">
          APIs Guru
          <span className={styles.logo}>
            <Image src="/logoApp guru.svg" alt="APIs Guru Logo" width={20} height={20} />
          </span>
        </a>
      </p>
    </div>
  );
};
