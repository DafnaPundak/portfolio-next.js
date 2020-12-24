import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children, home }) {
  console.log(home);
  console.log(children);
  return (
    <div className={styles.body}>
      <Head>
        <title>Dafna Pundak - portfolio</title>
        <link rel="icon" href="icons/favicon-D.ico" />
      </Head>
      <div className={`${styles.navbar} ${styles.wnav}`}>
        <div className={styles.box}>
          <div className={styles.title}>
            <div className={styles.title1}>Dafna Pundak.</div>
            <div className={styles.title2}>Full-Stack Web Developer</div>
          </div>
          <Link href="/">
            <a className={home ? styles.logo : styles.upperboxlink}>Projects</a>
          </Link>
          <Link href="/about">
            <a className={styles.upperboxlink}>About</a>
          </Link>
          <a className={styles.upperboxlink} href="Dafna_Pundak_CV.pdf">
            CV
          </a>
        </div>
      </div>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a href="https://github.com/DafnaPundak" className={styles.logo}>
          <img src="/icons/github.svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/dafna-pundak/"
          className={styles.logo}
        >
          <img src="/icons/Linkedin icon.svg" />
        </a>
        <a
          href="https://www.facebook.com/dafna.mordechai/"
          className={styles.logo}
        >
          <img src="/icons/Facebook icon.svg" />
        </a>

        {/* <a href="https://twitter.com/DafnaPundak">
          <img src="/icons/twitter.ico" className={styles.logo} />
        </a> */}
        {/* <a href="https://www.instagram.com/dafnapundak/" className={styles.logo}>
          <img src="/icons/Instegram icon.svg"  />
        </a> */}
        <span className={styles.copyright}>© Dafna Pundak 2020</span>
      </footer>
    </div>
  );
}
