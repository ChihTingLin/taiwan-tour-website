import {Link} from 'react-router-dom';
import styles from './layout.module.css';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className="logo">
        <img src="" />
      </div>
      <nav className="nav">
        <Link to="/attractions" className="link">
          探索景點
        </Link>
      </nav>
    </header>
  );
}

export default Header;
