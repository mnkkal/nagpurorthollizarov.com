import { useState } from "react";
import SectionHeading from "../SectionHeading";

const ContactSection = ({ data, reverseOrder }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', phone: '', message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/917888096906?text=${text}`, '_blank');
  };

  const renderForm = () => (
    <form className="cs_contact_form row cs_gap_y_30" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <input type="text" className="cs_form_field" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="col-md-6">
        <input type="email" className="cs_form_field" placeholder="Your email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="col-md-6">
        <input type="text" className="cs_form_field" placeholder="Your Subject" name="subject" value={formData.subject} onChange={handleChange} required />
      </div>
      <div className="col-md-6">
        <input type="text" className="cs_form_field" placeholder="Your phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="col-lg-12">
        <textarea rows={5} className="cs_form_field" placeholder="Your comments" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <div className="col-lg-12">
        <button type="submit" className="cs_btn cs_style_1 cs_color_1">
          Send Request via WhatsApp
        </button>
      </div>
    </form>
  );

  return (
    <div className="container">
      <div className="row cs_gap_y_30">
        {reverseOrder ? (
          <>
            <div className="col-lg-6">
              <div className="cs_contact_thumbnail cs_pl-40">
                <div className="cs_teeth_shape">
                  <img src={data.teethShapeImg} alt="Teeth Shape" className="cs_spinner_img" />
                </div>
                <div className="cs_contact_img">
                  <img src={data.contactImg} alt="Contact" />
                </div>
                <div className="cs_contact_bg_shape">
                  <div className="cs_white_bg_shape" />
                  <div className={`cs_iconbox ${data.iconBox.style}`}>
                    <div className="cs_iconbox_icon cs_center">
                      <img src={data.iconBox.icon} alt="Icon" />
                    </div>
                    <div className="cs_iconbox_right">
                      <h3 className="cs_iconbox_title">{data.iconBox.title}</h3>
                      <p className="cs_iconbox_subtitle mb-0">{data.iconBox.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <SectionHeading SectionSubtitle={data.sectionSubtitle} SectionTitle={data.SectionTitle} />
              <div className="cs_height_25 cs_height_lg_25" />
              {renderForm()}
            </div>
          </>
        ) : (
          <>
            <div className="col-lg-6">
              <SectionHeading SectionSubtitle={data.sectionSubtitle} SectionTitle={data.SectionTitle} />
              <div className="cs_height_25 cs_height_lg_25" />
              {renderForm()}
            </div>
            <div className="col-lg-6">
              <div className="cs_contact_thumbnail cs_pl-40">
                <div className="cs_teeth_shape">
                  <img src={data.teethShapeImg} alt="Teeth Shape" className="cs_spinner_img" />
                </div>
                <div className="cs_contact_img">
                  <img src={data.contactImg} alt="Contact" />
                </div>
                <div className="cs_contact_bg_shape">
                  <div className="cs_white_bg_shape" />
                  <div className={`cs_iconbox ${data.iconBox.style}`}>
                    <div className="cs_iconbox_icon cs_center">
                      <img src={data.iconBox.icon} alt="Icon" />
                    </div>
                    <div className="cs_iconbox_right">
                      <h3 className="cs_iconbox_title">{data.iconBox.title}</h3>
                      <p className="cs_iconbox_subtitle mb-0">{data.iconBox.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
