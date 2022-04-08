import leftArrow from '../../assets/left_arrow.png';
import rightArrow from '../../assets/right_arrow.png';
import "./Banner.scss";

/**
 * @param {string} picture - Picture source 
 * @param {string} text
 * @param {boolean} isProductPageBanner - on product pages only should this be true, as it influences banner style
 * @param {boolean} scrollable - Allows changing displayed picture in accomodation page, when an accomodation has multiple pictures associated
 * @param {function} handleChange - Button click effect allowing to select either next or previous picture 
 * @returns 
 */
export const Banner = ({ picture, text, isProductPageBanner = false, scrollable = false, handleChange }) => {
  return (
    <div className={`banner`}>
      {scrollable && (
        <>
          <button type='button' aria-label="image précédente" onClick={() => handleChange(-1)} className="banner__button banner__button__left">
            <img src={leftArrow} alt='' style={{ width: "100%" }} />
          </button>
          <button type='button' aria-label="image suivante" onClick={() => handleChange(1)} className="banner__button banner__button__right">
            <img src={rightArrow} alt='' style={{ width: "100%" }} />
          </button>
        </>
      )}
      <img src={picture} alt='' className={`banner__img ${isProductPageBanner && 'banner__img--product'}`} />
      {text && <p className="banner__text">{text}</p>}
    </div >
  )
}