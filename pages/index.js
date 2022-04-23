import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Table } from 'antd';
import 'antd/dist/antd.css';

export default function Home(config) {
  return (
    <div className={styles.container}>
      <Head>
        <title>gov</title>
      </Head>
      <main className={styles.main}>app</main>

      <footer className={styles.footer}>ittp / 2022</footer>
    </div>
  );
}
