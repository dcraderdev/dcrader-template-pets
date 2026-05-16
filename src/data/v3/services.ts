export const services = [
  {
    name: 'Therapeutic Bath & Dry',
    description: 'Medicated or hypoallergenic shampoos prescribed per coat type. Low-noise dryers, no cage drying. 60–90 min per appointment.',
    icon: '🛁',
    price: 'From $55',
    highlights: ['Vet-approved shampoos', 'Low-noise equipment', 'No cage dryers ever', 'Coat health report'],
  },
  {
    name: 'Anxiety-Specialized Full Groom',
    description: 'Extended sessions with rest breaks, desensitization pauses, and adaptive handling. No rushing.',
    icon: '🌿',
    price: 'From $95',
    highlights: ['2–3 hr gentle session', 'Rest breaks scheduled', 'Pheromone diffusers', 'Post-groom behavior notes'],
  },
  {
    name: 'Medical Coat Treatment',
    description: 'For dogs with skin conditions, post-surgery coats, or chronic skin disease. Prescription shampoo administration and documentation.',
    icon: '🩺',
    price: 'From $110',
    highlights: ['DVM-prescribed protocol', 'Before/after coat photos', 'Treatment documentation', 'Vet coordination available'],
  },
  {
    name: 'Nail Grinding & Paw Care',
    description: 'Dremmel grinding for sound-sensitive dogs who panic at clippers. Paw pad check, moisturizer, and nail health record.',
    icon: '🐾',
    price: 'From $28',
    highlights: ['Dremel vs. clipper option', 'Paw pad check', 'Nail health record', 'No hold-down restraint'],
  },
];

export const packages = [
  {
    name: 'First Visit Assessment',
    price: '$45',
    period: 'one time',
    description: 'Behavior and coat assessment with Dr. Santos',
    features: ['30-min intake with DVM', 'Coat health report', 'Custom grooming plan', 'Free first nail grind'],
    featured: false,
  },
  {
    name: 'Monthly Maintenance',
    price: '$185',
    period: 'per month',
    description: 'Full groom + mid-month bath and brush',
    features: ['Full groom once/month', 'Mid-month bath & brush', 'Coat condition tracking', 'Priority rebooking', 'Skin supplement discount'],
    featured: true,
  },
  {
    name: 'Senior Care Program',
    price: '$220',
    period: 'per month',
    description: 'Specialized for dogs 8+',
    features: ['Monthly full groom', 'Orthopedic table setup', 'Joint-safe positioning', 'Monthly DVM check-in notes', 'Mobility assessment'],
    featured: false,
  },
];
