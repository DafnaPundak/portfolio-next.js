import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dafna Pundak - portfolio</title>
        <link rel="icon" href="/favicon-D.ico" />
      </Head>
      <div id={styles.upperbox}>
        <h1 className={styles.title}>Dafna Pundak.</h1>
        <h className={styles.subtitle}>Fullstack Web Developer</h>
        <a
          className={styles.upperboxlink}
          href="/Dafna_pundak_FullStack_developer.pdf"
        >
          CV
        </a>
        <Link href="/about">
          <a className={styles.upperboxlink}>About</a>
        </Link>
        <Link href="/">
          <a className={styles.upperboxlink}>Projects</a>
        </Link>
      </div>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a href="https://github.com/DafnaPundak">
          <img
            src="/icons/github.ico"
            alt="github Logo"
            className={styles.logo}
          />
        </a>
        <a href="https://www.linkedin.com/in/dafna-pundak/">
          <img src="/icons/linkedin.ico" className={styles.logo} />
        </a>
        <a href="https://www.facebook.com/dafna.mordechai/">
          <img src="/icons/facebook.ico" className={styles.logo} />
        </a>
        <a href="https://twitter.com/DafnaPundak">
          <img src="/icons/twitter.ico" className={styles.logo} />
        </a>
        <a href="https://www.instagram.com/dafnapundak/">
          <img src="/icons/instagram.ico" className={styles.logo} />
        </a>
        <span className={styles.copyright}>© Dafna Pundak 2020</span>
      </footer>
    </div>
  );
}
