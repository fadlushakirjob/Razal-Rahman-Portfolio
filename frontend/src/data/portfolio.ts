export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface VentureItem {
  id: string;
  name: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  year?: string;
  status?: string;
  technologies?: string[];
}

export interface InnovationItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface FounderPillar {
  title: string;
  text: string;
  iconName: string;
}

export const founderBio = {
  name: "Razal Rahman",
  role: "Founder & CEO",
  company: "TravelZync Labs",
  location: "India · Scaling Global",
  headline: "Building the future of public transportation.",
  subheadline: "Razal Rahman is the Founder & CEO of TravelZync Labs, transforming public transit with AI-powered tracking, digital ticketing, and smart mobility infrastructure.",
  story: "I'm Razal Rahman, Founder & CEO of TravelZync Labs. I started this company after one too many missed buses and one too many broken promises from 'the next one is coming soon.' TravelZync exists to give public transportation the software layer it has always deserved — real-time, data-driven, and designed for the people who depend on it every day.",
  visionTitle: "Public transportation should feel as predictable as gravity — not a gamble.",
  visionBody: "I believe every city, regardless of size or budget, deserves a transit system that people can plan their lives around. TravelZync Labs exists to build the AI and data infrastructure that makes that possible — turning buses, routes, and tickets into a single, intelligent network instead of a patchwork of guesswork.",
};

export const founderPillars: FounderPillar[] = [
  {
    iconName: "Compass",
    title: "Vision & Product Strategy",
    text: "Seeing public transport not as it is, but as the connected, intelligent system it should be."
  },
  {
    iconName: "Cpu",
    title: "Technical Leadership",
    text: "Applying AI, real-time data, and modern engineering to one of the world's oldest infrastructure problems."
  },
  {
    iconName: "Users",
    title: "Team & Culture",
    text: "Building teams that move fast, think in systems, and care deeply about the people who use what we build."
  },
  {
    iconName: "Zap",
    title: "Founder Grit",
    text: "Turning a personal frustration with unreliable transit into a company built to fix it at scale."
  }
];

export const venturesData: VentureItem[] = [
  {
    id: "travelzync-labs",
    name: "TravelZync Labs",
    role: "Parent Company · R&D",
    description: "The research and technology arm building the AI, infrastructure, and platforms that power the future of public transportation.",
    tags: ["AI & Machine Learning", "Mobility Infrastructure", "Product R&D"],
    link: "https://travelzync.com"
  },
  {
    id: "travelzync",
    name: "TravelZync",
    role: "Flagship Product & Network",
    description: "A unified mobility platform for passengers and operators — live GPS tracking, contactless digital ticketing, and real-time fleet analytics in one connected experience.",
    tags: ["Digital Ticketing", "Live Fleet Tracking", "Operator Dashboard"],
    link: "https://travelzync.com"
  }
];

export const innovationsData: InnovationItem[] = [
  {
    id: "ai-transportation",
    iconName: "Brain",
    title: "AI Transportation",
    description: "Machine learning models that understand routes, demand patterns, and congestion in real time."
  },
  {
    id: "digital-ticketing",
    iconName: "Ticket",
    title: "Digital Ticketing",
    description: "Cashless, contactless ticketing that removes friction for passengers and operators alike."
  },
  {
    id: "smart-bus-tracking",
    iconName: "Navigation",
    title: "Smart Bus Tracking",
    description: "Live GPS tracking that gives passengers certainty about when their ride will actually arrive."
  },
  {
    id: "business-dashboard",
    iconName: "LayoutDashboard",
    title: "Business Dashboard",
    description: "A single control center for operators to manage fleets, revenue, and routes with clarity."
  },
  {
    id: "passenger-experience",
    iconName: "Smile",
    title: "Passenger Experience",
    description: "Designing every touchpoint — booking, boarding, riding — to feel effortless and modern."
  },
  {
    id: "predictive-eta",
    iconName: "Clock",
    title: "Predictive ETA",
    description: "Predictive models that turn noisy traffic data into arrival times people can actually trust."
  },
  {
    id: "analytics",
    iconName: "BarChart3",
    title: "Analytics & Fleet Intel",
    description: "Deep operational insight into ridership, revenue, and route performance for operators."
  },
  {
    id: "scalable-platform",
    iconName: "Network",
    title: "Scalable Mobility Platform",
    description: "Infrastructure engineered to scale from a single city route to a nationwide transit network."
  }
];

export const journeyData: JourneyItem[] = [
  {
    id: "learning",
    year: "2016 — 2018",
    title: "Learning & Development",
    description: "Early deep-dive into electronics, technology fundamentals, and systems thinking, laying the groundwork for complex problem solving."
  },
  {
    id: "building",
    year: "2019 — 2020",
    title: "Building Projects",
    description: "Shipped a string of small products and experiments, learning product thinking, design, and engineering by doing — not by watching."
  },
  {
    id: "starting",
    year: "2021",
    title: "Starting TravelZync",
    description: "Identified the gap in public transportation: no real-time visibility, no digital ticketing, no data. TravelZync Labs was founded to close it."
  },
  {
    id: "mvp",
    year: "2022 — 2023",
    title: "Building the MVP",
    description: "Built and tested the first version of the platform with real bus operators — live tracking, digital tickets, and an operator dashboard."
  },
  {
    id: "launch",
    year: "2024",
    title: "Company Launch",
    description: "Officially launched TravelZync to the public, onboarding operators and passengers onto a single, unified mobility platform."
  },
  {
    id: "future",
    year: "Now — Beyond",
    title: "Future Vision",
    description: "Scaling TravelZync into a nationwide mobility infrastructure layer — powering every route, every ticket, every ride with intelligence."
  }
];

export const projectsData = venturesData;
export const experienceData = [
  {
    title: 'Founder & CEO',
    company: 'TravelZync Labs',
    duration: '2024 - Present',
    responsibilities: [
      'Company building & strategy',
      'Product & engineering leadership',
      'Mobility infrastructure development',
      'Partnerships & transit operator relationships'
    ]
  }
];

