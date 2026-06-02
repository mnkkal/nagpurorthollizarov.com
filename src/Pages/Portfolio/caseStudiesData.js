const caseStudies = [
  {
    id: 'ilizarov-limb-reconstruction',
    title: 'Ilizarov Limb Reconstruction',
    subtitle: 'Complex nonunion with bone defect treated with Ilizarov bone transport',
    mainImage: '/assets/img/service_ilizarov.jpg',
    result: 'Full limb salvage with functional recovery',
    description: [
      'This case involves a complex nonunion of the tibia with significant bone loss following an open fracture sustained in a road traffic accident. The patient had undergone multiple previous surgeries elsewhere without success and was facing the possibility of amputation.',
      'Dr. Nikhil S. Charde performed a staged Ilizarov bone transport procedure to reconstruct the bone defect, restore alignment, and achieve functional limb salvage.',
    ],
    details: [
      { title: 'Clinical Presentation', content: 'The patient presented with a non-healing wound, discharging sinus, and a 5 cm tibial bone defect. X-rays and CT imaging confirmed infected nonunion with sequestrum formation. Range of motion at the knee and ankle was severely restricted due to prolonged immobilization.' },
      { title: 'Treatment Plan', content: 'Stage 1: Radical debridement of infected bone and soft tissue, removal of implants, and application of antibiotic cement spacer. Stage 2: After infection control (6 weeks IV antibiotics), Ilizarov frame application with proximal corticotomy for bone transport at 1 mm/day.' },
      { title: 'Surgical Procedure', content: 'The Ilizarov frame was custom-assembled with a proximal ring block, distal ring block, and intermediate transport rings. After corticotomy, distraction was initiated on post-op day 7. Weekly X-rays monitored regenerate bone formation and alignment.' },
      { title: 'Outcome', content: 'Bone transport was completed in 50 days. The docking site was bone grafted at 12 weeks. The frame was removed at 9 months. At 1 year follow-up, the patient had full weight-bearing, normal gait, and returned to work. No recurrence of infection.' },
    ],
  },
  {
    id: 'deformity-correction-bow-legs',
    title: 'Deformity Correction – Bow Legs',
    subtitle: 'Bilateral high tibial osteotomy for genu varum correction',
    mainImage: '/assets/img/service_deformity.jpg',
    result: 'Sports-level recovery in 6 months',
    description: [
      'A young athlete presented with progressively worsening bowing of both legs causing knee pain and limiting sports performance. Previous conservative management had failed to provide relief.',
      'Dr. Charde performed bilateral high tibial osteotomies to correct the mechanical axis and unload the medial compartment, preserving the native knee joint.',
    ],
    details: [
      { title: 'Clinical Presentation', content: '22-year-old male with genu varum deformity measuring 12 degrees right and 10 degrees left. Complaints of medial knee pain after running and difficulty in squatting. X-rays showed preserved joint space but medial compartment overload.' },
      { title: 'Surgical Planning', content: 'Full-length standing X-rays and CT scanogram were used for mechanical axis assessment. The Miniaci method determined the exact correction angle. Opening wedge HTO with TomoFix plate fixation was planned bilaterally.' },
      { title: 'Procedure', content: 'Medial approach to proximal tibia, guidewire placement, oblique osteotomy, opening to calculated gap, and stabilization with locking plate. Bone graft substitute used to fill osteotomy gap. Second leg done 6 weeks later.' },
      { title: 'Outcome', content: 'At 6 months, full correction achieved with mechanical axis through lateral tibial spine. Patient returned to competitive football. Full range of motion, pain-free gait, and high satisfaction.' },
    ],
  },
  {
    id: 'pelviacetabular-fracture-fixation',
    title: 'Pelviacetabular Fracture Fixation',
    subtitle: 'Complex pelvic fracture treated with advanced fixation techniques',
    mainImage: '/assets/img/service_pelvic.jpg',
    result: 'Full ambulation at 3 months',
    description: [
      'A 45-year-old male sustained an unstable pelvic fracture with acetabular involvement following a fall from height. The injury pattern involved both columns of the acetabulum with associated pelvic ring disruption.',
      'Dr. Charde performed open reduction and internal fixation using combined anterior and posterior approaches to restore pelvic anatomy and hip joint congruity.',
    ],
    details: [
      { title: 'Injury Pattern', content: 'Associated both-column acetabular fracture with extension into the iliac wing. The posterior pelvic ring was disrupted with sacroiliac joint diastasis. CT scan revealed intra-articular fragments.' },
      { title: 'Surgical Approach', content: 'Combined ilioinguinal and Kocher-Langenbeck approaches were used. The fracture was reduced anatomically and fixed with reconstruction plates and screws. Intra-articular fragments were removed.' },
      { title: 'Postoperative Course', content: 'Touch-down weight-bearing for 8 weeks followed by progressive weight-bearing. X-rays at 12 weeks showed union with congruent hip joint. No avascular necrosis or post-traumatic arthritis at 1 year.' },
      { title: 'Final Outcome', content: 'Full independent ambulation achieved at 3 months. Patient returned to pre-injury occupation. Harris Hip Score improved from 32 pre-op to 92 at final follow-up.' },
    ],
  },
  {
    id: 'total-knee-replacement',
    title: 'Total Knee Replacement',
    subtitle: 'Advanced knee replacement for severe osteoarthritis with excellent outcome',
    mainImage: '/assets/img/service_joint.jpg',
    result: 'Pain-free mobility restored',
    description: [
      'A 65-year-old female with end-stage osteoarthritis of the right knee presented with severe pain, varus deformity, and limited mobility. She was unable to walk more than 100 meters and required a walker.',
      'Dr. Charde performed a primary total knee arthroplasty with correction of deformity and meticulous soft tissue balancing.',
    ],
    details: [
      { title: 'Preoperative Status', content: 'Fixed flexion deformity of 15 degrees, varus deformity of 12 degrees, range of motion 0-80 degrees. Severe bone-on-bone changes in medial compartment with lateral subluxation of the patella.' },
      { title: 'Surgical Details', content: 'Medial parapatellar approach, distal femoral cut, proximal tibial cut with extramedullary guide, adequate releases for deformity correction, cemented posterior-stabilized implant, patellar resurfacing.' },
      { title: 'Recovery', content: 'Multimodal pain management, immediate mobilization, CPM for range of motion. Discharged on day 3. Walking with cane at 2 weeks, independent at 6 weeks. Range of motion 0-110 degrees.' },
      { title: 'Result', content: 'At 1 year, pain-free with range of motion 0-115 degrees. Independent in all activities. Knee Society Score improved from 42 to 95. Patient resumed gardening and long-distance walking.' },
    ],
  },
  {
    id: 'complex-trauma-reconstruction',
    title: 'Complex Trauma Reconstruction',
    subtitle: 'Open tibia fracture with bone loss managed with staged reconstruction',
    mainImage: '/assets/img/service_trauma.jpg',
    result: 'Limb salvaged with full function',
    description: [
      'A 30-year-old male presented with Gustilo-Anderson Type IIIB open tibia fracture from a motorcycle accident. There was extensive soft tissue loss, bone comminution, and contamination.',
      'Dr. Charde performed a staged reconstruction protocol involving initial debridement and temporary fixation, followed by definitive fixation and soft tissue coverage.',
    ],
    details: [
      { title: 'Initial Management', content: 'Emergency debridement, irrigation with 9 liters of saline, temporary spanning external fixation, IV antibiotics, and negative pressure wound therapy. Plastic surgery consultation for coverage planning.' },
      { title: 'Definitive Surgery', content: 'At 72 hours, second-look debridement and definitive fixation with a locked intramedullary nail. Soft tissue coverage was achieved with a rotational gastrocnemius flap and split skin grafting.' },
      { title: 'Rehabilitation', content: 'Non-weight-bearing for 8 weeks, followed by progressive weight-bearing. Physiotherapy focused on range of motion, muscle strengthening, and gait training. Full weight-bearing at 16 weeks.' },
      { title: 'Final Result', content: 'At 1 year, X-rays showed solid union. The patient had a normal gait, full knee and ankle range of motion, and returned to his occupation as a delivery driver. No chronic pain or infection.' },
    ],
  },
  {
    id: 'periatricular-fracture-fixation',
    title: 'Fracture Fixation – Periarticular',
    subtitle: 'Complex intra-articular fracture treated with anatomical reduction and plating',
    mainImage: '/assets/img/service_fracture.jpg',
    result: 'Anatomical union with full ROM',
    description: [
      'A 35-year-old female sustained a comminuted intra-articular distal femur fracture (AO type C3) in a road traffic accident. The fracture involved both medial and lateral condyles with significant articular comminution.',
      'Dr. Charde performed open reduction and internal fixation with anatomical locking plate fixation to restore articular congruity and limb alignment.',
    ],
    details: [
      { title: 'Injury Assessment', content: 'CT scan revealed a complex C3 distal femur fracture with 4 articular fragments, metaphyseal comminution, and a sagittal split extending into the intercondylar notch. The patient was neurovascularly intact.' },
      { title: 'Surgical Technique', content: 'Parapatellar approach, temporary K-wire fixation of articular block, definitive fixation with periarticular locking plate. Autogenous bone grafting used for metaphyseal defect. Primary closure over suction drain.' },
      { title: 'Recovery Protocol', content: 'Continuous passive motion started day 1. Touch-down weight-bearing for 6 weeks, partial at 6-12 weeks, full at 12 weeks. Structured physiotherapy for range of motion and quadriceps strengthening.' },
      { title: 'Outcome', content: 'X-rays at 16 weeks showed union with anatomical articular reduction. Range of motion 0-120 degrees. No post-traumatic arthritis at 18 months. Patient returned to all activities including stair climbing.' },
    ],
  },
];

export function getAllCaseStudyIds() {
  return caseStudies.map(c => c.id);
}

export function getCaseStudyData(id) {
  return caseStudies.find(c => c.id === id) || null;
}

export default caseStudies;
