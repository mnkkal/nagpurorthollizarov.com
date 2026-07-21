import { FaCheckCircle, FaQuoteLeft, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';

const headingData = { title: 'About ALRIC' };

const testimonials = [
  {
    name: 'Samruddhi Balpande',
    date: '2023-12-27',
    text: 'Gives Proper treatment & had great knowledge as an orthopaedic. Talks very gently. I will recommend to visit his hospital & you will surely get a proper treatment. Recently my lil brother got fractured his hand, Dr. Nikhil Charde had treated him very well so that my brother doesn\'t get afraid and completed his medication with less pain. Thank you Doctor.',
    rating: 5,
  },
  {
    name: 'Shashank Bandre',
    date: '2023-03-31',
    text: 'I went to Dr. Nikhil Charde because I was having swelling in my wrist after I met with an accident. Sir suggested me operation and operated my fractured wrist. Initially I really got scared and nervous but he has made me feel relaxed and comfortable during this overall treatment. I am very much happy with the type of services provided by sir. Thank You.',
    rating: 5,
  },
  {
    name: 'ISHAN !!',
    date: '2022-12-02',
    text: 'Dr. Nikhil Charde is very knowledgeable and very soft spoken and helping. He gave 2nd life to my mother by operating her and doing total hip replacement. She has no pain and able to walk again. Thankyou doctor.',
    rating: 5,
  },
  {
    name: 'Mayank Suchitra',
    date: '2022-11-06',
    text: 'Visited Dr. Nikhil Charde for my finger injury. Diagnosed with phalanx fracture after an x-ray. After proper investigations got operated and discharged same day. Doctor is kind and reliable. Happy with the treatment and counseling.',
    rating: 5,
  },
];

const AboutPage = () => {
  return (
    <>
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                <div className="cs_about_thumb_1">
                  <img src="/assets/img/slider_1.jpg" alt="Dr. Nikhil S. Charde" />
                </div>
                <div className="cs_experience_box cs_center">
                  <p className="cs_experience_box_number">15+</p>
                  <p className="cs_experience_box_title">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left" />
                ABOUT DR. NIKHIL S. CHARDE
              </p>
              <h2 className="cs_section_title">ALRIC — Advanced Limb Reconstruction & Ilizarov Centre</h2>
              <p style={{ marginTop: 20, lineHeight: 1.8, color: 'var(--body-color)' }}>
                ALRIC (Advanced Limb Reconstruction & Ilizarov Centre) is a super-specialty institute under the leadership of Dr. Nikhil S. Charde, dedicated exclusively to limb reconstruction, deformity correction, nonunion treatment, bone infection management, knee preservation, limb salvage and limb lengthening. We are committed to providing the highest standard of reconstructive orthopaedic care.
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--body-color)' }}>
                Dr. Charde brings extensive expertise and a compassionate approach, with advanced fellowship training and years of experience in managing the most complex orthopaedic cases. Our philosophy: <strong>We treat the patient — not just the X-ray.</strong>
              </p>
              <div className="cs_about_iconbox" style={{ marginTop: 20 }}>
                <div className="cs_about_iconbox_icon cs_center">
                  <FaCheckCircle />
                </div>
                <p className="cs_about_iconbox_subtitle">
                  <strong>M.B.B.S., D.Ortho.</strong> — Consultant Orthopaedics, Spine & Joint Replacement Surgeon
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bottomSpaceLg="80" bottomSpaceMd="120" className="cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <h3 className="cs_service_heading">Our Centres of Excellence</h3>
              <div className="row cs_gap_y_20 mt-3">
                {[
                  'Limb Reconstruction: Advanced Ilizarov & Hexapod techniques for complex bone defects & nonunion.',
                  'Deformity Correction: Precision computer-assisted correction of bow legs, knock knees & multi-planar deformities.',
                  'Knee Preservation (HTO/DFO): Joint-preserving osteotomies to delay or avoid knee replacement.',
                  'Limb Lengthening: Internal (Precice nail) & external techniques for height increase & limb discrepancy.',
                  'Bone Infection (Osteomyelitis): Multi-stage reconstruction for chronic bone infections.',
                  'Limb Salvage: Multi-disciplinary salvage for threatened limbs from trauma, infection & tumour.',
                ].map((item, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="d-flex align-items-start gap-2 p-3 cs_radius_10" style={{ background: '#fff', height: '100%' }}>
                      <FaCheckCircle className="cs_accent_color" style={{ marginTop: 4, flexShrink: 0 }} />
                      <p className="mb-0" style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="cs_service_heading">Our Philosophy</h3>
              <div className="cs_service_detail_item mt-3">
                <h4 className="cs_service_detail_title">Patient-Centered Reconstruction</h4>
                <p>At the heart of ALRIC is the belief that every patient deserves a personalised reconstruction plan. We treat the patient — not just the X-ray. Dr. Charde and his team take the time to listen, educate, and involve patients in their care decisions, ensuring they feel supported and informed throughout their treatment journey.</p>
              </div>
              <div className="cs_service_detail_item">
                <h4 className="cs_service_detail_title">Advanced Digital Planning</h4>
                <p>We utilize computer-assisted 3D deformity planning, Hexapod software simulation, and digital templating for every complex case. This ensures precision, minimizes complications, and delivers predictable outcomes for our patients.</p>
              </div>
              <div className="cs_service_detail_item">
                <h4 className="cs_service_detail_title">Comprehensive Care Pathway</h4>
                <p>From diagnosis to recovery, we provide comprehensive support at every stage — including pre-operative counselling, surgical planning, inpatient care, physiotherapy, and long-term follow-up to ensure optimal functional recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-6">
              <h3 className="cs_service_heading">Work Experience</h3>
              <ul className="cs_solution_links cs_style_2 cs_mp0 mt-3">
                {[
                  'IGGMC & Mayo Hospital, Nagpur',
                  'Trauma Care Centre GMCH, Nagpur',
                  'Govt. Medical College & Hospital, Nagpur',
                ].map((item, i) => (
                  <li key={i}>
                    <Link to="#">
                      <span className="cs_tab_link_icon_left cs_center"><FaCheckCircle /></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <h3 className="cs_service_heading">Specialities</h3>
              <ul className="cs_solution_links cs_style_2 cs_mp0 mt-3">
                {[
                  'Complex Trauma', 'Spine Surgery', 'Joint Replacement',
                  'ILIZAROV, JESS & LRS', 'Pelviacetabular Surgery', 'Deformity Correction',
                ].map((item, i) => (
                  <li key={i}>
                    <Link to="#">
                      <span className="cs_tab_link_icon_left cs_center"><FaCheckCircle /></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cs_height_45" />
          <h3 className="cs_service_heading">Membership</h3>
          <div className="row cs_gap_y_20 mt-3">
            {[
              'Association of Pelvis and Acetabular Surgeons of India (APASI)',
              'Bombay Orthopedic Society (B.O.S.)',
              'ASAMI',
              'Vidarbha Orthopedic Society (V.O.S.)',
              'Indian Medical Association (I.M.A.)',
              'Indian Orthopedic Society (I.O.S.)',
              'Maharashtra Orthopedic Society (M.O.S.)',
            ].map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="d-flex align-items-start gap-2 p-3 cs_gray_bg cs_radius_10" style={{ height: '100%' }}>
                  <FaCheckCircle className="cs_accent_color" style={{ marginTop: 4, flexShrink: 0 }} />
                  <p className="mb-0" style={{ fontSize: 14 }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bottomSpaceLg="80" bottomSpaceMd="120" className="cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center mb-5">
            <p className="cs_section_subtitle cs_accent_color">
              <span className="cs_shape_left" />
              TESTIMONIALS
              <span className="cs_shape_right" />
            </p>
            <h2 className="cs_section_title">What Our Patients Say</h2>
          </div>
          <div className="row cs_gap_y_30">
            {testimonials.map((t, i) => (
              <div className="col-lg-6" key={i}>
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_white_bg p-4" style={{ height: '100%' }}>
                  <FaQuoteLeft className="cs_accent_color" style={{ fontSize: 24, marginBottom: 12 }} />
                  <p style={{ fontSize: 14, lineHeight: 1.7, fontStyle: 'italic' }}>"{t.text}"</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <strong style={{ fontSize: 15 }}>{t.name}</strong>
                      <p className="mb-0" style={{ fontSize: 12, color: '#999' }}>{t.date}</p>
                    </div>
                    <div style={{ color: '#f5a623' }}>
                      {[...Array(Math.floor(t.rating))].map((_, j) => <FaStar key={j} style={{ fontSize: 14 }} />)}
                      {t.rating % 1 !== 0 && <FaStarHalfAlt style={{ fontSize: 14 }} />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="cs_blue_bg cs_bg_filed cs_center" backgroundImage="/assets/img/cta_bg_1.jpeg">
        <div className="container text-center py-5">
          <p className="cs_section_subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>BOOK APPOINTMENT</p>
          <h2 className="text-white" style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>
            Ready to Restore Your Mobility?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
            Preserving Limbs. Restoring Lives. Consult Dr. Nikhil S. Charde at ALRIC for advanced limb reconstruction, deformity correction & limb salvage.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1" style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}>
              <FaWhatsapp /> WhatsApp Now
            </a>
            <a href="tel:+917888096906" className="cs_btn cs_style_1" style={{ background: '#fff', borderColor: '#fff', color: '#0F2B46' }}>
              <FaPhoneAlt /> Call +91 78880 96906
            </a>
          </div>
        </div>
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        <div className="container text-center">
          <h3 className="cs_service_heading mb-4">Visit Us</h3>
          <div className="row justify-content-center cs_gap_y_30">
            <div className="col-md-6 col-lg-4">
              <div className="alric-contact-card">
                <FaMapMarkerAlt className="alric-contact-icon" />
                <h4>Address</h4>
                <p>Dew Medicare & Trinity Hospital<br />80-81, Hindustan Colony, Near Kothari Hospital, Wardha Road, Nagpur, Maharashtra 440015</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="alric-contact-card">
                <FaPhoneAlt className="alric-contact-icon" />
                <h4>Phone</h4>
                <a href="tel:+917888096906">+91 78880 96906</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="alric-contact-card">
                <FaWhatsapp className="alric-contact-icon" />
                <h4>WhatsApp</h4>
                <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer">+91 78880 96906</a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
