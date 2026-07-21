import { useEffect, useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();

  const menu = {
    email: 'drnikhilscharde@gmail.com',
    location: 'Dew Medicare & Trinity Hospital, Nagpur',
    logoLink: '/',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Centres of Excellence', href: '/service' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    btnUrl: 'https://wa.me/917888096906',
    btnText: 'WhatsApp',
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky');
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show');
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 cs_sticky_header ${isSticky ? isSticky : ''}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <FaWhatsapp />
                      <Link to="https://wa.me/917888096906" target="_blank" style={{color:'#fff'}}>+91 78880 96906</Link>
                    </li>
                    <li>
                      <FaPhoneAlt />
                      <Link to="tel:+917888096906" style={{color:'#fff'}}>+91 78880 96906</Link>
                    </li>
                  </ul>
                </div>
                <div className="cs_top_header_right">
                  <FaLocationDot />
                  <span style={{marginLeft:5}}>Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={menu.logoLink}>
                  <img src="/assets/img/logo.webp" alt="Dr. Nikhil S. Charde" style={{height:50, width:'auto'}} />
                </Link>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_nav cs_primary_color">
                  <ul className={`cs_nav_list ${isShowMobileMenu && 'cs_active'}`}>
                    {menu.navItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href} onClick={() => setIsShowMobileMenu(false)}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${isShowMobileMenu && 'cs_toggle_active'}`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
                <Link to={menu.btnUrl} target="_blank" className="cs_btn cs_style_1 cs_color_1">
                  <FaWhatsapp />
                  <span>{menu.btnText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
