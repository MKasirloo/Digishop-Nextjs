import { CardSim, Earbuds, Gamepad2, Laptop, Smartphone, Tablet, Watch } from 'lucide-react';
import { MobileCoverIcon } from '../assets/icons';

const categories = [
  { id: 1, name: "mobile", name_fa: "موبایل", icon: Smartphone, image_src: "/images/categories/Phone.png" },
  { id: 2, name: "tablet", name_fa: "تبلت", icon: Tablet, image_src: "/images/categories/iPad.png" },
  { id: 3, name: "gaming-console", name_fa: "کنسول بازی", icon: Gamepad2, image_src: "/images/categories/Play_station.png" },
  { id: 4, name: "laptop", name_fa: "لپ تاپ", icon: Laptop, image_src: "/images/categories/laptop.png" },
  { id: 5, name: "smartwatch", name_fa: "ساعت هوشمند", icon: Watch, image_src: "/images/categories/watchs.png" },
  { id: 6, name: "earphones", name_fa: "هندزفری", icon: Earbuds, image_src: "/images/categories/handsfree.png" },
  { id: 7, name: "phone-case", name_fa: "قاب و کاور گوشی", icon: MobileCoverIcon, image_src: "/images/categories/case-cover.png" },
  { id: 8, name: "sim-card", name_fa: "سیمکارت", icon: CardSim, image_src: "/images/categories/SIM-Card.png" },
];

export default categories;