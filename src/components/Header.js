import styles from './Header.module.scss';

export default function Header({ title, summary }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p}>{summary}</p>
    </div >
  );
}
