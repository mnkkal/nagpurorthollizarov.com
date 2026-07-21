import { Link } from 'react-router-dom';
import { FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';

const AlricDoctor = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="alric-doctor-image">
              <img
                src="/assets/img/slider_1.jpg"
                alt="Dr. Nikhil S. Charde - ALRIC"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <div className="cs_section_heading cs_style_1 mb-4">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left" />
                MEET THE SURGEON
              </p>
              <h2 className="cs_section_title">
                Dr. Nikhil S. Charde
              </h2>
              <p className="alric-doctor-qual">
                M.B.B.S., D.Ortho.
              </p>
              <p className="alric-doctor-role">
                Consultant Orthopaedic Surgeon — Limb Reconstruction, Deformity Correction & Ilizarov Surgery
              </p>
            </div>
            <div className="alric-doctor-bio">
              <p>
                Dr. Nikhil S. Charde is a dedicated orthopaedic surgeon with advanced expertise in limb reconstruction,
                deformity correction and Ilizarov surgery. His practice at ALRIC is focused exclusively on complex
                reconstructive cases — nonunion, bone infection, limb salvage, knee preservation and limb lengthening.
              </p>
              <p>
                Trained at leading institutions and holding international fellowship experience, Dr. Charde combines
                evidence-based medicine with personalised patient care. He believes that every patient deserves a
                customised reconstruction plan and treats each case with precision, compassion and innovation.
              </p>
            </div>
            <div className="alric-doctor-testimonial">
              <FaQuoteLeft className="alric-quote-icon" />
              <p className="alric-doctor-quote">
                "We treat the patient — not just the X-ray. Every case is unique and deserves a personalised
                reconstruction plan. Our goal is to preserve limbs, restore function and improve quality of life."
              </p>
            </div>
            <div className="alric-doctor-cta">
              <Link to="/about" className="cs_btn cs_style_1 cs_color_2">
                Know More
              </Link>
              <Link to="https://wa.me/917888096906" target="_blank" className="cs_btn cs_style_1 cs_color_1">
                <FaWhatsapp /> Consult Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlricDoctor;
