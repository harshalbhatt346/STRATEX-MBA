import { Subject } from '../types';

export const MBA_SUBJECTS: Subject[] = [
  {
    id: 'marketing',
    code: 'MKT-801',
    title: 'Marketing Management',
    description: 'Master market segmentation, strategic positioning, marketing mix allocation, price elasticity, and full-funnel customer acquisition in hyper-competitive markets.',
    icon: 'Megaphone',
    accentColor: 'indigo',
    simulationIds: ['mkt-beverage-wars', 'mkt-brand-launch'],
    concepts: [
      {
        id: 'stp-framework',
        subjectId: 'marketing',
        name: 'STP Framework (Segmentation, Targeting, Positioning)',
        tagline: 'Dividing broad markets into addressable segments and staking an uncontested mindshare position.',
        description: 'Segmentation divides heterogeneous consumers into distinct demographic/psychographic clusters. Targeting selects the highest-value viable segment. Positioning carves a defensible psychological identity in the consumer mind.',
        keyFramework: 'Kotler 3-Step STP Matrix & Perceptual Mapping',
        realWorldExample: 'Apple positioning the iPhone as premium lifestyle vs OnePlus initial "Flagship Killer" tech-enthusiast targeting.',
        simulationId: 'mkt-beverage-wars'
      },
      {
        id: 'marketing-mix-4ps',
        subjectId: 'marketing',
        name: 'Marketing Mix (Product, Price, Place, Promotion)',
        tagline: 'The tactical operational levers required to execute a positioning strategy.',
        description: 'Balancing product features with pricing power, distribution channel coverage (Place), and integrated marketing communications (Promotion) under strict budget caps.',
        keyFramework: 'McCarthy 4Ps & Lauterborn 4Cs Model',
        realWorldExample: 'Red Bull investing heavily in extreme sports sponsorship (Promotion) and high-margin retail refrigerators (Place).',
        simulationId: 'mkt-beverage-wars'
      },
      {
        id: 'cac-ltv-ratio',
        subjectId: 'marketing',
        name: 'Unit Economics: CAC vs LTV',
        tagline: 'The mathematical foundation of sustainable customer acquisition and lifetime value.',
        description: 'Customer Acquisition Cost (CAC) must be compensated by Customer Lifetime Value (LTV). A healthy consumer business maintains an LTV:CAC ratio >= 3:1 with CAC payback < 12 months.',
        keyFramework: 'LTV = (ARPU * Gross Margin %) / Churn Rate',
        formula: 'LTV / CAC >= 3.0',
        realWorldExample: 'Netflix optimizing content spend to lower churn and maximize lifetime subscription value.',
        simulationId: 'mkt-brand-launch'
      },
      {
        id: 'brand-equity-pricing',
        subjectId: 'marketing',
        name: 'Brand Equity & Pricing Power',
        tagline: 'Translating consumer trust into price premiums and barrier against rival discount wars.',
        description: 'Customer-based brand equity (CBBE) creates willingness-to-pay. When rivals discount, high brand equity insulates sales volumes and protects gross margins.',
        keyFramework: 'Keller CBBE Pyramid (Salience, Meaning, Response, Resonance)',
        realWorldExample: 'Coca-Cola maintaining price points while private label colas discount aggressively.',
        simulationId: 'mkt-beverage-wars'
      }
    ]
  },
  {
    id: 'product',
    code: 'PRD-802',
    title: 'Product Management',
    description: 'Learn discovery interviews, Jobs-to-be-Done (JTBD), RICE prioritization, MVP definition, cohort retention analytics, and product-market fit iteration.',
    icon: 'Layers',
    accentColor: 'emerald',
    simulationIds: ['prd-build-mvp', 'prd-fix-declining-product'],
    concepts: [
      {
        id: 'jobs-to-be-done',
        subjectId: 'product',
        name: 'Jobs to Be Done (JTBD)',
        tagline: 'Customers do not buy products; they hire them to make progress in a specific life situation.',
        description: 'Focus on the underlying functional, emotional, and social struggle rather than demographic attributes or laundry lists of feature requests.',
        keyFramework: 'Clayton Christensen JTBD Progress Matrix',
        realWorldExample: 'McDonalds milkshakes hired for boring morning highway commutes rather than just as a sweet dessert.',
        simulationId: 'prd-build-mvp'
      },
      {
        id: 'rice-prioritization',
        subjectId: 'product',
        name: 'RICE Feature Prioritization',
        tagline: 'Objective, quantitative ranking of product initiatives under constrained engineering capacity.',
        description: 'Scores product initiatives across Reach, Impact, Confidence, and Effort to eliminate subjective HIPPO (Highest Paid Persons Opinion) decisions.',
        keyFramework: 'RICE = (Reach * Impact * Confidence) / Effort',
        formula: 'Score = (R * I * C) / E',
        realWorldExample: 'Intercom scoring customer onboarding improvements over speculative AI widgets.',
        simulationId: 'prd-build-mvp'
      },
      {
        id: 'cohort-retention-analysis',
        subjectId: 'product',
        name: 'Cohort Retention Curves & Churn Diagnostics',
        tagline: 'Identifying whether your product has a leaky bucket before spending money on acquisition.',
        description: 'Tracking user cohorts over Day 1, Day 7, Day 30. A flattening retention curve indicates true product-market fit; a downward sloping curve signals fundamental value deficit.',
        keyFramework: 'Retention Smile vs Churn Cliff Analysis',
        realWorldExample: 'Slack tracking teams sending 2,000+ messages as the definitive leading indicator of perpetual retention.',
        simulationId: 'prd-fix-declining-product'
      }
    ]
  },
  {
    id: 'microeconomics',
    code: 'ECO-803',
    title: 'Microeconomics for Managers',
    description: 'Explore price elasticity of demand, marginal revenue vs marginal cost equilibrium, Bertrand price wars, contestable markets, and game theory.',
    icon: 'TrendingUp',
    accentColor: 'amber',
    simulationIds: ['eco-pricing-pressure', 'eco-market-entry'],
    concepts: [
      {
        id: 'price-elasticity',
        subjectId: 'microeconomics',
        name: 'Price Elasticity of Demand (Ped)',
        tagline: 'Measuring consumer sensitivity to price shifts and its direct impact on total revenue.',
        description: 'When Ped > 1 (elastic), price cuts increase total revenue. When Ped < 1 (inelastic), price hikes increase revenue. Knowing elasticity prevents disastrous margin erosion.',
        keyFramework: 'Ped = (% Change in Quantity Demanded) / (% Change in Price)',
        formula: 'E_d = (dQ / dP) * (P / Q)',
        realWorldExample: 'Airlines using dynamic yield pricing to capture inelastic business flyers and elastic leisure travelers.',
        simulationId: 'eco-pricing-pressure'
      },
      {
        id: 'bertrand-price-war',
        subjectId: 'microeconomics',
        name: 'Bertrand Competition & Marginal Cost Traps',
        tagline: 'Why price-matching competitors in homogeneous markets drives economic profits to zero.',
        description: 'In an oligopoly with undifferentiated goods, price competition spirals down to marginal cost (P = MC), destroying enterprise valuation unless differentiated.',
        keyFramework: 'Bertrand Duopoly Model vs Cournot Quantity Competition',
        realWorldExample: 'Telecom tariff price wars in India (Jio vs Airtel vs Vodafone) slashing industry ARPU.',
        simulationId: 'eco-pricing-pressure'
      },
      {
        id: 'barriers-to-entry-mes',
        subjectId: 'microeconomics',
        name: 'Barriers to Entry & Minimum Efficient Scale (MES)',
        tagline: 'How fixed capital intensity protects incumbents against new market entrants.',
        description: 'Incumbents at Minimum Efficient Scale produce at lowest average total cost. New entrants face higher per-unit costs and retaliatory incumbent pricing.',
        keyFramework: 'Bain Barriers to Entry & MES Cost Curve',
        realWorldExample: 'Semiconductor foundries requiring $20B+ CapEx before producing a single commercially viable chip.',
        simulationId: 'eco-market-entry'
      }
    ]
  },
  {
    id: 'ob',
    code: 'OB-804',
    title: 'Organizational Behaviour',
    description: 'Navigate team dysfunctions, psychological safety, intrinsic vs extrinsic motivation, power dynamics, conflict resolution, and Kotter change management.',
    icon: 'Users',
    accentColor: 'rose',
    simulationIds: ['ob-underperforming-team', 'ob-leading-change'],
    concepts: [
      {
        id: 'psychological-safety',
        subjectId: 'ob',
        name: 'Psychological Safety & High Performance',
        tagline: 'The shared belief that a team is safe for interpersonal risk-taking and candid dissent.',
        description: 'Amy Edmondson research proves team performance correlates with psychological safety rather than raw individual intelligence. Teams without fear report errors faster and innovate boldly.',
        keyFramework: 'Edmondson Psychological Safety Matrix',
        realWorldExample: 'Google Project Aristotle finding psychological safety as the #1 determinant of team effectiveness.',
        simulationId: 'ob-underperforming-team'
      },
      {
        id: 'herzberg-dual-factor',
        subjectId: 'ob',
        name: 'Herzbergs Motivation-Hygiene Theory',
        tagline: 'Why removing dissatisfaction factors (pay, policy) does not automatically generate true motivation.',
        description: 'Hygiene factors (salary, working conditions) prevent discontent but do not inspire peak work. Motivators (achievement, recognition, autonomy, growth) drive discretionary effort.',
        keyFramework: 'Two-Factor Theory (Hygiene vs Motivator Spectrum)',
        realWorldExample: 'Tech companies offering ping pong tables (hygiene) while employees resign over lack of meaningful autonomy (motivator).',
        simulationId: 'ob-underperforming-team'
      },
      {
        id: 'kotter-change-model',
        subjectId: 'ob',
        name: 'Kotters 8-Step Change Framework',
        tagline: 'Transforming legacy organizational culture without triggering mutiny or structural paralysis.',
        description: 'Successful corporate transformation requires: Urgency -> Guiding Coalition -> Vision -> Communicating -> Removing Obstacles -> Quick Wins -> Consolidating -> Anchoring in Culture.',
        keyFramework: 'John Kotter 8-Stage Transformation Model',
        realWorldExample: 'Lou Gerstner turning around IBM in the 1990s from hardware vendor to software/services giant.',
        simulationId: 'ob-leading-change'
      }
    ]
  },
  {
    id: 'strategy',
    code: 'STR-805',
    title: 'Business Strategy',
    description: 'Diagnose competitive industry structure with Porter Five Forces, build defensible moats with VRIO, navigate Innovators Dilemmas, and evaluate global M&A expansion.',
    icon: 'Compass',
    accentColor: 'violet',
    simulationIds: ['str-defend-market', 'str-business-expansion'],
    concepts: [
      {
        id: 'porters-five-forces',
        subjectId: 'strategy',
        name: 'Porters Five Forces of Industry Attractiveness',
        tagline: 'Analyzing the structural economic forces that determine long-term industry profitability.',
        description: 'Rivalry among existing competitors, threat of new entrants, bargaining power of buyers, bargaining power of suppliers, and threat of substitutes determine where value is captured.',
        keyFramework: 'Michael Porter Five Forces Model',
        realWorldExample: 'Commercial aviation has high rivalry, powerful suppliers (Boeing/Airbus), and high buyer power, yielding low average ROIC.',
        simulationId: 'str-defend-market'
      },
      {
        id: 'vrio-framework',
        subjectId: 'strategy',
        name: 'VRIO Framework & Sustainable Competitive Advantage',
        tagline: 'Evaluating whether firm internal resources yield temporary parity or a defensible economic moat.',
        description: 'A resource must be Valuable, Rare, Inimitable, and Organized to generate sustained above-average economic returns.',
        keyFramework: 'Barney Resource-Based View (RBV) / VRIO Matrix',
        realWorldExample: 'TSMC advanced sub-3nm packaging processes are inimitable and backed by decades of proprietary tooling.',
        simulationId: 'str-defend-market'
      },
      {
        id: 'innovators-dilemma',
        subjectId: 'strategy',
        name: 'The Innovators Dilemma',
        tagline: 'Why well-managed incumbents fail when disrupted by cheaper, lower-margin technologies.',
        description: 'Incumbents listen to their best existing customers who demand higher-end features, leaving the lower-margin entry-level exposed to disruptive upstarts who steadily improve.',
        keyFramework: 'Clayton Christensen Disruption Theory',
        realWorldExample: 'Kodak inventing digital photography but suppressing it to preserve high-margin chemical film revenues.',
        simulationId: 'str-defend-market'
      }
    ]
  },
  {
    id: 'finance',
    code: 'FIN-806',
    title: 'Financial Resource Analysis & Accounting',
    description: 'Analyze working capital crises, perform DuPont ROE decomposition, evaluate capital allocation with NPV/IRR/WACC hurdle rates, and manage debt covenants.',
    icon: 'DollarSign',
    accentColor: 'cyan',
    simulationIds: ['fin-save-business', 'fin-allocate-capital'],
    concepts: [
      {
        id: 'dupont-analysis',
        subjectId: 'finance',
        name: 'DuPont ROE Decomposition',
        tagline: 'Deconstructing Return on Equity into Operating Efficiency, Asset Utilization, and Financial Leverage.',
        description: 'ROE = Net Profit Margin * Asset Turnover * Financial Leverage Multiplier. Pinpoints whether profits stem from genuine margins or dangerous borrowing.',
        keyFramework: 'ROE = (Net Income / Sales) * (Sales / Assets) * (Assets / Equity)',
        formula: 'ROE = Margin * Turnover * Leverage',
        realWorldExample: 'Costco generating high ROE through blistering inventory turnover rather than high gross profit margins.',
        simulationId: 'fin-save-business'
      },
      {
        id: 'working-capital-cycle',
        subjectId: 'finance',
        name: 'Working Capital & Cash Conversion Cycle (CCC)',
        tagline: 'How fast inventory and accounts receivable convert into liquid cash to avoid bankruptcy.',
        description: 'CCC = Days Sales of Inventory (DSI) + Days Sales Outstanding (DSO) - Days Payables Outstanding (DPO). A negative CCC enables growth funded by suppliers.',
        keyFramework: 'Cash Conversion Cycle = DSI + DSO - DPO',
        formula: 'CCC = DSI + DSO - DPO',
        realWorldExample: 'Amazon operating with a negative cash conversion cycle, generating free cash flow before paying suppliers.',
        simulationId: 'fin-save-business'
      },
      {
        id: 'capital-budgeting-npv',
        subjectId: 'finance',
        name: 'Capital Budgeting: NPV, IRR & Hurdle Rates',
        tagline: 'Allocating scarce balance sheet capital across competing investments to maximize enterprise value.',
        description: 'Net Present Value discounts future free cash flows by Weighted Average Cost of Capital (WACC). Any project with NPV > 0 creates shareholder value.',
        keyFramework: 'NPV = Sum [ CF_t / (1 + WACC)^t ] - Initial CapEx',
        formula: 'NPV = \\sum_{t=1}^n \\frac{CF_t}{(1+r)^t} - C_0',
        realWorldExample: 'Mining conglomerate choosing between a $500M copper mine (IRR 18%) vs lithium refinery (IRR 24%).',
        simulationId: 'fin-allocate-capital'
      }
    ]
  },
  {
    id: 'statistics',
    code: 'STA-807',
    title: 'Business Statistics for Decision Makers',
    description: 'Work with real numerical datasets: calculate multivariate regressions, test hypotheses with t-tests and p-values, avoid p-hacking, and detect correlation vs causation.',
    icon: 'BarChart3',
    accentColor: 'teal',
    simulationIds: ['sta-investigate-csat', 'sta-ab-test-campaign'],
    concepts: [
      {
        id: 'correlation-vs-causation',
        subjectId: 'statistics',
        name: 'Correlation vs Causation & Confounding Variables',
        tagline: 'Why co-movement in two metrics does not mean one caused the other.',
        description: 'High correlation (r) can be driven by hidden lurking variables or reverse causality. Confounding variables mislead management into wasteful expenditures.',
        keyFramework: 'Pearsons r Correlation Matrix & Omitted Variable Bias',
        formula: 'r = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sqrt{\\sum(X-\\bar{X})^2 \\sum(Y-\\bar{Y})^2}}',
        realWorldExample: 'Ice cream sales and shark attacks correlate strongly, but both are caused by summer temperature, not each other.',
        simulationId: 'sta-investigate-csat'
      },
      {
        id: 'hypothesis-testing-p-value',
        subjectId: 'statistics',
        name: 'Hypothesis Testing, t-Tests & p-Values',
        tagline: 'Determining whether business improvements are real signal or random noise.',
        description: 'Testing Null Hypothesis (H0: no difference) against Alternative (H1). A p-value < 0.05 indicates less than a 5% chance the result was purely accidental luck.',
        keyFramework: 'Two-Sample Student t-Test & Confidence Intervals',
        formula: 't = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}',
        realWorldExample: 'Booking.com running 1,000 concurrent A/B tests to verify 0.3% checkout conversion gains with 99% confidence.',
        simulationId: 'sta-ab-test-campaign'
      },
      {
        id: 'type1-type2-errors',
        subjectId: 'statistics',
        name: 'Type I (Alpha) vs Type II (Beta) Decision Errors',
        tagline: 'The managerial trade-off between false alarms and missed breakthrough opportunities.',
        description: 'Type I error is a False Positive (shipping a feature that didn’t actually work). Type II error is a False Negative (killing a winning initiative due to underpowered sample size).',
        keyFramework: 'Statistical Power Matrix (1 - Beta) vs Alpha Significance',
        realWorldExample: 'Pharma drug approval vs tech MVP rollouts balancing risk of false claims vs innovation delay.',
        simulationId: 'sta-ab-test-campaign'
      }
    ]
  },
  {
    id: 'operations',
    code: 'OPS-808',
    title: 'Operations Management',
    description: 'Analyze supply chain disruptions, mitigate Bullwhip effects, calculate Economic Order Quantity (EOQ), apply Theory of Constraints, and optimize factory throughput.',
    icon: 'Boxes',
    accentColor: 'orange',
    simulationIds: ['ops-supply-chain-crisis', 'ops-optimize-factory'],
    concepts: [
      {
        id: 'theory-of-constraints',
        subjectId: 'operations',
        name: 'Theory of Constraints & Bottleneck Management',
        tagline: 'An entire system throughput is strictly governed by its single slowest resource.',
        description: 'Eli Goldratt Five Focusing Steps: Identify the constraint, Exploit it, Subordinate everything else, Elevate the constraint, and Prevent inertia.',
        keyFramework: 'Goldratt Drum-Buffer-Rope (DBR) Model',
        realWorldExample: 'Airport security checkpoints dictating passenger flight boarding throughput regardless of runway size.',
        simulationId: 'ops-optimize-factory'
      },
      {
        id: 'bullwhip-effect',
        subjectId: 'operations',
        name: 'The Bullwhip Effect in Supply Chains',
        tagline: 'How tiny fluctuations in retail demand cause catastrophic swings upstream for component manufacturers.',
        description: 'Lack of end-consumer transparency, order batching, price promotions, and panic rationing cause distortion to amplify as orders move upstream to raw material suppliers.',
        keyFramework: 'Sterman Beer Distribution Game Dynamics',
        realWorldExample: 'The post-COVID semiconductor shortage where auto plants canceled chip orders and then faced 18-month lead times.',
        simulationId: 'ops-supply-chain-crisis'
      },
      {
        id: 'littles-law',
        subjectId: 'operations',
        name: 'Littles Law & Cycle Time Optimization',
        tagline: 'The mathematical relationship linking Work-In-Progress, Throughput, and Lead Time.',
        description: 'Work In Progress (WIP) = Throughput (TH) * Cycle Time (CT). To cut lead time without lowering output, you must strictly cap work-in-progress inventory.',
        keyFramework: 'WIP = Throughput x Cycle Time',
        formula: 'L = \\lambda \\times W',
        realWorldExample: 'Toyota Production System limiting factory floor buffer carts to keep defect feedback cycles immediate.',
        simulationId: 'ops-optimize-factory'
      }
    ]
  }
];
