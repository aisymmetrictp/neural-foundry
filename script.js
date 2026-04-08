// ─────────────────────────────────────────────
// AI USE CASE DATA — BY INDUSTRY
// ─────────────────────────────────────────────
const PROJECTS = [
  // ── HEALTHCARE (9) ──
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
  {
    id: 'hc-8', title: 'Clinical Trial Matcher', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'AI engine that matches patients to eligible clinical trials by analyzing diagnoses, medications, and inclusion/exclusion criteria across trial registries.',
    stack: ['NLP', 'Python', 'FHIR', 'React'], build_speed: '2 weeks',
    impact: 'Increases trial enrollment by 40% and reduces screening time by 70%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-4', 'ph-1'], size: 0.95
  },
  {
    id: 'hc-9', title: 'Telehealth Triage Bot', category: 'healthcare',
    categoryLabel: 'Healthcare', industry: 'Healthcare',
    description: 'Conversational AI that conducts initial symptom assessments for telehealth visits, gathers history, and routes patients to the appropriate care level.',
    stack: ['GPT-4', 'Twilio', 'React', 'Node.js'], build_speed: '1 week',
    impact: 'Triages 60% of telehealth requests automatically, reducing provider burden.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hc-6', 'hc-1'], size: 0.9
  },

  // ── REAL ESTATE (9) ──
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
  {
    id: 're-8', title: 'Investment Property Scorer', category: 'realestate',
    categoryLabel: 'Real Estate', industry: 'Real Estate',
    description: 'AI model that scores investment properties on cap rate, cash-on-cash return, appreciation potential, and neighborhood growth indicators.',
    stack: ['Python', 'React', 'D3.js', 'Mapbox'], build_speed: '1 week',
    impact: 'Helps investors identify top 5% deals 10x faster than manual analysis.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['re-1', 're-5'], size: 0.9
  },

  // ── FINANCIAL SERVICES (9) ──
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
  {
    id: 'fi-8', title: 'Expense Anomaly Detector', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'ML model that scans corporate expense reports for policy violations, duplicate submissions, and suspicious spending patterns in real time.',
    stack: ['Python', 'XGBoost', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Flags 92% of policy violations automatically, saving 15 hours/week in audit time.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-2', 'cy-3'], size: 0.9
  },
  {
    id: 'fi-9', title: 'Regulatory Change Tracker', category: 'finance',
    categoryLabel: 'Financial Services', industry: 'Financial Services',
    description: 'AI system that monitors regulatory bodies for rule changes, maps impacts to internal policies, and generates compliance action items automatically.',
    stack: ['NLP', 'Python', 'React', 'OpenAI'], build_speed: '2 weeks',
    impact: 'Reduces regulatory surprise risk by 85% with proactive change monitoring.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fi-6', 'gv-2'], size: 0.9
  },

  // ── LEGAL (8) ──
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
  {
    id: 'le-7', title: 'IP Portfolio Monitor', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'AI tool that monitors trademark and patent databases for potential infringement, renewal deadlines, and competitive filings relevant to client portfolios.',
    stack: ['NLP', 'Python', 'React', 'REST APIs'], build_speed: '2 weeks',
    impact: 'Detects potential IP conflicts 60 days earlier with automated portfolio surveillance.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-1', 'le-5'], size: 0.9
  },
  {
    id: 'le-8', title: 'Deposition Summary Generator', category: 'legal',
    categoryLabel: 'Legal', industry: 'Legal',
    description: 'AI that transcribes and summarizes depositions, highlights key admissions, and cross-references testimony against prior statements and exhibits.',
    stack: ['Whisper', 'GPT-4', 'Python', 'React'], build_speed: '1 week',
    impact: 'Reduces deposition review time by 80% with AI-highlighted key testimony.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['le-2', 'le-6'], size: 0.9
  },

  // ── CONSTRUCTION (8) ──
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
  {
    id: 'co-7', title: 'Blueprint Takeoff AI', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'AI-powered quantity takeoff that extracts material quantities, dimensions, and specifications directly from architectural and structural blueprints.',
    stack: ['Vision API', 'Python', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Reduces manual takeoff time by 90% with 98% measurement accuracy.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-1', 'co-5'], size: 0.95
  },
  {
    id: 'co-8', title: 'Equipment Utilization Tracker', category: 'construction',
    categoryLabel: 'Construction', industry: 'Construction',
    description: 'IoT and AI system that monitors heavy equipment usage, idle time, and maintenance needs across jobsites to optimize fleet allocation.',
    stack: ['IoT', 'Python', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Improves equipment utilization by 35% and reduces rental costs by 20%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['co-4', 'mf-4'], size: 0.85
  },

  // ── RECRUITING / STAFFING (7) ──
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
  {
    id: 'rc-7', title: 'Diversity Pipeline Tracker', category: 'recruiting',
    categoryLabel: 'Recruiting / Staffing', industry: 'Recruiting / Staffing',
    description: 'AI analytics dashboard that tracks diversity metrics across the hiring funnel, identifies drop-off points, and recommends sourcing strategies.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Improves diverse candidate pipeline by 45% with data-driven sourcing insights.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['rc-1', 'rc-5'], size: 0.85
  },

  // ── INSURANCE (8) ──
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
  {
    id: 'in-7', title: 'Catastrophe Exposure Mapper', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'AI geospatial tool that maps policy concentrations against flood, wildfire, and hurricane risk zones to quantify catastrophe exposure in real time.',
    stack: ['Python', 'Mapbox', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Identifies concentrated exposure risks 5x faster, enabling proactive reinsurance decisions.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-2', 'in-4'], size: 0.9
  },
  {
    id: 'in-8', title: 'Fraud Ring Detector', category: 'insurance',
    categoryLabel: 'Insurance', industry: 'Insurance',
    description: 'Graph-based ML model that identifies organized fraud rings by analyzing relationships between claimants, providers, and repair shops across claims data.',
    stack: ['Python', 'Neo4j', 'React', 'D3.js'], build_speed: '2 weeks',
    impact: 'Uncovers fraud rings 70% faster, recovering millions in fraudulent payouts annually.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['in-1', 'cy-2'], size: 0.95
  },

  // ── MARKETING AGENCY (8) ──
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
  {
    id: 'ma-7', title: 'Influencer Match Engine', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'AI platform that identifies and scores influencers by audience overlap, engagement authenticity, and brand alignment for campaign partnerships.',
    stack: ['Python', 'React', 'Social APIs', 'OpenAI'], build_speed: '1 week',
    impact: 'Improves influencer campaign ROI by 55% through data-driven partner selection.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-4', 'md-3'], size: 0.9
  },
  {
    id: 'ma-8', title: 'Brand Sentiment Tracker', category: 'marketing',
    categoryLabel: 'Marketing Agency', industry: 'Marketing Agency',
    description: 'Real-time sentiment analysis across social media, reviews, and news mentions that tracks brand perception and alerts on reputation shifts.',
    stack: ['NLP', 'Python', 'React', 'D3.js'], build_speed: '5 days',
    impact: 'Detects brand crises 4 hours earlier with real-time sentiment monitoring.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ma-1', 'ma-6'], size: 0.85
  },

  // ── eCOMMERCE / RETAIL (8) ──
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
  {
    id: 'ec-7', title: 'Visual Search Shopping', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'AI visual search that lets shoppers upload photos to find matching or similar products in the catalog, powered by deep learning image embeddings.',
    stack: ['Vision API', 'Python', 'React', 'Redis'], build_speed: '2 weeks',
    impact: 'Increases product discovery by 35% and boosts conversion on visual searches by 50%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-1', 'ec-5'], size: 0.9
  },
  {
    id: 'ec-8', title: 'Customer Review Summarizer', category: 'ecommerce',
    categoryLabel: 'eCommerce / Retail', industry: 'eCommerce / Retail',
    description: 'NLP engine that aggregates and summarizes thousands of product reviews into key themes, sentiment scores, and feature-level feedback for merchandising teams.',
    stack: ['NLP', 'OpenAI', 'React', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Surfaces actionable product insights from reviews 10x faster than manual analysis.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ec-3', 'ec-6'], size: 0.85
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

  // ── AUTOMOTIVE (7) ──
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
  {
    id: 'au-6', title: 'Parts Demand Forecaster', category: 'automotive',
    categoryLabel: 'Automotive', industry: 'Automotive',
    description: 'AI model that predicts parts demand by make, model, and season to optimize inventory levels and reduce emergency orders at dealership service centers.',
    stack: ['Python', 'Prophet', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces parts stockouts by 50% and cuts emergency order costs by 35%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['au-2', 'lg-3'], size: 0.85
  },
  {
    id: 'au-7', title: 'Connected Vehicle Analytics', category: 'automotive',
    categoryLabel: 'Automotive', industry: 'Automotive',
    description: 'Telematics data platform that analyzes driving patterns, vehicle health, and usage data to predict maintenance needs and personalize owner communications.',
    stack: ['IoT', 'Python', 'React', 'Kafka'], build_speed: '2 weeks',
    impact: 'Predicts 85% of service needs before failure, improving customer satisfaction by 30%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['au-1', 'au-5'], size: 0.9
  },

  // ── HVAC / HOME SERVICES (7) ──
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
  {
    id: 'hv-6', title: 'Technician Training Copilot', category: 'hvac',
    categoryLabel: 'HVAC / Home Services', industry: 'HVAC / Home Services',
    description: 'AI assistant that provides real-time troubleshooting guidance, wiring diagrams, and repair procedures to field technicians via mobile device.',
    stack: ['RAG', 'OpenAI', 'React Native', 'Node.js'], build_speed: '1 week',
    impact: 'Reduces callback rates by 30% and accelerates new technician proficiency by 50%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hv-2', 'hv-5'], size: 0.85
  },
  {
    id: 'hv-7', title: 'Seasonal Demand Predictor', category: 'hvac',
    categoryLabel: 'HVAC / Home Services', industry: 'HVAC / Home Services',
    description: 'ML model that forecasts service call volume by combining weather data, historical patterns, and local housing data to optimize staffing and inventory.',
    stack: ['Python', 'Prophet', 'React', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Improves staffing accuracy by 40% during peak heating and cooling seasons.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['hv-1', 'hv-3'], size: 0.85
  },

  // ── CONSULTING (7) ──
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
  {
    id: 'cn-6', title: 'Competitive Intelligence Bot', category: 'consulting',
    categoryLabel: 'Consulting', industry: 'Consulting',
    description: 'AI agent that monitors competitor activity, pricing changes, and market moves across public sources and generates weekly intelligence briefings.',
    stack: ['NLP', 'Python', 'OpenAI', 'React'], build_speed: '1 week',
    impact: 'Provides real-time competitive insights that previously took analysts 20 hours/week.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cn-2', 'cn-5'], size: 0.85
  },
  {
    id: 'cn-7', title: 'Workshop Facilitator AI', category: 'consulting',
    categoryLabel: 'Consulting', industry: 'Consulting',
    description: 'AI tool that generates workshop agendas, facilitation guides, and real-time discussion summaries for strategy sessions and client workshops.',
    stack: ['GPT-4', 'Whisper', 'React', 'Node.js'], build_speed: '5 days',
    impact: 'Reduces workshop prep time by 60% and captures 95% of key decisions automatically.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cn-1', 'cn-4'], size: 0.85
  },

  // ── EDUCATION (7) ──
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
  },
  {
    id: 'ed-6', title: 'Plagiarism & AI Detection', category: 'education',
    categoryLabel: 'Education', industry: 'Education',
    description: 'Advanced detection engine that identifies plagiarism and AI-generated content in student submissions using stylometric analysis and source matching.',
    stack: ['NLP', 'Python', 'React', 'Elasticsearch'], build_speed: '2 weeks',
    impact: 'Detects 95% of AI-generated content with less than 2% false positive rate.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ed-1', 'ed-5'], size: 0.9
  },
  {
    id: 'ed-7', title: 'Alumni Engagement Platform', category: 'education',
    categoryLabel: 'Education', industry: 'Education',
    description: 'AI-driven alumni engagement that personalizes outreach, predicts donation likelihood, and matches alumni mentors with current students by career interest.',
    stack: ['Python', 'OpenAI', 'React', 'Twilio'], build_speed: '1 week',
    impact: 'Increases alumni giving participation by 25% and mentor match quality by 40%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ed-2', 'ed-4'], size: 0.85
  },

  // ── MANUFACTURING (6) ──
  {
    id: 'mf-1', title: 'Predictive Maintenance Engine', category: 'manufacturing',
    categoryLabel: 'Manufacturing', industry: 'Manufacturing',
    description: 'IoT-connected ML model that predicts equipment failures before they occur by analyzing vibration, temperature, and operational data from factory floor sensors.',
    stack: ['IoT', 'Python', 'TensorFlow', 'Kafka'], build_speed: '2 weeks',
    impact: 'Reduces unplanned downtime by 45% and extends equipment lifespan by 20%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['mf-2', 'mf-3'], size: 1.2
  },
  {
    id: 'mf-2', title: 'Quality Inspection Vision', category: 'manufacturing',
    categoryLabel: 'Manufacturing', industry: 'Manufacturing',
    description: 'Computer vision system that inspects manufactured parts for defects, dimensional accuracy, and surface quality at production line speed.',
    stack: ['YOLO', 'Python', 'Edge Compute', 'React'], build_speed: '2 weeks',
    impact: 'Catches 99.2% of defects with 80% fewer false rejects than manual inspection.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['mf-1', 'mf-4'], size: 1.1
  },
  {
    id: 'mf-3', title: 'Production Schedule Optimizer', category: 'manufacturing',
    categoryLabel: 'Manufacturing', industry: 'Manufacturing',
    description: 'AI scheduler that optimizes production runs, changeover sequences, and resource allocation to maximize throughput and minimize waste across shifts.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Increases production throughput by 18% with 25% fewer changeovers.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['mf-1', 'mf-5'], size: 1.0
  },
  {
    id: 'mf-4', title: 'Supply Chain Risk Monitor', category: 'manufacturing',
    categoryLabel: 'Manufacturing', industry: 'Manufacturing',
    description: 'AI platform that monitors supplier health, geopolitical risks, and logistics disruptions to alert procurement teams to potential supply chain interruptions.',
    stack: ['NLP', 'Python', 'React', 'REST APIs'], build_speed: '1 week',
    impact: 'Provides 30-day early warning on supply disruptions, reducing emergency sourcing by 60%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['mf-2', 'lg-1'], size: 0.95
  },
  {
    id: 'mf-5', title: 'Energy Consumption Optimizer', category: 'manufacturing',
    categoryLabel: 'Manufacturing', industry: 'Manufacturing',
    description: 'ML model that optimizes factory energy usage by scheduling high-consumption operations during off-peak hours and identifying waste in compressed air and HVAC systems.',
    stack: ['IoT', 'Python', 'React', 'D3.js'], build_speed: '1 week',
    impact: 'Reduces factory energy costs by 15-25% through intelligent load management.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['mf-3', 'en-2'], size: 0.9
  },
  {
    id: 'mf-6', title: 'Digital Twin Simulator', category: 'manufacturing',
    categoryLabel: 'Manufacturing', industry: 'Manufacturing',
    description: 'AI-powered digital twin that simulates production line changes, tests process improvements, and predicts outcomes before physical implementation.',
    stack: ['Python', 'React', 'Three.js', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Reduces costly trial-and-error by 70% with virtual process optimization.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['mf-1', 'mf-3'], size: 0.9
  },

  // ── HOSPITALITY (6) ──
  {
    id: 'ho-1', title: 'Dynamic Rate Optimizer', category: 'hospitality',
    categoryLabel: 'Hospitality', industry: 'Hospitality',
    description: 'AI revenue management system that adjusts room rates in real time based on demand forecasts, competitor pricing, events, and booking velocity.',
    stack: ['Python', 'React', 'REST APIs', 'Redis'], build_speed: '2 weeks',
    impact: 'Increases RevPAR by 12-18% through AI-optimized dynamic pricing.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ho-2', 'ho-3'], size: 1.15
  },
  {
    id: 'ho-2', title: 'Guest Experience Personalizer', category: 'hospitality',
    categoryLabel: 'Hospitality', industry: 'Hospitality',
    description: 'AI concierge that personalizes guest experiences by analyzing preferences, past stays, and loyalty data to pre-configure rooms, dining, and activity recommendations.',
    stack: ['OpenAI', 'React', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Increases guest satisfaction scores by 25% and repeat booking rates by 30%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ho-1', 'ho-4'], size: 1.0
  },
  {
    id: 'ho-3', title: 'Review Response Generator', category: 'hospitality',
    categoryLabel: 'Hospitality', industry: 'Hospitality',
    description: 'AI tool that drafts personalized, on-brand responses to guest reviews across TripAdvisor, Google, and OTA platforms — addressing specific feedback points.',
    stack: ['GPT-4', 'React', 'REST APIs', 'Node.js'], build_speed: '48 hours',
    impact: 'Responds to 100% of reviews within 4 hours, improving reputation scores by 15%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ho-1', 'ho-5'], size: 0.9
  },
  {
    id: 'ho-4', title: 'Staff Scheduling AI', category: 'hospitality',
    categoryLabel: 'Hospitality', industry: 'Hospitality',
    description: 'ML-powered workforce scheduler that optimizes staff allocation based on occupancy forecasts, event calendars, and labor regulations.',
    stack: ['Python', 'React', 'Node.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces labor costs by 12% while maintaining service quality during peak periods.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ho-2', 'ho-6'], size: 0.9
  },
  {
    id: 'ho-5', title: 'Housekeeping Route Optimizer', category: 'hospitality',
    categoryLabel: 'Hospitality', industry: 'Hospitality',
    description: 'AI system that optimizes housekeeping assignments and routes based on checkout times, priority requests, and staff availability across the property.',
    stack: ['Python', 'React', 'Mapbox', 'Node.js'], build_speed: '5 days',
    impact: 'Improves room turnaround speed by 30% and reduces guest wait times for clean rooms.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ho-3', 'ho-1'], size: 0.85
  },
  {
    id: 'ho-6', title: 'Banquet & Event Forecaster', category: 'hospitality',
    categoryLabel: 'Hospitality', industry: 'Hospitality',
    description: 'Predictive model that forecasts food and beverage requirements for events and banquets based on guest count, menu selection, and historical consumption data.',
    stack: ['Python', 'Scikit-learn', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces food waste by 35% and improves F&B margin by 10% on catered events.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ho-4', 'fb-2'], size: 0.85
  },

  // ── NONPROFIT (5) ──
  {
    id: 'np-1', title: 'Donor Propensity Model', category: 'nonprofit',
    categoryLabel: 'Nonprofit', industry: 'Nonprofit',
    description: 'ML model that scores donors by giving likelihood, capacity, and affinity to predict major gift prospects and optimize fundraising outreach timing.',
    stack: ['Python', 'Scikit-learn', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Increases major gift pipeline by 35% through data-driven prospect identification.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['np-2', 'np-3'], size: 1.1
  },
  {
    id: 'np-2', title: 'Grant Writing Assistant', category: 'nonprofit',
    categoryLabel: 'Nonprofit', industry: 'Nonprofit',
    description: 'AI copilot that drafts grant proposals, budgets, and narratives by pulling from organizational data, past submissions, and funder requirements.',
    stack: ['GPT-4', 'React', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Reduces grant writing time by 60% and improves submission quality scores by 25%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['np-1', 'np-4'], size: 1.0
  },
  {
    id: 'np-3', title: 'Impact Measurement Dashboard', category: 'nonprofit',
    categoryLabel: 'Nonprofit', industry: 'Nonprofit',
    description: 'AI analytics platform that aggregates program data, tracks outcomes against logic models, and generates impact reports for funders and board members.',
    stack: ['React', 'D3.js', 'Python', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Automates 80% of impact reporting and improves data-driven decision making.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['np-1', 'np-5'], size: 0.95
  },
  {
    id: 'np-4', title: 'Volunteer Matching Engine', category: 'nonprofit',
    categoryLabel: 'Nonprofit', industry: 'Nonprofit',
    description: 'AI system that matches volunteers to opportunities based on skills, availability, location, and interests — with automated scheduling and communication.',
    stack: ['OpenAI', 'React', 'Twilio', 'Node.js'], build_speed: '5 days',
    impact: 'Increases volunteer retention by 40% and reduces coordinator workload by 50%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['np-2', 'np-3'], size: 0.9
  },
  {
    id: 'np-5', title: 'Fundraising Campaign Optimizer', category: 'nonprofit',
    categoryLabel: 'Nonprofit', industry: 'Nonprofit',
    description: 'AI tool that optimizes email fundraising campaigns by personalizing messaging, predicting best send times, and segmenting donors by engagement level.',
    stack: ['Python', 'OpenAI', 'React', 'Twilio'], build_speed: '5 days',
    impact: 'Increases online giving by 30% with AI-personalized donor communications.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['np-1', 'np-4'], size: 0.85
  },

  // ── FITNESS / WELLNESS (5) ──
  {
    id: 'ft-1', title: 'Personalized Workout Generator', category: 'fitness',
    categoryLabel: 'Fitness / Wellness', industry: 'Fitness / Wellness',
    description: 'AI coach that generates customized workout plans based on fitness goals, injury history, available equipment, and progressive overload principles.',
    stack: ['GPT-4', 'React', 'Node.js', 'Supabase'], build_speed: '1 week',
    impact: 'Improves member goal attainment by 40% with AI-personalized programming.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ft-2', 'ft-3'], size: 1.1
  },
  {
    id: 'ft-2', title: 'Member Retention Predictor', category: 'fitness',
    categoryLabel: 'Fitness / Wellness', industry: 'Fitness / Wellness',
    description: 'ML model that predicts member churn risk based on visit frequency, class attendance, and engagement patterns — triggering proactive retention campaigns.',
    stack: ['Python', 'XGBoost', 'React', 'Twilio'], build_speed: '1 week',
    impact: 'Reduces member churn by 25% through early intervention on at-risk members.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ft-1', 'ft-4'], size: 1.0
  },
  {
    id: 'ft-3', title: 'Nutrition Planning AI', category: 'fitness',
    categoryLabel: 'Fitness / Wellness', industry: 'Fitness / Wellness',
    description: 'AI nutritionist that creates personalized meal plans based on dietary preferences, fitness goals, allergies, and macro targets with grocery list generation.',
    stack: ['OpenAI', 'React', 'Node.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Increases nutrition program adherence by 55% with personalized, easy-to-follow plans.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ft-1', 'ft-5'], size: 0.9
  },
  {
    id: 'ft-4', title: 'Class Scheduling Optimizer', category: 'fitness',
    categoryLabel: 'Fitness / Wellness', industry: 'Fitness / Wellness',
    description: 'AI system that optimizes group fitness schedules based on member preferences, instructor availability, room capacity, and historical attendance data.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Increases class utilization by 30% and reduces scheduling conflicts by 80%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ft-2', 'ft-3'], size: 0.85
  },
  {
    id: 'ft-5', title: 'Wearable Data Dashboard', category: 'fitness',
    categoryLabel: 'Fitness / Wellness', industry: 'Fitness / Wellness',
    description: 'Unified analytics platform that aggregates data from wearables and gym equipment to provide trainers with holistic client health and performance insights.',
    stack: ['IoT', 'Python', 'React', 'D3.js'], build_speed: '1 week',
    impact: 'Gives trainers 360-degree client view, improving personalization and outcomes by 35%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ft-1', 'ft-4'], size: 0.9
  },

  // ── ENERGY / UTILITIES (6) ──
  {
    id: 'en-1', title: 'Grid Load Forecaster', category: 'energy',
    categoryLabel: 'Energy / Utilities', industry: 'Energy / Utilities',
    description: 'ML model that forecasts electricity demand across grid segments using weather data, historical patterns, and economic indicators to optimize generation dispatch.',
    stack: ['Python', 'TensorFlow', 'React', 'Kafka'], build_speed: '2 weeks',
    impact: 'Improves load forecast accuracy by 30%, reducing overgeneration costs by millions.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['en-2', 'en-3'], size: 1.15
  },
  {
    id: 'en-2', title: 'Smart Meter Analytics', category: 'energy',
    categoryLabel: 'Energy / Utilities', industry: 'Energy / Utilities',
    description: 'AI platform that analyzes smart meter data to detect energy theft, identify infrastructure issues, and provide customers with personalized usage insights.',
    stack: ['Python', 'IoT', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Detects 90% of energy theft cases and reduces non-technical losses by 40%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['en-1', 'en-4'], size: 1.0
  },
  {
    id: 'en-3', title: 'Renewable Output Predictor', category: 'energy',
    categoryLabel: 'Energy / Utilities', industry: 'Energy / Utilities',
    description: 'AI model that predicts solar and wind farm output using satellite imagery, weather models, and historical generation data for better grid integration.',
    stack: ['Python', 'Vision API', 'React', 'D3.js'], build_speed: '2 weeks',
    impact: 'Improves renewable energy dispatch accuracy by 25%, reducing curtailment waste.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['en-1', 'en-5'], size: 0.95
  },
  {
    id: 'en-4', title: 'Outage Prediction System', category: 'energy',
    categoryLabel: 'Energy / Utilities', industry: 'Energy / Utilities',
    description: 'Predictive model that identifies infrastructure at risk of failure using equipment age, maintenance history, weather forecasts, and vegetation growth data.',
    stack: ['Python', 'XGBoost', 'React', 'Mapbox'], build_speed: '2 weeks',
    impact: 'Predicts 70% of outages before they occur, enabling proactive maintenance.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['en-2', 'en-6'], size: 0.9
  },
  {
    id: 'en-5', title: 'Carbon Footprint Tracker', category: 'energy',
    categoryLabel: 'Energy / Utilities', industry: 'Energy / Utilities',
    description: 'AI analytics tool that calculates and tracks organizational carbon emissions across Scope 1, 2, and 3 with automated reporting for ESG compliance.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Automates 85% of carbon accounting and identifies top emission reduction opportunities.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['en-3', 'mf-5'], size: 0.85
  },
  {
    id: 'en-6', title: 'Vegetation Management AI', category: 'energy',
    categoryLabel: 'Energy / Utilities', industry: 'Energy / Utilities',
    description: 'Satellite and drone imagery analysis that identifies vegetation encroachment on power lines, prioritizes trimming routes, and predicts growth patterns.',
    stack: ['Vision API', 'Python', 'Mapbox', 'React'], build_speed: '2 weeks',
    impact: 'Reduces vegetation-caused outages by 50% with targeted trimming prioritization.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['en-4', 'en-1'], size: 0.9
  },

  // ── LOGISTICS / SUPPLY CHAIN (6) ──
  {
    id: 'lg-1', title: 'Route Optimization Engine', category: 'logistics',
    categoryLabel: 'Logistics / Supply Chain', industry: 'Logistics / Supply Chain',
    description: 'AI routing system that optimizes delivery routes in real time considering traffic, vehicle capacity, time windows, and driver hours-of-service regulations.',
    stack: ['Python', 'Mapbox', 'React', 'Node.js'], build_speed: '2 weeks',
    impact: 'Reduces fleet fuel costs by 20% and increases on-time delivery rate to 97%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['lg-2', 'lg-3'], size: 1.15
  },
  {
    id: 'lg-2', title: 'Warehouse Slotting AI', category: 'logistics',
    categoryLabel: 'Logistics / Supply Chain', industry: 'Logistics / Supply Chain',
    description: 'ML system that optimizes warehouse bin locations and pick paths based on order velocity, item dimensions, and seasonal demand patterns.',
    stack: ['Python', 'React', 'PostgreSQL', 'D3.js'], build_speed: '1 week',
    impact: 'Reduces pick time by 30% and increases warehouse throughput by 25%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['lg-1', 'lg-4'], size: 1.0
  },
  {
    id: 'lg-3', title: 'Demand Sensing Platform', category: 'logistics',
    categoryLabel: 'Logistics / Supply Chain', industry: 'Logistics / Supply Chain',
    description: 'AI that combines POS data, social signals, weather, and events to generate short-term demand forecasts for inventory positioning across distribution networks.',
    stack: ['Python', 'Prophet', 'React', 'Kafka'], build_speed: '2 weeks',
    impact: 'Improves short-term forecast accuracy by 40%, reducing safety stock requirements.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['lg-1', 'lg-5'], size: 0.95
  },
  {
    id: 'lg-4', title: 'Freight Rate Predictor', category: 'logistics',
    categoryLabel: 'Logistics / Supply Chain', industry: 'Logistics / Supply Chain',
    description: 'ML model that predicts spot and contract freight rates based on lane history, capacity indicators, fuel prices, and market conditions.',
    stack: ['Python', 'XGBoost', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Saves 8-15% on freight spend through optimal carrier and timing selection.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['lg-2', 'lg-6'], size: 0.9
  },
  {
    id: 'lg-5', title: 'Shipment Visibility Tracker', category: 'logistics',
    categoryLabel: 'Logistics / Supply Chain', industry: 'Logistics / Supply Chain',
    description: 'Real-time shipment tracking platform that predicts ETAs, detects delays, and proactively notifies stakeholders with AI-generated exception management.',
    stack: ['IoT', 'React', 'Node.js', 'Mapbox'], build_speed: '1 week',
    impact: 'Reduces customer service inquiries by 50% with proactive shipment notifications.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['lg-3', 'mf-4'], size: 0.9
  },
  {
    id: 'lg-6', title: 'Returns Processing Automator', category: 'logistics',
    categoryLabel: 'Logistics / Supply Chain', industry: 'Logistics / Supply Chain',
    description: 'AI system that automates reverse logistics by classifying returned items, determining disposition (restock, refurbish, liquidate), and optimizing return routing.',
    stack: ['Vision API', 'Python', 'React', 'Node.js'], build_speed: '1 week',
    impact: 'Processes returns 60% faster and recovers 20% more value from returned goods.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['lg-4', 'ec-6'], size: 0.85
  },

  // ── AGRICULTURE / AGTECH (5) ──
  {
    id: 'ag-1', title: 'Crop Health Monitor', category: 'agriculture',
    categoryLabel: 'Agriculture / AgTech', industry: 'Agriculture / AgTech',
    description: 'Drone and satellite imagery analysis that detects crop stress, disease, and nutrient deficiencies across fields with prescription maps for targeted treatment.',
    stack: ['Vision API', 'Python', 'Mapbox', 'React'], build_speed: '2 weeks',
    impact: 'Reduces crop losses by 25% through early detection and precision treatment.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ag-2', 'ag-3'], size: 1.1
  },
  {
    id: 'ag-2', title: 'Yield Prediction Model', category: 'agriculture',
    categoryLabel: 'Agriculture / AgTech', industry: 'Agriculture / AgTech',
    description: 'ML model that predicts crop yields at field level using soil data, weather forecasts, satellite imagery, and historical harvest data for planning and trading.',
    stack: ['Python', 'TensorFlow', 'React', 'D3.js'], build_speed: '2 weeks',
    impact: 'Achieves yield predictions within 5% accuracy 60 days before harvest.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ag-1', 'ag-4'], size: 1.0
  },
  {
    id: 'ag-3', title: 'Precision Irrigation Controller', category: 'agriculture',
    categoryLabel: 'Agriculture / AgTech', industry: 'Agriculture / AgTech',
    description: 'IoT and AI system that optimizes irrigation schedules based on soil moisture sensors, weather forecasts, crop stage, and evapotranspiration models.',
    stack: ['IoT', 'Python', 'React', 'Node.js'], build_speed: '1 week',
    impact: 'Reduces water usage by 30% while maintaining or improving crop yields.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ag-1', 'ag-5'], size: 0.95
  },
  {
    id: 'ag-4', title: 'Livestock Health Tracker', category: 'agriculture',
    categoryLabel: 'Agriculture / AgTech', industry: 'Agriculture / AgTech',
    description: 'Wearable sensor analytics that monitors livestock vitals, activity patterns, and feeding behavior to detect illness, estrus, and calving events early.',
    stack: ['IoT', 'Python', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Detects livestock health issues 48 hours earlier, reducing mortality by 20%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ag-2', 'ag-3'], size: 0.9
  },
  {
    id: 'ag-5', title: 'Farm Equipment Fleet Manager', category: 'agriculture',
    categoryLabel: 'Agriculture / AgTech', industry: 'Agriculture / AgTech',
    description: 'AI platform that tracks farm equipment utilization, schedules maintenance, and optimizes field assignments across planting, spraying, and harvesting operations.',
    stack: ['IoT', 'Python', 'React', 'Mapbox'], build_speed: '1 week',
    impact: 'Improves equipment utilization by 25% and reduces maintenance costs by 15%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ag-3', 'mf-1'], size: 0.85
  },

  // ── MEDIA / ENTERTAINMENT (6) ──
  {
    id: 'md-1', title: 'Content Recommendation Engine', category: 'media',
    categoryLabel: 'Media / Entertainment', industry: 'Media / Entertainment',
    description: 'AI recommendation system that personalizes content feeds using viewing history, engagement signals, and collaborative filtering across user segments.',
    stack: ['Python', 'TensorFlow', 'React', 'Redis'], build_speed: '2 weeks',
    impact: 'Increases content engagement by 35% and reduces subscriber churn by 20%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['md-2', 'md-3'], size: 1.15
  },
  {
    id: 'md-2', title: 'Automated Video Highlights', category: 'media',
    categoryLabel: 'Media / Entertainment', industry: 'Media / Entertainment',
    description: 'AI that automatically generates highlight reels and clips from long-form video content by identifying key moments, emotions, and narrative peaks.',
    stack: ['Vision API', 'Python', 'FFmpeg', 'React'], build_speed: '2 weeks',
    impact: 'Produces social-ready clips 50x faster than manual editing at 85% quality.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['md-1', 'md-4'], size: 1.0
  },
  {
    id: 'md-3', title: 'Ad Placement Optimizer', category: 'media',
    categoryLabel: 'Media / Entertainment', industry: 'Media / Entertainment',
    description: 'ML model that optimizes ad insertion timing, frequency, and targeting across streaming and digital properties to maximize revenue without hurting engagement.',
    stack: ['Python', 'React', 'REST APIs', 'Redis'], build_speed: '1 week',
    impact: 'Increases ad revenue per user by 22% while maintaining viewer satisfaction.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['md-1', 'md-5'], size: 0.95
  },
  {
    id: 'md-4', title: 'Script Analysis AI', category: 'media',
    categoryLabel: 'Media / Entertainment', industry: 'Media / Entertainment',
    description: 'NLP tool that analyzes screenplays and scripts for pacing, dialogue quality, character development, and audience appeal with comparative benchmarking.',
    stack: ['NLP', 'GPT-4', 'React', 'Python'], build_speed: '1 week',
    impact: 'Provides data-backed script feedback in minutes vs. weeks of manual coverage.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['md-2', 'md-6'], size: 0.9
  },
  {
    id: 'md-5', title: 'Rights & Royalty Tracker', category: 'media',
    categoryLabel: 'Media / Entertainment', industry: 'Media / Entertainment',
    description: 'AI system that tracks content licensing rights, calculates royalties across distribution windows, and flags expiring agreements for renewal negotiations.',
    stack: ['Python', 'React', 'PostgreSQL', 'Node.js'], build_speed: '1 week',
    impact: 'Eliminates royalty calculation errors and identifies 15% more licensing revenue.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['md-3', 'le-7'], size: 0.85
  },
  {
    id: 'md-6', title: 'Audience Sentiment Analyzer', category: 'media',
    categoryLabel: 'Media / Entertainment', industry: 'Media / Entertainment',
    description: 'Real-time sentiment analysis across social media and review platforms that gauges audience reaction to releases, trailers, and marketing campaigns.',
    stack: ['NLP', 'Python', 'React', 'D3.js'], build_speed: '5 days',
    impact: 'Measures audience sentiment within hours of release, enabling rapid marketing pivots.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['md-4', 'ma-8'], size: 0.85
  },

  // ── TELECOMMUNICATIONS (5) ──
  {
    id: 'tc-1', title: 'Network Anomaly Detector', category: 'telecom',
    categoryLabel: 'Telecommunications', industry: 'Telecommunications',
    description: 'AI system that monitors network traffic patterns to detect anomalies, predict congestion, and automatically reroute traffic to maintain service quality.',
    stack: ['Python', 'TensorFlow', 'Kafka', 'React'], build_speed: '2 weeks',
    impact: 'Detects network issues 15 minutes before customer impact, reducing downtime by 60%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['tc-2', 'tc-3'], size: 1.1
  },
  {
    id: 'tc-2', title: 'Customer Churn Prevention', category: 'telecom',
    categoryLabel: 'Telecommunications', industry: 'Telecommunications',
    description: 'ML model that predicts subscriber churn using usage patterns, billing history, and service interactions — triggering targeted retention offers.',
    stack: ['Python', 'XGBoost', 'React', 'Twilio'], build_speed: '1 week',
    impact: 'Reduces subscriber churn by 22% with AI-timed retention interventions.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['tc-1', 'tc-4'], size: 1.0
  },
  {
    id: 'tc-3', title: 'Cell Tower Placement Optimizer', category: 'telecom',
    categoryLabel: 'Telecommunications', industry: 'Telecommunications',
    description: 'AI tool that analyzes population density, terrain, and traffic data to recommend optimal cell tower placements for maximum coverage and cost efficiency.',
    stack: ['Python', 'Mapbox', 'React', 'D3.js'], build_speed: '2 weeks',
    impact: 'Reduces infrastructure spend by 20% while improving coverage by 15%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['tc-1', 'tc-5'], size: 0.95
  },
  {
    id: 'tc-4', title: 'Intelligent Call Routing', category: 'telecom',
    categoryLabel: 'Telecommunications', industry: 'Telecommunications',
    description: 'AI-powered call center routing that predicts caller intent from IVR data and routes to the best-suited agent based on skills, sentiment, and resolution history.',
    stack: ['NLP', 'Python', 'Twilio', 'React'], build_speed: '1 week',
    impact: 'Reduces average handle time by 25% and improves first-call resolution by 30%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['tc-2', 'tc-3'], size: 0.9
  },
  {
    id: 'tc-5', title: 'Fiber Rollout Planner', category: 'telecom',
    categoryLabel: 'Telecommunications', industry: 'Telecommunications',
    description: 'AI planning tool that prioritizes fiber deployment neighborhoods based on demand density, competitive landscape, construction costs, and revenue potential.',
    stack: ['Python', 'Mapbox', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Improves fiber deployment ROI by 30% with data-driven rollout sequencing.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['tc-3', 'tc-1'], size: 0.85
  },

  // ── GOVERNMENT / PUBLIC SECTOR (5) ──
  {
    id: 'gv-1', title: 'Permit Processing Automator', category: 'government',
    categoryLabel: 'Government / Public Sector', industry: 'Government / Public Sector',
    description: 'AI system that automates permit application review, validates compliance with zoning codes, and routes approvals through the correct departmental workflow.',
    stack: ['NLP', 'Python', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Reduces permit processing time by 60% and eliminates 90% of manual routing errors.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['gv-2', 'gv-3'], size: 1.1
  },
  {
    id: 'gv-2', title: 'Public Records Search AI', category: 'government',
    categoryLabel: 'Government / Public Sector', industry: 'Government / Public Sector',
    description: 'AI-powered search engine that makes public records, meeting minutes, and municipal codes searchable in natural language for citizens and staff.',
    stack: ['RAG', 'OpenAI', 'React', 'Elasticsearch'], build_speed: '1 week',
    impact: 'Reduces FOIA response time by 70% and improves citizen self-service by 50%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['gv-1', 'gv-4'], size: 1.0
  },
  {
    id: 'gv-3', title: 'Infrastructure Condition Assessor', category: 'government',
    categoryLabel: 'Government / Public Sector', industry: 'Government / Public Sector',
    description: 'Computer vision system that assesses road, bridge, and infrastructure conditions from vehicle-mounted cameras and drone footage for maintenance prioritization.',
    stack: ['Vision API', 'Python', 'Mapbox', 'React'], build_speed: '2 weeks',
    impact: 'Identifies infrastructure issues 3x faster than manual inspection at 40% lower cost.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['gv-1', 'gv-5'], size: 0.95
  },
  {
    id: 'gv-4', title: 'Budget Allocation Optimizer', category: 'government',
    categoryLabel: 'Government / Public Sector', industry: 'Government / Public Sector',
    description: 'AI tool that analyzes historical spending, program outcomes, and community needs to recommend optimal budget allocations across departments and programs.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Improves budget efficiency by 15% with outcome-based allocation recommendations.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['gv-2', 'gv-3'], size: 0.9
  },
  {
    id: 'gv-5', title: 'Citizen Service Chatbot', category: 'government',
    categoryLabel: 'Government / Public Sector', industry: 'Government / Public Sector',
    description: 'Multilingual AI chatbot that helps citizens navigate government services, answer questions about programs, and complete forms across web and mobile channels.',
    stack: ['GPT-4', 'React', 'Twilio', 'Node.js'], build_speed: '1 week',
    impact: 'Handles 55% of citizen inquiries automatically with 90% satisfaction rating.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['gv-3', 'gv-1'], size: 0.85
  },

  // ── CYBERSECURITY (6) ──
  {
    id: 'cy-1', title: 'Threat Detection Engine', category: 'cybersecurity',
    categoryLabel: 'Cybersecurity', industry: 'Cybersecurity',
    description: 'AI-powered SIEM that correlates security events across endpoints, network, and cloud to detect advanced threats with fewer false positives than rule-based systems.',
    stack: ['Python', 'TensorFlow', 'Kafka', 'Elasticsearch'], build_speed: '2 weeks',
    impact: 'Detects 95% of threats with 60% fewer false positives, reducing analyst fatigue.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cy-2', 'cy-3'], size: 1.2
  },
  {
    id: 'cy-2', title: 'Phishing Detection AI', category: 'cybersecurity',
    categoryLabel: 'Cybersecurity', industry: 'Cybersecurity',
    description: 'ML model that analyzes email headers, content, and sender behavior to identify phishing attempts, BEC attacks, and social engineering campaigns in real time.',
    stack: ['NLP', 'Python', 'TensorFlow', 'REST APIs'], build_speed: '1 week',
    impact: 'Blocks 99.1% of phishing emails before reaching user inboxes.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cy-1', 'cy-4'], size: 1.1
  },
  {
    id: 'cy-3', title: 'Vulnerability Prioritizer', category: 'cybersecurity',
    categoryLabel: 'Cybersecurity', industry: 'Cybersecurity',
    description: 'AI system that scores and prioritizes vulnerabilities based on exploitability, asset criticality, and threat intelligence — not just CVSS scores.',
    stack: ['Python', 'React', 'REST APIs', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces remediation time for critical vulnerabilities by 50% through smart prioritization.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cy-1', 'cy-5'], size: 0.95
  },
  {
    id: 'cy-4', title: 'Incident Response Automator', category: 'cybersecurity',
    categoryLabel: 'Cybersecurity', industry: 'Cybersecurity',
    description: 'SOAR platform with AI-driven playbooks that automatically investigate, contain, and remediate security incidents with human-in-the-loop approval for critical actions.',
    stack: ['Python', 'AI Agents', 'React', 'Kafka'], build_speed: '2 weeks',
    impact: 'Reduces mean time to respond from hours to minutes for 80% of incident types.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cy-2', 'cy-6'], size: 1.0
  },
  {
    id: 'cy-5', title: 'Dark Web Monitor', category: 'cybersecurity',
    categoryLabel: 'Cybersecurity', industry: 'Cybersecurity',
    description: 'AI crawler that monitors dark web forums and marketplaces for stolen credentials, data leaks, and threat actor discussions mentioning client organizations.',
    stack: ['NLP', 'Python', 'Elasticsearch', 'React'], build_speed: '2 weeks',
    impact: 'Provides early warning of data breaches 30 days before public disclosure on average.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cy-3', 'fi-2'], size: 0.9
  },
  {
    id: 'cy-6', title: 'Security Awareness Trainer', category: 'cybersecurity',
    categoryLabel: 'Cybersecurity', industry: 'Cybersecurity',
    description: 'AI platform that generates personalized phishing simulations and security training content adapted to each employee role, department, and risk profile.',
    stack: ['GPT-4', 'React', 'Node.js', 'Twilio'], build_speed: '1 week',
    impact: 'Reduces employee phishing click rates by 75% with personalized training campaigns.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['cy-4', 'cy-2'], size: 0.85
  },

  // ── FOOD & BEVERAGE (5) ──
  {
    id: 'fb-1', title: 'Menu Engineering AI', category: 'foodbev',
    categoryLabel: 'Food & Beverage', industry: 'Food & Beverage',
    description: 'AI analytics tool that optimizes menu layout, pricing, and item placement based on food cost, popularity, profit margins, and customer ordering patterns.',
    stack: ['Python', 'React', 'D3.js', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Increases average check size by 12% and improves food cost ratio by 3 points.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fb-2', 'fb-3'], size: 1.1
  },
  {
    id: 'fb-2', title: 'Food Waste Predictor', category: 'foodbev',
    categoryLabel: 'Food & Beverage', industry: 'Food & Beverage',
    description: 'ML model that predicts daily food production needs based on reservations, weather, events, and historical patterns to minimize over-production and waste.',
    stack: ['Python', 'Prophet', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Reduces food waste by 40% and saves $2-5K monthly per location.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fb-1', 'fb-4'], size: 1.0
  },
  {
    id: 'fb-3', title: 'Health Inspection Prep Bot', category: 'foodbev',
    categoryLabel: 'Food & Beverage', industry: 'Food & Beverage',
    description: 'AI checklist system that conducts daily digital health and safety inspections, tracks corrective actions, and prepares documentation for regulatory audits.',
    stack: ['React Native', 'OpenAI', 'Node.js', 'S3'], build_speed: '5 days',
    impact: 'Improves health inspection scores by 20% with automated daily compliance checks.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fb-1', 'fb-5'], size: 0.9
  },
  {
    id: 'fb-4', title: 'Supplier Price Optimizer', category: 'foodbev',
    categoryLabel: 'Food & Beverage', industry: 'Food & Beverage',
    description: 'AI procurement tool that compares supplier pricing, tracks market rates for key ingredients, and recommends optimal purchasing timing and quantities.',
    stack: ['Python', 'React', 'REST APIs', 'PostgreSQL'], build_speed: '5 days',
    impact: 'Reduces ingredient costs by 10-15% through smarter purchasing decisions.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fb-2', 'lg-3'], size: 0.85
  },
  {
    id: 'fb-5', title: 'Customer Loyalty AI', category: 'foodbev',
    categoryLabel: 'Food & Beverage', industry: 'Food & Beverage',
    description: 'AI-powered loyalty platform that personalizes rewards, predicts visit frequency, and sends targeted promotions based on customer dining preferences and behavior.',
    stack: ['Python', 'OpenAI', 'React', 'Twilio'], build_speed: '1 week',
    impact: 'Increases repeat visit frequency by 30% and loyalty program enrollment by 50%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['fb-3', 'fb-1'], size: 0.9
  },

  // ── PHARMACEUTICAL (6) ──
  {
    id: 'ph-1', title: 'Drug Interaction Checker', category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical', industry: 'Pharmaceutical',
    description: 'AI system that analyzes multi-drug regimens for potential interactions, contraindications, and dosage conflicts using molecular and clinical databases.',
    stack: ['Python', 'NLP', 'React', 'PostgreSQL'], build_speed: '2 weeks',
    impact: 'Identifies 40% more drug interactions than traditional databases with explainable reasoning.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ph-2', 'ph-3'], size: 1.15
  },
  {
    id: 'ph-2', title: 'Clinical Data Harmonizer', category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical', industry: 'Pharmaceutical',
    description: 'AI pipeline that standardizes and harmonizes clinical trial data from multiple sites, formats, and protocols into unified CDISC-compliant datasets.',
    stack: ['Python', 'NLP', 'React', 'Snowflake'], build_speed: '2 weeks',
    impact: 'Reduces data harmonization time by 70% and improves FDA submission readiness.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ph-1', 'ph-4'], size: 1.0
  },
  {
    id: 'ph-3', title: 'Adverse Event Detector', category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical', industry: 'Pharmaceutical',
    description: 'NLP system that monitors medical literature, social media, and patient reports to detect emerging adverse event signals for marketed drugs.',
    stack: ['NLP', 'Python', 'Elasticsearch', 'React'], build_speed: '2 weeks',
    impact: 'Detects potential safety signals 45 days earlier than traditional pharmacovigilance.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ph-1', 'ph-5'], size: 0.95
  },
  {
    id: 'ph-4', title: 'Regulatory Submission Builder', category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical', industry: 'Pharmaceutical',
    description: 'AI tool that automates the assembly of regulatory submission packages by organizing clinical data, generating narratives, and ensuring format compliance.',
    stack: ['GPT-4', 'Python', 'React', 'Node.js'], build_speed: '2 weeks',
    impact: 'Reduces submission assembly time by 50% with automated document compilation.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ph-2', 'ph-6'], size: 0.9
  },
  {
    id: 'ph-5', title: 'Sales Rep Territory Optimizer', category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical', industry: 'Pharmaceutical',
    description: 'AI model that optimizes pharmaceutical sales territories and call plans based on prescriber data, market potential, and competitive activity by geography.',
    stack: ['Python', 'Mapbox', 'React', 'PostgreSQL'], build_speed: '1 week',
    impact: 'Increases sales rep productivity by 20% with AI-optimized territory alignment.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ph-3', 'ph-1'], size: 0.85
  },
  {
    id: 'ph-6', title: 'Molecule Screening Accelerator', category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical', industry: 'Pharmaceutical',
    description: 'Deep learning model that predicts molecular binding affinity and toxicity profiles to accelerate early-stage drug candidate screening and selection.',
    stack: ['Python', 'PyTorch', 'React', 'D3.js'], build_speed: '2 weeks',
    impact: 'Screens 10x more candidates in the same time, reducing preclinical costs by 35%.',
    url: 'https://aisymmetricsolutions.com/#contact',
    connections: ['ph-4', 'hc-8'], size: 0.9
  }
];

// ─────────────────────────────────────────────
// CATEGORY COLORS — BY INDUSTRY
// ─────────────────────────────────────────────
const CAT_COLORS = {
  healthcare:     { fill: '#10b981', glow: 'rgba(16,185,129,0.4)',   dim: 'rgba(16,185,129,0.15)' },
  realestate:     { fill: '#3b82f6', glow: 'rgba(59,130,246,0.4)',   dim: 'rgba(59,130,246,0.15)' },
  finance:        { fill: '#22d3ee', glow: 'rgba(34,211,238,0.4)',   dim: 'rgba(34,211,238,0.15)' },
  legal:          { fill: '#8b5cf6', glow: 'rgba(139,92,246,0.4)',   dim: 'rgba(139,92,246,0.15)' },
  construction:   { fill: '#f59e0b', glow: 'rgba(245,158,11,0.4)',   dim: 'rgba(245,158,11,0.15)' },
  recruiting:     { fill: '#ec4899', glow: 'rgba(236,72,153,0.4)',   dim: 'rgba(236,72,153,0.15)' },
  insurance:      { fill: '#6366f1', glow: 'rgba(99,102,241,0.4)',   dim: 'rgba(99,102,241,0.15)' },
  marketing:      { fill: '#f43f5e', glow: 'rgba(244,63,94,0.4)',    dim: 'rgba(244,63,94,0.15)' },
  ecommerce:      { fill: '#14b8a6', glow: 'rgba(20,184,166,0.4)',   dim: 'rgba(20,184,166,0.15)' },
  hvac:           { fill: '#f97316', glow: 'rgba(249,115,22,0.4)',   dim: 'rgba(249,115,22,0.15)' },
  consulting:     { fill: '#0ea5e9', glow: 'rgba(14,165,233,0.4)',   dim: 'rgba(14,165,233,0.15)' },
  automotive:     { fill: '#a855f7', glow: 'rgba(168,85,247,0.4)',   dim: 'rgba(168,85,247,0.15)' },
  education:      { fill: '#84cc16', glow: 'rgba(132,204,22,0.4)',   dim: 'rgba(132,204,22,0.15)' },
  manufacturing:  { fill: '#64748b', glow: 'rgba(100,116,139,0.4)',  dim: 'rgba(100,116,139,0.15)' },
  hospitality:    { fill: '#e879f9', glow: 'rgba(232,121,249,0.4)',  dim: 'rgba(232,121,249,0.15)' },
  nonprofit:      { fill: '#fb923c', glow: 'rgba(251,146,60,0.4)',   dim: 'rgba(251,146,60,0.15)' },
  fitness:        { fill: '#34d399', glow: 'rgba(52,211,153,0.4)',   dim: 'rgba(52,211,153,0.15)' },
  energy:         { fill: '#fbbf24', glow: 'rgba(251,191,36,0.4)',   dim: 'rgba(251,191,36,0.15)' },
  logistics:      { fill: '#38bdf8', glow: 'rgba(56,189,248,0.4)',   dim: 'rgba(56,189,248,0.15)' },
  agriculture:    { fill: '#a3e635', glow: 'rgba(163,230,53,0.4)',   dim: 'rgba(163,230,53,0.15)' },
  media:          { fill: '#f472b6', glow: 'rgba(244,114,182,0.4)',  dim: 'rgba(244,114,182,0.15)' },
  telecom:        { fill: '#818cf8', glow: 'rgba(129,140,248,0.4)',  dim: 'rgba(129,140,248,0.15)' },
  government:     { fill: '#94a3b8', glow: 'rgba(148,163,184,0.4)', dim: 'rgba(148,163,184,0.15)' },
  cybersecurity:  { fill: '#ef4444', glow: 'rgba(239,68,68,0.4)',    dim: 'rgba(239,68,68,0.15)' },
  foodbev:        { fill: '#fb7185', glow: 'rgba(251,113,133,0.4)',  dim: 'rgba(251,113,133,0.15)' },
  pharmaceutical: { fill: '#2dd4bf', glow: 'rgba(45,212,191,0.4)',   dim: 'rgba(45,212,191,0.15)' },
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
// ROLLING COUNTER ANIMATION
// ─────────────────────────────────────────────
(function counterAnimation() {
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  const stats = document.querySelector('.hero-stats');
  if (!stats) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.querySelectorAll('.stat-value[data-count]').forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(stats);
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
    const nodeR = 12;

    // 6 concentric rings for ~150 nodes
    const rings = [
      { count: 8,  radius: Math.min(W, H) * 0.06 },
      { count: 14, radius: Math.min(W, H) * 0.13 },
      { count: 20, radius: Math.min(W, H) * 0.20 },
      { count: 26, radius: Math.min(W, H) * 0.28 },
      { count: 32, radius: Math.min(W, H) * 0.36 },
      { count: sorted.length - 100, radius: Math.min(W, H) * 0.45 }
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
        const minDist = n.r + m.r + 20;

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
      const fontSize = Math.max(7, Math.min(9, r * 0.5));
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
