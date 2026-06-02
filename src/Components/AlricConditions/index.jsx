const conditions = [
  { icon: '🦴', title: 'Complex Trauma', desc: 'Polytrauma, crush injuries & complex fracture management' },
  { icon: '🦵', title: 'Ilizarov Surgery', desc: 'Advanced Ilizarov & JESS techniques for limb reconstruction' },
  { icon: '🦿', title: 'Joint Replacement', desc: 'Knee, hip & shoulder replacement surgery' },
  { icon: '🦴', title: 'Deformity Correction', desc: 'Bow legs, knock knees & multi-planar deformity correction' },
  { icon: '🦵', title: 'Spine Surgery', desc: 'Minimally invasive spine surgery & spinal fusion' },
  { icon: '📏', title: 'Pelviacetabular Surgery', desc: 'Complex pelvic & acetabular fracture fixation' },
  { icon: '👶', title: 'Fracture Treatment', desc: 'All types of fractures including periarticular & comminuted' },
  { icon: '🛡️', title: 'Arthroscopic Surgery', desc: 'Keyhole surgery for knee, shoulder & ankle' },
  { icon: '🔄', title: 'Nonunion Treatment', desc: 'Infected & gap nonunion with bone transport' },
  { icon: '🔬', title: 'Osteomyelitis', desc: 'Bone infection management with reconstruction' },
  { icon: '🦵', title: 'Knee Preservation', desc: 'HTO, DFO, cartilage preservation & PRP therapy' },
  { icon: '🦿', title: 'Limb Salvage', desc: 'Multi-stage reconstruction for threatened limbs' },
];

const ConditionsGrid = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            CONDITIONS WE TREAT
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Expert Orthopaedic Care by Dr. Nikhil S. Charde
          </h2>
        </div>
        <div className="row cs_gap_y_30">
          {conditions.map((item, index) => (
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

export default ConditionsGrid;
