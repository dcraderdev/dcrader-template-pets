import { img } from '../images';

export const business = {
  name: 'Paws & Pine',
  tagline: 'Boutique boarding for beloved dogs',
  description: 'San Francisco\'s most lovingly curated pet boarding experience. Every dog stays like a guest, not a resident.',
  phone: '(415) 882-3047',
  email: 'hello@pawsandpine.com',
  address: '2291 Hayes Street, San Francisco, CA 94117',
  neighborhood: 'Hayes Valley',
  hours: {
    weekdays: '7:00 AM – 7:00 PM',
    saturday: '8:00 AM – 6:00 PM',
    sunday: '9:00 AM – 5:00 PM',
  },
  emergency: '(415) 882-3048',
  instagram: '@pawsandpine',
  founded: 2017,
  license: 'CA Pet Facility License #PF-20178843',
};

export const team = [
  {
    name: 'Maya Chen',
    role: 'Owner & Head of Care',
    bio: 'Former veterinary technician with 12 years of experience. Maya opened Paws & Pine after years working in SF animal shelters—she believes every dog deserves the kind of attention you\'d give your own.',
    certifications: ['Fear Free Certified', 'Pet CPR & First Aid'],
    photo: img('1494790108377'),
  },
  {
    name: 'James Holloway',
    role: 'Head Groomer',
    bio: 'NDGAA certified with a specialty in breed-standard cuts and curly/double coats. James has a particular gift for anxious dogs—his calm approach turns skeptical pups into regulars.',
    certifications: ['NDGAA Certified', 'Advanced Dematting'],
    photo: img('1472099645785'),
  },
  {
    name: 'Sofia Park',
    role: 'Daycare Lead',
    bio: 'Animal behavior graduate from UC Davis. Sofia manages daily pack dynamics with a keen eye—every dog gets proper introductions and play groups matched by size and temperament.',
    certifications: ['IAABC Associate', 'Canine First Aid'],
    photo: img('1438761681033'),
  },
];

export const testimonials = [
  {
    name: 'Rachel T.',
    breed: 'Goldendoodle owner',
    stars: 5,
    text: 'Mochi has boarded here six times and she is always excited to go back. The photo updates twice a day are everything—I feel zero guilt leaving her. Worth every dollar.',
    date: 'March 2025',
  },
  {
    name: 'David & Sung Lee',
    breed: 'Bernese Mountain Dog owners',
    stars: 5,
    text: 'Our Berner Bruno is enormous and anxious with strangers. Maya spent 45 minutes just on intake meeting him. He came back calmer than when he left. Unreal.',
    date: 'January 2025',
  },
  {
    name: 'Priya S.',
    breed: 'Rescue mix owner',
    stars: 5,
    text: 'After a bad experience at a big chain, Paws & Pine restored my faith in boarding. Small, quiet, clean, and the team genuinely knows my dog\'s name, quirks, and favorite toy.',
    date: 'November 2024',
  },
];
