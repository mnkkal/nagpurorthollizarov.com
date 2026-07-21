import { Link } from 'react-router-dom';
import { FaWhatsapp, FaXRay, FaVideo, FaGlobe } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const AlricHero = () => {
  return (
    <section className="alric-hero">
      <div className="alric-hero-bg">
        <img src="/assets/img/hero_slider_5.jpg" alt="ALRIC – Advanced Limb Reconstruction Centre" />
        <div className="alric-hero-overlay" />
      </div>
      <div className="alric-hero-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="alric-hero-text" data-aos="fade-up">
                <span className="alric-hero-badge">ALRIC</span>
                <p className="alric-hero-institute">
                  Advanced Limb Reconstruction & Ilizarov Centre
                </p>
                <h1 className="alric-hero-title">
                  Advanced Limb Reconstruction for Complex Problems
                </h1>
                <p className="alric-hero-desc">
                  Specialized care for Nonunion, Bone Infection, Deformity Correction, Knee Preservation, Limb Salvage and Limb Lengthening.
                </p>
                <p className="alric-hero-tagline">Preserving Limbs. Restoring Lives.</p>
                <div className="alric-hero-buttons">
                  <Link to="/appointments" className="cs_btn cs_style_1 cs_color_1 cs_primary_btn">
                    Book Appointment
                  </Link>
                  <Link to="/contact" className="cs_btn cs_style_1 cs_color_3 cs_secondary_btn">
                    <FaXRay /> Send X-rays
                  </Link>
                  <Link to="https://wa.me/917888096906" target="_blank" className="cs_btn cs_style_1 alric-btn-outline">
                    <FaVideo /> Online Consultation
                  </Link>
                  <Link to="/contact" className="cs_btn cs_style_1 alric-btn-gold">
                    <FaGlobe /> International Patients
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block" data-aos="fade-left">
              <div className="alric-hero-card">
                <div className="alric-hero-card-icon">
                  <FaWhatsapp />
                </div>
                <h3>Instant Consultation</h3>
                <p>Connect with Dr. Nikhil Charde on WhatsApp for quick query resolution</p>
                <Link to="https://wa.me/917888096906" target="_blank" className="alric-hero-card-btn">
                  Chat Now <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="alric-hero-scroll">
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default AlricHero;
