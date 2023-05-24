import styles from './page.module.css'

import 'bulma/css/bulma.min.css'
import { CreateTournament } from './components/tournament/CreateTournament'
export default function Home() {
  return (
    <main className={styles.main}>
      <CreateTournament />
    </main>
  )
}
