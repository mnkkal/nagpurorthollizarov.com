import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: 'What is ALRIC and what does it specialise in?',
    a: 'ALRIC – Advanced Limb Reconstruction & Ilizarov Centre is a super-specialty institute focused exclusively on limb reconstruction, deformity correction, nonunion treatment, bone infection management, knee preservation, limb salvage and limb lengthening. Led by Dr. Nikhil S. Charde in Nagpur, it is one of Central India\'s most advanced centres for complex orthopaedic reconstruction.',
  },
  {
    q: 'Who needs limb reconstruction surgery?',
    a: 'Patients with complex fractures that failed to heal (nonunion), bone infections (osteomyelitis), congenital or acquired deformities (bow legs, knock knees), limb length discrepancy, bone defects from trauma or tumour, and threatened limbs requiring salvage surgery may benefit from limb reconstruction procedures.',
  },
  {
    q: 'What is the Ilizarov technique?',
    a: 'The Ilizarov technique uses a circular external fixator (frame) attached to the bone with fine wires and pins. It allows precise correction of deformities, bone transport for defects, and compression/distraction for nonunion. It is one of the most versatile tools in limb reconstruction surgery.',
  },
  {
    q: 'What is a Hexapod (Taylor Spatial Frame)?',
    a: 'The Hexapod or Taylor Spatial Frame (TSF) is a computer-assisted version of the Ilizarov frame. It uses 6 struts connected to 2 rings, and a software program calculates the exact adjustments needed for multi-planar deformity correction, making it extremely precise.',
  },
  {
    q: 'How long does recovery take after limb reconstruction?',
    a: 'Recovery varies depending on the procedure. Frame-based correction typically requires 3-6 months of wearing the frame, followed by rehabilitation. Bone transport may take longer (6-12 months). Your surgeon will provide a personalised recovery timeline based on your specific condition.',
  },
  {
    q: 'Is limb reconstruction surgery painful?',
    a: 'Modern anaesthesia and pain management protocols ensure minimal discomfort during and after surgery. Patients are monitored closely and provided with effective pain relief. Most patients report mild to moderate discomfort that is well-controlled with medication.',
  },
  {
    q: 'Can bow legs be corrected in adults?',
    a: 'Yes, bow legs in adults can be corrected through osteotomy (bone cutting) and realignment procedures such as High Tibial Osteotomy (HTO) or Distal Femoral Osteotomy (DFO). These joint-preserving techniques correct alignment and often eliminate the need for joint replacement.',
  },
  {
    q: 'What is knee preservation surgery?',
    a: 'Knee preservation includes procedures like HTO and DFO that realign the knee joint to shift weight away from damaged cartilage. These techniques preserve the natural knee joint, delay or avoid knee replacement, and are ideal for active patients with early arthritis.',
  },
  {
    q: 'How do I book a consultation with Dr. Nikhil Charde?',
    a: 'You can book a consultation by calling +91 78880 96906, sending a WhatsApp message to the same number, or using the Book Appointment form on this website. International patients can also request an online video consultation.',
  },
  {
    q: 'Can international patients visit ALRIC for treatment?',
    a: 'Yes, ALRIC welcomes international patients. We offer online video consultations, treatment planning before arrival, travel assistance including visa guidance and airport pickup, and coordinated post-surgery rehabilitation support.',
  },
];

const AlricFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center mb-5">
          <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
            <span className="cs_shape_left" />
            FREQUENTLY ASKED QUESTIONS
            <span className="cs_shape_right" />
          </p>
          <h2 className="cs_section_title" data-aos="fade-up">
            Common Questions About Limb Reconstruction
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, i) => (
              <div
                className={`alric-faq-item ${openIndex === i ? 'active' : ''}`}
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                <button className="alric-faq-question" onClick={() => toggle(i)}>
                  <span>{faq.q}</span>
                  <FaChevronDown className={`alric-faq-icon ${openIndex === i ? 'rotated' : ''}`} />
                </button>
                <div className="alric-faq-answer" style={{ display: openIndex === i ? 'block' : 'none' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlricFaq;
