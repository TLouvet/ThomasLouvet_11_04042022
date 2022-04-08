import logo from '../../../assets/header_logo.png';
import './Header.scss';
import contents from '../../../data/contents.json';
import { Link, useMatch } from "react-router-dom";

export const Header = () => {
  const home = useMatch("/");
  const apropos = useMatch("/apropos");

  return (
    <header role="navigation" className='header'>
      <Link to='/'>
        <img src={logo} alt='logo Kasa' className='header__logo' />
      </Link>

      <nav>
        <ul className='header__navlist'>
          <li className={home && 'active'}>
            <Link to='/' className='header__navlist__item'>{contents.header.home}</Link>
          </li>
          <li className={apropos && 'active'}>
            <Link to='/apropos' className='header__navlist__item'>{contents.header.apropos}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}