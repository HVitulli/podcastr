import format from 'date-fns/format'
import enUS from 'date-fns/locale/en-US'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Header() {
    const currentDate = format(new Date(), 'EEE, d MMMM', {
        locale: enUS,
    })

    return(
        <>
            <header className={styles.headerContainer}>
                <Link href='/'>
                    <button type="button">
                        <img src="./logo.svg" alt="podcastr logo"/>
                    </button>
                </Link>
                

                <p>The best for you listen to, always</p>
                <span>{currentDate}</span>
            </header>
        </>
    )
}