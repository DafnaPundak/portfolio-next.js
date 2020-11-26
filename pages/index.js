import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dafna's Portfolio</title>
        <link rel="icon" href="/favicon-D.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my portfolio!</h1>

        <p className={styles.description}>
          <p>I am Dafna Pundak, a full-stack developer based in Tel Aviv.</p>
          <p>Take a look on my recent projects:</p>
        </p>

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
        <a
          href="https://github.com/DafnaPundak"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on{" "}
          <img src="/github-icon.ico" alt="github Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}
