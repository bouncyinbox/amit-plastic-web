export type Lang = 'en' | 'hi';

export interface StoryItem {
  year: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  desc: string;
  items: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BrandItem {
  name: string;
  tagline: string;
  categories: string[];
}

export interface Translations {
  nav: string[];
  since: string;
  heroSub: string;
  heroLine: string;
  heroAddr: string;
  wa: string;
  call: string;
  enquire: string;
  stats: StatItem[];
  storyTag: string;
  storyTitle: string;
  storySub: string;
  story: StoryItem[];
  quote: string;
  quoteBy: string;
  prodTag: string;
  prodTitle: string;
  prodSub: string;
  cats: CategoryItem[];
  distrib: string;
  brandsTag: string;
  brandsTitle: string;
  brandsSub: string;
  brands: BrandItem[];
  revTag: string;
  revTitle: string;
  revSub: string;
  reviews: ReviewItem[];
  contactTag: string;
  contactTitle: string;
  contactSub: string;
  addr: string;
  phone: string;
  hours: string;
  address: string;
  hourVal: string;
  openMaps: string;
  footerAddr: string;
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: ['Home', 'Our Story', 'Products', 'Brands', 'Reviews', 'Visit'],
    since: 'Since 1990',
    heroSub: 'Wholesale Distributor & Furniture Showroom',
    heroLine:
      'Sitamarhi\u2019s leading wholesale furniture distributor \u2014 supplying shops across the district since 1990. Retail showroom open for all.',
    heroAddr: 'Near Mata Vaishno Mandir \u00b7 Thana Road \u00b7 Sitamarhi, Bihar',
    wa: 'WhatsApp Us',
    call: 'Call Now',
    enquire: 'Enquire on WhatsApp',
    stats: [
      { value: '30+',   label: 'Years' },
      { value: '100K+', label: 'Customers' },
      { value: '20+',   label: 'Categories' },
      { value: '10+',   label: 'Brands' },
    ],
    storyTag: 'Our Journey',
    storyTitle: 'Our Story',
    storySub:
      'From a humble workshop to Sitamarhi\u2019s wholesale furniture hub \u2014 supplying shops and serving families.',
    story: [
      {
        year: '1990s',
        title: 'The Beginning',
        description:
          'Vijay ji started crafting almirahs, shutters, iron grills, and gates by hand. Honest work, solid craft \u2014 that\u2019s how it all began in Sitamarhi.',
      },
      {
        year: '2000s',
        title: 'Wholesale Begins',
        description:
          'Furniture shops across Sitamarhi and nearby towns started sourcing from Vijay ji. A trusted wholesale supply chain built on honest pricing.',
      },
      {
        year: '2010s',
        title: 'The Showroom',
        description:
          'Amit Plastic Furniture Exclusive Showroom opened \u2014 authorized wholesale distributor of Supreme, Linc Furniture & Linc Steel Almirah, with retail for all.',
      },
      {
        year: 'Today',
        title: '30+ Years Strong',
        description:
          'The go-to wholesale supplier for shops in Sitamarhi, Pupri, Riga, and beyond \u2014 with a walk-in showroom for retail customers too.',
      },
    ],
    quote: 'Trust isn\u2019t built in a day \u2014 it takes years of dedication and honesty.',
    quoteBy: '\u2014 The Amit Plastic Family',
    prodTag: 'Our Collection',
    prodTitle: 'Products',
    prodSub: 'From plastic furniture to thermowares \u2014 everything your home, office, and kitchen needs under one roof.',
    cats: [
      {
        id: 'plastic',
        name: 'Plastic Furniture',
        desc: 'Chairs, dining sets, beds, kids furniture \u2014 durable, colourful, and perfect for every corner of your home.',
        items: ['Chairs', 'Dining Sets', 'Center Tables', 'Stools', 'Storages', 'Kids Furnitures', 'Multipurpose Storages', 'Beds'],
      },
      {
        id: 'home',
        name: 'Home Furniture',
        desc: 'Sofas, beds, steel almirahs, dining sets \u2014 every piece designed to make your home feel like yours.',
        items: ['Steel Almirahs', 'TV Units', 'Beds', 'Wardrobes', 'Dressing Tables', 'Mattresses'],
      },
      {
        id: 'thermoware',
        name: 'Thermowares',
        desc: 'Insulated bottles, casseroles, and lunch boxes \u2014 keep food & drinks fresh for hours.',
        items: ['Lunch Boxes', 'Bottles', 'Water Jugs', 'Casseroles'],
      },
      // { id: 'office', name: 'Office Furniture', desc: 'Desks, ergonomic chairs, and smart storage for serious workspaces.', items: ['Desks', 'Chairs', 'Conference', 'Visitors', 'Storage'] },
      {
        id: 'household',
        name: 'Household Essentials',
        desc: 'Everyday home essentials \u2014 buckets, tubs, dustbins, planters, and more for every room.',
        items: ['Buckets', 'Dustbins', 'Patlas', 'Planters', 'Tubs'],
      },
    ],
    distrib: 'Wholesale Distributor \u00b7 Authorized Dealer',
    brandsTag: 'Authorized Brands',
    brandsTitle: 'Brands We Carry',
    brandsSub: 'Authorized wholesale dealer for India\u2019s leading furniture and household brands.',
    brands: [
      {
        name: 'Supreme',
        tagline: 'India\u2019s #1 plastic furniture brand',
        categories: ['Chairs', 'Tables', 'Stools', 'Outdoor', 'Storage'],
      },
      {
        name: 'Linc',
        tagline: 'Premium furniture & steel almirahs',
        categories: ['Plastic Furniture', 'Steel Almirahs', 'Office', 'Bookshelves'],
      },
      {
        name: 'Milton',
        tagline: 'Trusted household essentials',
        categories: ['Water Bottles', 'Tiffin Boxes', 'Flasks', 'Storage Containers'],
      },
      {
        name: 'Sapana',
        tagline: 'Premium carpets & floor mats',
        categories: ['Carpets', 'Door Mats', 'Floor Mats', 'Rugs'],
      },
      {
        name: 'Spacewood',
        tagline: 'Modern modular furniture',
        categories: ['Wardrobes', 'Beds', 'Study Tables', 'TV Units'],
      },
      {
        name: 'SPL',
        tagline: 'Quality plastic products',
        categories: ['Chairs', 'Tables', 'Storage', 'Household'],
      },
      {
        name: 'Uniko',
        tagline: 'Stylish plastic furniture',
        categories: ['Chairs', 'Tables', 'Stools', 'Outdoor'],
      },
      {
        name: 'Sleepwell',
        tagline: 'India\u2019s leading mattress brand',
        categories: ['Mattresses', 'Pillows', 'Cushions', 'Accessories'],
      },
      {
        name: 'CMP',
        tagline: 'Quality homeware products',
        categories: ['Storage', 'Containers', 'Household', 'Kitchen'],
      },
    ],
    revTag: 'Customer Love',
    revTitle: 'Reviews',
    revSub: 'Trusted by shops and families across the district.',
    reviews: [
      { name: 'Rajesh Kumar', location: 'Sitamarhi', text: 'We\u2019ve been buying from Amit Plastic for 30 years. Quality and trust \u2014 you get both here.', rating: 5 },
      { name: 'Sunita Devi',  location: 'Pupri',     text: 'Wonderful showroom. The best collection of Supreme chairs you\u2019ll find anywhere nearby.', rating: 5 },
      { name: 'Md. Irfan',   location: 'Sitamarhi', text: 'Bought a steel almirah 10 years ago \u2014 still looks brand new. Complete trust in Vijay bhai\u2019s shop.', rating: 5 },
      { name: 'Priya Singh', location: 'Muzaffarpur', text: 'Traveled from far for office furniture. Reasonable prices and top quality. Highly recommend.', rating: 4 },
    ],
    contactTag: 'Visit Us',
    contactTitle: 'Come See Us',
    contactSub: 'Wholesale enquiries & retail visits welcome. Come see the full collection.',
    addr: 'Near Mata Vaishno Mandir,\nThana Road, Sitamarhi \u2014 843302\nBihar, India',
    phone: 'Phone',
    hours: 'Hours',
    address: 'Address',
    hourVal: 'Daily: 10:30 AM \u2013 8:30 PM',
    openMaps: 'Open in Google Maps',
    footerAddr: 'Near Mata Vaishno Mandir, Thana Road, Sitamarhi, Bihar \u2014 843302',
  },

  hi: {
    nav: ['\u0939\u094b\u092e', '\u0939\u092e\u093e\u0930\u0940 \u0915\u0939\u093e\u0928\u0940', '\u0909\u0924\u094d\u092a\u093e\u0926', '\u092c\u094d\u0930\u093e\u0902\u0921', '\u0938\u092e\u0940\u0915\u094d\u0937\u093e', '\u0938\u0902\u092a\u0930\u094d\u0915'],
    since: '1990 \u0938\u0947',
    heroSub: '\u0925\u094b\u0915 \u0935\u093f\u0924\u0930\u0915 \u090f\u0935\u0902 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u090f\u0915\u094d\u0938\u0915\u094d\u0932\u0942\u0938\u093f\u0935 \u0936\u094b\u0930\u0942\u092e',
    heroLine:
      '\u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940 \u0915\u093e \u092a\u094d\u0930\u092e\u0941\u0916 \u0925\u094b\u0915 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u0935\u093f\u0924\u0930\u0915 \u2014 1990 \u0938\u0947 \u091c\u093f\u0932\u0947 \u092d\u0930 \u0915\u0940 \u0926\u0941\u0915\u093e\u0928\u094b\u0902 \u0915\u094b \u0938\u092a\u094d\u0932\u093e\u0908\u0964 \u0930\u093f\u091f\u0947\u0932 \u0936\u094b\u0930\u0942\u092e \u092d\u0940 \u0916\u0941\u0932\u093e \u0939\u0948\u0964',
    heroAddr:
      '\u092e\u093e\u0924\u093e \u0935\u0948\u0937\u094d\u0923\u094b \u092e\u0902\u0926\u093f\u0930 \u0915\u0947 \u092a\u093e\u0938 \u00b7 \u0925\u093e\u0928\u093e \u0930\u094b\u0921 \u00b7 \u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940, \u092c\u093f\u0939\u093e\u0930',
    wa: 'WhatsApp \u0915\u0930\u0947\u0902',
    call: '\u0915\u0949\u0932 \u0915\u0930\u0947\u0902',
    enquire: 'WhatsApp \u092a\u0930 \u092a\u0942\u091b\u0947\u0902',
    stats: [
      { value: '30+',   label: '\u0938\u093e\u0932' },
      { value: '100K+', label: '\u0917\u094d\u0930\u093e\u0939\u0915' },
      { value: '20+',   label: '\u0936\u094d\u0930\u0947\u0923\u093f\u092f\u093e\u0901' },
      { value: '10+',   label: '\u092c\u094d\u0930\u093e\u0902\u0921' },
    ],
    storyTag: '\u0939\u092e\u093e\u0930\u093e \u0938\u092b\u093c\u0930',
    storyTitle: '\u0939\u092e\u093e\u0930\u0940 \u0915\u0939\u093e\u0928\u0940',
    storySub:
      '\u090f\u0915 \u091b\u094b\u091f\u0940 \u0915\u093e\u0930\u094d\u092f\u0936\u093e\u0932\u093e \u0938\u0947 \u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940 \u0915\u0947 \u092a\u094d\u0930\u092e\u0941\u0916 \u0925\u094b\u0915 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u0935\u093f\u0924\u0930\u0915 \u0924\u0915 \u2014 \u0926\u0941\u0915\u093e\u0928\u094b\u0902 \u0914\u0930 \u092a\u0930\u093f\u0935\u093e\u0930\u094b\u0902 \u0915\u0940 \u0938\u0947\u0935\u093e\u0964',
    story: [
      {
        year: '1990s',
        title: '\u0936\u0941\u0930\u0941\u0906\u0924',
        description:
          '\u0935\u093f\u091c\u092f \u091c\u0940 \u0928\u0947 \u0905\u0932\u092e\u093e\u0930\u0940, \u0936\u091f\u0930, \u0932\u094b\u0939\u0947 \u0915\u0940 \u0917\u094d\u0930\u093f\u0932 \u0914\u0930 \u0917\u0947\u091f \u092c\u0928\u093e\u0928\u093e \u0936\u0941\u0930\u0942 \u0915\u093f\u092f\u093e\u0964 \u0908\u092e\u093e\u0928\u0926\u093e\u0930 \u0915\u093e\u092e \u0914\u0930 \u092e\u091c\u092c\u0942\u0924 \u0915\u093e\u0930\u0940\u0917\u0930\u0940 \u2014 \u092f\u0939\u0940\u0902 \u0938\u0947 \u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940 \u092e\u0947\u0902 \u0938\u092c \u0936\u0941\u0930\u0942 \u0939\u0941\u0906\u0964',
      },
      {
        year: '2000s',
        title: '\u0925\u094b\u0915 \u0935\u094d\u092f\u093e\u092a\u093e\u0930 \u0936\u0941\u0930\u0942',
        description:
          '\u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940 \u0914\u0930 \u0906\u0938\u092a\u093e\u0938 \u0915\u0940 \u0926\u0941\u0915\u093e\u0928\u0947\u0902 \u0935\u093f\u091c\u092f \u091c\u0940 \u0938\u0947 \u092e\u093e\u0932 \u0932\u0947\u0928\u0947 \u0932\u0917\u0940\u0902\u0964 \u0938\u091a\u094d\u091a\u0947 \u092d\u093e\u0935 \u092a\u0930 \u0925\u094b\u0915 \u0938\u092a\u094d\u0932\u093e\u0908 \u0915\u0940 \u0928\u0940\u0902\u0935 \u092a\u0921\u093c\u0940\u0964',
      },
      {
        year: '2010s',
        title: '\u0936\u094b\u0930\u0942\u092e \u0916\u0941\u0932\u093e',
        description:
          '\u0905\u092e\u093f\u0924 \u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u090f\u0915\u094d\u0938\u0915\u094d\u0932\u0942\u0938\u093f\u0935 \u0936\u094b\u0930\u0942\u092e \u0936\u0941\u0930\u0942 \u2014 Supreme, Linc Furniture \u0914\u0930 Linc Steel Almirah \u0915\u093e \u0905\u0927\u093f\u0915\u0943\u0924 \u0925\u094b\u0915 \u0935\u093f\u0924\u0930\u0915, \u0930\u093f\u091f\u0947\u0932 \u0917\u094d\u0930\u093e\u0939\u0915\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u092d\u0940\u0964',
      },
      {
        year: '\u0906\u091c',
        title: '30+ \u0938\u093e\u0932 \u092e\u091c\u092c\u0942\u0924',
        description:
          '\u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940, \u092a\u0941\u092a\u0930\u0940, \u0930\u093f\u0917\u093e \u0914\u0930 \u0906\u0938\u092a\u093e\u0938 \u0915\u0947 \u0915\u0938\u094d\u092c\u094b\u0902 \u0915\u0940 \u0926\u0941\u0915\u093e\u0928\u094b\u0902 \u0915\u093e \u092d\u0930\u094b\u0938\u0947\u092e\u0902\u0926 \u0925\u094b\u0915 \u0938\u092a\u094d\u0932\u093e\u092f\u0930 \u2014 \u0930\u093f\u091f\u0947\u0932 \u0936\u094b\u0930\u0942\u092e \u092d\u0940 \u0916\u0941\u0932\u093e\u0964',
      },
    ],
    quote:
      '\u092d\u0930\u094b\u0938\u093e \u090f\u0915 \u0926\u093f\u0928 \u092e\u0947\u0902 \u0928\u0939\u0940\u0902 \u092c\u0928\u0924\u093e \u2014 \u092f\u0939 \u0938\u093e\u0932\u094b\u0902 \u0915\u0940 \u092e\u0947\u0939\u0928\u0924 \u0914\u0930 \u0908\u092e\u093e\u0928\u0926\u093e\u0930\u0940 \u0938\u0947 \u092c\u0928\u0924\u093e \u0939\u0948\u0964',
    quoteBy: '\u2014 \u0905\u092e\u093f\u0924 \u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u092a\u0930\u093f\u0935\u093e\u0930',
    prodTag: '\u0939\u092e\u093e\u0930\u093e \u0938\u0902\u0917\u094d\u0930\u0939',
    prodTitle: '\u0909\u0924\u094d\u092a\u093e\u0926',
    prodSub:
      '\u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u0938\u0947 \u0925\u0930\u094d\u092e\u094b\u0935\u0947\u092f\u0930 \u0924\u0915 \u2014 \u0918\u0930, \u0911\u092b\u093f\u0938 \u0914\u0930 \u0915\u093f\u091a\u0928 \u0915\u0940 \u0939\u0930 \u091c\u093c\u0930\u0942\u0930\u0924 \u090f\u0915 \u091b\u0924 \u0915\u0947 \u0928\u0940\u091a\u0947\u0964',
    cats: [
      {
        id: 'plastic',
        name: '\u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u092b\u0930\u094d\u0928\u0940\u091a\u0930',
        desc: '\u0915\u0941\u0930\u094d\u0938\u093f\u092f\u093e\u0901, \u0921\u093e\u0907\u0928\u093f\u0902\u0917 \u0938\u0947\u091f, \u092c\u0947\u0921, \u092c\u091a\u094d\u091a\u094b\u0902 \u0915\u093e \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u2014 \u091f\u093f\u0915\u093e\u090a, \u0930\u0902\u0917\u0940\u0928, \u0914\u0930 \u0918\u0930 \u0915\u0947 \u0939\u0930 \u0915\u094b\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092c\u093f\u0932\u094d\u0915\u0941\u0932 \u0938\u0939\u0940\u0964',
        items: ['\u0915\u0941\u0930\u094d\u0938\u093f\u092f\u093e\u0901', '\u0921\u093e\u0907\u0928\u093f\u0902\u0917 \u0938\u0947\u091f', '\u0938\u0947\u0902\u091f\u0930 \u091f\u0947\u092c\u0932', '\u0938\u094d\u091f\u0942\u0932', '\u0938\u094d\u091f\u094b\u0930\u0947\u091c', '\u092c\u091a\u094d\u091a\u094b\u0902 \u0915\u093e \u092b\u0930\u094d\u0928\u0940\u091a\u0930', '\u092e\u0932\u094d\u091f\u0940\u092a\u0930\u094d\u092a\u091c\u093c \u0938\u094d\u091f\u094b\u0930\u0947\u091c', '\u092c\u0947\u0921'],
      },
      {
        id: 'home',
        name: '\u0918\u0930 \u0915\u093e \u092b\u0930\u094d\u0928\u0940\u091a\u0930',
        desc: '\u0938\u094b\u092b\u093e, \u092c\u0947\u0921, \u0938\u094d\u091f\u0940\u0932 \u0905\u0932\u092e\u093e\u0930\u0940, \u0921\u093e\u0907\u0928\u093f\u0902\u0917 \u2014 \u0939\u0930 \u091a\u0940\u091c \u091c\u094b \u0906\u092a\u0915\u0947 \u0918\u0930 \u0915\u094b \u0918\u0930 \u091c\u0948\u0938\u093e \u092e\u0939\u0938\u0942\u0938 \u0915\u0930\u093e\u090f\u0964',
        items: ['\u0938\u094d\u091f\u0940\u0932 \u0905\u0932\u092e\u093e\u0930\u0940', '\u091f\u0940\u0935\u0940 \u092f\u0942\u0928\u093f\u091f', '\u092c\u0947\u0921', '\u0935\u093e\u0930\u094d\u0921\u0930\u094b\u092c', '\u0921\u094d\u0930\u0947\u0938\u093f\u0902\u0917 \u091f\u0947\u092c\u0932', '\u0917\u0926\u094d\u0926\u0947'],
      },
      {
        id: 'thermoware',
        name: '\u0925\u0930\u094d\u092e\u094b\u0935\u0947\u092f\u0930',
        desc: '\u0907\u0902\u0938\u0941\u0932\u0947\u091f\u0947\u0921 \u092c\u094b\u0924\u0932, \u0915\u0948\u0938\u0930\u094b\u0932 \u0914\u0930 \u0932\u0902\u091a \u092c\u0949\u0915\u094d\u0938 \u2014 \u0918\u0902\u091f\u094b\u0902 \u0924\u0915 \u0924\u093e\u091c\u093c\u093e \u092f\u093e \u0920\u0902\u0921\u093e\u0964',
        items: ['\u0932\u0902\u091a \u092c\u0949\u0915\u094d\u0938', '\u092c\u094b\u0924\u0932', '\u0935\u0949\u091f\u0930 \u091c\u0917', '\u0915\u0948\u0938\u0930\u094b\u0932'],
      },
      // { id: 'office', name: 'ऑफिस फर्नीचर', desc: 'डेस्क, आरामदायक कुर्सियाँ और स्मार्ट स्टोरेज।', items: ['डेस्क', 'कुर्सियाँ', 'कॉन्फ्रेंस', 'विजिटर', 'स्टोरेज'] },
      {
        id: 'household',
        name: '\u0918\u0930\u0947\u0932\u0942 \u091c\u093c\u0930\u0942\u0930\u0924\u0947\u0902',
        desc: '\u0930\u094b\u091c\u093c\u092e\u0930\u094d\u0930\u093e \u0915\u0947 \u0918\u0930\u0947\u0932\u0942 \u0938\u093e\u092e\u093e\u0928 \u2014 \u092c\u093e\u0932\u094d\u091f\u0940, \u091f\u092c, \u0921\u0938\u094d\u091f\u092c\u093f\u0928, \u0917\u092e\u0932\u0947 \u0914\u0930 \u092c\u0939\u0941\u0924 \u0915\u0941\u091b\u0964',
        items: ['\u092c\u093e\u0932\u094d\u091f\u0940', '\u0921\u0938\u094d\u091f\u092c\u093f\u0928', '\u092a\u091f\u0932\u093e', '\u0917\u092e\u0932\u0947', '\u091f\u092c'],
      },
    ],
    distrib: '\u0925\u094b\u0915 \u0935\u093f\u0924\u0930\u0915 \u00b7 \u0905\u0927\u093f\u0915\u0943\u0924 \u0921\u0940\u0932\u0930',
    brandsTag: '\u0905\u0927\u093f\u0915\u0943\u0924 \u092c\u094d\u0930\u093e\u0902\u0921',
    brandsTitle: '\u0939\u092e\u093e\u0930\u0947 \u092c\u094d\u0930\u093e\u0902\u0921',
    brandsSub:
      '\u092d\u093e\u0930\u0924 \u0915\u0947 \u092a\u094d\u0930\u092e\u0941\u0916 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u0914\u0930 \u0918\u0930\u0947\u0932\u0942 \u0909\u0924\u094d\u092a\u093e\u0926\u094b\u0902 \u0915\u0947 \u0905\u0927\u093f\u0915\u0943\u0924 \u0925\u094b\u0915 \u0921\u0940\u0932\u0930\u0964',
    brands: [
      { name: 'Supreme', tagline: '\u092d\u093e\u0930\u0924 \u0915\u093e #1 \u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u092c\u094d\u0930\u093e\u0902\u0921', categories: ['\u0915\u0941\u0930\u094d\u0938\u093f\u092f\u093e\u0901', '\u091f\u0947\u092c\u0932', '\u0938\u094d\u091f\u0942\u0932', '\u0906\u0909\u091f\u0921\u094b\u0930', '\u0938\u094d\u091f\u094b\u0930\u0947\u091c'] },
      { name: 'Linc',    tagline: '\u092a\u094d\u0930\u0940\u092e\u093f\u092f\u092e \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u0914\u0930 \u0938\u094d\u091f\u0940\u0932 \u0905\u0932\u092e\u093e\u0930\u0940', categories: ['\u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u092b\u0930\u094d\u0928\u0940\u091a\u0930', '\u0938\u094d\u091f\u0940\u0932 \u0905\u0932\u092e\u093e\u0930\u0940', '\u0911\u092b\u093f\u0938', '\u092c\u0941\u0915\u0936\u0947\u0932\u094d\u092b'] },
      { name: 'Milton',  tagline: '\u092d\u0930\u094b\u0938\u0947\u092e\u0902\u0926 \u0918\u0930\u0947\u0932\u0942 \u0909\u0924\u094d\u092a\u093e\u0926',              categories: ['\u092a\u093e\u0928\u0940 \u0915\u0940 \u092c\u094b\u0924\u0932', '\u091f\u093f\u092b\u093f\u0928 \u092c\u0949\u0915\u094d\u0938', '\u092b\u094d\u0932\u093e\u0938\u094d\u0915', '\u0938\u094d\u091f\u094b\u0930\u0947\u091c'] },
      { name: 'Sapana',  tagline: '\u092a\u094d\u0930\u0940\u092e\u093f\u092f\u092e \u0915\u093e\u0930\u094d\u092a\u0947\u091f \u0914\u0930 \u092b\u0930\u094d\u0936 \u092e\u0948\u091f',            categories: ['\u0915\u093e\u0930\u094d\u092a\u0947\u091f', '\u0926\u0930\u0935\u093e\u091c\u093e \u092e\u0948\u091f', '\u092b\u0930\u094d\u0936 \u092e\u0948\u091f', '\u0930\u0917'] },
      { name: 'Spacewood', tagline: '\u0906\u0927\u0941\u0928\u093f\u0915 \u092e\u0949\u0921\u094d\u092f\u0942\u0932\u0930 \u092b\u0930\u094d\u0928\u0940\u091a\u0930', categories: ['\u0935\u093e\u0930\u094d\u0921\u0930\u094b\u092c', '\u092c\u0947\u0921', '\u0938\u094d\u091f\u0921\u0940 \u091f\u0947\u092c\u0932', '\u091f\u0940\u0935\u0940 \u092f\u0942\u0928\u093f\u091f'] },
      { name: 'SPL', tagline: '\u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u0909\u0924\u094d\u092a\u093e\u0926', categories: ['\u0915\u0941\u0930\u094d\u0938\u093f\u092f\u093e\u0901', '\u091f\u0947\u092c\u0932', '\u0938\u094d\u091f\u094b\u0930\u0947\u091c', '\u0918\u0930\u0947\u0932\u0942'] },
      { name: 'Uniko', tagline: '\u0938\u094d\u091f\u093e\u0907\u0932\u093f\u0936 \u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u092b\u0930\u094d\u0928\u0940\u091a\u0930', categories: ['\u0915\u0941\u0930\u094d\u0938\u093f\u092f\u093e\u0901', '\u091f\u0947\u092c\u0932', '\u0938\u094d\u091f\u0942\u0932', '\u0906\u0909\u091f\u0921\u094b\u0930'] },
      { name: 'Sleepwell', tagline: '\u092d\u093e\u0930\u0924 \u0915\u093e \u092a\u094d\u0930\u092e\u0941\u0916 \u0917\u0926\u094d\u0926\u093e \u092c\u094d\u0930\u093e\u0902\u0921', categories: ['\u0917\u0926\u094d\u0926\u0947', '\u0924\u0915\u093f\u092f\u0947', '\u0915\u0941\u0936\u0928', '\u0905\u0915\u094d\u0938\u0947\u0938\u0930\u0940\u091c\u093c'] },
      { name: 'CMP', tagline: '\u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u0918\u0930\u0947\u0932\u0942 \u0909\u0924\u094d\u092a\u093e\u0926', categories: ['\u0938\u094d\u091f\u094b\u0930\u0947\u091c', '\u0915\u0902\u091f\u0947\u0928\u0930', '\u0918\u0930\u0947\u0932\u0942', '\u0915\u093f\u091a\u0928'] },
    ],
    revTag: '\u0917\u094d\u0930\u093e\u0939\u0915\u094b\u0902 \u0915\u093e \u092a\u094d\u092f\u093e\u0930',
    revTitle: '\u0938\u092e\u0940\u0915\u094d\u0937\u093e\u090f\u0901',
    revSub: '\u091c\u093f\u0932\u0947 \u092d\u0930 \u0915\u0940 \u0926\u0941\u0915\u093e\u0928\u094b\u0902 \u0914\u0930 \u092a\u0930\u093f\u0935\u093e\u0930\u094b\u0902 \u0915\u093e \u092d\u0930\u094b\u0938\u093e\u0964',
    reviews: [
      { name: '\u0930\u093e\u091c\u0947\u0936 \u0915\u0941\u092e\u093e\u0930', location: '\u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940', text: '30 \u0938\u093e\u0932 \u0938\u0947 \u0905\u092e\u093f\u0924 \u092a\u094d\u0932\u093e\u0938\u094d\u091f\u093f\u0915 \u0938\u0947 \u0939\u0940 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u0932\u0947\u0924\u0947 \u0939\u0948\u0902\u0964 \u0915\u094d\u0935\u093e\u0932\u093f\u091f\u0940 \u0914\u0930 \u092d\u0930\u094b\u0938\u093e \u0926\u094b\u0928\u094b\u0902 \u092e\u093f\u0932\u0924\u093e \u0939\u0948\u0964', rating: 5 },
      { name: '\u0938\u0941\u0928\u0940\u0924\u093e \u0926\u0947\u0935\u0940',  location: '\u092a\u0941\u092a\u0930\u0940',          text: '\u092c\u0939\u0941\u0924 \u0905\u091a\u094d\u091b\u093e \u0936\u094b\u0930\u0942\u092e \u0939\u0948\u0964 Supreme \u0915\u0941\u0930\u094d\u0938\u093f\u092f\u094b\u0902 \u0915\u093e \u0938\u092c\u0938\u0947 \u0905\u091a\u094d\u091b\u093e \u0915\u0932\u0947\u0915\u094d\u0936\u0928 \u092f\u0939\u0940\u0902 \u092e\u093f\u0932\u0924\u093e \u0939\u0948\u0964', rating: 5 },
      { name: '\u092e\u094b\u0939\u092e\u094d\u092e\u0926 \u0907\u0930\u092b\u093c\u093e\u0928',   location: '\u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940', text: '10 \u0938\u093e\u0932 \u092a\u0939\u0932\u0947 \u0938\u094d\u091f\u0940\u0932 \u0905\u0932\u092e\u093e\u0930\u0940 \u0932\u0940 \u0925\u0940, \u0906\u091c \u092d\u0940 \u0928\u090f \u091c\u0948\u0938\u0940 \u0939\u0948\u0964 \u0935\u093f\u091c\u092f \u092d\u093e\u0908 \u092a\u0930 \u092d\u0930\u094b\u0938\u093e \u0939\u0948\u0964', rating: 5 },
      { name: '\u092a\u094d\u0930\u093f\u092f\u093e \u0938\u093f\u0902\u0939', location: '\u092e\u0941\u091c\u093c\u092b\u093c\u094d\u092b\u093c\u0930\u092a\u0941\u0930', text: '\u0911\u092b\u093f\u0938 \u092b\u0930\u094d\u0928\u0940\u091a\u0930 \u0915\u0947 \u0932\u093f\u090f \u0926\u0942\u0930 \u0938\u0947 \u0906\u090f \u0925\u0947\u0964 \u0915\u0940\u092e\u0924 \u092d\u0940 \u0909\u091a\u093f\u0924 \u0914\u0930 \u0915\u094d\u0935\u093e\u0932\u093f\u091f\u0940 \u092c\u0947\u0938\u094d\u091f\u0964', rating: 4 },
    ],
    contactTag: '\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902',
    contactTitle: '\u0939\u092e\u0938\u0947 \u092e\u093f\u0932\u0947\u0902',
    contactSub: '\u0925\u094b\u0915 \u092c\u0941\u0915\u093f\u0902\u0917 \u0914\u0930 \u0930\u093f\u091f\u0947\u0932 \u0926\u094b\u0928\u094b\u0902 \u0938\u094d\u0935\u093e\u0917\u0924 \u0939\u0948\u0902\u0964 \u092a\u0942\u0930\u093e \u0915\u0932\u0947\u0915\u094d\u0936\u0928 \u0916\u0941\u0926 \u0926\u0947\u0916\u0947\u0902\u0964',
    addr: '\u092e\u093e\u0924\u093e \u0935\u0948\u0937\u094d\u0923\u094b \u092e\u0902\u0926\u093f\u0930 \u0915\u0947 \u092a\u093e\u0938,\n\u0925\u093e\u0928\u093e \u0930\u094b\u0921, \u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940 \u2014 843302\n\u092c\u093f\u0939\u093e\u0930, \u092d\u093e\u0930\u0924',
    phone: '\u092b\u093c\u094b\u0928',
    hours: '\u0938\u092e\u092f',
    address: '\u092a\u0924\u093e',
    hourVal: '\u0930\u094b\u091c\u093c\u093e\u0928\u093e: \u0938\u0941\u092c\u0939 10:30 \u2013 \u0930\u093e\u0924 8:30',
    openMaps: 'Google Maps \u092e\u0947\u0902 \u0916\u094b\u0932\u0947\u0902',
    footerAddr:
      '\u092e\u093e\u0924\u093e \u0935\u0948\u0937\u094d\u0923\u094b \u092e\u0902\u0926\u093f\u0930 \u0915\u0947 \u092a\u093e\u0938, \u0925\u093e\u0928\u093e \u0930\u094b\u0921, \u0938\u0940\u0924\u093e\u092e\u0922\u093c\u0940, \u092c\u093f\u0939\u093e\u0930 \u2014 843302',
  },
};
