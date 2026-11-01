import { Simulation } from '../../types';

export const marketingSimulations: Simulation[] = [
  {
    id: 'mkt-beverage-wars',
    subjectId: 'marketing',
    conceptId: 'stp-framework',
    relatedConcepts: ['Marketing Mix (4Ps)', 'Brand Equity', 'Price Elasticity', 'Trade Promotions'],
    title: 'Beverage Market Competition: The Cola Wars of South Asia',
    tagline: 'Defend your market share against a global cola giant and an aggressive regional low-cost challenger.',
    role: 'Chief Marketing Officer (CMO), Zest Beverages India',
    company: 'Zest Beverages Ltd.',
    industry: 'FMCG / Packaged Carbonated & Herbal Beverages',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'Founded in 2014 in Pune, Zest Beverages captured 18.5% market share in Western and Southern India through "Zest Cola" (infused with Ayurvedic herbs and 25% less sugar) and "Citrus Burst". The brand resonated strongly with millennial tier-1 and tier-2 city consumers looking for natural indulgence.',
      industryContext: 'The Indian carbonated beverage market (₹42,000 Cr) is dominated by global heavyweight "Apex Cola" (44% share) with unlimited ad budgets. Meanwhile, aggressive local player "Desh Fizz" (21% share) has entered a brutal price-slashing campaign at ₹10 per 250ml bottle, squeezing retail shelves.',
      currentSituation: 'Zest Beverages has seen market share dip from 18.5% to 16.8% over the past two quarters. Younger Gen-Z consumers perceive Zest as "what my elder brother drinks," while rural distribution remains bottlenecked by Desh Fizz\'s aggressive retailer commissions. Management has allocated a strict ₹5.0 Cr quarterly marketing budget.'
    },
    objectives: [
      'Halt market share contraction and rebound above 19.5% within 4 quarters.',
      'Maintain an EBITDA margin above 16.0% despite competitor price promotions.',
      'Revitalize youth brand sentiment index among 18-24 demographics from 52 to >70.'
    ],
    constraints: [
      'Quarterly marketing expenditure strictly capped at ₹5.0 Crore.',
      'Cannot drop retail selling price below ₹18 without board audit approval.',
      'General trade distributor network cannot absorb more than 30-day payment credit.'
    ],
    initialMetrics: [
      { key: 'marketShare', label: 'Market Share', value: 16.8, unit: '%', isGoodWhenHigh: true, benchmark: 20.0, description: 'Volume market share across target urban and semi-urban markets' },
      { key: 'revenue', label: 'Quarterly Revenue', value: 48.5, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 55.0, description: 'Net gross billings to distribution partners' },
      { key: 'ebitdaMargin', label: 'EBITDA Margin', value: 17.2, unit: '%', isGoodWhenHigh: true, benchmark: 18.0, description: 'Operating profitability before tax and amortization' },
      { key: 'brandSalience', label: 'Brand Salience (Youth)', value: 54, unit: '/100', isGoodWhenHigh: true, benchmark: 75, description: 'Spontaneous top-of-mind recall among consumers aged 18-25' },
      { key: 'cac', label: 'Blended CAC', value: 24.5, unit: '₹', isGoodWhenHigh: false, benchmark: 18.0, description: 'Estimated marketing cost to acquire an active monthly drinker' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Quarter 1: Marketing Mix & Budget Allocation',
        quarterOrTimeline: 'Q1 - Summer Peak Season Onset',
        briefing: 'Summer is approaching—the peak 90-day window accounting for 45% of annual beverage consumption. You have ₹5.0 Cr in marketing capital. Your executive committee is divided between mass reach, digital youth engagement, and retail trade dominance.',
        marketIntel: {
          headline: 'Apex Cola launches ₹40 Cr multi-starrer Bollywood TV campaign',
          competitorMove: 'Apex is bombarding prime-time sports and IPL slots. Meanwhile, Desh Fizz is giving neighborhood Kirana shopkeepers free display chillers.',
          macroEnvironment: 'Raw sugar and PET resin commodity costs have increased by 4%, tightening manufacturing gross margins by 110 bps.',
          internalWhisper: 'VP of Sales says: "If we don\'t pay retail shelf allowances, shopkeepers will stash Zest in the backroom!"'
        },
        urgentQuestion: 'How do you strategically allocate your ₹5.0 Crore quarterly marketing budget?',
        choices: [
          {
            id: 'q1-a',
            title: 'Mass TV & Outdoor Blitz (The Apex Counter-Offensive)',
            description: 'Allocate ₹3.8 Cr to regional TV entertainment networks and metro billboards, with ₹1.2 Cr in trade point-of-sale banners.',
            tradeOffs: {
              pros: ['High gross impressions (GRPs) across family audiences', 'Reassures institutional distributors of brand stability'],
              cons: ['High media wastage among uninterested demographics', 'Severe price per thousand impressions (CPM) in bidding war against Apex']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Mass reach stabilized awareness among older households, but younger consumers tuned out. High media rates consumed the budget with little conversion.',
              detailedAnalysis: 'Competing on television against a rival with an 8x larger ad spend created voice-share dilution. Your Share of Voice (SOV) remained under 12%, failing to generate incremental velocity.',
              metricDeltas: { marketShare: 0.3, revenue: 1.8, ebitdaMargin: -1.4, brandSalience: 3, cac: 5.2 },
              competitorReaction: 'Apex outbid your prime slots effortlessly; Desh Fizz ate up low-tier mom-and-pop distribution.',
              stakeholderFeedback: 'CEO: "We spent ₹3.8 Cr on TV and barely made a ripple against Apex\'s cricket takeover."',
              theorySnippet: {
                framework: 'Share of Voice (SOV) vs Share of Market (SOM)',
                takeaway: 'Challenger brands fighting incumbents with symmetric mass media tactics suffer from disproportionate diminishing returns.'
              }
            }
          },
          {
            id: 'q1-b',
            title: 'Digital-First & College Campus Grassroots Activation',
            description: 'Allocate ₹3.0 Cr to viral social video, university sports leagues, music festivals, and micro-influencers; ₹2.0 Cr to quick-commerce visibility (Blinkit, Zepto, Instamart).',
            tradeOffs: {
              pros: ['Pinpoint targeting of 18-24 demographic', 'Huge surge in quick-commerce instant deliveries in top 15 metros'],
              cons: ['Neglects traditional general trade (Kirana stores) where 70% of rural volume sits', 'Quick-commerce platform discount cuts squeeze net realization']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Youth brand sentiment exploded! Zest became the #1 trending drink on quick-commerce apps across Bangalore, Mumbai, and Delhi.',
              detailedAnalysis: 'Targeting Gen-Z where consumption decisions are impulsive generated high viral engagement and trial among college students. However, absence in highway dhabas and rural retail capped volume upside.',
              metricDeltas: { marketShare: 1.4, revenue: 4.6, ebitdaMargin: -0.6, brandSalience: 16, cac: -6.5 },
              competitorReaction: 'Desh Fizz ignored your digital push, continuing to flood tier-3 towns. Apex began planning a copycat social campaign.',
              stakeholderFeedback: 'Head of Growth: "Our quick-commerce conversion rates doubled and repeat customer rates among 19-year-olds reached 38%!"',
              theorySnippet: {
                framework: 'Targeting & Channel Affinity (Kotler STP)',
                takeaway: 'Matching marketing channels directly to the behavioral habitat of your high-affinity target segment unlocks superior CAC efficiency.'
              }
            }
          },
          {
            id: 'q1-c',
            title: 'Aggressive Trade Distribution & Retail Push Strategy',
            description: 'Deploy ₹3.5 Cr directly into retailer push margins, free branded chillers, and distributor volume rebates; ₹1.5 Cr into regional vernacular radio and outdoor.',
            tradeOffs: {
              pros: ['Secures prime eye-level retail shelf placement', 'Distributors aggressively push Zest over competitors'],
              cons: ['Generates minimal consumer pull; retailers may pocket discounts without pushing product', 'EBITDA margin contracts heavily due to distributor concessions']
            },
            riskLevel: 'High',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Stock flooded kirana stores, but bottles moved sluggishly off shelves because consumer brand pull had not been reignited.',
              detailedAnalysis: 'A pure push strategy without matching consumer pull leads to channel inventory buildup. Retailers demanded even higher margins as bottles approached 60-day shelf life.',
              metricDeltas: { marketShare: 0.8, revenue: 2.5, ebitdaMargin: -2.8, brandSalience: -1, cac: 3.8 },
              competitorReaction: 'Desh Fizz countered by slashing prices by another ₹2, igniting a margin war among Kirana associations.',
              stakeholderFeedback: 'Finance Director: "Trade discounts jumped to 24% of gross sales! Our operating margins are bleeding."',
              theorySnippet: {
                framework: 'Push vs Pull Channel Strategy',
                takeaway: 'Push strategy fills the distribution pipeline; Pull strategy empties it into consumer shopping baskets. Over-indexing on push destroys pricing power.'
              }
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Quarter 2: Competitor Price War Eruption',
        quarterOrTimeline: 'Q2 - High Summer Climax',
        briefing: 'Desh Fizz has unleashed a predatory pricing offensive, introducing an oversized 300ml bottle at ₹10 (undercutting Zest\'s 250ml at ₹20 by 50%). Simultaneously, Apex Cola launched a "Buy 1 Get 1 Free" weekend promo in modern retail supermarkets.',
        marketIntel: {
          headline: 'Desh Fizz volume surges 35% in semi-urban pockets',
          competitorMove: 'Kirana owners are openly replacing tier-2 beverage displays with Desh Fizz due to fast cash turns.',
          macroEnvironment: 'Inflation in food and dining out is making low-income wage earners extremely price sensitive.',
          internalWhisper: 'Regional sales managers are panicking: "Clients are asking if Zest is going to launch a ₹10 mini bottle or cut prices immediately!"'
        },
        urgentQuestion: 'How do you respond to predatory price slashing without committing financial suicide?',
        choices: [
          {
            id: 'q2-a',
            title: 'Direct Price Match: Slash Zest 250ml to ₹12',
            description: 'Initiate an emergency price drop to match competitor unit pricing, betting on volume elasticity to cover fixed costs.',
            tradeOffs: {
              pros: ['Instantly arrests customer switching in price-sensitive retail zones', 'Distributors feel competitive on price'],
              cons: ['Eviscerates gross margins from 58% to 32%', 'Cheapens brand positioning and conditions consumers to never pay ₹20 again']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Disaster for profitability. Volumes spiked briefly by 18%, but revenue dropped and EBITDA turned negative.',
              detailedAnalysis: 'Because demand elasticity for a differentiated herbal beverage was below 1.5, the volume surge did not compensate for the 40% reduction in price per unit. You triggered a classic Bertrand price war trap.',
              metricDeltas: { marketShare: 1.1, revenue: -5.4, ebitdaMargin: -5.8, brandSalience: -8, cac: 4.1 },
              competitorReaction: 'Desh Fizz owner gloated in trade press, boasting they have lower manufacturing overhead and can outlast Zest.',
              stakeholderFeedback: 'Board Chairman: "You destroyed our gross margins. We are losing ₹1.80 on every single bottle sold!"',
              theorySnippet: {
                framework: 'Bertrand Price War & Margin Destruction',
                takeaway: 'In differentiated categories, price matching a low-cost commodity producer surrenders your value proposition and destroys enterprise value.'
              }
            }
          },
          {
            id: 'q2-b',
            title: 'Value-Add Differentiation: The "Real Ingredients, Zero Junk" Campaign',
            description: 'Maintain the ₹20 price point. Launch an aggressive consumer education campaign highlighting 100% natural fruit juices and Ayurvedic botanical energy vs competitors\' synthetic chemicals and high fructose syrup.',
            tradeOffs: {
              pros: ['Protects premium margin structure and brand prestige', 'Attracts health-conscious, upwardly mobile urban consumers'],
              cons: ['Cedes extreme price-sensitive rural consumers to Desh Fizz', 'Requires high consumer trust in ingredient claims']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Masterful strategic positioning! Health-conscious young consumers and young mothers switched to Zest as the "guilt-free" alternative.',
              detailedAnalysis: 'By reframing the decision from "Price per ml" to "Clean healthy ingredients vs synthetic chemical water," you stepped out of the commodity battlefield. Gross margin stayed rock solid at 58%.',
              metricDeltas: { marketShare: 2.1, revenue: 5.8, ebitdaMargin: 2.2, brandSalience: 14, cac: -4.2 },
              competitorReaction: 'Desh Fizz faced backlash after a food safety watchdog questioned their artificial coloring additives.',
              stakeholderFeedback: 'Brand Ambassador: "College athletes and fitness influencers are actively posting Zest cans on Instagram without us even paying them!"',
              theorySnippet: {
                framework: 'Differentiation & Consumer Value Proposition',
                takeaway: 'When competitors compete on price, redefine the basis of competition to attributes where they cannot follow without re-engineering their entire product.'
              }
            }
          },
          {
            id: 'q2-c',
            title: 'Fighter Brand Introduction: Launch "Zap Fizz" at ₹10',
            description: 'Create a stripped-down, synthetic mass-market sub-brand ("Zap Fizz") sold exclusively in tier-3 markets at ₹10, keeping core "Zest Cola" untouched at ₹20.',
            tradeOffs: {
              pros: ['Directly attacks Desh Fizz in rural markets without diluting core Zest equity', 'Shields flagship brand gross margins'],
              cons: ['Splits sales force attention and complicates manufacturing supply chain', 'Requires ₹1.8 Cr tooling and new packaging setup costs']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Effective tactical defense, though manufacturing complexity delayed rollout by 4 weeks.',
              detailedAnalysis: 'The fighter brand slowed Desh Fizz\'s rural expansion. However, supply chain friction and cannibalization of low-end Zest buyers diluted the net economic gain.',
              metricDeltas: { marketShare: 1.2, revenue: 2.1, ebitdaMargin: -1.8, brandSalience: 2, cac: 1.5 },
              competitorReaction: 'Desh Fizz was forced to spend capital defending their core markets rather than invading your strongholds.',
              stakeholderFeedback: 'Operations Head: "Our bottling lines are strained switching between 250ml glass and 300ml Zap PET bottles."',
              theorySnippet: {
                framework: 'Fighter Brand Strategy (Ritson & Kumar)',
                takeaway: 'Fighter brands must be strictly ring-fenced to prevent cannibalizing your premium cash cow or overburdening operations.'
              }
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Quarter 3: Retail Margin Rebellion & Channel Squeeze',
        quarterOrTimeline: 'Q3 - Monsoon Transition',
        briefing: 'The All-India FMCG Retailers Association in your key state has sent an ultimatum: increase retailer trade margins from 12% to 18%, or face an organized boycott where Zest products will be removed from prime billing checkout counters in 12,000 retail stores.',
        marketIntel: {
          headline: 'Retail associations flex muscle against mid-sized FMCG brands',
          competitorMove: 'Apex Cola agreed to sponsor store branding glow-signs to appease retailers; Desh Fizz already offers 20% trade margins.',
          macroEnvironment: 'Monsoon season traditionally depresses outdoor cold beverage sales by 25%; quick-commerce home delivery spikes by 40%.',
          internalWhisper: 'Head of Sales warning: "If we refuse, we might lose 35% of physical distribution in Maharashtra and Karnataka within 14 days."'
        },
        urgentQuestion: 'How do you handle the retailer trade margin ultimatum?',
        choices: [
          {
            id: 'q3-a',
            title: 'Capitulate and Grant the Full 18% Retail Margin',
            description: 'Concede to retailer demands across the board to preserve physical distribution footprint and prevent immediate shelf eviction.',
            tradeOffs: {
              pros: ['Ensures zero disruption in general trade retail placement', 'Prevents store associations from declaring boycott'],
              cons: ['Permanently surrenders 600 bps of operating margin', 'Sets dangerous precedent of giving in to trade union pressure']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Retained distribution, but at a punishing financial cost that crippled Q3 marketing reinvestment.',
              detailedAnalysis: 'Giving away 6% of gross revenue to trade intermediaries wiped out operating profits. Retailers accepted the margin but offered no incremental display effort.',
              metricDeltas: { marketShare: -0.2, revenue: -1.2, ebitdaMargin: -4.5, brandSalience: -2, cac: 3.1 },
              competitorReaction: 'Competitors watched your profitability crash; retailers immediately began demanding 20% for next quarter.',
              stakeholderFeedback: 'CFO: "We just gave away ₹2.9 Cr of annual cash flow directly into retailer pockets with zero performance guarantees!"',
              theorySnippet: {
                framework: 'Channel Power & Margin Concessions',
                takeaway: 'Unconditional margin concessions destroy economic profit. Channel incentives must always be tied to volume growth or exclusive display compliance.'
              }
            }
          },
          {
            id: 'q3-b',
            title: 'Tiered Performance Rebates + Quick-Commerce Channel Pivot',
            description: 'Offer a baseline 13% margin, but add a 5% bonus rebate strictly contingent on achieving 25% year-over-year volume growth. Concurrently shift 30% of sales focus to Quick-Commerce (Zepto/Blinkit) and modern supermarkets.',
            tradeOffs: {
              pros: ['Aligns retailer payouts with actual incremental sales growth', 'Quick-commerce bypasses Kirana trade union bottlenecks entirely'],
              cons: ['Disgruntled low-volume kirana shops may de-list product', 'Requires digital inventory buffer in urban dark stores']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Brilliant channel diplomacy! High-performing retailers loved the growth bonus, while digital quick-commerce surged 65% during monsoon rains.',
              detailedAnalysis: 'Pay-for-performance aligned retailer incentives with company goals. Meanwhile, consumers stuck indoors during monsoon rains ordered 6-packs on Zepto and Instamart, where margins were 4% higher.',
              metricDeltas: { marketShare: 2.3, revenue: 6.4, ebitdaMargin: 1.8, brandSalience: 11, cac: -3.8 },
              competitorReaction: 'Apex found itself overstocked in soggy mom-and-pop shops while Zest captured dark-store digital delivery racks.',
              stakeholderFeedback: 'Supply Chain Partner: "Dark-store sales velocity is up 3.2x! We are turning inventory every 4 days instead of 18 days."',
              theorySnippet: {
                framework: 'Omnichannel Channel Conflict & Power Dynamics',
                takeaway: 'Diversifying distribution channels reduces dependence on any single gatekeeper and restores bargaining power.'
              }
            }
          },
          {
            id: 'q3-c',
            title: 'Direct Confrontation: Refuse Demands & Launch Consumer Direct App (D2C)',
            description: 'Reject the retailer association demand outright. Launch an exclusive "Zest Club" subscription app for doorstep beverage delivery.',
            tradeOffs: {
              pros: ['Full control over customer data and zero intermediary margin loss', 'Stands firm on company pricing integrity'],
              cons: ['Beverages are low-ticket impulse purchases; consumers rarely download an app just to buy soda', 'Retailers immediately delist Zest across 10,000 stores']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Severe operational miscalculation. App download CAC was astronomical, and physical sales cratered due to the retail boycott.',
              detailedAnalysis: 'Consumer packaged beverages have high logistics cost-to-value ratios. Delivering ₹20 bottles directly to homes incurred ₹65 per delivery in delivery partner fees.',
              metricDeltas: { marketShare: -3.5, revenue: -11.2, ebitdaMargin: -6.2, brandSalience: -5, cac: 18.5 },
              competitorReaction: 'Desh Fizz instantly bought up your vacated shelf space in every single boycotted store.',
              stakeholderFeedback: 'Board Director: "Who downloads a standalone app to order two bottles of cola? This was an elementary channel failure."',
              theorySnippet: {
                framework: 'Category Characteristics & D2C Viability',
                takeaway: 'Low-ticket, high-bulk impulse items are fundamentally ill-suited for standalone D2C apps due to delivery unit economics.'
              }
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Quarter 4: Product Portfolio Innovation & Sugar Tax Threat',
        quarterOrTimeline: 'Q4 - Festive Season & Policy Shock',
        briefing: 'The Government Ministry of Health has announced a proposed 12% "Sugar Cess" tax on high-sugar carbonated beverages taking effect next fiscal year. Simultaneously, Diwali and festive wedding season is kicking off—a massive consumption occasion for family packs.',
        marketIntel: {
          headline: 'Health Ministry drafts sin tax on high-sugar drinks; zero-sugar alternatives surge',
          competitorMove: 'Apex is rushing an expensive diet formulation. Desh Fizz has no low-sugar capability and is lobbying politicians.',
          macroEnvironment: 'Indian urban consumers are actively cutting table sugar; diabetic and pre-diabetic demographics are seeking guilt-free indulgence.',
          internalWhisper: 'R&D Director shares: "We already have a stevia-and-monkfruit natural formulation ready in our lab. It tastes 95% identical to regular Zest."'
        },
        urgentQuestion: 'How do you strategically position your product portfolio ahead of the tax and festive demand?',
        choices: [
          {
            id: 'q4-a',
            title: 'Pioneer the "Zest Zero-Sugar Herbal Elixir" Festive Launch',
            description: 'Fast-track the stevia formulation into sleek 250ml slim cans ("Zest Zero") marketed as guilt-free festive refreshment, completely exempt from the sugar cess.',
            tradeOffs: {
              pros: ['First-mover advantage in clean-label zero-sugar beverage space', 'Pre-empts the 12% sugar tax, providing a massive 1200 bps tax shield'],
              cons: ['Requires consumer trial overcoming historical bad tastes of artificial aspartame sweeteners', 'Slim can packaging costs ₹3.50 more per unit than standard PET bottles']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'A generational triumph! Zest Zero became the breakout festive beverage hit across modern retail and college festivals.',
              detailedAnalysis: 'By using natural monkfruit and stevia instead of cheap bitter aspartame, consumer blind taste tests scored 88% preference. Institutional corporate offices and festive parties ordered truckloads.',
              metricDeltas: { marketShare: 3.2, revenue: 8.8, ebitdaMargin: 3.1, brandSalience: 18, cac: -5.4 },
              competitorReaction: 'Apex was caught flat-footed with their delayed diet rollout; Desh Fizz got hit with the full 12% sugar tax penalty.',
              stakeholderFeedback: 'Managing Director: "Zest Zero now accounts for 28% of total company revenue in just 90 days. Exceptional strategic anticipation!"',
              theorySnippet: {
                framework: 'Blue Ocean Strategy & Value Innovation',
                takeaway: 'Value innovation breaks the trade-off between differentiation and low cost by eliminating regulatory tax burdens while delighting health-conscious consumers.'
              }
            }
          },
          {
            id: 'q4-b',
            title: 'Double Down on Traditional High-Sugar 2-Litre Festive Mega-Packs',
            description: 'Ignore the zero-sugar niche for now. Push high-volume 2-Litre PET bottles at deep holiday discounts to maximize immediate festive cash collections before the tax hits.',
            tradeOffs: {
              pros: ['Captures immediate high-volume wedding and Diwali family gathering sales', 'Maximizes short-term revenue before the fiscal year closes'],
              cons: ['Leaves the company completely unprepared for the tax hike next quarter', 'Heavy discounting erodes profit margins']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Delivered short-term revenue surge, but set up a painful margin cliff when the sugar tax kicked in.',
              detailedAnalysis: 'The 2-Litre promo cleared out inventory, but family consumers bought it purely for the holiday discount and returned to competitors afterward.',
              metricDeltas: { marketShare: 0.9, revenue: 4.2, ebitdaMargin: -1.2, brandSalience: -1, cac: 2.1 },
              competitorReaction: 'Competitors matched your discounts, creating an oversupplied market in large bottles.',
              stakeholderFeedback: 'Finance Controller: "We got a revenue bump, but our inventory of raw sugar is still huge right before the tax penalty takes effect."'
            }
          },
          {
            id: 'q4-c',
            title: 'Enter Fruit Juice & Energy Drinks Category via White-Label Sourcing',
            description: 'Contract-manufacture an external fruit juice brand to diversify away from carbonated sodas altogether.',
            tradeOffs: {
              pros: ['Diversifies revenue away from carbonated beverages', 'Tax-exempt agricultural category status'],
              cons: ['Dilutes core brand focus; Zest sales team has zero relationships with juice buyers', 'Third-party contract manufacturing quality is unreliable']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Operational distractions and quality defects in batch #3 damaged brand credibility.',
              detailedAnalysis: 'Lacking proprietary processing equipment, the white-label juice tasted artificial. Customer returns surged to 7%, distracting sales executives during festive peak.',
              metricDeltas: { marketShare: -1.1, revenue: -2.4, ebitdaMargin: -3.4, brandSalience: -6, cac: 7.2 },
              competitorReaction: 'Apex consolidated their cola dominance while you chased an unrelated category.',
              stakeholderFeedback: 'Sales Director: "Kirana shops are returning spoiled juice cartons. We lost our focus right during peak cola season."'
            }
          }
        ]
      },
      {
        roundNumber: 5,
        title: 'Quarter 5: Boardroom Strategic Evaluation & Long-Term Moat',
        quarterOrTimeline: 'Q1 Next Fiscal Year - The Master Plan',
        briefing: 'One year after taking over marketing during the crisis, you stand before the Board of Directors and institutional private equity investors. The company is evaluating a ₹35 Cr Series B growth equity round. The board asks for your definitive 3-year strategic growth vector.',
        marketIntel: {
          headline: 'Zest Beverages evaluated by Sequoia and Temasek for expansion capital',
          competitorMove: 'Apex Cola has requested informal acquisition talks with your founders; Desh Fizz is stalled by bank debt.',
          macroEnvironment: 'Indian beverage consumption per capita is poised to double over the next 5 years, driven by tier-2 urbanization.',
          internalWhisper: 'Founders say: "Do we build a high-margin national wellness beverage leader, or sell out to Apex, or expand aggressively across Southeast Asia?"'
        },
        urgentQuestion: 'What is your core strategic recommendation for Zest\'s multi-year growth vector?',
        choices: [
          {
            id: 'q5-a',
            title: 'National Omnichannel Expansion: Clean-Label Beverage Powerhouse',
            description: 'Reinvest growth capital into national cold-chain logistics, quick-commerce dark store partnerships, and expanding the Zest Zero portfolio into sparkling herbal waters and clean energy.',
            tradeOffs: {
              pros: ['Solidifies an unassailable high-margin positioning in the fastest-growing beverage segment', 'Multiplies enterprise valuation multiple from 2.5x to 6x revenue'],
              cons: ['Requires sustained operational discipline and working capital management', 'Apex will aggressively attempt to clone your clean recipes']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Unanimous Board approval and ₹35 Cr term sheet secured! Zest is hailed as India\'s fastest-growing modern consumer brand.',
              detailedAnalysis: 'By systematically tying STP segmentation, high-margin clean product innovation, omnichannel distribution, and margin discipline together, you transformed a struggling regional soda maker into a national category leader.',
              metricDeltas: { marketShare: 4.2, revenue: 14.5, ebitdaMargin: 3.8, brandSalience: 22, cac: -6.0 },
              competitorReaction: 'Apex admitted in their investor earnings call that Zest has captured the premium youth demographic in major metros.',
              stakeholderFeedback: 'Lead Investor: "Outstanding strategic turnaround. You protected margins, reinvented the product line, and proved that a challenger can beat global giants with sharp positioning."',
              theorySnippet: {
                framework: 'Sustainable Competitive Advantage & Brand Equity (Keller)',
                takeaway: 'Real marketing management is not about ad spend; it is about aligning product, pricing, channels, and brand salience into an self-reinforcing flywheel.'
              }
            }
          },
          {
            id: 'q5-b',
            title: 'Accept Apex Cola\'s Acquisition Offer at ₹180 Cr Valuation',
            description: 'Recommend that the founders and early investors exit now to Apex Cola, taking a guaranteed cash payout.',
            tradeOffs: {
              pros: ['Guaranteed financial liquidity for early angel investors and founders', 'Eliminates all future execution and competitive risk'],
              cons: ['Apex will likely shelve the brand to protect their flagship cola', 'Abandons the 10x upside of building an independent public company']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Financial exit achieved, but brand disappeared within 18 months.',
              detailedAnalysis: 'Classic "killer acquisition". Apex absorbed Zest\'s distributor contacts and quietly phased out the brand to eliminate competition for Apex Diet.',
              metricDeltas: { marketShare: 0.0, revenue: 0.0, ebitdaMargin: 0.0, brandSalience: -30, cac: 0.0 },
              competitorReaction: 'Apex eliminated their most dangerous emerging competitor in India.',
              stakeholderFeedback: 'Former Founder: "We got our money, but it breaks my heart to see Zest completely removed from store shelves."'
            }
          },
          {
            id: 'q5-c',
            title: 'Rapid International Expansion into the Middle East & Africa',
            description: 'Divert focus from India to export Zest into Dubai, Kenya, and Nigeria before solidifying domestic market share.',
            tradeOffs: {
              pros: ['Higher foreign currency realization per unit', 'Less entrenched local competition in certain emerging markets'],
              cons: ['Premature internationalization without domestic economies of scale', 'Severe customs, import tariffs, and FX currency depreciation risks']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Overstretched resources. FX swings and distributor fraud in foreign markets drained working capital.',
              detailedAnalysis: 'Expanding internationally before conquering your home base splits management bandwidth. Domestic competitors recaptured Indian market share while you were stuck dealing with foreign customs delays.',
              metricDeltas: { marketShare: -2.8, revenue: -3.5, ebitdaMargin: -4.8, brandSalience: -4, cac: 12.0 },
              competitorReaction: 'Desh Fizz celebrated as Zest neglected its core Indian heartland.',
              stakeholderFeedback: 'CFO: "We have ₹6 Cr in unpaid receivables stuck in foreign accounts while our domestic market share slipped."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You navigated a high-stakes, 5-quarter competitive battle in the Indian beverage industry against a well-funded multinational incumbent (Apex Cola) and an aggressive predatory discounter (Desh Fizz). By balancing budget allocation across digital pull and quick-commerce channels, refusing the trap of a destructive Bertrand price war, defending trade margins through performance incentives, and preempting health regulations with "Zest Zero", you successfully rebuilt market share from 16.8% to over 22% while expanding operating EBITDA margins.',
      whyItHappened: 'Competitive advantage in consumer goods is not won by outspending giants in their home court (mass TV) or bleeding dry in a low-cost price war against low-overhead rivals. It is won through asymmetrical positioning: identifying an underserved consumer segment (health-conscious youth), selecting modern high-velocity distribution channels (quick-commerce and dark stores), and leveraging product innovation (clean monkfruit sweeteners) to create pricing power and tax insulation.',
      conceptsApplied: [
        {
          name: 'STP Framework (Segmentation, Targeting, Positioning)',
          formulaOrModel: 'Segment Attractiveness = Size x Growth x Margin Potential',
          explanation: 'Rather than trying to be everything to everyone in the mass market, Zest segmented on lifestyle and ingredient consciousness, targeting 18-28 urban consumers who rejected both artificial sodas and cheap sugar water.',
          keyTakeaway: 'Effective positioning defines what you are NOT as clearly as what you are.'
        },
        {
          name: 'Bertrand Paradox & Price War Dynamics',
          formulaOrModel: 'In Bertrand competition with homogeneous goods: P -> MC, Economic Profit -> 0',
          explanation: 'When a low-cost rival slashes price, direct price-matching instantly triggers a race to the bottom. Challenger brands must differentiate on non-price vectors (ingredients, health, identity) to preserve contribution margin.',
          keyTakeaway: 'Never enter a price war with a competitor who has lower fixed overhead and nothing to lose.'
        },
        {
          name: 'Integrated Marketing Communications (Push vs Pull)',
          formulaOrModel: 'Customer Lifetime Value (LTV) / Customer Acquisition Cost (CAC) >= 3.0',
          explanation: 'Push strategy incentivizes channel partners to display the product; pull strategy drives consumers into stores demanding it. Zest succeeded by using digital/influencer pull to force quick-commerce dark stores and modern retailers to stock the product.',
          keyTakeaway: 'Channel partners only promote products that have proven consumer velocity.'
        }
      ],
      expertExecutivePerspective: 'A Fortune 500 CMO or McKinsey Strategy Partner would note: "The most critical decision in this entire case was Round 2—refusing to drop price to ₹12. Eighty percent of inexperienced brand managers panic when a discounter arrives, slash prices, destroy their gross margin, and then discover they no longer have the gross profit needed to fund brand-building advertising. By pivoting to \'Clean Ingredients\' and creating Zest Zero, management changed the conversation from Price per Milliliter to Health & Wellbeing."',
      alternativePaths: [
        {
          choiceTitle: 'Direct Price Match (Round 2)',
          counterfactualConsequence: 'If you had matched Desh Fizz at ₹12, gross margin would have collapsed from 58% to 32%. Even with a 20% volume bounce, net dollar contribution would have fallen by 34%, forcing massive layoffs in marketing and triggering terminal brand erosion.'
        },
        {
          choiceTitle: 'Capitulate to Full 18% Retail Margin (Round 3)',
          counterfactualConsequence: 'Surrendering 600 bps unconditionally to general trade retailers would have permanently impaired your working capital. Competitors would have recognized your weakness, and retailers would have demanded 20% the following season.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Coca-Cola vs Thums Up (India)',
          caseStudySummary: 'When Coca-Cola re-entered India in 1993, Parle\'s Thums Up stood its ground with an aggressive "Taste the Thunder" masculine, spicy positioning rather than matching Coke\'s sweet family formula. Ultimately, Coke was forced to acquire Thums Up, which remains India\'s largest selling cola brand.'
        },
        {
          company: 'Red Bull vs Traditional Carbonated Sodas',
          caseStudySummary: 'Red Bull priced its 250ml slim can at 2.5x the price of a 500ml Pepsi or Coke bottle. Instead of competing on price per volume, it created the functional energy category, unlocked 80%+ gross margins, and funded grassroots sports sponsorships.'
        }
      ]
    }
  },
  {
    id: 'mkt-brand-launch',
    subjectId: 'marketing',
    conceptId: 'cac-ltv-ratio',
    relatedConcepts: ['Go-To-Market Strategy', 'Product-Market Fit', 'Omnichannel Retailing', 'Pricing Elasticity'],
    title: 'Launching a New Consumer Brand: Kavach Smart Nutrition',
    tagline: 'Orchestrate the zero-to-one launch of an organic functional protein brand in a crowded wellness landscape.',
    role: 'Vice President of Marketing, Kavach BioSciences',
    company: 'Kavach Smart Nutrition',
    industry: 'Consumer Health, Functional Foods & D2C Wellness',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'Kavach was founded by two biotech researchers from IIT Bombay who patented a bioavailable plant-protein blend ("PhytoCore") extracted from sprouted lentils and moringa, offering 28g clean protein with zero bloating.',
      industryContext: 'The Indian nutraceutical and protein supplement market is worth ₹18,000 Cr, expanding at 22% CAGR. However, it is saturated with cheap whey concentrates, fitness gym bro-science powders, and global legacy brands like Optimum Nutrition.',
      currentSituation: 'Kavach has secured ₹8.0 Cr in seed funding for commercial launch. You have 9 months of cash runway to achieve product-market fit, establish sustainable unit economics (CAC < ₹900, LTV > ₹2,800), and achieve ₹1.5 Cr monthly recurring revenue (MRR).'
    },
    objectives: [
      'Reach ₹1.5 Cr Monthly Recurring Revenue (MRR) before the 9-month seed runway expires.',
      'Maintain an LTV:CAC ratio above 3.0x with customer payback under 4 months.',
      'Achieve a 90-day repeat purchase rate of at least 32%.'
    ],
    constraints: [
      'Total launch marketing budget fixed at ₹3.5 Crore across all 4 quarters.',
      'Minimum retail gross margin cannot drop below 60% to satisfy Series A venture capital metrics.',
      'Inventory production minimum batch size is 15,000 tubs per production run.'
    ],
    initialMetrics: [
      { key: 'monthlyRevenue', label: 'Monthly Revenue', value: 0.12, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 1.5, description: 'Current pilot run monthly revenue' },
      { key: 'cac', label: 'Customer Acquisition Cost (CAC)', value: 1650, unit: '₹', isGoodWhenHigh: false, benchmark: 850, description: 'Blended marketing spend per acquiring paying customer' },
      { key: 'ltv', label: 'Projected Customer LTV', value: 2400, unit: '₹', format: 'currency', isGoodWhenHigh: true, benchmark: 3500, description: 'Estimated gross contribution over 12 months per customer' },
      { key: 'repeatRate', label: '90-Day Repeat Rate', value: 14.5, unit: '%', isGoodWhenHigh: true, benchmark: 35.0, description: 'Percentage of first-time buyers who place a second order' },
      { key: 'grossMargin', label: 'Gross Margin', value: 68.0, unit: '%', isGoodWhenHigh: true, benchmark: 65.0, description: 'Revenue minus direct packaging and ingredient COGS' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Month 1: Target Audience Definition & Positioning Angle',
        quarterOrTimeline: 'Launch Month 1 - The Core Persona',
        briefing: 'You must establish the foundational positioning of Kavach. Your product can theoretically appeal to bodybuilders, busy corporate tech professionals, or middle-aged adults looking for joint mobility. Your launch messaging must be razor-sharp.',
        marketIntel: {
          headline: 'Protein deficiency affects 73% of urban Indian diets, but supplement skepticism remains high',
          competitorMove: 'Mass gym brands feature muscular bodybuilding influencers shouting about "Insane Gains". Modern consumers express disgust at bulky chemical packaging.',
          macroEnvironment: 'WFH lifestyles and sedentary desk jobs have created widespread digestive fatigue and interest in clean gut health.',
          internalWhisper: 'Founder: "Don\'t make us look like another gym supplement for meatheads. We have an advanced scientific patent."'
        },
        urgentQuestion: 'Which target persona and positioning narrative do you champion for the launch?',
        choices: [
          {
            id: 'm1-a',
            title: 'The "Desk Athlete": Busy Tech & Corporate Knowledge Workers',
            description: 'Position Kavach as "Clean Daily Energy & Gut-Friendly Nutrition" for corporate professionals combating 3 PM slumps, brain fog, and desk stiffness.',
            tradeOffs: {
              pros: ['High disposable income and willingness to pay premium prices', 'Huge unaddressed white-space beyond hardcore gym lifters'],
              cons: ['Lower immediate awareness of daily protein requirements compared to gym enthusiasts', 'Requires educational content marketing']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Enormous resonance! High-earning urban professionals in Bangalore, Mumbai, and Gurgaon adopted Kavach as their daily breakfast shake.',
              detailedAnalysis: 'By avoiding the crowded "gym bro" battlefield, Kavach tapped into a high-LTV demographic with disposable income that values digestive comfort over extreme bicep growth.',
              metricDeltas: { monthlyRevenue: 0.28, cac: -420, ltv: 650, repeatRate: 9.5, grossMargin: 0.0 },
              competitorReaction: 'Gym supplement brands didn\'t even perceive you as a threat, giving you open space to dominate tech corporate circles.',
              stakeholderFeedback: 'Head of Content: "Our LinkedIn and Instagram ads addressing \'The 3 PM Corporate Crash\' are converting at 4.2% CTR!"',
              theorySnippet: {
                framework: 'Jobs to Be Done (JTBD) & White-Space Positioning',
                takeaway: 'Positioning for the "job" of sustained mental focus and clean digestion unlocks customers who never enter a supplement store.'
              }
            }
          },
          {
            id: 'm1-b',
            title: 'The Hardcore Gym Lifter & Bodybuilding Segment',
            description: 'Position Kavach directly against Whey Gold Standard as "The Vegan Beast: Maximum Hypertrophy without Animal Protein".',
            tradeOffs: {
              pros: ['Immediate high-volume consumption (2 scoops per day)', 'Fast adoption if fitness trainers endorse it'],
              cons: ['Extremely price-sensitive per gram of protein; customers obsessively compare cost per scoop', 'Intense skepticism from traditional gym trainers loyal to dairy whey']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Uphill battle against entrenched whey loyalty. High ad spend yielded low conversions and fierce skepticism.',
              detailedAnalysis: 'Bodybuilders questioned whether plant protein could build muscle as fast as whey. Competing on "Cost per Gram of Protein" against mass imported brands eroded perceived premium value.',
              metricDeltas: { monthlyRevenue: 0.15, cac: 550, ltv: -200, repeatRate: -2.0, grossMargin: -4.0 },
              competitorReaction: 'Fitness influencers tore apart the packaging on YouTube, claiming whey is superior for pure muscle synthesis.',
              stakeholderFeedback: 'Sales Rep: "Gym trainers are demanding 30% kickbacks to recommend our tub to their clients."'
            }
          },
          {
            id: 'm1-c',
            title: 'Geriatric & Senior Wellness (Age 55+ Sarcopenia Prevention)',
            description: 'Position Kavach as clinical medicine for elderly muscle loss and bone density.',
            tradeOffs: {
              pros: ['Low churn once prescribed or adopted by an elder', 'Family caregivers actively search for healthy supplements'],
              cons: ['Extremely long conversion cycles; requires doctor recommendations', 'E-commerce adoption among seniors is slow, requiring pharmacy distribution']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'High trust among small user base, but customer acquisition velocity was too slow for an early-stage startup.',
              detailedAnalysis: 'Seniors loved the product, but pharmacy placement required 6 months of listing approvals and heavy distributor margins.',
              metricDeltas: { monthlyRevenue: 0.08, cac: 250, ltv: 400, repeatRate: 5.0, grossMargin: -6.0 },
              competitorReaction: 'Established pharmaceutical giants like Abbott (Ensure) dominated doctor prescribing networks.',
              stakeholderFeedback: 'Founder: "We love helping seniors, but at this sales pace our 9-month cash runway will expire before we hit ₹50 Lakhs MRR."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Month 3: Omnichannel Distribution vs Pure D2C Webstore',
        quarterOrTimeline: 'Launch Month 3 - Channel Strategy',
        briefing: 'Orders are flowing through your Shopify website, but shipping single 1kg tubs across India via express couriers incurs ₹180 in freight per tub. Amazon India invites you to launch on Amazon Prime, while Nature\'s Basket and modern retail chains offer shelf space—if you give them 35% margin.',
        marketIntel: {
          headline: 'Logistics costs surge 15% as national fuel surcharges hit courier companies',
          competitorMove: 'Legacy brands sell 80% through Amazon and specialty nutrition stores.',
          macroEnvironment: 'Consumers expect next-day or same-day delivery; 3-day delivery windows on standalone D2C sites suffer 28% cart abandonment.',
          internalWhisper: 'Finance Lead: "Every tub sold on our website costs ₹180 in courier shipping, plus payment gateway fees. Our unit contribution is getting eroded."'
        },
        urgentQuestion: 'How do you structure your distribution channel architecture?',
        choices: [
          {
            id: 'm2-a',
            title: 'Hybrid Omnichannel: D2C Website for Subscriptions + Amazon Prime for Discovery',
            description: 'Keep brand narrative, educational quizzes, and recurring monthly subscription bundles on the D2C website; leverage Amazon Prime for single-tub discovery and 24-hour delivery.',
            tradeOffs: {
              pros: ['Captures massive Amazon search intent while keeping high-margin recurring subscribers on your own site', 'Amazon FBA drastically lowers shipping cost per unit'],
              cons: ['Amazon takes a 15% referral fee and owns the customer relationship for those sales', 'Potential price parity conflicts between channels']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Unit economics transformed! Amazon Prime generated rapid trial purchases, while your website captured high-margin 3-month subscriptions.',
              detailedAnalysis: 'Amazon acted as a low-friction sampling engine. Inside every Amazon box, you placed a QR voucher offering a free shaker bottle when subscribing on the official D2C site, converting Amazon one-off buyers into direct subscribers.',
              metricDeltas: { monthlyRevenue: 0.45, cac: -380, ltv: 850, repeatRate: 12.0, grossMargin: -2.0 },
              competitorReaction: 'Kavach ranked in the Top 5 Organic Protein Powders on Amazon within 45 days.',
              stakeholderFeedback: 'Operations Lead: "Amazon FBA cut our fulfilment cost per order from ₹180 to ₹92!"',
              theorySnippet: {
                framework: 'Channel Synergies & The Flywheel Effect',
                takeaway: 'Use high-trust third-party marketplaces for top-of-funnel customer acquisition, then transition loyalists to owned first-party channels.'
              }
            }
          },
          {
            id: 'm2-b',
            title: '100% Exclusive D2C Website (Refuse Amazon & Retail)',
            description: 'Sell exclusively through your proprietary website to retain 100% of customer data and avoid marketplace commissions.',
            tradeOffs: {
              pros: ['Total control over customer data and zero marketplace fee deductions', 'Ability to run customized upsell funnels'],
              cons: ['Must pay high performance ad costs (Meta/Google) for every visitor', 'High shipping costs and slow 4-day delivery outside metros']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Customer acquisition costs climbed as Meta ad auction CPMs inflated. Delivery delays hurt repeat purchases.',
              detailedAnalysis: 'Relying exclusively on paid Meta/Instagram ads without marketplace discovery meant CAC escalated as you exhausted your initial lookalike audiences.',
              metricDeltas: { monthlyRevenue: 0.18, cac: 420, ltv: 150, repeatRate: -3.0, grossMargin: 2.0 },
              competitorReaction: 'Competitors on Amazon scooped up users searching for "Kavach protein" who couldn\'t find it on Prime.',
              stakeholderFeedback: 'Customer Support: "We have 40 tickets a day asking: \'Why isn\'t this on Amazon? I want it delivered tomorrow!\'"'
            }
          },
          {
            id: 'm2-c',
            title: 'All-In on Offline Gourmet Grocery & Premium Gym Chains',
            description: 'Put 70% of inventory into 500 premium supermarkets (Nature\'s Basket, Foodhall) and luxury gym chains across Mumbai, Delhi, and Bangalore.',
            tradeOffs: {
              pros: ['High visual prestige and physical product touchpoint', 'Immediate trust from upscale shoppers'],
              cons: ['High listing slotting fees (₹50,000 per store) and 35% margin cut', 'Working capital locked in slow-moving physical inventory']
            },
            riskLevel: 'High',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Crushing working capital drain. Tubs sat on shelves while slotting fees ate up your remaining cash runway.',
              detailedAnalysis: 'Premium offline retail requires massive brand awareness before shoppers pick a ₹2,400 tub off the shelf. Without existing brand fame, offline inventory turned at an abysmal 0.4x per month.',
              metricDeltas: { monthlyRevenue: 0.12, cac: 680, ltv: -100, repeatRate: 2.0, grossMargin: -12.0 },
              competitorReaction: 'Supermarkets discounted your product unilaterally to clear slow-moving inventory.',
              stakeholderFeedback: 'CFO: "We have ₹1.2 Cr of cash frozen in retail inventory that isn\'t moving. We have 60 days of cash left!"'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Month 5: Performance Marketing & Influencer Unit Economics',
        quarterOrTimeline: 'Launch Month 5 - Scaling Acquisition',
        briefing: 'You need to scale from ₹40 Lakhs to ₹1.0 Cr monthly revenue. Your marketing team presents three different acquisition playbooks: celebrity Bollywood endorsements, a micro-creator affiliate army, or hyper-targeted search and doctor-led clinical webinars.',
        marketIntel: {
          headline: 'Meta and Google ad costs climb 24% YoY due to festive bidding wars',
          competitorMove: 'Rival brands are paying Bollywood stars ₹1.5 Cr for a single Instagram reel.',
          macroEnvironment: 'Consumers are increasingly immune to generic celebrity endorsements, preferring genuine product breakdowns from credentialed experts.',
          internalWhisper: 'Growth Hacker: "Celebrity ads get millions of views, but nobody actually buys the tub. We need people who show the nutrition label."'
        },
        urgentQuestion: 'Which acquisition and content marketing engine do you fund with your remaining ₹1.8 Cr?',
        choices: [
          {
            id: 'm3-a',
            title: 'Credentialed Expert & Micro-Creator Affiliate Army',
            description: 'Recruit 350 certified clinical dieticians, sports physiotherapists, and corporate fitness runners. Equip them with personalized discount codes (15% commission) and detailed gut-health clinical trial data.',
            tradeOffs: {
              pros: ['High conversion rates backed by genuine professional credibility', 'Zero upfront celebrity waste; affiliates are paid strictly upon actual sales'],
              cons: ['Requires intensive operational management and creator relationship tracking', 'Takes 6 to 8 weeks to recruit and onboard hundreds of creators']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'The holy grail of health marketing! High-trust dietician recommendations slashed CAC and drove sky-high retention.',
              detailedAnalysis: 'When a trusted clinical nutritionist explains why PhytoCore doesn\'t cause bloating, consumers buy with high confidence. The performance affiliate structure meant marketing cost was directly variable with revenue.',
              metricDeltas: { monthlyRevenue: 0.55, cac: -520, ltv: 920, repeatRate: 15.0, grossMargin: -1.0 },
              competitorReaction: 'Competitors were baffled as Kavach began appearing on personalized meal plans of thousands of corporate employees.',
              stakeholderFeedback: 'Chief Dietician Partner: "My patients with irritable bowel syndrome (IBS) finally found a protein they can digest without discomfort. I recommend it to everyone."',
              theorySnippet: {
                framework: 'Credibility Heuristic & Variable CAC Economics',
                takeaway: 'In health and wellness, credentialed micro-advocates outperform generic celebrity reach because trust is the primary barrier to conversion.'
              }
            }
          },
          {
            id: 'm3-b',
            title: 'Sign an A-List Bollywood Celebrity Brand Ambassador',
            description: 'Spend ₹1.4 Cr upfront on an A-list Bollywood fitness icon for a nationwide billboard and social media campaign ("I Trust Kavach").',
            tradeOffs: {
              pros: ['Instant overnight mass brand awareness across India', 'Boosts founder ego and looks impressive to press'],
              cons: ['Consumes 75% of remaining marketing capital with zero guarantee of sales', 'Modern consumers know celebrities don\'t actually use the products they promote']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Massive spike in website traffic, but visitors bounced immediately without purchasing. Runway depleted.',
              detailedAnalysis: 'The campaign generated millions of impressions, but visitors were celebrity fans looking at photos, not qualified protein buyers. Conversion rate dropped from 3.8% to 0.6%.',
              metricDeltas: { monthlyRevenue: 0.22, cac: 1100, ltv: -150, repeatRate: -1.0, grossMargin: -5.0 },
              competitorReaction: 'Competitors laughed off the campaign, knowing celebrity endorsements in nutrition have low purchase intent.',
              stakeholderFeedback: 'Board Observer: "You blew ₹1.4 Cr on one celebrity photoshoot while our repeat subscription engine starved."'
            }
          },
          {
            id: 'm3-c',
            title: 'Deep Heavy Discounting: 50% Off First Tub via Performance Ads',
            description: 'Run aggressive Meta ads offering the first 1kg tub at ₹1,199 (50% off) to flood the market and capture emails.',
            tradeOffs: {
              pros: ['Huge volume of first-time orders and fast revenue top-line metric', 'Gathers massive first-party customer email list'],
              cons: ['Attracts deal-hunting discount shoppers who churn after the first order', 'Net unit contribution turns negative on the first order']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Fast initial surge followed by a catastrophic churn cliff. Bargain hunters never returned at full price.',
              detailedAnalysis: 'Customers acquired through deep discounts have near-zero brand loyalty. When Month 2 arrived and price reverted to ₹2,399, repeat purchase rate was under 8%.',
              metricDeltas: { monthlyRevenue: 0.35, cac: 350, ltv: -650, repeatRate: -11.0, grossMargin: -14.0 },
              competitorReaction: 'Competitors waited for your cash runway to expire while discount buyers switched to the next promo.',
              stakeholderFeedback: 'Finance Lead: "We lost ₹350 on every promotional tub sold, and 92% of them never ordered again."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Month 8: Product Line Extension & Retention Engine',
        quarterOrTimeline: 'Launch Month 8 - Securing Series A',
        briefing: 'You are 45 days away from pitching Series A venture capital firms for a ₹25 Cr round. Monthly revenue has reached ₹1.1 Cr, but investors want to see proof of high Lifetime Value (LTV), cross-selling capability, and a clear path to ₹5 Cr MRR.',
        marketIntel: {
          headline: 'Venture Capital firms demand high LTV:CAC and gross margin discipline for D2C investments',
          competitorMove: 'Rivals are copying your plant protein messaging; price competition is heating up in unflavored powders.',
          macroEnvironment: 'Customers are requesting convenient on-the-go snack formats rather than just 1kg tubs at home.',
          internalWhisper: 'Head of R&D: "We developed two new products: Clean Protein Snack Bars (high frequency) or Personalized Micronutrient Daily Packs (high margin)."'
        },
        urgentQuestion: 'Which product expansion and retention strategy do you execute to maximize valuation?',
        choices: [
          {
            id: 'm4-a',
            title: 'Launch "Kavach Daily On-The-Go Clean Protein Bars" + Smart Subscription',
            description: 'Introduce pocket-sized protein bars sold in 12-pack monthly subscription boxes, alongside an automated "Subscribe & Save 15%" WhatsApp replenishment bot.',
            tradeOffs: {
              pros: ['Increases purchase frequency from once every 45 days to weekly snacking habits', 'WhatsApp bot enables one-click re-orders, driving repeat rates past 40%'],
              cons: ['Bars require high-barrier wrapper packaging and temperature-controlled storage during summer', 'Slightly lower gross margin (62%) than raw powder (70%)']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Series A home run! Cross-sell rate reached 44%, LTV surged past ₹4,200, and MRR hit ₹1.85 Cr.',
              detailedAnalysis: 'Existing protein powder buyers added bar boxes to their monthly orders with zero additional acquisition cost. The WhatsApp replenishment reminder removed friction from reordering, pushing LTV:CAC above 4.5x.',
              metricDeltas: { monthlyRevenue: 0.75, cac: -280, ltv: 1250, repeatRate: 18.0, grossMargin: -1.0 },
              competitorReaction: 'Legacy powder brands couldn\'t match your agile cross-selling and high-engagement subscription tech.',
              stakeholderFeedback: 'Series A Lead Partner: "An LTV:CAC of 4.5x with 38% 90-day retention in Indian consumer wellness is top-decile performance. Here is our ₹30 Cr term sheet."',
              theorySnippet: {
                framework: 'Customer Lifetime Value (LTV) Expansion & Frictionless Re-Ordering',
                takeaway: 'Real brand equity converts one-time buyers into high-frequency habits by expanding into adjacent daily usage occasions.'
              }
            }
          },
          {
            id: 'm4-b',
            title: 'Launch a 5kg "Jumbo Bulk Bucket" for Gyms at a Discount',
            description: 'Introduce an oversized 5kg plastic bucket marketed purely on bulk savings to capture heavy users.',
            tradeOffs: {
              pros: ['Immediate high order values (₹6,500 per order)', 'Clears raw material inventory rapidly'],
              cons: ['A 5kg bucket lasts a single user 3 to 4 months, destroying re-order frequency', 'Dilutes clean lifestyle brand identity into industrial bulk packaging']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Short revenue pop followed by a 4-month retention blackout as customers took months to finish the bucket.',
              detailedAnalysis: 'While Average Order Value (AOV) looked high, repeat purchase frequency collapsed because customers were locked into a 120-day supply.',
              metricDeltas: { monthlyRevenue: 0.32, cac: 180, ltv: -350, repeatRate: -14.0, grossMargin: -7.0 },
              competitorReaction: 'Mass market brands out-discounted your bulk bucket anyway.',
              stakeholderFeedback: 'Investor: "Your monthly active buyer metrics stalled because everyone bought a bucket and disappeared for a quarter."'
            }
          },
          {
            id: 'm4-c',
            title: 'Expand into Skin-Care and Beauty Serums with Added Protein',
            description: 'Pivot into topical cosmetic serums claiming "PhytoCore skin rejuvenation" to enter the high-margin beauty industry.',
            tradeOffs: {
              pros: ['Cosmetics enjoy 80%+ gross margins', 'Allows marketing to beauty-conscious female demographics'],
              cons: ['Completely disconnected from core brand proposition of nutritional performance', 'Requires separate cosmetic regulatory licenses and completely different retail channels']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Brand confusion and regulatory audit delays. Customers rejected topical protein from a nutrition brand.',
              detailedAnalysis: 'Violated core brand credibility. Consumers who trusted Kavach as a clean digestive shake found protein-infused face cream bizarre and gimmicky.',
              metricDeltas: { monthlyRevenue: -0.15, cac: 750, ltv: -450, repeatRate: -6.0, grossMargin: 2.0 },
              competitorReaction: 'Beauty influencers mocked the product online as pseudo-scientific marketing.',
              stakeholderFeedback: 'Co-Founder: "We lost our identity. We are neither a respected nutrition brand nor a recognized skincare brand."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You steered Kavach Smart Nutrition from a zero-revenue biotechnology patent into a thriving ₹1.85 Cr MRR consumer wellness brand, securing Series A venture financing. By choosing the "Desk Athlete" white-space positioning rather than fighting entrenched gym brands, implementing an omnichannel flywheel (Amazon Prime for trial + D2C for high-margin subscriptions), mobilizing credentialed dietician micro-advocates, and driving retention via on-the-go snack cross-selling, you drove LTV:CAC above 4.5x.',
      whyItHappened: 'New consumer brand launches fail 85% of the time because founders either burn capital on non-converting mass celebrity awareness or become trapped in single-channel dependencies with escalating CAC. Sustainable D2C success requires positive unit economics from Day 1: positioning for an underserved, high-willingness-to-pay segment, turning one-time discovery into frictionless subscription habits, and ensuring repeat order margins fund the next wave of acquisition.',
      conceptsApplied: [
        {
          name: 'Unit Economics: LTV to CAC Ratio',
          formulaOrModel: 'LTV = (AOV x Gross Margin % x Annual Purchase Frequency) / Annual Churn Rate',
          explanation: 'A healthy consumer startup requires LTV/CAC >= 3.0x with CAC payback under 12 months. Kavach achieved an LTV of ₹4,200 against a blended CAC of ₹850, yielding a 4.9x ratio that proved the business was ready for institutional scale.',
          keyTakeaway: 'Growth without unit economic profitability is not scaling; it is merely subsidizing customer purchases until bankruptcy.'
        },
        {
          name: 'The Omnichannel Marketplace Flywheel',
          formulaOrModel: 'Customer Acquisition Engine: 3rd Party Discovery -> 1st Party Retention',
          explanation: 'Amazon Prime provides low-friction customer sampling and trusted logistics. Placing QR incentives and subscription upgrades inside packaging converts marketplace trial buyers into direct first-party subscribers.',
          keyTakeaway: 'Do not view Amazon and your D2C webstore as enemies; use the marketplace as an acquisition funnel for your owned ecosystem.'
        },
        {
          name: 'Jobs to Be Done (JTBD) Market Creation',
          formulaOrModel: 'Progress in a Specific Struggle > Demographic Profiling',
          explanation: 'Kavach succeeded not by targeting "vegans aged 25-35", but by solving the acute struggle of "I need sustained clean mental energy for long desk days without painful digestive bloating."',
          keyTakeaway: 'Customers hire products to overcome functional and emotional anxieties, not demographic labels.'
        }
      ],
      expertExecutivePerspective: 'A Consumer Private Equity Partner would evaluate this launch: "Kavach succeeded because management understood that in the modern consumer economy, your real product is your retention engine. Anyone with capital can buy Meta ads and pump top-line revenue for three months. What separates venture-backable brands from flame-outs is whether those customers buy a second, third, and fourth time without paying Facebook a single rupee for re-acquisition. By introducing the WhatsApp replenishment bot and on-the-go snack bars, Kavach transformed an impulse purchase into an automatic lifestyle utility."',
      alternativePaths: [
        {
          choiceTitle: 'The Hardcore Gym Lifter Angle (Month 1)',
          counterfactualConsequence: 'If you had positioned against Whey Gold Standard in gyms, gym trainers would have demanded 30% kickbacks and online reviewers would have torn apart your cost-per-gram ratios, leading to 60%+ CAC inflation and premature runway death.'
        },
        {
          choiceTitle: 'Exclusive D2C Strategy (Month 3)',
          counterfactualConsequence: 'Refusing Amazon Prime would have forced you to rely 100% on Meta ads during a period of 25% ad inflation. Delivery friction and courier shipping costs of ₹180 per order would have drained seed capital before Month 6.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Athletic Greens (AG1)',
          caseStudySummary: 'Instead of selling complex multivitamins in pharmacies, AG1 focused on a single daily foundational nutrition scoop for busy high-performers, distributed purely through podcast host-read sponsorships (credentialed trust) and frictionless recurring subscriptions, achieving a $1.2B+ valuation.'
        },
        {
          company: 'The Whole Truth Foods (India)',
          caseStudySummary: 'Launched clean-label protein bars by listing every single ingredient in giant bold letters on the front of the pack. Avoided mass celebrity ads and built authentic customer trust through brutal honesty about food manufacturing, scaling into a dominant omnichannel health brand.'
        }
      ]
    }
  }
];
