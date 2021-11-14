import Header from './Header';
import Footer from './Footer';
import styles from './layout.module.css'

interface Props {
  children: Element
}

function Layout({children}:Props) {
  return (
    <div>
      <Header/>
        <div className={styles.container}>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout