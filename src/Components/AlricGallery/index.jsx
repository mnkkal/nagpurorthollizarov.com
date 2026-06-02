const galleryItems = [
  { id: 1, before: '/assets/img/service_deformity.jpg', after: '/assets/img/service_ilizarov.jpg', label: 'Bow Legs Correction' },
  { id: 2, before: '/assets/img/service_fracture.jpg', after: '/assets/img/service_joint.jpg', label: 'Knock Knee Correction' },
  { id: 3, before: '/assets/img/service_trauma.jpg', after: '/assets/img/service_pelvic.jpg', label: 'Nonunion Treatment' },
  { id: 4, before: '/assets/img/service_ilizarov.jpg', after: '/assets/img/service_deformity.jpg', label: 'Limb Lengthening' },
  { id: 5, before: '/assets/img/service_joint.jpg', after: '/assets/img/service_trauma.jpg', label: 'Ilizarov Frame Correction' },
  { id: 6, before: '/assets/img/service_pelvic.jpg', after: '/assets/img/service_fracture.jpg', label: 'HTO Alignment Correction' },
];

const BeforeAfterGallery = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            BEFORE & AFTER
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Real Transformations at ALRIC
          </h2>
          <p className="mt-3" data-aos="fade-up">
            Clinical outcomes showcasing deformity correction, limb reconstruction & functional restoration
          </p>
        </div>
        <div className="row cs_gap_y_30">
          {galleryItems.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id} data-aos="zoom-in" data-aos-delay={item.id * 60}>
              <div className="alric-gallery-card">
                <div className="alric-gallery-images">
                  <div className="alric-gallery-before">
                    <img src={item.before} alt={`${item.label} - Before treatment`} />
                    <span className="alric-gallery-label">Before</span>
                  </div>
                  <div className="alric-gallery-after">
                    <img src={item.after} alt={`${item.label} - After treatment`} />
                    <span className="alric-gallery-label after">After</span>
                  </div>
                </div>
                <p className="alric-gallery-item-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
