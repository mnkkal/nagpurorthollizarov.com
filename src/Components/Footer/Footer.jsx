import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="cs_footer cs_blue_bg cs_white_color">
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_footer_highlight_navy">
              <div className="cs_footer_logo">
                <img src="/assets/img/logo.webp" alt="ALRIC – Advanced Limb Reconstruction & Ilizarov Centre" style={{maxWidth:220, height:'auto'}} />
              </div>
              <p className="alric-footer-tagline" style={{marginTop:16}}>
                Preserving Limbs. Restoring Lives.
              </p>
              <p className="alric-footer-desc">
                ALRIC — Advanced Limb Reconstruction & Ilizarov Centre. India's super-specialty institute for limb reconstruction, deformity correction, nonunion, bone infection, knee preservation, limb salvage and limb lengthening. Led by Dr. Nikhil S. Charde in Nagpur.
              </p>
              <div className="cs_social_btns cs_style_1">
                <Link to="https://www.youtube.com/@drnikhilcharde" target="_blank" className="cs_center"><FaYoutube /></Link>
                <Link to="https://www.instagram.com/dr.nikhilcharde" target="_blank" className="cs_center"><FaInstagram /></Link>
                <Link to="https://www.facebook.com/drnikhilcharde" target="_blank" className="cs_center"><FaFacebook /></Link>
                <Link to="https://wa.me/917888096906" target="_blank" className="cs_center"><FaWhatsapp /></Link>
              </div>
            </div>
          </div>

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Quick Links</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/service">Centres of Excellence</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Centres of Excellence</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                <li><Link to="/service">Limb Reconstruction</Link></li>
                <li><Link to="/service">Nonunion & Bone Loss</Link></li>
                <li><Link to="/service">Deformity Correction</Link></li>
                <li><Link to="/service">Knee Preservation (HTO/DFO)</Link></li>
                <li><Link to="/service">Ilizarov & Hexapod Surgery</Link></li>
                <li><Link to="/service">Limb Salvage</Link></li>
              </ul>
            </div>
          </div>

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Contact ALRIC</h2>
              <ul className="cs_footer_contact cs_mp_0">
                <li><FaMapMarkerAlt /> Dew Medicare & Trinity Hospital, Nagpur, Maharashtra</li>
                <li><FaPhoneAlt /> <a href="tel:+917888096906" style={{color:'#fff'}}>+91 78880 96906</a></li>
                <li><FaEnvelope /> <a href="mailto:drnikhilscharde@gmail.com" style={{color:'#fff'}}>drnikhilscharde@gmail.com</a></li>
              </ul>
              <div className="mt-3">
                <Link to="https://wa.me/917888096906" target="_blank" className="cs_btn cs_style_1 cs_color_1" style={{background:'#25D366', borderColor:'#25D366'}}>
                  <FaWhatsapp /> Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">
              &copy; {new Date().getFullYear()} ALRIC — Advanced Limb Reconstruction & Ilizarov Centre. All Rights Reserved.
            </p>
            <ul className="cs_footer_menu cs_mp_0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
