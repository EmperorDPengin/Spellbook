// src/pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fantasy Notebook</title>
      </Head>
      <h1>INDEX</h1>
      <input type="text" className="search-box" placeholder="Search pages..." />
      <ul>
        <li><Link href="/notes/lesson1"><a>Lesson 1: Introduction to Magic</a></Link></li>
        <li><Link href="/notes/lesson2"><a>Lesson 2: Advanced Potions</a></Link></li>
        <li><Link href="/notes/lesson3"><a>Mystical Creatures</a></Link></li>
      </ul>
    </div>
  );
}
