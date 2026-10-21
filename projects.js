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
    summary: "Designing and developing a new eCommerce experience to support a $9M business initiative under critical deadlines.",
    role: 'UX/UI design, UX lead',
    team: '',
    timeline: '',
    tools: [],
    cover: 'assets/nvidia/hero.png',
    feature: { image: 'images/nvidia-ecommerce/feature.jpg', stat: '95%', label: 'first-pass approval', line: 'Full end-to-end wireframes for the world leader in AI computing, delivered in one week.' },
    hero: 'assets/nvidia/hero.png',
    overview: [
      "NVIDIA's $9M eCommerce initiative required more than a redesigned storefront. It demanded a new eCommerce theme, a complete customer experience, and close coordination across UX, IT, and business teams to meet an aggressive launch timeline.",
      "I partnered across these teams to define the experience, develop comprehensive wireframes, and build the front-end storefront. From information architecture and product discovery through cart and checkout, I helped bring a complex, high-priority initiative to life in record time."
    ],
    challenge: [
      "Deliver a new eCommerce theme and end-to-end shopping experience for a $9M business initiative within an exceptionally tight timeline.",
      "The project required aligning business objectives, technical requirements, and UX decisions while building a new theme rather than relying on an existing storefront solution. Every decision needed to balance speed, functionality, and a cohesive customer experience."
    ],
    approach: [
      { title: 'Align the teams', text: 'Partnered with UX, IT, and business stakeholders to establish requirements, align priorities, and identify the technical considerations needed to deliver on time.' },
      { title: 'Architect the experience', text: 'Defined the customer journey, information architecture, and functionality across product discovery, product details, cart, and checkout.' },
      { title: 'Design the UX', text: 'Created comprehensive end-to-end wireframes in one week, establishing a clear experience foundation and achieving 95% first-pass client approval.' },
      { title: 'Build the new theme', text: 'Developed the front-end experience for a new eCommerce theme, working across teams to translate approved UX and creative into a functional storefront under critical deadlines.' }
    ],
    achievements: [
      { value: '$9M', label: 'Business initiative supported' },
      { value: '95%', label: 'First-pass client approval' },
      { value: '1 Week', label: 'Complete UX wireframes delivered' }
    ],
    highlights: [
      'Helped deliver a high-priority $9M eCommerce initiative through cross-functional collaboration with UX, IT, and business stakeholders.',
      'Designed the end-to-end shopping experience and developed the front-end implementation for a new eCommerce theme.',
      'Delivered comprehensive wireframes in one week, achieving 95% first-pass client approval.',
      'Balanced technical constraints, business requirements, and customer experience needs to support an accelerated launch.'
    ],
    gallery: [
      { src: 'assets/nvidia/wireframe-01.png', alt: 'Nvidia eCommerce wireframe, screen 1', caption: '', wide: true },
      { src: 'assets/nvidia/wireframe-02.png', alt: 'Nvidia eCommerce wireframe, screen 2', caption: '' },
      { src: 'assets/nvidia/wireframe-03.png', alt: 'Nvidia eCommerce wireframe, screen 3', caption: '' },
      { src: 'assets/nvidia/wireframe-04.png', alt: 'Nvidia eCommerce wireframe, screen 4', caption: '' },
      { src: 'assets/nvidia/wireframe-05.png', alt: 'Nvidia eCommerce wireframe, screen 5', caption: '' },
      { src: 'assets/nvidia/wireframe-06.png', alt: 'Nvidia eCommerce wireframe, screen 6', caption: '' }
    ],
    results: [
      "Successfully delivered the UX and front-end experience for a new NVIDIA eCommerce theme, supporting a $9M business initiative under an aggressive timeline.",
      "The complete UX wireframes were delivered in one week with 95% first-pass client approval, allowing the project to progress quickly into visual design and development.",
      "Through close partnership with UX, IT, and business stakeholders, the project brought together a new technical foundation and a cohesive shopping experience while meeting critical delivery deadlines."
    ]
  },

  { legacy: 'fedex-ecommerce-website-design-development', feature: { image: 'images/fedex-global/feature.jpg', stat: 'Global', label: 'merchandise program', line: "The pitch that put FedEx’s worldwide merchandise program on one site." }, title: 'Global FedEx eCommerce Website', client: 'FedEx', category: 'eCommerce', summary: "Design & development of website pitch for FedEx's global merchandise program." },
  { legacy: 'staples-promo-product-page-redesign', title: 'Staples Promo Product Pages UI/UX', client: 'Staples Promo', category: 'eCommerce', summary: 'Redesign of the product page with improved UX and added personality.' },
  { legacy: 'staples-promo-digital-design-system', feature: { image: 'images/staples-design-system/feature.jpg', stat: '400+', label: 'sites on one system', line: "One shared system now powers every reusable storefront theme." }, title: 'Staples Promo Design System', client: 'Staples Promo', category: 'Strategy & Leadership', summary: "Design and development of Staples Promo's digital design system." },
  { legacy: 'staples-promo-photoshoot', title: 'Staples Promo Photo Shoot', client: 'Staples Promo', category: 'Art Direction', summary: 'Photo direction for Staples Promo brand launch, digital marketing, and e-commerce website.' },
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
  { legacy: 'mycogen-seeds-photoshoot', title: 'Mycogen Seeds Photo Shoot', client: 'Mycogen Seeds', category: 'Art Direction', summary: "Photo direction for Mycogen Seeds' digital email marketing, e-commerce website, and print catalog." },
  { legacy: 'airbnb-ecommerce-website', feature: { image: 'images/airbnb-goods/feature.jpg', stat: '0 → 1', label: 'Airbnb Goods', line: "Designed and built the launch of Airbnb’s merchandise site from the ground up." }, title: 'Airbnb eCommerce Website', client: 'Airbnb', category: 'eCommerce', summary: "Design and development of the initial launch of Airbnb's merchandise website, Airbnb Goods." },

  {
    slug: 'staples-ecommerce-theme', legacy: 'staples-ecommerce-theme', published: true,
    title: 'Modernizing Enterprise eCommerce', client: 'Staples Promo', category: 'Strategy & Leadership',
    tags: ['UX Strategy', 'Leadership', 'Design Systems', 'Wireframes'],
    summary: "Championing a long-overdue platform transformation to replace five legacy themes with one scalable experience designed to support 400+ enterprise storefronts.",
    role: 'UX Strategy Manager, digital experience leadership',
    team: 'My multidisciplinary UX team, IT, external development, and business stakeholders',
    timeline: 'Ongoing, after 1+ year of advocacy',
    tools: [],
    cover: 'assets/staples-theme/hero.png',
    feature: { image: 'images/staples-ecommerce-theme/feature.jpg', stat: '5 → 1', label: 'legacy themes, one foundation', line: "Making the case for one scalable theme to power 400+ enterprise storefronts." },
    hero: 'assets/staples-theme/hero.png',
    overview: [
      "Sometimes the biggest UX challenges aren't about design. They're about convincing an organization to invest in doing things differently.",
      "For more than a year, I've been advocating for a fundamental transformation of Staples Promo's enterprise eCommerce platform. Five aging themes, years of technical debt, and increasingly complex workarounds have made it difficult to improve experiences, deliver new functionality, or efficiently support more than 400 enterprise storefronts.",
      "Rather than continuing to patch the problems, I pushed for a different approach: one modern, scalable theme supported by reusable components, a comprehensive design library, and a consistent experience strategy.",
      "Today, I lead the business and UX direction behind that vision, guiding my multidisciplinary team and partnering across IT, external development, and business stakeholders to build the foundation for what's next."
    ],
    challenge: [
      "Our existing eCommerce themes were built to get us onto a new platform quickly, but the compromises made along the way created lasting limitations.",
      "Without reusable components or styling variables, routine storefront changes required significant manual front-end development. Years of temporary fixes compounded technical debt, making functionality difficult to update and meaningful UX optimization increasingly challenging.",
      "The consequences extended beyond our teams. Capabilities already being sold to clients couldn't be consistently delivered, while functionality developed for individual storefronts, including NVIDIA, remained difficult to scale across the business.",
      "The need for modernization was clear. The challenge was getting it prioritized.",
      "With development capacity continually redirected toward immediate business demands, foundational improvements struggled to compete. I found myself advocating not just for a better experience, but for the long-term investment required to stop repeating the same problems."
    ],
    approach: [
      { title: 'Recognize the bigger problem', text: "What appeared to be isolated UX and development challenges revealed a much larger issue. I connected recurring manual work, inconsistent functionality, and limited optimization opportunities to the underlying theme architecture, and began advocating for a fundamental change rather than another temporary fix." },
      { title: 'Build the case for change', text: "Spent more than a year championing the initiative across business and technology leadership, pushing for the consolidation of five legacy themes into one scalable foundation. Continued advocating for prioritization and development capacity as competing initiatives repeatedly delayed progress." },
      { title: 'Mobilize the team & expand the vision', text: "Led my multidisciplinary team beyond a traditional theme redesign, guiding the development of comprehensive wireframes, a centralized design library, reusable components, and consistent interaction patterns. Brought competitive research, accessibility standards, and customer acquisition and retention considerations into the experience strategy through partnerships across business teams." },
      { title: 'Keep moving forward', text: "With the initiative on the technology roadmap but development capacity still constrained, I continue driving alignment across UX, IT, and external partners. My focus remains on advancing the experience foundation, addressing technical limitations, and advocating for the resources needed to deliver a sustainable solution for 400+ storefronts." }
    ],
    achievements: [
      { value: '400+', label: 'Enterprise storefronts the new theme is intended to support' },
      { value: '5 → 1', label: 'Legacy themes targeted for consolidation into one scalable foundation' },
      { value: '1+ Year', label: 'Advocating for modernization and driving strategic prioritization' }
    ],
    highlights: [
      "Advocating for Long-Term Change: Identified the systemic limitations holding back enterprise eCommerce and spent more than a year challenging the cycle of short-term fixes, consistently pushing for a sustainable solution despite competing priorities.",
      "Leading Beyond the Redesign: Directed my multidisciplinary team through a comprehensive experience strategy encompassing wireframes, reusable components, a centralized design library, competitive research, and scalable UX standards.",
      "Connecting Teams & Business Priorities: Built cross-functional partnerships spanning UX, IT, external development, accessibility, acquisition, and retention to align experience decisions with broader business needs and technical realities.",
      "Building for Enterprise Scale: Championing a unified architecture designed to reduce manual development, improve accessibility, extend previously isolated functionality, and enable continuous optimization across 400+ enterprise storefronts."
    ],
    gallery: [
      { src: 'assets/staples-theme/wireframe-01.png', alt: 'Enterprise eCommerce theme wireframe, screen 1', caption: '', wide: true },
      { src: 'assets/staples-theme/wireframe-02.png', alt: 'Enterprise eCommerce theme wireframe, screen 2', caption: '' },
      { src: 'assets/staples-theme/wireframe-03.png', alt: 'Enterprise eCommerce theme wireframe, screen 3', caption: '' },
      { src: 'assets/staples-theme/design-library.png', alt: 'Centralized design library components', caption: 'Centralized design library', wide: true }
    ],
    results: [
      "The goal isn't simply to launch a new theme. It's to change what's possible for every enterprise storefront that comes after it.",
      "The transformation is still underway, but the work has already changed the direction of our enterprise experience strategy.",
      "What began as recurring frustrations with outdated technology has become a defined modernization initiative on the technology roadmap, with a clear vision to consolidate five legacy themes into one scalable foundation.",
      "Under my leadership, the UX team has advanced the experience strategy, comprehensive wireframes, and reusable design foundations while expanding collaboration across technical and business teams.",
      "The biggest challenge remains securing the development capacity to bring the vision fully to life. I continue to advocate for its prioritization, connect technical limitations to business impact, and lead the work within our control."
    ]
  },

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
    title: 'Project title', client: 'Client name', category: 'eCommerce',   // eCommerce, Strategy & Leadership, Marketing or Art Direction
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