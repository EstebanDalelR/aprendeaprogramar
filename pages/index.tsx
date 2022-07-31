import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
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
        <Link href="consola">
          <a className={styles.a}>Empieza ahora</a>
        </Link>
      </main>


    </div>
  );
}
