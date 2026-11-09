/* projects.js — ALL of your work lives in this one file.

   TO ADD A PROJECT: copy the TEMPLATE block at the bottom, paste it into the PROJECTS list, fill it in.
   TO PUBLISH A CASE STUDY: fill in the fields and set published: true.
   While published is false, the project links to your old portfolio page (legacy) instead.
   HOMEPAGE: "Selected work" shows the first FOUR projects in this list that have a feature field.
   To put a project on the homepage, give it a feature field. To change the homepage order, move
   projects up or down in this list. To take one off the homepage, delete its feature field.
   feature: { title, stat, label, line, cat }  (title is optional; it uses the project title if left out)
   IMAGES: put files in images/<slug>/ and list the paths below. Missing images show a placeholder
   that tells you exactly which file to add.
   Every field except slug, title, category and summary is optional; empty sections are hidden. */

var LEGACY_BASE = 'https://feliciaschlinz.com/';

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
    feature: { title: 'Nvidia eCommerce', stat: '95%', label: 'first-pass approval', line: 'Full end-to-end wireframes for the world leader in AI computing, delivered in one week.', cat: 'UI/UX + Development' },
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

  {
    slug: 'staples-ecommerce-theme', legacy: 'staples-ecommerce-theme', published: true,
    title: 'Modernizing Enterprise eCommerce', client: 'Staples Promo', category: 'Strategy & Leadership',
    tags: ['UX Strategy', 'Leadership', 'Design Systems', 'Wireframes'],
    summary: "Championing a long-overdue platform transformation to replace five legacy themes with one scalable experience designed to support 400+ enterprise storefronts.",
    role: 'UX Strategy Manager, digital experience leadership',
    team: 'My multidisciplinary UX team, IT, external development, and business stakeholders',
    timeline: 'Ongoing, after 1+ year of advocacy',
    tools: [],
    cover: 'images/staples-design-system/feature.jpg',
    feature: { stat: '5 → 1', label: 'legacy themes, one foundation', line: "Championing a long-overdue platform transformation to replace five legacy themes with one scalable experience for 400+ enterprise storefronts.", cat: 'UX STRATEGY + LEADERSHIP' },
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

  {
    slug: "fedex-global-ecommerce",
    legacy: "fedex-ecommerce-website-design-development",
    published: false,
    title: "Global FedEx eCommerce Website",
    client: "FedEx",
    category: "eCommerce",
    tags: ["UX/UI", "Research", "Personas", "Development"],
    summary: "Design & development of website pitch for FedEx's global merchandise program.",
    role: "UX/UI design, research, and front-end development",
    cover: "images/fedex-global/feature.jpg",
    feature: {"title": "Global FedEx eCommerce", "stat": "Global", "label": "merchandise program", "line": "The pitch that put FedEx’s worldwide merchandise program on one site.", "cat": "UI/UX + DEVELOPMENT"},
    hero: "images/fedex-global-ecommerce/hero.jpg",
    overview: [
      "This website was designed and developed in response to FedEx's request for proposal for a new global merchandise program with an annual estimated spend of $45M."
    ],
    challenge: [
      "Create a fully immersive merchandise experience that would win a global RFP and cater to the needs of FedEx's employee audience across regions and user groups."
    ],
    approach: [
      {"title": "Research the brand", "text": "Conducted research into FedEx's brand, values, and company culture to ground the experience in what matters to their employees."},
      {"title": "Build personas", "text": "Crafted personas from that research and merchandised collections targeting the different user groups within the FedEx corporation."},
      {"title": "Design for engagement", "text": "Created an interactive quiz that recommended products based on each user's specific needs."},
      {"title": "Show global reach", "text": "Added French translation to showcase global capabilities, along with an employee service and recognition platform."}
    ],
    achievements: [
      {"value": "$45M", "label": "Estimated annual program spend"}
    ],
    highlights: [
      "Persona-driven merchandise collections for distinct FedEx user groups.",
      "Interactive product-recommendation quiz.",
      "French translation to demonstrate global capabilities.",
      "Employee service and recognition platform."
    ],
    gallery: [
      {"src": "images/fedex-global-ecommerce/01.jpg", "alt": "Global FedEx eCommerce Website, image 1", "caption": "", "wide": true},
      {"src": "images/fedex-global-ecommerce/02.jpg", "alt": "Global FedEx eCommerce Website, image 2", "caption": "", "wide": false},
      {"src": "images/fedex-global-ecommerce/03.jpg", "alt": "Global FedEx eCommerce Website, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "staples-promo-product-pages",
    legacy: "staples-promo-product-page-redesign",
    published: false,
    title: "Staples Promo Product Pages UI/UX",
    client: "Staples Promo",
    category: "eCommerce",
    tags: ["UX/UI", "User Research", "Interaction Design"],
    summary: "Redesign of the product page with improved UX and added personality.",
    role: "UX/UI design",
    cover: "images/staples-promo-product-pages/cover.jpg",
    hero: "images/staples-promo-product-pages/hero.jpg",
    overview: ["Redesign of the eCommerce product pages for Staples Promo."],
    challenge: [
      "User research showed that our audience was mostly purchasing for their work organizations and liked to have a sense of validation that they were making a good investment. User studies of our website also showed that our transactional pages lacked personality and fun."
    ],
    approach: [
      {"title": "Learn from users", "text": "Watched numerous user sessions to identify areas of frustration, alongside the research already conducted."},
      {"title": "Apply the new brand", "text": "Redesigned the product page with new brand elements, a clean structure, and improved hierarchy."},
      {"title": "Add validation", "text": "Speech bubbles appear after a timed delay to give the user a sense of validation that they are making a good choice."},
      {"title": "Add personality", "text": "Wove office personality throughout the page, such as changing the 'logo upload' to the 'file cabinet' to store uploaded logos for later use."}
    ],
    gallery: [
      {"src": "images/staples-promo-product-pages/01.jpg", "alt": "Staples Promo Product Pages UI/UX, image 1", "caption": "", "wide": true},
      {"src": "images/staples-promo-product-pages/02.jpg", "alt": "Staples Promo Product Pages UI/UX, image 2", "caption": "", "wide": false},
      {"src": "images/staples-promo-product-pages/03.jpg", "alt": "Staples Promo Product Pages UI/UX, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "staples-promo-design-system",
    legacy: "staples-promo-digital-design-system",
    published: false,
    title: "Staples Promo Design System",
    client: "Staples Promo",
    category: "Strategy & Leadership",
    tags: ["Design Systems", "Accessibility", "Brand"],
    summary: "Design and development of Staples Promo's digital design system.",
    role: "Design system design and development",
    team: "Brand creative team",
    cover: "images/staples-promo-design-system/cover.jpg",
    hero: "images/staples-promo-design-system/hero.jpg",
    overview: ["Design and development of Staples Promo's digital design system."],
    challenge: [
      "Staples Promo went through a brand refresh that incorporated new logos, a new color palette, new fonts, and an entire brand identity. The company had never had a digital design system for UI elements."
    ],
    approach: [
      {"title": "Create cohesion", "text": "Created the design system to deliver a cohesive experience across all platforms and media assets, including the eCommerce website, digital presentations, and social media."},
      {"title": "Advocate for digital", "text": "Collaborated with the brand creative team on the new brand and used my digital expertise to advocate for a slightly altered color palette and legible fonts for digital environments that supported our efforts to be ADA compliant."}
    ],
    highlights: [
      "Staples Promo's first digital design system for UI elements.",
      "Accessibility-minded color and type choices for digital."
    ],
    gallery: [
      {"src": "images/staples-promo-design-system/01.jpg", "alt": "Staples Promo Design System, image 1", "caption": "", "wide": true},
      {"src": "images/staples-promo-design-system/02.jpg", "alt": "Staples Promo Design System, image 2", "caption": "", "wide": false},
      {"src": "images/staples-promo-design-system/03.jpg", "alt": "Staples Promo Design System, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "staples-promo-photo-shoot",
    legacy: "staples-promo-photoshoot",
    published: false,
    title: "Staples Promo Photo Shoot",
    client: "Staples Promo",
    category: "Art Direction",
    tags: ["Art Direction", "Photography"],
    summary: "Photo direction for Staples Promo brand launch, digital marketing, and e-commerce website.",
    role: "Photo direction",
    team: "Brand creative team, modeling agency, wardrobe stylist, hair & makeup stylist, product stylist, and photographer",
    cover: "images/staples-promo-photo-shoot/cover.jpg",
    hero: "images/staples-promo-photo-shoot/hero.jpg",
    overview: [
      "This photo shoot was planned to support the new brand launch of Staples Promo. The goal was to showcase branded merchandise in a vibrant environment to promote brand awareness.",
      "The models were booked through a modeling agency and selected based on the extended Staples Promo demographic."
    ],
    gallery: [
      {"src": "images/staples-promo-photo-shoot/01.jpg", "alt": "Staples Promo Photo Shoot, image 1", "caption": "", "wide": true},
      {"src": "images/staples-promo-photo-shoot/02.jpg", "alt": "Staples Promo Photo Shoot, image 2", "caption": "", "wide": false},
      {"src": "images/staples-promo-photo-shoot/03.jpg", "alt": "Staples Promo Photo Shoot, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-ecommerce-2020",
    legacy: "2020-airbnb-ecommerce",
    published: false,
    title: "2020 Airbnb E-Commerce Website",
    client: "Airbnb",
    category: "eCommerce",
    tags: ["UX/UI", "Development", "Email"],
    summary: "Redesign and development of Airbnb's corporate merchandise website to reflect updated brand guidelines.",
    role: "UX/UI design and development",
    team: "Airbnb brand team",
    cover: "images/airbnb-ecommerce-2020/cover.jpg",
    hero: "images/airbnb-ecommerce-2020/hero.jpg",
    overview: [
      "This project was created to redesign the Airbnb merchandise eCommerce website to reflect the brand change Airbnb went through at the end of 2019."
    ],
    challenge: [
      "The previous brand guidelines were very vibrant with an extensive color palette. The new direction had a more simplistic approach and limited the core colors to an updated version of Hof (dark grey), Rausch (logo color), and white. While the website we designed and developed in 2017 was fitting for the audience, we wanted to simplify the user experience to partner with the updated guidelines."
    ],
    approach: [
      {"title": "Simplify the journey", "text": "Partnered with the brand team at Airbnb to update the global portal, country landing pages, and US Airbnb merchandise website to make the customer journey as direct as possible while representing the brand shift."}
    ],
    gallery: [
      {"src": "images/airbnb-ecommerce-2020/01.jpg", "alt": "2020 Airbnb E-Commerce Website, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-ecommerce-2020/02.jpg", "alt": "2020 Airbnb E-Commerce Website, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-ecommerce-2020/03.jpg", "alt": "2020 Airbnb E-Commerce Website, image 3", "caption": "", "wide": false}
    ],
    results: [
      "The concepts shown were implemented for the design and development of the website and the email blast that supported the launch."
    ]
  },

  {
    slug: "airbnb-digital-display-travel",
    legacy: "airbnb-digital-display-travel",
    published: false,
    title: "Airbnb Digital Display",
    client: "Airbnb",
    category: "Marketing",
    tags: ["Animation", "Digital Display"],
    summary: "Animated digital display to market general awareness of their e-commerce website.",
    cover: "images/airbnb-digital-display-travel/cover.jpg",
    hero: "images/airbnb-digital-display-travel/hero.jpg",
    overview: [
      "This project was created to announce new merchandise via a digital display broadcast at Airbnb Headquarters in San Francisco. Airbnb's digital displays are usually short animations that quickly capture the audience as they cycle through broadcasts at the office.",
      "The animated display was developed to create a sense of urgency to check out the new merch on the website by teasing a few of the new bag options available."
    ],
    gallery: [
      {"src": "images/airbnb-digital-display-travel/01.jpg", "alt": "Airbnb Digital Display, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-digital-display-travel/02.jpg", "alt": "Airbnb Digital Display, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-digital-display-travel/03.jpg", "alt": "Airbnb Digital Display, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "hrblock-marketing",
    legacy: "hrblock-marketing",
    published: false,
    title: "H&R Block Marketing",
    client: "H&R Block",
    category: "Marketing",
    tags: ["Digital Marketing"],
    summary: "Miscellaneous digital marketing to support H&R Block's merchandise store, the Block Shop.",
    cover: "images/hrblock-marketing/cover.jpg",
    hero: "images/hrblock-marketing/hero.jpg",
    overview: [
      "Digital imagery used in miscellaneous marketing pieces to promote custom merchandise at the Block Shop.",
      "These Block squares were developed to support marketing offers, on-site events, and seasonal promotions with merchandise from the eCommerce website."
    ],
    gallery: [
      {"src": "images/hrblock-marketing/01.jpg", "alt": "H&R Block Marketing, image 1", "caption": "", "wide": true},
      {"src": "images/hrblock-marketing/02.jpg", "alt": "H&R Block Marketing, image 2", "caption": "", "wide": false},
      {"src": "images/hrblock-marketing/03.jpg", "alt": "H&R Block Marketing, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-custom-campaign",
    legacy: "airbnb-custom-campaign",
    published: false,
    title: "Airbnb Custom Campaign",
    client: "Airbnb",
    category: "Marketing",
    tags: ["Illustration", "Digital Display", "Print"],
    summary: "Digital and printed marketing pieces to promote custom merchandise that tells a story and reflects Airbnb's diverse culture.",
    cover: "images/airbnb-custom-campaign/cover.jpg",
    hero: "images/airbnb-custom-campaign/hero.jpg",
    overview: [
      "This project was created to introduce Airbnb employees to our account representatives at Staples and start the conversation about creating custom merchandise.",
      "We created a digital display that ran on their announcement screens, as well as a printed piece the reps could hand out at Airbnb Headquarters to promote their services and introduce themselves."
    ],
    approach: [
      {"title": "Add a human touch", "text": "Created unique illustrations of the reps, aligned with the Airbnb brand, to give the pieces a sense of personality and human touch."}
    ],
    gallery: [
      {"src": "images/airbnb-custom-campaign/01.jpg", "alt": "Airbnb Custom Campaign, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-custom-campaign/02.jpg", "alt": "Airbnb Custom Campaign, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-custom-campaign/03.jpg", "alt": "Airbnb Custom Campaign, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "republic-services-launch-teaser",
    legacy: "republic-services-launch-teaser",
    published: false,
    title: "Republic Services Launch Teaser",
    client: "Republic Services",
    category: "Marketing",
    tags: ["Email", "Animation"],
    summary: "Animated email marketing to tease the launch of the new e-commerce website and new merchandise collection.",
    cover: "images/republic-services-launch-teaser/cover.jpg",
    hero: "images/republic-services-launch-teaser/hero.jpg",
    overview: [
      "This email blast was created to tease the launch of the new eCommerce merchandise collection and website, the Republic Services Company Store."
    ],
    approach: [
      {"title": "Design for what works", "text": "Previous marketing communications and clickthroughs indicated that Republic Services employees responded best to animated GIFs, so the email was designed as a fun teaser with an animated Republic Services truck announcing that something big was coming."}
    ],
    gallery: [
      {"src": "images/republic-services-launch-teaser/01.jpg", "alt": "Republic Services Launch Teaser, image 1", "caption": "", "wide": true},
      {"src": "images/republic-services-launch-teaser/02.jpg", "alt": "Republic Services Launch Teaser, image 2", "caption": "", "wide": false},
      {"src": "images/republic-services-launch-teaser/03.jpg", "alt": "Republic Services Launch Teaser, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-launch-campaign",
    legacy: "airbnb-launch-campaign",
    published: false,
    title: "Airbnb Launch Campaign",
    client: "Airbnb",
    category: "Marketing",
    tags: ["Email", "Animation"],
    summary: "Animated email marketing to promote the launch of Airbnb's merchandise website, Airbnb Goods.",
    cover: "images/airbnb-launch-campaign/cover.jpg",
    hero: "images/airbnb-launch-campaign/hero.jpg",
    overview: [
      "This email campaign was developed to introduce the new partnership between Airbnb and Staples as the new provider of Airbnb merchandise."
    ],
    approach: [
      {"title": "Tease the launch", "text": "The first email teased the new collection coming in the fall and promoted some of the new services from the partnership."},
      {"title": "Launch the site", "text": "The second email promoted the launch of the merchandise website and the new collections developed with Staples' merchandising department and Airbnb's marketing department, teasing some of the new items in the animation."}
    ],
    gallery: [
      {"src": "images/airbnb-launch-campaign/01.jpg", "alt": "Airbnb Launch Campaign, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-launch-campaign/02.jpg", "alt": "Airbnb Launch Campaign, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-launch-campaign/03.jpg", "alt": "Airbnb Launch Campaign, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-custom-merchandise-campaign",
    legacy: "airbnb-custom-merchandise-campaign",
    published: false,
    title: "Airbnb Custom Merchandise Campaign",
    client: "Airbnb",
    category: "Marketing",
    tags: ["Email"],
    summary: "Email marketing to promote custom merchandise orders for Airbnb employees.",
    cover: "images/airbnb-custom-merchandise-campaign/cover.jpg",
    hero: "images/airbnb-custom-merchandise-campaign/hero.jpg",
    overview: [
      "These email blasts were created to promote custom merchandise orders and offer a marketing incentive to begin a first custom purchase."
    ],
    approach: [
      {"title": "Real employees", "text": "The first email featured photography of Airbnb employees modeling items from the merchandise website, Airbnb Goods."},
      {"title": "A local theme", "text": "The second email had a San Francisco theme, since the US headquarters is located there and most interactions with employees were on-site."}
    ],
    gallery: [
      {"src": "images/airbnb-custom-merchandise-campaign/01.jpg", "alt": "Airbnb Custom Merchandise Campaign, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-custom-merchandise-campaign/02.jpg", "alt": "Airbnb Custom Merchandise Campaign, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-custom-merchandise-campaign/03.jpg", "alt": "Airbnb Custom Merchandise Campaign, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-pop-up-shop-display",
    legacy: "airbnb-digital-display",
    published: false,
    title: "Airbnb Digital Display (Pop-Up Shop)",
    client: "Airbnb",
    category: "Marketing",
    tags: ["Animation", "Digital Display", "Events"],
    summary: "Animated digital display to announce an on-site pop up shop at Airbnb Headquarters.",
    cover: "images/airbnb-pop-up-shop-display/cover.jpg",
    hero: "images/airbnb-pop-up-shop-display/hero.jpg",
    overview: [
      "This digital display was created to announce a pop-up shop in the cafeteria (Dine Dine Dine) of one of the Airbnb offices in San Francisco.",
      "It was advertised the day of the event to create a sense of urgency and spur-of-the-moment shopping. The event had physical samples of the merchandise from the online shop so employees could touch and feel the merch in person."
    ],
    gallery: [
      {"src": "images/airbnb-pop-up-shop-display/01.jpg", "alt": "Airbnb Digital Display (Pop-Up Shop), image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-pop-up-shop-display/02.jpg", "alt": "Airbnb Digital Display (Pop-Up Shop), image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-pop-up-shop-display/03.jpg", "alt": "Airbnb Digital Display (Pop-Up Shop), image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "global-identity-rebrand",
    legacy: "copy-of-intuit-marketing",
    published: false,
    title: "Global Identity Rebrand",
    client: "Staples",
    category: "Marketing",
    tags: ["Branding", "Web Design", "Development"],
    summary: "Rebranding of Staples' global network, Global Identity.",
    role: "Brand identity, web design and development",
    cover: "images/global-identity-rebrand/cover.jpg",
    hero: "images/global-identity-rebrand/hero.jpg",
    overview: [
      "Rebranding of Staples' global network, Global Identity. This project included an overhaul of previous branding to be more diverse, human, and inclusive."
    ],
    approach: [
      {"title": "Listen to partners", "text": "Worked with partners across the global network to identify who they want to be, how they want to represent themselves, and how to elevate their current brand experience."},
      {"title": "Build the identity", "text": "Developed a new logo, color palette, brand voice, and imagery to support the rebrand."},
      {"title": "Launch the website", "text": "Designed and developed a new website to support their offerings."}
    ],
    gallery: [
      {"src": "images/global-identity-rebrand/01.jpg", "alt": "Global Identity Rebrand, image 1", "caption": "", "wide": true},
      {"src": "images/global-identity-rebrand/02.jpg", "alt": "Global Identity Rebrand, image 2", "caption": "", "wide": false},
      {"src": "images/global-identity-rebrand/03.jpg", "alt": "Global Identity Rebrand, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-email-marketing",
    legacy: "airbnb-email-marketing",
    published: false,
    title: "Airbnb Email Marketing",
    client: "Airbnb",
    category: "Marketing",
    tags: ["Email", "Illustration"],
    summary: "Email marketing offer that promoted a discount and theme focused on the Year of the Dog.",
    cover: "images/airbnb-email-marketing/cover.jpg",
    hero: "images/airbnb-email-marketing/hero.jpg",
    overview: [
      "This campaign was created to promote the Chinese Zodiac Year of the Dog with a coordinating marketing offer. Dogs are a big part of Airbnb culture, so we focused on the Woof! collection of dog-friendly merchandise."
    ],
    approach: [
      {"title": "Research the details", "text": "Researched the Chinese zodiac and made sure to avoid unlucky numbers and colors during the Year of the Dog."},
      {"title": "Tie it to the product", "text": "The dog in the illustration wears one of the Airbnb branded collars featured in the Woof! collection."}
    ],
    gallery: [
      {"src": "images/airbnb-email-marketing/01.jpg", "alt": "Airbnb Email Marketing, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-email-marketing/02.jpg", "alt": "Airbnb Email Marketing, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-email-marketing/03.jpg", "alt": "Airbnb Email Marketing, image 3", "caption": "", "wide": false}
    ],
    results: [
      "The effort was supported with an email blast, a digital display, and a post in Airbnb's digital newsletter."
    ]
  },

  {
    slug: "mycogen-seeds-photo-shoot",
    legacy: "mycogen-seeds-photoshoot",
    published: false,
    title: "Mycogen Seeds Photo Shoot",
    client: "Mycogen Seeds",
    category: "Art Direction",
    tags: ["Art Direction", "Photography"],
    summary: "Photo direction for Mycogen Seeds' digital email marketing, e-commerce website, and print catalog.",
    role: "Photo direction",
    team: "Merchandising team, marketing manager, modeling agency, and photographer",
    cover: "images/mycogen-seeds-photo-shoot/cover.jpg",
    hero: "images/mycogen-seeds-photo-shoot/hero.jpg",
    overview: [
      "This on-location photo shoot was planned to announce new Mycogen branded merchandise and support marketing campaigns throughout the year. The goal was to show the items being used in the target environment.",
      "The models were booked through a modeling agency and selected based on the Mycogen demographic, and the shoot took place on an Iowa farm for authenticity. It was followed by product photography in the studio."
    ],
    gallery: [
      {"src": "images/mycogen-seeds-photo-shoot/01.jpg", "alt": "Mycogen Seeds Photo Shoot, image 1", "caption": "", "wide": true},
      {"src": "images/mycogen-seeds-photo-shoot/02.jpg", "alt": "Mycogen Seeds Photo Shoot, image 2", "caption": "", "wide": false},
      {"src": "images/mycogen-seeds-photo-shoot/03.jpg", "alt": "Mycogen Seeds Photo Shoot, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-goods",
    legacy: "airbnb-ecommerce-website",
    published: false,
    title: "Airbnb eCommerce Website",
    client: "Airbnb",
    category: "eCommerce",
    tags: ["UX/UI", "Development", "Global"],
    summary: "Design and development of the initial launch of Airbnb's merchandise website, Airbnb Goods.",
    role: "UX/UI design and development",
    cover: "images/airbnb-goods/feature.jpg",
    feature: {"title": "Enterprise Campaign Experience Strategy", "stat": "$96K", "label": "CAMPAIGN REVENUE", "line": "Conceived and launched a connected eCommerce strategy across 54 enterprise storefronts, driving seasonal engagement and sales.", "cat": "UX STRATEGY + DIGITAL EXPERIENCE"},
    hero: "images/airbnb-goods/hero.jpg",
    overview: [
      "This project started with a landing page that introduced Airbnb employees to the new relationship with Staples as their merchandise provider, serving as a teaser for the US eCommerce site.",
      "Airbnb Goods was designed to follow Airbnb brand guidelines paired with a fun, upbeat experience. Every merchandise collection featured illustrative graphics that gave personality to the entire shopping experience."
    ],
    approach: [
      {"title": "Tease the launch", "text": "Designed a landing page introducing the Staples partnership ahead of the US site launch."},
      {"title": "Welcome the world", "text": "Developed a global portal featuring \"welcome\" in revolving languages as the first point of entry for all global merchandise orders."},
      {"title": "Launch and replicate", "text": "Designed and developed the US Airbnb eCommerce site, followed by replicated sites in APAC and EMEA."}
    ],
    highlights: [
      "Global portal plus US, APAC, and EMEA storefronts.",
      "Launch email featured on convertcart.com as a top product launch email that drove massive sales."
    ],
    gallery: [
      {"src": "images/airbnb-goods/01.jpg", "alt": "Airbnb eCommerce Website, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-goods/02.jpg", "alt": "Airbnb eCommerce Website, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-goods/03.jpg", "alt": "Airbnb eCommerce Website, image 3", "caption": "", "wide": false}
    ],
    results: [
      "The launch email was featured on convertcart.com as a top product launch email that drove massive sales.",
      "The website was later redesigned in 2020 in accordance with Airbnb’s updated brand guidelines."
    ]
  },

  {
    slug: "hr-block-box",
    legacy: "hr-block-box",
    published: false,
    title: "H&R Block Marketing Box",
    client: "H&R Block",
    category: "Marketing",
    tags: ["Packaging", "Concept", "Copywriting"],
    summary: "Design and ideation of a subscription marketing campaign to support H&R Block's merchandise store, the Block Shop.",
    cover: "images/hr-block-box/cover.jpg",
    hero: "images/hr-block-box/hero.jpg",
    overview: [
      "This project was a creative exercise initiated by the Staples team to develop fun and unique ways to engage H&R Block employees with custom swag."
    ],
    approach: [
      {"title": "Present the concept", "text": "The merchandise was designed by our merch team; I presented the concept in an engaging way through packaging design, layout, and creative copy."}
    ],
    gallery: [
      {"src": "images/hr-block-box/01.jpg", "alt": "H&R Block Marketing Box, image 1", "caption": "", "wide": true},
      {"src": "images/hr-block-box/02.jpg", "alt": "H&R Block Marketing Box, image 2", "caption": "", "wide": false},
      {"src": "images/hr-block-box/03.jpg", "alt": "H&R Block Marketing Box, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "republic-services-earth-day",
    legacy: "republic-services-earthday-campaign",
    published: false,
    title: "Republic Services Earth Day Campaign",
    client: "Republic Services",
    category: "Marketing",
    tags: ["Email", "Intranet"],
    summary: "Email and internal marketing to Republic Services employees to promote eco-friendly items for Earth Day.",
    cover: "images/republic-services-earth-day/cover.jpg",
    hero: "images/republic-services-earth-day/hero.jpg",
    overview: [
      "Earth Day is a prominent holiday at Republic Services because of their devotion to recycling and keeping the Earth clean. Our goal was to promote eco-friendly merchandise ahead of Earth Day.",
      "We sent an email blast and created a post for their intranet to market these items and direct users to the site for purchase."
    ],
    approach: [
      {"title": "Own the color", "text": "Because Republic Services' main competitor has green brand colors, we always show the Earth in shades of blue to distinguish the brand."}
    ],
    gallery: [
      {"src": "images/republic-services-earth-day/01.jpg", "alt": "Republic Services Earth Day Campaign, image 1", "caption": "", "wide": true},
      {"src": "images/republic-services-earth-day/02.jpg", "alt": "Republic Services Earth Day Campaign, image 2", "caption": "", "wide": false},
      {"src": "images/republic-services-earth-day/03.jpg", "alt": "Republic Services Earth Day Campaign, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "intuit-marketing",
    legacy: "intuit-marketing",
    published: false,
    title: "Intuit Marketing",
    client: "Intuit",
    category: "Marketing",
    tags: ["Email"],
    summary: "Miscellaneous email communications and digital marketing.",
    cover: "images/intuit-marketing/cover.jpg",
    hero: "images/intuit-marketing/hero.jpg",
    overview: [
      "Miscellaneous email marketing targeted to Intuit employees.",
      "These communications supported marketing offers, on-site events, and seasonal promotions with merchandise from their eCommerce website."
    ],
    gallery: [
      {"src": "images/intuit-marketing/01.jpg", "alt": "Intuit Marketing, image 1", "caption": "", "wide": true},
      {"src": "images/intuit-marketing/02.jpg", "alt": "Intuit Marketing, image 2", "caption": "", "wide": false},
      {"src": "images/intuit-marketing/03.jpg", "alt": "Intuit Marketing, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "airbnb-pride-display",
    legacy: "airbnb-digital-display-pride",
    published: false,
    title: "Airbnb Pride Digital Display",
    client: "Airbnb",
    category: "Marketing",
    tags: ["Animation", "Digital Display"],
    summary: "Animated digital display to promote pride merchandise at Airbnb.",
    cover: "images/airbnb-pride-display/cover.jpg",
    hero: "images/airbnb-pride-display/hero.jpg",
    overview: [
      "This project was developed to celebrate Pride Month and promote a collection designed for Airbnb employees featuring their trademark Bélo in rainbow form.",
      "The display was created to represent diversity and inclusion, a key value at Airbnb, and was featured at both Airbnb offices in San Francisco."
    ],
    gallery: [
      {"src": "images/airbnb-pride-display/01.jpg", "alt": "Airbnb Pride Digital Display, image 1", "caption": "", "wide": true},
      {"src": "images/airbnb-pride-display/02.jpg", "alt": "Airbnb Pride Digital Display, image 2", "caption": "", "wide": false},
      {"src": "images/airbnb-pride-display/03.jpg", "alt": "Airbnb Pride Digital Display, image 3", "caption": "", "wide": false}
    ]
  },

  {
    slug: "gulfstream-ecommerce",
    legacy: "gulfstream-ecommerce-website",
    published: false,
    title: "Gulfstream eCommerce Website",
    client: "Gulfstream",
    category: "eCommerce",
    tags: ["UX/UI", "Development", "Luxury"],
    summary: "Design and development of Gulfstream's e-commerce merchandise website.",
    role: "UX/UI design and development",
    cover: "images/gulfstream-ecommerce/cover.jpg",
    hero: "images/gulfstream-ecommerce/hero.jpg",
    overview: [
      "Gulfstream was looking for a high-end luxury website to match their branding and company vision."
    ],
    challenge: [
      "Their brand team had already created concepts for what they envisioned for their merchandise eCommerce site."
    ],
    approach: [
      {"title": "Find the real need", "text": "Through conversations with the client, I determined their wants and needs and provided a more fitting concept and solution for what they were trying to convey."}
    ],
    gallery: [
      {"src": "images/gulfstream-ecommerce/01.jpg", "alt": "Gulfstream eCommerce Website, image 1", "caption": "", "wide": true},
      {"src": "images/gulfstream-ecommerce/02.jpg", "alt": "Gulfstream eCommerce Website, image 2", "caption": "", "wide": false},
      {"src": "images/gulfstream-ecommerce/03.jpg", "alt": "Gulfstream eCommerce Website, image 3", "caption": "", "wide": false}
    ],
    results: [
      "The concepts were designed and developed from homepage through checkout for their merchandise store."
    ]
  }

  /* ---------------- TEMPLATE: copy from here, paste above, delete what you don't need ----------------
  ,{
    slug: 'my-project',                 // used in the page address: project.html?p=my-project
    legacy: 'old-page-name',            // optional: the old page, used until published is true
    published: true,
    title: 'Project title', client: 'Client name', category: 'eCommerce',   // eCommerce, Strategy & Leadership, Marketing or Art Direction
    tags: ['UX/UI', 'Research'],
    summary: 'One or two sentences. Shows on the Work page and at the top of the case study.',
    role: 'Your role', team: 'Who you worked with', timeline: '8 weeks', tools: ['Figma'],
    feature: { stat: '38%', label: 'conversion lift', line: 'One punchy sentence for the homepage card.', cat: 'UX STRATEGY' },  // optional: puts it on the homepage (first four with this field show)
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
