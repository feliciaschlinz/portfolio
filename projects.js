/* projects.js — ALL of your work lives in this one file.

   TO ADD A PROJECT: copy the TEMPLATE block at the bottom, paste it into the PROJECTS list, fill it in.
   TO PUBLISH A CASE STUDY: fill in the fields and set published: true.
   While published is false, the project links to your old portfolio page (legacy) instead.
   HOMEPAGE: the four cards under "Selected work" come from the feature field (image, stat, label, line).
   Edit those words to change what grabs attention. To feature a different project, give it a
   feature field and list its slug (or legacy name) in FEATURED just below.
   IMAGES: put files in images/<slug>/ and list the paths below. Missing images show a placeholder
   that tells you exactly which file to add.
   Every field except slug, title, category and summary is optional; empty sections are hidden. */

var LEGACY_BASE = 'https://feliciaschlinz.com/';

var FEATURED = ['nvidia-ecommerce', 'staples-promo-digital-design-system', 'airbnb-ecommerce-website', 'fedex-ecommerce-website-design-development'];

var PROJECTS = [
  {
    slug: 'nvidia-ecommerce', legacy: 'nvidia-ecommerce-wireframe', published: true,
    title: 'Nvidia eCommerce UI/UX', client: 'Nvidia', category: 'eCommerce',
    tags: ['UX/UI', 'Wireframes', 'Development'],
    summary: "Design and development for Nvidia's eCommerce merchandise website.",
    role: 'UX/UI design, creative lead',
    team: 'Partnered with a UX interaction designer',
    timeline: '',
    tools: [],
    cover: 'images/nvidia-ecommerce/cover.jpg',
    feature: { image: 'images/nvidia-ecommerce/feature.jpg', stat: '95%', label: 'first-pass approval', line: 'Full end-to-end wireframes for the world leader in AI computing, delivered in one week.' },
    hero: 'images/nvidia-ecommerce/hero.jpg',
    overview: [
      "As the world leader in AI computing, Nvidia required more than just a basic eCommerce experience for their global employee merchandise platform.",
      "In partnership with one of our UX interaction designers, I was tasked with developing all new UI/UX for an eCommerce theme that could be developed with our platform provider that was up to the high quality standards and net new functionality that was needed to support this large scale merchandise operation."
    ],
    challenge: [
      "Deliver an eCommerce theme that met Nvidia's high quality standards and the net new functionality needed to support a large-scale merchandise operation, and that our platform provider could build."
    ],
    approach: [
      { title: 'Immerse in the brand', text: 'We fully immersed ourselves in the Nvidia brand so every decision felt native to the company.' },
      { title: 'Map the whole journey', text: 'We designed a full end-to-end experience that captured every interaction from site entry to order confirmation.' },
      { title: 'Wireframe in depth', text: 'Extensive wireframes covered the whole experience and were delivered in one week.' },
      { title: 'Build and launch', text: 'I led the team through development and launch of the theme with our platform provider.' }
    ],
    achievements: [
      { value: '1 week', label: 'to deliver the theme wireframes' },
      { value: '95%', label: 'of client expectations met on the first pass' },
      { value: 'End-to-end', label: 'experience, from site entry to order confirmation' }
    ],
    highlights: [
      'Developed all-new UI/UX for the Nvidia eCommerce theme.',
      'Delivered wireframes in one week.',
      'Met 95% of client expectations on the first pass.',
      'Led the team through development and launch.'
    ],
    gallery: [
      { src: 'images/nvidia-ecommerce/wireframe-01.jpg', alt: 'Nvidia eCommerce wireframe, screen 1', caption: '', wide: true },
      { src: 'images/nvidia-ecommerce/wireframe-02.jpg', alt: 'Nvidia eCommerce wireframe, screen 2', caption: '' },
      { src: 'images/nvidia-ecommerce/wireframe-03.jpg', alt: 'Nvidia eCommerce wireframe, screen 3', caption: '' },
      { src: 'images/nvidia-ecommerce/wireframe-04.jpg', alt: 'Nvidia eCommerce wireframe, screen 4', caption: '' },
      { src: 'images/nvidia-ecommerce/wireframe-05.jpg', alt: 'Nvidia eCommerce wireframe, screen 5', caption: '' },
      { src: 'images/nvidia-ecommerce/wireframe-06.jpg', alt: 'Nvidia eCommerce wireframe, screen 6', caption: '' }
    ],
    results: [
      "The internal team at Nvidia declared themselves tough critics, and the wireframes fully met their expectations."
    ]
  },

  { legacy: 'fedex-ecommerce-website-design-development', feature: { image: 'images/fedex-global/feature.jpg', stat: 'Global', label: 'merchandise program', line: "The pitch that put FedEx’s worldwide merchandise program on one site." }, title: 'Global FedEx eCommerce Website', client: 'FedEx', category: 'eCommerce', summary: "Design & development of website pitch for FedEx's global merchandise program." },
  { legacy: 'staples-promo-product-page-redesign', title: 'Staples Promo Product Pages UI/UX', client: 'Staples Promo', category: 'eCommerce', summary: 'Redesign of the product page with improved UX and added personality.' },
  { legacy: 'staples-promo-digital-design-system', feature: { image: 'images/staples-design-system/feature.jpg', stat: '400+', label: 'sites on one system', line: "One shared system now powers every reusable storefront theme." }, title: 'Staples Promo Design System', client: 'Staples Promo', category: 'Design Systems', summary: "Design and development of Staples Promo's digital design system." },
  { legacy: 'staples-promo-photoshoot', title: 'Staples Promo Photo Shoot', client: 'Staples Promo', category: 'Photography', summary: 'Photo direction for Staples Promo brand launch, digital marketing, and e-commerce website.' },
  { legacy: '2020-airbnb-ecommerce', title: '2020 Airbnb E-Commerce Website', client: 'Airbnb', category: 'eCommerce', summary: "Redesign and development of Airbnb's corporate merchandise website to reflect updated brand guidelines." },
  { legacy: 'airbnb-digital-display-travel', title: 'Airbnb Digital Display', client: 'Airbnb', category: 'Marketing', summary: 'Animated digital display to market general awareness of their e-commerce website.' },
  { legacy: 'hrblock-marketing', title: 'H&R Block Marketing', client: 'H&R Block', category: 'Marketing', summary: "Miscellaneous digital marketing to support H&R Block's merchandise store, the Block Shop." },
  { legacy: 'airbnb-custom-campaign', title: 'Airbnb Custom Campaign', client: 'Airbnb', category: 'Marketing', summary: "Digital and printed marketing pieces to promote custom merchandise that tells a story and reflects Airbnb's diverse culture." },
  { legacy: 'republic-services-launch-teaser', title: 'Republic Services Launch Teaser', client: 'Republic Services', category: 'Marketing', summary: 'Animated email marketing to tease the launch of the new e-commerce website and new merchandise collection.' },
  { legacy: 'airbnb-launch-campaign', title: 'Airbnb Launch Campaign', client: 'Airbnb', category: 'Marketing', summary: "Animated email marketing to promote the launch of Airbnb's merchandise website, Airbnb Goods." },
  { legacy: 'airbnb-custom-merchandise-campaign', title: 'Airbnb Custom Merchandise Campaign', client: 'Airbnb', category: 'Marketing', summary: 'Email marketing to promote custom merchandise orders for Airbnb employees.' },
  { legacy: 'airbnb-digital-display', title: 'Airbnb Digital Display (Pop-Up Shop)', client: 'Airbnb', category: 'Marketing', summary: 'Animated digital display to announce an on-site pop up shop at Airbnb Headquarters.' },
  { legacy: 'copy-of-intuit-marketing', title: 'Global Identity Rebrand', client: '', category: 'Marketing', summary: 'Miscellaneous email communications and digital marketing.' },
  { legacy: 'airbnb-email-marketing', title: 'Airbnb Email Marketing', client: 'Airbnb', category: 'Marketing', summary: 'Email marketing offer that promoted a discount and theme focused on the Year of the Dog.' },
  { legacy: 'mycogen-seeds-photoshoot', title: 'Mycogen Seeds Photo Shoot', client: 'Mycogen Seeds', category: 'Photography', summary: "Photo direction for Mycogen Seeds' digital email marketing, e-commerce website, and print catalog." },
  { legacy: 'airbnb-ecommerce-website', feature: { image: 'images/airbnb-goods/feature.jpg', stat: '0 → 1', label: 'Airbnb Goods', line: "Designed and built the launch of Airbnb’s merchandise site from the ground up." }, title: 'Airbnb eCommerce Website', client: 'Airbnb', category: 'eCommerce', summary: "Design and development of the initial launch of Airbnb's merchandise website, Airbnb Goods." },
  { legacy: 'staples-ecommerce-theme', title: 'Staples eCommerce Theme', client: 'Staples', category: 'eCommerce', summary: "Design and development of Staples' e-commerce theme." },
  { legacy: 'hr-block-box', title: 'H&R Block Marketing Box', client: 'H&R Block', category: 'Marketing', summary: "Design and ideation of a subscription marketing campaign to support H&R Block's merchandise store, the Block Shop." },
  { legacy: 'republic-services-earthday-campaign', title: 'Republic Services Earth Day Campaign', client: 'Republic Services', category: 'Marketing', summary: 'Email and internal marketing to Republic Services employees to promote eco-friendly items for Earth Day.' },
  { legacy: 'intuit-marketing', title: 'Intuit Marketing', client: 'Intuit', category: 'Marketing', summary: 'Miscellaneous email communications and digital marketing.' },
  { legacy: 'airbnb-digital-display-pride', title: 'Airbnb Pride Digital Display', client: 'Airbnb', category: 'Marketing', summary: 'Animated digital display to promote pride merchandise at Airbnb.' },
  { legacy: 'gulfstream-ecommerce-website', title: 'Gulfstream eCommerce Website', client: 'Gulfstream', category: 'eCommerce', summary: "Design and development of Gulfstream's e-commerce merchandise website." }

  /* ---------------- TEMPLATE: copy from here, paste above, delete what you don't need ----------------
  ,{
    slug: 'my-project',                 // used in the page address: project.html?p=my-project
    legacy: 'old-page-name',            // optional: the old page, used until published is true
    published: true,
    title: 'Project title', client: 'Client name', category: 'eCommerce',   // eCommerce, Design Systems, Marketing or Photography
    tags: ['UX/UI', 'Research'],
    summary: 'One or two sentences. Shows on the Work page and at the top of the case study.',
    role: 'Your role', team: 'Who you worked with', timeline: '8 weeks', tools: ['Figma'],
    feature: { image: 'images/my-project/feature.jpg', stat: '38%', label: 'conversion lift', line: 'One punchy sentence for the homepage card.' },  // optional: only for homepage cards
    cover: 'images/my-project/cover.jpg',   // card image on the Work page (4:3 works best)
    hero: 'images/my-project/hero.jpg',     // big image at the top of the case study (16:9 works best)
    overview: ['Paragraph one.', 'Paragraph two.'],
    challenge: ['What problem were you solving?'],
    approach: [ { title: 'Step name', text: 'What you did and why.' } ],
    achievements: [ { value: '+38%', label: 'conversion lift' } ],
    highlights: ['A short accomplishment.', 'Another one.'],
    gallery: [ { src: 'images/my-project/01.jpg', alt: 'Describe the image', caption: 'Optional caption', wide: true } ],
    results: ['What happened because of the work.']
  }
  ---------------------------------------------------------------------------------------------------- */
];

PROJECTS.forEach(function (p) {
  if (!p.slug) p.slug = p.legacy;
  p.legacyUrl = p.legacy ? LEGACY_BASE + p.legacy : '';
  p.href = p.published ? 'project.html?p=' + encodeURIComponent(p.slug) : p.legacyUrl;
  p.external = !p.published;
});
