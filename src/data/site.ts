// All company data in one place. Values marked PENDING wait for the manager (docs/needs.md).
// Empty values hide their blocks: the site never shows an empty block or "Loading...".
// Not shown until the manager confirms them: "10+ trucks", "15+ drivers", "98% on-time", "50+ partners",
// "4.9 driver satisfaction", "5+ years", "LIVE METRICS", "Texas" (the company is in Washington).

export const company = {
  name: 'Good Idea Cargo',
  legalName: 'Good Idea Cargo LLC',
  domain: 'goodideacargo.com',
  street: '707 S Grady Way, Ste 6013',
  city: 'Renton',
  state: 'WA',
  stateName: 'Washington',
  zip: '98057',
  phone: '(206) 704-4444',
  phoneHref: 'tel:+12067044444',
  email: 'info@goodideacargo.com', // one spelling everywhere (the old site mixed goodideaCargo / goodideacargo)
  dot: '', // PENDING: USDOT number
  mc: '', // PENDING: MC number
};

export const fullAddress = `${company.street}, ${company.city}, ${company.state} ${company.zip}`;

// Pacific time (the office is in Renton, WA). The old site said "Mon–Fri 7 AM – 7 PM CST" = 5 AM – 5 PM PT.
// PENDING: confirm these hours with the manager.
export const hours = {
  office: 'Mon–Fri, 5:00 AM – 5:00 PM PT',
  dispatch: 'Emergency dispatch 24/7',
};

export const links = {
  maps: 'https://www.google.com/maps/search/?api=1&query=707+S+Grady+Way+Ste+6013%2C+Renton%2C+WA+98057',
  fmcsa: '', // PENDING: SAFER snapshot URL once the USDOT number is confirmed
};

// PENDING: the company's own profiles. The old site linked instagram.com, facebook.com and linkedin.com home pages.
export const social: { name: string; url: string }[] = [];

// PENDING: real reviews with permission to publish. The old site showed "No reviews available".
export const reviews: { quote: string; name: string; role: string }[] = [];

export const services = [
  {
    id: 'full-truckload',
    title: 'Full truckload',
    photo: 'svc-ftl',
    body: 'A whole trailer for your freight, picked up on your date and delivered direct, with no stops for other shippers.',
    points: ['One shipper per trailer', 'Pickup and delivery appointments you set', 'Lanes across the 48 contiguous states'],
  },
  {
    id: 'expedited',
    title: 'Expedited freight',
    photo: 'svc-expedited',
    body: 'Time-critical loads dispatched first, for shipments that cannot wait for the next open truck.',
    points: ['Priority dispatch', 'Updates at pickup, in transit and at delivery', 'After-hours dispatch for emergencies'],
  },
  {
    id: 'dedicated',
    title: 'Dedicated lanes',
    photo: 'svc-dedicated',
    body: 'A shipping plan built around your recurring freight: the same lane, the same schedule, a truck you can count on.',
    points: ['Weekly or daily recurring runs', 'Route and timing planned with you', 'One contact for every load'],
  },
];

export const serviceOptions = ['Full truckload', 'Expedited', 'Dedicated lane', 'Not sure yet'];
export const freightOptions = ['Palletized freight', 'Boxed or packaged goods', 'Machinery or equipment', 'Building materials', 'Food and beverage (dry)', 'Other'];

// The quote process from the old Get a Quote page. A real sequence, so it is numbered.
export const quoteSteps = [
  { title: 'Send your shipment details', body: 'Pickup, delivery, date and what you are shipping. Two minutes, online or by phone.' },
  { title: 'We review your request', body: 'Dispatch checks the lane, the date and a truck that fits.' },
  { title: 'You get a quote', body: 'A clear rate by phone or email. No obligation.' },
  { title: 'Confirm and we pick up', body: 'Say yes and we schedule the pickup.' },
];

export const shipperReasons = [
  { title: 'One team from quote to delivery', body: 'The people who quote your load are the people who dispatch it, so nothing gets lost between handoffs.' },
  { title: 'Straight answers', body: 'A clear rate up front and a call when plans change, not after.' },
  { title: 'Dispatch that picks up', body: 'Office hours 5 AM – 5 PM Pacific, and emergency dispatch around the clock.' },
];

// From the old Why Us page (company statements). PENDING: confirm the bonus programs and home time policy.
export const driverBenefits = [
  { title: 'Weekly direct deposit', body: 'Paid every week, on time.' },
  { title: 'Steady freight lanes', body: 'Consistent routes across the 48 states.' },
  { title: 'Home time that works', body: 'Schedules planned around your life.' },
  { title: '24/7 dispatch', body: 'Real support on every load, day or night.' },
  { title: 'No hidden deductions', body: 'A pay structure you can read and check.' },
  { title: 'Sign-on and safety bonuses', body: 'Bonus programs for drivers who run safe.' },
];

export const driverRoles = ['Owner-operator', 'Company driver', 'Not sure yet'];
export const cdlOptions = ['Class A CDL', 'Class B CDL', 'No CDL yet'];
export const experienceOptions = ['Less than 1 year', '1 to 2 years', '3 to 5 years', 'More than 5 years'];

// Fleet list (PENDING: units, year, equipment). While empty, the Fleet page shows a plain note instead.
export const fleet: { unit: string; tractor: string; trailer: string; year?: number }[] = [];

// What the old Fleet page said every truck has (company statements). PENDING: confirm.
export const fleetStandards = [
  { title: 'Inspected and maintained', body: 'Every unit is inspected and serviced on a schedule, not when something breaks.' },
  { title: 'Tracked on the road', body: 'Trucks report their location, so dispatch can answer "where is my load?" right away.' },
  { title: 'Ready for daily freight', body: 'Late-model equipment set up for full truckloads and expedited runs.' },
];
