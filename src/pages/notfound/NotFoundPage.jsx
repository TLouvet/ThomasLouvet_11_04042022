import { Link } from 'react-router-dom';
import contents from '../../data/contents.json';
import './NotFoundPage.scss';


export const NotFoundPage = () => (
  <div className='notfound'>
    <h1 className='notfound__title'>{contents.notfound.title}</h1>
    <h2 className='notfound__subtitle'>{contents.notfound.subtitle}</h2>
    <Link to="/" className='notfound__link'>{contents.notfound.returnHome}</Link>
  </div>
);