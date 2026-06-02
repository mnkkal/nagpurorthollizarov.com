const videos = [
  { title: 'Bone Protection After Frame Removal', id: 'QQhUyuN2hvI' },
  { title: 'Ilizarov vs Hexapod Frame Explained', id: 'JgGJqWNTNtY' },
  { title: 'Ilizarov Treatment: Pre-operative Planning', id: 'ooafHW5ZZkw' },
  { title: 'How to Prevent Gym Injuries', id: 'Vi9PM-_8s6I' },
  { title: 'Frozen Shoulder: Symptoms, Stages & Treatment', id: 'P0PhO7l_DU4' },
  { title: 'Back Pain After Deadlift? Know the Signs', id: '2yKhnBwduJ8' },
];

const VideosSection = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            EDUCATIONAL VIDEOS
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Learn About Advanced Limb Reconstruction
          </h2>
        </div>
        <div className="row cs_gap_y_30">
          {videos.map((video, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="alric-video-card">
                <div className="alric-video-thumb">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                  />
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alric-video-play"
                  >
                    <span className="cs_player_btn cs_center">
                      <span />
                    </span>
                  </a>
                </div>
                <div className="alric-video-body">
                  <h3 className="alric-video-title">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
