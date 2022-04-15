import { useState } from "react"
import down from '../../assets/down_arrow.png';
import up from '../../assets/up_arrow.png';
import './Dropdown.scss';

/**
 * @param {string} title - dropdown title
 * @param {string | array} text - text to display. If array, will be mapped by index 
 * @returns 
 */
export const Dropdown = ({ title, text }) => {
  const [isDropped, setDropped] = useState(false);

  const handleClick = () => {
    setDropped(isDropped ? false : true);
  }

  const isTextString = typeof text === 'string';

  return (
    <div className="dropdown__container">
      <div className="dropdown__uppercontainer" onClick={handleClick}>
        <p className="dropdown__text">{title}</p>
        <button type="button" aria-label="Accéder au texte associé" className="dropdown__button" >
          <img src={isDropped ? up : down} alt='' className="dropdown__arrow" />
        </button>
      </div>
      {isDropped && (
        <div className="dropdown__undercontainer">
          {isTextString &&
            <p className="dropdown__text">{text}</p>
          }
          {!isTextString &&
            text.map((elm, index) => (
              <p key={index} className="dropdown__text">{elm}</p>
            ))
          }
        </div>
      )}
    </div>
  )
}