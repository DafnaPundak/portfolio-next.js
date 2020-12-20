// import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      {/* <main className={styles.main}> */}
        <img
          src="/images/profile.jpg"
          className={`${styles.headerHomeImage}`}
        />
        <h1>Hello,</h1>
        <h1>I am Dafna, a web developer, based in Tel Aviv.</h1>
      {/* </main> */}
    </div>
  );
}
