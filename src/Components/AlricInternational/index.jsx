import { Link } from 'react-router-dom';
import { FaPlane, FaVideo, FaClipboardList, FaHospital, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const services = [
  { icon: <FaVideo />, title: 'Online Consultation', desc: 'Video consultation with Dr. Nikhil Charde from anywhere in the world' },
  { icon: <FaClipboardList />, title: 'Treatment Planning', desc: 'Comprehensive treatment plan before your arrival in India' },
  { icon: <FaPlane />, title: 'Travel Assistance', desc: 'Visa guidance, airport pickup & accommodation coordination' },
  { icon: <FaHospital />, title: 'Rehab Planning', desc: 'Post-surgery rehabilitation protocols & physiotherapy support' },
];

const InternationalPatients = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="cs_section_heading cs_style_1 mb-4">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left" />
                INTERNATIONAL PATIENTS
              </p>
              <h2 className="cs_section_title">
                World-Class Limb Reconstruction Care for Global Patients
              </h2>
              <p className="mt-3" style={{ maxWidth: '500px' }}>
                ALRIC welcomes patients from across the globe seeking advanced limb reconstruction, 
                deformity correction & limb lengthening. We provide end-to-end support for your 
                medical journey to India.
              </p>
            </div>
            <div className="alric-intl-benefits">
              {services.map((s, i) => (
                <div className="alric-intl-benefit" key={i}>
                  <span className="alric-intl-icon">{s.icon}</span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="alric-intl-ctas mt-4">
              <Link to="https://wa.me/917888096906" target="_blank" className="cs_btn cs_style_1 cs_color_1 me-3">
                <FaWhatsapp /> WhatsApp Now
              </Link>
              <Link to="mailto:drnikhilscharde@gmail.com" className="cs_btn cs_style_1 cs_color_3">
                <FaEnvelope /> Email Us
              </Link>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="alric-intl-image">
              <img src="/assets/img/slider_2.jpg" alt="International patients - Dr. Nikhil Charde orthopaedic care" className="img-fluid rounded-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalPatients;
