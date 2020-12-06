import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div id={styles.upperbox}>
        <h1 className={styles.title}>Dafna Pundak.</h1>
        <h className={styles.subtitle}>Fullstack Web Developer</h>
        <Link href="/about">
          <a className={styles.upperboxlink}>About</a>
        </Link>
        <Link href="/">
          <a className={styles.upperboxlink}>Projects</a>
        </Link>
        <div className={styles.aboutunderline}></div>
      </div>
      <main className={styles.main}>
        <img
          src="/images/profile.jpg"
          className={`${styles.headerHomeImage}`}
          // alt={name}
        />
        <h1>Hello,</h1>
        <h1>I am Dafna, a web developer, based in Tel Aviv.</h1>
        <a className={styles.cv} href="/Dafna_pundak_FullStack_developer.pdf">
          <h4>CV</h4>
        </a>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/DafnaPundak">
          <img src="/github.ico" alt="github Logo" className={styles.logo} />
        </a>
        <a href="https://www.linkedin.com/in/dafna-pundak-b7425219b/">
          <img src="/linkedin.ico" className={styles.logo} />
        </a>
        <a href="https://www.facebook.com/dafna.mordechai/">
          <img src="/facebook.ico" className={styles.logo} />
        </a>
        <a href="https://twitter.com/DafnaPundak">
          <img src="/twitter.ico" className={styles.logo} />
        </a>
        <a href="https://www.instagram.com/dafnapundak/">
          <img src="/instagram.ico" className={styles.logo} />
        </a>
        <span className={styles.copyright}>© Dafna Pundak 2020</span>
      </footer>
    </div>
  );
}
