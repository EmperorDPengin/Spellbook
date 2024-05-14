import styles from './IntroBox.module.scss';

export default function IntroBox({ title, summary }) {
  return (
    <div className={styles.introBox}>
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  );
}