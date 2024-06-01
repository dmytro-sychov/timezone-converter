import styles from "./styles.module.css";

export const HeroHeader = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBody}>
        <h1 className={styles.title}>Welcome to the Timezones Converter!</h1>
        <h2 className={styles.subtitle}>
          This is a simple app to convert ISO GMT timestamps to a Date object
          with manual timezone offset.
        </h2>
      </div>
    </header>
  );
};
