import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head className="spellbook">
        <title>spellbook</title>
      </Head>
      <div className="container">
        <h1 className={styles.indexTitle}>INDEX</h1>
        <input type="text" className="search-box" placeholder="Search pages..." />
        <ul>
          <li><Link href="./python/good_python_habits">5 Good Python Habits</Link></li>
        </ul>
      </div>
    </div>
  );
}
