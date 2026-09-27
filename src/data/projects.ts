export interface Project {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  featured: boolean;
  hasPage: boolean;
  metric?: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Business Automation",
    slug: "ai-automation",
    category: "AI Engineering",
    year: "2026",
    description:
      "AI-powered automation system integrating natural-language interaction with internal business workflows through OpenAI, FastAPI, Azure and Zoho services.",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "Azure",
      "Zoho Creator",
      "Zoho Cliq",
    ],
    featured: true,
    hasPage: true,
  },

  {
    title: "Detecting Speculative Dynamics in AI Stocks",
    slug: "ai-stocks",
    category: "Data Science · Econometrics",
    year: "2026",
    description:
      "Analysis of speculative dynamics in AI-related equities using thematic portfolios, explosive-root tests, market data, Google Trends and SEC corporate disclosures.",
    technologies: [
      "Python",
      "Time Series",
      "Econometrics",
      "GSADF",
      "SEC EDGAR",
    ],
    featured: true,
    hasPage: true,
  },

  {
    title: "Smart HVAC Monitoring & Control",
    slug: "hvac-iot",
    category: "IoT · Data Engineering",
    year: "2024–2025",
    description:
      "Real-time monitoring and control architecture combining occupancy, temperature and energy data to improve HVAC operation in commercial and healthcare environments.",
    technologies: [
      "Python",
      "MQTT",
      "Azure SQL",
      "Node-RED",
      "IoT",
    ],
    featured: true,
    hasPage: true,
  },

  {
    title: "Rooftop Solar Panel Optimization",
    slug: "solar-optimization",
    category: "Computer Vision · Optimization",
    year: "2024",
    description:
      "Computer-vision pipeline for rooftop analysis and photovoltaic panel placement using image processing, building geometry and optimization.",
    technologies: [
      "Python",
      "OpenCV",
      "scikit-image",
      "Optimization",
    ],
    featured: true,
    hasPage: true,
  },

  {
    title: "Part-of-Speech Tagging with HMM and CRF",
    slug: "nlp-hmm-crf",
    category: "Natural Language Processing",
    year: "2026",
    description:
      "Implementation and comparison of supervised and unsupervised sequence-labeling approaches for part-of-speech tagging.",
    technologies: [
      "Python",
      "NLP",
      "HMM",
      "CRF",
    ],
    featured: false,
    hasPage: true,
  },

  {
    title: "CIFAR-10 Image Classification",
    slug: "cifar10",
    category: "Deep Learning · Computer Vision",
    year: "2026",
    description:
      "Training and evaluation of a ResNet-18 convolutional neural network for CIFAR-10 image classification.",
    technologies: [
      "PyTorch",
      "CNN",
      "ResNet-18",
      "Computer Vision",
    ],
    featured: false,
    hasPage: false,
  },

  {
    title: "HVAC Fault Detection",
    slug: "hvac-fault-detection",
    category: "Machine Learning",
    year: "2025",
    description:
      "Comparison of machine-learning models for HVAC fault classification using the ASHRAE RP-1043 dataset.",
    technologies: [
      "Python",
      "Random Forest",
      "SVM",
      "Neural Networks",
      "scikit-learn",
    ],
    featured: false,
    hasPage: true,
  },

  {
    title: "MNIST Handwritten Digit Classification",
    slug: "mnist",
    category: "Deep Learning",
    year: "2025",
    description:
      "Neural-network classifier for handwritten digit recognition developed as part of deep-learning coursework.",
    technologies: [
      "Python",
      "Deep Learning",
      "Neural Networks",
    ],
    featured: false,
    hasPage: false,
  },
];