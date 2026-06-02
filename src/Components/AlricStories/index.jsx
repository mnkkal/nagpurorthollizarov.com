import { Link } from 'react-router-dom';

const stories = [
  {
    id: 'complex-pelvic-fracture-reconstruction',
    title: 'Complex Pelvic Fracture Reconstruction',
    desc: 'Patient with complex pelvic fracture from high-velocity trauma underwent successful pelviacetabular fixation by Dr. Nikhil Charde. Full ambulation achieved within 3 months post-op.',
    image: '/assets/img/service_pelvic.jpg',
    result: 'Full recovery in 3 months',
    emotion: '💪',
  },
  {
    id: 'total-knee-replacement-success',
    title: 'Total Knee Replacement Success',
    desc: 'Severe osteoarthritis patient regained active lifestyle after total knee replacement. Pain-free walking and stair climbing achieved within 6 weeks of surgery.',
    image: '/assets/img/service_joint.jpg',
    result: 'Pain-free mobility restored',
    emotion: '🦿',
  },
  {
    id: 'ilizarov-limb-salvage-after-trauma',
    title: 'Ilizarov Limb Salvage After Trauma',
    desc: 'Open tibia fracture with bone loss and infection was salvaged using Ilizarov bone transport technique. Patient avoided amputation and returned to work.',
    image: '/assets/img/service_ilizarov.jpg',
    result: 'Limb salvaged & working again',
    emotion: '📏',
  },
  {
    id: 'deformity-correction-genu-varum',
    title: 'Deformity Correction – Genu Varum',
    desc: 'Bilateral high tibial osteotomy for severe bow legs. Complete alignment correction, pain relief & return to sports at 6 months post-op.',
    image: '/assets/img/service_deformity.jpg',
    result: 'Sports-level recovery in 6 months',
    emotion: '🦵',
  },
];

const PatientStories = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            PATIENT STORIES
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Real Stories of Recovery & Transformation
          </h2>
        </div>
        <div className="row cs_gap_y_30">
          {stories.map((story, index) => (
            <div className="col-lg-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="alric-story-card">
                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="alric-story-img">
                      <img src={story.image} alt={story.title} />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="alric-story-body">
                      <span className="alric-story-emotion">{story.emotion}</span>
                      <h3 className="alric-story-title">{story.title}</h3>
                      <p className="alric-story-desc">{story.desc}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="result-badge">{story.result}</span>
                        <Link to={`/story/${story.id}`} className="cs_accent_color" style={{ fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientStories;
