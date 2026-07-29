import { ServiceItem, PortfolioItem, CaseStudy, TeamMember, BlogPost, FAQItem, StudioLocation } from '../types';
import founderImg from '../../assets/images/FOUNDER_headshot.jpeg';
import hrImg from '../../assets/images/HR_headshot.png';
import teamLeaderImg from '../../assets/images/TEAMLEADER_headshot.png';

export const STUDIO_INFO = {
  name: 'Right Time FX Studio',
  tagline: 'Transforming Imagination Into Cinematic Reality',
  subtitle: 'Leading VFX Outsourcing Studios in India',
  description: 'As the Leading VFX Outsourcing Studios in India, we blend talent and technology to craft stunning visual experiences across films, episodic, advertising, and more. Our team of passionate artists and technologists pushes the boundaries of creativity, delivering visual effects that inspire and engage.',
  aboutDetailed: {
    heroHeading: 'Leading VFX Outsourcing Studio in India',
    paragraph1: 'As the Leading VFX Outsourcing Studios in India, we blend talent and technology to craft stunning visual experiences across films, episodic, advertising, and more.',
    paragraph2: 'Our team of passionate artists and technologists pushes the boundaries of creativity, delivering visual effects that inspire and engage.',
    paragraph3: 'Every project is executed through structured post-production workflows focused on quality and consistency.',
  },
  whyChooseUs: {
    heading: 'Why Choose Right Time FX Studio?',
    subheading: 'Recognised for disciplined execution, creative precision, and dependable delivery standards.',
    intro: 'Yes we are the Leading VFX Outsourcing Studios in India but apart from that, we are recognised for our disciplined execution, creative precision, and dependable delivery standards.',
    points: [
      {
        title: 'Innovation at the Core',
        description: 'We embrace the latest technologies to revolutionize every medium we touch. Our workflows evolve continuously to align with modern production practices.'
      },
      {
        title: 'Boundless Creativity',
        description: 'Every project is a canvas for limitless imagination. We approach each shot with artistic intent and technical accuracy.'
      },
      {
        title: 'Disciplined Execution & Delivery',
        description: 'Dependable turnaround times and structured post-production pipelines ensuring uncompromising pixel-perfect quality.'
      }
    ]
  },
  contact: {
    email: 'www.righttimefxstudio@gmail.com',
    phone: '8509587525',
    phoneFormatted: '+91 8509587525',
    country: 'India',
    address: 'Right Time FX Studio, National VFX & Post-Production Hub, India'
  },
  stats: [
    { label: 'Feature Films & Episodic Shots Delivered', value: '10,000+', prefix: '' },
    { label: 'India & Global Client Satisfaction', value: '100%', prefix: '' },
    { label: 'VFX Artists & Roto Specialists', value: '250+', prefix: '' },
    { label: 'On-Time Project Delivery Rate', value: '99.9%', prefix: '' },
  ],
  awards: [
    { year: '2025', title: 'Best VFX Outsourcing Excellence Award', project: 'Indian & Global Productions' },
    { year: '2024', title: 'Outstanding Innovation in Post-Production Pipeline', project: 'Right Time FX R&D' },
    { year: '2023', title: 'Excellence in Rotoscoping & Paint Cleanup', project: 'Feature Film Series' },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'vfx-compositing',
    title: 'VFX Compositing',
    iconName: 'Layers',
    category: 'vfx',
    shortDesc: 'Seamless multi-layered blending of live-action footage, photorealistic CGI elements, matte paintings, and optical effects.',
    fullDesc: 'Our compositing team blends deep multi-pass CG renders, volumetric FX, digital doubles, live-action plates, and practical elements into a singular, photorealistic frame. Utilizing deep compositing pipelines in Foundry Nuke, we achieve perfect depth control, sub-pixel edge detail, interactive lighting, and cinematic optical characteristics.',
    benefits: [
      'Deep multi-pass compositing pipeline for unprecedented control',
      'Realistic optical camera artifacts, chromatic aberration, and lens flare matching',
      'Flawless grain matching and color space compliance (ACEScg / OCIO)',
      'High-throughput sequence pipeline capable of handling hundreds of complex shots'
    ],
    process: [
      'Plate Ingestion & Color Pipeline Setup (ACES)',
      'Multi-pass CG Lineup & Light Balancing',
      '2D/3D Integration & Edge Refining',
      'Optical Flares, Atmospheric Glow & Grain Matching',
      'Final QC & Studio Review'
    ],
    technologies: ['Foundry Nuke Studio', 'Flame', 'After Effects', 'Mocha Pro', 'ACES / OCIO Workflow'],
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      { question: 'What software does Right Time FX Studio use for Compositing?', answer: 'We run a standardized Foundry Nuke Studio and Flame pipeline integrated with custom PySide tools and ShotGrid tracking.' },
      { question: 'Can you work in native ACEScg color space?', answer: 'Yes, our entire pipeline operates in ACEScg color management from ingestion to final delivery.' }
    ]
  },
  {
    id: 'cgi',
    title: 'CGI & Hard-Surface Modeling',
    iconName: 'Box',
    category: 'cgi',
    shortDesc: 'Hyper-realistic 3D hard-surface modeling, complex vehicles, futuristic environments, and mechanical props.',
    fullDesc: 'From intricate cybernetic armor to sprawling futuristic metropolis architecture and military aircraft, our hard-surface CGI division builds hero assets engineered for extreme close-ups and dynamic destructibility.',
    benefits: [
      'Sub-millimeter asset fidelity with procedural texturing',
      'Optimized UDIM UV layouts and PBR material shader setups',
      'Production-ready rigging for seamless mechanical animation',
      'Modular kitbashing sets for rapid world-building'
    ],
    process: [
      'Concept Art & Orthographic Blueprinting',
      'High-Poly Sculpting & Sub-D Topology Optimization',
      'UDIM UV Mapping & Substance 3D Texturing',
      'PBR Shader Look Development & Turntable Sign-Off',
      'Shot Integration & Asset Publishing'
    ],
    technologies: ['Autodesk Maya', 'SideFX Houdini', 'Substance 3D Painter', 'ZBrush', 'V-Ray / Arnold'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      { question: 'Do you deliver raw 3D assets or integrated shots?', answer: 'We offer both asset creation packages (USD/FBX/Maya with Arnold materials) and complete end-to-end shot visual effects.' }
    ]
  },
  {
    id: '3d-animation',
    title: '3D Character & Creature Animation',
    iconName: 'Clapperboard',
    category: 'cgi',
    shortDesc: 'Photorealistic creature performance, digital doubles, hero character animation, and anatomical muscle simulation.',
    fullDesc: 'We bring mythical beasts, futuristic androids, digital double actors, and organic creatures to life with emotional resonance, weight, and anatomical precision. Combining facial motion capture with keyframe artistry, we craft unforgettable performances.',
    benefits: [
      'Anatomically accurate bone, muscle, and tissue deformation pipelines',
      'Advanced hair, fur, and cloth dynamic simulations (XGen / Houdini Vellum)',
      'Sub-surface scattering skin shaders for photorealistic digital humans',
      'Optical motion capture cleanup and performance enhancement'
    ],
    process: [
      'Anatomical Sculpting & Skeleton Rigging',
      'Facial Rig Creation (FACS Based)',
      'Mocap Cleanup & Keyframe Animation Performance',
      'CFX (Cloth, Hair, Muscle, Skin Slip Simulation)',
      'Lighting & Composite Integration'
    ],
    technologies: ['Autodesk Maya', 'ZBrush', 'XGen', 'Houdini Vellum', 'Unreal MetaHuman'],
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      { question: 'Can you create digital double actors for dangerous stunts?', answer: 'Yes, we specialize in high-detail digital doubles complete with FACS facial rigs, micro-wrinkle maps, and hair grooming.' }
    ]
  },
  {
    id: 'motion-graphics',
    title: 'Cinematic Motion Graphics',
    iconName: 'Sparkles',
    category: 'vfx',
    shortDesc: 'Futuristic HUD interfaces, title sequences, holographic displays, and high-concept broadcast design.',
    fullDesc: 'Elevate your project with iconic main title sequences, sci-fi FUI (Futuristic User Interfaces), hologram displays, lower thirds, and broadcast branding graphics created by top motion design artists.',
    benefits: [
      'Stylized 2D/3D typography and title design',
      'Interactive sci-fi HUDs tracking onto live props and screens',
      'High-impact audio-reactive motion visualizers',
      '4K/8K delivery formatted for IMAX and broadcast streams'
    ],
    process: ['Styleframe Concepting', '3D Motion Design', 'Compositing & Glow Effects', 'Sound Sync', 'Final Output'],
    technologies: ['Cinema 4D', 'Redshift', 'After Effects', 'Cavium HUD Tools'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'matchmove-tracking',
    title: 'Matchmove & Camera Tracking',
    iconName: 'Focus',
    category: 'vfx',
    shortDesc: 'Sub-pixel 3D camera solved trajectories, object tracking, and lidar scan alignment for 100% stable CG integration.',
    fullDesc: 'Precise camera solve data is the cornerstone of believable visual effects. Our matchmove team extracts high-precision 3D camera motions, focal length variations, lens distortion maps, and object tracking solves even from handheld or erratic plates.',
    benefits: [
      '3D camera tracking with sub-pixel error tolerances',
      'Custom lens distortion profile building (Grid calibration)',
      'Lidar scan mesh alignment and photogrammetry modeling',
      'Body and object tracking for dynamic interaction'
    ],
    process: ['Plate Survey Ingestion', 'Feature Tracking', '3D Spatial Solve', 'Survey Mesh Alignment', 'QC Lineup Export'],
    technologies: ['SynthEyes', '3DEqualizer', 'PFTrack', 'Maya'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'rotoscoping',
    title: 'Rotoscoping & Silhouette Extraction',
    iconName: 'Scissors',
    category: 'vfx',
    shortDesc: 'High-speed, articulate hair-fine matte extraction for seamless element separation and foreground isolation.',
    fullDesc: 'Our rotoscoping artists generate hair-fine articulate mattes with temporal consistency, motion blur accuracy, and sub-frame precision for complex crowd shots, defocus elements, and background replacements.',
    benefits: [
      'Articulate hair-matte isolation and soft edge transparency',
      'Temporal consistency with zero edge chatter',
      'Stereoscopic 3D roto matching for depth separation',
      'Scalable pipeline handling thousands of frames daily'
    ],
    process: ['Shot Breakdown & Layer Splitting', 'Spline Articulation', 'Motion Blur Matching', 'Edge Check & Alpha Delivery'],
    technologies: ['Silhouette FX', 'Foundry Nuke', 'Mocha Pro'],
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'paint-cleanup',
    title: 'Digital Paint & Rig Cleanup',
    iconName: 'Brush',
    category: 'vfx',
    shortDesc: 'Invisible removal of stunt harnesses, tracking markers, microphone booms, reflections, and modern artifacts.',
    fullDesc: 'Achieve pristine plates with our digital paint unit. We clean up stunt wires, safety rigs, tracking markers, camera shadows, modern set imperfections, and unwanted branding without destroying plate texture or grain structure.',
    benefits: [
      'Flawless wire and stunt harness removal',
      'Digital skin retouching and tattoo removal',
      'Anachronism removal for period films',
      'Clean plate generation for 3D projection mapping'
    ],
    process: ['Clean Plate Painting', '3D Projection Setup', 'Grain Restoration', 'A/B Quality Control'],
    technologies: ['Nuke', 'Photoshop', 'Mocha Pro', 'Silhouette'],
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'matte-painting',
    title: 'Digital Matte Painting (DMP)',
    iconName: 'Image',
    category: 'vfx',
    shortDesc: 'Photorealistic environment extensions, epic alien landscapes, historical set augmentations, and atmospheric sky replacements.',
    fullDesc: 'Transform small set pieces into infinite horizon environments. Combining 2.5D projection mapping, photogrammetry, 3D geometry, and digital painting, our matte painters deliver breathtaking world-building.',
    benefits: [
      'Seamless 2.5D projection mapping in 3D camera space',
      'Photorealistic lighting, atmospheric perspective, and fog',
      'Flexible speed for quick turnarounds on vast vistas',
      'Historical accuracy and imaginative sci-fi concepts'
    ],
    process: ['Concept Design', 'Photo Assembly & Digital Paint', '3D Geometry Card Setup', 'Nuke Projection', 'Atmospheric FX Integration'],
    technologies: ['Photoshop', 'Nuke', 'Maya', 'Clarisse iFX', 'Unreal Engine 5'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'fx-simulation',
    title: 'FX Simulation (Fire, Water, Destruction)',
    iconName: 'Flame',
    category: 'vfx',
    shortDesc: 'Physics-based volumetric smoke, blazing explosions, ocean waves, destruction dynamics, and magical particle systems.',
    fullDesc: 'When scenes demand visceral chaos or subtle natural physics, our SideFX Houdini artists simulate photorealistic pyrotechnics, building collapses, fluid splash impacts, sandstorms, and complex energy fields.',
    benefits: [
      'Physics-compliant pyrotechnic fire & smoke volumetric simulations',
      'Large-scale destruction dynamics (RBD constraints, rigid body collisions)',
      'FLIP fluid ocean surfaces, splashing foam, and spray particles',
      'Custom procedural solvers tailored to creative needs'
    ],
    process: ['Collision Geometry Prep', 'Procedural Solver Setup', 'Caching & High-Res Simulation', 'Volume & Particle Shading', 'Compositing Integration'],
    technologies: ['SideFX Houdini', 'Axiom GPU', 'Vellum', 'Karma Render', 'Mantra'],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'green-screen-keying',
    title: 'Green Screen Keying & Spill Suppression',
    iconName: 'Maximize2',
    category: 'vfx',
    shortDesc: 'Flawless green/blue screen extraction preserving semi-transparent glass, fine hair strands, and edge reflections.',
    fullDesc: 'Keying live actors from physical blue or green screens requires extreme precision. We utilize multi-keyer workflows (Keylight, IBK, Primatte) combined with custom spill suppression tools to retain subtle hair details and motion blur transparency.',
    benefits: [
      'Multi-pass keying for optimal core, edge, and shadow separation',
      'Advanced green/blue spill despill algorithm preserving hair tone',
      'Retention of fine glass transparency and subtle smoke elements',
      'Edge color matching to target background environments'
    ],
    process: ['Luminance Balancing', 'Core & Edge Key Extraction', 'Despill Color Correction', 'Light Wrap Integration'],
    technologies: ['Keylight', 'IBK Keyer', 'Nuke', 'Primatte'],
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'video-editing',
    title: 'Offline & Online Video Editing',
    iconName: 'Film',
    category: 'post',
    shortDesc: 'Pacing-focused narrative editing, assembly cutting, trailer editorial, and multi-camera live assembly.',
    fullDesc: 'Our post-production editorial suite delivers narrative rhythm, emotional resonance, and tight shot pacing for feature films, high-concept trailers, and broadcast commercials.',
    benefits: [
      'AVID Media Composer & Premiere Pro native workflow',
      'Multi-camera syncing and proxy workflow management',
      'Temporary sound FX and temp score alignment',
      'Conforming for color grading and VFX turnover'
    ],
    process: ['Media Ingestion & Syncing', 'Assembly Cut', 'Director Rough Cut', 'Fine Cut Lock', 'VFX & Audio Turnover'],
    technologies: ['Avid Media Composer', 'Adobe Premiere Pro', 'DaVinci Resolve'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'color-grading',
    title: 'Cinematic Color Grading',
    iconName: 'Sliders',
    category: 'post',
    shortDesc: 'HDR color grading, custom LUT design, skin tone balancing, and mood creation in DaVinci Resolve.',
    fullDesc: 'Set the tone and visual mood of your film. Our senior colorists craft distinctive color palettes, manage Dolby Vision HDR workflows, and align VFX shots seamlessly with live photography plates.',
    benefits: [
      'Dolby Vision, HDR10+, and SDR mastering',
      'Custom camera show LUT creation',
      'Shot-to-shot matching and skin tone perfection',
      'Advanced optical bloom and film grain emulation'
    ],
    process: ['Look Development & Test Grading', 'Conform Verification', 'Master Grade Session', 'Pass for HDR/SDR Deliverables'],
    technologies: ['DaVinci Resolve Studio', 'Sony BVM 4K Reference Monitors', 'FilmConvert'],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  },
  {
    id: 'virtual-production',
    title: 'Unreal Engine Virtual Production',
    iconName: 'Video',
    category: 'virtual',
    shortDesc: 'In-camera visual effects (ICVFX) on LED volumes, real-time camera tracking, and pre-visualization.',
    fullDesc: 'Eliminate green screen guess-work with real-time LED volume virtual production powered by Unreal Engine 5. Filming live actors against hyper-realistic LED backdrops produces natural interactive lighting, specular reflections, and instant in-camera final shots.',
    benefits: [
      'Zero green-spill with realistic environmental light on actors',
      'Real-time scene manipulation on set during principal photography',
      'Accelerated post-production turnaround by capturing final pixels in-camera',
      'Comprehensive Pre-Vis and Post-Vis virtual cinematography'
    ],
    process: ['Digital Set Building in Unreal 5', 'LED Volume Calibration', 'Stage OptiTrack Camera Sync', 'In-Camera VFX Principal Filming'],
    technologies: ['Unreal Engine 5.5', 'Disguise vx4', 'OptiTrack / Mo-Sys', 'nDisplay'],
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: [
      { question: 'Do you operate your own LED volume stage?', answer: 'We partner with premier LED stages in Los Angeles, London, and Vancouver, providing stage operators and Unreal content creators.' }
    ]
  },
  {
    id: 'ai-assisted-vfx',
    title: 'AI Assisted Visual Effects',
    iconName: 'Cpu',
    category: 'ai',
    shortDesc: 'Neural deepfakes, automated rotoscoping acceleration, machine learning frame interpolation, and generative asset base creation.',
    fullDesc: 'We merge cutting-edge machine learning and generative neural networks with traditional artist oversight. AI accelerates tedious roto tasks, dehazing, depth map estimation, and de-aging without ever compromising creative fidelity.',
    benefits: [
      'Up to 60% faster turnaround on complex cleanup and roto tasks',
      'Neural de-aging and facial reenactment with sub-pore detail',
      'AI-driven depth map generation for rapid atmosphere integration',
      'Custom trained models ensuring 100% intellectual property security'
    ],
    process: ['Dataset Curation & Model Training', 'Neural Inference Pass', 'Artist Quality Control & Nuke Touch-Up', 'Final Delivery'],
    technologies: ['PyTorch', 'Custom DeepFaceLab Rigs', 'Nuke Machine Learning Suite', 'ComfyUI ControlNet'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    faqs: []
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'chronos-beyond-time',
    title: 'Chronos: Beyond Time',
    client: 'Paramount Pictures',
    category: 'Feature Film',
    year: '2025',
    description: 'A sci-fi blockbuster featuring over 420 visual effects shots, futuristic cyber-cities, volumetric portal FX, and photorealistic digital double actors.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1200&q=80', // Green screen studio plate
    afterImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', // Completed VFX composite
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    breakdownNotes: 'Created 2.5D matte paintings, procedural smoke and energy destruction in Houdini, and deep compositing in Nuke with full ACEScg pipeline compliance.',
    softwareUsed: ['Foundry Nuke', 'SideFX Houdini', 'Maya', '3DEqualizer', 'Substance Painter'],
    director: 'Elena Vance',
    awards: ['VES Award Winner 2025', 'Saturn Award Nominee'],
    featured: true
  },
  {
    id: 'aetheria-creature-fury',
    title: 'Aetheria: Creature Fury',
    client: 'Warner Bros. Discovery',
    category: 'CGI & Creatures',
    year: '2024',
    description: 'Full-CG creature performance of a 40-foot mythical leviathan interacting with stormy sea waves and practical ships.',
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    breakdownNotes: 'FLIP fluid ocean simulation in Houdini combined with muscle deformation rigs and sub-surface scattering skin shaders in Arnold.',
    softwareUsed: ['Maya', 'ZBrush', 'Houdini FLIP', 'Arnold', 'Nuke Studio'],
    director: 'Marcus Thorne',
    awards: ['BAFTA Special Effects Winner'],
    featured: true
  },
  {
    id: 'cyber-hypercar-2030',
    title: 'Cyber-Hypercar Campaign',
    client: 'Porsche / Apex Media',
    category: 'Commercial',
    year: '2024',
    description: 'Full-CG commercial featuring a sleek electric hypercar racing through neon-lit futuristic rain-slicked metropolis streets.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    breakdownNotes: 'Ray-traced automotive renders with procedural rain drop splash simulation and optical lens flares.',
    softwareUsed: ['Unreal Engine 5', 'Cinema 4D', 'Redshift', 'After Effects'],
    director: 'Soren Lindqvist',
    awards: ['Cannes Lions Grand Prix 2024'],
    featured: true
  },
  {
    id: 'nebula-protocol',
    title: 'The Nebula Protocol',
    client: 'Netflix Originals',
    category: 'Episodic TV',
    year: '2024',
    description: '180 visual effects shots across 8 episodes, including alien planetary environments, zero-G space walks, and hologram interfaces.',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    breakdownNotes: 'Virtual production LED volume filming combined with post-production digital space enhancements.',
    softwareUsed: ['Unreal Engine 5', 'Disguise vx4', 'Nuke', 'Maya'],
    director: 'Sarah Lin',
    awards: ['Emmy Nomination for Outstanding VFX'],
    featured: true
  },
  {
    id: 'starlight-odyssey',
    title: 'Starlight Odyssey: Live ICVFX',
    client: 'Apple TV+',
    category: 'Virtual Production',
    year: '2023',
    description: 'Revolutionary in-camera visual effects (ICVFX) shot on a 270-degree LED volume stage with real-time camera tracking.',
    coverImage: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    breakdownNotes: 'Captured 85% final pixels directly in camera during principal photography, saving 6 weeks of post-production timeline.',
    softwareUsed: ['Unreal Engine 5.3', 'OptiTrack', 'Disguise', 'Colorfront'],
    director: 'David K. Ross',
    awards: ['VES Technical Achievement Award'],
    featured: false
  },
  {
    id: 'valkyrie-rising',
    title: 'Valkyrie Rising: Game Cinematic',
    client: 'Ubisoft Studios',
    category: 'CGI & Creatures',
    year: '2023',
    description: '4-minute hyper-detailed 4K cinematic launch trailer for an AAA fantasy title.',
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    breakdownNotes: 'Orchestrated cloth dynamics and particle magic simulations rendered using V-Ray GPU clusters.',
    softwareUsed: ['Maya', 'ZBrush', 'Marvelous Designer', 'V-Ray', 'Nuke'],
    director: 'Antoine Dubois',
    featured: false
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'case-chronos',
    title: 'Chronos: Cyberpunk Metropolis CGI',
    subtitle: 'Building a photorealistic 3D dystopian city across 420 complex shots for Paramount Pictures.',
    client: 'Paramount Pictures',
    category: 'Feature Film VFX',
    problem: 'The director needed a vast, densely populated 2150 AD mega-city with thousands of flying vehicles, rain reflections, neon holographic ads, and actor interaction, all under a tight 16-week delivery window.',
    solution: 'Right Time FX Studio engineered a modular procedural building set in SideFX Houdini connected directly to an Unreal Engine 5 environment layout tool. Artists used deep compositing in Nuke to combine live green screen footage with photorealistic Arnold renders.',
    productionProcess: [
      'Concept art and urban architectural zoning map',
      'Procedural building generator in Houdini with UDIM texture libraries',
      'Lidar scan alignment of live-action set plates in 3DEqualizer',
      'Volumetric rain, fog, and vehicle light trails simulation',
      'ACEScg color pipeline compositing in Nuke Studio'
    ],
    results: [
      'Delivered 420 high-complexity shots 2 weeks ahead of theatrical release',
      'Achieved 100% photo-matching accuracy under IMAX projection standards',
      'Won the 2025 Visual Effects Society (VES) Award for Outstanding VFX'
    ],
    softwareUsed: ['Foundry Nuke', 'SideFX Houdini', 'Maya', '3DEqualizer', 'Substance Painter', 'Arnold Render'],
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
    ],
    clientReview: {
      quote: 'Right Time FX Studio delivered visual magic that surpassed our wild creative dreams. Their pipeline, attention to lighting detail, and absolute professionalism make them our go-to studio.',
      author: 'Elena Vance',
      role: 'Film Director',
      company: 'Paramount Pictures'
    }
  },
  {
    id: 'case-nebula',
    title: 'The Nebula Protocol: LED Volume Virtual Production',
    subtitle: 'Streamlining sci-fi episodic production using Unreal Engine 5 in-camera visual effects.',
    client: 'Netflix Originals',
    category: 'Virtual Production & TV',
    problem: 'Shooting 8 episodes set across 6 alien planets would have required cost-prohibitive travel and months of green screen replacement during post-production.',
    solution: 'Right Time FX Studio established a 270-degree LED volume stage with live Unreal Engine 5 environments. Camera tracking fed real-time frustum rendering, capturing 85% of final visual effects in-camera with natural ambient lighting.',
    productionProcess: [
      '3D alien world creation in Unreal 5 utilizing Nanite & Lumen',
      'Color calibration between LED display panels and camera sensors',
      'Real-time camera tracking setup with Mo-Sys and Disguise media servers',
      'On-set live environment manipulation during actor performance',
      'Targeted post-production cleanup for remaining 15% complex shots'
    ],
    results: [
      'Saved an estimated $4.2M in travel and post-production green-screen costs',
      'Reduced post-production turnaround time by 65%',
      'Nominated for an Emmy Award for Outstanding Special Visual Effects'
    ],
    softwareUsed: ['Unreal Engine 5.3', 'Disguise vx4', 'Mo-Sys StarTracker', 'Foundry Nuke'],
    heroImage: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
    ],
    clientReview: {
      quote: 'Seeing our alien landscapes rendered live behind our actors on set was breathtaking. Right Time FX Studio made virtual production seamless and effortless.',
      author: 'Sarah Lin',
      role: 'Executive Producer',
      company: 'Netflix Originals'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Soumadip Dinda (Vijay Souma)',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in VFX production and studio management.',
    image: founderImg,
    credits: ['Feature Film VFX', 'Episodic TV', 'Commercial Campaigns'],
    awards: ['VFX Studio Innovator 2024'],
    socials: { linkedin: 'https://linkedin.com', email: 'mailto:www.righttimefxstudio@gmail.com' }
  },
  {
    id: 'team-2',
    name: 'Mallika Bera',
    role: 'HR DIRECTOR',
    bio: 'Driving a people-first culture and building a creative, inclusive workplace.',
    image: hrImg,
    credits: ['Talent Acquisition', 'Culture & Operations'],
    awards: ['HR Excellence in Creative Media'],
    socials: { linkedin: 'https://linkedin.com', email: 'mailto:www.righttimefxstudio@gmail.com' }
  },
  {
    id: 'team-3',
    name: 'Purnima Mondal',
    role: 'Team Lead',
    bio: 'Leading project teams to deliver exceptional visuals with precision and on-time delivery.',
    image: teamLeaderImg,
    credits: ['Complex Compositing', 'Asset Pipelines'],
    awards: ['Outstanding Team Leadership 2023'],
    socials: { linkedin: 'https://linkedin.com', email: 'mailto:www.righttimefxstudio@gmail.com' }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Future of AI-Assisted Rotoscoping in Feature Film Pipelines',
    slug: 'ai-assisted-rotoscoping-feature-films',
    category: 'AI in VFX',
    excerpt: 'How custom machine learning models are slashing tedious matte isolation time by 60% without losing fine hair detail or creative control.',
    content: `Rotoscoping has long been recognized as one of the most labor-intensive phases of visual effects production. Extracting hair-fine mattes frame-by-frame across thousands of shots requires incredible patience and consistency.

At Right Time FX Studio, our R&D unit led by Dr. Evelyn Chen developed custom neural network inference models integrated directly inside Foundry Nuke. By training models on high-resolution ACEScg plates, we predict initial spline masks and depth boundary maps automatically.

Key Takeaways:
1. Neural inference accelerates initial matte passes by 60-70%.
2. Human roto artists retain complete control, refining complex edge blur and temporal chatter.
3. Turnaround speed enables directors to request last-minute plate updates without breaking post schedules.`,
    author: {
      name: 'Dr. Evelyn Chen',
      role: 'Head of Pipeline & AI Research',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'July 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'blog-2',
    title: 'Unreal Engine 5.5 in LED Volume Virtual Production',
    slug: 'unreal-engine-5-virtual-production-guide',
    category: 'Virtual Production',
    excerpt: 'A deep dive into Nanite geometry streaming and real-time Lumen lighting calibration for live on-set shooting.',
    content: `Virtual Production with LED volumes has fundamentally altered how directors frame sci-fi and fantasy worlds. By bringing final pixels in-camera during principal photography, actors react to real light rather than imagination on a green screen canvas.

In this technical breakdown, we explore:
- Calibrating color response between LED panel brightness and ARRI Alexa / RED cinema sensors.
- Multi-node frustum rendering using Disguise vx4 media servers.
- Eliminating moiré patterns through precise lens focal length and LED pitch alignment.`,
    author: {
      name: 'Julian Vance',
      role: 'Chief Creative Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'June 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'blog-3',
    title: 'Mastering Volumetric Destruction in SideFX Houdini',
    slug: 'volumetric-destruction-sidefx-houdini',
    category: 'Pipeline & Tech',
    excerpt: 'Combining rigid body dynamics with Axiom GPU pyro solvers for ultra-realistic skyscraper destruction.',
    content: `Creating believable large-scale destruction requires balancing physics constraint networks with atmospheric volumetric dust clouds. 

Our Houdini FX team details how we handled 4,000 fracturing concrete slabs, dynamic re-bar tearing, and secondary dust clouds for the climax of Chronos: Beyond Time.`,
    author: {
      name: 'Aria Thorne',
      role: 'Creature & FX Supervisor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    date: 'May 19, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General Questions',
    question: 'Where are Right Time FX Studio hubs located?',
    answer: 'Right Time FX Studio operates major creative studio hubs in India with partner portals in Los Angeles and London, providing 24/7 continuous global production workflow.'
  },
  {
    id: 'faq-2',
    category: 'General Questions',
    question: 'Do you work on both feature films and commercials?',
    answer: 'Yes! We regularly deliver work across high-concept feature films, episodic streaming series, game cinematic trailers, and luxury brand commercials.'
  },
  {
    id: 'faq-3',
    category: 'Pricing',
    question: 'How do you structure VFX pricing and estimates?',
    answer: 'We provide shot-by-shot bids based on script breakdowns, concept complexity, resolution (4K/IMAX), and asset fidelity. You can use our interactive "Get a Quote" tool for an instant estimate breakdown.'
  },
  {
    id: 'faq-4',
    category: 'Pricing',
    question: 'Are revisions included in the production quote?',
    answer: 'Our standard production contracts include 2 creative review iterations at key milestones (Block-in, Temp Composite, Final Pass). Additional creative changes outside original scope are billed according to agreed day rates.'
  },
  {
    id: 'faq-5',
    category: 'Services',
    question: 'Can Right Time FX Studio handle on-set VFX supervision?',
    answer: 'Absolutely. Our senior VFX Supervisors provide full on-set supervision, camera data logging, photogrammetry capture, lidar scanning, and HDR light probe capture during principal photography.'
  },
  {
    id: 'faq-6',
    category: 'Delivery',
    question: 'What delivery formats and color spaces do you support?',
    answer: 'We deliver 16-bit OpenEXR sequences in ACEScg / OCIO color space, Apple ProRes 4444 XQ, and uncompressed DPX formats formatted for Dolby Vision HDR and IMAX theatrical standards.'
  },
  {
    id: 'faq-7',
    category: 'Delivery',
    question: 'How do you secure client media and footage?',
    answer: 'We adhere strictly to TPN (Trusted Partner Network) security standards. All media is encrypted on air-gapped SAN storage with strict multi-factor access control.'
  },
  {
    id: 'faq-8',
    category: 'Support',
    question: 'How do production teams communicate with supervisors during active projects?',
    answer: 'Each project is assigned a dedicated VFX Producer and Supervisor. We run daily review sessions via RV, Frame.io, or SyncSketch with live annotation capabilities.'
  }
];

export const LOCATIONS_DATA: StudioLocation[] = [
  {
    id: 'loc-india',
    city: 'Moyna & Purba Medinipur Main Studio',
    country: 'India',
    address: 'Mondal Building 4th Floor, Dakbanglow-Moyna Rd, Sudampur, Balaipanda Bazar, Moyna, Purba Medinipur, West Bengal, 721644, India',
    phone: '+91 8509587525',
    email: 'www.righttimefxstudio@gmail.com',
    hours: '24/7 Production & Client Operations',
    isHeadquarters: true,
    mapCoordinates: { lat: 22.2570, lng: 87.7788 },
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Paramount', logoText: 'PARAMOUNT' },
  { name: 'Warner Bros', logoText: 'WARNER BROS.' },
  { name: 'Netflix', logoText: 'NETFLIX' },
  { name: 'Marvel Studios', logoText: 'MARVEL' },
  { name: 'Apple TV+', logoText: 'APPLE TV+' },
  { name: 'HBO Max', logoText: 'HBO' },
  { name: 'Ubisoft', logoText: 'UBISOFT' },
  { name: 'Porsche', logoText: 'PORSCHE' }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'Right Time FX Studio delivered visual magic that surpassed our wildest creative dreams. Their pipeline and attention to lighting detail are unrivaled.',
    author: 'Elena Vance',
    role: 'Director',
    company: 'Paramount Pictures',
    project: 'Chronos: Beyond Time'
  },
  {
    id: 't-2',
    quote: 'The creature animation team brought our mythical beasts to life with incredible weight, emotion, and realism. Outstanding partners.',
    author: 'Marcus Thorne',
    role: 'Executive Producer',
    company: 'Warner Bros',
    project: 'Aetheria'
  },
  {
    id: 't-3',
    quote: 'Their Unreal Engine virtual production team set up our LED volume stage seamlessly. They captured 85% final pixels on set!',
    author: 'Sarah Lin',
    role: 'Showrunner',
    company: 'Netflix Originals',
    project: 'The Nebula Protocol'
  }
];
