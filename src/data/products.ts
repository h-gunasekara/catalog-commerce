export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  material: string;
  fit: string;
  gsm: string;
  care: string[];
  features: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  sizing: { size: string; chest: string; length: string; sleeve: string }[];
}

export const products: Product[] = [
  {
    slug: "linen-classic",
    name: "The Linen Classic",
    tagline: "Effortless warm-weather sophistication",
    price: 89,
    description:
      "Woven from premium Belgian linen, the Linen Classic combines breathable comfort with a refined silhouette. Pre-washed for a soft hand feel, this shirt drapes naturally and only improves with age. Perfect for weekend brunches, coastal getaways, or any occasion that calls for relaxed elegance.",
    material: "100% Belgian Linen, 160 GSM",
    fit: "Relaxed",
    gsm: "160",
    care: [
      "Machine wash cold on gentle cycle",
      "Hang dry or lay flat to dry",
      "Iron on medium heat while slightly damp",
      "Do not bleach",
    ],
    features: [
      "Mother-of-pearl buttons",
      "Box pleat back for ease of movement",
      "Adjustable barrel cuffs",
      "Single chest pocket with pen slot",
      "Split curved hem",
    ],
    colors: [
      { name: "Natural White", hex: "#F5F0E8" },
      { name: "Sand Dune", hex: "#C9B99A" },
      { name: "Slate Blue", hex: "#6B7F99" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizing: [
      { size: "XS", chest: '36"', length: '27"', sleeve: '32"' },
      { size: "S", chest: '38"', length: '28"', sleeve: '33"' },
      { size: "M", chest: '40"', length: '29"', sleeve: '34"' },
      { size: "L", chest: '42"', length: '30"', sleeve: '35"' },
      { size: "XL", chest: '44"', length: '31"', sleeve: '36"' },
      { size: "XXL", chest: '46"', length: '32"', sleeve: '37"' },
    ],
  },
  {
    slug: "oxford-essential",
    name: "The Oxford Essential",
    tagline: "Your everyday foundation piece",
    price: 72,
    description:
      "Built from heavyweight Oxford cloth woven in Japan, this button-down collar shirt is the cornerstone of any well-dressed wardrobe. Sturdy enough for the office, comfortable enough for the weekend. The perfect balance of structure and softness that holds up wash after wash.",
    material: "100% Long-Staple Cotton Oxford Cloth, 180 GSM",
    fit: "Regular",
    gsm: "180",
    care: [
      "Machine wash warm",
      "Tumble dry low",
      "Iron on high heat for crisp finish",
      "Can be dry cleaned",
    ],
    features: [
      "Button-down collar with hidden roll",
      "Single-needle side seam stitching",
      "Locker loop at center back yoke",
      "Box pleat back",
      "Reinforced side gussets",
    ],
    colors: [
      { name: "Bright White", hex: "#FFFFFF" },
      { name: "University Blue", hex: "#8AACC8" },
      { name: "Dusty Rose", hex: "#C9A0A0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizing: [
      { size: "XS", chest: '35"', length: '27"', sleeve: '32"' },
      { size: "S", chest: '37"', length: '28"', sleeve: '33"' },
      { size: "M", chest: '39"', length: '29"', sleeve: '34"' },
      { size: "L", chest: '41"', length: '30"', sleeve: '35"' },
      { size: "XL", chest: '43"', length: '31"', sleeve: '36"' },
      { size: "XXL", chest: '45"', length: '32"', sleeve: '37"' },
    ],
  },
  {
    slug: "utility-work",
    name: "The Utility Work Shirt",
    tagline: "Built to work as hard as you do",
    price: 95,
    description:
      "Constructed from heavy-duty cotton twill with reinforced stitching at all stress points. Two chest pockets with button flaps, elbow reinforcement panels, and a relaxed fit that moves with you. From the job site to the campfire, this shirt won't quit.",
    material: "100% Heavyweight Cotton Twill, 280 GSM",
    fit: "Relaxed Workwear",
    gsm: "280",
    care: [
      "Machine wash cold",
      "Tumble dry medium",
      "Do not bleach",
      "Iron on medium heat if needed",
    ],
    features: [
      "Dual chest pockets with button flaps",
      "Reinforced elbow panels",
      "Side gussets for range of motion",
      "Triple-needle felled seams throughout",
      "Extended back tail stays tucked",
    ],
    colors: [
      { name: "Olive Drab", hex: "#5C6B4F" },
      { name: "Dark Navy", hex: "#2C3E50" },
      { name: "Charcoal", hex: "#4A4A4A" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizing: [
      { size: "S", chest: '40"', length: '29"', sleeve: '33"' },
      { size: "M", chest: '42"', length: '30"', sleeve: '34"' },
      { size: "L", chest: '44"', length: '31"', sleeve: '35"' },
      { size: "XL", chest: '46"', length: '32"', sleeve: '36"' },
      { size: "XXL", chest: '48"', length: '33"', sleeve: '37"' },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
