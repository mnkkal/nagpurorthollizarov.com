import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { getServiceData, getAllServiceIds } from './servicesData';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import { useEffect } from 'react';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const data = getServiceData(serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | ALRIC — Advanced Limb Reconstruction & Ilizarov Centre`;
    }
  }, [data]);

  if (!data) {
    return (
      <Section className={'cs_page_heading cs_bg_filed cs_center'} backgroundImage="/assets/img/service_trauma.jpg">
        <PageHeading data={{ title: 'Service Not Found' }} />
      </Section>
    );
  }

  const headingData = { title: data.title };

  return (
    <>
      <Section className={'cs_page_heading cs_bg_filed cs_center'} backgroundImage="/assets/img/service_trauma.jpg">
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="70" bottomSpaceMd="120">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-xl-4 col-lg-5">
              <div className="cs_solution_content_wrapper cs_gray_bg cs_type_1">
                <h3 className="cs_service_heading">Centres of Excellence:</h3>
                <ul className="cs_solution_links cs_style_2 cs_mp0">
                  {data.services.map((s, i) => (
                    <li key={i}>
                      <Link to={s.url}>
                        <span className="cs_tab_link_icon_left cs_center">
                          <i><FaCheckCircle /></i>
                        </span>
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details_thumbnail">
                <img src={data.mainImage} alt={data.title} />
              </div>
            </div>
          </div>

          <div className="cs_height_35 cs_height_lg_30" />
          <div className="cs_service_details">
            <h3 className="cs_service_heading">About {data.title}</h3>
            {data.description.map((d, i) => (
              <p key={i} className="cs_service_subtitle">{d}</p>
            ))}

            <div className="cs_height_35 cs_height_lg_30" />
            <div className="row cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_service_details_thumbnail">
                  <img src={data.additionalImage} alt={data.title} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_service_details_content">
                  {data.sections.slice(0, 2).map((section, i) => (
                    <div key={i} className="cs_service_detail_item">
                      <h4 className="cs_service_detail_title">{section.title}</h4>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="cs_height_45 cs_height_lg_30" />
            {data.sections.slice(2).map((section, i) => (
              <div key={i} className="cs_service_detail_item">
                <h4 className="cs_service_detail_title">{section.title}</h4>
                <p className="cs_service_subtitle">{section.content}</p>
              </div>
            ))}

            <div className="cs_height_35 cs_height_lg_30" />
            <div className="cs_about_iconbox">
              <div className="cs_about_iconbox_icon cs_center">
                <i><FaCheckCircle /></i>
              </div>
              <p className="cs_about_iconbox_subtitle">
                Why Choose Dr. Nikhil S. Charde?{' '}
                <Link to="https://wa.me/917888096906">Book a Consultation +</Link>
              </p>
            </div>

            <div className="row cs_gap_y_30 mt-3">
              {data.whyChoose.map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg p-3">
                    <div className="d-flex align-items-start gap-2">
                      <FaCheckCircle className="cs_accent_color" style={{ marginTop: 4, flexShrink: 0 }} />
                      <p className="mb-0" style={{ fontSize: 14 }}>{item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cs_height_35 cs_height_lg_30" />
            <div className="cs_blue_bg p-4 rounded-3 text-white text-center">
              <h4 className="text-white mb-3">Contact Dr. Nikhil S. Charde</h4>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <div><FaMapMarkerAlt /> Dew Medicare & Trinity Hospital, Nagpur</div>
                <div><FaPhoneAlt /> <a href="tel:+917888096906" style={{color:'#fff'}}>+91 78880 96906</a></div>
                <div>
                  <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1 cs_color_1" style={{background:'#25D366', borderColor:'#25D366'}}>
                    <FaWhatsapp /> Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export { getAllServiceIds };
export default ServiceDetails;
