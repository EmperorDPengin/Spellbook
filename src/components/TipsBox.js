import styles from './TipsBox.module.scss';

export default function TipsBox({ tips }) {
  return (
    <div className={styles.tipsBox}>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
