import { FaStar, FaUserMd, FaHospital, FaHandHoldingHeart, FaGlobeAsia, FaShieldAlt } from 'react-icons/fa';

const reasons = [
  { icon: <FaStar />, title: 'Leading Orthopaedic Surgeon', desc: 'Renowned orthopaedic surgeon in Nagpur with expertise in complex trauma, spine & joint replacement.' },
  { icon: <FaUserMd />, title: '15+ Years Experience', desc: 'Trained at IGGMC & Mayo Hospital, GMCH Nagpur with advanced expertise in Ilizarov & pelviacetabular surgery.' },
  { icon: <FaHospital />, title: 'Modern Facilities', desc: 'Services at Dew Medicare & Trinity Hospital with advanced operation theatres & imaging technology.' },
  { icon: <FaHandHoldingHeart />, title: 'Patient-Centered Care', desc: 'Every patient receives a tailored treatment plan for optimal recovery and restored mobility.' },
  { icon: <FaGlobeAsia />, title: 'Comprehensive Services', desc: 'Wide range of services from trauma care to joint replacement, spine surgery & deformity correction.' },
  { icon: <FaShieldAlt />, title: 'Proven Outcomes', desc: 'Consistently excellent surgical outcomes with thousands of satisfied patients across Central India.' },
];

const WhyChoose = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="alric-whychoose-image">
              <img
                src="/assets/img/slider_1.jpg"
                alt="Dr. Nikhil S. Charde - Orthopaedic Surgeon Nagpur"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <div className="cs_section_heading cs_style_1 mb-4">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left" />
                WHY CHOOSE ALRIC
              </p>
              <h2 className="cs_section_title">
                Why Patients Trust Dr. Nikhil S. Charde for Orthopaedic Care
              </h2>
            </div>
            <div className="row cs_gap_y_30">
              {reasons.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="alric-whychoose-card">
                    <div className="alric-whychoose-icon">{item.icon}</div>
                    <h3 className="alric-whychoose-title">{item.title}</h3>
                    <p className="alric-whychoose-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
