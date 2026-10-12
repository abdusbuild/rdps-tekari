// All content below is sourced from the school's existing website (rdpublicschool.org.in).

export const school = {
  name: "R.D. Public School",
  short: "RDPS",
  tagline: "We Provide Good Education to your Child",
  motto: "तमसो मा ज्योतिर्गमय",
  mottoMeaning: "Lead me from darkness to light",
  established: 2009,
  affiliation: "Affiliated to CBSE, New Delhi",
  affiliationNo: "330422",
  schoolCode: "65420",
  address: "Vikram Vihar, Near S.N. Sinha College, Tekari",
  city: "Gaya Jee, Bihar — 824236",
  phones: ["+91 93040 02945", "+91 93340 60440"],
  phoneHrefs: ["tel:+919304002945", "tel:+919334060440"],
  email: "rdpublicschool04@gmail.com",
  // Verify this number is on WhatsApp before going live.
  whatsappHref: "https://wa.me/919304002945",
  principal: "Arun Kumar Singh",
  vicePrincipal: "Alka Singh",
  mapEmbed:
    "https://www.google.com/maps?q=R.D.+Public+School+Vikram+Vihar+Tekari+Gaya+Bihar&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=R.D.+Public+School+Vikram+Vihar+Tekari+Gaya",
  officeHours: [
    { label: "Principal's office", value: "Mon – Fri · 10:30 AM – 11:30 AM", note: "Weekend appointments on request" },
    { label: "School office", value: "Mon – Fri · 08:00 AM – 02:00 PM" },
    { label: "Saturday", value: "08:00 AM – 12:00 PM" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/facilities", label: "Facilities" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 2009, label: "Established", suffix: "", plain: true },
  { value: 34, label: "Qualified teachers", suffix: "" },
  { value: 54, label: "Rooms on campus", suffix: "" },
  { value: 9134, label: "Sq. metre campus", suffix: "" },
];

export const heroSlides = [
  { src: "/images/photos/building.png", caption: "Our campus · Vikram Vihar, Tekari", focus: "center 40%" },
  { src: "/images/photos/inside-classroom.jpg", caption: "Inside our classrooms", focus: "center 35%" },
  { src: "/images/photos/computer-lab.jpg", caption: "Computer lab", focus: "center" },
  { src: "/images/photos/independence.jpg", caption: "Independence Day celebrations", focus: "center 30%" },
  { src: "/images/photos/ceremony.png", caption: "Annual ceremony", focus: "center 30%" },
];

export const features = [
  {
    title: "Modern Technology",
    text: "School is equipped with the latest technology for the best education.",
    icon: "Monitor",
  },
  {
    title: "Sports Environment",
    text: "Almost every sport is organised here — kabaddi, volleyball, kho-kho, badminton, karate and more.",
    icon: "Trophy",
  },
  {
    title: "Pleasant Atmosphere",
    text: "Creating an atmosphere for learning and providing quality education.",
    icon: "Leaf",
  },
  {
    title: "Experienced Faculty",
    text: "Qualified, dedicated and inspiring faculty members.",
    icon: "GraduationCap",
  },
] as const;

export const about = {
  intro:
    "RD Public School, established in 2009, is situated at Vikram Vihar, near S.N. Sinha College, Tekari. The school has its own charming building with 25 classrooms (20×25 feet), fully equipped laboratories, playgrounds and a rich library that add to its natural beauty.",
  philosophy:
    "This school follows the modern technologies of teaching for the Mental, Physical & Spiritual development of a child to face the modern world and compete in Engineering, Medicine, Information Technology, Academics and other fields through continuous comprehensive assessment and remedial measures.",
  pillars: [
    {
      title: "Primary Education",
      text: "A play-way learning methodology equips our tiny tots with the school environment and the basics of learning, reading and writing.",
      icon: "Baby",
    },
    {
      title: "Morning Assembly",
      text: "Begins with a prayer, pledge, news reading, thought for the day and cultural activities. Thursdays include value education, and assemblies are held in English, Hindi and Sanskrit — with birthday celebrations too.",
      icon: "Sun",
    },
    {
      title: "Scouts & Guides",
      text: "An active scouts & guides wing under able Scout masters and Guide captains. Camps, rallies and social work are undertaken frequently.",
      icon: "Compass",
    },
    {
      title: "Guidance & Counselling",
      text: "A counselling cell with an experienced counsellor provides guidance to every student.",
      icon: "HeartHandshake",
    },
    {
      title: "Excursion & Trekking",
      text: "Educational tours bring students closer to their social environment and give them maximum exposure to enrich their experience.",
      icon: "LandPlot",
    },
    {
      title: "Universal Brotherhood",
      text: "A statue representing the unity of four major religions stands on campus, helping students unite with others in the spirit of brotherhood.",
      icon: "Globe",
    },
    {
      title: "Parent–Teacher Meetings",
      text: "Guardians are invited after every term exam to discuss progress and remedial measures where needed.",
      icon: "Users",
    },
    {
      title: "Work Experience",
      text: "Work experience is part of the curriculum to build a healthy work culture in children.",
      icon: "Sparkles",
    },
  ],
};

export const vision =
  "Participation in creating a harmonious society where justice, peace, equality, freedom, patriotism and care for the planet earth are nurtured and promoted.";

export const mission = {
  lead:
    "To enhance holistic human development and nation building through value-based, growth-oriented and student-centred quality education to all sections of society — enabling young people to become women and men of conviction, commitment, compassion and competence.",
  points: [
    "To motivate the child for achieving excellence.",
    "To channelise the energies of the students for creative work.",
    "To impart balanced education in an environment conducive to growth.",
    "To develop character, qualities of honesty and fellow feeling.",
    "To ensure physical, mental and moral growth of the student and create in them a zest for learning.",
    "To propagate patriotic, social and ethical values of a responsible citizen.",
  ],
};

export const rules = [
  "The school insists on punctuality, regular attendance, cleanliness in dress, and fidelity to study and work assignments.",
  "Students are expected to be in school five minutes before reporting time. Soon after the assembly bell the gates are locked.",
  "Students must come in clean, neat and full uniform of the same pattern and colour. All leave must be applied for in writing to the Principal.",
  "No student shall proceed on leave without sanction and permission.",
  "To call a child home during class hours, the parent or guardian must come to the school in person.",
  "No books other than text or library books, comics, newspapers or periodicals may be brought to school without the Principal's approval.",
  "Notice of withdrawal should be given before the fifteenth of the month, else fees for the following month will be charged.",
];

export const codeOfConduct = [
  "Students should be habitually clean and neatly dressed. No student should come to school without proper uniform.",
  "All should join the school prayer and return to their classes in an orderly manner afterwards.",
  "School property should be treated as one's own. Any damage must be made good, and anyone who sees damage should report it.",
  "Scratching furniture or writing and drawing on walls is a bad habit and must be avoided with utmost care.",
  "No pupil shall disturb other classes on the plea of borrowing a pencil, pen or book from friends.",
  "The diary and progress card keep parents and teachers informed of progress, deficiencies and remedial measures.",
  "Every student must bring their student diary to school daily and make proper use of it.",
  "Money should not be lent or borrowed, nor articles exchanged. Valuables like costly watches, pens or ornaments are not advised.",
  "Only one student may leave the class at a time, with a class-pass, for washroom or drinking water.",
  "Pupils accompanied by escorts should leave only after the escort arrives; in case of delay, report to the school office.",
  "No undesirable books, notes, pictures or magazines unrelated to study may be brought to school.",
  "Bicycles must be kept locked. Students may not ride on or around the Vidyalaya grounds.",
  "Students suffering from a contagious or infectious disease should not attend class.",
];

export type Facility = { name: string; img: string; group: "Academics" | "Laboratories" | "Sports" | "Activities" };

export const facilities: Facility[] = [
  { name: "Classrooms", img: "/images/photos/inside-classroom.jpg", group: "Academics" },
  { name: "Computer Lab", img: "/images/photos/computer-lab.jpg", group: "Laboratories" },
  { name: "Library", img: "/images/photos/library.jpg", group: "Academics" },
  { name: "Mathematics & Physics Lab", img: "/images/photos/mathematics-physics-lab.jpg", group: "Laboratories" },
  { name: "Chemistry Lab", img: "/images/photos/chemistry-lab.jpg", group: "Laboratories" },
  { name: "Biology Lab", img: "/images/photos/biology-lab.png", group: "Laboratories" },
  { name: "Social Science Lab", img: "/images/photos/social-science-lab.jpg", group: "Laboratories" },
  { name: "Badminton", img: "/images/photos/badminton.png", group: "Sports" },
  { name: "Kabaddi", img: "/images/photos/kabaddi.jpg", group: "Sports" },
  { name: "Table Tennis & Volleyball", img: "/images/photos/table-tennis-volleyball.jpg", group: "Sports" },
  { name: "Kho Kho", img: "/images/photos/kho-kho.jpg", group: "Sports" },
  { name: "Karate", img: "/images/photos/karate-2.jpg", group: "Sports" },
  { name: "Music Room", img: "/images/photos/music-cum-activity.jpg", group: "Activities" },
  { name: "Indoor Game Room", img: "/images/photos/indoor-game-room.jpg", group: "Activities" },
  { name: "Exhibition & Multi-Purpose Hall", img: "/images/photos/exhibition-cum-multi-purpose-hall.jpg", group: "Activities" },
];

export const infrastructure = [
  { label: "Campus area", value: "9,134 sq. m" },
  { label: "Rooms", value: "54", note: "40 large · 3 medium · 11 small" },
  { label: "Auditorium", value: "1" },
  { label: "Laboratories", value: "4", note: "3 × 500 sq. ft · 1 × 1,000 sq. ft" },
  { label: "Internet", value: "Campus-wide" },
  { label: "Toilets", value: "42", note: "10 girls · 32 boys" },
];

export type Event = { slug: string; title: string; date: string; img: string; category: "Celebration" | "Competition" | "Sports" | "Academic" | "Notice" };

export const events: Event[] = [
  { slug: "janmashtami", title: "Janmashtami Celebrated with Devotion and Joy", date: "2026-02-13", img: "/images/photos/janmashtami-2.jpg", category: "Celebration" },
  { slug: "mothers-day", title: "Mother's Day Celebrated with Love and Gratitude", date: "2026-02-13", img: "/images/photos/mothers-day.jpg", category: "Celebration" },
  { slug: "quiz", title: "Exciting Quiz Competition Held", date: "2026-02-13", img: "/images/photos/quiz.jpg", category: "Competition" },
  { slug: "rangoli", title: "Creative Minds Shine in Rangoli Competition", date: "2026-02-13", img: "/images/photos/rangoli.jpg", category: "Competition" },
  { slug: "childrens-day", title: "A Day of Fun and Happiness: Children's Day", date: "2026-02-13", img: "/images/photos/childrens-day.jpg", category: "Celebration" },
  { slug: "sports", title: "Annual Sports Day Celebrated at R.D. Public School", date: "2026-02-13", img: "/images/photos/sports.jpg", category: "Sports" },
  { slug: "shining-stars", title: "Our Shining Stars — Session 2023-24", date: "2024-05-14", img: "/images/photos/shining-stars.jpg", category: "Academic" },
  { slug: "kabaddi", title: "Sahodaya Inter-School Boys' Kabaddi Competition", date: "2024-01-15", img: "/images/photos/kabaddi.jpg", category: "Sports" },
  { slug: "rakhi", title: "Rakhi Competition", date: "2023-08-28", img: "/images/photos/rakhi.jpg", category: "Competition" },
  { slug: "independence", title: "Independence Day 2023", date: "2023-08-16", img: "/images/photos/independence.jpg", category: "Celebration" },
  { slug: "quiz-2023", title: "Quiz Competition 2023-24", date: "2023-08-16", img: "/images/photos/quiz-2023.jpg", category: "Competition" },
  { slug: "yoga", title: "International Yoga Day 2023", date: "2023-06-22", img: "/images/photos/yoga.jpg", category: "Sports" },
  { slug: "excursion", title: "Excursion to the Water Park 2023", date: "2023-06-22", img: "/images/photos/excursion.jpg", category: "Celebration" },
  { slug: "silver-jubilee", title: "Silver Jubilee Celebration", date: "2023-06-22", img: "/images/photos/silver-jubilee.jpg", category: "Celebration" },
];

export const notices = [
  {
    title: "R.D. Public School urges parents to partner in ensuring holistic development and student discipline",
    date: "2026-02-13",
    img: "/images/notice.jpg",
  },
];

export const admission = {
  steps: [
    { title: "Enquire", text: "Admission enquiries open from the 2nd week of January. Visit the campus — our counsellors will assist you with all details." },
    { title: "Collect the form", text: "Prospectus and application forms are available every year from the school office from mid-January." },
    { title: "Written & oral test", text: "Students seeking admission appear for and qualify in a written and oral test conducted by the Admission Department." },
    { title: "Submit documents", text: "Submit the application with two passport-size photographs, TC and the documents listed below." },
  ],
  classes: [
    { label: "Class I", text: "25% of seats reserved as per the RTE norms of the Government." },
    { label: "Class II – IX", text: "Admissions are based on availability of seats." },
    { label: "Class XI", text: "Begins only after the CBSE Class X results are declared. Forms are available after the Board results." },
  ],
  stream: ["English", "Physics", "Chemistry", "Mathematics", "Biology", "Physical Education"],
  tcNote:
    "Students from districts other than Gaya (Bihar Board) must get their TC countersigned by a competent authority — District Education Office, Dist. Supt. of Education, Block Education Officer or R.O. of CBSE.",
  documents: [
    { name: "Transfer Certificate of candidate", status: "Mandatory" },
    { name: "Birth Certificate of candidate", status: "Mandatory" },
    { name: "Aadhaar of mother", status: "Compulsory" },
    { name: "Aadhaar of father", status: "Compulsory" },
    { name: "Aadhaar of candidate", status: "Compulsory" },
    { name: "Caste Certificate", status: "If applicable" },
  ],
};

export const fees = {
  oneTime: [
    { label: "Registration fee", when: "At purchase of registration form", amount: 500 },
    { label: "Admission fee", when: "At the time of admission", amount: 2500 },
  ],
  tuition: [
    { cls: "I & II", amount: 1100 },
    { cls: "III & IV", amount: 1200 },
    { cls: "V & VI", amount: 1350 },
    { cls: "VII & VIII", amount: 1450 },
    { cls: "IX", amount: 1550 },
    { cls: "X", amount: 1650 },
    { cls: "XI", amount: 1800 },
    { cls: "XII", amount: 2350 },
  ],
  annual: [
    { label: "Miscellaneous", cls: "I – V", amount: 4100 },
    { label: "Miscellaneous", cls: "VI – X", amount: 5000 },
    { label: "Miscellaneous", cls: "XI & XII", amount: 6500 },
    { label: "Development", cls: "I – XII", amount: 1500 },
  ],
  officialChart: "https://rdpublicschool.org.in/wp-content/uploads/2026/01/Annual-Fee-Chart-26-27-pdf.pdf",
  calendarPdf: "https://rdpublicschool.org.in/wp-content/uploads/2026/01/Calendar-2026-27-4.pdf",
};

export const results = [
  { year: 2016, appeared: 87, passed: 85, pct: 97.7 },
  { year: 2017, appeared: 103, passed: 103, pct: 100 },
  { year: 2018, appeared: 92, passed: 68, pct: 73.91 },
  { year: 2019, appeared: 130, passed: 117, pct: 90 },
  { year: 2020, appeared: 153, passed: 127, pct: 83.01 },
];

export type Staff = { name: string; role: string };

export const staff: Staff[] = [
  { name: "Arun Kumar Singh", role: "Principal" },
  { name: "Alka Singh", role: "Vice Principal" },
  { name: "Abha Kumari", role: "TGT" },
  { name: "Abhishek Ranjan", role: "TGT" },
  { name: "Bipin Kumar", role: "PGT" },
  { name: "Dolly Kumari", role: "PRT" },
  { name: "Girja Shankar", role: "PGT" },
  { name: "Jagat Kishore Prasad", role: "PGT" },
  { name: "Kaushal Kumar", role: "TGT" },
  { name: "Krishna Chandra Sharma", role: "PGT" },
  { name: "Kumari Chhaya Sinha", role: "PGT" },
  { name: "Lalita Ray", role: "TGT" },
  { name: "Mukul Kumar Singh", role: "PET" },
  { name: "Naulesh Ray", role: "PRT" },
  { name: "Nisha Gupta", role: "PRT" },
  { name: "Prafull Kumar", role: "TGT" },
  { name: "Pramod Kumar Mishra", role: "TGT" },
  { name: "Prashant Singh", role: "PRT" },
  { name: "Premanjali", role: "PRT" },
  { name: "Rajesh Kumar", role: "TGT" },
  { name: "Rampravesh Paswan", role: "TGT" },
  { name: "Rampukar Singh", role: "TGT" },
  { name: "Ranjeet Kumar", role: "PGT" },
  { name: "Shivendra Kumar", role: "PGT" },
  { name: "Soni Kumari", role: "PRT" },
  { name: "Sunil Kumar", role: "PGT" },
  { name: "Surbhi Sonam", role: "PRT" },
  { name: "Swati Kumari", role: "TGT" },
  { name: "Tuntun Kumar", role: "PRT" },
  { name: "Uday Kumar", role: "PRT" },
  { name: "Upendra Kumar Mishra", role: "Librarian" },
  { name: "Vikash Kumar", role: "TGT" },
  { name: "Vinod Kumar Singh", role: "PGT" },
  { name: "Vinod Kumar Yadav", role: "PGT" },
  { name: "Arun Kumar", role: "Clerk" },
  { name: "Ganga Ram", role: "Support staff" },
  { name: "Champa", role: "Support staff" },
];

export const roleNames: Record<string, string> = {
  PGT: "Post Graduate Teacher",
  TGT: "Trained Graduate Teacher",
  PRT: "Primary Teacher",
  PET: "Physical Education Teacher",
};

const U = "https://rdpublicschool.org.in/wp-content/uploads";

export const disclosure = {
  documents: [
    { title: "Affiliation / Extension of Affiliation (2023–2028)", href: `${U}/2023/09/ExtensionGrant2023-2028.pdf` },
    { title: "Society / Trust Registration Certificate", href: `${U}/2022/02/UTTAMDEV-MANAV-KALYAN-SANSTHAN.pdf` },
    { title: "No Objection Certificate (State Govt.)", href: `${U}/2022/03/noc.pdf` },
    { title: "Recognition Certificate under RTE Act, 2009", href: `${U}/2026/01/DOC-20250528-WA0005.pdf` },
    { title: "Building Safety Certificate", href: `${U}/2022/03/Building-SC.pdf` },
    { title: "Fire Safety Certificate (valid till 23.12.26)", href: `${U}/2026/07/Fire-Safety-Certificate-Valid-till-23.12.26.pdf` },
    { title: "DEO Certificate / Self Certification", href: `${U}/2026/01/Self-Certification-for-Website-1.pdf` },
    { title: "Water, Health & Sanitation Certificate", href: `${U}/2022/03/Water-Sanitation-Certificate.pdf` },
    { title: "Fee Structure 2026-27", href: `${U}/2026/01/Annual-Fee-Chart-26-27-pdf.pdf` },
    { title: "Annual Academic Calendar 2026-27", href: `${U}/2026/01/Calendar-2026-27-4.pdf` },
    { title: "School Management Committee", href: `${U}/2022/03/Managing-Committee-Members.pdf` },
    { title: "Parent Teacher Association Members", href: `${U}/2022/03/PTA-Members.pdf` },
    { title: "Board Examination Results", href: `${U}/2022/03/Result.pdf` },
  ],
  teaching: [
    { label: "Principal", value: "1" },
    { label: "Total teachers", value: "34" },
    { label: "PGT", value: "8" },
    { label: "TGT", value: "13" },
    { label: "PRT", value: "9" },
    { label: "Teacher–section ratio", value: "1.5 : 1" },
    { label: "Special educator", value: "Abha Kumari" },
    { label: "Counsellor & wellness teacher", value: "Sujeet Kumar" },
  ],
  videos: ["StaBrXZaDf4", "ljNRhLqfA88"],
};

export type FaqCategory = "Admissions" | "Fees" | "Academics" | "Campus life";

// Answers are drawn from the admission, fee, facility and disclosure data above — keep them in sync.
export const faqs: { q: string; a: string; category: FaqCategory }[] = [
  {
    q: "Which board is the school affiliated to?",
    a: "R.D. Public School is affiliated to CBSE, New Delhi (Affiliation No. 330422, School Code 65420). The affiliation has been extended for 2023–2028.",
    category: "Academics",
  },
  {
    q: "Which classes does the school offer?",
    a: "We teach from Class I to Class XII. At the senior secondary level (Class XI–XII) the school offers the Science stream.",
    category: "Academics",
  },
  {
    q: "What subjects are offered in Class XI Science?",
    a: "English, Physics, Chemistry, Mathematics, Biology and Physical Education.",
    category: "Academics",
  },
  {
    q: "Is extra help available for students who need it?",
    a: "Yes. Teaching follows continuous comprehensive assessment with remedial measures where needed. The school also has a special educator, a counselling and wellness teacher, and parent–teacher meetings after every term exam to discuss each child's progress.",
    category: "Academics",
  },
  {
    q: "When do admissions open?",
    a: "Admission enquiries open from the 2nd week of January. Prospectus and application forms are available from the school office from mid-January. Class XI admissions begin only after the CBSE Class X results are declared.",
    category: "Admissions",
  },
  {
    q: "Is there an entrance test?",
    a: "Yes. Students seeking admission appear for a written and an oral test conducted by the Admission Department. Admission to Classes II–IX depends on availability of seats.",
    category: "Admissions",
  },
  {
    q: "What documents are needed for admission?",
    a: "Two passport-size photographs, the Transfer Certificate and Birth Certificate of the candidate, Aadhaar of the candidate, mother and father, and a Caste Certificate if applicable.",
    category: "Admissions",
  },
  {
    q: "We are moving from another district. Is anything extra needed?",
    a: "Students from districts other than Gaya (Bihar Board) must get their TC countersigned by a competent authority: the District Education Office, Dist. Supt. of Education, Block Education Officer or the R.O. of CBSE.",
    category: "Admissions",
  },
  {
    q: "Are seats reserved under RTE?",
    a: "Yes. 25% of seats in Class I are reserved as per the RTE norms of the Government.",
    category: "Admissions",
  },
  {
    q: "What is the fee structure?",
    a: "Tuition is charged monthly, from ₹1,100 for Classes I & II up to ₹2,350 for Class XII. One-time charges are a ₹500 registration fee and a ₹2,500 admission fee, plus annual miscellaneous and development charges. The full 2026-27 chart is on the Admissions page.",
    category: "Fees",
  },
  {
    q: "What if we withdraw our child mid-session?",
    a: "Notice of withdrawal should be given before the 15th of the month; otherwise fees for the following month will be charged.",
    category: "Fees",
  },
  {
    q: "What are the school and office timings?",
    a: "The school office is open Monday to Friday, 8:00 AM – 2:00 PM, and Saturday, 8:00 AM – 12:00 PM. Parents can meet the Principal Monday to Friday, 10:30 – 11:30 AM; weekend appointments are available on request.",
    category: "Campus life",
  },
  {
    q: "What sports and activities are available?",
    a: "Kabaddi, volleyball, kho-kho, badminton, karate and table tennis, plus a music room, indoor game room, Scouts & Guides, educational excursions, quizzes, rangoli and cultural celebrations through the year.",
    category: "Campus life",
  },
  {
    q: "What labs and learning spaces does the campus have?",
    a: "Physics, Chemistry, Biology, Mathematics and Social Science labs, a computer lab, a library, an exhibition-cum-multi-purpose hall and campus-wide internet, on a 9,134 sq. m campus.",
    category: "Campus life",
  },
];

// PLACEHOLDER testimonials (sample names) — replace with real, consented quotes from RDPS parents and alumni before going live.
export const testimonials = [
  {
    quote:
      "The teachers know every child by name. My daughter was shy when she joined, and now she is the first to raise her hand in class and on stage at the morning assembly.",
    name: "Sunita Sharma",
    role: "Parent · Class V",
  },
  {
    quote:
      "The parent–teacher meetings after each term are genuinely useful. We are told exactly where our son is weak and what the school is doing about it.",
    name: "Rajesh Verma",
    role: "Parent · Class VIII",
  },
  {
    quote:
      "The labs made the difference for me. Doing the experiments ourselves in Class XI Science gave me confidence for the board practicals.",
    name: "Ananya Gupta",
    role: "Alumna · Science stream",
  },
  {
    quote:
      "Fees are reasonable for the facilities on offer. Sports, karate, Scouts & Guides — my children get much more than just classroom teaching.",
    name: "Ahsan Khan",
    role: "Parent · Classes III & VI",
  },
  {
    quote:
      "My son started in Class I here. The teachers were patient with him from the very first day, and the small classes meant nobody was left behind.",
    name: "Pooja Singh",
    role: "Parent · Class II",
  },
  {
    quote:
      "Regular unit tests and extra classes before the Class X boards kept my daughter on track. She scored well above what we had hoped for.",
    name: "Manoj Kumar",
    role: "Parent · Class X",
  },
  {
    quote:
      "The library and the computer lab were my favourite places. The discipline and habits I picked up at RDPS still help me in college today.",
    name: "Abhishek Mishra",
    role: "Alumnus · Science stream",
  },
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
