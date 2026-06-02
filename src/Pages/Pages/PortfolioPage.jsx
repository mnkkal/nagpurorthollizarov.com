import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from 'react-icons/fa';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';

const headingData = { title: 'Case Studies' };

const caseStudies = [
  {
    id: 'ilizarov-limb-reconstruction',
    title: 'Ilizarov Limb Reconstruction',
    subtitle: 'Complex nonunion with bone defect treated with Ilizarov bone transport',
    imageSrc: '/assets/img/service_ilizarov.jpg',
    number: '01',
  },
  {
    id: 'deformity-correction-bow-legs',
    title: 'Deformity Correction – Bow Legs',
    subtitle: 'Bilateral high tibial osteotomy for genu varum correction',
    imageSrc: '/assets/img/service_deformity.jpg',
    number: '02',
  },
  {
    id: 'pelviacetabular-fracture-fixation',
    title: 'Pelviacetabular Fracture Fixation',
    subtitle: 'Complex pelvic fracture treated with advanced fixation techniques',
    imageSrc: '/assets/img/service_pelvic.jpg',
    number: '03',
  },
  {
    id: 'total-knee-replacement',
    title: 'Total Knee Replacement',
    subtitle: 'Advanced knee replacement for severe osteoarthritis with excellent outcome',
    imageSrc: '/assets/img/service_joint.jpg',
    number: '04',
  },
  {
    id: 'complex-trauma-reconstruction',
    title: 'Complex Trauma Reconstruction',
    subtitle: 'Open tibia fracture with bone loss managed with staged reconstruction',
    imageSrc: '/assets/img/service_trauma.jpg',
    number: '05',
  },
  {
    id: 'periatricular-fracture-fixation',
    title: 'Fracture Fixation – Periarticular',
    subtitle: 'Complex intra-articular fracture treated with anatomical reduction and plating',
    imageSrc: '/assets/img/service_fracture.jpg',
    number: '06',
  },
];

const PortfolioPage = () => {
  return (
    <>
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_left">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left" />
                OUR CASE STUDIES
              </p>
              <h2 className="cs_section_title">Clinical Cases & Surgical Outcomes</h2>
            </div>
            <div className="cs_section_heading_right">
              Explore real clinical cases treated by Dr. Nikhil S. Charde. These cases showcase advanced orthopaedic surgical outcomes including Ilizarov reconstruction, deformity correction, joint replacement, and complex trauma management.
            </div>
          </div>
          <div className="cs_height_50" />
        </div>
        <div className="container-fluide">
          <div className="cs_project_grid cs_style_1">
            {caseStudies.map((item) => (
              <div className="cs_project_item" key={item.id}>
                <div className="cs_card cs_style_5">
                  <div className="cs_card_thumbnail">
                    <img src={item.imageSrc} alt={item.title} />
                  </div>
                  <div className="cs_card_info_wrapper">
                    <div className="cs_card_index cs_white_color">{item.number}</div>
                    <div className="cs_card_text">
                      <h3 className="cs_card_title cs_white_color mb-0">
                        <Link to={`/case-study/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p className="cs_card_subtitle cs_white_color mb-0">{item.subtitle}</p>
                    </div>
                    <Link to={`/case-study/${item.id}`} className="cs_iconbox_btn cs_center">
                      <FaChevronCircleRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default PortfolioPage;
