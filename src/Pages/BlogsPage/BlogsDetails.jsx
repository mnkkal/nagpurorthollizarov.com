import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaArrowLeft, FaCheckCircle, FaCalendarAlt, FaUser, FaFolder } from 'react-icons/fa';
import { getBlogData } from './blogsData';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import { useEffect } from 'react';

const BlogsDetails = () => {
  const { blogId } = useParams();
  const data = getBlogData(blogId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!data) {
    return (
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={{ title: 'Blog Not Found' }} />
      </Section>
    );
  }

  return (
    <>
      <Section className="cs_page_heading cs_bg_filed cs_center" backgroundImage="/assets/img/page_heading_bg.jpg">
        <PageHeading data={{ title: data.title }} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="70" bottomSpaceMd="120">
        <div className="container">
          <div className="mb-3">
            <Link to="/blog" className="cs_accent_color" style={{ fontWeight: 500 }}>
              <FaArrowLeft className="me-2" />Back to Blogs
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="cs_service_details_thumbnail mb-4">
                <img src={data.image} alt={data.title} className="w-100 rounded-3" />
              </div>

              <div className="d-flex flex-wrap gap-3 mb-3" style={{ fontSize: 13, color: 'var(--body-color)' }}>
                <span><FaCalendarAlt className="me-1 cs_accent_color" /> {data.date}</span>
                <span><FaUser className="me-1 cs_accent_color" /> By {data.author}</span>
                <span><FaFolder className="me-1 cs_accent_color" /> {data.category}</span>
              </div>

              <h3 className="cs_service_heading">{data.title}</h3>

              <p className="cs_service_subtitle" style={{ fontSize: 16, color: 'var(--body-color)', marginBottom: 24 }}>
                {data.intro}
              </p>

              {data.sections.map((section, i) => (
                <div key={i} className="cs_service_detail_item mb-4">
                  <h4 className="cs_service_detail_title">{section.title}</h4>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="cs_solution_content_wrapper cs_gray_bg cs_type_1 mb-4">
                <h3 className="cs_service_heading">More Articles</h3>
                <ul className="cs_solution_links cs_style_2 cs_mp0">
                  {[
                    { id: 'frozen-shoulder-causes-stages-treatment', title: 'Frozen Shoulder – Causes, Stages & Treatment' },
                    { id: 'prp-therapy-osteoarthritis-knee', title: 'PRP Therapy for Osteoarthritis Knee' },
                    { id: 'why-fractures-fail-heal-nonunion', title: 'Understanding Nonunion' },
                    { id: 'bow-legs-adults-causes-treatment', title: 'Bow Legs in Adults' },
                    { id: 'hto-vs-knee-replacement-comparison', title: 'HTO vs Knee Replacement' },
                    { id: 'limb-lengthening-surgery-guide', title: 'Limb Lengthening Guide' },
                  ].filter(s => s.id !== blogId).map((s, i) => (
                    <li key={i}>
                      <Link to={`/blog/${s.id}`}>
                        <FaCheckCircle style={{ marginRight: 8, color: 'var(--accent-color)' }} />
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs_blue_bg p-4 rounded-3 text-white text-center">
                <h4 className="text-white mb-3">Need Expert Advice?</h4>
                <div className="d-flex flex-column gap-3">
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, margin: 0 }}>
                    Consult Dr. Nikhil S. Charde for personalized orthopaedic care
                  </p>
                  <a href="tel:+917888096906" style={{ color: '#fff', fontWeight: 600 }}>
                    <FaPhoneAlt className="me-2" />+91 78880 96906
                  </a>
                  <a href="https://wa.me/917888096906" target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1" style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}>
                    <FaWhatsapp /> Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogsDetails;
