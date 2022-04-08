import contents from '../../../data/contents.json';
import footerLogo from '../../../assets/footer_logo.png';
import './Footer.scss';

export const Footer = () => (
  <footer role='contentinfo' className='footer__container'>
    <div className='footer__picture'><img src={footerLogo} alt="Logo Kasa" /></div>
    <div>{contents.copyright}</div>
  </footer>
)