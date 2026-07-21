import PageHeading from '../../Components/PageHeading';
import Service from '../../Components/Service';
import Section from '../../Components/Section';

const headingData = {
  title: 'Centres of Excellence',
};

const serviceData = {
  subtitle: 'CENTRES OF EXCELLENCE',
  title: 'ALRIC — Advanced Limb Reconstruction Specialities',
  description:
    'ALRIC is a super-specialty limb reconstruction institute focusing on complex nonunion, bone infection, deformity correction, knee preservation, limb salvage and limb lengthening. Every patient receives a personalised reconstruction plan using advanced Ilizarov, Hexapod and joint-preserving techniques.',
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
    'Preserving Limbs. Restoring Lives.<br>Book a consultation with Dr. Nikhil S. Charde at ALRIC today.',
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
