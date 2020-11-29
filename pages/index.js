import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dafna Pundak - portfolio</title>
        <link rel="icon" href="/favicon-D.ico" />
      </Head>
      <div id={styles.upperbox}>
        <h1 className={styles.title}>Dafna Pundak.</h1>
        <h className={styles.subtitle}>Fullstack Web Developer</h>
        <a className={styles.cv} href="/Dafna_pundak_FullStack_developer.pdf">
          <h4>CV</h4>
        </a>
      </div>
      <main className={styles.main}>
        <p className={styles.description}>My recent projects:</p>

        <div className={styles.grid}>
          <a
            href="https://bank-app-dafna.herokuapp.com/"
            className={styles.card}
          >
            <h3>D-bank &rarr;</h3>
            <p>
              Manage your money transactions, track your balance and plan future
              expenses.
            </p>
          </a>

          <a
            href="https://weather-app-dafna.herokuapp.com/"
            className={styles.card}
          >
            <h3>Weather App &rarr;</h3>
            <p>Check the weather in your next destination!</p>
            <br />
          </a>
        </div>
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
