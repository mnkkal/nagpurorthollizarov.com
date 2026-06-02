import HeroSection from '../../Components/HeroSection';
import ConditionsGrid from '../../Components/AlricConditions';
import WhyChoose from '../../Components/AlricWhyChoose';
import Techniques from '../../Components/AlricTechniques';
import BeforeAfterGallery from '../../Components/AlricGallery';
import PatientStories from '../../Components/AlricStories';
import VideosSection from '../../Components/AlricVideos';
import InternationalPatients from '../../Components/AlricInternational';
import GoogleReviews from '../../Components/AlricReviews';
import BlogSection from '../../Components/BlogsSection';
import ContactSection2 from '../../Components/ContactSection/ContactSection2';
import Section from '../../Components/Section';
import AlricStickyCta from '../../Components/AlricStickyCta';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';

const heroData = {
  primarySlider: [
    {
      bgImageUrl: 'assets/img/slider_1.jpg',
      title: 'Expert Orthopaedic Care by <br>Dr. Nikhil S. <span>Charde</span>',
      contactSubtitle:
        'Leading orthopaedic surgeon in Nagpur specializing in complex trauma, Ilizarov surgery, joint replacement & spine surgery.',
      contactTitle: 'Consultation',
      contact: 'Call: +91 78880 96906',
      btnText1: 'WhatsApp Consultation',
      link: 'https://wa.me/917888096906',
      btnText2: 'Book Appointment',
      link2: '/contact',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
    {
      bgImageUrl: 'assets/img/slider_2.jpg',
      title: 'Ilizarov Surgery & <br>Limb <span>Reconstruction</span>',
      contactSubtitle:
        'Advanced Ilizarov & Hexapod techniques for complex deformity correction, nonunion treatment & bone transport.',
      contactTitle: 'Super-Speciality Care',
      contact: 'Call: +91 78880 96906',
      btnText1: 'Send X-ray',
      link: '/contact',
      btnText2: 'Learn More',
      link2: '/about',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
    {
      bgImageUrl: 'assets/img/slider_3.jpg',
      title: 'Joint Replacement & <br>Spine <span>Surgery</span>',
      contactSubtitle:
        'Advanced knee, hip & shoulder replacement with minimally invasive spine surgery for optimal recovery.',
      contactTitle: 'Expert Surgical Care',
      contact: 'Call: +91 78880 96906',
      btnText1: 'WhatsApp Consultation',
      link: 'https://wa.me/917888096906',
      btnText2: 'Our Services',
      link2: '/service',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
  ],
  secondarySlider: [
    'assets/img/slider_1.jpg',
    'assets/img/slider_2.jpg',
    'assets/img/slider_3.jpg',
  ],
};

const blogsData = {
  sectionTitle: 'BLOGS & ARTICLES',
  sectionSubtitle: 'Orthopaedic Health Resources by Dr. Nikhil S. Charde',
  postsData: [
    {
      title: 'Frozen Shoulder – Causes, Stages & Treatment',
      subtitle: 'Learn about frozen shoulder (adhesive capsulitis), its three stages and available treatment options.',
      date: 'Jun 16',
      category: 'Health',
      author: 'Dr. Nikhil Charde',
      thumbnail: '/assets/img/post_blog_1.jpg',
      btnText: 'Read More',
      postLink: '/blog/frozen-shoulder-causes-stages-treatment',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'PRP Therapy for Osteoarthritis Knee',
      subtitle: 'Revitalize your knees with Platelet-Rich Plasma therapy – a non-surgical option for pain relief.',
      date: 'Jun 16',
      category: 'Sport Medicine',
      author: 'Dr. Nikhil Charde',
      thumbnail: '/assets/img/post_blog_2.jpg',
      btnText: 'Read More',
      postLink: '/blog/prp-therapy-osteoarthritis-knee',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'Why Fractures Fail to Heal – Understanding Nonunion',
      subtitle: 'Learn about causes of nonunion and how Ilizarov bone transport can help achieve bone healing.',
      date: 'Jun 01',
      category: 'Nonunion',
      author: 'Dr. Nikhil Charde',
      thumbnail: '/assets/img/service_trauma.jpg',
      btnText: 'Read More',
      postLink: '/blog/why-fractures-fail-heal-nonunion',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'Bow Legs in Adults – Causes & Treatment Options',
      subtitle: 'Understanding genu varum in adults and when HTO or osteotomy is recommended.',
      date: 'May 28',
      category: 'Deformity',
      author: 'Dr. Nikhil Charde',
      thumbnail: '/assets/img/service_deformity.jpg',
      btnText: 'Read More',
      postLink: '/blog/bow-legs-adults-causes-treatment',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
  ],
};

const MainHome = () => {
  return (
    <>
      <section className="alric-hero">
        <HeroSection data={heroData} />
      </section>

      <section className="alric-ticker">
        <div className="container">
          <div className="alric-ticker-content">
            <span className="alric-ticker-label">Dr. Nikhil S. Charde</span>
            <div className="alric-ticker-text">
              <span>Orthopaedic Surgeon</span>
              <span className="sep">•</span>
              <span>Complex Trauma Care</span>
              <span className="sep">•</span>
              <span>Ilizarov Surgery</span>
              <span className="sep">•</span>
              <span>Joint Replacement</span>
              <span className="sep">•</span>
              <span>Deformity Correction</span>
              <span className="sep">•</span>
              <span>Spine Surgery</span>
              <span className="sep">•</span>
              <span>Pelviacetabular Surgery</span>
            </div>
          </div>
        </div>
      </section>

      <Section className="cs_gray_bg" topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <ConditionsGrid />
      </Section>

      <Section className="cs_gray_bg_2" topSpaceLg="70" topSpaceMd="50">
        <WhyChoose />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <Techniques />
      </Section>

      <Section className="cs_gray_bg" topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <BeforeAfterGallery />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <PatientStories />
      </Section>

      <Section className="cs_gray_bg" topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <GoogleReviews />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <VideosSection />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <InternationalPatients />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="50" bottomSpaceLg="80" bottomSpaceMd="50">
        <BlogSection data={blogsData} />
      </Section>

      <ContactSection2 />

      <section className="alric-final-cta">
        <div className="container">
          <div className="alric-final-cta-content" data-aos="fade-up">
            <h2>Ready to Restore Your Mobility?</h2>
            <p>Consult Dr. Nikhil S. Charde for expert orthopaedic care in Nagpur</p>
            <div className="alric-final-cta-buttons">
              <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1 cs_color_1">
                <FaWhatsapp /> WhatsApp Now
              </a>
              <a href="tel:+917888096906" className="cs_btn cs_style_1 cs_color_3">
                <FaPhone /> Call +91 78880 96906
              </a>
              <a href="/contact" className="cs_btn cs_style_1 cs_color_1">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <AlricStickyCta />
    </>
  );
};

export default MainHome;
