import { img } from '../images';

export const business = {
  name: 'The Hollow Pet Hotel & Spa',
  tagline: 'Where extraordinary pets receive extraordinary care',
  description: 'Beverly Hills\' most exclusive pet hospitality experience. Private suites, organic cuisine, spa therapies, and round-the-clock attentive care that matches the lifestyle your pet deserves.',
  phone: '(310) 888-4400',
  email: 'reservations@thehollowpethotel.com',
  address: '9441 Wilshire Boulevard, Beverly Hills, CA 90212',
  neighborhood: 'Beverly Hills',
  hours: {
    weekdays: 'Reception 7:00 AM – 9:00 PM',
    saturday: 'Reception 8:00 AM – 8:00 PM',
    sunday: 'Reception 9:00 AM – 7:00 PM (24-hr care provided)',
  },
  emergency: '24/7 Line: (310) 888-4401',
  instagram: '@thehollowpethotel',
  founded: 2018,
  license: 'CA Pet Facility License #PF-20188847 | ABKA Certified Facility',
};

export const team = [
  {
    name: 'Philippe Moreau',
    role: 'General Manager',
    bio: 'Fifteen years managing five-star hospitality before bringing those standards to pet care. Philippe personally approves every protocol at The Hollow and oversees the guest experience from reservation to checkout.',
    certifications: ['Former Four Seasons Senior Manager', 'ABKA Certified', 'Animal Welfare Approved'],
    photo: img('1507003211169'),
  },
  {
    name: 'Isabella Hart',
    role: 'Head Spa & Wellness Therapist',
    bio: 'Certified canine massage therapist and grooming artisan. Isabella\'s spa treatments blend European grooming traditions with evidence-based calming techniques. Her guest waitlist runs three months.',
    certifications: ['CCMT Certified Canine Massage', 'European Grooming Academy Graduate', 'Aromatherapy for Animals'],
    photo: img('1559839734'),
  },
  {
    name: 'Marcus Chen',
    role: 'Executive Pet Chef',
    bio: 'Classically trained chef who pivoted to pet nutrition after studying canine dietary science at Tufts. Marcus designs weekly menus using organic, locally-sourced proteins and seasonal vegetables for our boarding guests.',
    certifications: ['Culinary Institute of America', 'Canine Nutrition Specialist', 'Raw Feeding Veterinary Society Member'],
    photo: img('1500648767791'),
  },
  {
    name: 'Dr. Sarah Kim, DVM',
    role: 'On-Call Veterinarian',
    bio: 'Board-certified veterinarian available to all guests 24 hours. Dr. Kim conducts wellness checks on extended stays and is on-call for any health concerns throughout a guest\'s visit.',
    certifications: ['DVM, Cornell College of Veterinary Medicine', 'DACVIM Certified', 'Emergency Medicine Trained'],
    photo: img('1494790108377'),
  },
];

export const testimonials = [
  {
    name: 'Adriana M.',
    breed: 'Italian Greyhound owner',
    stars: 5,
    text: 'Valentino is a diva. He has needs. The Hollow not only met them—they anticipated them. The organic lamb entrée, the cashmere blanket in his suite, the goodnight check-in text. I\'ve stayed in five-star hotels that offered less.',
    date: 'April 2025',
  },
  {
    name: 'James R.',
    breed: 'Standard Poodle owner',
    stars: 5,
    text: 'We travel internationally six times a year. The Hollow is the only place we\'ve found that handles our poodle\'s complex grooming schedule and medication routine without a single error in two years. Irreplaceable.',
    date: 'February 2025',
  },
  {
    name: 'Celeste & Hugo F.',
    breed: 'Afghan Hound owners',
    stars: 5,
    text: 'Isabella\'s coat treatments have transformed our Afghan\'s silk coat. We\'ve tried every groomer in LA and nobody else comes close. The in-suite camera lets us check in from Tokyo. Pure peace of mind.',
    date: 'December 2024',
  },
];
