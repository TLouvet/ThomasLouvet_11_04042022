import { Banner } from "../../components/banner";
import contents from '../../data/contents.json';
import bannerImg from '../../assets/home_banner.png';
import { Card } from '../../components/card';
import fakeApi from '../../data/fakeApi.json';
import './HomePage.scss';

export const HomePage = () => (
  <>
    <Banner text={contents.homeBannerText} picture={bannerImg} />
    <section className='cards' >
      {fakeApi.map(accomodation => (
        <Card key={accomodation.id} title={accomodation.title} picture={accomodation.cover} id={accomodation.id} />
      ))}
    </section>
  </>
);