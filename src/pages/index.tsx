import type {NextPage} from 'next'
import Head from 'next/head'
import {useTranslation} from "react-i18next";
import "../translations/i18n";
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <Head>
                <title>{t('pageTitle')}</title>
                <meta name="description" content={t('pageTitle')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>{t('encrypt')} &rarr; </h2>
                        <form action="/api/encrypt" method="POST" encType="multipart/form-data">
                            <label htmlFor="encrypt" className="upload">
                                <input type="file" id="encrypt" name="file" multiple={false} required />
                            </label>
                            <input type="text" className="input" name="secret" placeholder={t('enterPassword')} required />
                            <button type="submit" className="button">{t('encrypt')}</button>
                        </form>
                    </div>

                    <div className={styles.card}>
                        <h2>{t('decrypt')} &rarr; </h2>
                        <form action="/api/decrypt" method="POST" encType="multipart/form-data">
                            <label htmlFor="decrypt" className="upload">
                                <input type="file" id="decrypt" name="file" multiple={false} required />
                            </label>
                            <input type="text" className="input" name="secret" placeholder={t('enterPassword')} required />
                            <button type="submit" className="button">{t('decrypt')}</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
