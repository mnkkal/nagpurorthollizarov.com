import { Link } from 'react-router-dom';

const centres = [
  { icon: '🦴', title: 'Limb Reconstruction', desc: 'Advanced reconstruction for complex bone defects, nonunion & limb length discrepancy using Ilizarov & Hexapod techniques.' },
  { icon: '🔄', title: 'Complex Nonunion & Bone Loss', desc: 'Specialized treatment for fractures that fail to heal, infected nonunion & segmental bone loss with bone transport.' },
  { icon: '🔬', title: 'Bone Infection (Osteomyelitis)', desc: 'Multi-stage surgical management of chronic bone infections with antibiotic spacers & staged reconstruction.' },
  { icon: '🦵', title: 'Deformity Correction', desc: 'Precision correction of bow legs, knock knees & multi-planar deformities using computer-assisted surgical planning.' },
  { icon: '🦿', title: 'Knee Preservation (HTO/DFO)', desc: 'Joint-preserving osteotomies for early arthritis — delaying or avoiding knee replacement with biological realignment.' },
  { icon: '📏', title: 'Limb Lengthening', desc: 'Internal (Precice nail) & external techniques for cosmetic height increase & congenital limb discrepancy.' },
  { icon: '⚙️', title: 'Ilizarov & Hexapod Surgery', desc: 'Advanced circular external fixation & Taylor Spatial Frame for complex deformity correction & bone transport.' },
  { icon: '🛡️', title: 'Limb Salvage', desc: 'Multi-disciplinary limb salvage for threatened limbs from trauma, infection, tumour or vascular compromise.' },
  { icon: '👶', title: 'Pediatric Limb Reconstruction', desc: 'Congenital deformity correction, growth-guided surgery & pediatric fracture care with minimally invasive techniques.' },
  { icon: '🏥', title: 'Complex Trauma Reconstruction', desc: 'Pelviacetabular fixation, periarticular fracture reconstruction & polytrauma management with modern fixation.' },
];

const CentresOfExcellence = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            CENTRES OF EXCELLENCE
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Advanced Limb Reconstruction Specialities
          </h2>
          <p className="mt-3 text-muted" data-aos="fade-up">
            Every patient deserves a personalised reconstruction plan. We treat the patient — not just the X-ray.
          </p>
        </div>
        <div className="row cs_gap_y_30">
          {centres.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="alric-condition-card">
                <div className="alric-condition-icon">
                  <span>{item.icon}</span>
                </div>
                <h3 className="alric-condition-title">{item.title}</h3>
                <p className="alric-condition-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CentresOfExcellence;
