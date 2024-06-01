import styles from "./styles.module.css";

export const Form = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form}>{children}</form>
    </div>
  );
};
