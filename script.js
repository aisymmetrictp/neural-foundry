// ─────────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'crm',
    title: 'AISymmetric CRM',
    category: 'apps',
    categoryLabel: 'Application',
    industry: 'Enterprise',
    description: 'A full-featured AI-powered CRM platform built for SMB to mid-market sales teams. Manages pipeline, contacts, and deal velocity with intelligent automation.',
    stack: ['React', 'Node.js', 'Supabase', 'OpenAI', 'Vercel'],
    build_speed: '2 weeks',
    impact: 'Replaces legacy CRM costs — full pipeline + contact management shipped from scratch.',
    url: 'https://aisymmetric-crm.vercel.app/',
    connections: ['psm', 'lead-scoring', 'salesforce-intel'],
    size: 1.3
  },
  {
    id: 'psm',
    title: 'Project & Service Manager',
    category: 'apps',
    categoryLabel: 'Application',
    industry: 'Operations',
    description: 'An intelligent project and service management platform for tracking deliverables, timelines, and resource allocation across client engagements.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Vercel'],
    build_speed: '5 days',
    impact: 'Streamlines project tracking and client delivery operations in a single platform.',
    url: 'https://aisymmetric-psm.vercel.app/',
    connections: ['crm', 'dashboard-framework'],
    size: 1.1
  },
  {
    id: 'trading-cards',
    title: 'Trading Card Value App',
    category: 'apps',
    categoryLabel: 'Application',
    industry: 'Consumer / Collectibles',
    description: 'Real-time trading card valuation engine that scans, identifies, and prices sports and collectible cards using AI vision and market data feeds.',
    stack: ['React', 'OpenAI Vision', 'Vercel', 'Node.js'],
    build_speed: '48 hours',
    impact: 'Instant AI-powered card identification and live market pricing for collectors.',
    url: 'https://trading-card-value-app.vercel.app/',
    connections: ['roi-calc'],
    size: 0.9
  },
  {
    id: 'rainmaker',
    title: 'Rainmaker Strategy Game',
    category: 'games',
    categoryLabel: 'Game & Simulation',
    industry: 'Strategy / Education',
    description: 'An immersive business strategy simulation game where players build and scale revenue-generating operations. Combines economic modeling with strategic decision-making.',
    stack: ['JavaScript', 'Canvas API', 'Node.js', 'Vercel'],
    build_speed: '2 weeks',
    impact: 'Trains strategic thinking around revenue generation, resource allocation, and market dynamics.',
    url: 'https://rainmakers-game.vercel.app/',
    connections: ['pe-cost-takeout', 'mfg-revenue'],
    size: 1.4
  },
  {
    id: 'roi-calc',
    title: 'ROI Calculator',
    category: 'data',
    categoryLabel: 'Data & Intelligence',
    industry: 'Sales / Finance',
    description: 'An interactive ROI modeling tool that helps enterprise buyers quantify the financial return of AI and technology investments. Configurable by industry and use case.',
    stack: ['React', 'JavaScript', 'Netlify'],
    build_speed: '48 hours',
    impact: 'Accelerates enterprise sales cycles by giving buyers instant, credible ROI projections.',
    url: 'https://roicalculator.aisymmetricsolutions.com/',
    connections: ['dashboard-framework', 'pe-cost-takeout', 'crm'],
    size: 1.0
  },
  {
    id: 'dashboard-framework',
    title: 'AI Dashboard Framework',
    category: 'data',
    categoryLabel: 'Data & Intelligence',
    industry: 'Enterprise / Multi-vertical',
    description: 'A reusable executive dashboard framework with real-time KPI visualization, AI-generated insights, and multi-source data connectors. Built to deploy across client verticals.',
    stack: ['React', 'D3.js', 'OpenAI', 'REST APIs', 'Netlify'],
    build_speed: '1 week',
    impact: 'Foundation for 10+ client dashboard deployments. Reduces new dashboard build time by 70%.',
    url: 'https://revint.aisymmetricsolutions.com/',
    connections: ['roi-calc', 'salesforce-intel', 'mfg-revenue', 'pe-cost-takeout'],
    size: 1.5
  },
  {
    id: 'web-portfolio',
    title: 'Web Portfolio Showcase',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'Marketing / Brand',
    description: 'The official AISymmetric web portfolio \u2014 a curated collection of client websites, platforms, and digital experiences showcasing the firm\'s design and engineering range.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    build_speed: '3 days',
    impact: 'Central showcase driving enterprise inbound \u2014 demonstrates full-stack design and engineering capability.',
    url: 'https://webportfolio.aisymmetricsolutions.com/',
    connections: ['tyler-site', 'sauber', 'casimir', 'canoe'],
    size: 1.1
  },
  {
    id: 'canoe',
    title: 'Canoe Wild Rice \u2014 Brand Site',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'CPG / Food & Beverage',
    description: 'A premium brand website for a heritage wild rice company \u2014 combining cultural storytelling, product education, and e-commerce with a handcrafted aesthetic.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    build_speed: '5 days',
    impact: 'Elevated brand presence and online sales channel for an artisanal food producer.',
    url: 'https://canoe-wild-rice.netlify.app/',
    connections: ['web-portfolio', 'sauber'],
    size: 0.85
  },
  {
    id: 'sauber',
    title: 'Sauber Real Estate',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'Real Estate',
    description: 'A sophisticated real estate agency website with property search, agent profiles, and lead capture \u2014 built for modern buyer and seller journeys.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    build_speed: '5 days',
    impact: 'Full-featured real estate web presence with integrated lead generation.',
    url: 'https://sauber-real-estate.netlify.app/',
    connections: ['rockbrook', 'web-portfolio'],
    size: 0.85
  },
  {
    id: 'rockbrook',
    title: 'Rockbrook Real Estate Platform',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'Real Estate',
    description: 'A full IDX real estate platform for property search, listing management, and buyer engagement \u2014 built on modern web architecture with AI-powered property recommendations.',
    stack: ['React', 'IDX API', 'Node.js', 'Netlify'],
    build_speed: '2 weeks',
    impact: 'End-to-end property discovery platform powering active buyer and seller transactions.',
    url: 'https://rockbrook.aisymmetricsolutions.com/',
    connections: ['sauber', 'crm'],
    size: 1.1
  },
  {
    id: 'tyler-site',
    title: 'tylerperleberg.com',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'Personal Brand',
    description: 'Executive personal brand platform for Tyler Perleberg \u2014 showcasing 20 years of digital leadership, AI expertise, and enterprise transformation experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    build_speed: '3 days',
    impact: 'Premier executive presence driving speaking, advisory, and strategic partnership opportunities.',
    url: 'https://tylerperleberg.com/',
    connections: ['web-portfolio', 'agentforce'],
    size: 1.0
  },
  {
    id: 'casimir',
    title: 'Casimir Basketball',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'Sports / Youth Athletics',
    description: 'A dynamic basketball program website featuring schedules, player profiles, coaching staff, and registration flows for a competitive youth program.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    build_speed: '48 hours',
    impact: 'Community sports platform enabling program growth and parent/athlete engagement.',
    url: 'https://casimirbasketball.com/',
    connections: ['web-portfolio', 'canoe'],
    size: 0.8
  },
  {
    id: 'agentforce',
    title: 'Agentforce Intelligence Hub',
    category: 'ai',
    categoryLabel: 'AI Agent System',
    industry: 'Enterprise / Salesforce',
    description: 'An intelligent Salesforce Agentforce showcase and demonstration platform \u2014 illustrating how AI agents automate enterprise workflows, service operations, and revenue intelligence.',
    stack: ['Salesforce', 'Agentforce', 'OpenAI', 'Node.js'],
    build_speed: '1 week',
    impact: 'Live demonstration of enterprise AI agent capabilities for CRM and service automation.',
    url: 'https://agentforce.tylerperleberg.com/',
    connections: ['salesforce-intel', 'crm', 'tyler-site'],
    size: 1.3
  },
  {
    id: 'harvey-hotel',
    title: 'Harvey Hotel',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'Hospitality',
    description: 'A premium hospitality website for Harvey Hotel \u2014 featuring room showcases, booking experiences, local guide content, and brand storytelling for a boutique property.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    build_speed: '5 days',
    impact: 'Premium hospitality digital presence driving direct bookings and guest engagement.',
    url: 'https://harveyhottel.aisymmetricsolutions.com/',
    connections: ['web-portfolio', 'nordic-sauna'],
    size: 0.9
  },
  {
    id: 'nordic-sauna',
    title: 'Nordic Heat Saunas',
    category: 'web',
    categoryLabel: 'Web Experience',
    industry: 'Health & Wellness / E-Commerce',
    description: 'A premium product and e-commerce website for a Nordic sauna brand \u2014 blending wellness storytelling, product education, and conversion-optimized shopping experiences.',
    stack: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'Netlify'],
    build_speed: '5 days',
    impact: 'Premium DTC e-commerce and brand experience driving sauna product sales.',
    url: 'https://nordicheatsaunas.com/',
    connections: ['web-portfolio', 'harvey-hotel'],
    size: 0.9
  },
  {
    id: 'salesforce-intel',
    title: 'Salesforce Lead Intelligence',
    category: 'ai',
    categoryLabel: 'AI Agent System',
    industry: 'Enterprise Sales',
    description: 'AI-powered lead scoring and pipeline intelligence layer built on Salesforce \u2014 using predictive models to rank leads, surface opportunities, and automate outreach sequencing.',
    stack: ['Salesforce', 'Apex', 'OpenAI', 'Python'],
    build_speed: '2 weeks',
    impact: 'Increases pipeline conversion rate and reduces sales rep time spent on manual qualification.',
    url: 'https://aisymmetricsolutions.com/#case-studies',
    connections: ['crm', 'dashboard-framework', 'agentforce'],
    size: 1.2
  },
  {
    id: 'pe-cost-takeout',
    title: 'Cost Takeout Intelligence Engine',
    category: 'data',
    categoryLabel: 'Data & Intelligence',
    industry: 'Private Equity / Finance',
    description: 'A private equity-grade cost analysis platform that maps operating expenses, identifies reduction opportunities, and models savings scenarios across portfolio companies.',
    stack: ['Python', 'React', 'PostgreSQL', 'OpenAI', 'D3.js'],
    build_speed: '1 week',
    impact: 'Enables PE operating partners to identify cost reduction opportunities across portfolio holdings.',
    url: 'https://aisymmetricsolutions.com/#case-studies',
    connections: ['dashboard-framework', 'mfg-revenue', 'rainmaker'],
    size: 1.2
  },
  {
    id: 'mfg-revenue',
    title: 'Manufacturing Revenue Planner',
    category: 'data',
    categoryLabel: 'Data & Intelligence',
    industry: 'Manufacturing',
    description: 'An AI-powered revenue planning system for global manufacturers \u2014 integrating demand forecasting, pipeline data, and market signals into executive decision dashboards.',
    stack: ['Python', 'Salesforce', 'React', 'Snowflake', 'OpenAI'],
    build_speed: '2 weeks',
    impact: '40% operational efficiency gain and 2.5x pipeline velocity increase for global manufacturer.',
    url: 'https://aisymmetricsolutions.com/#case-studies',
    connections: ['dashboard-framework', 'salesforce-intel', 'pe-cost-takeout'],
    size: 1.3
  }
];

// ─────────────────────────────────────────────
// CATEGORY COLORS
// ─────────────────────────────────────────────
const CAT_COLORS = {
  apps:  { fill: '#3b82f6', glow: 'rgba(59,130,246,0.4)',  dim: 'rgba(59,130,246,0.15)' },
  data:  { fill: '#22d3ee', glow: 'rgba(34,211,238,0.4)',  dim: 'rgba(34,211,238,0.15)' },
  ai:    { fill: '#8b5cf6', glow: 'rgba(139,92,246,0.4)',  dim: 'rgba(139,92,246,0.15)' },
  games: { fill: '#f59e0b', glow: 'rgba(245,158,11,0.4)',  dim: 'rgba(245,158,11,0.15)' },
  web:   { fill: '#10b981', glow: 'rgba(16,185,129,0.4)',  dim: 'rgba(16,185,129,0.15)' },
};

// ─────────────────────────────────────────────
// NAV SCROLL EFFECT
// ─────────────────────────────────────────────
(function navScroll() {
  const nav = document.querySelector('nav');
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

  document.querySelectorAll('.section-header, .velocity-card, .method-step, .filter-bar, .graph-legend').forEach(el => {
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
      ctx.fillStyle = `rgba(96,165,250,${p.opacity})`;
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
          ctx.strokeStyle = `rgba(96,165,250,${0.08 * (1 - dist / 100)})`;
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
    nodes = PROJECTS.map((p, i) => {
      const col = CAT_COLORS[p.category] || CAT_COLORS.apps;
      const angle = (i / PROJECTS.length) * Math.PI * 2;
      const clusterR = Math.min(W, H) * 0.3;
      return {
        ...p,
        x: W / 2 + Math.cos(angle) * clusterR + (Math.random() - 0.5) * 60,
        y: H / 2 + Math.sin(angle) * clusterR + (Math.random() - 0.5) * 60,
        vx: 0, vy: 0,
        r: (p.size || 1) * 18,
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
    const K = 0.04;
    const REPEL = 3500;
    const DAMPING = 0.85;
    const CENTER_PULL = 0.008;

    nodes.forEach(n => {
      if (!n.visible) return;
      let fx = 0, fy = 0;

      nodes.forEach(m => {
        if (m === n || !m.visible) return;
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist2 = dx * dx + dy * dy || 1;
        const dist = Math.sqrt(dist2);
        const f = REPEL / dist2;
        fx += (dx / dist) * f;
        fy += (dy / dist) * f;
      });

      edges.forEach(e => {
        let other = null;
        if (e.src === n) other = e.tgt;
        if (e.tgt === n) other = e.src;
        if (!other || !other.visible) return;
        const dx = other.x - n.x;
        const dy = other.y - n.y;
        fx += dx * K;
        fy += dy * K;
      });

      fx += (W / 2 - n.x) * CENTER_PULL;
      fy += (H / 2 - n.y) * CENTER_PULL;

      n.vx = (n.vx + fx * 0.1) * DAMPING;
      n.vy = (n.vy + fy * 0.1) * DAMPING;
      n.x += n.vx;
      n.y += n.vy;

      const pad = n.r + 20;
      if (n.x < pad) { n.x = pad; n.vx *= -0.5; }
      if (n.x > W - pad) { n.x = W - pad; n.vx *= -0.5; }
      if (n.y < pad) { n.y = pad; n.vy *= -0.5; }
      if (n.y > H - pad) { n.y = H - pad; n.vy *= -0.5; }
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
      const opacity = hoveredNode ? (isHighlighted ? 0.7 : 0.05) : 0.18;

      if (isHighlighted) {
        const progress = ((tick * 0.01 + e.pulseOffset) % 1);
        const px = e.src.x + (e.tgt.x - e.src.x) * progress;
        const py = e.src.y + (e.tgt.y - e.src.y) * progress;

        ctx.beginPath();
        ctx.moveTo(e.src.x, e.src.y);
        ctx.lineTo(e.tgt.x, e.tgt.y);
        ctx.strokeStyle = `rgba(96,165,250,${opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96,165,250,0.9)';
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(e.src.x, e.src.y);
        ctx.lineTo(e.tgt.x, e.tgt.y);
        ctx.strokeStyle = `rgba(96,165,250,${opacity})`;
        ctx.lineWidth = 0.8;
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
        const ringR = r + pulse * 12;
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
      ctx.strokeStyle = isHovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)';
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      const fontSize = Math.max(8, Math.min(11, r * 0.55));
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.font = `700 ${fontSize}px "Syne", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const words = n.title.split(' ');
      if (words.length <= 2 || r < 15) {
        const label = n.title.length > 12 ? n.title.substring(0, 11) + '\u2026' : n.title;
        ctx.fillText(label, n.x, n.y);
      } else {
        const mid = Math.ceil(words.length / 2);
        const line1 = words.slice(0, mid).join(' ');
        const line2 = words.slice(mid).join(' ');
        ctx.fillText(line1, n.x, n.y - fontSize * 0.6);
        ctx.fillText(line2, n.x, n.y + fontSize * 0.6);
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
    const col = CAT_COLORS[node.category] || CAT_COLORS.apps;
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
        <div class="preview-label">Live System \u2014 Click to View</div>
      </div>
      <div class="panel-buttons">
        <a href="${node.url}" target="_blank" rel="noopener noreferrer" class="panel-btn-primary">View Live \u2192</a>
        <a href="https://aisymmetricsolutions.com/#contact" target="_blank" rel="noopener noreferrer" class="panel-btn-ghost">Build Similar</a>
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

  // Escape key to close panel
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      nodes.forEach(n => {
        n.visible = (activeFilter === 'all' || n.category === activeFilter);
      });
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
