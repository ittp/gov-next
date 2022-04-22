import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Table } from 'antd';
import 'antd/dist/antd.css';

const PageAuth = (data) => {
  const { session, username, password } = data;
  return <div>Auth</div>;
};

export default function Home(config) {
  return (
    <div className={styles.container}>
      <PageAuth />
      <Head>
        <title>gov</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>title</h1>

        <p className={styles.description}>description</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>ittp / 2022</footer>
    </div>
  );
}
