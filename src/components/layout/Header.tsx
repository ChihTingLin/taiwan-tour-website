import {Link} from 'react-router-dom';
import styles from './layout.module.css';
import logo from '../../assets/landscape.png';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <Link className="logo" to={`${process.env.PUBLIC_URL}/`}>
        <img src={logo} alt={logo} width="24" height="24" />
      </Link>
      <nav className="nav">
        <Link to={`${process.env.PUBLIC_URL}/scenic-spots`} className="link">
          探索景點
        </Link>
      </nav>
    </header>
  );
}

export default Header;
