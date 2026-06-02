import { FaWhatsapp, FaPhoneAlt, FaXRay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AlricStickyCta = () => {
  return (
    <div className="alric-sticky-cta">
      <Link
        to="https://wa.me/917888096906"
        target="_blank"
        rel="noopener noreferrer"
        className="alric-sticky-btn whatsapp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </Link>
      <Link to="tel:+917888096906" className="alric-sticky-btn call">
        <FaPhoneAlt />
        <span>Call</span>
      </Link>
      <Link to="/contact" className="alric-sticky-btn xray">
        <FaXRay />
        <span>Send X-ray</span>
      </Link>
    </div>
  );
};

export default AlricStickyCta;
