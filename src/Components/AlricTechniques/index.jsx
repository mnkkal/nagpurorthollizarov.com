const techniques = [
  {
    image: '/assets/img/service_ilizarov.jpg',
    title: 'Ilizarov Surgery',
    desc: 'Circular external fixation for complex deformity correction, nonunion & limb lengthening using the Ilizarov apparatus.',
  },
  {
    image: '/assets/img/service_deformity.jpg',
    title: 'Hexapod Correction',
    desc: 'Computer-assisted Taylor Spatial Frame for precise multi-planar deformity correction with 3D planning.',
  },
  {
    image: '/assets/img/service_joint.jpg',
    title: 'High Tibial Osteotomy (HTO)',
    desc: 'Biomechanical realignment for early knee arthritis & bow legs, preserving the natural knee joint.',
  },
  {
    image: '/assets/img/service_pelvic.jpg',
    title: 'Distal Femoral Osteotomy (DFO)',
    desc: 'Femoral realignment for valgus knee (knock knees) & lateral compartment unloading.',
  },
  {
    image: '/assets/img/service_trauma.jpg',
    title: 'Bone Transport',
    desc: 'Segmental bone transport for large bone defects from trauma, infection or tumour resection.',
  },
  {
    image: '/assets/img/service_fracture.jpg',
    title: 'Limb Lengthening Surgery',
    desc: 'Internal (Precice nail) & external techniques for cosmetic height increase & limb discrepancy correction.',
  },
];

const Techniques = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            ADVANCED TECHNIQUES
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            State-of-the-Art Surgical Techniques at ALRIC
          </h2>
        </div>
        <div className="row cs_gap_y_30">
          {techniques.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="alric-technique-card">
                <div className="alric-technique-img">
                  <img src={item.image} alt={item.title} />
                  <div className="alric-technique-overlay">
                    <span className="alric-technique-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="alric-technique-body">
                  <h3 className="alric-technique-title">{item.title}</h3>
                  <p className="alric-technique-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techniques;
