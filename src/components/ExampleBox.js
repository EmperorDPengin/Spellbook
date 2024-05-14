import styles from './ExampleBox.module.scss';

export default function ExampleBox({ example }) {
  return (
    <div className={styles.exampleBox}>
      <pre className='preCode'><code>{example}</code></pre>
    </div>
  );
}
