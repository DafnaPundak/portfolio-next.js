import styles from "./projects.module.css";

export default function Projects({ children }) {
  let home = true
  console.log(home)
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a href="https://bank-app-dafna.herokuapp.com/" className={styles.card}>
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
        <div>{children, home}</div>
      </div>
    </main>
  );
}
