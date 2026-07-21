import { FaFileAlt, FaYoutube, FaBookMedical, FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const publications = [
  {
    icon: <FaFileAlt />,
    title: 'Functional Outcome of Ilizarov Ring Fixator Versus Limb Reconstruction System in the Management of Infected Nonunion of Tibia',
    desc: 'Comparative study published in peer-reviewed orthopaedic journal evaluating frame-based treatment outcomes for infected tibial nonunion.',
  },
  {
    icon: <FaAward />,
    title: 'Role of Hexapod External Fixator in Complex Deformity Correction',
    desc: 'Case series demonstrating the efficacy of computer-assisted Taylor Spatial Frame for multi-planar deformity correction.',
  },
  {
    icon: <FaYoutube />,
    title: 'Educational Video Series on Limb Reconstruction',
    desc: 'Dr. Nikhil Charde regularly publishes educational content on Ilizarov surgery, Hexapod techniques, knee preservation & deformity correction.',
    link: 'https://www.youtube.com/@drnikhilcharde',
    linkText: 'Watch on YouTube',
  },
  {
    icon: <FaBookMedical />,
    title: 'Clinical Presentations & CME Lectures',
    desc: 'Regular invited faculty at national & international orthopaedic conferences on topics of limb reconstruction, Ilizarov techniques & deformity planning.',
  },
];

const AlricResearch = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            RESEARCH & PUBLICATIONS
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Evidence-Based Practice & Academic Contributions
          </h2>
          <p className="mt-3 text-muted" data-aos="fade-up">
            Committed to advancing the field of limb reconstruction through research, education & innovation
          </p>
        </div>
        <div className="row cs_gap_y_30">
          {publications.map((item, i) => (
            <div className="col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="alric-research-card">
                <div className="alric-research-header">
                  <span className="alric-research-icon">{item.icon}</span>
                </div>
                <h3 className="alric-research-title">{item.title}</h3>
                <p className="alric-research-desc">{item.desc}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="alric-research-link">
                    {item.linkText} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlricResearch;
