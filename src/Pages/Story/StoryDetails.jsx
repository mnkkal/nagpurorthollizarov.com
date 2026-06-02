import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { getStoryData } from './storiesData';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import { useEffect } from 'react';

const StoryDetails = () => {
  const { storyId } = useParams();
  const data = getStoryData(storyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [storyId]);

  if (!data) {
    return (
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={{ title: 'Story Not Found' }} />
      </Section>
    );
  }

  const headingData = { title: data.title };

  return (
    <>
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="70" bottomSpaceMd="120">
        <div className="container">
          <div className="mb-3">
            <Link to="/" className="cs_accent_color" style={{ fontWeight: 500 }}>
              <FaArrowLeft className="me-2" />Back to Home
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="cs_service_details_thumbnail mb-4">
                <img src={data.mainImage} alt={data.title} className="w-100 rounded-3" />
              </div>

              <div className="cs_service_details">
                <p className="cs_service_subtitle mb-1" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                  Patient Story
                </p>
                <h3 className="cs_service_heading">{data.title}</h3>
                <p className="cs_service_subtitle" style={{ fontSize: 16, color: 'var(--body-color)', marginBottom: 24 }}>
                  {data.subtitle}
                </p>

                {data.description.map((desc, i) => (
                  <p key={i} className="cs_service_subtitle">{desc}</p>
                ))}

                <div className="cs_height_20" />

                {data.sections.map((section, i) => (
                  <div key={i} className="cs_service_detail_item mb-4">
                    <h4 className="cs_service_detail_title">{section.title}</h4>
                    <p>{section.content}</p>
                  </div>
                ))}

                <div className="cs_height_20" />
                <div className="cs_about_iconbox">
                  <div className="cs_about_iconbox_icon cs_center">
                    <FaCheckCircle />
                  </div>
                  <p className="cs_about_iconbox_subtitle">
                    Result: <strong>{data.result}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cs_solution_content_wrapper cs_gray_bg cs_type_1 mb-4">
                <h3 className="cs_service_heading">More Patient Stories</h3>
                <ul className="cs_solution_links cs_style_2 cs_mp0">
                  {[
                    { id: 'complex-pelvic-fracture-reconstruction', title: 'Complex Pelvic Fracture Reconstruction' },
                    { id: 'total-knee-replacement-success', title: 'Total Knee Replacement Success' },
                    { id: 'ilizarov-limb-salvage-after-trauma', title: 'Ilizarov Limb Salvage After Trauma' },
                    { id: 'deformity-correction-genu-varum', title: 'Deformity Correction – Genu Varum' },
                  ].filter(s => s.id !== storyId).map((s, i) => (
                    <li key={i}>
                      <Link to={`/story/${s.id}`}>
                        <span className="cs_tab_link_icon_left cs_center">
                          <FaCheckCircle />
                        </span>
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs_blue_bg p-4 rounded-3 text-white text-center">
                <h4 className="text-white mb-3">Book a Consultation</h4>
                <div className="d-flex flex-column gap-3">
                  <div><FaMapMarkerAlt /> Dew Medicare & Trinity Hospital, Nagpur</div>
                  <div><FaPhoneAlt /> <a href="tel:+917888096906" style={{ color: '#fff' }}>+91 78880 96906</a></div>
                  <div>
                    <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1 cs_color_1" style={{ background: '#25D366', borderColor: '#25D366' }}>
                      <FaWhatsapp /> Book on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default StoryDetails;
