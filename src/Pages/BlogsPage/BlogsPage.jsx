import React from 'react';
import PageHeading from '../../Components/PageHeading';
import BlogsSection1 from '../../Components/BlogsSection/BlogsSection1';
import Section from '../../Components/Section';

const headingData = {
  title: 'Blogs & Articles',
};

const blogsSectionData = {
  sectionSubtitle: 'EDUCATIONAL RESOURCES',
  sectionTitle: 'Orthopaedic Health Blogs by Dr. Nikhil S. Charde',

  blogsData: [
    {
      id: 'frozen-shoulder-causes-stages-treatment',
      category: 'Health',
      date: 'Jun 16',
      author: 'Dr. Nikhil S. Charde',
      comments: '0 Comments',
      title: 'Frozen Shoulder – Causes, Stages & Treatment',
      subtitle:
        'Frozen shoulder (adhesive capsulitis) causes pain and stiffness. Learn about the three stages and treatment options available.',
      image: '/assets/img/post_blog_1.jpg',
      link: '/blog/frozen-shoulder-causes-stages-treatment',
      linkText: 'Read More',
    },
    {
      id: 'prp-therapy-osteoarthritis-knee',
      category: 'Sport Medicine',
      date: 'Jun 16',
      author: 'Dr. Nikhil S. Charde',
      comments: '0 Comments',
      title: 'PRP Therapy for Osteoarthritis Knee',
      subtitle:
        'Revitalize your knees with Platelet-Rich Plasma therapy. A non-surgical option for knee osteoarthritis pain relief.',
      image: '/assets/img/post_blog_2.jpg',
      link: '/blog/prp-therapy-osteoarthritis-knee',
      linkText: 'Read More',
    },
    {
      id: 'why-fractures-fail-heal-nonunion',
      category: 'Health',
      date: 'Jun 01',
      author: 'Dr. Nikhil S. Charde',
      comments: '0 Comments',
      title: 'Why Fractures Fail to Heal – Understanding Nonunion',
      subtitle: 'Learn about causes of nonunion and how Ilizarov bone transport can help achieve bone healing.',
      image: '/assets/img/service_trauma.jpg',
      link: '/blog/why-fractures-fail-heal-nonunion',
      linkText: 'Read More',
    },
    {
      id: 'bow-legs-adults-causes-treatment',
      category: 'Deformity',
      date: 'May 28',
      author: 'Dr. Nikhil S. Charde',
      comments: '0 Comments',
      title: 'Bow Legs in Adults – Causes & Treatment Options',
      subtitle: 'Understanding genu varum in adults and when HTO or osteotomy is recommended.',
      image: '/assets/img/service_deformity.jpg',
      link: '/blog/bow-legs-adults-causes-treatment',
      linkText: 'Read More',
    },
    {
      id: 'hto-vs-knee-replacement-comparison',
      category: 'Knee',
      date: 'May 20',
      author: 'Dr. Nikhil S. Charde',
      comments: '0 Comments',
      title: 'HTO vs Knee Replacement – Which is Right for You?',
      subtitle: 'Comparing high tibial osteotomy and total knee replacement for early arthritis.',
      image: '/assets/img/service_joint.jpg',
      link: '/blog/hto-vs-knee-replacement-comparison',
      linkText: 'Read More',
    },
    {
      id: 'limb-lengthening-surgery-guide',
      category: 'Lengthening',
      date: 'May 15',
      author: 'Dr. Nikhil S. Charde',
      comments: '0 Comments',
      title: 'Limb Lengthening Surgery – What to Expect',
      subtitle: 'A comprehensive guide to cosmetic height increase surgery, recovery and results.',
      image: '/assets/img/service_ilizarov.jpg',
      link: '/blog/limb-lengthening-surgery-guide',
      linkText: 'Read More',
    },
  ],
};

const BlogsPage = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogsSection1 data={blogsSectionData} />
      </Section>
    </>
  );
};

export default BlogsPage;
