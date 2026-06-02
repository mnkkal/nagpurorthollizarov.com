import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { getCaseStudyData } from './caseStudiesData';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import { useEffect } from 'react';

const CaseStudyDetails = () => {
  const { caseId } = useParams();
  const data = getCaseStudyData(caseId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseId]);

  if (!data) {
    return (
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={{ title: 'Case Study Not Found' }} />
      </Section>
    );
  }

  return (
    <>
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={{ title: data.title }} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="70" bottomSpaceMd="120">
        <div className="container">
          <div className="mb-3">
            <Link to="/case-studies" className="cs_accent_color" style={{ fontWeight: 500 }}>
              <FaArrowLeft className="me-2" />Back to Case Studies
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="cs_service_details_thumbnail mb-4">
                <img src={data.mainImage} alt={data.title} className="w-100 rounded-3" />
              </div>

              <p className="cs_service_subtitle mb-1" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                Case Study
              </p>
              <h3 className="cs_service_heading">{data.title}</h3>
              <p className="cs_service_subtitle" style={{ fontSize: 16, color: 'var(--body-color)', marginBottom: 24 }}>
                {data.subtitle}
              </p>

              {data.description.map((d, i) => (
                <p key={i} className="cs_service_subtitle">{d}</p>
              ))}

              <div className="cs_height_20" />

              {data.details.map((section, i) => (
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

            <div className="col-lg-4">
              <div className="cs_solution_content_wrapper cs_gray_bg cs_type_1 mb-4">
                <h3 className="cs_service_heading">More Case Studies</h3>
                <ul className="cs_solution_links cs_style_2 cs_mp0">
                  {[
                    { id: 'ilizarov-limb-reconstruction', title: 'Ilizarov Limb Reconstruction' },
                    { id: 'deformity-correction-bow-legs', title: 'Deformity Correction – Bow Legs' },
                    { id: 'pelviacetabular-fracture-fixation', title: 'Pelviacetabular Fracture Fixation' },
                    { id: 'total-knee-replacement', title: 'Total Knee Replacement' },
                    { id: 'complex-trauma-reconstruction', title: 'Complex Trauma Reconstruction' },
                    { id: 'periatricular-fracture-fixation', title: 'Periarticular Fracture Fixation' },
                  ].filter(s => s.id !== caseId).map((s, i) => (
                    <li key={i}>
                      <Link to={`/case-study/${s.id}`}>
                        <FaCheckCircle style={{ marginRight: 8, color: 'var(--accent-color)' }} />
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
                    <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1" style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}>
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

export default CaseStudyDetails;
