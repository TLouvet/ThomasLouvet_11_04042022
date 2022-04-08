import { Banner } from "../../components/banner";
import bannerImg from '../../assets/apropos_banner.png';
import { Dropdown } from "../../components/dropdown/Dropdown";
import contents from '../../data/contents.json';

export const AproposPage = () => {

  const drops = [{
    title: contents.apropos.titles.fiability,
    text: contents.apropos.texts.fiability,
  }, {
    title: contents.apropos.titles.respect,
    text: contents.apropos.texts.respect,
  }, {
    title: contents.apropos.titles.service,
    text: contents.apropos.texts.service,
  }, {
    title: contents.apropos.titles.security,
    text: contents.apropos.texts.security,
  }];

  return (
    <>
      <Banner picture={bannerImg} />
      <section className="dropdown__section">
        {drops.map((entry, index) => (
          <Dropdown key={index} title={entry.title} text={entry.text} />
        ))}
      </section>
    </>
  )
}