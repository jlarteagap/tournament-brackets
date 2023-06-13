import styles from './page.module.css'

import 'bulma/css/bulma.min.css'

import { OrderPairs } from './components/pairs/OrderPairs'
export default function Home() {
  return (
    <main className={styles.main}>
      <OrderPairs />
    </main>
  )
}
