import { FaWhatsapp, FaPhoneAlt, FaXRay, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AlricStickyCta = () => {
  return (
    <div className="alric-sticky-cta">
      <a href="tel:+917888096906" className="alric-sticky-btn call">
        <FaPhoneAlt />
        <span>Call</span>
      </a>
      <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer" className="alric-sticky-btn whatsapp">
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
      <Link to="/appointments" className="alric-sticky-btn appointment">
        <FaCalendarAlt />
        <span>Appointment</span>
      </Link>
      <Link to="/contact" className="alric-sticky-btn xray">
        <FaXRay />
        <span>Send X-ray</span>
      </Link>
    </div>
  );
};

export default AlricStickyCta;
