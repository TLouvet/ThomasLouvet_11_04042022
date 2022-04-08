import { Link } from 'react-router-dom';
import './Card.scss';

/**
 * 
 * @param {string} title
 * @param {string} picture 
 * @param {string} id - accomodation id in the json file / database 
 */
export const Card = ({ title, picture, id }) => (
  <Link to={`/accomodation/${id}`} className='card' aria-label={`A louer: ${title}`}>
    <img src={picture} alt={`A louer: ${title}`} className='card__img' />
    <p className='card__text'>{title}</p>
  </Link>
)