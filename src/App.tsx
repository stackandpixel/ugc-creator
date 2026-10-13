import React, { useState, useId, useMemo, useEffect } from 'react';
import {
  MessageCircle,
  Instagram,
  Mail,
  Play,
  Pause,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Eye,
  Award,
  Video,
  Package,
  Camera,
  FileText,
  X,
  Send,
  Star,
  MapPin,
  Menu,
  Heart,
  Bookmark,
  Share2,
  Copy,
  Check,
  Music2,
  ThumbsUp,
  Flame,
  Zap,
  ShoppingBag,
  Sparkle
} from 'lucide-react';

/* ==========================================================================
   CREATOR CONFIGURATION - EDIT THIS TO PERSONALIZE YOUR PORTFOLIO
   (Inspired by modern creative platforms like Dimple Doodles)
   ========================================================================== */
export const CREATOR_CONFIG = {
  // Basic Info
  name: "Ananya Deshmukh",
  handle: "@ananya.creates",
  title: "UGC Creator & Creative Video Strategist",
  tagline: "Real people. Real reviews. Reels that convert.",
  niche: "Beauty, skincare, lifestyle, food & fashion UGC",
  city: "Mumbai, India",
  experienceYears: "3+ Years",
  
  // Social & Contact
  instagram: {
    handle: "@ananya.creates",
    url: "https://instagram.com/ananya.creates",
    followersCount: "85K"
  },
  whatsapp: {
    displayNumber: "+91 98XXXXXXXX",
    phoneDigits: "919800000000", // Replace with your phone digits (e.g. 919820123456)
    defaultMessage: "Hi Ananya, I found your portfolio and would like to discuss a UGC collaboration for our brand."
  },
  email: "hello@ananyacreates.in",

  // Stats Strip
  stats: [
    { value: "85K", label: "Instagram Followers", sublabel: "Organic & engaged community", sticker: "🔥 Active" },
    { value: "120+", label: "Videos Delivered", sublabel: "Across 40+ brand campaigns", sticker: "🎥 100% On Time" },
    { value: "40+", label: "Brands Partnered", sublabel: "D2C, Beauty, FMCG & Fashion", sticker: "🤝 Verified" },
    { value: "4.8%", label: "Avg. Engagement", sublabel: "3.2x higher than industry avg", sticker: "⚡ High Hook" },
  ],

  // Bio & Tags
  aboutBio: "Hey there! I'm Ananya, a Mumbai-based UGC creator obsessed with making content that feels like a trusted recommendation from your closest friend. I bridge authentic Indian consumer relatability with performance marketing psychology: thumb-stopping 3-second hooks, raw texture close-ups, and genuine problem-solving narratives that turn passive scrollers into passionate buyers.",
  aboutTags: [
    "Hindi + English Fluent",
    "Beginner-Friendly Brand Briefs",
    "Fast 48–72h Turnaround",
    "Full Scripting & Editing Included",
    "Real Skin & Honest Textures"
  ],

  // Services Offered (6 Cards)
  services: [
    {
      id: "product-reviews",
      title: "Product Review Videos",
      desc: "Honest, conversion-driven breakdowns highlighting primary customer pain points and real benefits.",
      icon: Video,
      tag: "High Conversion",
      sticker: "⭐ Top Seller",
      deliverable: "1-2 Hook Variations · Crisp Audio"
    },
    {
      id: "unboxing",
      title: "Aesthetic Unboxing",
      desc: "Sensory, ASMR-style reveals capturing first impressions, premium packaging textures, and unboxing excitement.",
      icon: Package,
      tag: "Sensory & ASMR",
      sticker: "✨ Satisfying",
      deliverable: "Macro Packaging Shots · Clean B-roll"
    },
    {
      id: "grwm",
      title: "GRWM (Get Ready With Me)",
      desc: "Seamless lifestyle integration showing how your product naturally fits into an everyday Indian routine.",
      icon: Sparkles,
      tag: "High Retention",
      sticker: "💄 Lifestyle",
      deliverable: "Lifestyle Context · Natural Flow"
    },
    {
      id: "testimonial",
      title: "Testimonial-Style UGC",
      desc: "Problem-solution narratives that build immediate trust for paid Meta, Instagram, and TikTok ad sets.",
      icon: ShieldCheck,
      tag: "Performance Ads",
      sticker: "🎯 High ROAS",
      deliverable: "Pain-to-Pleasure Arc · Strong CTA"
    },
    {
      id: "photography",
      title: "Product Photography",
      desc: "High-resolution, naturally lit creator lifestyle stills for your website, PDPs, and ad creatives.",
      icon: Camera,
      tag: "PDP & Catalog",
      sticker: "📸 4K Stills",
      deliverable: "4K High-Res Stills · Color Graded"
    },
    {
      id: "brand-reels",
      title: "Reels for Brand Pages",
      desc: "Trend-aligned, high-energy short clips ready for your brand's organic Instagram and YouTube Shorts.",
      icon: FileText,
      tag: "Organic Growth",
      sticker: "🚀 Viral Pacing",
      deliverable: "Trending Audio · Fast Transitions"
    }
  ],

  // Featured Work (Thumbnails in 9:16 vertical format)
  featuredWork: [
    {
      id: "work-1",
      brand: "Nykara Botanics",
      category: "Skincare",
      title: "HydraDew Barrier Serum 7-Day Texture Trial",
      hook: "“Stop buying expensive serums until you know how to use this...”",
      views: "1.2M",
      saves: "18.4K",
      likes: "42.8K",
      duration: "0:34",
      aspectRatio: "9:16",
      accentColor: "#F59E0B",
      bgGradient: "from-[#FDF2E9] via-[#FADBD8] to-[#EDBB99]",
      description: "Tested product daily for 7 days focusing on barrier repair. Shot under natural morning vanity light to emphasize real glass skin texture without artificial smoothing.",
      keyMetrics: ["1.2M Organic Views", "18% Save Rate", "4.2x ROAS on Whitelisted Meta Ads"],
      audioTitle: "Original Audio - ananya.creates",
      doodleRating: "5/5 Glow & Hydration"
    },
    {
      id: "work-2",
      brand: "DesiBrew Artisanal",
      category: "Food & Beverage",
      title: "Morning Cold Brew Monsoon Ritual",
      hook: "“Here is why I haven’t stepped into an overpriced coffee chain this month.”",
      views: "680K",
      saves: "9.2K",
      likes: "31.4K",
      duration: "0:28",
      aspectRatio: "9:16",
      accentColor: "#92400E",
      bgGradient: "from-[#F5EEF8] via-[#E8DAEF] to-[#D7BDE2]",
      description: "Sensory ASMR morning brew routine. Crisp ice cracking sounds, smooth milk swirls, and honest tasting notes tailored to Indian coffee lovers.",
      keyMetrics: ["680K Reach", "24% Comment Surge", "Batch Sold Out in 48 Hours"],
      audioTitle: "Morning Brews (Aesthetic ASMR)",
      doodleRating: "10/10 Cozy Morning Vibes"
    },
    {
      id: "work-3",
      brand: "GlowLeaf Organics",
      category: "Haircare",
      title: "Root Revival Scalp Oil Honest Review",
      hook: "“I massaged this traditional scalp oil for 3 weeks. Here are the unedited roots.”",
      views: "940K",
      saves: "14.1K",
      likes: "38.9K",
      duration: "0:42",
      aspectRatio: "9:16",
      accentColor: "#059669",
      bgGradient: "from-[#E8F8F5] via-[#D1F2EB] to-[#A3E4D7]",
      description: "Close-up macro lens demonstration of oil viscosity, scalp massage technique, and post-wash shine comparison.",
      keyMetrics: ["940K Views", "22% Bio Link CTR", "+38% Repeat Cart Value"],
      audioTitle: "Clean Ayurvedic Rituals",
      doodleRating: "Zero Greasiness Verified"
    },
    {
      id: "work-4",
      brand: "Vedika Beauty",
      category: "Makeup",
      title: "5-Minute Monsoon Proof Tint Application",
      hook: "“Humidity test in Mumbai traffic: does this skin tint actually hold up?”",
      views: "810K",
      saves: "11.7K",
      likes: "29.1K",
      duration: "0:36",
      aspectRatio: "9:16",
      accentColor: "#DB2777",
      bgGradient: "from-[#FDEDEC] via-[#FADBD8] to-[#F5B7B1]",
      description: "Real-time wear test through Mumbai weather. Zero filter, showcasing real undertones and crease resistance.",
      keyMetrics: ["810K Views", "16% Share Rate", "Top Performing Creative of Q2"],
      audioTitle: "Monsoon Glow Guide",
      doodleRating: "Tested on 90% Humidity"
    },
    {
      id: "work-5",
      brand: "Bombay Blend",
      category: "Fashion",
      title: "Festive Linen Kurti 3-Way Styling GRWM",
      hook: "“One timeless ivory kurti, styled for office, festive brunch, and evening dinner.”",
      views: "1.4M",
      saves: "26.3K",
      likes: "58.2K",
      duration: "0:45",
      aspectRatio: "9:16",
      accentColor: "#D97706",
      bgGradient: "from-[#FEF9E7] via-[#FCF3CF] to-[#F9E79F]",
      description: "High-tempo transitions with accessorizing tips, showing versatility and fabric drape in warm afternoon sunlight.",
      keyMetrics: ["1.4M Viral Views", "26K Bookmark Saves", "3.8K Direct Website Clicks"],
      audioTitle: "Festive Pret Edit",
      doodleRating: "Viral Wardrobe Staple"
    },
    {
      id: "work-6",
      brand: "UrbanMirch",
      category: "Food & Beverage",
      title: "Millet Crunch Box Unboxing & Taste Test",
      hook: "“Satisfying the 4 PM work craving without the guilt—listen to this crunch!”",
      views: "520K",
      saves: "6.8K",
      likes: "22.5K",
      duration: "0:25",
      aspectRatio: "9:16",
      accentColor: "#EA580C",
      bgGradient: "from-[#FBEEE6] via-[#F6DDCC] to-[#EDBB99]",
      description: "Snappy unboxing with crisp audio capturing taste, spice levels, and nutritional callouts in friendly conversational Hindi.",
      keyMetrics: ["520K Plays", "31% Conversion Uplift", "5.1% Ad Click-Through Rate"],
      audioTitle: "Snack Talk India",
      doodleRating: "100% Authentic ASMR Crunch"
    }
  ],

  // Brands Marquee
  brands: [
    { name: "GlowLeaf", style: "font-serif tracking-wider font-semibold" },
    { name: "Nykara", style: "font-sans uppercase tracking-[0.25em] font-light" },
    { name: "DesiBrew", style: "font-serif italic font-bold tracking-tight" },
    { name: "Vedika Botanicals", style: "font-sans uppercase text-xs tracking-[0.2em] font-semibold" },
    { name: "Bombay Blend", style: "font-serif tracking-normal font-semibold" },
    { name: "UrbanMirch", style: "font-sans tracking-tight font-extrabold" },
    { name: "AyurPure", style: "font-serif tracking-widest text-sm" },
    { name: "SilkKala", style: "font-sans tracking-[0.18em] font-medium" },
    { name: "ChaiCulture", style: "font-serif italic tracking-wide" },
    { name: "Tattva Organics", style: "font-sans uppercase tracking-widest text-xs" }
  ],

  // Collaborations / Case Studies
  collaborations: [
    {
      brand: "Nykara Botanics",
      category: "D2C Skincare",
      campaign: "HydraDew Barrier Serum Launch",
      delivered: "3 Reels (9:16) + 5 Story frames with Swipe-ups",
      challenge: "High ad fatigue with generic studio product renders; needed real Indian skin texture and credible problem-solution narrative.",
      results: "1.2M+ organic views · 18% save rate · 4.2x ROAS on Meta ads",
      quote: "Our customer acquisition cost plummeted by 34% within 10 days of using Ananya’s UGC assets."
    },
    {
      brand: "DesiBrew Artisanal",
      category: "FMCG Coffee",
      campaign: "Morning Monsoon Cold Brew Ritual",
      delivered: "2 High-Aesthetic Reels + 1 Unboxing Haul",
      challenge: "Educate everyday coffee drinkers on cold brew brew-bags while keeping the aesthetic aspirational yet approachable.",
      results: "680K views · 24% comment surge · Initial stock batch sold out in 48h",
      quote: "She captured the exact mood and aroma of our brews through the screen. Unbelievable authenticity."
    },
    {
      brand: "GlowLeaf Organics",
      category: "Ayurvedic Haircare",
      campaign: "Root Revival Scalp Oil Honest Review",
      delivered: "4 Performance Reels + 6 Hook Variations",
      challenge: "Overcome consumer skepticism around herbal oils with transparent, non-exaggerated real-life demonstrations.",
      results: "940K views · 22% CTR on brand link · +41% cart conversion",
      quote: "Ananya understands UGC hooks better than full-scale production agencies. Our best creator ROI to date."
    },
    {
      brand: "Bombay Blend",
      category: "Festive Pret",
      campaign: "Festive Linen Kurti 3-Way Styling GRWM",
      delivered: "2 High-Energy GRWM Reels + Stills",
      challenge: "Showcase styling versatility of a single wardrobe piece for modern working women across day and evening looks.",
      results: "1.4M views · 26K saves · 3,800+ website visits in 72 hours",
      quote: "The save-to-view ratio was through the roof. It drove organic sales for weeks after posting."
    }
  ],

  // Achievements
  achievements: [
    {
      title: "Top 10 Beauty UGC Creator",
      location: "Mumbai 2025",
      description: "Recognized among Mumbai's top performing creator partners for high-converting D2C campaigns."
    },
    {
      title: "1M+ Views in a Single Reel",
      location: "Organic Reach Milestone",
      description: "Consistently engineering 3-second visual hooks that beat the Instagram algorithm organically."
    },
    {
      title: "Featured by Official Brand Pages",
      location: "Whitelisted Ad Feature",
      description: "Multiple UGC assets whitelisted and pinned on leading Indian beauty and wellness brand feeds."
    },
    {
      title: "120+ Paid Collaborations",
      location: "100% On-Time Delivery",
      description: "Trusted repeat partner for top Indian consumer brands with zero delayed deadlines."
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: "Ananya delivered ahead of schedule and the hook retention was unreal. The reel felt so natural that our customer acquisition cost dropped by 34% within the first week of whitelisting.",
      author: "Riya Mehta",
      role: "Growth Lead",
      brand: "GlowLeaf Organics"
    },
    {
      quote: "Her storytelling is exceptional. She didn't just read talking points—she conveyed the taste, morning mood, and authenticity of our brews so effortlessly. She is our go-to creator.",
      author: "Kabir Sharma",
      role: "Co-Founder",
      brand: "DesiBrew Artisanal"
    },
    {
      quote: "Her hook rate was over 48% on paid ads. She understands consumer psychology and knows how to frame a product benefit within the first two seconds.",
      author: "Tanvi Kulkarni",
      role: "Head of Marketing",
      brand: "Nykara Botanics"
    }
  ],

  // Packages WITHOUT FIXED AMOUNTS (Flexible, Scope-Based)
  packages: [
    {
      id: "starter",
      name: "Starter / Pilot UGC",
      tierTag: "Ideal for Testing",
      turnaround: "3–4 Days",
      popular: false,
      desc: "Perfect for testing creator UGC in your ad account or introducing a hero product with minimal risk.",
      pricingNote: "Custom quote tailored to script concept & usage duration",
      features: [
        "1 Dedicated 9:16 Reel (up to 45s)",
        "1 Hook variation to A/B test viewer retention",
        "Full concept script & natural voiceover",
        "1 round of minor edits & text revision",
        "30-day organic digital brand usage rights",
        "Delivered in crisp 4K 60fps mobile format"
      ]
    },
    {
      id: "standard",
      name: "Growth Campaign",
      tierTag: "Most Popular for Brands",
      turnaround: "4–5 Days",
      popular: true,
      desc: "Our top-recommended package for active performance ad sets, multi-angle testing, and whitelisting.",
      pricingNote: "Custom quote based on video count & paid ad duration",
      features: [
        "3 Dedicated 9:16 Reels (different angles & pain-points)",
        "2 Hook variations per video (6 total hooks for ad testing)",
        "Raw footage B-roll pack included for your editor",
        "2 rounds of revisions & text tweaks",
        "60-day paid ads & digital usage rights",
        "Captions, sound design & high-conversion editing"
      ]
    },
    {
      id: "premium",
      name: "Campaign Scale & Retainer",
      tierTag: "High-Spend Campaigns",
      turnaround: "Priority 48–72h",
      popular: false,
      desc: "Comprehensive creative suite for major product launches, category blitzes, or ongoing monthly content.",
      pricingNote: "Custom quote based on monthly volume & whitelisting rights",
      features: [
        "5+ High-Conversion 9:16 Reels",
        "8 Instagram Story frames with interactive stickers",
        "3 Hook variations + 2 CTA endings per reel",
        "Full raw B-roll library & unedited talking heads",
        "90-day paid ads + creator whitelisting rights",
        "Dedicated rush edit priority & dedicated support"
      ]
    }
  ],

  // 4-Step Working Process
  process: [
    {
      step: "01",
      title: "Brief & Creative Angle",
      desc: "Share your product goals and target audience. I propose 2–3 high-converting creative hooks and angles tailored to your niche."
    },
    {
      step: "02",
      title: "Script & Talking Points",
      desc: "Within 48 hours, I send a concise script outline covering the hook, pain point, product solution, and clear call-to-action for your review."
    },
    {
      step: "03",
      title: "Shoot & Production",
      desc: "Once product arrives in Mumbai and script is approved, I shoot with natural lighting, 4K clarity, professional audio, and authentic B-roll."
    },
    {
      step: "04",
      title: "Delivery & Fine-Tuning",
      desc: "Receive ready-to-publish assets via Google Drive. We fine-tune any text overlays or pacing so you can start running ads or posting immediately."
    }
  ],

  // FAQ Items
  faqs: [
    {
      question: "How do you determine your rates for a UGC project?",
      answer: "Rates are tailored depending on project scope: the number of videos, hook variations needed, raw B-roll requests, and whether you require organic posting rights, paid ad usage (30/60/90 days), or creator whitelisting. Chat with me on WhatsApp for a transparent rate card tailored to your exact brief."
    },
    {
      question: "What is your typical turnaround time?",
      answer: "Turnaround is usually 4 to 6 business days from the moment your product arrives at my Mumbai studio. If you have an urgent campaign deadline, 48-hour expedited delivery is available upon request."
    },
    {
      question: "What usage rights and ad whitelisting do you provide?",
      answer: "Packages can include 30 to 90 days of digital organic or paid ad usage rights. Extended 6-month, 1-year, or whitelisting access (running dark ads directly from my handle) can be customized based on your media spend."
    },
    {
      question: "How do revisions work if we need changes?",
      answer: "Every collaboration includes dedicated revision rounds for pacing, on-screen caption copy, background music, or cutting. Minor tweaks are completely free. (Note: reshooting footage that deviates from the mutually approved script may carry a nominal reshoot fee)."
    },
    {
      question: "What are your payment terms?",
      answer: "A 50% advance is standard upon script approval before shooting commences, with the remaining 50% due upon final approval of the watermark-free assets. GST invoices and formal agreements are provided."
    },
    {
      question: "How do we handle product shipping to Mumbai?",
      answer: "Products are shipped directly to my studio in Mumbai. For non-perishable goods, I can return them if a reverse courier pickup is arranged, or retain them for potential ongoing retainer content."
    }
  ]
};

// Helper function to build WhatsApp URL
export const getWhatsAppLink = (customText?: string) => {
  const digits = CREATOR_CONFIG.whatsapp.phoneDigits;
  const message = encodeURIComponent(customText || CREATOR_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${digits}?text=${message}`;
};

export default function App() {
  // Navigation & Mobile Drawer State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Work Filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Lightbox / Video Modal State
  const [selectedVideo, setSelectedVideo] = useState<typeof CREATOR_CONFIG.featuredWork[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(42800);
  const [modalTab, setModalTab] = useState<'overview' | 'metrics' | 'story'>('overview');
  const [heartsAnimation, setHeartsAnimation] = useState<number[]>([]);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Copy Feedback State
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Interactive Scope Planner State
  const [scopeVideos, setScopeVideos] = useState<number>(3);
  const [scopeUsage, setScopeUsage] = useState<string>('Paid Ads (60 Days)');
  const [scopeIncludeBroll, setScopeIncludeBroll] = useState<boolean>(true);
  const [scopeIncludeWhitelisting, setScopeIncludeWhitelisting] = useState<boolean>(false);

  // Interactive Form State
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    scopeType: 'Growth Campaign (3–5 Reels)',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameInputId = useId();
  const brandInputId = useId();
  const scopeSelectId = useId();
  const messageInputId = useId();

  // Floating Heart Particle Trigger
  const triggerHeartBurst = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    const newId = Date.now();
    setHeartsAnimation(prev => [...prev, newId]);
    setTimeout(() => {
      setHeartsAnimation(prev => prev.filter(id => id !== newId));
    }, 1200);
  };

  // Categories
  const categories = useMemo(() => {
    return ['All', 'Skincare', 'Haircare', 'Makeup', 'Food & Beverage', 'Fashion'];
  }, []);

  const filteredWork = useMemo(() => {
    if (selectedCategory === 'All') return CREATOR_CONFIG.featuredWork;
    return CREATOR_CONFIG.featuredWork.filter(w => w.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
        setIsPlaying(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle Form WhatsApp Generation
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enquiryMessage = `Hi Ananya, I'm ${formData.name || 'there'} from ${formData.brand || 'our brand'}. We are looking to collaborate on UGC!\n\nCampaign Scope: ${formData.scopeType}\nBrief/Details: ${formData.message || 'Looking forward to receiving your custom rate card and discussing deliverables.'}`;
    const url = getWhatsAppLink(enquiryMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  // Handle Estimator WhatsApp Generation
  const handleEstimatorSubmit = () => {
    const text = `Hi Ananya, I used your portfolio scope planner for my brand:\n- Deliverables: ${scopeVideos} Reel${scopeVideos > 1 ? 's' : ''}\n- Usage Rights: ${scopeUsage}\n- Raw B-Roll Footage: ${scopeIncludeBroll ? 'Yes' : 'No'}\n- Creator Whitelisting: ${scopeIncludeWhitelisting ? 'Yes' : 'No'}\n\nCould you share an estimated quote and your availability?`;
    window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Brands", href: "#brands" },
    { name: "Collaborations", href: "#collaborations" },
    { name: "Achievements", href: "#achievements" },
    { name: "Packages", href: "#packages" },
    { name: "Planner", href: "#planner" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#201D1A] flex flex-col font-sans selection:bg-[#E56A44] selection:text-white relative">
      
      {/* =====================================================================
          1. STICKY TOP BAR (Animated clean bar with DimpleDoodles creator energy)
          ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE3D9] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
          
          {/* Zone 1: Brand Wordmark with doodle accent */}
          <a href="#" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#201D1A] hover:text-[#C84E29] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 group">
            <span className="relative">
              {CREATOR_CONFIG.name}
              {/* Animated hand-drawn squiggle underline on hover */}
              <svg className="absolute -bottom-1 left-0 w-full h-1 text-[#E56A44] opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FCEEE9] text-[#E56A44] text-[10px] font-bold animate-pulse">
              ✨
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#686058]" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#201D1A] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#E56A44]/50"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#20BA5A] transition-all hover:shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#201D1A] hover:bg-[#EAE3D9]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E56A44]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF7F2] border-b border-[#EAE3D9] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#686058] hover:text-[#201D1A] py-1 border-b border-[#F0EBE2] last:border-none"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-center flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  Chat on WhatsApp ({CREATOR_CONFIG.whatsapp.displayNumber})
                </a>
                <a
                  href={CREATOR_CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#FFFFFF] border border-[#EAE3D9] text-[#201D1A] font-medium text-center flex items-center justify-center gap-2 text-sm hover:bg-[#F5EFE6]"
                >
                  <Instagram className="w-4 h-4 text-[#E56A44]" />
                  View Instagram ({CREATOR_CONFIG.instagram.handle})
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* =====================================================================
          2. HERO SECTION (Lively, Animated, Dimple Doodles-Inspired Creator Stage)
          ===================================================================== */}
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-22 overflow-hidden">
        {/* Floating playful background doodles */}
        <div className="absolute top-12 left-10 text-3xl opacity-30 select-none animate-float-slow pointer-events-none">✨</div>
        <div className="absolute top-48 right-16 text-3xl opacity-30 select-none animate-float-reverse pointer-events-none">💄</div>
        <div className="absolute bottom-20 left-1/3 text-2xl opacity-20 select-none animate-wiggle pointer-events-none">🌿</div>
        <div className="absolute top-1/2 -left-6 w-32 h-32 bg-[#E56A44]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Typographic Pitch & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Creator Meta Badge with Doodle Accent */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C84E29] uppercase mb-3">
                <span className="bg-[#FCEEE9] px-2.5 py-1 rounded-full border border-[#F3D1C6] inline-flex items-center gap-1">
                  📍 {CREATOR_CONFIG.city}
                </span>
                <span aria-hidden="true">·</span>
                <span>Beauty & Lifestyle UGC</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#059669] font-bold">Available Now</span>
              </div>

              {/* Big Headline with Animated Highlight */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#201D1A] tracking-tight leading-[1.12] mb-5 [text-wrap:balance]">
                Real people. Real reviews.{' '}
                <span className="relative inline-block text-[#C84E29]">
                  Reels that convert.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E56A44]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                    <path d="M2,9 Q50,2 100,9 T198,7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* Handwritten Doodle Note */}
              <div className="mb-4 flex items-center gap-2 text-[#C84E29] font-doodle text-2xl sm:text-3xl rotate-[-2deg] select-none">
                <span>✦ "No awkward robotic scripts. Just authentic Indian storytelling!"</span>
              </div>

              {/* One-Line Pitch */}
              <p className="text-lg sm:text-xl text-[#686058] leading-relaxed mb-8 max-w-2xl">
                High-converting, thumb-stopping UGC reels engineered for Indian D2C brands. Real skin textures, unscripted relatability, and ad-tested hooks that lower customer acquisition cost.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white stroke-none group-hover:rotate-12 transition-transform" />
                  <span>Chat on WhatsApp</span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono">⚡ 2h reply</span>
                </a>
                
                <a
                  href={CREATOR_CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#FFFFFF] border-2 border-[#D8CEBF] text-[#201D1A] font-semibold text-base hover:bg-[#F5EFE6] transition-all hover:border-[#C84E29]/60 active:scale-98"
                >
                  <Instagram className="w-5 h-5 text-[#E56A44]" />
                  <span>View my Instagram ({CREATOR_CONFIG.instagram.handle})</span>
                </a>
              </div>

              {/* Trust Subtext */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#686058]">
                <span className="flex items-center gap-1 font-semibold text-[#201D1A]">
                  <Check className="w-4 h-4 text-[#25D366] stroke-[3]" />
                  40+ Indian D2C Brands
                </span>
                <span className="text-[#D8CEBF]" aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-semibold text-[#201D1A]">
                  <Check className="w-4 h-4 text-[#25D366] stroke-[3]" />
                  Tailored Rate Cards (No Hidden Fees)
                </span>
                <span className="text-[#D8CEBF]" aria-hidden="true">·</span>
                <span>Fast 48h Turnaround Available</span>
              </div>
            </div>

            {/* Right Column: Visual Creator Smartphone Showcase with Floating Stickers */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Cute Floating Creator Stickers (Dimple Doodles inspired) */}
              <div className="absolute -top-4 -left-6 z-20 bg-white shadow-md border-2 border-[#E56A44] text-[#C84E29] rounded-2xl px-3.5 py-1.5 font-doodle text-xl rotate-[-8deg] animate-float-slow select-none">
                ✨ 100% Real Skin Texture!
              </div>

              <div className="absolute -bottom-4 -right-4 z-20 bg-[#25D366] text-white shadow-lg rounded-2xl px-3.5 py-1.5 text-xs font-bold rotate-[6deg] animate-float-reverse flex items-center gap-1.5 select-none">
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Quick WhatsApp Quote</span>
              </div>

              {/* Smartphone Container */}
              <div className="relative w-full max-w-sm sm:max-w-md bg-[#201D1A] p-3 sm:p-3.5 rounded-[44px] shadow-2xl border-4 border-[#38332E]">
                
                {/* Phone Speaker Notch */}
                <div className="w-32 h-4 bg-[#141210] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#2A2623] mr-2"></div>
                  <div className="w-12 h-1 bg-[#2A2623] rounded-full"></div>
                </div>

                {/* Screen Content */}
                <div className="bg-[#FAF7F2] rounded-[34px] overflow-hidden border border-[#EAE3D9] flex flex-col">
                  
                  {/* Simulated Reel Cover Visual */}
                  <div className="relative aspect-[9/11] bg-gradient-to-b from-[#FDF2E9] via-[#FADBD8] to-[#EDBB99] flex flex-col justify-between p-5 overflow-hidden">
                    
                    {/* Top Status Bar inside mockup */}
                    <div className="relative z-10 flex items-center justify-between text-xs text-white">
                      <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                        Mumbai Creator Studio
                      </span>
                      <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full font-mono text-[11px]">
                        4K 60FPS
                      </span>
                    </div>

                    {/* Center Avatar Badge */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                      <div className="relative mb-3">
                        <div className="w-26 h-26 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#E56A44] to-[#F59E0B] p-1.5 shadow-xl">
                          <div className="w-full h-full rounded-full bg-[#FAF7F2] flex flex-col items-center justify-center text-[#201D1A]">
                            <span className="font-display text-3xl font-extrabold text-[#C84E29]">AD</span>
                            <span className="text-[10px] font-bold text-[#686058] tracking-widest">UGC REELS</span>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#25D366] text-white p-1 rounded-full shadow-md">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-bold text-[#201D1A]">Ananya Deshmukh</h3>
                      <p className="text-xs text-[#686058] font-medium">Beauty, Lifestyle & Food UGC</p>

                      <div className="mt-2.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#C84E29] border border-[#EAE3D9] shadow-xs">
                        Accepting Q2/Q3 Brand Campaigns
                      </div>
                    </div>

                    {/* Bottom Floating Reel Metric Card */}
                    <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-[#EAE3D9] shadow-sm flex items-center justify-between text-xs">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-[#686058] tracking-wider">Top Performing Reel</p>
                        <p className="font-bold text-[#201D1A] line-clamp-1">1.2M+ Organic Views · 4.2x ROAS</p>
                      </div>
                      <a href="#work" className="text-xs font-bold text-[#C84E29] flex items-center gap-1 hover:underline">
                        Watch <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                  {/* Phone Bottom Instagram Action Mockup */}
                  <div className="p-3 bg-white border-t border-[#EAE3D9] flex items-center justify-between text-xs text-[#686058]">
                    <div className="flex items-center gap-1 font-semibold text-[#201D1A]">
                      <Instagram className="w-3.5 h-3.5 text-[#E56A44]" />
                      <span>{CREATOR_CONFIG.instagram.handle}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#E56A44] font-bold">85K Community</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Full-width KPI / Stats Strip placed below hero split */}
          <div className="mt-14 pt-10 border-t border-[#EAE3D9] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {CREATOR_CONFIG.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col group relative">
                <span className="inline-block text-[11px] font-bold text-[#E56A44] mb-1">
                  {stat.sticker}
                </span>
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#201D1A] tabular-nums tracking-tight group-hover:text-[#C84E29] transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-[#201D1A] mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-[#686058] mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          3. ABOUT ME SECTION (Warm bio + clean unboxed tags)
          ===================================================================== */}
      <section id="about" className="py-16 sm:py-20 bg-[#F5EFE6]/60 border-t border-b border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">About Me</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-6">
              A creator who understands both aesthetics and ad metrics.
            </h2>
            
            <p className="text-base sm:text-lg text-[#686058] leading-relaxed mb-6">
              {CREATOR_CONFIG.aboutBio}
            </p>

            <p className="text-base text-[#686058] leading-relaxed mb-8">
              My audience trusts me because I don’t endorse anything I wouldn’t use on my own skin or recommend to my closest friends. For brands, that authenticity directly translates to lower CPMs, higher watch time, and measurable sales.
            </p>

            {/* Zero-Pill tags: Clean unboxed metadata with typographic separators */}
            <div className="pt-6 border-t border-[#DED5C8]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#686058] mb-3">Key Creator Advantages</p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-[#201D1A]">
                {CREATOR_CONFIG.aboutTags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C84E29] shrink-0" />
                      <span>{tag}</span>
                    </span>
                    {idx < CREATOR_CONFIG.aboutTags.length - 1 && (
                      <span className="text-[#B0A79C]" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          4. SERVICES SECTION (6 Cards with icons and 1-line descriptions)
          ===================================================================== */}
      <section id="services" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Services Offered</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2">
                What I can create for your brand.
              </h2>
            </div>
            <p className="text-sm text-[#686058] mt-2 sm:mt-0 max-w-sm">
              Deliverables customized for paid Meta ad accounts, TikTok, and organic social calendars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREATOR_CONFIG.services.map((service) => {
              const IconComp = service.icon;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE3D9] hover:border-[#D8CEBF] transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FCEEE9] text-[#C84E29] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#C84E29] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#EAE3D9]">
                        {service.sticker}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#201D1A] mb-2 group-hover:text-[#C84E29] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#686058] leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    <p className="text-xs text-[#8A8175] font-medium bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EAE3D9]">
                      ✓ Includes: {service.deliverable}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F5EFE6]">
                    <a
                      href={getWhatsAppLink(`Hi Ananya, I am interested in discussing your "${service.title}" UGC format for my brand.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#201D1A] hover:text-[#C84E29] inline-flex items-center gap-1.5 transition-colors"
                    >
                      Inquire on WhatsApp <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================================
          5. FEATURED WORK (Dimple Doodles Style Interactive Reel Grid & Lightbox)
          ===================================================================== */}
      <section id="work" className="py-16 sm:py-24 bg-[#F5EFE6]/40 border-t border-b border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Featured UGC Vault</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2">
                Reels that generated real revenue.
              </h2>
            </div>
            <p className="text-sm text-[#686058] mt-2 sm:mt-0">
              Click any card to play the interactive simulated reel preview.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist" aria-label="Portfolio categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-[#201D1A] text-white shadow-md'
                    : 'bg-white text-[#686058] border border-[#EAE3D9] hover:bg-[#FAF7F2] hover:text-[#201D1A]'
                }`}
              >
                {cat} {cat === 'All' ? `(${CREATOR_CONFIG.featuredWork.length})` : ''}
              </button>
            ))}
          </div>

          {/* 9:16 Vertical Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredWork.map((work) => (
              <div
                key={work.id}
                onClick={() => {
                  setSelectedVideo(work);
                  setIsPlaying(true);
                  setIsLiked(false);
                  setIsBookmarked(false);
                }}
                className="group relative cursor-pointer rounded-3xl overflow-hidden border border-[#EAE3D9] bg-white transition-all hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E56A44]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedVideo(work);
                    setIsPlaying(true);
                  }
                }}
                aria-label={`View video campaign for ${work.brand}: ${work.title}`}
              >
                {/* 9:16 Aspect Container */}
                <div className={`relative aspect-[9/16] w-full bg-gradient-to-b ${work.bgGradient} flex flex-col justify-between p-4 overflow-hidden`}>
                  
                  {/* Subtle creator UI watermark mockup */}
                  <div className="absolute inset-0 bg-radial from-transparent to-black/30 pointer-events-none" />

                  {/* Top Bar inside thumbnail */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full">
                      {work.category}
                    </span>
                    <span className="text-[11px] font-mono text-white/90 bg-black/40 px-2 py-0.5 rounded-md">
                      {work.duration}
                    </span>
                  </div>

                  {/* Cute Handwritten Rating Sticker on Thumbnail */}
                  <div className="relative z-10 self-start bg-white/90 backdrop-blur-xs text-[#C84E29] text-[10px] font-doodle px-2.5 py-1 rounded-lg border border-[#EAE3D9] rotate-[-3deg] shadow-xs">
                    ✦ {work.doodleRating}
                  </div>

                  {/* Center Play Button Overlay with Pulse */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-[#201D1A] flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-[#E56A44] group-hover:text-white transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                    <span className="text-xs font-semibold text-white mt-3 drop-shadow-md bg-black/40 px-2.5 py-0.5 rounded-full">
                      Tap to Preview Reel
                    </span>
                  </div>

                  {/* Bottom Thumbnail Info */}
                  <div className="relative z-10 bg-gradient-to-t from-black/85 via-black/50 to-transparent -mx-4 -mb-4 p-4 text-white">
                    <p className="text-xs font-bold text-[#FDBA74] tracking-wide mb-1">
                      {work.brand}
                    </p>
                    <h3 className="text-sm font-semibold leading-snug line-clamp-2 drop-shadow-sm mb-2">
                      {work.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-[11px] text-white/80 pt-1 border-t border-white/20">
                      <span className="flex items-center gap-1 font-semibold">
                        <Eye className="w-3 h-3 text-[#FDBA74]" /> {work.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Bookmark className="w-3 h-3 text-white/70" /> {work.saves} saves
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          6. BRANDS MARQUEE (Fictional Indian-style wordmarks)
          ===================================================================== */}
      <section id="brands" className="py-14 bg-white border-b border-[#EAE3D9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#686058] flex items-center justify-center gap-2">
            <span>Trusted by 40+ Indian D2C Brands & Agencies</span>
            <span className="text-[#E56A44]">✦</span>
          </span>
        </div>

        {/* Continuous Smooth Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-3">
            {[...CREATOR_CONFIG.brands, ...CREATOR_CONFIG.brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="whitespace-nowrap flex items-center gap-3 text-[#8A8175] hover:text-[#201D1A] transition-colors select-none"
              >
                <span className={`text-lg sm:text-2xl ${brand.style} text-current`}>
                  {brand.name}
                </span>
                <span className="text-[#D8CEBF] text-xs" aria-hidden="true">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. COLLABORATIONS / CASE STUDIES (3-4 Cards with deliverables & results)
          ===================================================================== */}
      <section id="collaborations" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Collaborations & Results</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-4">
              Real business impact, not just vanity impressions.
            </h2>
            <p className="text-base text-[#686058]">
              Every campaign is engineered around a specific brand objective: whether it is lowering ad CPMs, boosting PDP conversion, or driving rapid launch sellouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CREATOR_CONFIG.collaborations.map((collab) => (
              <div
                key={collab.brand}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#EAE3D9] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#686058] mb-3">
                    <span className="text-[#C84E29] uppercase tracking-wider bg-[#FCEEE9] px-2.5 py-0.5 rounded-full font-bold">{collab.category}</span>
                    <span>Delivered: {collab.delivered}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#201D1A] mb-1 group-hover:text-[#C84E29] transition-colors">
                    {collab.brand}
                  </h3>
                  <p className="text-sm font-semibold text-[#686058] mb-4">
                    Campaign: {collab.campaign}
                  </p>

                  <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EAE3D9] mb-4">
                    <p className="text-xs font-bold uppercase text-[#686058] mb-1">The Challenge</p>
                    <p className="text-xs sm:text-sm text-[#201D1A] leading-relaxed">
                      {collab.challenge}
                    </p>
                  </div>

                  {/* Quantitative Result Line */}
                  <div className="bg-[#FCEEE9] rounded-2xl p-4 border border-[#F3D1C6] mb-5">
                    <p className="text-xs font-bold uppercase text-[#C84E29] mb-1 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      Key Performance Result
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#201D1A]">
                      {collab.results}
                    </p>
                  </div>

                  {/* Brand Quote */}
                  <blockquote className="text-xs sm:text-sm italic text-[#686058] border-l-2 border-[#E56A44] pl-3 py-1">
                    "{collab.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6]">
                  <a
                    href={getWhatsAppLink(`Hi Ananya, I loved your campaign for ${collab.brand}. We would like to explore a similar UGC strategy for our brand.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C84E29] hover:text-[#201D1A] transition-colors"
                  >
                    Discuss similar campaign on WhatsApp <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          8. ACHIEVEMENTS (Badge / Timeline Grid)
          ===================================================================== */}
      <section id="achievements" className="py-16 sm:py-20 bg-[#F5EFE6]/60 border-t border-b border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Milestones</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-3">
              Recognized for creator consistency.
            </h2>
            <p className="text-sm text-[#686058]">
              A track record of professional reliability and audience resonance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREATOR_CONFIG.achievements.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 border border-[#EAE3D9] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FCEEE9] text-[#C84E29] flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#201D1A] mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#C84E29] block mb-2">
                    {item.location}
                  </span>
                  <p className="text-xs text-[#686058] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          9. TESTIMONIALS (3 short quotes from brand managers)
          ===================================================================== */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Brand Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-3">
              What marketing managers say.
            </h2>
            <p className="text-sm text-[#686058]">
              Straight feedback from brand founders and performance marketers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CREATOR_CONFIG.testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white rounded-3xl p-7 border border-[#EAE3D9] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-[#201D1A] leading-relaxed mb-6 font-normal">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5EFE6] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#201D1A]">
                      {testimonial.author}
                    </h3>
                    <p className="text-xs text-[#686058]">
                      {testimonial.role}, <span className="font-semibold text-[#C84E29]">{testimonial.brand}</span>
                    </p>
                  </div>
                  <span className="text-xs bg-[#F5EFE6] text-[#686058] px-2 py-1 rounded-md font-mono">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          10. PACKAGES (NO FIXED AMOUNTS - SCOPE BASED, AS REQUESTED)
          ===================================================================== */}
      <section id="packages" className="py-16 sm:py-24 bg-[#F5EFE6]/50 border-t border-b border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Collaboration Packages</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-3">
              Tailored packages for every campaign stage.
            </h2>
            <p className="text-sm text-[#686058]">
              Because every brand's needs vary (video count, whitelisting duration, raw footage rights), pricing is customized based on your exact brief.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {CREATOR_CONFIG.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'bg-white border-2 border-[#E56A44] shadow-2xl relative'
                    : 'bg-white border border-[#EAE3D9] shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E56A44] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    {pkg.tierTag}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display text-2xl font-bold text-[#201D1A]">
                      {pkg.name}
                    </h3>
                    <span className="text-xs text-[#686058] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {pkg.turnaround}
                    </span>
                  </div>

                  {!pkg.popular && (
                    <span className="inline-block text-[11px] font-semibold text-[#C84E29] mb-3">
                      {pkg.tierTag}
                    </span>
                  )}

                  <p className="text-xs text-[#686058] mb-5 min-h-[32px]">
                    {pkg.desc}
                  </p>

                  {/* Scope Pricing Badge (No fixed amount) */}
                  <div className="mb-6 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D9]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#201D1A]">Tailored Quote</span>
                      <span className="text-[11px] font-medium text-[#C84E29]">Varies by usage & scope</span>
                    </div>
                    <p className="text-[11px] text-[#686058] mt-1">
                      {pkg.pricingNote}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#686058]">Package Inclusions:</p>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#201D1A]">
                        <CheckCircle2 className="w-4 h-4 text-[#C84E29] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={getWhatsAppLink(`Hi Ananya, I'm interested in the "${pkg.name}" tier. Could you share your tailored rate card and availability for our brand?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-sm text-center flex items-center justify-center gap-2 transition-all hover:scale-102 ${
                      pkg.popular
                        ? 'bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-md'
                        : 'bg-[#201D1A] text-white hover:bg-[#38332E]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    Inquire on WhatsApp
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Rate Card Transparency Callout */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE3D9] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h3 className="font-display text-lg font-bold text-[#201D1A]">
                Have a custom brief or need raw footage only?
              </h3>
              <p className="text-xs sm:text-sm text-[#686058] mt-1 max-w-2xl">
                I provide dedicated rate options for monthly retainers, B-roll libraries, dark ad whitelisting, and multi-creator UGC sets. Direct WhatsApp consultation with zero pressure.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Hi Ananya, I would like to request your full custom rate card and discuss a custom UGC retainer for our brand.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#FAF7F2] border border-[#D8CEBF] text-[#201D1A] font-bold text-xs hover:bg-[#F5EFE6] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Get Full Rate Card</span>
            </a>
          </div>

        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE CAMPAIGN PLANNER / ESTIMATOR (User-Friendly Touch)
          ===================================================================== */}
      <section id="planner" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Instant Campaign Planner</span>
            <h2 className="font-display text-3xl font-bold text-[#201D1A] mt-2 mb-2">
              Plan your deliverables in 15 seconds.
            </h2>
            <p className="text-sm text-[#686058]">
              Select what you need, and generate an exact, formatted brief to send directly on WhatsApp.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE3D9] shadow-md">
            <div className="space-y-6">
              
              {/* Step 1: Videos count */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686058] mb-3">
                  1. How many UGC Reels do you need?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 3, 5].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setScopeVideos(count)}
                      className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                        scopeVideos === count
                          ? 'border-[#E56A44] bg-[#FCEEE9] text-[#C84E29]'
                          : 'border-[#EAE3D9] bg-[#FAF7F2] text-[#201D1A] hover:bg-white'
                      }`}
                    >
                      {count} {count === 1 ? 'Reel (Test)' : count === 3 ? 'Reels (Standard)' : 'Reels (Scale)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Usage Rights */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686058] mb-3">
                  2. Required Usage Rights
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Organic Only (30 Days)', 'Paid Ads (60 Days)', 'Extended Ads (90 Days)'].map((usage) => (
                    <button
                      key={usage}
                      type="button"
                      onClick={() => setScopeUsage(usage)}
                      className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                        scopeUsage === usage
                          ? 'border-[#E56A44] bg-[#FCEEE9] text-[#C84E29]'
                          : 'border-[#EAE3D9] bg-[#FAF7F2] text-[#201D1A] hover:bg-white'
                      }`}
                    >
                      {usage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686058] mb-3">
                  3. Campaign Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    scopeIncludeBroll ? 'border-[#E56A44] bg-[#FCEEE9]/40' : 'border-[#EAE3D9] bg-[#FAF7F2]'
                  }`}>
                    <input
                      type="checkbox"
                      checked={scopeIncludeBroll}
                      onChange={(e) => setScopeIncludeBroll(e.target.checked)}
                      className="w-4 h-4 text-[#E56A44] rounded focus:ring-[#E56A44]"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-[#201D1A]">Raw B-roll & Footage Pack</p>
                      <p className="text-[#686058]">Unedited clips for your internal editor</p>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    scopeIncludeWhitelisting ? 'border-[#E56A44] bg-[#FCEEE9]/40' : 'border-[#EAE3D9] bg-[#FAF7F2]'
                  }`}>
                    <input
                      type="checkbox"
                      checked={scopeIncludeWhitelisting}
                      onChange={(e) => setScopeIncludeWhitelisting(e.target.checked)}
                      className="w-4 h-4 text-[#E56A44] rounded focus:ring-[#E56A44]"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-[#201D1A]">Creator Whitelisting Access</p>
                      <p className="text-[#686058]">Run dark ads from @ananya.creates</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Planner Summary & CTA */}
              <div className="pt-4 border-t border-[#EAE3D9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#686058] text-center sm:text-left">
                  <p className="font-bold text-[#201D1A]">Selected Configuration:</p>
                  <p>{scopeVideos} Reels · {scopeUsage} · {scopeIncludeBroll ? '+ Raw B-roll' : 'Standard Edit'} {scopeIncludeWhitelisting ? '· + Whitelisting' : ''}</p>
                </div>

                <button
                  type="button"
                  onClick={handleEstimatorSubmit}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20BA5A] transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>Send Configuration on WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          11. HOW I WORK (4-Step Process)
          ===================================================================== */}
      <section id="process" className="py-16 sm:py-24 bg-[#F5EFE6]/50 border-t border-b border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">How I Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-3">
              Simple 4-step collaboration process.
            </h2>
            <p className="text-sm text-[#686058]">
              Transparent, professional, and zero back-and-forth friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREATOR_CONFIG.process.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-6 border border-[#EAE3D9] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="font-display text-3xl font-extrabold text-[#E56A44] mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#201D1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686058] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          12. FAQ (6 Accordion Items)
          ===================================================================== */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Frequently Asked Questions</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-3">
              Everything brands ask before booking.
            </h2>
            <p className="text-sm text-[#686058]">
              Have a specific question not listed here? Ask directly on WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            {CREATOR_CONFIG.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-[#EAE3D9] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-[#201D1A] hover:text-[#C84E29] transition-colors focus:outline-none focus-visible:bg-[#F5EFE6]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#686058] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C84E29]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#686058] leading-relaxed border-t border-[#F5EFE6] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================================
          13. CONTACT SECTION (WhatsApp CTA, Instagram, Email, Enquiry Form)
          ===================================================================== */}
      <section id="contact" className="py-16 sm:py-24 bg-[#F5EFE6]/60 border-t border-b border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Direct Contact Information & WhatsApp Priority */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C84E29]">Get In Touch</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201D1A] mt-2 mb-4">
                Let’s create your next top-performing UGC reel.
              </h2>
              <p className="text-base text-[#686058] mb-8 leading-relaxed">
                The fastest way to reach me is on WhatsApp. I typically respond within 2 to 4 hours with available production dates and customized brief ideas.
              </p>

              {/* Big WhatsApp CTA Card with DimpleDoodles creator touch */}
              <div className="bg-[#EBFBF0] border border-[#BDEEC8] rounded-3xl p-6 sm:p-7 mb-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-6 h-6 fill-white stroke-none" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#14532D]">WhatsApp Direct</h3>
                    <p className="text-xs text-[#166534]">Fastest response · {CREATOR_CONFIG.whatsapp.displayNumber}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#14532D] mb-5 leading-relaxed">
                  Have your product link or brief ready? Tap below to start a chat with prefilled details.
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20BA5A] transition-all shadow-md active:scale-98 hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  Chat on WhatsApp ({CREATOR_CONFIG.whatsapp.displayNumber})
                </a>
              </div>

              {/* Quick Copy Contact Links */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#EAE3D9]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FCEEE9] text-[#E56A44] flex items-center justify-center">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#686058]">Instagram</p>
                      <p className="text-sm font-bold text-[#201D1A]">{CREATOR_CONFIG.instagram.handle}</p>
                    </div>
                  </div>
                  <a
                    href={CREATOR_CONFIG.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-xs font-semibold text-[#C84E29] hover:underline"
                  >
                    Visit →
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#EAE3D9]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#201D1A] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#686058]">Official Email</p>
                      <p className="text-sm font-bold text-[#201D1A]">{CREATOR_CONFIG.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CREATOR_CONFIG.email, 'email')}
                    className="p-2 rounded-lg text-xs font-semibold text-[#686058] hover:text-[#201D1A] flex items-center gap-1"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#EAE3D9] text-[#201D1A]">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#201D1A] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#686058]">Studio Base</p>
                    <p className="text-sm font-bold text-[#201D1A]">{CREATOR_CONFIG.city}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Quick Collaboration Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE3D9] shadow-md">
                <h3 className="font-display text-2xl font-bold text-[#201D1A] mb-2">
                  Send a Collaboration Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#686058] mb-6">
                  Filling this out instantly prepares a formatted WhatsApp message and opens the chat with Ananya.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={nameInputId} className="block text-xs font-bold uppercase tracking-wider text-[#686058] mb-2">
                        Your Name *
                      </label>
                      <input
                        id={nameInputId}
                        type="text"
                        required
                        placeholder="e.g. Riya Mehta"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D8CEBF] bg-[#FAF7F2] text-sm text-[#201D1A] focus:outline-none focus:ring-2 focus:ring-[#E56A44] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor={brandInputId} className="block text-xs font-bold uppercase tracking-wider text-[#686058] mb-2">
                        Brand Name *
                      </label>
                      <input
                        id={brandInputId}
                        type="text"
                        required
                        placeholder="e.g. Nykara Botanics"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D8CEBF] bg-[#FAF7F2] text-sm text-[#201D1A] focus:outline-none focus:ring-2 focus:ring-[#E56A44] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={scopeSelectId} className="block text-xs font-bold uppercase tracking-wider text-[#686058] mb-2">
                      Campaign Scope Needed
                    </label>
                    <select
                      id={scopeSelectId}
                      value={formData.scopeType}
                      onChange={(e) => setFormData({ ...formData, scopeType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8CEBF] bg-[#FAF7F2] text-sm text-[#201D1A] focus:outline-none focus:ring-2 focus:ring-[#E56A44] transition-all"
                    >
                      <option value="Single Reel Test / Pilot">Single Reel Test / Pilot</option>
                      <option value="Growth Campaign (3–5 Reels)">Growth Campaign (3–5 Reels)</option>
                      <option value="Product Launch Blitz (5+ Reels + Stories)">Product Launch Blitz (5+ Reels + Stories)</option>
                      <option value="Monthly Retainer UGC Partnership">Monthly Retainer UGC Partnership</option>
                      <option value="Raw B-roll & Footage Only">Raw B-roll & Footage Only</option>
                      <option value="Whitelisting Dark Ads Partnership">Whitelisting Dark Ads Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={messageInputId} className="block text-xs font-bold uppercase tracking-wider text-[#686058] mb-2">
                      Campaign Brief / Product Link
                    </label>
                    <textarea
                      id={messageInputId}
                      rows={4}
                      placeholder="Tell me about your product, desired timeline, or any specific angle you'd like to test..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8CEBF] bg-[#FAF7F2] text-sm text-[#201D1A] focus:outline-none focus:ring-2 focus:ring-[#E56A44] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-md hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2.5 active:scale-98 hover:scale-102"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send via WhatsApp Chat</span>
                  </button>

                  <p className="text-[11px] text-center text-[#686058]">
                    No email delays. Clicking opens your WhatsApp app or WhatsApp Web directly.
                  </p>
                </form>

                {formSubmitted && (
                  <div className="mt-4 p-4 rounded-xl bg-[#EBFBF0] border border-[#BDEEC8] text-[#14532D] text-xs">
                    ✓ WhatsApp opened! If the popup was blocked, you can also click the floating button at the bottom-right.
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          14. FOOTER (Social links and copyright line)
          ===================================================================== */}
      <footer className="mt-auto bg-[#201D1A] text-[#FAF7F2] py-12 border-t border-[#332D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#332D27]">
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-white block">
                {CREATOR_CONFIG.name}
              </span>
              <p className="text-xs text-[#A89F94] mt-1">
                {CREATOR_CONFIG.niche} · Based in {CREATOR_CONFIG.city}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <a
                href={CREATOR_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A89F94] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A89F94] hover:text-[#25D366] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${CREATOR_CONFIG.email}`}
                className="text-[#A89F94] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89F94] gap-4">
            <p>© {new Date().getFullYear()} {CREATOR_CONFIG.name}. All rights reserved.</p>
            <p>Designed for high-converting brand collaborations in India.</p>
          </div>

        </div>
      </footer>

      {/* =====================================================================
          ANIMATED WHATSAPP FLOATING BUTTON (Fixed with speech bubble)
          ===================================================================== */}
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
        {/* Playful Floating Speech Bubble (Dimple Doodles touch) */}
        <div className="hidden sm:flex items-center gap-2 mr-3 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-[#EAE3D9] text-[#201D1A] text-xs font-bold animate-float-slow select-none">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
          <span>Hi! Need a quick UGC quote? 💬</span>
        </div>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl animate-whatsapp-pulse hover:scale-115 transition-transform active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          aria-label="Chat on WhatsApp with Ananya"
        >
          <MessageCircle className="w-8 h-8 fill-white stroke-none" />
        </a>
      </aside>

      {/* =====================================================================
          ENHANCED FEATURED WORK LIGHTBOX / REEL PREVIEW MODAL
          ===================================================================== */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-video-title"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => {
            setSelectedVideo(null);
            setIsPlaying(false);
          }}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20 my-auto animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedVideo(null);
                setIsPlaying(false);
              }}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close preview modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left: 9:16 Vertical Video Player Mockup with Instagram Overlays */}
              <div className="md:col-span-6 bg-black flex flex-col justify-between p-3 sm:p-4 relative min-h-[420px] sm:min-h-[500px]">
                
                {/* Video Stage with animated / simulated playback */}
                <div className={`absolute inset-0 bg-gradient-to-b ${selectedVideo.bgGradient} flex flex-col justify-between p-5 overflow-hidden`}>
                  
                  {/* Floating Heart Particle Burst Effect */}
                  {heartsAnimation.map(id => (
                    <div
                      key={id}
                      className="absolute right-12 bottom-32 text-3xl pointer-events-none select-none z-30 animate-bounce"
                    >
                      ❤️
                    </div>
                  ))}

                  {/* Reel Header */}
                  <div className="flex items-center justify-between text-white text-xs z-10">
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full font-bold">
                      {selectedVideo.brand}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded font-mono">
                      {selectedVideo.duration}
                    </span>
                  </div>

                  {/* Play / Pause Toggle Center with Sound Visualizer */}
                  <div className="flex flex-col items-center justify-center z-10 text-center my-auto">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-white/95 text-[#201D1A] flex items-center justify-center shadow-2xl hover:scale-115 transition-transform mb-3 focus:outline-none"
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </button>
                    
                    {/* Live Audio Visualizer Bars */}
                    {isPlaying && (
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-full mb-2">
                        <div className="w-1 bg-[#E56A44] rounded-full audio-bar-1"></div>
                        <div className="w-1 bg-[#E56A44] rounded-full audio-bar-2"></div>
                        <div className="w-1 bg-[#E56A44] rounded-full audio-bar-3"></div>
                        <div className="w-1 bg-[#E56A44] rounded-full audio-bar-4"></div>
                        <span className="text-[11px] font-mono text-white ml-2">Audio Playing</span>
                      </div>
                    )}

                    <span className="text-xs font-semibold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                      {isPlaying ? "Simulating Reel Stream..." : "Tap to Play Reel"}
                    </span>
                  </div>

                  {/* Right Action Icons Column (Interactive Like, Bookmark, Share simulator) */}
                  <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-3 text-white">
                    <button
                      onClick={triggerHeartBurst}
                      className="flex flex-col items-center gap-1 group focus:outline-none hover:scale-110 transition-transform"
                    >
                      <div className={`p-2 rounded-full backdrop-blur-md transition-colors ${isLiked ? 'bg-[#E56A44] text-white' : 'bg-black/50 text-white'}`}>
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} />
                      </div>
                      <span className="text-[10px] font-bold tabular-nums">{likeCount.toLocaleString()}</span>
                    </button>

                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className="flex flex-col items-center gap-1 focus:outline-none hover:scale-110 transition-transform"
                    >
                      <div className={`p-2 rounded-full backdrop-blur-md transition-colors ${isBookmarked ? 'bg-[#F59E0B] text-white' : 'bg-black/50 text-white'}`}>
                        <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-white' : ''}`} />
                      </div>
                      <span className="text-[10px] font-bold">{selectedVideo.saves}</span>
                    </button>

                    <button
                      onClick={() => copyToClipboard(window.location.href, 'link')}
                      className="flex flex-col items-center gap-1 focus:outline-none hover:scale-110 transition-transform"
                    >
                      <div className="p-2 rounded-full bg-black/50 text-white backdrop-blur-md">
                        <Share2 className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold">{copiedType === 'link' ? 'Copied' : 'Share'}</span>
                    </button>
                  </div>

                  {/* Reel Bottom Meta Overlay */}
                  <div className="z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent -mx-5 -mb-5 p-5 text-white pr-14">
                    <div className="flex items-center gap-2 mb-1.5">
                      <p className="text-xs font-bold text-[#FDBA74]">@{CREATOR_CONFIG.instagram.handle.replace('@', '')}</p>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Verified Creator</span>
                    </div>
                    <p className="text-xs text-white/95 line-clamp-2 mb-2.5 font-medium">{selectedVideo.hook}</p>
                    
                    {/* Audio track tag */}
                    <div className="flex items-center gap-1.5 text-[10px] text-white/80 mb-3">
                      <Music2 className="w-3 h-3 text-[#FDBA74]" />
                      <span className="truncate">{selectedVideo.audioTitle}</span>
                    </div>

                    {/* Simulated Scrubber Bar */}
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full bg-[#E56A44] transition-all duration-300 ${isPlaying ? 'w-3/4 animate-pulse' : 'w-1/4'}`} />
                    </div>
                  </div>

                </div>

              </div>

              {/* Right: Campaign Details, Tabs & Inquire CTA */}
              <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C84E29] mb-2">
                    <span>{selectedVideo.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedVideo.brand}</span>
                  </div>

                  <h3 id="modal-video-title" className="font-display text-xl sm:text-2xl font-bold text-[#201D1A] mb-3 leading-tight">
                    {selectedVideo.title}
                  </h3>

                  {/* Modal Tab Switcher */}
                  <div className="flex items-center gap-1 p-1 bg-[#FAF7F2] rounded-xl border border-[#EAE3D9] mb-4">
                    <button
                      type="button"
                      onClick={() => setModalTab('overview')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        modalTab === 'overview' ? 'bg-white text-[#201D1A] shadow-xs' : 'text-[#686058] hover:text-[#201D1A]'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalTab('metrics')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        modalTab === 'metrics' ? 'bg-white text-[#201D1A] shadow-xs' : 'text-[#686058] hover:text-[#201D1A]'
                      }`}
                    >
                      Ad Metrics
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalTab('story')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        modalTab === 'story' ? 'bg-white text-[#201D1A] shadow-xs' : 'text-[#686058] hover:text-[#201D1A]'
                      }`}
                    >
                      Strategy
                    </button>
                  </div>

                  {/* Tab 1: Overview */}
                  {modalTab === 'overview' && (
                    <div className="space-y-3">
                      <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#EAE3D9]">
                        <p className="text-[11px] font-bold text-[#686058] uppercase mb-1">Tested Hook</p>
                        <p className="text-xs sm:text-sm italic text-[#201D1A]">
                          {selectedVideo.hook}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-[#686058] leading-relaxed">
                        {selectedVideo.description}
                      </p>
                    </div>
                  )}

                  {/* Tab 2: Ad Metrics */}
                  {modalTab === 'metrics' && (
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#686058] mb-2">Verified Performance</p>
                      {selectedVideo.keyMetrics.map((metric) => (
                        <div key={metric} className="flex items-center gap-2 text-xs text-[#201D1A] font-medium bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EAE3D9]">
                          <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tab 3: Strategy */}
                  {modalTab === 'story' && (
                    <div className="space-y-2 text-xs text-[#686058] leading-relaxed">
                      <p className="font-bold text-[#201D1A]">Why this format converted:</p>
                      <p>1. <strong>Visual Hook:</strong> Shows immediate unedited texture in the first 2 seconds to hook viewers with high intent.</p>
                      <p>2. <strong>Social Proof:</strong> Addresses real pain points rather than repeating scripted marketing claims.</p>
                      <p>3. <strong>Clear CTA:</strong> Guides interested buyers directly to bio link or brand coupon code.</p>
                    </div>
                  )}

                </div>

                <div className="pt-5 border-t border-[#F5EFE6] mt-4">
                  <a
                    href={getWhatsAppLink(`Hi Ananya, I watched your "${selectedVideo.title}" reel for ${selectedVideo.brand}. We would like a UGC video in this exact format for our brand!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#20BA5A] transition-colors shadow-sm active:scale-98 hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    Request Video in This Style
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
