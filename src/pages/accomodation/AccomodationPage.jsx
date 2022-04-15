import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Banner } from "../../components/banner";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { Tag } from "../../components/tag";
import contents from '../../data/contents.json';
import fakeApi from '../../data/fakeApi.json';
import redStar from '../../assets/red_star.png';
import greyStar from '../../assets/grey_star.png';
import "./AccomodationPage.scss";

export const AccomodationPage = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const accomodation = fakeApi.find(accomodation => accomodation.id === id);
  const ratings = Array(5).fill(0).map((_, index) => index < Number(accomodation?.rating || 0) && 1);

  const pictures = accomodation?.pictures || [];
  const onlyCover = pictures.length === 1;
  const [displayedPicture, setDisplayedPicture] = useState(0);

  const handlePictureChange = (change) => {
    setDisplayedPicture(displayedPicture + change);
  }

  useEffect(() => {
    if (displayedPicture < 0) {
      setDisplayedPicture(pictures.length - 1);
    }
    else if (displayedPicture >= pictures.length) {
      setDisplayedPicture(0);
    }
  }, [displayedPicture, setDisplayedPicture, pictures.length]);

  useEffect(() => {
    window.scroll(0, 0);
    if (!accomodation) {
      navigate('/notfound');
    }
  }, [accomodation, navigate]);

  return (
    <>
      <Banner
        picture={pictures[displayedPicture]}
        isProductPageBanner
        scrollable={!onlyCover}
        handleChange={handlePictureChange}
        pictureNumber={pictures.length}
        currentPicture={displayedPicture}
      />

      <section id="information" className="accomodation__information">
        <div>
          <h1 className="accomodation__title">{accomodation?.title}</h1>
          <p className="accomodation__location">{accomodation?.location}</p>
          <div className="accomodation__tags">
            {accomodation?.tags.map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>

        <div className="accomodation__host">
          <div className="accomodation__host__info">
            <p className="accomodation__host__info__name">{accomodation?.host.name}</p>
            <img src={accomodation?.host.picture} alt='' className="accomodation__host__info__picture" />
          </div>
          <div className="flex">
            {ratings.map((rate, index) => (
              <img key={`star${index}`} src={rate === 1 ? redStar : greyStar} alt='' className="accomodation__rating" />
            ))}
          </div>
        </div>
      </section>

      <section className="accomodation__dropdown-section">
        <Dropdown title={contents.accomodation.title.description} text={accomodation?.description} />
        <Dropdown title={contents.accomodation.title.equipments} text={accomodation?.equipments} />
      </section>
    </>
  )
}