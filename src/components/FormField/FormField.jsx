import styles from "./styles.module.css";

export const FormField = ({ label, value, onChange, placeholder, type }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.control}>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
