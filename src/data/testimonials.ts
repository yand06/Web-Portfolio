export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Catur Apriyadi",
    image:
      "https://ui-avatars.com/api/?name=Andi+Wijaya&background=0D8ABC&color=fff&size=128",
    rating: 5,
    review:
      "Satisfying result, delivered exactly as requested (Highly recommended).",
    date: "July 30, 2025",
  },
  {
    id: 2,
    name: "cofb4rv5",
    image:
      "https://ui-avatars.com/api/?name=Sarah+Kusuma&background=6366F1&color=fff&size=128",
    rating: 5,
    review:
      "Great work, very responsive and easy to discuss ideas with. The result met all expectations.",
    date: "May 23, 2025",
  },
  {
    id: 3,
    name: "***** (Akun anonim)",
    image:
      "https://ui-avatars.com/api/?name=Budi+Santoso&background=10B981&color=fff&size=128",
    rating: 5,
    review: "Excellent.",
    date: "May 20, 2025",
  },
  {
    id: 4,
    name: "rpamwvnx",
    image:
      "https://ui-avatars.com/api/?name=Linda+Chen&background=F59E0B&color=fff&size=128",
    rating: 5,
    review: "Impressive work, the result is very satisfying.",
    date: "May 20, 2025",
  },
  {
    id: 5,
    name: "rpamwvnx",
    image:
      "https://ui-avatars.com/api/?name=Rahman+Hakim&background=8B5CF6&color=fff&size=128",
    rating: 5,
    review:
      "Outstanding! Fast work, quick response, and very pleasant to communicate with.",
    date: "April 22, 2025",
  },
];
