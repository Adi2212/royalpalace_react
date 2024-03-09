import images from './images';

const dishes = [
  {
    title: 'Chicken Tikka Masala',
    price: '₹18',
    tags: 'Chicken | Tomato | Creamy Sauce',
  },
  {
    title: 'Paneer Butter Masala',
    price: '₹16',
    tags: 'Paneer | Butter | Creamy Tomato Sauce',
  },
  {
    title: 'Vegetable Biryani',
    price: '₹20',
    tags: 'Basmati Rice | Mixed Vegetables | Spices',
  },
  {
    title: 'Butter Chicken (Murgh Makhani)',
    price: '₹22',
    tags: 'Chicken | Tomato | Butter Cream Sauce',
  },
  {
    title: 'Palak Paneer',
    price: '₹18',
    tags: 'Spinach | Paneer | Creamy Tomato Sauce',
  },
  {
    title: 'Dal Makhani',
    price: '₹16',
    tags: 'Black Lentils | Kidney Beans | Cream',
  },
];

// Add Indian cocktails
const cocktails = [
  {
    title: 'Mango Lassi Martini',
    price: '₹14',
    tags: 'Vodka | Mango Lassi | Lime Juice',
  },
  {
    title: 'Spicy Jaljeera Margarita',
    price: '₹16',
    tags: 'Tequila | Jaljeera | Lime Juice | Chili Powder',
  },
  {
    title: 'Tamarind Whiskey Sour',
    price: '₹15',
    tags: 'Whiskey | Tamarind Syrup | Lemon Juice',
  },
  {
    title: 'Mango Mint Mojito',
    price: '₹16',
    tags: 'Rum | Mango Puree | Mint Leaves | Lime Juice | Soda',
  },
  {
    title: 'Spiced Tamarind Margarita',
    price: '₹20',
    tags: 'Tequila | Tamarind Syrup | Lime Juice | Chili Powder',
  },
  {
    title: 'Coconut Lassi Cocktail',
    price: '₹22',
    tags: 'Coconut Rum | Mango Lassi | Coconut Cream',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { dishes, cocktails, awards };
