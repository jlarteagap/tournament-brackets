import styles from './page.module.css'

import 'bulma/css/bulma.min.css'

import { GetAllParticipants } from './components/particpants/GetAllParticipants'
export default function Home() {
  return (
    <main className={styles.main}>
      <GetAllParticipants />
    </main>
  )
}
