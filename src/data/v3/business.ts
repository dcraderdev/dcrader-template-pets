import { img } from '../images';

export const business = {
  name: 'Calm Coat Veterinary Grooming',
  tagline: 'Evidence-based grooming for anxious and medically complex pets',
  description: 'Seattle\'s first veterinary-supervised grooming studio. We specialize in dogs with anxiety, skin conditions, and special handling needs. No stress. No shortcuts.',
  phone: '(206) 514-7730',
  email: 'care@calmcoat.com',
  address: '4812 Fremont Avenue N, Seattle, WA 98103',
  neighborhood: 'Fremont',
  hours: {
    weekdays: '8:00 AM – 6:00 PM',
    saturday: '9:00 AM – 5:00 PM',
    sunday: 'Closed',
  },
  emergency: 'Partner clinic: (206) 514-7740',
  instagram: '@calmcoatgrooming',
  founded: 2020,
  license: 'WA Veterinary Facility License #VF-20208841 | NAVTA Member',
};

export const team = [
  {
    name: 'Dr. Maria Santos, DVM',
    role: 'Owner & Medical Director',
    bio: 'Veterinarian and certified animal behavior consultant. Dr. Santos opened Calm Coat after seeing countless dogs traumatized by standard grooming shops. She protocols every grooming plan for medically sensitive pets.',
    certifications: ['Doctor of Veterinary Medicine', 'CAAB Certified', 'Fear Free Certified Professional'],
    photo: img('1559839734'),
  },
  {
    name: 'Chris Nakamura',
    role: 'Certified Therapeutic Groomer',
    bio: 'Nationally certified groomer with additional training in low-stress handling. Chris has worked with post-rescue dogs, bite-risk dogs, and senior dogs with mobility limitations for 9 years.',
    certifications: ['NCMG Certified Master Groomer', 'Fear Free Grooming Specialist', 'Orthopedic Handling Trained'],
    photo: img('1472099645785'),
  },
  {
    name: 'Alex Wilson',
    role: 'Client Care Coordinator',
    bio: 'Veterinary technician with a background in behavior support. Alex conducts every intake assessment, communicates medical notes to groomers, and manages the post-appointment care plan.',
    certifications: ['Registered Veterinary Technician', 'Animal Behavior Technician'],
    photo: img('1438761681033'),
  },
];

export const testimonials = [
  {
    name: 'Linda C.',
    breed: 'Rescue pit bull owner',
    stars: 5,
    text: 'My dog Maple had been flagged as "ungroom-able" at two other shops. Dr. Santos assessed her, made a gentle handling plan, and Chris groomed her in two calm sessions with no muzzle and no fear. I cried.',
    date: 'April 2025',
  },
  {
    name: 'Dr. Kevin O.',
    breed: 'Veterinarian & Dachshund owner',
    stars: 5,
    text: 'As a vet, I\'m picky. Calm Coat is the only place I\'d trust with my senior dachshund who has IVDD. They modified the entire grooming table setup and never once rushed him.',
    date: 'February 2025',
  },
  {
    name: 'Nina P.',
    breed: 'Standard Poodle owner',
    stars: 5,
    text: 'Rosie has severe anxiety—shaking, panting, the works. After two Calm Coat appointments the shaking has stopped. Whatever they\'re doing is working.',
    date: 'January 2025',
  },
];
