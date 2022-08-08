import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aprende a Programar con Esteban Dalel R</title>
        <meta
          name="description"
          content="Aprende desde cero a programar para la vida"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aprende a Programar con <wbr></wbr>
          <a href="https://estebandalelr.co">Esteban Dalel R</a>
        </h1>
        <p className={styles.description}>
          Aprende desde cero a programar para la vida
        </p>
        <Link href="inicio">
          <a className={styles.button}>Empieza ahora</a>
        </Link>
      </main>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};
export default Home;
