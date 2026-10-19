export interface DentistProfile {
  id: string; slug: string; name: string; title: string; qualifications: string;
  specialization: string; experienceYears: number; bio: string; philosophy: string;
  education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string;
}
export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string;
  clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}
export interface ClinicInformation {
  name: string; legalName: string; tagline: string; establishedYear?: number;
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}
export const CLINIC_INFO: ClinicInformation = {
  name: 'Platinum Roof Restorations Cairns', legalName: 'Platinum Roof Restorations Cairns',
  tagline: 'Roof restoration and maintenance in Cairns.',
  primaryLocation: {
    street: '18/20 Mac Peak Cres', suite: '', city: 'Smithfield', state: 'Queensland', postalCode: '4878', country: 'Australia',
    directions: '18/20 Mac Peak Cres, Smithfield QLD 4878, Australia',
    landmarks: '5PG4+86 Smithfield, Queensland, Australia',
  },
  contact: { phone: '+61 434 251 741', emergencyPhone: '+61 434 251 741', whatsapp: '+61 434 251 741', website: 'https://platinumroofingcairns.com.au/', email: 'platinumroofingcairns@outlook.com' },
  identityHighlights: ['Roofing contractor', 'Smithfield, Cairns, Queensland'],
  schedule: [
    { day: 'Monday', hours: '7 AM–4 PM' }, { day: 'Tuesday', hours: '7 AM–4 PM' },
    { day: 'Wednesday', hours: '7 AM–4 PM' }, { day: 'Thursday', hours: '7 AM–4 PM' },
    { day: 'Friday', hours: '7 AM–4 PM' }, { day: 'Saturday', hours: '9 AM–12 PM' }, { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [{ value: 5, suffix: '.0', label: 'Google rating', description: 'Based on 2 customer reviews.' }],
  accreditations: ['Shieldcoat accredited applicators'],
};
const teamId = 'platinum-roof-restorations-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'platinum-roof-restorations-team', name: 'The Platinum Team', title: 'Cairns roofing restoration team',
  qualifications: '', specialization: 'Roof restorations, painting, cleaning and maintenance', experienceYears: 0,
  bio: 'Platinum Roof Restorations provides roof restoration, painting, cleaning, re-screwing and repointing in Cairns. The team also helps address roof leaks and colour changes to Colorbond roofs.',
  philosophy: 'Respectful, careful work and a clear conversation about the results you want for your roof.',
  education: [], memberships: [], specialties: ['Roof restorations', 'Roof painting', 'Roof cleaning', 'Roof re-screws', 'Repointing'],
  image: '/images/jsroof-stock-01.jpg', warmImage: '/images/jsroof-stock-02.jpg',
}];
const photos = Array.from({ length: 17 }, (_, i) => `/images/jsroof-stock-${String(i + 1).padStart(2, '0')}.jpg`);
const team = teamId;
const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], photo: number): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `A roof assessment can help identify what work is appropriate for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Discuss your roof', duration: 'Initial conversation', description: 'Tell us what you have noticed and the result you would like.', clinicalDetails: 'We discuss your roof, the visible issue and the work you have in mind.' },
    { stepNumber: 2, title: 'Inspect and plan', duration: 'By arrangement', description: 'We review the roof and explain the recommended scope.', clinicalDetails: 'Materials, access and any repairs are discussed before work begins.' },
    { stepNumber: 3, title: 'Complete the work', duration: 'As agreed', description: 'Our team carries out the agreed roofing work.', clinicalDetails: 'Timing depends on the roof, agreed scope, access and weather.' },
    { stepNumber: 4, title: 'Review the finish', duration: 'On completion', description: 'We review the completed work with you.', clinicalDetails: 'You can discuss any questions about the finished project with our team.' },
  ],
  recoveryTimeline: [
    { period: 'Before work', expectedSensations: 'The work, access and timing are discussed.', careProtocol: 'Share roof details and any site access considerations.' },
    { period: 'During work', expectedSensations: 'Duration varies by roof and agreed scope.', careProtocol: 'Keep clear of the work area and follow site guidance.' },
    { period: 'After work', expectedSensations: 'The finished project is ready to review.', careProtocol: 'Contact the team with any questions about the completed work.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Roof size and condition', 'Materials and agreed scope', 'Access and site conditions'], whatIsIncluded: ['Discussion of your roofing needs', 'Agreed work scope', 'Review of the finished work'], note: 'The team confirms pricing after discussing and assessing your roof and project requirements.' },
  beforeAfterCase: { category: name, clinicalContext: 'Roofing images are illustrative; project requirements depend on your roof and agreed scope.', beforeLabel: 'Roofing project', afterLabel: 'Finished roof', beforeImage: photos[photo % photos.length], afterImage: photos[(photo + 1) % photos.length], timeframe: 'Project imagery' },
  assignedDentistId: team,
  faqs: [
    { question: `What does ${name.toLowerCase()} involve?`, answer: `${description} The work is discussed with you after reviewing your roof and requirements.` },
    { question: 'What affects the quote?', answer: 'Roof size and condition, materials, access and the agreed scope can affect the quote. Contact us to discuss your property.' },
    { question: 'How long does the work take?', answer: 'Timing depends on the roof, weather, access and the work agreed. We discuss a suitable schedule with you.' },
    { question: 'How do I arrange a quote?', answer: 'Call Platinum Roof Restorations Cairns on +61 434 251 741 or use the request-a-quote form.' },
  ],
});
export const SERVICES: ServiceDetail[] = [
  makeService('roof-restoration', 'Roof Restoration', 'Restore and protect your roof for Cairns conditions.', 'A complete roof restoration can include repairs, high-pressure cleaning and painting with Shieldcoat coatings. Full restorations are backed by a 12-year warranty; Shieldcoat finishes include a 6-year colour fade warranty.', ['An ageing or weathered roof', 'A roof needing repairs, cleaning and painting', 'A roof affected by Cairns sun, rain or humidity'], ['Repair, clean and paint as part of a comprehensive restoration', 'Shieldcoat coatings for a durable finish', '12-year restoration warranty and 6-year colour fade warranty'], 0),
  makeService('roof-painting', 'Roof Painting', 'Refresh your roof with long-lasting colour and protection.', 'Professional roof painting using Shieldcoat Roofbond coatings, with cleaning and preparation followed by primer and two coats. Shieldcoat finishes include a 6-year colour fade warranty.', ['A faded or weathered roof', 'A roof colour change after renovations', 'A roof ready for a protective coating'], ['Wide colour options', 'Roofbond membrane for durable protection', '6-year colour fade warranty for Shieldcoat finishes'], 2),
  makeService('roof-cleaning', 'Roof Cleaning', 'Remove dirt and buildup from your roof.', 'High-pressure roof cleaning removes dirt, mould and buildup, helps restore appearance and prepares a roof for painting or restoration.', ['Dirt or grime buildup', 'Mould, moss or lichen on the roof', 'Preparation before painting or restoration'], ['Improves roof appearance', 'Helps prepare surfaces for restoration', 'Cleaning suited to the roofing material'], 4),
  makeService('roof-rescrews', 'Roof Re-Screws', 'Secure metal roof sheets with replacement fasteners.', 'Roof re-screwing replaces worn, loose or corroded roofing screws with weather-resistant fasteners to help secure metal roof sheets and reduce water entry.', ['Rusted, corroded or loose screws', 'Missing fasteners or shifting roof sheets', 'Leaks around roof fasteners'], ['Corrosion-resistant replacement screws', 'Improved roof sheet security', 'Helps reduce leak risks'], 6),
  makeService('repointing', 'Roof Repointing', 'Renew roof tile joints to help keep water out.', 'Roof repointing renews deteriorated mortar around roof tiles using flexible, weather-resistant pointing compounds to reinforce the joints.', ['Cracked or missing mortar', 'Loose or shifting tiles', 'Leaks or damp patches around tiled roofs'], ['Helps prevent leaks and water damage', 'Reinforces roof tile joints', 'Refreshes the roof finish'], 8),
];
export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'roof-restoration-cairns', title: 'What to expect from a roof restoration', category: 'Roof Restoration', readTime: '3 min read', publishDate: '2026-10-19', lastUpdated: '2026-10-19', authorId: team, excerpt: 'Learn how roof repairs, cleaning and painting can be brought together in a restoration.', leadImage: photos[0], relatedServiceSlug: 'roof-restoration', content: { intro: 'A roof restoration brings together the work needed to repair, clean and paint a roof. The right scope depends on its condition and the result you want.', sections: [{ heading: 'Start with the roof condition', body: 'The roof should be reviewed for damage, leaks, loose fasteners or deteriorated tile joints before the work is agreed.' }, { heading: 'Plan cleaning and coatings', body: 'Cleaning prepares the surface, while an appropriate coating can refresh appearance and add protection. Ask about the coating, colour range and applicable warranties.' }] } },
  { slug: 'choosing-a-roof-colour', title: 'Planning a roof colour change', category: 'Roof Painting', readTime: '3 min read', publishDate: '2026-10-19', lastUpdated: '2026-10-19', authorId: team, excerpt: 'Consider the roof condition, colour options and preparation before painting.', leadImage: photos[2], relatedServiceSlug: 'roof-painting', content: { intro: 'A roof colour change can refresh a home after renovations. Begin by checking the roof condition and discussing preparation and coating options.', sections: [{ heading: 'Choose a suitable finish', body: 'Ask about the available Shieldcoat colours, Roofbond coating and colour fade warranty.' }, { heading: 'Prepare the roof', body: 'Cleaning, repairs and primer help prepare the surface before roof coating is applied.' }] } },
  { slug: 'when-to-clean-a-roof', title: 'Why roof cleaning matters', category: 'Roof Cleaning', readTime: '3 min read', publishDate: '2026-10-19', lastUpdated: '2026-10-19', authorId: team, excerpt: 'Dirt, mould and buildup affect appearance and can signal a need for roof maintenance.', leadImage: photos[4], relatedServiceSlug: 'roof-cleaning', content: { intro: 'Dirt, mould and other buildup can make a roof look tired. Professional cleaning can refresh its appearance and prepare it for restoration or painting.', sections: [{ heading: 'Look for visible buildup', body: 'Mould, moss, lichen and grime are reasons to discuss roof cleaning with a roofing professional.' }, { heading: 'Keep roof access safe', body: 'Do not climb onto the roof to inspect or clean it yourself. Discuss a safe assessment with a roofing contractor.' }] } },
];
