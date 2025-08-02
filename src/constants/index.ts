// TypeScript interfaces
export interface DockItem {
  icon: string;
  label: string;
  to: string;
}

export interface CatProfile {
  id: number;
  name: string;
  age: number;
  image: string;
  description: string;
  personality: string[];
  adoptionFee: number;
  isAvailable: boolean;
  specialNeeds: boolean;
  goodWithKids: boolean;
  goodWithOtherCats: boolean;
  goodWithDogs: boolean;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  isVegan?: boolean;
  caffeine?: string;
  allergens?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  catAdopted?: string;
  date: string;
}

export interface Event {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  price: number | string;
  description: string;
  features: string[];
  image: string;
  capacity?: number;
  isRecurring?: boolean;
  category: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  icon: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

// Navigation items for dock
export const DOCK_ITEMS: DockItem[] = [
  { icon: "🏠", label: "Home", to: "/" },
  { icon: "🐱", label: "Cats", to: "/cats" },
  { icon: "☕", label: "Menu", to: "/menu" },
  { icon: "📖", label: "About", to: "/about" },
  { icon: "🎉", label: "Events", to: "/events" },
  { icon: "📸", label: "Gallery", to: "/gallery" },
  { icon: "📝", label: "Blog", to: "/blog" },
  { icon: "📅", label: "Reservations", to: "/reservations" },
  { icon: "🛍️", label: "Shop", to: "/shop" },
];

// Cat profiles data
export const CAT_PROFILES: CatProfile[] = [
  {
    id: 1,
    name: "Whiskers",
    age: 3,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop&crop=face",
    description: "A gentle 3-year-old tabby who loves sunbathing and gentle pets. Perfect for quiet homes.",
    personality: ["Gentle", "Calm", "Affectionate"],
    adoptionFee: 75,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: true,
    goodWithDogs: false
  },
  {
    id: 2,
    name: "Luna",
    age: 2,
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&h=600&fit=crop&crop=face",
    description: "A playful night owl who loves interactive toys and climbing.",
    personality: ["Playful", "Social", "Energetic"],
    adoptionFee: 100,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: true,
    goodWithDogs: true
  },
  {
    id: 3,
    name: "Oliver",
    age: 1,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop&crop=face",
    description: "An energetic kitten who gets along great with other cats and loves to play.",
    personality: ["Playful", "Energetic", "Social"],
    adoptionFee: 125,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: true,
    goodWithDogs: true
  },
  {
    id: 4,
    name: "Bella",
    age: 4,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop&crop=face",
    description: "A sweet and affectionate cat who loves lap time and gentle brushing.",
    personality: ["Sweet", "Affectionate", "Calm"],
    adoptionFee: 85,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: true,
    goodWithDogs: false
  },
  {
    id: 5,
    name: "Max",
    age: 5,
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop&crop=face",
    description: "A curious and intelligent cat who enjoys puzzle toys and exploration.",
    personality: ["Curious", "Intelligent", "Independent"],
    adoptionFee: 75,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: false,
    goodWithDogs: false
  },
  {
    id: 6,
    name: "Chloe",
    age: 6,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop&crop=face",
    description: "An elegant and calm cat, perfect for seniors or quiet households.",
    personality: ["Elegant", "Calm", "Gentle"],
    adoptionFee: 65,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: true,
    goodWithDogs: false
  },
  {
    id: 7,
    name: "Milo",
    age: 2,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop&crop=face",
    description: "An adventurous spirit who loves outdoor enclosures and bird watching.",
    personality: ["Adventurous", "Curious", "Active"],
    adoptionFee: 95,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: true,
    goodWithDogs: true
  },
  {
    id: 8,
    name: "Sophie",
    age: 7,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop&crop=face",
    description: "A wise and observant cat who enjoys quiet companionship and window perches.",
    personality: ["Wise", "Gentle", "Independent"],
    adoptionFee: 55,
    isAvailable: true,
    specialNeeds: false,
    goodWithKids: true,
    goodWithOtherCats: true,
    goodWithDogs: false
  }
];

// Menu items
export const MENU_ITEMS = {
  coffee: [
    {
      id: 1,
      name: "Whiskers Latte",
      price: 5.50,
      description: "Smooth espresso with steamed milk and a hint of vanilla",
      category: "coffee",
      isVegan: false,
      caffeine: "high"
    },
    {
      id: 2,
      name: "Purr-fect Cappuccino",
      price: 4.75,
      description: "Rich espresso topped with velvety foam art",
      category: "coffee",
      isVegan: false,
      caffeine: "high"
    },
    {
      id: 3,
      name: "Cat-puccino",
      price: 5.25,
      description: "Our signature blend with caramel and cinnamon",
      category: "coffee",
      isVegan: false,
      caffeine: "medium"
    },
    {
      id: 4,
      name: "Meow Mocha",
      price: 5.75,
      description: "Chocolate and coffee blend that'll make you purr",
      category: "coffee",
      isVegan: false,
      caffeine: "high"
    }
  ],
  pastries: [
    {
      id: 1,
      name: "Paw Print Croissant",
      price: 3.50,
      description: "Buttery croissant shaped like a cute paw print",
      category: "pastries",
      isVegan: false,
      allergens: ["gluten", "dairy"]
    },
    {
      id: 2,
      name: "Tuna Melt Sandwich",
      price: 8.95,
      description: "Grilled sandwich with tuna, cheese, and fresh herbs",
      category: "pastries",
      isVegan: false,
      allergens: ["gluten", "dairy", "fish"]
    },
    {
      id: 3,
      name: "Kitty Cookies",
      price: 2.25,
      description: "Cat-shaped cookies made with love and organic ingredients",
      category: "pastries",
      isVegan: true,
      allergens: ["gluten"]
    },
    {
      id: 4,
      name: "Fish & Chips",
      price: 12.95,
      description: "Crispy fish with seasoned fries (cat-approved!)",
      category: "pastries",
      isVegan: false,
      allergens: ["gluten", "fish"]
    }
  ],
  specials: [
    {
      id: 1,
      name: "Adoption Special",
      price: 15.00,
      description: "Coffee + pastry + $5 donation to cat rescue",
      category: "specials",
      isVegan: false
    },
    {
      id: 2,
      name: "Cat Lover's Combo",
      price: 18.50,
      description: "Any drink + sandwich + 30 minutes of cat playtime",
      category: "specials",
      isVegan: false
    },
    {
      id: 3,
      name: "Plaid Package",
      price: 25.00,
      description: "Full meal + drink + take-home plaid cat toy",
      category: "specials",
      isVegan: false
    }
  ]
};

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "I found my best friend Luna here! The staff was so helpful in matching me with the perfect cat. The coffee is amazing too!",
    rating: 5,
    catAdopted: "Luna",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Mike Chen",
    text: "The cat yoga classes are incredible. There's nothing more relaxing than doing downward dog while a cat walks under you!",
    rating: 5,
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "Perfect place for a first date! The cats break the ice and the atmosphere is so cozy. We're getting married next month!",
    rating: 5,
    date: "2024-02-01"
  },
  {
    id: 4,
    name: "David Thompson",
    text: "As a coffee enthusiast, I'm impressed by their brewing techniques. The Ethiopian beans are exceptional!",
    rating: 5,
    date: "2024-02-10"
  }
];

// Events
export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Purr-fect Yoga",
    subtitle: "Cat Yoga Sessions",
    date: "Every Saturday",
    time: "9:00 AM - 10:30 AM",
    price: 25,
    description: "Find your zen while adorable cats roam freely around your yoga mat. Our certified instructor guides you through gentle poses as our friendly felines provide the ultimate relaxation experience.",
    features: ["All levels welcome", "Yoga mats provided", "Cat interactions included", "Herbal tea after class"],
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
    capacity: 12,
    isRecurring: true,
    category: "wellness"
  },
  {
    id: 2,
    title: "Adoption Days",
    subtitle: "Find Your Furry Soulmate",
    date: "First Sunday of Every Month",
    time: "11:00 AM - 4:00 PM",
    price: "Free",
    description: "Meet our wonderful cats looking for their forever homes! Spend quality time with potential companions and learn about their unique personalities from our adoption counselors.",
    features: ["Meet all available cats", "Adoption counseling", "Home visit arrangements", "Adoption packages available"],
    image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=400&h=300&fit=crop",
    capacity: 50,
    isRecurring: true,
    category: "adoption"
  },
  {
    id: 3,
    title: "Coffee Cupping Sessions",
    subtitle: "Discover Your Perfect Brew",
    date: "Every Wednesday",
    time: "6:00 PM - 7:30 PM",
    price: 15,
    description: "Join our head barista for an educational journey through different coffee origins, processing methods, and flavor profiles. Learn to taste coffee like a pro while cats provide entertainment.",
    features: ["5 coffee tastings", "Professional cupping techniques", "Take-home tasting notes", "10% off coffee bean purchases"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    capacity: 15,
    isRecurring: true,
    category: "coffee"
  },
  {
    id: 4,
    title: "Kitten Socialization Hours",
    subtitle: "Help Our Youngest Residents",
    date: "Tuesday & Thursday",
    time: "2:00 PM - 4:00 PM",
    price: 10,
    description: "Spend time with our adorable kittens and help them develop social skills. Perfect for those who want to contribute to kitten development while getting their daily dose of cuteness.",
    features: ["Play with kittens", "Socialization activities", "Educational talks", "Photo opportunities"],
    image: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=400&h=300&fit=crop",
    capacity: 8,
    isRecurring: true,
    category: "volunteer"
  },
  {
    id: 5,
    title: "Plaid & Paws Paint Night",
    subtitle: "Creative Fun with Feline Friends",
    date: "Last Friday of Every Month",
    time: "7:00 PM - 9:00 PM",
    price: 35,
    description: "Unleash your creativity while cats inspire your artistic side! Paint a plaid-themed masterpiece with step-by-step guidance. All materials included, plus wine and light snacks.",
    features: ["All art supplies included", "Wine & snacks", "Take home your artwork", "Cat-themed painting tutorials"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    capacity: 20,
    isRecurring: true,
    category: "creative"
  },
  {
    id: 6,
    title: "Senior Cat Appreciation Day",
    subtitle: "Celebrating Our Wise Whiskers",
    date: "Third Saturday of Every Month",
    time: "1:00 PM - 5:00 PM",
    price: "Free",
    description: "A special day dedicated to our senior cats (7+ years). Learn about the joys of adopting older cats and spend quality time with these gentle, loving companions.",
    features: ["Meet senior cats", "Educational sessions", "Special adoption rates", "Senior cat care tips"],
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop",
    capacity: 30,
    isRecurring: true,
    category: "adoption"
  }
];

// Gallery categories and images
export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: 'cats', name: 'Our Cats', icon: '🐱' },
  { id: 'cafe', name: 'Cafe Atmosphere', icon: '☕' },
  { id: 'events', name: 'Events & Activities', icon: '🎉' },
  { id: 'customers', name: 'Happy Moments', icon: '😊' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // Cats category
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop",
    alt: "Whiskers the tabby cat",
    caption: "Whiskers enjoying a sunny afternoon"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&h=600&fit=crop",
    alt: "Luna the playful cat",
    caption: "Luna showing off her playful side"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
    alt: "Oliver the kitten",
    caption: "Oliver exploring his new favorite spot"
  },
  // Cafe category
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    alt: "Cozy cafe interior",
    caption: "Our warm and welcoming cafe space"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    alt: "Fresh coffee being poured",
    caption: "Freshly brewed coffee made with love"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    alt: "Cafe seating area",
    caption: "Perfect spots for reading and cat watching"
  },
  // Events category
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",
    alt: "Cat yoga session",
    caption: "Finding zen with our feline yoga assistants"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    alt: "Paint night event",
    caption: "Creative expression with cat inspiration"
  },
  // Customers category
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&h=600&fit=crop",
    alt: "Happy adoption moment",
    caption: "Another successful adoption story"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop",
    alt: "Customer enjoying coffee with cats",
    caption: "Perfect morning with coffee and cats"
  }
];

// Color schemes for different pages
export const COLOR_SCHEMES = {
  home: ["#8B5CF6", "#EC4899", "#F59E0B"],
  cats: ["#6366F1", "#8B5CF6", "#EC4899"],
  menu: ["#F59E0B", "#EF4444", "#8B5CF6"],
  events: ["#EC4899", "#8B5CF6", "#3B82F6"],
  gallery: ["#3B82F6", "#8B5CF6", "#EC4899"],
  about: ["#10B981", "#3B82F6", "#8B5CF6"],
  blog: ["#F59E0B", "#EC4899", "#8B5CF6"],
  reservations: ["#8B5CF6", "#EC4899", "#F59E0B"],
  shop: ["#EC4899", "#F59E0B", "#8B5CF6"]
};

// Featured cat of the month
export const FEATURED_CAT = CAT_PROFILES[0]; // Whiskers

// Stats for homepage
export const CAFE_STATS = {
  catsAdopted: 247,
  happyCustomers: 1250,
  cupsOfCoffee: 15000,
  yearsInBusiness: 3
};
