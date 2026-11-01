import { Simulation } from '../../types';

export const microeconomicsSimulations: Simulation[] = [
  {
    id: 'eco-pricing-pressure',
    subjectId: 'microeconomics',
    conceptId: 'price-elasticity',
    relatedConcepts: ['Bertrand Duopoly', 'Marginal Cost vs Fixed Overhead', 'Price Discrimination', 'Game Theory'],
    title: 'Pricing Under Competitive Pressure: Apex Precision Components',
    tagline: 'Balance price elasticity of demand, marginal contribution, and competitor retaliation in an industrial price war.',
    role: 'Managing Director & Chief Commercial Officer, Apex Precision Components',
    company: 'Apex Precision Components Ltd.',
    industry: 'Industrial B2B Manufacturing / Precision CNC Machined Valves',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'Apex operates a high-precision CNC manufacturing plant in Pune, supplying industrial titanium and stainless steel fluid control valves to automotive and chemical processing plants across India and Europe. Annual output capacity is 1,200,000 units.',
      industryContext: 'The industrial valve sector operates as a high-fixed-cost oligopoly. Apex and its chief domestic rival "Bharat Fluidics" hold 65% combined market share. Fixed plant depreciation and debt service run at ₹14 Cr annually. Variable production cost is ₹420 per unit.',
      currentSituation: 'Current baseline price is ₹750 per unit, generating a healthy contribution margin of ₹330/unit (44%). However, a global manufacturing slowdown has lowered industry demand by 15%. Bharat Fluidics has suddenly dropped its catalog price to ₹620 per unit, attempting to steal volume to cover its fixed factory overhead.'
    },
    objectives: [
      'Preserve total enterprise gross contribution above ₹30 Cr while navigating competitor price cuts.',
      'Maintain factory capacity utilization above 75% to prevent crippling unabsorbed overhead charges.',
      'Avoid triggering an irreversible Bertrand price collapse where industry price spirals down to marginal cost (₹420).'
    ],
    constraints: [
      'Marginal variable cost of raw steel, tooling, and labor is ₹420 per unit (absolute cost floor).',
      'Plant fixed overhead of ₹14 Cr must be covered annually regardless of volume produced.',
      'Customer contracts are negotiated annually; catalog price cuts set expectations for future years.'
    ],
    initialMetrics: [
      { key: 'annualVolume', label: 'Annual Unit Volume', value: 920000, unit: 'units', isGoodWhenHigh: true, benchmark: 1000000, description: 'Total units produced and shipped annually' },
      { key: 'unitPrice', label: 'Average Realized Price', value: 750, unit: '₹', format: 'currency', isGoodWhenHigh: true, benchmark: 750, description: 'Net average realized selling price per valve unit' },
      { key: 'grossContribution', label: 'Total Contribution', value: 30.36, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 32.0, description: 'Total revenue minus variable production costs ((Price - ₹420) * Volume)' },
      { key: 'capacityUtil', label: 'Capacity Utilization', value: 76.7, unit: '%', isGoodWhenHigh: true, benchmark: 85.0, description: 'Percentage of factory 1.2M unit capacity in active production' },
      { key: 'ebitda', label: 'Net EBITDA', value: 16.36, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 18.0, description: 'Total contribution minus ₹14 Cr fixed factory overhead' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Quarter 1: The Competitor Opening Salvo & Elasticity Calculation',
        quarterOrTimeline: 'Q1 - Initial Shockwave',
        briefing: 'Bharat Fluidics has formally announced a price drop from ₹750 to ₹620 (a 17.3% cut). Your enterprise sales reps report that three major automotive clients (representing 280,000 units of demand) are demanding an immediate price match or they will switch suppliers next month.',
        marketIntel: {
          headline: 'Bharat Fluidics cuts valve prices 17% in bid to poach automotive OEM contracts',
          competitorMove: 'Bharat has excess capacity in their Gujarat plant and is desperate for immediate cash flow to service bank loans.',
          macroEnvironment: 'Automotive procurement managers are under corporate pressure to deliver 8% supplier cost reductions.',
          internalWhisper: 'Chief Production Officer: "If we lose 280,000 units of volume, our plant capacity drops below 55%, and our unabsorbed overhead will eat our entire net profit."'
        },
        urgentQuestion: 'How do you respond to Bharat Fluidics\' aggressive price cut?',
        choices: [
          {
            id: 'e1-a',
            title: 'Symmetric Price Match: Cut Price to ₹620 Across the Board',
            description: 'Match Bharat Fluidics at ₹620 for all customers to protect market share and keep the factory running at full capacity.',
            tradeOffs: {
              pros: ['Protects customer volume and prevents clients from defecting to Bharat', 'Keeps plant utilization near 80%'],
              cons: ['Contribution per unit collapses from ₹330 to ₹200 (a 39.4% drop)', 'Requires selling 1,518,000 units just to make the same gross contribution as before—exceeding plant capacity!']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'The volume held, but profit collapsed. You fell straight into the Bertrand trap.',
              detailedAnalysis: 'Because demand for specialized industrial components has low aggregate industry elasticity (Ped ≈ 0.6), price cutting did not expand the total market; it simply gave automotive buyers a ₹130 per unit windfall paid out of your margin.',
              metricDeltas: { annualVolume: 20000, unitPrice: -130, grossContribution: -11.56, capacityUtil: 1.7, ebitda: -11.56 },
              competitorReaction: 'Bharat realized you matched them, leaving both firms producing the same volume at 40% lower margins.',
              stakeholderFeedback: 'Finance Director: "Our gross contribution fell from ₹30.3 Cr to ₹18.8 Cr! After covering our ₹14 Cr fixed plant costs, our EBITDA is barely ₹4.8 Cr."',
              theorySnippet: {
                framework: 'Price Elasticity of Demand (Ped) & Revenue Impact',
                takeaway: 'When price elasticity is inelastic (Ped < 1.0), price cuts inevitably reduce total revenue and gross contribution.'
              }
            }
          },
          {
            id: 'e1-b',
            title: 'Second-Degree Price Discrimination: Tiered Volume Rebates & Long-Term Contracts',
            description: 'Refuse to cut the headline catalog price. Instead, offer the ₹620 rate ONLY to customers who sign exclusive 3-year supply contracts and commit to at least 150,000 units annually, keeping smaller buyers at ₹750.',
            tradeOffs: {
              pros: ['Locks in high-volume anchor clients for 3 years, blocking Bharat from taking them', 'Preserves high ₹330/unit contribution margin on the remaining 60% of spot volume'],
              cons: ['Requires contract legal negotiations and volume auditing', 'Smaller buyers may complain about lack of discounts']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Masterclass in microeconomic pricing! High-volume clients signed 3-year lock-in contracts, neutralizing Bharat.',
              detailedAnalysis: 'By segmenting clients based on volume elasticity, you ring-fenced your base without polluting your entire pricing schedule. You captured the consumer surplus of high-volume buyers while keeping smaller, less price-sensitive clients at full margin.',
              metricDeltas: { annualVolume: 45000, unitPrice: -38, grossContribution: 1.82, capacityUtil: 3.8, ebitda: 1.82 },
              competitorReaction: 'Bharat found itself locked out of the best accounts and stuck with credit-risky, low-volume buyers.',
              stakeholderFeedback: 'Commercial Director: "Two major OEM clients signed 3-year exclusive agreements! Our plant volume is secured through 2029."',
              theorySnippet: {
                framework: 'Second-Degree Price Discrimination (Non-Linear Pricing)',
                takeaway: 'Segmenting by volume hurdle rates allows a firm to capture high-volume demand elasticity without surrendering margin on inelastic buyers.'
              }
            }
          },
          {
            id: 'e1-c',
            title: 'Ignore Competitor Completely: Hold Price Firm at ₹750 with Zero Concessions',
            description: 'Refuse to negotiate with anyone. Insist that Apex\'s superior brand reputation justifies paying ₹750.',
            tradeOffs: {
              pros: ['Maintains theoretical high unit margin on any unit sold', 'Sends an arrogant signal of market dominance'],
              cons: ['Three automotive clients immediately switch to Bharat, causing a sudden 280,000 unit volume loss', 'Factory capacity utilization plunges to 53%, triggering severe unabsorbed fixed overhead']
            },
            riskLevel: 'High',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Catastrophic volume desertion. The plant fell into deep under-utilization.',
              detailedAnalysis: 'Assuming industrial B2B procurement is brand-loyal in the face of a 17% price discount for identical technical specifications is fatal. Losing 280,000 units wiped out ₹9.2 Cr in contribution.',
              metricDeltas: { annualVolume: -280000, unitPrice: 0, grossContribution: -9.24, capacityUtil: -23.3, ebitda: -9.24 },
              competitorReaction: 'Bharat celebrated as 280,000 units shifted into their plant, driving their capacity utilization to 92%.',
              stakeholderFeedback: 'Plant Manager: "Machines are sitting cold. Our fixed overhead cost per remaining unit jumped from ₹152 to ₹218!"'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Quarter 2: Raw Material Price Shock (Shifting the Marginal Cost Curve)',
        quarterOrTimeline: 'Q2 - The Supply Shock',
        briefing: 'Global geopolitical conflict has triggered a 28% spike in raw aerospace-grade stainless steel and nickel alloys. Your variable cost per unit rises from ₹420 to ₹500 (an ₹80/unit cost increase). Bharat Fluidics, having locked into low ₹620 prices in Round 1, is now bleeding cash at just ₹120 gross contribution.',
        marketIntel: {
          headline: 'Nickel and stainless steel prices hit 5-year highs on global commodity exchanges',
          competitorMove: 'Bharat Fluidics is in panic mode; their thin margins can no longer cover their bank debt interest.',
          macroEnvironment: 'Industrial inflation is spreading; suppliers who cannot pass on raw material costs face working capital insolvency.',
          internalWhisper: 'Head of Procurement: "Every single valve we cast now costs ₹80 more in raw steel. If we don\'t pass this through, our EBITDA will drop by ₹7 Cr."'
        },
        urgentQuestion: 'How do you adjust your pricing policy in response to the upward shift in Marginal Cost?',
        choices: [
          {
            id: 'e2-a',
            title: 'Implement an Indexed "Raw Material Cost Escalation Surcharge" of ₹90/unit',
            description: 'Introduce a transparent, formula-based alloy surcharge tied directly to the London Metal Exchange (LME) index, adjusting billing automatically.',
            tradeOffs: {
              pros: ['Passes the marginal cost inflation directly through to buyers while maintaining transparent goodwill', 'De-risks future commodity swings permanently'],
              cons: ['Some customers will push back and demand absorption of input price inflation', 'Requires transparently sharing commodity index data with client procurement']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Brilliant institutional policy! 94% of clients accepted the indexed surcharge as fair and market-standard.',
              detailedAnalysis: 'By framing the price increase as an objective pass-through of external commodity index prices (LME), you avoided customer resentment. Net unit contribution was fully preserved.',
              metricDeltas: { annualVolume: -15000, unitPrice: 90, grossContribution: 1.15, capacityUtil: -1.2, ebitda: 1.15 },
              competitorReaction: 'Bharat Fluidics was forced to follow your lead, abandoning their predatory low pricing.',
              stakeholderFeedback: 'Client Procurement VP: "We appreciate the index-linked transparency. It is much better than arbitrary price gouging."',
              theorySnippet: {
                framework: 'Cost-Push Inflation & Index-Linked Marginal Pricing',
                takeaway: 'Tying price adjustments directly to objective third-party commodity indices protects margins while eliminating contentious price renegotiations.'
              }
            }
          },
          {
            id: 'e2-b',
            title: 'Absorb the Full ₹80 Cost Increase to Drive Bharat into Bankruptcy',
            description: 'Refuse to raise prices at all. Absorb the ₹80 cost hit internally, betting that your stronger balance sheet can survive while Bharat goes bankrupt.',
            tradeOffs: {
              pros: ['Inflicts severe financial pain on Bharat Fluidics, pushing them toward loan default', 'Delights customers who get price protection during an inflationary spike'],
              cons: ['Apex suffers an immediate ₹7.5 Cr hit to operating cash flow', 'Weakens your own cash reserves if the commodity crisis lasts more than 12 months']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Costly war of attrition. Both firms suffered heavy financial impairment.',
              detailedAnalysis: 'Predatory absorption of cost inflation in a capital-intensive industry drains liquidity rapidly. While Bharat suffered, Apex burned ₹7.4 Cr in operating cash reserves.',
              metricDeltas: { annualVolume: 25000, unitPrice: 0, grossContribution: -7.36, capacityUtil: 2.1, ebitda: -7.36 },
              competitorReaction: 'Bharat took emergency loans from state banks, refusing to die as quickly as you anticipated.',
              stakeholderFeedback: 'CFO: "We are bleeding cash to kill a competitor who is being kept on life support by state lenders. This is draining our reserves."'
            }
          },
          {
            id: 'e2-c',
            title: 'Opportunistic Price Gouge: Raise Price by ₹200 (₹110 above the cost shock)',
            description: 'Use the commodity crisis as an excuse to raise prices across the board to ₹950/unit.',
            tradeOffs: {
              pros: ['Massive profit windfall if buyers accept it without protest', 'Recovers historical margins quickly'],
              cons: ['Triggers intense customer fury and breach-of-contract lawsuits', 'Drives clients to seek Chinese import alternatives']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Customer revolt. Several major buyers canceled orders and sourced emergency valves from South Korea and Taiwan.',
              detailedAnalysis: 'Using input cost shocks to gouge industrial B2B clients destroys long-term supplier trust. Clients recognized the margin markup and initiated global vendor substitution.',
              metricDeltas: { annualVolume: -140000, unitPrice: 200, grossContribution: -3.85, capacityUtil: -11.7, ebitda: -3.85 },
              competitorReaction: 'Foreign valve manufacturers gained their first permanent foothold in the Indian market.',
              stakeholderFeedback: 'Automotive Association: "Apex has engaged in unjustified price exploitation. We are blacklisting them from future platform tenders."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Quarter 3: Capacity Bottleneck & Marginal Revenue Optimization',
        quarterOrTimeline: 'Q3 - The Capacity Constraint Dilemma',
        briefing: 'Global supply chain snarls have caused a surge in demand for Apex valves. Orders for next fiscal year total 1,450,000 units—exceeding your plant\'s 1,200,000 unit capacity by 250,000 units. You cannot produce everything. How you ration capacity between high-margin specialty valves and high-volume standard valves will determine enterprise valuation.',
        marketIntel: {
          headline: 'Industrial manufacturing boom triggers acute component rationing across Europe and Asia',
          competitorMove: 'Bharat Fluidics cannot take excess orders due to maintenance backlogs in their foundry.',
          macroEnvironment: 'When demand exceeds supply ($Q_d > Q_s$), pricing power shifts entirely to the producer.',
          internalWhisper: 'VP of Planning: "We have two product lines: Standard Auto Valves (Volume: 1M units, Price: ₹740, MC: ₹500, margin ₹240) and Aerospace Cryo-Valves (Volume: 300k units, Price: ₹1,650, MC: ₹850, margin ₹800). How do we allocate our 1.2M capacity?"'
        },
        urgentQuestion: 'How do you allocate limited plant capacity to maximize total economic contribution?',
        choices: [
          {
            id: 'e3-a',
            title: 'Prioritize High Contribution-per-Machine-Hour (Max Aerospace Cryo-Valves)',
            description: 'Allocate all required capacity to produce the maximum 300,000 units of Aerospace Cryo-Valves (margin ₹800/unit), and allocate the remaining 900,000 capacity to the highest-bidding Standard Auto clients, dropping the lowest 100k margin auto buyers.',
            tradeOffs: {
              pros: ['Maximizes total gross economic contribution by allocating constrained resource to highest contribution margin', 'Permanently shifts company product mix toward high-margin aerospace engineering'],
              cons: ['Disappoints low-margin automotive buyers who will have their volume rationed', 'Aerospace components require stricter quality testing and slower cycle times']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Record-shattering profitability! Total contribution crossed ₹45 Cr for the first time in company history.',
              detailedAnalysis: 'Classic microeconomic theory of constrained resource allocation: when capacity is the bottleneck, profit is maximized by producing goods with the highest contribution per unit of constraint. Net EBITDA surged.',
              metricDeltas: { annualVolume: 1200000 - 920000, unitPrice: 220, grossContribution: 16.24, capacityUtil: 23.3, ebitda: 16.24 },
              competitorReaction: 'Competitors were left fighting for low-margin auto scraps while Apex dominated high-margin aerospace.',
              stakeholderFeedback: 'Board Chairman: "By pivoting capacity toward high-contribution aerospace valves, our blended gross margin jumped from 38% to 52%! Exceptional financial acumen."',
              theorySnippet: {
                framework: 'Theory of Constraints & Marginal Contribution per Bottleneck Hour',
                takeaway: 'Under capacity constraints, allocate resources strictly to products with the highest contribution per unit of the limiting factor ($CM / Constraint$).'
              }
            }
          },
          {
            id: 'e3-b',
            title: 'Pro-Rata Cut: Ration 17% Across All Customers Equally',
            description: 'Cut everyone\'s orders by 17% equally regardless of product margin, attempting to please every customer a little bit.',
            tradeOffs: {
              pros: ['Treated as "fair" by client procurement departments', 'Preserves customer relationships across both auto and aerospace sectors'],
              cons: ['Sacrifices high-margin aerospace units to produce low-margin auto valves', 'Leaves every customer partially frustrated rather than fully satisfying your best clients']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Mediocre financial outcome. Aerospace clients were furious that their high-priority valves were delayed.',
              detailedAnalysis: 'Treating all customers equally under capacity constraints destroys economic value by subsidizing low-margin clients at the expense of high-margin contracts.',
              metricDeltas: { annualVolume: 1200000 - 920000, unitPrice: 65, grossContribution: 6.85, capacityUtil: 23.3, ebitda: 6.85 },
              competitorReaction: 'Aerospace clients sought alternate precision vendors in Japan and Germany.',
              stakeholderFeedback: 'Aerospace Client: "We pay you 3x the price of an auto valve, and you rationed us the same as a cheap tractor maker?"'
            }
          },
          {
            id: 'e3-c',
            title: 'Emergency Capex: Double Factory Size Immediately with High-Interest Debt',
            description: 'Borrow ₹45 Cr at 14% interest to build a second factory hall to fulfill all 1,450,000 units of demand.',
            tradeOffs: {
              pros: ['Could eventually produce 2,000,000 units in 18 months', 'Never turns down an order'],
              cons: ['Takes 18 months to build; does zero to solve this year\'s capacity bottleneck', 'Massive fixed overhead and debt risk if demand drops next year (the classic overcapacity trap)']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Dangerous over-leveraging. Factory expansion didn\'t help today and created a massive debt overhang.',
              detailedAnalysis: 'Building permanent capacity for cyclical demand peaks is the textbook cause of corporate bankruptcy in capital-intensive industries (the Cobweb model).',
              metricDeltas: { annualVolume: 0, unitPrice: 0, grossContribution: -2.5, capacityUtil: 0.0, ebitda: -6.3 },
              competitorReaction: 'Competitors watched Apex take on dangerous leverage right before a potential macroeconomic cooldown.',
              stakeholderFeedback: 'CFO: "We took on ₹45 Cr of debt that doesn\'t produce a single valve for 18 months, while interest payments start immediately."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Quarter 4: Long-Term Market Equilibrium & Strategic Game Theory',
        quarterOrTimeline: 'Q4 - Industry Structural Alignment',
        briefing: 'Bharat Fluidics has replaced its CEO after reporting heavy losses from their disastrous price war. Their new leadership has reached out through an industry trade conference, signaling a desire for "price stability and rational competition." The industry can either continue fighting destructive price wars or transition to a stable differentiated duopoly.',
        marketIntel: {
          headline: 'Bharat Fluidics restructures debt; CEO signals end of predatory discounting',
          competitorMove: 'Bharat has raised their catalog prices back to ₹730, inviting Apex to follow suit to restore industry profitability.',
          macroEnvironment: 'Antitrust regulators monitor explicit price-fixing cartels, but tacit collusion and price leadership are standard oligopoly dynamics.',
          internalWhisper: 'Strategy Advisor: "This is a classic repeated Prisoner\'s Dilemma. If both firms cooperate on price discipline, both make superior returns. If one cheats, the cycle repeats."'
        },
        urgentQuestion: 'What is your strategic pricing posture for the upcoming annual contract renegotiations?',
        choices: [
          {
            id: 'e4-a',
            title: 'Adopt "Tit-for-Tat" Price Leadership: Raise Base Price to ₹760 & Differentiate on Quality',
            description: 'Signal price discipline by raising your standard price to ₹760, matching their olive branch while continuing to invest in aerospace quality certifications and proprietary valve patents.',
            tradeOffs: {
              pros: ['Restores industry economic profit to sustainable healthy levels without illegal collusion', 'Establishes Apex as the respected price leader of the market'],
              cons: ['If Bharat cheats and secretly discounts again, you must be prepared to retaliate swiftly']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Triumph of Game Theory! The market stabilized in a high-margin Nash Equilibrium.',
              detailedAnalysis: 'In repeated Prisoner\'s Dilemma games, "Tit-for-Tat" (cooperating when the rival cooperates, punishing immediately if they defect) is mathematically proven to produce the highest long-term payoff. Industry gross margins rebounded to 48%.',
              metricDeltas: { annualVolume: 10000, unitPrice: 40, grossContribution: 4.84, capacityUtil: 0.8, ebitda: 4.84 },
              competitorReaction: 'Bharat kept prices at ₹730, content to remain the lower-tier volume provider while Apex captured premium aerospace contracts.',
              stakeholderFeedback: 'Managing Director: "We ended a destructive price war, shifted our product mix into high-margin aerospace, and grew our enterprise valuation by 2.4x. Masterful strategic execution."',
              theorySnippet: {
                framework: 'Game Theory: Repeated Prisoner\'s Dilemma & Price Leadership',
                takeaway: 'In oligopolies, aggressive price cutting creates negative-sum destruction. Tit-for-tat price leadership establishes stable, profitable industry equilibrium.'
              }
            }
          },
          {
            id: 'e4-b',
            title: 'Double Cross: Exploit Bharat\'s Price Hike by Slashing Price to ₹600',
            description: 'Now that Bharat raised prices to ₹730, slash your price to ₹600 to steal all their remaining clients while their guard is down.',
            tradeOffs: {
              pros: ['Short-term customer grab in the immediate quarter', 'Punishes Bharat for trying to restore prices'],
              cons: ['Instantly reignites a furious price war; Bharat will slash to ₹550 in retaliation', 'Proves to the market that Apex cannot be trusted to maintain price stability']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Furious retaliation. Bharat dropped prices to ₹520, plunging both companies back into the red.',
              detailedAnalysis: 'Defecting on an opponent\'s cooperative signal in a repeated game triggers immediate punitive retaliation. Both firms returned to the destructive Bertrand trap.',
              metricDeltas: { annualVolume: 35000, unitPrice: -160, grossContribution: -12.4, capacityUtil: 2.9, ebitda: -12.4 },
              competitorReaction: 'Bharat slashed prices below variable cost, determined to drag Apex down with them.',
              stakeholderFeedback: 'Board Director: "Why did you reignite the price war when Bharat offered peace? We are burning money again!"'
            }
          },
          {
            id: 'e4-c',
            title: 'Form an Explicit Written Cartel Agreement in a Hotel Room',
            description: 'Meet Bharat\'s CEO privately and sign a secret contract dividing Indian states into exclusive non-compete geographic zones and setting fixed prices.',
            tradeOffs: {
              pros: ['Total monopoly pricing power if undiscovered', 'Guaranteed zero competition on paper'],
              cons: ['Blatant criminal violation of the Competition Act of 2002', 'Guaranteed multi-crore antitrust penalties, customer lawsuits, and jail time when exposed']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Criminal antitrust prosecution. The Competition Commission raided both company headquarters.',
              detailedAnalysis: 'Explicit collusion is illegal in every modern economy. Whistleblowers leaked the hotel meeting, leading to severe corporate fines and executive disqualification.',
              metricDeltas: { annualVolume: -250000, unitPrice: 0, grossContribution: -25.0, capacityUtil: -20.8, ebitda: -25.0 },
              competitorReaction: 'Both companies faced joint antitrust enforcement.',
              stakeholderFeedback: 'Chief Legal Officer: "Federal authorities have frozen our corporate accounts and issued criminal summons. This is a corporate catastrophe."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You steered Apex Precision Components through a fierce, multi-stage industrial pricing war. By resisting the temptation of across-the-board price matching and instead applying second-degree volume price discrimination, implementing an indexed raw material surcharge to pass through input cost inflation, prioritizing capacity toward high contribution-margin aerospace cryo-valves, and deploying Tit-for-Tat game theory to stabilize industry pricing, you grew total gross contribution from ₹30.3 Cr to over ₹48 Cr while maintaining plant capacity utilization at 100%.',
      whyItHappened: 'In capital-intensive manufacturing industries, managers are terrified of unabsorbed fixed overhead and frequently panic into price wars, mistakenly assuming that volume gains will make up for lower prices. However, when price elasticity of demand is low, price cuts destroy total industry revenue. Success requires understanding marginal costs, segmenting clients to capture consumer surplus without across-the-board discounting, allocating bottleneck capacity to the highest contribution-per-hour products, and recognizing that competitor pricing is a repeated game of strategic incentives.',
      conceptsApplied: [
        {
          name: 'Price Elasticity of Demand (Ped) & Total Revenue',
          formulaOrModel: 'Ped = (% Change in Quantity Demanded) / (% Change in Price)',
          explanation: 'When Ped < 1.0 (inelastic), a price cut always decreases total revenue. Because specialized B2B valves have no immediate substitute and represent a small fraction of total car build cost, cutting price does not increase aggregate automotive production.',
          keyTakeaway: 'Never slash prices in an inelastic market unless you can structurally lower your marginal cost curve below all competitors.'
        },
        {
          name: 'Bertrand Duopoly & The Marginal Cost Trap',
          formulaOrModel: 'In Bertrand competition with identical products: Price -> Marginal Cost (P = MC)',
          explanation: 'When two firms with excess capacity compete solely on price for homogeneous goods, the Nash equilibrium drives price down to marginal cost (₹420), destroying enterprise value and preventing either firm from recovering fixed capital investments.',
          keyTakeaway: 'Differentiate your product or use non-linear contracts to escape the Bertrand trap.'
        },
        {
          name: 'Constrained Resource Allocation (Theory of Constraints)',
          formulaOrModel: 'Maximize: Contribution Margin per Unit of Bottleneck Constraint',
          explanation: 'When capacity is capped at 1.2M units, producing a standard valve generates ₹240 contribution, while an aerospace valve generates ₹800 contribution. Allocating scarce machine hours to the higher-margin product maximizes total enterprise EBITDA.',
          keyTakeaway: 'When demand exceeds capacity, your pricing problem becomes a portfolio prioritization problem.'
        }
      ],
      expertExecutivePerspective: 'A Senior Partner in McKinsey\'s Operations & Pricing Practice would assess: "The critical managerial insight demonstrated here is the distinction between variable marginal cost and fixed overhead allocation. Most inexperienced plant managers calculate \'Average Total Cost\' (Fixed + Variable / Volume) and panic when volume drops because their accounting cost per unit appears to spike. By focusing strictly on marginal cash contribution and deploying indexed LME raw material surcharges, management navigated the inflationary shock with zero margin erosion."',
      alternativePaths: [
        {
          choiceTitle: 'Symmetric Across-the-Board Price Match (Round 1)',
          counterfactualConsequence: 'If you had matched Bharat at ₹620 for all customers, gross contribution would have fallen by ₹11.5 Cr immediately. After covering fixed overhead of ₹14 Cr, net EBITDA would have been virtually wiped out, leaving the company vulnerable to insolvency when raw steel prices spiked in Round 2.'
        },
        {
          choiceTitle: 'Emergency Plant Capex Expansion (Round 3)',
          counterfactualConsequence: 'Borrowing ₹45 Cr to double factory size for a temporary demand surge would have created a massive debt overhang. When the automotive cycle cooled down, unabsorbed fixed depreciation and interest charges would have pushed Apex into bankruptcy.'
        }
      ],
      realWorldParallels: [
        {
          company: 'The US Airline Industry Price Wars (1990s)',
          caseStudySummary: 'Airlines have high fixed costs (aircraft leases, gates) and near-zero marginal cost per empty seat. In the 1990s, airlines engaged in brutal fare price matching, driving the entire industry into collective bankruptcy. Modern carriers restored profitability through capacity discipline and unbundled ancillary fees (baggage, seat selection).'
        },
        {
          company: 'Indian Telecom Tariff War (2016-2020)',
          caseStudySummary: 'Reliance Jio entered the market offering free/low-cost 4G data. Incumbents (Airtel, Vodafone-Idea) engaged in a multi-year price-matching war that destroyed industry ARPU and forced massive consolidation and debt restructuring before prices finally stabilized.'
        }
      ]
    }
  },
  {
    id: 'eco-market-entry',
    subjectId: 'microeconomics',
    conceptId: 'barriers-to-entry-mes',
    relatedConcepts: ['Sunk Costs vs Fixed Costs', 'Minimum Efficient Scale (MES)', 'Contestable Markets', 'Game Theory Deterrence'],
    title: 'Entering a New Market: SolarVolt Industrial Storage',
    tagline: 'Evaluate market demand, entry barriers, minimum efficient scale, and incumbent retaliation in utility-scale clean energy.',
    role: 'Chief Strategy Officer & Head of Market Expansion, SolarVolt Technologies',
    company: 'SolarVolt Power Systems',
    industry: 'Clean Energy / Commercial & Industrial Battery Storage (BESS)',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'SolarVolt is a profitable commercial solar rooftop EPC (Engineering, Procurement, Construction) provider with $80M in annual revenue. The board is evaluating an entry into the high-growth Utility-Scale Battery Energy Storage Systems (BESS) sector.',
      industryContext: 'The utility-scale BESS market in Western India is booming due to renewable grid integration mandates. However, the market is currently dominated by a well-entrenched multinational incumbent ("VoltMega Energy", 72% market share) with deep supplier relationships in China and proprietary battery management software.',
      currentSituation: 'Entering utility-scale BESS requires an upfront $22M capital investment for specialized battery assembly facilities, safety testing laboratories, and bank performance guarantees. Minimum Efficient Scale (MES) requires delivering at least 250 MWh of storage capacity annually to achieve competitive cell procurement pricing.'
    },
    objectives: [
      'Evaluate whether market demand and price structure justify the $22M capital expenditure.',
      'Achieve the 250 MWh Minimum Efficient Scale (MES) within 24 months of market entry.',
      'Avoid triggering predatory retaliatory pricing from incumbent VoltMega that would destroy capital returns.'
    ],
    constraints: [
      'Total capital expenditure for market entry capped at $25M.',
      'Must achieve a minimum internal rate of return (IRR) of 16% on invested capital.',
      'Must secure long-term utility off-taker contracts before commencing assembly.'
    ],
    initialMetrics: [
      { key: 'marketShare', label: 'BESS Market Share', value: 0, unit: '%', isGoodWhenHigh: true, benchmark: 20.0, description: 'Percentage of regional utility battery energy storage installations' },
      { key: 'annualVolume', label: 'Annual Volume Delivered', value: 0, unit: 'MWh', isGoodWhenHigh: true, benchmark: 250, description: 'Megawatt-hours of battery storage delivered annually (MES = 250)' },
      { key: 'costPerKwh', label: 'Levelized Cost of Storage', value: 165, unit: '$/kWh', isGoodWhenHigh: false, benchmark: 130, description: 'Total turnkey installation cost per kWh capacity delivered' },
      { key: 'projectedIrr', label: 'Projected Expansion IRR', value: 12.4, unit: '%', isGoodWhenHigh: true, benchmark: 16.0, description: 'Risk-adjusted internal rate of return on the $22M capital investment' },
      { key: 'cashBuffer', label: 'Corporate Cash Runway', value: 24.5, unit: '$M', format: 'currency', isGoodWhenHigh: true, benchmark: 20.0, description: 'Available liquid liquidity buffer' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Phase 1: Analyzing Market Contestability & Entry Modes',
        quarterOrTimeline: 'Phase 1 - Feasibility Assessment',
        briefing: 'You must decide how to enter the BESS market. Building a greenfield assembly factory costs $22M and takes 18 months. Alternatively, you could form a Joint Venture with an international battery cell manufacturer (CATL/BYD), or acquire a struggling local boutique systems integrator for $14M.',
        marketIntel: {
          headline: 'State electricity grid issues tender for 600 MWh of battery storage over the next 3 years',
          competitorMove: 'Incumbent VoltMega has already bid on the first 200 MWh tranche at $142/kWh, leveraging their existing scale.',
          macroEnvironment: 'Lithium iron phosphate (LFP) cell prices have dropped 20% globally, lowering raw input barriers.',
          internalWhisper: 'Head of Solar Projects: "If we build a brand-new factory from scratch, we won\'t be ready to bid on state tenders for nearly two years."'
        },
        urgentQuestion: 'Which market entry vehicle do you recommend to the Board of Directors?',
        choices: [
          {
            id: 'm1-a',
            title: 'Joint Venture (JV) Partnership with a Global Tier-1 Cell Manufacturer',
            description: 'Form a 50/50 JV with a leading global LFP cell maker. They provide guaranteed Tier-1 cell supply at volume discounts ($85/kWh) and proven software; SolarVolt provides Indian grid connections, customer relationships, and regulatory EPC execution.',
            tradeOffs: {
              pros: ['Instantly reaches Minimum Efficient Scale pricing on cells without bearing 100% of the CapEx risk', 'Fastest time-to-market (bidding within 4 months)'],
              cons: ['Must split long-term economic profits 50/50 with the foreign partner', 'Potential governance friction over technology licensing and export rights']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Outstanding strategic entry! The JV instantly neutralized VoltMega\'s supply chain cost advantage.',
              detailedAnalysis: 'Overcoming entry barriers in capital-intensive industries often requires a partnership that couples local market execution with global procurement scale. The JV eliminated the learning curve and allowed SolarVolt to bid at competitive prices immediately.',
              metricDeltas: { marketShare: 8.5, annualVolume: 120, costPerKwh: -28, projectedIrr: 5.8, cashBuffer: -4.5 },
              competitorReaction: 'VoltMega recognized that SolarVolt had bypassed their cell cost moat and began lobbying against the JV.',
              stakeholderFeedback: 'Board Chairman: "Superb risk-weighted structure. We secured world-class technology while committing only $4.5M in equity."',
              theorySnippet: {
                framework: 'Barriers to Entry & Collaborative Entry Vehicles',
                takeaway: 'When Minimum Efficient Scale requires massive volume, joint ventures allow entrants to leapfrog fixed capital cost barriers.'
              }
            }
          },
          {
            id: 'm1-b',
            title: 'Full Greenfield Capital Investment ($22M Self-Build Factory)',
            description: 'Spend $22M to purchase land, build an automated cleanroom pack assembly plant, and develop proprietary battery management software internally.',
            tradeOffs: {
              pros: ['100% ownership of intellectual property, technology, and future upside', 'No reliance on external foreign partners'],
              cons: ['Consumes 90% of company cash reserves; zero revenue for 18 months', 'Lacks cell purchasing power; will buy cells at a 30% penalty compared to incumbents']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Massive cash burn and construction delays. Missed the major state grid tender.',
              detailedAnalysis: 'Building sub-scale manufacturing in an industry governed by massive global cell economies of scale resulted in high unabsorbed overhead. Turnkey cost was $165/kWh, completely uncompetitive against VoltMega\'s $138/kWh.',
              metricDeltas: { marketShare: 1.5, annualVolume: 25, costPerKwh: 12, projectedIrr: -4.2, cashBuffer: -21.0 },
              competitorReaction: 'VoltMega easily won all state tenders while your factory sat unfinished.',
              stakeholderFeedback: 'CFO: "We sank $21M into concrete and machines, and our battery packs cost $25/kWh more than our competitors can import them for."'
            }
          },
          {
            id: 'm1-c',
            title: 'Distribute Pre-Packaged Chinese Batteries as a Pure White-Label Reseller',
            description: 'Invest zero CapEx in engineering or assembly; simply buy complete packaged battery containers from low-cost overseas suppliers and resell them with a 6% markup.',
            tradeOffs: {
              pros: ['Virtually zero capital investment or financial risk', 'Instant market presence with zero assembly complexity'],
              cons: ['Zero defensible technological moat or competitive differentiation', 'Thin 6% margins easily squeezed out by competitors; customers can bypass you and buy direct']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Low margin, zero customer stickiness. Utilities bypassed SolarVolt to buy directly from the manufacturer.',
              detailedAnalysis: 'Pure distribution in commoditized industrial equipment captures negligible economic rent. Once utilities realized SolarVolt was just an agent, they contracted directly with the Chinese supplier.',
              metricDeltas: { marketShare: 3.0, annualVolume: 40, costPerKwh: -5, projectedIrr: 1.2, cashBuffer: -0.5 },
              competitorReaction: 'VoltMega laughed off the reseller play, winning long-term software maintenance service contracts.',
              stakeholderFeedback: 'Head of Sales: "We did all the tender paperwork, and the client called the factory in Shenzhen directly to get an 8% discount."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Phase 2: Bidding on the 300 MWh State Grid Tender (Game Theory Auction)',
        quarterOrTimeline: 'Phase 2 - The High-Stakes Reverse Auction',
        briefing: 'The Maharashtra State Electricity Distribution Company has released a 300 MWh reverse auction tender for grid stability. The winning bidder gets a 12-year guaranteed power purchase contract. VoltMega has historically bid around $138/kWh. Your JV\'s break-even levelized cost is $124/kWh. If you bid too aggressively, you risk the "Winner\'s Curse"; if you bid too high, VoltMega wins everything.',
        marketIntel: {
          headline: 'State grid opens bidding on 300 MWh battery storage; reverse auction format creates intense margin pressure',
          competitorMove: 'Industry rumors suggest VoltMega is considering an aggressive predatory bid at $122/kWh (below their cost) to kill SolarVolt\'s market entry.',
          macroEnvironment: 'Grid penalties for renewable intermittency have made state utilities demand severe uptime liquidated damages ($50,000 per hour of outage).',
          internalWhisper: 'JV Partner Chief Engineer: "Our battery chemistry degrades 1.8% slower than VoltMega\'s. Over 12 years, that saves the utility $14M in replacement cells."'
        },
        urgentQuestion: 'What bidding and contracting strategy do you submit for the 300 MWh tender?',
        choices: [
          {
            id: 'm2-a',
            title: 'Two-Part Value Bid: $128/kWh Base + Superior Degradation Warranty Guarantee',
            description: 'Bid at a profitable $128/kWh (generating 3.2% net margin), backed by an ironclad 12-year battery lifecycle guarantee highlighting your slower cell degradation and lower utility total cost of ownership (TCO).',
            tradeOffs: {
              pros: ['Ensures positive project economics (avoids Winner\'s Curse)', 'Tenders evaluate 12-year Net Present Value (NPV), where lower degradation outweighs a minor upfront price difference'],
              cons: ['If the tender evaluation committee only looks at upfront headline price, you could lose to a predatory bid', 'Exposes the company to degradation warranty penalties if battery chemistry underperforms']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Victory! The tender committee awarded SolarVolt 200 MWh of the 300 MWh contract based on 12-year lifecycle value.',
              detailedAnalysis: 'In sophisticated industrial capital auctions, the lowest upfront price does not always yield the highest technical score. Demonstrating that your slower cell degradation saved the utility $14M in cell replacements won the day while preserving a healthy 18.2% IRR.',
              metricDeltas: { marketShare: 18.2, annualVolume: 200, costPerKwh: -8, projectedIrr: 6.2, cashBuffer: 8.5 },
              competitorReaction: 'VoltMega was stunned that their historical monopoly in state tenders was broken.',
              stakeholderFeedback: 'State Grid Director: "SolarVolt\'s technical degradation modeling was vastly superior. We chose long-term grid reliability over a short-term headline discount."',
              theorySnippet: {
                framework: 'The Winner\'s Curse & Total Cost of Ownership (TCO) Bidding',
                takeaway: 'In common-value auctions, aggressively bidding below cost to win guarantees long-term financial loss. Win through structural value differentiation rather than self-destructive price slashing.'
              }
            }
          },
          {
            id: 'm2-b',
            title: 'Suicidal Predatory Bid: $115/kWh to Guarantee 100% Contract Win',
            description: 'Bid at $115/kWh (a guaranteed $9/kWh cash loss on every unit) to ensure VoltMega is completely shut out of the 300 MWh contract.',
            tradeOffs: {
              pros: ['Guaranteed to win the headline lowest price metric', 'Inflicts massive psychological defeat on VoltMega'],
              cons: ['Locks SolarVolt into a 12-year contract that loses $2.7M in operating cash annually', 'Classic textbook manifestation of the Winner\'s Curse']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Won the contract, but committed corporate financial suicide.',
              detailedAnalysis: 'The Winner\'s Curse struck with brutal force. While SolarVolt was celebrated in the press on Day 1, the reality of delivering 300 MWh at a $9/kWh loss drained company operating cash, triggering emergency board meetings.',
              metricDeltas: { marketShare: 24.0, annualVolume: 300, costPerKwh: 0, projectedIrr: -9.8, cashBuffer: -14.2 },
              competitorReaction: 'VoltMega celebrated privately, knowing SolarVolt had signed an unprofitable contract that would bleed them dry.',
              stakeholderFeedback: 'CFO: "We won the tender and signed our own financial death warrant. We lose $2.7M every year for the next 12 years."'
            }
          },
          {
            id: 'm2-c',
            title: 'High Conservative Bid: $145/kWh (Assuming VoltMega Won\'t Discount)',
            description: 'Submit a safe, high bid at $145/kWh to ensure fat 16% margins if won.',
            tradeOffs: {
              pros: ['Zero risk of an unprofitable contract', 'Guaranteed high profits if the competitor bids even higher'],
              cons: ['VoltMega bid $136/kWh and won 100% of the 300 MWh tender', 'SolarVolt leaves the auction with zero volume and wasted bid preparation costs']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Total defeat. SolarVolt won zero MWh and was completely shut out of the regional grid.',
              detailedAnalysis: 'Bidding above the market clearing price against an incumbent with established scale is wishful thinking. SolarVolt failed to capture any anchor volume to cover its overhead.',
              metricDeltas: { marketShare: 0.0, annualVolume: 0, costPerKwh: 0, projectedIrr: -3.5, cashBuffer: -1.2 },
              competitorReaction: 'VoltMega cemented their total monopoly for another 3 years.',
              stakeholderFeedback: 'JV Partner Lead: "We flew engineers from overseas for 3 months to prepare this bid, and you priced us completely out of the market."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Phase 3: Scaling to Minimum Efficient Scale & Defending Against Incumbent FUD',
        quarterOrTimeline: 'Phase 3 - Scale & Market Consolidation',
        briefing: 'Having secured the 200 MWh state grid project, you are within striking distance of the 250 MWh Minimum Efficient Scale (MES). However, VoltMega has launched an aggressive "Fear, Uncertainty, and Doubt" (FUD) campaign targeting commercial and industrial (C&I) private corporate clients (Tata, Reliance, Mahindra), claiming that SolarVolt\'s JV batteries are prone to thermal runaway fires and lack safety certifications.',
        marketIntel: {
          headline: 'VoltMega circulates whitepaper questioning safety of new BESS market entrants',
          competitorMove: 'VoltMega is offering private corporate clients free fire suppression retrofits if they sign 5-year exclusivity agreements.',
          macroEnvironment: 'Industrial factory owners are terrified of factory fires and demand international UL9540A safety certifications.',
          internalWhisper: 'VP of Commercial Sales: "Two major industrial textile mills are pausing their 30 MWh rooftop storage orders because of VoltMega\'s safety rumors."'
        },
        urgentQuestion: 'How do you neutralize the incumbent\'s safety FUD and capture the remaining 50 MWh to surpass MES?',
        choices: [
          {
            id: 'm3-a',
            title: 'Publish Independent UL9540A Fire-Safety Test Certifications + Full-Scale Live Demonstration',
            description: 'Partner with international testing agency TÜV Rheinland to conduct a live, public, destructive fire test demonstrating that SolarVolt\'s LFP cells do not propagate thermal runaway. Invite 50 corporate energy directors and offer a $10M Munich Re performance warranty insurance backstop.',
            tradeOffs: {
              pros: ['Completely disproves competitor rumors with undeniable scientific third-party proof', 'Munich Re performance insurance eliminates corporate procurement liability anxiety'],
              cons: ['Testing and insurance premiums cost $650,000 upfront', 'Takes 6 weeks to complete testing and invite corporate delegates']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Devastating counter-offensive! The live test went viral in industrial engineering circles.',
              detailedAnalysis: 'Countering incumbent FUD requires unimpeachable empirical evidence and third-party financial backing (Munich Re). Corporate industrial buyers immediately resumed contracts, adding 75 MWh of private C&I orders.',
              metricDeltas: { marketShare: 7.2, annualVolume: 75, costPerKwh: -14, projectedIrr: 4.8, cashBuffer: 12.4 },
              competitorReaction: 'VoltMega\'s smear campaign backfired; their own safety track record was scrutinized by regulators.',
              stakeholderFeedback: 'Textile Conglomerate VP: "Seeing the battery survive a direct puncture test without flames convinced our board completely. We signed the 30 MWh order today."',
              theorySnippet: {
                framework: 'Information Asymmetry, Signaling & Warranties (Akerlof & Spence)',
                takeaway: 'In high-risk technology adoptions, third-party certification and insured warranties act as credible economic signals that eliminate adverse selection.'
              }
            }
          },
          {
            id: 'm3-b',
            title: 'File a Defamation Lawsuit Against VoltMega in High Court',
            description: 'Initiate a $50M corporate defamation lawsuit against VoltMega for spreading false safety rumors, relying on litigation rather than technical proof.',
            tradeOffs: {
              pros: ['Forces VoltMega executives to spend time with legal counsel', 'Generates dramatic courtroom headlines in business newspapers'],
              cons: ['Takes 3 to 5 years in Indian courts with zero immediate impact on customer decisions', 'Leaves corporate buyers still anxious about whether the batteries are actually safe']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Legal quagmire. Corporate buyers paused orders until the lawsuit concluded.',
              detailedAnalysis: 'Litigation does not reassure nervous corporate buyers about fire safety; it simply makes the entire category look contentious and risky. C&I orders dried up.',
              metricDeltas: { marketShare: -2.0, annualVolume: -15, costPerKwh: 2, projectedIrr: -2.5, cashBuffer: -1.8 },
              competitorReaction: 'VoltMega hired top litigation counsel and delayed court hearings repeatedly.',
              stakeholderFeedback: 'Corporate Customer: "We are not touching either vendor until your legal fight is resolved. We can\'t risk our factory in a courtroom battle."'
            }
          },
          {
            id: 'm3-c',
            title: 'Slash Prices by Another 25% to Compensate Clients for the Safety Risk',
            description: 'Offer steep emergency price cuts to corporate clients to buy their forgiveness regarding safety concerns.',
            tradeOffs: {
              pros: ['Attracts extreme budget-conscious buyers', 'Quick way to close volume before the quarter ends'],
              cons: ['Implicitly confirms the competitor\'s smear ("If they are discounting so heavily, maybe the batteries really ARE dangerous!")', 'Destroys profit margins on private commercial deals']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Disastrous signal. Customers concluded the product was defective because of the desperate discounting.',
              detailedAnalysis: 'When a customer has safety fears, offering a discount triggers the psychological heuristic that the product is low-grade or counterfeit. Churn accelerated.',
              metricDeltas: { marketShare: -3.5, annualVolume: -25, costPerKwh: 8, projectedIrr: -4.5, cashBuffer: -4.2 },
              competitorReaction: 'VoltMega told clients: "See? They are practically giving them away because they know they won\'t last 5 years."',
              stakeholderFeedback: 'Industrial Client: "If your batteries catch fire and burn down my $40M factory, a $10 discount per kWh doesn\'t help me."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Phase 4: Achieving Long-Term Equilibrium & The Network Moat',
        quarterOrTimeline: 'Phase 4 - Long-Term Moat Creation',
        briefing: 'SolarVolt has delivered 275 MWh of battery storage, successfully crossing the 250 MWh Minimum Efficient Scale (MES)! Your levelized cost of storage has fallen to $118/kWh, and you have captured 25.4% market share. You now stand at the frontier of market maturity: do you remain an equipment integrator, or build an AI Virtual Power Plant (VPP) energy aggregation platform?',
        marketIntel: {
          headline: 'Indian Energy Exchange (IEX) enables real-time battery energy arbitrage trading',
          competitorMove: 'VoltMega is shifting toward cloud-managed energy trading software to lock in recurring subscription revenue.',
          macroEnvironment: 'Hardware margins on batteries will eventually trend toward commodity levels (5-8%); the long-term profit pool sits in automated grid trading algorithms.',
          internalWhisper: 'Head of Software: "We have 275 MWh of storage connected to the grid. If we network them into a single Virtual Power Plant, we can trade power during peak tariff spikes and generate $8M/year in high-margin software revenues."'
        },
        urgentQuestion: 'What is your core strategic expansion vector for the next 5 years?',
        choices: [
          {
            id: 'm4-a',
            title: 'Pioneer the "SolarVolt GridPulse" AI Virtual Power Plant (VPP) Platform',
            description: 'Network all installed SolarVolt customer battery systems into a cloud-managed Virtual Power Plant. Use algorithmic AI to charge batteries when solar prices are zero and discharge into the grid during peak evening tariff spikes, sharing the arbitrage profits 70/30 with battery owners.',
            tradeOffs: {
              pros: ['Transforms one-off hardware sales into an unassailable high-margin recurring SaaS revenue stream', 'Creates network effects: the larger the battery network, the more lucrative the grid arbitrage trading revenue'],
              cons: ['Requires software engineering investment and power trading regulatory licensing', 'Exposes the firm to electricity market volatility if algorithms miscalculate peak price hours']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Strategic masterstroke! SolarVolt transformed into India\'s leading clean energy flexibility platform.',
              detailedAnalysis: 'Moving from capital-intensive hardware assembly into network software captured the highest-margin slice of the energy transition value chain. Enterprise valuation expanded from $80M to $320M, paving the way for a stellar public IPO.',
              metricDeltas: { marketShare: 6.8, annualVolume: 85, costPerKwh: -12, projectedIrr: 8.4, cashBuffer: 26.5 },
              competitorReaction: 'VoltMega was left as a legacy hardware box vendor while SolarVolt captured the software trading margins.',
              stakeholderFeedback: 'Lead Private Equity Investor: "You started with a $4.5M JV entry and built an unassailable $300M+ software-enabled energy platform. This is textbook strategic economics."',
              theorySnippet: {
                framework: 'Value Migration & Network Platforms (Slywotzky)',
                takeaway: 'Economic profits inevitably migrate away from commoditizing hardware manufacturing toward software networks that control customer data and market transactions.'
              }
            }
          },
          {
            id: 'm4-b',
            title: 'Remain a Pure Hardware Assembly Provider & Fight on Price Alone',
            description: 'Refuse software investments. Focus exclusively on squeezing another $2/kWh out of battery container assembly costs.',
            tradeOffs: {
              pros: ['Simple, uncomplicated operational model', 'Avoids software development expenses'],
              cons: ['Hardware margins will inevitably compress toward zero as Chinese cell supply floods the market', 'Vulnerable to any new entrant willing to assemble boxes at lower margins']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Commodity trap. Margins steadily eroded as new assemblers entered the market.',
              detailedAnalysis: 'Failing to climb the value curve when hardware commoditizes leaves a company vulnerable to Bertrand price competition. Net margin collapsed to 4.2% within two years.',
              metricDeltas: { marketShare: 0.5, annualVolume: 20, costPerKwh: -4, projectedIrr: -1.8, cashBuffer: 4.2 },
              competitorReaction: 'New low-cost EPC contractors undercut you on every public tender.',
              stakeholderFeedback: 'Founder: "We built an impressive factory, but everyone treats us like a cheap construction contractor."'
            }
          },
          {
            id: 'm4-c',
            title: 'Divest the BESS Business Immediately to VoltMega for $35M',
            description: 'Sell the entire battery division to VoltMega to lock in a fast financial gain for early shareholders.',
            tradeOffs: {
              pros: ['Guaranteed financial cash return on initial investment', 'Eliminates all future execution and technology risks'],
              cons: ['VoltMega eliminates its only serious challenger and restores its monopoly', 'Surrenders the multi-hundred-million-dollar future of the energy transition']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Modest exit, but surrendered the company\'s growth engine.',
              detailedAnalysis: 'Exiting right as the business crossed Minimum Efficient Scale and achieved regulatory dominance surrendered 80% of the long-term enterprise valuation creation.',
              metricDeltas: { marketShare: 0.0, annualVolume: 0, costPerKwh: 0, projectedIrr: 0.0, cashBuffer: 35.0 },
              competitorReaction: 'VoltMega restored their 90% regional monopoly and immediately raised prices.',
              stakeholderFeedback: 'Board Director: "We took $35M when we could have built a $300M clean energy titan. A shortsighted exit."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You led SolarVolt Technologies from zero presence in utility-scale battery storage into a dominant, profitable market leader. By selecting a collaborative Joint Venture model to overcome cell purchasing entry barriers without risking catastrophic greenfield CapEx, winning 200 MWh of anchor state tenders through two-part lifecycle TCO bidding (avoiding the Winner\'s Curse), demolishing incumbent safety FUD through live third-party destructive testing and Munich Re insurance, and expanding into an AI Virtual Power Plant software platform, you surpassed Minimum Efficient Scale (275 MWh) and achieved an expansion IRR of over 24%.',
      whyItHappened: 'Market entry in capital-intensive industries is a strategic chess match governed by Minimum Efficient Scale, game-theoretic auctions, and incumbent retaliation. Entrants fail when they attempt to out-spend incumbents on fixed assets or when they trigger predatory price wars through suicidal auction bidding. You succeeded because you used asymmetric strategy: partnering for scale, competing on Total Cost of Ownership rather than suicidal price cuts, and migrating up the value chain from commodity hardware assembly into software network platforms.',
      conceptsApplied: [
        {
          name: 'Minimum Efficient Scale (MES) & Cost Curves',
          formulaOrModel: 'MES = Output level where Long-Run Average Cost (LRAC) is minimized',
          explanation: 'In battery assembly, cell suppliers offer volume discounts only at high scale thresholds (250 MWh). Operating below MES incurs a severe per-unit cost penalty that guarantees unprofitability against established incumbents.',
          keyTakeaway: 'Before investing in market entry, calculate the Minimum Efficient Scale and determine whether your capital runway can reach that volume before running out of cash.'
        },
        {
          name: 'The Winner\'s Curse in Common-Value Auctions',
          formulaOrModel: 'E[Value | Win] < Cost if bid is based on over-optimistic assumptions',
          explanation: 'In reverse procurement auctions, the bidder with the lowest price wins. If you bid below true long-term levelized costs to guarantee a win, you "win" the contract but suffer guaranteed financial bleeding across its 12-year operational lifespan.',
          keyTakeaway: 'Winning an unprofitable contract is far worse than losing the bid.'
        },
        {
          name: 'Signaling & Resolving Adverse Selection (Akerlof)',
          formulaOrModel: 'Costly Signal: Valid certification + Warranties that low-quality rivals cannot copy',
          explanation: 'When an incumbent spreads safety FUD, verbal assurances fail because buyers cannot verify technical truth. Investing in destructive TÜV testing and Munich Re insurance provided an unforgeable signal that eliminated buyer risk.',
          keyTakeaway: 'High-quality entrants must send credible, costly signals to overcome incumbent information asymmetry.'
        }
      ],
      expertExecutivePerspective: 'A Managing Director at Goldman Sachs Infrastructure & Energy Transition would observe: "The JV structure executed in Phase 1 was the decisive strategic breakthrough. Most corporate boards let founder ego drive them into spending $25M on a greenfield factory that sits sub-scale for years. Bypassing that CapEx trap through a partnership with an established global cell manufacturer gave SolarVolt Tier-1 pricing on Day 1. That single move neutralized VoltMega\'s 10-year head start in a single stroke."',
      alternativePaths: [
        {
          choiceTitle: 'The $22M Greenfield Self-Build Factory (Phase 1)',
          counterfactualConsequence: 'If you had built the factory from scratch, you would have burned $21M in cash reserves, suffered 18 months of construction delays, missed the state grid tender, and produced batteries at $165/kWh—dooming the business to bankruptcy.'
        },
        {
          choiceTitle: 'Suicidal Predatory Bid at $115/kWh (Phase 2)',
          counterfactualConsequence: 'Bidding below your break-even cost to guarantee a win would have inflicted a $2.7M annual cash loss on SolarVolt for 12 years. The company would have suffered technical insolvency within 36 months.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Tesla Energy (Megapack & Autobidder)',
          caseStudySummary: 'Tesla scaled its utility storage business (Megapack) from a hardware box provider into an energy trading software powerhouse using "Autobidder" AI to trade power automatically in wholesale energy markets, achieving 25%+ operating margins in a commoditizing battery sector.'
        },
        {
          company: 'Fluence (Siemens & AES Joint Venture)',
          caseStudySummary: 'Recognizing the massive capital and technological scale required for global energy storage, industrial giant Siemens and utility leader AES merged their storage divisions into a 50/50 JV (Fluence), rapidly reaching global Minimum Efficient Scale and successfully going public on NASDAQ.'
        }
      ]
    }
  }
];
