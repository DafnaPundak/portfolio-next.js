// import Link from "next/link";
import Head from "next/head";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dafna Pundak - portfolio | About</title>
        <link rel="icon" href="icons/favicon-D.ico" />
      </Head>
      {/* <main className={styles.main}> */}
      <img src="/images/profile.jpg" className={`${styles.headerHomeImage}`} />
      <h1>Hello,</h1>
      <h1>I am Dafna, a web developer, based in Tel Aviv.</h1>
      {/* </main> */}
    </div>
  );
}
