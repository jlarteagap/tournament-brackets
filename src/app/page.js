import styles from './page.module.css'

import 'bulma/css/bulma.min.css'

import { OrderBrackets } from './components/pairs/OrderPairs'
export default function Home() {
  return (
    <main className={styles.main}>
      <OrderBrackets />
    </main>
  )
}
