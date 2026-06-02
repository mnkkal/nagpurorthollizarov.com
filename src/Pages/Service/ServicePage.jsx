import PageHeading from '../../Components/PageHeading';
import Service from '../../Components/Service';
import Section from '../../Components/Section';

const headingData = {
  title: 'Our Services',
};

const serviceData = {
  subtitle: 'OUR SERVICES',
  title: 'Comprehensive Orthopaedic Care by Dr. Nikhil S. Charde',
  description:
    'Dr. Nikhil S. Charde, a leading orthopaedic surgeon in Nagpur, offers advanced surgical and non-surgical treatments for a wide range of orthopaedic conditions. From complex trauma and Ilizarov reconstruction to joint replacement and spine surgery, every treatment is tailored to restore mobility and enhance quality of life.',
  services: [
    {
      backgroundImage: '/assets/img/service_trauma.jpg',
      iconUrl: '/assets/img/icons/service_icon_1.png',
      index: '01',
      title: 'Comprehensive Trauma Care',
      subtitle: 'Expert management of complex orthopaedic trauma, polytrauma, and crush injuries with modern fixation techniques.',
      link: '/service/fracture-treatment',
    },
    {
      backgroundImage: '/assets/img/service_fracture.jpg',
      iconUrl: '/assets/img/icons/service_icon_2.png',
      index: '02',
      title: 'Fracture Treatment',
      subtitle: 'Specialized care for all types of fractures including periarticular, comminuted, and osteoporotic fractures.',
      link: '/service/fracture-treatment',
    },
    {
      backgroundImage: '/assets/img/service_ilizarov.jpg',
      iconUrl: '/assets/img/icons/service_icon_3.png',
      index: '03',
      title: 'Ilizarov Surgery',
      subtitle: 'Advanced Ilizarov & Hexapod techniques for limb reconstruction, nonunion, bone transport & deformity correction.',
      link: '/service/ilizarov-surgery',
    },
    {
      backgroundImage: '/assets/img/service_joint.jpg',
      iconUrl: '/assets/img/icons/service_icon_4.png',
      index: '04',
      title: 'Joint Replacement',
      subtitle: 'Advanced knee, hip & shoulder replacement surgery using computer-assisted techniques for optimal outcomes.',
      link: '/service/joint-replacement',
    },
    {
      backgroundImage: '/assets/img/service_deformity.jpg',
      iconUrl: '/assets/img/icons/service_icon_5.png',
      index: '05',
      title: 'Deformity Correction',
      subtitle: 'Surgical correction of adult & pediatric bone deformities including bow legs, knock knees & malunion.',
      link: '/service/deformity-correction',
    },
    {
      backgroundImage: '/assets/img/service_pelvic.jpg',
      iconUrl: '/assets/img/icons/service_icon_6.png',
      index: '06',
      title: 'Pelviacetabular Surgery',
      subtitle: 'Specialized surgical management of complex pelvic & acetabular fractures with advanced fixation techniques.',
      link: '/service/pelviacetabular-surgery',
    },
    {
      backgroundImage: '/assets/img/service_trauma.jpg',
      iconUrl: '/assets/img/icons/service_icon_7.png',
      index: '07',
      title: 'Spine Surgery',
      subtitle: 'Comprehensive spine care including minimally invasive surgery, spinal fusion & deformity correction.',
      link: '/service/spine-surgery',
    },
    {
      backgroundImage: '/assets/img/service_fracture.jpg',
      iconUrl: '/assets/img/icons/service_icon_8.png',
      index: '08',
      title: 'Arthroscopic Surgery',
      subtitle: 'Keyhole surgery for knee, shoulder & ankle conditions including ligament reconstruction & meniscal repair.',
      link: '/service/arthroscopic-surgery',
    },
  ],
  footerIcon: '/assets/img/icons/service_footer_icon_1.png',
  footerText:
    'Delivering advanced orthopaedic care for your mobility and well-being.<br>Book a consultation with Dr. Nikhil S. Charde today.',
  footerLink: 'https://wa.me/917888096906',
  footerLinkText: 'BOOK CONSULTATION',
};
const ServicePage = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/service_trauma.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      <>
        <Section
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <Service data={serviceData} />
        </Section>
      </>
    </>
  );
};

export default ServicePage;
