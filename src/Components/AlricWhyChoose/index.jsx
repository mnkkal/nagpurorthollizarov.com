import { FaStar, FaLaptop, FaGraduationCap, FaUserMd, FaHandHoldingHeart, FaMicroscope, FaShieldAlt, FaHeartbeat } from 'react-icons/fa';

const reasons = [
  { icon: <FaStar />, title: 'Dedicated Super-specialty Practice', desc: 'Focused exclusively on limb reconstruction, deformity correction & limb salvage — not a general orthopaedic clinic.' },
  { icon: <FaLaptop />, title: 'Advanced Digital Deformity Planning', desc: 'Computer-assisted 3D planning & simulation for precise surgical execution using Hexapod & Ilizarov software.' },
  { icon: <FaGraduationCap />, title: 'International Fellowship Training', desc: 'Trained at leading international centres in limb reconstruction & deformity correction with global best practices.' },
  { icon: <FaUserMd />, title: 'Personalized Treatment Plans', desc: 'Every patient receives a custom-tailored reconstruction plan based on their unique anatomy, goals & lifestyle.' },
  { icon: <FaHandHoldingHeart />, title: 'Joint Preservation Whenever Possible', desc: 'Priority on biological reconstruction & joint preservation techniques before considering replacement surgery.' },
  { icon: <FaMicroscope />, title: 'Biological Reconstruction Techniques', desc: 'Using the body\'s natural healing potential with advanced bone grafting, membrane techniques & growth factors.' },
  { icon: <FaShieldAlt />, title: 'Limb Salvage Expertise', desc: 'Proven protocols for salvaging threatened limbs from complex trauma, infection & nonunion with staged reconstruction.' },
  { icon: <FaHeartbeat />, title: 'Comprehensive Rehabilitation', desc: 'Integrated physiotherapy & rehabilitation protocols for optimal functional recovery after reconstruction surgery.' },
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
                alt="Dr. Nikhil S. Charde - ALRIC Limb Reconstruction"
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
                India's Super-specialty Limb Reconstruction Institute
              </h2>
              <p className="mt-2">
                We treat the patient — not just the X-ray. Every case deserves a personalised reconstruction plan.
              </p>
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
