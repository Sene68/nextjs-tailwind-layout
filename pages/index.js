import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-Montserrat text-3xl font-bold underline">
          Tailwind Layouts
        </h1>

        <div className={styles.grid}>
          <Link href="/sidebar/brand">
            <a className={styles.card}>
              <h2 className='font-Montserrat font-bold'>Brand Sidebar &rarr;</h2>
            </a>
          </Link>
          <Link href="/sidebar/dark">
            <a className={styles.card}>
              <h2 className='font-Montserrat font-bold'>Dark Sidebar &rarr;</h2>
            </a>
          </Link>
          <Link href="/sidebar/light">
            <a className={styles.card}>
              <h2 className='font-Montserrat font-bold'>Light Sidebar &rarr;</h2>
            </a>
          </Link>
          <Link href="/stack/dark">
            <a className={styles.card}>
              <h2 className='font-Montserrat font-bold'>Dark Stack &rarr;</h2>
            </a>
          </Link>
          <Link href="/stack/light">
            <a className={styles.card}>
              <h2 className='font-Montserrat font-bold'>Light Stack &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
