import styles from "./projects.module.css";

export default function Projects({ children }) {
  let home = true;
  console.log(home);
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <a href="https://bank-app-dafna.herokuapp.com/">
            <div className={styles.card1}>
              D-bank &rarr;
              <br />
              Manage your money transactions, track your balance and plan future
              expenses.
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://weather-app-dafna.herokuapp.com/">
            <div className={styles.card1}>
              Weather App &rarr;
              <br />
              Check the weather in your next destination!
            </div>
          </a>
        </div>
        <div>{(children, home)}</div>
      </div>
    </main>
  );
}
