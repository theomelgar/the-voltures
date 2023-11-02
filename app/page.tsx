import styles from './page.module.css'
import Navbar from '../components/Navbar'
import Songs from '../components/Songs'
export default function Home() {
  return (
    <main className={styles.main}>
      <div >
        <Navbar></Navbar>
        <Songs></Songs>
      </div>
    </main>
  )
}
