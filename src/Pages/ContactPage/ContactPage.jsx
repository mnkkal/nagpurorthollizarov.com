import PageHeading from '../../Components/PageHeading';
import ContactSection from '../../Components/ContactSection';
import Section from '../../Components/Section';
import LocationMap from '../../Components/LocationMap/Index';

const headingData = {
  backgroundImage: '/assets/img/page_heading_bg.jpg',
  title: 'Contact ALRIC',
};

const contactData = {
  sectionSubtitle: 'CONTACT ALRIC',
  SectionTitle: 'Book an Appointment at<br />ALRIC — Advanced Limb Reconstruction Centre',
  teethShapeImg: 'assets/img/icons/hero_shape_3.png',
  contactImg: 'assets/img/slider_2.jpg',
  iconBox: {
    style: 'cs_style_4',
    icon: 'assets/img/icons/call_icon_1.png',
    title: 'Book Appointment',
    subtitle: 'Call +91 78880 96906',
  },
};

const mapData = {
  mapSrc:
    'https://maps.google.com/maps?q=Dew%20Medicare%20%26%20Trinity%20Hospital%20Nagpur&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

const ContactPage = () => {
  return (
    <>
      <Section className={'cs_page_heading cs_bg_filed cs_center'} backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>
    </>
  );
};

export default ContactPage;
