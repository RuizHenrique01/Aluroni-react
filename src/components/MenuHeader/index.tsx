import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './MenuHeader.module.scss';
import { Link } from 'react-router-dom';

export default function MenuHeader() {
  const routes = [{
    label: 'Início',
    to: '/'
  },
  {
    label: 'Cardápio',
    to: '/menu'
  },
  {
    label: 'Sobre',
    to: '/about'
  }];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((item, index) => (
          <li key={index}  className={styles.menu__link}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}