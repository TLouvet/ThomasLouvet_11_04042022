import leftArrow from '../../assets/left_arrow.png';
import rightArrow from '../../assets/right_arrow.png';
import "./Banner.scss";

/**
 * @param {string} picture - Picture source 
 * @param {string} text
 * @param {boolean} isProductPageBanner - on product pages only should this be true, as it influences banner style
 * @param {boolean} scrollable - Allows changing displayed picture in accomodation page, when an accomodation has multiple pictures associated
 * @param {function} handleChange - Button click effect allowing to select either next or previous picture 
 * @param {number} pictureNumber - Size of picture array length when banner is displayed from accomodation page
 * @param {number} currentPicture - Index of current picture in the current accomodation pictures array
 * @returns 
 */
export const Banner = ({ picture, text, isProductPageBanner = false, scrollable = false, handleChange, pictureNumber, currentPicture }) => {
  return (
    <div className={`banner`}>
      {scrollable && (
        <>
          <button type='button' aria-label="image précédente" onClick={() => handleChange(-1)} className="banner__button banner__button__left">
            <img src={leftArrow} alt='' className='banner__selector' />
          </button>
          <button type='button' aria-label="image suivante" onClick={() => handleChange(1)} className="banner__button banner__button__right">
            <img src={rightArrow} alt='' className='banner__selector' />
          </button>
        </>
      )}
      <img src={picture} alt='' className={`banner__img ${isProductPageBanner && 'banner__img--product'}`} />
      {isProductPageBanner && <p className='banner__img__counter'>{currentPicture + 1}/{pictureNumber}</p>}
      {text && <p className="banner__text">{text}</p>}
    </div >
  )
}