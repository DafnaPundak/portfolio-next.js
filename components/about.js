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
      <div className={styles.section}>
        <img src="/images/profile.jpg" className={styles.image} />
        <div className={styles.text}>
          <div className={styles.text1}>
            Hello,
            <br />I am Dafna, a full-stack web developer, based in Tel Aviv.
          </div>
          <div className={styles.text2}>{/* need to write about myself */}</div>
        </div>
      </div>
    </div>
  );
}
