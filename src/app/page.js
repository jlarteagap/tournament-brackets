import styles from './page.module.css'

import 'bulma/css/bulma.min.css'

import { Bracket } from './components/pairs/Braket'
export default function Home() {
  return (
    <main className={styles.main}>
      <Bracket />
    </main>
  )
}
