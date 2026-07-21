const awards = [
  { title: 'APASI', subtitle: 'Association of Pelvis and Acetabular Surgeons of India' },
  { title: 'ASAMI', subtitle: 'Association for the Study & Application of the Method of Ilizarov' },
  { title: 'B.O.S.', subtitle: 'Bombay Orthopedic Society' },
  { title: 'I.O.S.', subtitle: 'Indian Orthopedic Society' },
  { title: 'M.O.S.', subtitle: 'Maharashtra Orthopedic Society' },
  { title: 'V.O.S.', subtitle: 'Vidarbha Orthopedic Society' },
  { title: 'I.M.A.', subtitle: 'Indian Medical Association' },
];

const AlricAwards = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            MEMBERSHIPS & AFFILIATIONS
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Trusted by India's Leading Orthopaedic Societies
          </h2>
          <p className="mt-3 text-muted" data-aos="fade-up">
            Dr. Nikhil S. Charde is an active member of premier national & international orthopaedic associations
          </p>
        </div>
        <div className="row justify-content-center cs_gap_y_30">
          {awards.map((item, i) => (
            <div className="col-lg-3 col-md-4 col-6" key={i} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="alric-award-card">
                <div className="alric-award-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 15l-2 5 2-1 2 1-2-5z" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <h3 className="alric-award-title">{item.title}</h3>
                <p className="alric-award-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlricAwards;
