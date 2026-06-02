import { FaStar, FaStarHalfAlt, FaGoogle } from 'react-icons/fa';

const reviewsData = {
  rating: 4.8,
  totalReviews: 47,
  reviews: [
    {
      name: 'Samruddhi Balpande',
      date: 'December 2023',
      rating: 5,
      text: 'Gives Proper treatment & had great knowledge as an orthopaedic. Talks very gently. I will recommend to visit his hospital & you will surely get a proper treatment. Recently my lil brother got fractured his hand, Dr. Nikhil Charde had treated him very well so that my brother doesn\'t get afraid and completed his medication with less pain.',
    },
    {
      name: 'Shashank Bandre',
      date: 'March 2023',
      rating: 5,
      text: 'I went to Dr. Nikhil Charde because I was having swelling in my wrist after I met with an accident. Sir suggested me operation and operated my fractured wrist. Initially I really got scared and nervous but he has made me feel relaxed and comfortable during this overall treatment.',
    },
  ],
};

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} style={{ fontSize: 14, color: '#f5a623' }} />);
  if (half) stars.push(<FaStarHalfAlt key="h" style={{ fontSize: 14, color: '#f5a623' }} />);
  return stars;
};

const AlricReviews = () => {
  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            GOOGLE REVIEWS
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            What Patients Say on Google
          </h2>
        </div>

        <div className="text-center mb-5" data-aos="fade-up">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <FaGoogle style={{ fontSize: 28, color: '#4285F4' }} />
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--heading-color)' }}>Google</span>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2 mb-1">
            <span style={{ fontSize: 36, fontWeight: 800, color: 'var(--heading-color)' }}>{reviewsData.rating}</span>
            <div style={{ display: 'flex', gap: 2 }}>
              {renderStars(reviewsData.rating)}
            </div>
          </div>
          <p style={{ fontSize: 14, color: 'var(--body-color)', margin: 0 }}>
            Based on {reviewsData.totalReviews} Google reviews
          </p>
        </div>

        <div className="row cs_gap_y_30 justify-content-center">
          {reviewsData.reviews.map((review, index) => (
            <div className="col-lg-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid var(--border-color)',
                  borderRadius: 12,
                  padding: 24,
                  height: '100%',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong style={{ fontSize: 15 }}>{review.name}</strong>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p style={{ fontSize: 12, color: '#999', marginBottom: 10 }}>{review.date}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--body-color)', fontStyle: 'italic', margin: 0 }}>
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4" data-aos="fade-up">
          <a
            href="https://www.google.com/search?q=Dr.+Nikhil+Charde+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="cs_btn cs_style_1 cs_color_1"
            style={{ gap: 8 }}
          >
            <FaGoogle /> View All Reviews on Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlricReviews;
