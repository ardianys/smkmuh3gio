export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: any;
}

// Map the provided images to constants for easy usage
export const IMAGES = {
  // Use the local filenames provided. 
  // Ideally these should be in the 'public' folder.
  GATE: './image_0.jpg', 
  COMMUNITY: './image_1.jpg',
  LAB: './image_2.jpg',
  RELIGIOUS: './image_3.jpg',
  // Fallbacks in case local images aren't loaded in the environment immediately
  PLACEHOLDER_GATE: 'https://picsum.photos/seed/gate/1200/800',
  PLACEHOLDER_CLASS: 'https://picsum.photos/seed/class/800/600',
  PLACEHOLDER_ACTIVITY: 'https://picsum.photos/seed/activity/800/600',
};

export const SCHOOL_INFO = {
  name: "SMK Muhammadiyah 3 Giriwoyo",
  npsn: "20311326",
  accreditation: "B",
  address: "Jl. Wijaya Kusuma No. 59, RT 01 RW 01, Kel. Giriwoyo, Kec. Giriwoyo, Kab. Wonogiri, Jawa Tengah 57675",
  phone: "(0273) 123456", // Placeholder if not in text
  email: "info@smkmuh3giriwoyo.sch.id", // Placeholder
  headmaster: "Sutaryo",
  social: {
    facebook: "https://web.facebook.com/smkmuh3giriwoyo/",
    instagram: "https://instagram.com/smkmuh3giriwoyo_official.id"
  }
};