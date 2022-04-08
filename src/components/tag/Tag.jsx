import './Tag.scss';

/** 
 * @param {string} tag - text to display 
 * @returns 
 */
export const Tag = ({ tag }) => (
  <div className='tag'>
    <p className='tag__text'>{tag}</p>
  </div>
);