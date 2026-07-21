import { useState, useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const ContactSection2 = () => {
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

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="cs_card cs_style_3 cs_gray_bg position-relative">
      <div className="cs_height_110 cs_height_lg_70"></div>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left"></span>CONTACT ALRIC
              </p>
              <h2 className="cs_section_title">Book an Appointment <br/>Send Your X-rays for Review</h2>
              <p className="mt-2 text-muted">Fill the form below and we will respond on WhatsApp. You can also send X-ray images directly via WhatsApp after submitting.</p>
            </div>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <form className="cs_contact_form row cs_gap_y_30 home_form_area" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <input type="text" name="name" className="cs_form_field" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" className="cs_form_field" placeholder="Your email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" name="subject" className="cs_form_field" placeholder="Your Subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" name="phone" className="cs_form_field" placeholder="Your phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="col-lg-12">
                <textarea rows="5" name="message" className="cs_form_field" placeholder="Your comments" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="cs_btn cs_style_1 cs_color_1">Send Request via WhatsApp</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="cs_solution_thumbnail cs_bg_filed" data-background="/assets/img/medical_solution_1.jpg">
            </div>
          </div>
        </div>
      </div>
      <div className="cs_solution_shape position-absolute">
        <img src="/assets/img/stethoscope.png" alt="Shape" />
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ContactSection2;
