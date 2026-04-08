// ─────────────────────────────────────────────
// AI USE CASE DATA — BY INDUSTRY
// ─────────────────────────────────────────────
const PROJECTS = [
  // ── HEALTHCARE (8) ──
  {
    id: 'hc-1', title: 'Patient Intake Automation', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'AI-powered patient intake that pre-fills forms, verifies insurance eligibility, and routes patients to the right provider — reducing wait times by 60%.',
    stack: ['NLP', 'FHIR', 'React', 'OpenAI'], build_speed: '1 week',
    impact: '60% reduction in patient check-in time and front-desk labor.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-2', 'hc-3'], size: 1.2
  },
  {
    id: 'hc-2', title: 'Clinical Note Summarizer', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'Automatically summarizes physician notes, lab results, and treatment plans into structured patient briefs for care teams and referrals.',
    stack: ['GPT-4', 'FHIR', 'Python', 'Snowflake'], build_speed: '5 days',
    impact: 'Saves clinicians 45 minutes per day on documentation review.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-1', 'hc-4'], size: 1.0
  },
  {
    id: 'hc-3', title: 'Referral & Prior Auth Agent', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'An AI agent that automates referral submissions and prior authorization workflows — navigating payer portals and tracking approval status in real time.',
    stack: ['AI Agents', 'RPA', 'FHIR', 'Node.js'], build_speed: '2 weeks',
    impact: 'Cuts prior auth turnaround from 5 days to same-day for 80% of requests.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-1', 'hc-5'], size: 1.1
  },
  {
    id: 'hc-4', title: 'Patient Risk Scoring', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'Predictive risk model that scores patients for readmission, chronic disease progression, and no-show probability using EHR and claims data.',
    stack: ['Python', 'Scikit-learn', 'Snowflake', 'D3.js'], build_speed: '2 weeks',
    impact: 'Identifies high-risk patients 30 days earlier, enabling proactive intervention.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-2', 'hc-6'], size: 1.0
  },
  {
    id: 'hc-5', title: 'Revenue Cycle Intelligence', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'AI dashboard that identifies claim denials, underpayments, and billing anomalies — surfacing revenue recovery opportunities across the revenue cycle.',
    stack: ['React', 'Python', 'OpenAI', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Recovers 8-12% of lost revenue from missed billing and denial patterns.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-3', 'fi-4'], size: 1.1
  },
  {
    id: 'hc-6', title: 'Appointment Scheduling AI', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'Intelligent scheduling assistant that optimizes provider calendars, reduces gaps, and handles patient rebooking via SMS and voice.',
    stack: ['Twilio', 'OpenAI', 'React', 'Node.js'], build_speed: '5 days',
    impact: 'Reduces no-shows by 35% and increases schedule utilization to 94%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-4', 'hc-1'], size: 0.9
  },
  {
    id: 'hc-7', title: 'Medical Coding Assistant', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'AI copilot for medical coders that suggests ICD-10, CPT, and HCPCS codes from clinical documentation — with confidence scores and audit trails.',
    stack: ['NLP', 'GPT-4', 'Python', 'REST API'], build_speed: '2 weeks',
    impact: 'Improves coding accuracy to 97% and accelerates coder throughput by 3x.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-5', 'hc-2'], size: 0.9
  },

  // ── REAL ESTATE (7) ──
  {
    id: 're-1', title: 'Property Valuation Engine', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'AI-driven comparative market analysis that values residential and commercial properties using MLS data, market trends, and neighborhood intelligence.',
    stack: ['Python', 'MLS API', 'React', 'Mapbox'], build_speed: '1 week',
    impact: 'Delivers instant, data-backed valuations that match appraiser estimates within 3%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-2', 're-3'], size: 1.3
  },
  {
    id: 're-2', title: 'Listing Description Generator', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'Generates MLS-ready property descriptions from photos and property data — matching brokerage voice and highlighting key selling features.',
    stack: ['GPT-4', 'Vision API', 'React', 'Node.js'], build_speed: '48 hours',
    impact: 'Cuts listing prep time by 70% while increasing click-through rates 25%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-1', 're-4'], size: 0.9
  },
  {
    id: 're-3', title: 'Lead Nurture Sequencer', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'Automated drip campaigns with AI-personalized messaging for buyer and seller leads — triggered by behavior signals and market events.',
    stack: ['AI Agents', 'Twilio', 'OpenAI', 'Supabase'], build_speed: '5 days',
    impact: 'Increases lead-to-appointment conversion rate by 40% with zero manual follow-up.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-1', 're-5'], size: 1.0
  },
  {
    id: 're-4', title: 'Virtual Staging AI', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'AI-powered virtual staging that transforms empty room photos into beautifully furnished spaces — customizable by style, room type, and buyer persona.',
    stack: ['Stable Diffusion', 'React', 'Python', 'S3'], build_speed: '1 week',
    impact: 'Saves $2-5K per listing on physical staging with 90% buyer satisfaction.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-2', 're-6'], size: 1.0
  },
  {
    id: 're-5', title: 'Rental Market Analyzer', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'Analyzes rental comps, vacancy rates, and neighborhood demand signals to recommend optimal rent pricing and investment timing.',
    stack: ['Python', 'PostgreSQL', 'D3.js', 'React'], build_speed: '5 days',
    impact: 'Optimizes rental pricing within 2% of market maximum, reducing vacancy days by 40%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-3', 'pm-1'], size: 0.9
  },
  {
    id: 're-6', title: 'Open House Intelligence', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'Digital sign-in with AI lead scoring that captures visitor data, matches buyer intent signals, and triggers personalized follow-up sequences.',
    stack: ['React', 'OpenAI', 'Twilio', 'Supabase'], build_speed: '48 hours',
    impact: 'Converts 3x more open house visitors into qualified buyer leads.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-4', 're-3'], size: 0.85
  },
  {
    id: 're-7', title: 'Transaction Coordinator Bot', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'AI assistant that manages transaction timelines, document checklists, and stakeholder communication from contract to close.',
    stack: ['AI Agents', 'DocuSign API', 'Node.js', 'React'], build_speed: '1 week',
    impact: 'Reduces transaction coordination overhead by 50% with zero missed deadlines.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-1', 're-5'], size: 0.9
  },

  // ── FINANCIAL SERVICES (7) ──
  {
    id: 'fi-1', title: 'Portfolio Risk Analyzer', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'Real-time portfolio risk assessment using Monte Carlo simulations, stress testing, and AI-generated scenario analysis for wealth advisors.',
    stack: ['Python', 'React', 'D3.js', 'OpenAI'], build_speed: '2 weeks',
    impact: 'Enables advisors to stress-test portfolios in seconds vs. hours with legacy tools.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-2', 'fi-3'], size: 1.3
  },
  {
    id: 'fi-2', title: 'Fraud Detection Engine', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'Machine learning model that detects anomalous transactions in real time — flagging potential fraud with explainable AI reasoning for compliance review.',
    stack: ['Python', 'TensorFlow', 'Kafka', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Catches 94% of fraudulent transactions with 70% fewer false positives.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-1', 'fi-4'], size: 1.1
  },
  {
    id: 'fi-3', title: 'Client Onboarding Accelerator', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'Automates KYC/AML checks, document verification, and account setup — reducing new client onboarding from weeks to hours.',
    stack: ['OCR', 'OpenAI', 'React', 'Node.js'], build_speed: '1 week',
    impact: 'Reduces onboarding time by 80% while maintaining full regulatory compliance.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-1', 'in-2'], size: 1.0
  },
  {
    id: 'fi-4', title: 'Revenue Forecasting Dashboard', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'AI-powered revenue forecasting that combines historical data, pipeline signals, and market indicators into executive-ready projections.',
    stack: ['React', 'D3.js', 'Python', 'Snowflake'], build_speed: '1 week',
    impact: 'Improves forecast accuracy to within 5% of actuals, up from 20% variance.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-2', 'hc-5'], size: 1.0
  },
  {
    id: 'fi-5', title: 'Loan Underwriting Copilot', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'AI assistant that analyzes borrower financials, credit data, and property appraisals to generate underwriting recommendations with risk narratives.',
    stack: ['GPT-4', 'Python', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Accelerates underwriting decisions by 60% while improving consistency.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-3', 'fi-6'], size: 1.0
  },
  {
    id: 'fi-6', title: 'Compliance Document Analyzer', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'Scans regulatory filings, contracts, and policies to flag compliance gaps, upcoming deadlines, and required disclosures.',
    stack: ['NLP', 'OpenAI', 'Python', 'React'], build_speed: '1 week',
    impact: 'Reduces compliance review time by 75% and catches 95% of regulatory gaps.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-5', 'le-1'], size: 0.9
  },
  {
    id: 'fi-7', title: 'Wealth Advisor Chatbot', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'AI chatbot for financial advisors that answers client portfolio questions, surfaces market insights, and drafts personalized investment summaries.',
    stack: ['OpenAI', 'React', 'Node.js', 'Supabase'], build_speed: '5 days',
    impact: 'Handles 40% of routine client inquiries automatically, freeing advisor time.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-1', 'fi-4'], size: 0.85
  },

  // ── LEGAL (6) ──
  {
    id: 'le-1', title: 'Contract Review Agent', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'AI agent that reviews contracts for risk clauses, non-standard terms, and missing provisions — generating redline suggestions with legal reasoning.',
    stack: ['GPT-4', 'Python', 'React', 'DocuSign'], build_speed: '2 weeks',
    impact: 'Reduces contract review time from 4 hours to 15 minutes per document.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-2', 'fi-6'], size: 1.2
  },
  {
    id: 'le-2', title: 'Legal Research Assistant', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'AI-powered case law research that finds relevant precedents, summarizes holdings, and drafts memo sections — trained on jurisdiction-specific data.',
    stack: ['NLP', 'OpenAI', 'Python', 'Elasticsearch'], build_speed: '2 weeks',
    impact: 'Cuts legal research time by 70% while surfacing more relevant precedents.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-1', 'le-3'], size: 1.1
  },
  {
    id: 'le-3', title: 'Intake & Matter Triage', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'Automated client intake with AI-driven matter classification, conflict checking, and attorney assignment based on expertise and capacity.',
    stack: ['React', 'OpenAI', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Processes new matters 5x faster with intelligent routing to the right attorney.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-2', 'le-4'], size: 0.9
  },
  {
    id: 'le-4', title: 'Billing & Time Entry AI', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'Smart time capture that learns attorney work patterns and auto-generates billing entries from calendar, email, and document activity.',
    stack: ['OpenAI', 'Python', 'React', 'REST API'], build_speed: '1 week',
    impact: 'Recovers 15-20% of unbilled time through intelligent capture and prompting.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-3', 'le-1'], size: 0.9
  },
  {
    id: 'le-5', title: 'eDiscovery Classifier', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'Machine learning model that classifies, prioritizes, and tags documents for eDiscovery review — reducing manual document review by orders of magnitude.',
    stack: ['Python', 'NLP', 'Elasticsearch', 'React'], build_speed: '2 weeks',
    impact: 'Reduces document review costs by 60-80% on large litigation matters.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-2', 'le-4'], size: 1.0
  },
  {
    id: 'le-6', title: 'Court Deadline Tracker', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'AI system that parses court orders and rules to calculate filing deadlines, send reminders, and flag conflicts across the firm calendar.',
    stack: ['NLP', 'Node.js', 'React', 'Twilio'], build_speed: '5 days',
    impact: 'Eliminates missed deadlines and reduces calendaring errors to near zero.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-3', 'le-5'], size: 0.85
  },

  // ── CONSTRUCTION (6) ──
  {
    id: 'co-1', title: 'Bid Estimation Engine', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'AI-powered bid estimation that analyzes blueprints, material costs, labor rates, and historical project data to generate accurate proposals in minutes.',
    stack: ['Vision API', 'Python', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Reduces bid preparation time by 75% while improving estimate accuracy to within 5%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-2', 'co-3'], size: 1.2
  },
  {
    id: 'co-2', title: 'Jobsite Safety Monitor', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'Computer vision system that monitors jobsite cameras for PPE compliance, hazardous conditions, and safety protocol violations in real time.',
    stack: ['YOLO', 'Python', 'React', 'Edge Compute'], build_speed: '2 weeks',
    impact: 'Reduces safety incidents by 45% and ensures OSHA compliance on every jobsite.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-1', 'co-4'], size: 1.1
  },
  {
    id: 'co-3', title: 'Subcontractor Matcher', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'AI matching system that pairs projects with qualified subcontractors based on trade, availability, proximity, insurance status, and past performance.',
    stack: ['OpenAI', 'React', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Fills sub positions 60% faster with 30% better performance outcomes.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-1', 'co-5'], size: 1.0
  },
  {
    id: 'co-4', title: 'Project Timeline Optimizer', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'AI scheduler that optimizes construction timelines by analyzing weather, supply chain, crew availability, and dependency chains across project phases.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces average project delays by 30% through predictive scheduling.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-2', 'co-6'], size: 0.9
  },
  {
    id: 'co-5', title: 'Material Cost Tracker', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'Real-time material price intelligence that tracks lumber, steel, concrete, and supply chain costs — alerting PMs to price spikes and bulk-buy windows.',
    stack: ['Python', 'Web Scraping', 'React', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Saves 8-15% on material costs through smarter procurement timing.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-3', 'co-1'], size: 0.85
  },
  {
    id: 'co-6', title: 'Punch List Automator', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'Mobile AI tool that generates punch lists from jobsite photos — identifying defects, categorizing by trade, and assigning corrections automatically.',
    stack: ['Vision API', 'React Native', 'Node.js', 'S3'], build_speed: '1 week',
    impact: 'Cuts punch list creation time by 80% with more comprehensive defect capture.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-4', 'co-2'], size: 0.9
  },

  // ── RECRUITING / STAFFING (6) ──
  {
    id: 'rc-1', title: 'Resume Screening Agent', category: 'recruiting',
    categoryLabel: 'Recruiting / Staffing', industry: 'Recruiting / Staffing',
    description: 'AI agent that screens, scores, and ranks candidates against job requirements — parsing resumes, LinkedIn profiles, and portfolio links at scale.',
    stack: ['NLP', 'OpenAI', 'Python', 'React'], build_speed: '1 week',
    impact: 'Screens 500+ resumes in minutes with 90% alignment to hiring manager preferences.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['rc-2', 'rc-3'], size: 1.2
  },
  {
    id: 'rc-2', title: 'Interview Prep Copilot', category: 'recruiting',
    categoryLabel: 'Recruiting / Staffing', industry: 'Recruiting / Staffing',
    description: 'Generates role-specific interview questions, evaluation rubrics, and structured scorecards tailored to the job description and candidate profile.',
    stack: ['GPT-4', 'React', 'Node.js', 'Supabase'], build_speed: '5 days',
    impact: 'Improves interview consistency and reduces time-to-hire by 25%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['rc-1', 'rc-4'], size: 0.9
  },
  {
    id: 'rc-3', title: 'Candidate Outreach Sequencer', category: 'recruiting',
    categoryLabel: 'Recruiting / Staffing', industry: 'Recruiting / Staffing',
    description: 'AI-personalized outreach campaigns that craft unique messages for each candidate based on their background, interests, and career trajectory.',
    stack: ['OpenAI', 'Twilio', 'Node.js', 'React'], build_speed: '5 days',
    impact: 'Increases candidate response rates by 3x over generic InMail templates.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['rc-1', 'rc-5'], size: 1.0
  },
  {
    id: 'rc-4', title: 'Skills Gap Analyzer', category: 'recruiting',
    categoryLabel: 'Recruiting / Staffing', industry: 'Recruiting / Staffing',
    description: 'Maps workforce competencies against current and future role requirements — identifying skills gaps and recommending upskilling paths.',
    stack: ['Python', 'React', 'D3.js', 'OpenAI'], build_speed: '1 week',
    impact: 'Enables proactive workforce planning and reduces external hiring costs by 20%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['rc-2', 'rc-6'], size: 0.9
  },
  {
    id: 'rc-5', title: 'Placement Match Engine', category: 'recruiting',
    categoryLabel: 'Recruiting / Staffing', industry: 'Recruiting / Staffing',
    description: 'AI matching algorithm that pairs candidates with open positions based on skills, culture fit, compensation expectations, and commute preferences.',
    stack: ['Python', 'OpenAI', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Improves placement success rate by 35% and reduces 90-day turnover.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['rc-3', 'rc-1'], size: 1.0
  },
  {
    id: 'rc-6', title: 'Onboarding Workflow Builder', category: 'recruiting',
    categoryLabel: 'Recruiting / Staffing', industry: 'Recruiting / Staffing',
    description: 'Generates customized onboarding checklists, training schedules, and stakeholder introductions based on role, department, and seniority.',
    stack: ['OpenAI', 'React', 'Node.js', 'Supabase'], build_speed: '48 hours',
    impact: 'Reduces time-to-productivity for new hires by 40% with structured onboarding.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['rc-4', 'rc-2'], size: 0.85
  },

  // ── INSURANCE (6) ──
  {
    id: 'in-1', title: 'Claims Processing Agent', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'AI agent that ingests claims documents, extracts key fields, validates coverage, and routes to the appropriate adjuster with a recommended disposition.',
    stack: ['OCR', 'GPT-4', 'Python', 'React'], build_speed: '2 weeks',
    impact: 'Processes 70% of standard claims automatically with 95% accuracy.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-2', 'in-3'], size: 1.2
  },
  {
    id: 'in-2', title: 'Underwriting Risk Model', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'Machine learning model that assesses applicant risk profiles using demographic, behavioral, and third-party data — generating quotes with confidence intervals.',
    stack: ['Python', 'XGBoost', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Improves loss ratios by 12% through more precise risk segmentation.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-1', 'fi-3'], size: 1.1
  },
  {
    id: 'in-3', title: 'Policy Renewal Predictor', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'Predictive model that identifies policies at risk of non-renewal and triggers proactive retention campaigns with personalized offers.',
    stack: ['Python', 'Scikit-learn', 'React', 'Twilio'], build_speed: '1 week',
    impact: 'Increases renewal rates by 18% through early intervention on at-risk accounts.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-1', 'in-4'], size: 1.0
  },
  {
    id: 'in-4', title: 'Damage Assessment Vision', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'Computer vision system that analyzes photos of vehicle and property damage to estimate repair costs and validate claim severity.',
    stack: ['Vision API', 'Python', 'React', 'S3'], build_speed: '2 weeks',
    impact: 'Reduces adjuster field visits by 50% and accelerates claim resolution by 3 days.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-3', 'in-5'], size: 1.0
  },
  {
    id: 'in-5', title: 'Agent Commission Tracker', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'Automated commission calculation and reconciliation system that handles complex split structures, overrides, and bonus tiers across carrier appointments.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'D3.js'], build_speed: '1 week',
    impact: 'Eliminates commission calculation errors and reduces processing time by 80%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-4', 'in-1'], size: 0.85
  },
  {
    id: 'in-6', title: 'Policy Document Q&A Bot', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'RAG-powered chatbot that answers policyholder questions by searching policy documents, endorsements, and coverage summaries in natural language.',
    stack: ['RAG', 'OpenAI', 'Pinecone', 'React'], build_speed: '1 week',
    impact: 'Deflects 45% of call center volume with instant, accurate policy answers.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-2', 'in-3'], size: 0.9
  },

  // ── MARKETING AGENCY (6) ──
  {
    id: 'ma-1', title: 'Campaign Performance AI', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'Multi-channel campaign analytics with AI-generated insights, anomaly detection, and automated optimization recommendations across paid and organic channels.',
    stack: ['Python', 'React', 'D3.js', 'Google Ads API'], build_speed: '1 week',
    impact: 'Improves ROAS by 30% through real-time AI-driven campaign adjustments.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-2', 'ma-3'], size: 1.2
  },
  {
    id: 'ma-2', title: 'Content Generation Suite', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'AI writing platform that generates blog posts, social captions, email copy, and ad creatives — trained on brand voice and audience personas.',
    stack: ['GPT-4', 'React', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Produces 10x more content at 60% lower cost while maintaining brand consistency.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-1', 'ma-4'], size: 1.1
  },
  {
    id: 'ma-3', title: 'SEO Intelligence Platform', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'AI-driven SEO tool that identifies keyword opportunities, generates content briefs, and tracks rankings against competitor domains.',
    stack: ['Python', 'React', 'OpenAI', 'REST APIs'], build_speed: '1 week',
    impact: 'Increases organic traffic by 45% within 90 days of implementation.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-1', 'ma-5'], size: 1.0
  },
  {
    id: 'ma-4', title: 'Social Media Scheduler', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'AI-optimized social posting platform that determines best times, generates hashtags, and A/B tests creative variations across platforms.',
    stack: ['OpenAI', 'React', 'Node.js', 'Social APIs'], build_speed: '5 days',
    impact: 'Doubles engagement rates with AI-optimized posting cadence and content.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-2', 'ma-6'], size: 0.9
  },
  {
    id: 'ma-5', title: 'Client Reporting Dashboard', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'Automated client reporting that pulls data from Google Analytics, Meta, LinkedIn, and CRM — generating executive summaries with AI narrative.',
    stack: ['React', 'D3.js', 'OpenAI', 'REST APIs'], build_speed: '5 days',
    impact: 'Saves 8 hours per client per month on report creation and delivery.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-3', 'ma-1'], size: 0.9
  },
  {
    id: 'ma-6', title: 'Audience Segmentation AI', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'Clusters audience data into actionable segments using behavioral, demographic, and psychographic signals — enabling hyper-targeted campaign strategies.',
    stack: ['Python', 'Scikit-learn', 'React', 'BigQuery'], build_speed: '1 week',
    impact: 'Improves ad targeting precision by 40% and reduces cost per acquisition.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-4', 'ma-2'], size: 0.85
  },

  // ── eCOMMERCE / RETAIL (6) ──
  {
    id: 'ec-1', title: 'Product Recommendation Engine', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'AI-driven product recommendations using collaborative filtering, purchase history, and browsing behavior — personalized for each shopper in real time.',
    stack: ['Python', 'TensorFlow', 'React', 'Redis'], build_speed: '2 weeks',
    impact: 'Increases average order value by 25% and cross-sell conversion by 40%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-2', 'ec-3'], size: 1.2
  },
  {
    id: 'ec-2', title: 'Inventory Demand Forecaster', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'Predictive inventory management that forecasts demand by SKU, channel, and season — optimizing reorder points and preventing stockouts.',
    stack: ['Python', 'Prophet', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces stockouts by 60% and overstock waste by 35%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-1', 'ec-4'], size: 1.1
  },
  {
    id: 'ec-3', title: 'Dynamic Pricing Engine', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'AI pricing optimizer that adjusts product prices based on demand, competition, inventory levels, and margin targets — in real time across channels.',
    stack: ['Python', 'React', 'REST APIs', 'Redis'], build_speed: '2 weeks',
    impact: 'Increases gross margins by 8-12% through intelligent price optimization.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-1', 'ec-5'], size: 1.0
  },
  {
    id: 'ec-4', title: 'Customer Churn Predictor', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'Machine learning model that predicts customer churn risk and triggers automated retention campaigns with personalized offers and win-back incentives.',
    stack: ['Python', 'XGBoost', 'React', 'Twilio'], build_speed: '1 week',
    impact: 'Retains 20% more at-risk customers through proactive intervention.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-2', 'ec-6'], size: 0.9
  },
  {
    id: 'ec-5', title: 'Product Description Writer', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'AI copywriter that generates SEO-optimized product descriptions, bullet points, and metadata from product photos and specs — at catalog scale.',
    stack: ['GPT-4', 'Vision API', 'React', 'Node.js'], build_speed: '5 days',
    impact: 'Produces 1,000+ product descriptions per day with 95% publish-ready quality.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-3', 'ma-2'], size: 0.9
  },
  {
    id: 'ec-6', title: 'Returns & Refund Analyzer', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'Analyzes return patterns to identify product quality issues, sizing problems, and fraudulent return behavior — with automated policy recommendations.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces return rate by 15% and identifies return fraud patterns early.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-4', 'ec-1'], size: 0.85
  },

  // ── PROPERTY MANAGEMENT (5) ──
  {
    id: 'pm-1', title: 'Tenant Screening Intelligence', category: 'realestate',
    categoryLabel: 'Property Mgmt', industry: 'Property Management',
    description: 'AI-powered tenant screening that aggregates credit, criminal, rental history, and income verification into a single risk score with explanation.',
    stack: ['Python', 'OpenAI', 'React', 'REST APIs'], build_speed: '1 week',
    impact: 'Reduces bad tenant placement by 50% and screens applications in under 5 minutes.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['pm-2', 're-5'], size: 1.0
  },
  {
    id: 'pm-2', title: 'Maintenance Request Router', category: 'realestate',
    categoryLabel: 'Property Mgmt', industry: 'Property Management',
    description: 'AI triage system that classifies maintenance requests by urgency, assigns vendors, and provides tenants with real-time status updates.',
    stack: ['NLP', 'React', 'Node.js', 'Twilio'], build_speed: '5 days',
    impact: 'Resolves maintenance requests 40% faster with intelligent vendor matching.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['pm-1', 'pm-3'], size: 0.9
  },
  {
    id: 'pm-3', title: 'Lease Renewal Optimizer', category: 'realestate',
    categoryLabel: 'Property Mgmt', industry: 'Property Management',
    description: 'Predicts lease renewal likelihood and recommends optimal rent adjustments based on tenant history, market comps, and vacancy cost analysis.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Increases renewal rates by 22% while optimizing rent to market maximum.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['pm-2', 'pm-4'], size: 0.9
  },
  {
    id: 'pm-4', title: 'Property Expense Tracker', category: 'realestate',
    categoryLabel: 'Property Mgmt', industry: 'Property Management',
    description: 'AI-categorized expense tracking with receipt OCR, vendor analytics, and budget variance alerts across single or multi-property portfolios.',
    stack: ['OCR', 'React', 'Python', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Automates 90% of expense categorization and surfaces budget overruns in real time.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['pm-3', 'pm-1'], size: 0.85
  },
  {
    id: 'pm-5', title: 'Vacancy Marketing Automator', category: 'realestate',
    categoryLabel: 'Property Mgmt', industry: 'Property Management',
    description: 'Auto-generates listing descriptions, syndicates to rental platforms, and manages showing schedules when units become available.',
    stack: ['OpenAI', 'React', 'Node.js', 'REST APIs'], build_speed: '5 days',
    impact: 'Reduces average vacancy period by 12 days with automated listing syndication.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['pm-2', 're-2'], size: 0.85
  },

  // ── AUTOMOTIVE (5) ──
  {
    id: 'au-1', title: 'Vehicle Appraisal AI', category: 'automotive',
    categoryLabel: 'Automotive', industry: 'Automotive',
    description: 'AI-driven vehicle valuation using VIN decode, condition assessment photos, market comps, and depreciation modeling for trade-ins and purchases.',
    stack: ['Vision API', 'Python', 'React', 'REST APIs'], build_speed: '1 week',
    impact: 'Delivers trade-in appraisals within 2% of wholesale value in under 60 seconds.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['au-2', 'au-3'], size: 1.1
  },
  {
    id: 'au-2', title: 'Service Advisor Copilot', category: 'automotive',
    categoryLabel: 'Automotive', industry: 'Automotive',
    description: 'AI assistant for service advisors that recommends maintenance packages, upsells based on vehicle history, and generates customer-friendly repair explanations.',
    stack: ['OpenAI', 'React', 'Node.js', 'REST APIs'], build_speed: '5 days',
    impact: 'Increases service ticket revenue by 20% with AI-recommended maintenance packages.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['au-1', 'au-4'], size: 0.9
  },
  {
    id: 'au-3', title: 'Inventory Turn Optimizer', category: 'automotive',
    categoryLabel: 'Automotive', industry: 'Automotive',
    description: 'Analyzes lot inventory age, market demand, and pricing trends to recommend price reductions, marketing boosts, and auction timing.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces average days-on-lot by 15 and improves gross profit per unit.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['au-1', 'au-5'], size: 1.0
  },
  {
    id: 'au-4', title: 'Customer Follow-Up Agent', category: 'automotive',
    categoryLabel: 'Automotive', industry: 'Automotive',
    description: 'AI agent that manages post-sale and post-service follow-up via personalized text and email — driving reviews, referrals, and repeat visits.',
    stack: ['AI Agents', 'Twilio', 'OpenAI', 'Node.js'], build_speed: '5 days',
    impact: 'Increases customer retention by 25% and online review generation by 4x.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['au-2', 'au-3'], size: 0.85
  },
  {
    id: 'au-5', title: 'F&I Document Generator', category: 'automotive',
    categoryLabel: 'Automotive', industry: 'Automotive',
    description: 'Automated finance and insurance document preparation that generates compliant paperwork from deal data — reducing F&I processing from 90 to 15 minutes.',
    stack: ['OpenAI', 'React', 'Node.js', 'DocuSign'], build_speed: '1 week',
    impact: 'Cuts F&I processing time by 80% and reduces compliance errors to near zero.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['au-3', 'au-1'], size: 0.9
  },

  // ── HVAC / HOME SERVICES (5) ──
  {
    id: 'hv-1', title: 'Smart Dispatch Optimizer', category: 'hvac',
    categoryLabel: 'HVAC / Home Services', industry: 'HVAC / Home Services',
    description: 'AI-powered dispatch that optimizes technician routes, assigns jobs by skill and proximity, and minimizes drive time across the service area.',
    stack: ['Mapbox', 'Python', 'React', 'Node.js'], build_speed: '1 week',
    impact: 'Increases daily job completion by 25% while reducing fuel costs by 30%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hv-2', 'hv-3'], size: 1.1
  },
  {
    id: 'hv-2', title: 'Service Estimate Generator', category: 'hvac',
    categoryLabel: 'HVAC / Home Services', industry: 'HVAC / Home Services',
    description: 'On-site estimate tool that uses equipment photos and system specs to generate accurate repair and replacement quotes with good-better-best options.',
    stack: ['Vision API', 'React', 'OpenAI', 'Node.js'], build_speed: '5 days',
    impact: 'Increases close rate by 35% with professional, AI-generated estimates on the spot.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hv-1', 'hv-4'], size: 1.0
  },
  {
    id: 'hv-3', title: 'Preventive Maintenance Alerts', category: 'hvac',
    categoryLabel: 'HVAC / Home Services', industry: 'HVAC / Home Services',
    description: 'AI system that tracks equipment install dates, warranty periods, and seasonal patterns to trigger proactive maintenance outreach to homeowners.',
    stack: ['Python', 'Twilio', 'React', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Generates 40% more maintenance agreement revenue through proactive outreach.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hv-1', 'hv-5'], size: 0.9
  },
  {
    id: 'hv-4', title: 'Review & Reputation Manager', category: 'hvac',
    categoryLabel: 'HVAC / Home Services', industry: 'HVAC / Home Services',
    description: 'Automated post-service review requests with AI-generated responses to online reviews — managing reputation across Google, Yelp, and Nextdoor.',
    stack: ['OpenAI', 'Node.js', 'React', 'REST APIs'], build_speed: '48 hours',
    impact: 'Doubles review volume and maintains 4.8+ star average across platforms.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hv-2', 'hv-3'], size: 0.85
  },
  {
    id: 'hv-5', title: 'Energy Audit Calculator', category: 'hvac',
    categoryLabel: 'HVAC / Home Services', industry: 'HVAC / Home Services',
    description: 'AI tool that estimates home energy efficiency from utility bills and property data — generating upgrade recommendations with projected savings.',
    stack: ['Python', 'React', 'OpenAI', 'D3.js'], build_speed: '5 days',
    impact: 'Converts 50% of audit leads into high-ticket HVAC upgrade projects.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hv-3', 'hv-1'], size: 0.9
  },

  // ── CONSULTING (5) ──
  {
    id: 'cn-1', title: 'Engagement Scoping Agent', category: 'consulting',
    categoryLabel: 'Consulting', industry: 'Consulting',
    description: 'AI agent that drafts engagement scopes, estimates, and timelines from initial client conversations — pulling from templates and historical project data.',
    stack: ['GPT-4', 'React', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Reduces proposal creation time by 70% with data-driven scope accuracy.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cn-2', 'cn-3'], size: 1.1
  },
  {
    id: 'cn-2', title: 'Knowledge Base Builder', category: 'consulting',
    categoryLabel: 'Consulting', industry: 'Consulting',
    description: 'RAG-powered internal knowledge system that indexes deliverables, frameworks, and lessons learned — making institutional knowledge searchable and reusable.',
    stack: ['RAG', 'Pinecone', 'OpenAI', 'React'], build_speed: '1 week',
    impact: 'Reduces reinvention by 50% and accelerates junior consultant ramp-up.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cn-1', 'cn-4'], size: 1.0
  },
  {
    id: 'cn-3', title: 'Utilization Dashboard', category: 'consulting',
    categoryLabel: 'Consulting', industry: 'Consulting',
    description: 'Real-time consultant utilization tracking with AI-forecasted capacity, bench alerts, and staffing recommendations across practice areas.',
    stack: ['React', 'D3.js', 'Python', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Improves utilization rates by 15% through smarter staffing allocation.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cn-1', 'cn-5'], size: 0.9
  },
  {
    id: 'cn-4', title: 'Deliverable Quality Checker', category: 'consulting',
    categoryLabel: 'Consulting', industry: 'Consulting',
    description: 'AI reviewer that checks slide decks, reports, and analyses against firm quality standards, brand guidelines, and factual consistency.',
    stack: ['GPT-4', 'Python', 'React', 'Node.js'], build_speed: '5 days',
    impact: 'Catches 90% of quality issues before client delivery, reducing rework.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cn-2', 'cn-3'], size: 0.85
  },
  {
    id: 'cn-5', title: 'Client Health Scorecard', category: 'consulting',
    categoryLabel: 'Consulting', industry: 'Consulting',
    description: 'AI-generated client health scores based on engagement signals, NPS, delivery metrics, and communication patterns — with early warning alerts.',
    stack: ['Python', 'React', 'OpenAI', 'D3.js'], build_speed: '1 week',
    impact: 'Identifies at-risk clients 30 days earlier, improving retention by 20%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cn-3', 'cn-1'], size: 0.9
  },

  // ── EDUCATION (5) ──
  {
    id: 'ed-1', title: 'Adaptive Learning Engine', category: 'education',
    categoryLabel: 'Education', industry: 'Education',
    description: 'AI-powered learning platform that adjusts lesson difficulty, pacing, and content based on individual student performance and learning style.',
    stack: ['GPT-4', 'React', 'Python', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Improves student outcomes by 30% through personalized learning paths.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ed-2', 'ed-3'], size: 1.1
  },
  {
    id: 'ed-2', title: 'Enrollment Predictor', category: 'education',
    categoryLabel: 'Education', industry: 'Education',
    description: 'Predictive model for enrollment management that forecasts applicant yield, identifies at-risk admits, and optimizes financial aid allocation.',
    stack: ['Python', 'Scikit-learn', 'React', 'D3.js'], build_speed: '1 week',
    impact: 'Improves enrollment yield by 15% through data-driven aid packaging.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ed-1', 'ed-4'], size: 1.0
  },
  {
    id: 'ed-3', title: 'Curriculum Mapping AI', category: 'education',
    categoryLabel: 'Education', industry: 'Education',
    description: 'AI tool that maps curriculum to learning standards, identifies gaps, and suggests content alignment — supporting accreditation and assessment design.',
    stack: ['NLP', 'OpenAI', 'React', 'Node.js'], build_speed: '1 week',
    impact: 'Reduces curriculum review cycles from months to days with comprehensive mapping.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ed-1', 'ed-5'], size: 0.9
  },
  {
    id: 'ed-4', title: 'Student Success Alerts', category: 'education',
    categoryLabel: 'Education', industry: 'Education',
    description: 'Early warning system that identifies struggling students using attendance, grade, and engagement signals — triggering advisor outreach and support resources.',
    stack: ['Python', 'React', 'Twilio', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Reduces dropout rates by 25% through proactive intervention.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ed-2', 'ed-3'], size: 0.9
  },
  {
    id: 'ed-5', title: 'AI Tutoring Assistant', category: 'education',
    categoryLabel: 'Education', industry: 'Education',
    description: 'Conversational AI tutor that helps students with homework, explains concepts in multiple ways, and tracks mastery progression by subject.',
    stack: ['GPT-4', 'React', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Provides 24/7 tutoring access and improves test scores by an average of 20%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ed-3', 'ed-1'], size: 0.85
  }
];

// ─────────────────────────────────────────────
// CATEGORY COLORS — BY INDUSTRY
// ─────────────────────────────────────────────
const CAT_COLORS = {
  healthcare:   { fill: '#10b981', glow: 'rgba(16,185,129,0.4)',   dim: 'rgba(16,185,129,0.15)' },
  realestate:   { fill: '#3b82f6', glow: 'rgba(59,130,246,0.4)',   dim: 'rgba(59,130,246,0.15)' },
  finance:      { fill: '#22d3ee', glow: 'rgba(34,211,238,0.4)',   dim: 'rgba(34,211,238,0.15)' },
  legal:        { fill: '#8b5cf6', glow: 'rgba(139,92,246,0.4)',   dim: 'rgba(139,92,246,0.15)' },
  construction: { fill: '#f59e0b', glow: 'rgba(245,158,11,0.4)',   dim: 'rgba(245,158,11,0.15)' },
  recruiting:   { fill: '#ec4899', glow: 'rgba(236,72,153,0.4)',   dim: 'rgba(236,72,153,0.15)' },
  insurance:    { fill: '#6366f1', glow: 'rgba(99,102,241,0.4)',   dim: 'rgba(99,102,241,0.15)' },
  marketing:    { fill: '#f43f5e', glow: 'rgba(244,63,94,0.4)',    dim: 'rgba(244,63,94,0.15)' },
  ecommerce:    { fill: '#14b8a6', glow: 'rgba(20,184,166,0.4)',   dim: 'rgba(20,184,166,0.15)' },
  hvac:         { fill: '#f97316', glow: 'rgba(249,115,22,0.4)',   dim: 'rgba(249,115,22,0.15)' },
  consulting:   { fill: '#0ea5e9', glow: 'rgba(14,165,233,0.4)',   dim: 'rgba(14,165,233,0.15)' },
  automotive:   { fill: '#a855f7', glow: 'rgba(168,85,247,0.4)',   dim: 'rgba(168,85,247,0.15)' },
  education:    { fill: '#84cc16', glow: 'rgba(132,204,22,0.4)',   dim: 'rgba(132,204,22,0.15)' },
};

// ─────────────────────────────────────────────
// NAV SCROLL EFFECT
// ─────────────────────────────────────────────
(function navScroll() {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
})();

// ─────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────
(function scrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-header, .velocity-card, .method-step, .filter-bar, .graph-legend, .portfolio-inner').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

// ─────────────────────────────────────────────
// HERO CANVAS — particle field
// ─────────────────────────────────────────────
(function heroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${p.opacity * 0.5})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59,130,246,${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); createParticles(); });
  resize();
  createParticles();
  draw();
})();

// ─────────────────────────────────────────────
// FORCE-DIRECTED NEURAL GRAPH
// ─────────────────────────────────────────────
(function neuralGraph() {
  const canvas = document.getElementById('graph-canvas');
  const ctx = canvas.getContext('2d');
  const container = document.getElementById('graph-container');
  const tooltip = document.getElementById('tooltip');
  const panel = document.getElementById('detail-panel');
  const overlay = document.getElementById('overlay');
  const panelClose = document.getElementById('panel-close');

  let W, H, nodes = [], edges = [], animFrame;
  let hoveredNode = null;
  let activeFilter = 'all';
  let mouse = { x: -999, y: -999 };

  function buildNodes() {
    const sorted = [...PROJECTS].sort((a, b) => (b.size || 1) - (a.size || 1));

    const cx = W / 2;
    const cy = H / 2;
    const nodeR = 16; // smaller base radius for more nodes

    // 5 concentric rings for ~75 nodes
    const rings = [
      { count: 6,  radius: Math.min(W, H) * 0.08 },
      { count: 10, radius: Math.min(W, H) * 0.17 },
      { count: 14, radius: Math.min(W, H) * 0.27 },
      { count: 18, radius: Math.min(W, H) * 0.37 },
      { count: sorted.length - 48, radius: Math.min(W, H) * 0.46 }
    ];

    let idx = 0;
    const positioned = [];

    rings.forEach(ring => {
      for (let i = 0; i < ring.count && idx < sorted.length; i++, idx++) {
        const p = sorted[idx];
        const angle = (i / ring.count) * Math.PI * 2 - Math.PI / 2;
        const jitter = (Math.random() - 0.5) * 15;
        positioned.push({
          project: p,
          x: cx + Math.cos(angle) * (ring.radius + jitter),
          y: cy + Math.sin(angle) * (ring.radius + jitter)
        });
      }
    });

    nodes = positioned.map(item => {
      const p = item.project;
      const col = CAT_COLORS[p.category] || CAT_COLORS.healthcare;
      return {
        ...p,
        x: item.x,
        y: item.y,
        targetX: item.x,
        targetY: item.y,
        vx: 0, vy: 0,
        r: (p.size || 1) * nodeR,
        color: col.fill,
        glow: col.glow,
        dim: col.dim,
        visible: true,
        pulsePhase: Math.random() * Math.PI * 2
      };
    });

    edges = [];
    PROJECTS.forEach(p => {
      p.connections.forEach(cid => {
        const src = nodes.find(n => n.id === p.id);
        const tgt = nodes.find(n => n.id === cid);
        if (src && tgt) {
          const exists = edges.find(e =>
            (e.src === src && e.tgt === tgt) || (e.src === tgt && e.tgt === src)
          );
          if (!exists) edges.push({ src, tgt, pulseOffset: Math.random() });
        }
      });
    });
  }

  function resize() {
    W = canvas.width = container.offsetWidth;
    H = canvas.height = container.offsetHeight;
    if (nodes.length === 0) buildNodes();
  }

  function simulate() {
    nodes.forEach(n => {
      if (!n.visible) return;
      let fx = 0, fy = 0;

      nodes.forEach(m => {
        if (m === n || !m.visible) return;
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const minDist = n.r + m.r + 30;

        if (dist < minDist) {
          const push = (minDist - dist) * 0.3;
          fx += (dx / dist) * push;
          fy += (dy / dist) * push;
        }
      });

      fx += (n.targetX - n.x) * 0.02;
      fy += (n.targetY - n.y) * 0.02;

      n.vx = (n.vx + fx) * 0.6;
      n.vy = (n.vy + fy) * 0.6;
      n.x += n.vx;
      n.y += n.vy;

      const pad = n.r + 20;
      if (n.x < pad) n.x = pad;
      if (n.x > W - pad) n.x = W - pad;
      if (n.y < pad) n.y = pad;
      if (n.y > H - pad) n.y = H - pad;
    });
  }

  function getNodeAtMouse() {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      if (!n.visible) continue;
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      if (Math.sqrt(dx * dx + dy * dy) < n.r + 4) return n;
    }
    return null;
  }

  function lightenColor(hex, amount) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${Math.min(255, r + amount)},${Math.min(255, g + amount)},${Math.min(255, b + amount)})`;
  }

  let tick = 0;
  function draw() {
    tick++;
    ctx.clearRect(0, 0, W, H);

    let highlightSet = new Set();
    if (hoveredNode) {
      highlightSet.add(hoveredNode.id);
      edges.forEach(e => {
        if (e.src === hoveredNode) highlightSet.add(e.tgt.id);
        if (e.tgt === hoveredNode) highlightSet.add(e.src.id);
      });
    }

    // Draw edges
    edges.forEach(e => {
      if (!e.src.visible || !e.tgt.visible) return;
      const isHighlighted = hoveredNode && (e.src === hoveredNode || e.tgt === hoveredNode);
      const opacity = hoveredNode ? (isHighlighted ? 0.7 : 0.04) : 0.12;

      if (isHighlighted) {
        const progress = ((tick * 0.01 + e.pulseOffset) % 1);
        const px = e.src.x + (e.tgt.x - e.src.x) * progress;
        const py = e.src.y + (e.tgt.y - e.src.y) * progress;

        ctx.beginPath();
        ctx.moveTo(e.src.x, e.src.y);
        ctx.lineTo(e.tgt.x, e.tgt.y);
        ctx.strokeStyle = `rgba(59,130,246,${opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59,130,246,0.9)';
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(e.src.x, e.src.y);
        ctx.lineTo(e.tgt.x, e.tgt.y);
        ctx.strokeStyle = `rgba(59,130,246,${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });

    // Draw nodes
    nodes.forEach(n => {
      if (!n.visible) return;
      const isHovered = n === hoveredNode;
      const isConnected = highlightSet.has(n.id);
      const isDimmed = hoveredNode && !isConnected;

      const pulse = Math.sin(tick * 0.02 + n.pulsePhase) * 0.5 + 0.5;
      const r = isHovered ? n.r * 1.15 : n.r;
      const alpha = isDimmed ? 0.2 : 1;

      ctx.save();
      ctx.globalAlpha = alpha;

      if (isHovered || isConnected) {
        const glowSize = isHovered ? r * 2.5 : r * 1.8;
        const grd = ctx.createRadialGradient(n.x, n.y, r * 0.3, n.x, n.y, glowSize);
        grd.addColorStop(0, n.glow);
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      if (isHovered) {
        const ringR = r + pulse * 10;
        ctx.beginPath();
        ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `${n.color}${Math.floor(pulse * 99).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      const grd = ctx.createRadialGradient(n.x - r * 0.3, n.y - r * 0.3, r * 0.1, n.x, n.y, r);
      grd.addColorStop(0, lightenColor(n.color, 40));
      grd.addColorStop(1, n.color);
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.strokeStyle = isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)';
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      // Draw label below the node
      const fontSize = Math.max(8, Math.min(10, r * 0.5));
      ctx.font = `600 ${fontSize}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = isDimmed ? 'rgba(17,17,17,0.15)' : 'rgba(17,17,17,0.8)';

      const labelY = n.y + r + 4;
      const words = n.title.split(' ');
      if (words.length <= 2) {
        ctx.fillText(n.title, n.x, labelY);
      } else {
        const mid = Math.ceil(words.length / 2);
        const line1 = words.slice(0, mid).join(' ');
        const line2 = words.slice(mid).join(' ');
        ctx.fillText(line1, n.x, labelY);
        ctx.fillText(line2, n.x, labelY + fontSize + 1);
      }

      ctx.restore();
    });

    simulate();
    animFrame = requestAnimationFrame(draw);
  }

  // Events
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    const node = getNodeAtMouse();
    if (node !== hoveredNode) {
      hoveredNode = node;
      canvas.style.cursor = node ? 'pointer' : 'crosshair';
    }
    if (node) {
      document.getElementById('tt-title').textContent = node.title;
      document.getElementById('tt-cat').textContent = node.categoryLabel;
      document.getElementById('tt-cat').style.color = node.color;
      document.getElementById('tt-desc').textContent = node.description.substring(0, 80) + '\u2026';
      document.getElementById('tt-build').textContent = '\u26A1 Built in ' + node.build_speed;
      tooltip.style.left = (e.clientX + 16) + 'px';
      tooltip.style.top = (e.clientY - 40) + 'px';
      tooltip.classList.add('visible');
    } else {
      tooltip.classList.remove('visible');
    }
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredNode = null;
    tooltip.classList.remove('visible');
  });

  canvas.addEventListener('click', () => {
    const node = getNodeAtMouse();
    if (node) openPanel(node);
  });

  function openPanel(node) {
    const col = CAT_COLORS[node.category] || CAT_COLORS.healthcare;
    document.getElementById('panel-content').innerHTML = `
      <div class="panel-category-badge" style="color:${col.fill};border-color:${col.fill}40;background:${col.dim}">
        ${node.categoryLabel}
      </div>
      <div class="panel-title">${node.title}</div>
      <div class="panel-industry">${node.industry}</div>
      <div class="panel-divider"></div>
      <div class="panel-section-label">About</div>
      <div class="panel-desc">${node.description}</div>
      <div class="panel-section-label">Technology Stack</div>
      <div class="stack-tags">
        ${node.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
      </div>
      <div class="meta-grid">
        <div class="meta-item">
          <div class="meta-item-label">Build Velocity</div>
          <div class="meta-item-value" style="color:${col.fill}">\u26A1 ${node.build_speed}</div>
        </div>
        <div class="meta-item">
          <div class="meta-item-label">Connections</div>
          <div class="meta-item-value">${node.connections.length} Systems</div>
        </div>
      </div>
      <div class="panel-section-label">Business Impact</div>
      <div class="panel-desc">${node.impact}</div>
      <div class="preview-placeholder">
        <div class="preview-icon">\u2B21</div>
        <div class="preview-label">AI Use Case \u2014 Ready to Build</div>
      </div>
      <div class="panel-buttons">
        <a href="${node.url}" target="_blank" rel="noopener noreferrer" class="panel-btn-primary">Build This \u2192</a>
        <a href="https://aisymmetricsolutions.com/#contact" target="_blank" rel="noopener noreferrer" class="panel-btn-ghost">Start a Conversation</a>
      </div>
    `;
    panel.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  panelClose.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

  // Shared filter function
  function applyFilter(filter) {
    activeFilter = filter;
    // Sync filter buttons
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    // Sync legend items
    document.querySelectorAll('.legend-item[data-filter]').forEach(item => {
      item.classList.toggle('active', item.dataset.filter === filter);
    });
    // Apply to nodes
    nodes.forEach(n => {
      n.visible = (filter === 'all' || n.category === filter);
    });
  }

  // Filter button clicks
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyFilter(btn.dataset.filter);
    });
  });

  // Legend item clicks — toggle: click same = show all, click different = filter
  document.querySelectorAll('.legend-item[data-filter]').forEach(item => {
    item.addEventListener('click', () => {
      const filter = item.dataset.filter;
      applyFilter(activeFilter === filter ? 'all' : filter);
    });
  });

  window.addEventListener('resize', resize);

  resize();
  buildNodes();
  draw();
})();

// ─────────────────────────────────────────────
// Smooth scroll for anchor links
// ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
