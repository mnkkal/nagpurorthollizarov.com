import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa6';
import { BsArrowRight } from 'react-icons/bs';

const AlricHero = () => {
  return (
    <section className="alric-hero">
      <div className="alric-hero-bg">
        <img src="/assets/img/hero_slider_5.jpg" alt="Advanced Limb Reconstruction Surgery at ALRIC" />
        <div className="alric-hero-overlay" />
      </div>
      <div className="alric-hero-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="alric-hero-text" data-aos="fade-up">
                <span className="alric-hero-badge">Central India's Super-Speciality Centre</span>
                <h1 className="alric-hero-title">ALRIC</h1>
                <p className="alric-hero-subtitle-lg">
                  Advanced Limb Reconstruction & Ilizarov Centre
                </p>
                <p className="alric-hero-desc">
                  Specialized centre for deformity correction, nonunion, limb salvage,
                  knee preservation & advanced limb lengthening surgery.
                </p>
                <div className="alric-hero-tags">
                  <span>Limb Reconstruction</span>
                  <span>Deformity Correction</span>
                  <span>Nonunion</span>
                  <span>Ilizarov Surgery</span>
                  <span>Knee Preservation</span>
                  <span>Limb Lengthening</span>
                </div>
                <div className="alric-hero-buttons">
                  <Link
                    to="https://wa.me/917888096906"
                    target="_blank"
                    className="cs_btn cs_style_1 cs_color_1"
                  >
                    <FaWhatsapp /> WhatsApp Consultation
                  </Link>
                  <Link to="/contact" className="cs_btn cs_style_1 cs_color_3">
                    <span>Send X-ray</span>
                  </Link>
                  <Link to="/appointments" className="cs_btn cs_style_1 alric-btn-outline">
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block" data-aos="fade-left">
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
