import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aprende a Programar con Esteban Dalel R</title>
        <meta name="description" content="Aprende desde cero a programar para la vida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Aprende a Programar con <a href="https://estebandalelr.co">Esteban Dalel R</a>
        </h1>

      </main>


    </div>
  )
}
