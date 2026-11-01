import { Simulation } from '../../types';

export const operationsSimulations: Simulation[] = [
  {
    id: 'ops-supply-chain-crisis',
    subjectId: 'operations',
    conceptId: 'bullwhip-effect',
    relatedConcepts: ['Economic Order Quantity (EOQ)', 'Safety Stock & Service Level (Z-score)', 'Single vs Dual Sourcing', 'The Bullwhip Effect'],
    title: 'The Supply Chain Crisis: Zenith Electronics Semiconductor Squeeze',
    tagline: 'Mitigate the Bullwhip effect, balance safety stock against holding costs, and manage a catastrophic microchip supplier disruption.',
    role: 'Vice President of Global Supply Chain & Operations, Zenith Electronics',
    company: 'Zenith Smart Devices Ltd.',
    industry: 'Consumer Electronics & Smart IoT Devices',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'Zenith manufactures smart 4K televisions, smart home controllers, and IoT gateways across 2 automated assembly plants in Chennai and Noida, shipping 2.8 million units annually to major retail chains (Reliance Digital, Croma, Amazon).',
      industryContext: 'Consumer electronics relies on global, just-in-time (JIT) component supply chains. A single missing $1.50 microcontroller can halt the entire assembly of a $600 4K smart television.',
      currentSituation: 'A catastrophic fire at your single-source Taiwan semiconductor packaging partner has halted production of the proprietary Wi-Fi/Bluetooth microchip ("Z-Link") that powers 100% of Zenith\'s product line. Current factory component inventory stands at barely 14 days. Lead times from alternative global foundries have exploded to 22 weeks. Your retail partners are preparing for the Diwali festive rush, which accounts for 40% of your annual revenue.'
    },
    objectives: [
      'Maintain factory production continuity without exceeding 3 days of total plant downtime.',
      'Prevent the Bullwhip Effect from creating massive post-festive inventory overstock.',
      'Maintain retail on-time delivery Service Level Agreement (SLA) above 90% while controlling expedited freight costs.'
    ],
    constraints: [
      'Emergency air-freight logistics budget capped at ₹12.0 Crore.',
      'Safety stock holding costs cannot exceed 18% of annualized inventory carrying value.',
      'Alternative chip suppliers require 3 weeks of engineering firmware re-validation.'
    ],
    initialMetrics: [
      { key: 'plantUptime', label: 'Factory Assembly Uptime', value: 98.4, unit: '%', isGoodWhenHigh: true, benchmark: 95.0, description: 'Percentage of scheduled factory operating hours in active production' },
      { key: 'serviceLevel', label: 'Retail SLA Fulfillment', value: 94.2, unit: '%', isGoodWhenHigh: true, benchmark: 92.0, description: 'Percentage of customer and retailer orders fulfilled on-time' },
      { key: 'inventoryDays', label: 'Component Days of Supply', value: 14, unit: 'days', isGoodWhenHigh: true, benchmark: 35, description: 'Days of production supported by current on-hand warehouse inventory' },
      { key: 'unitProductionCost', label: 'Unit Manufacturing Cost', value: 14200, unit: '₹', isGoodWhenHigh: false, benchmark: 14000, description: 'Total cost of goods sold per assembled smart television' },
      { key: 'airFreightSpent', label: 'Expedited Freight Spent', value: 0.8, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: false, benchmark: 12.0, description: 'Cumulative emergency air logistics expenditure' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Week 1: The Disruption Shockwave & Sourcing Redundancy',
        quarterOrTimeline: 'Crisis Week 1 - The Immediate Bottleneck',
        briefing: 'The fire in Taiwan has knocked out 100% of your primary chip supply for at least 16 weeks. You have only 14 days of Z-Link chips in warehouse stock. Your procurement team presents two emergency options: 1) Buy 300,000 spot chips from an electronic broker in Singapore at a 400% price markup (₹1,800/chip vs normal ₹350); or 2) Fast-track an alternative chip from South Korea (Samsung Electronics) at standard price, but requiring 21 days for firmware engineering re-validation (causing an 7-day factory shutdown).',
        marketIntel: {
          headline: 'Taiwan packaging fire triggers acute microcontroller shortage across South Asian consumer electronics',
          competitorMove: 'Competitors are frantically bidding for grey-market broker chips, driving broker prices to 5x normal rates.',
          macroEnvironment: 'Single-source dependency (JIT optimization) has left consumer hardware vulnerable to systemic supply shocks.',
          internalWhisper: 'VP of Manufacturing: "If the plant sits idle for 7 days, our unabsorbed fixed factory overhead is ₹4.2 Cr, and our contractual assembly workers will be idle."'
        },
        urgentQuestion: 'How do you balance spot-market price gouging against the operational cost of factory downtime?',
        choices: [
          {
            id: 'c1-a',
            title: 'The Hybrid Bridge: Buy 10 Days of Broker Chips (₹4.5 Cr) + Fast-Track Korea Dual-Source Sourcing',
            description: 'Execute a balanced bridge strategy: buy only 65,000 broker chips at the spot markup (costing ₹4.5 Cr) to keep the assembly lines running for exactly 10 days, while simultaneously authorizing emergency 24/7 engineering overtime to validate the South Korean alternative chip in 10 days instead of 21.',
            tradeOffs: {
              pros: ['Completely avoids factory downtime while avoiding blowing your entire budget on broker price-gouging', 'Permanently establishes a resilient dual-sourcing supply chain with South Korea (eliminating single-source risk forever)'],
              cons: ['Incurs ₹4.5 Cr in broker spot surcharges and engineering overtime bonuses', 'Requires engineering team to work round-the-clock shifts for 10 days']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Operational masterstroke! Factory ran seamlessly while Korean dual-sourcing went live on Day 11.',
              detailedAnalysis: 'Buying the minimum broker volume necessary to bridge the engineering validation gap prevented both the ₹4.2 Cr downtime penalty and the catastrophic markup of buying 300,000 broker chips. Production never missed a single hour.',
              metricDeltas: { plantUptime: 0.8, serviceLevel: 1.2, inventoryDays: 18, unitProductionCost: 280, airFreightSpent: 4.5 },
              competitorReaction: 'Competitors who blew their entire budgets on broker chips ran out of working capital.',
              stakeholderFeedback: 'Plant General Manager: "Zero assembly line stoppages. The Korean chips arrived and flashed seamlessly into our TV motherboards on Day 11. Superb bridge management."',
              theorySnippet: {
                framework: 'Dual-Sourcing vs Single-Sourcing & Bridge Inventory Strategy',
                takeaway: 'Never buy long-term volume from predatory spot brokers. Buy only the exact operational bridge volume required to validate an accredited secondary source.'
              }
            }
          },
          {
            id: 'c1-b',
            title: 'Full Capitulation to Broker: Buy All 300,000 Chips at 400% Markup (₹43.5 Cr Cost)',
            description: 'Panic and buy 300,000 chips from the Singapore broker at ₹1,800 each to ensure a 60-day buffer, completely ignoring alternative suppliers.',
            tradeOffs: {
              pros: ['Zero factory downtime today', 'Requires zero engineering firmware changes'],
              cons: ['Incurs a crushing ₹43.5 Cr cost penalty that obliterates operating profit margins for the entire year', 'Leaves the company completely dependent on unverified broker components']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Financial devastation. The ₹43.5 Cr broker markup wiped out annual profit.',
              detailedAnalysis: 'Over-insuring against downtime by buying long-term volume at 400% markups is economically irrational. Zenith spent ₹1,450 extra per TV, wiping out operating EBITDA.',
              metricDeltas: { plantUptime: 0.0, serviceLevel: 0.0, inventoryDays: 52, unitProductionCost: 1450, airFreightSpent: 12.0 },
              competitorReaction: 'Brokers celebrated as Zenith paid record-setting panic prices.',
              stakeholderFeedback: 'CFO: "We kept the plant running, but we lost ₹28 Cr on the quarter. We would have been far better off taking a 5-day pause!"'
            }
          },
          {
            id: 'c1-c',
            title: 'Refuse All Broker Chips: Shut Down Factory for 21 Days Waiting for Korea',
            description: 'Refuse to pay brokers a single rupee. Padlock the factory gates for 21 days while engineers validate the Korean chip.',
            tradeOffs: {
              pros: ['Zero broker price markup paid', 'Guaranteed high-quality Korean components when reopened'],
              cons: ['21 days of zero production; retail inventory completely runs out', 'Retail partners (Reliance, Amazon) cancel festive contracts and levy severe contractual SLA fines']
            },
            riskLevel: 'High',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Retail channel disaster. Retailers canceled contracts and levied ₹18 Cr in SLA breach penalties.',
              detailedAnalysis: 'Shutting down production for 3 weeks right before the festive window destroyed retail partnerships. Retailers filled their shelves with competitor brands.',
              metricDeltas: { plantUptime: -42.0, serviceLevel: -38.0, inventoryDays: -14, unitProductionCost: 450, airFreightSpent: 0.0 },
              competitorReaction: 'LG and Samsung absorbed Zenith\'s vacated retail shelf space.',
              stakeholderFeedback: 'Reliance Digital VP: "Your TV displays were completely empty during our biggest sales weekend. We have canceled Zenith\'s preferred vendor status."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Week 4: The Bullwhip Effect Eruption & Phantom Festive Orders',
        quarterOrTimeline: 'Crisis Week 4 - Demand Distortion',
        briefing: 'Word of the chip shortage has spread to retail distributors. Fearing they will be shorted during Diwali, regional distributors are artificially inflating their orders by 80% (ordering 500,000 units when real consumer end-demand is only 280,000). The sales team is euphoric and demands: "Authorize massive component purchase orders for 500,000 TVs! This will be our biggest quarter ever!"',
        marketIntel: {
          headline: 'The Bullwhip Effect strikes consumer electronics: Distributor panic-ordering creates artificial phantom backlogs',
          competitorMove: 'Unprepared rivals are ramping up component orders to match inflated distributor requests.',
          macroEnvironment: 'Order batching, price promotions, and shortage gaming cause demand signal distortion to amplify upstream toward suppliers.',
          internalWhisper: 'Lead Demand Planner: "Distributors are playing \'shortage gaming\'. They know that if they order 100, we ration them 60. So they are ordering 180 to get the 100 they actually need!"'
        },
        urgentQuestion: 'How do you prevent the Bullwhip Effect from stranding millions in post-festive inventory?',
        choices: [
          {
            id: 'c2-a',
            title: 'Implement Point-of-Sale (POS) Sell-Through Allocation & Vendor-Managed Inventory (VMI)',
            description: 'Refuse to base manufacturing on distributor order sheets. Instead, mandate real-time Point-of-Sale (POS) barcode scan data directly from retail cash registers. Allocate stock to distributors strictly based on their trailing 14-day actual consumer sell-through velocity, while capping maximum retailer inventory buffer at 21 days.',
            tradeOffs: {
              pros: ['Eliminates the Bullwhip Effect by anchoring manufacturing strictly to true end-consumer consumption', 'Prevents massive post-festive inventory hangover and discounting bloodbaths in January'],
              cons: ['Distributors will complain loudly that their inflated paper orders were cut', 'Requires integrating real-time retail sell-through API feeds']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Bullwhip effect eliminated! Production precisely matched true consumer demand (290,000 units).',
              detailedAnalysis: 'The Bullwhip Effect is neutralized by information transparency. By bypassing distorted distributor orders and anchoring production strictly on retail register sell-through data (POS), Zenith avoided building 200,000 excess televisions.',
              metricDeltas: { plantUptime: 0.5, serviceLevel: 2.4, inventoryDays: 12, unitProductionCost: -120, airFreightSpent: 1.2 },
              competitorReaction: 'Competitors who fell for the phantom orders were left with 150,000 unsold TVs in January, forcing 40% margin-slashing clearance sales.',
              stakeholderFeedback: 'Head of Supply Chain Planning: "In January, our warehouses were lean and clean with zero dead inventory, while our competitors were drowning in unsold stock. A textbook Bullwhip defense."',
              theorySnippet: {
                framework: 'The Bullwhip Effect (Jay Forrester & Hau Lee)',
                takeaway: 'Demand variance amplifies upstream in the supply chain due to shortage gaming, order batching, and lack of visibility. Counteract it with Point-of-Sale (POS) transparency and Vendor-Managed Inventory (VMI).'
              }
            }
          },
          {
            id: 'c2-b',
            title: 'Fulfill All 500,000 Orders: Ramp Component Factory Purchases to the Maximum',
            description: 'Believe the distributor order sheets at face value. Commit ₹450 Cr to component suppliers to produce all 500,000 requested televisions.',
            tradeOffs: {
              pros: ['Sales team receives massive paper commission bonuses today', 'Distributors feel that all their requests were validated'],
              cons: ['Post-Diwali, 210,000 televisions sit unsold in retail warehouses; distributors cancel pending orders and return inventory', 'Zenith suffers a catastrophic ₹120 Cr post-festive cash write-down']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Post-festive inventory disaster. 210,000 unsold TVs flooded warehouses in January.',
              detailedAnalysis: 'Classic textbook victim of the Bullwhip Effect. When actual consumer demand proved to be only 290,000 units, distributors halted all orders in January, leaving Zenith with warehouses full of depreciating electronics.',
              metricDeltas: { plantUptime: -15.0, serviceLevel: -8.0, inventoryDays: 85, unitProductionCost: 850, airFreightSpent: 8.5 },
              competitorReaction: 'Liquidators bought up Zenith\'s excess televisions at 50% discount.',
              stakeholderFeedback: 'CFO: "We have ₹280 Cr of finished televisions sitting in cold storage that nobody is buying. Our working capital is frozen."'
            }
          },
          {
            id: 'c2-c',
            title: 'Pro-Rata Cut: Ration 40% Across Everyone Without Checking Real Sales',
            description: 'Cut every single distributor order by 40% across the board without looking at register sales data.',
            tradeOffs: {
              pros: ['Simple, lazy mechanical calculation', 'Avoids integrating software feeds'],
              cons: ['Distributors who genuinely had high demand run out of stock', 'Distributors who heavily inflated their orders still get more than they need']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Misallocated stock. Urban high-velocity stores ran out while rural stores were overstocked.',
              detailedAnalysis: 'Arbitrary pro-rata rationing fails to account for regional demand variance. High-velocity Mumbai stores stocked out, while slow-moving regions accumulated dead stock.',
              metricDeltas: { plantUptime: -2.0, serviceLevel: -14.0, inventoryDays: 20, unitProductionCost: 150, airFreightSpent: 2.1 },
              competitorReaction: 'Competitors capitalized on Zenith\'s urban stockouts.',
              stakeholderFeedback: 'Mumbai Flagship Store: "We ran out of 55-inch TVs on Dhanteras while your warehouse sent 80 units to a rural town that sells 2 TVs a month."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Week 8: The Logistics Port Congestion Crisis (Air Freight vs Ocean Freight)',
        quarterOrTimeline: 'Crisis Week 8 - Logistics Optimization',
        briefing: 'Your South Korean dual-source supplier has produced 120,000 replacement microcontrollers, but severe typhoons and port labor strikes in the South China Sea have backed up container shipping vessels by 18 days. Ocean container freight costs ₹12 Lakhs and takes 24 days. Chartered air cargo takes 48 hours but costs ₹3.8 Crore. If components don\'t arrive within 6 days, factory assembly lines will halt on the eve of the Diwali shipping rush.',
        marketIntel: {
          headline: 'Port of Singapore and Hong Kong container backlogs reach 3-week vessel delays',
          competitorMove: 'Rivals are struggling with delayed shipments stuck on container ships.',
          macroEnvironment: 'Expedited air freight trade-offs must balance the cost of freight against the gross margin contribution of the finished goods.',
          internalWhisper: 'Logistics Director: "120,000 chips assemble into ₹720 Cr of finished televisions, generating ₹115 Cr in gross margin contribution. Is paying ₹3.8 Cr for air cargo worth protecting ₹115 Cr in gross margin?"'
        },
        urgentQuestion: 'How do you optimize logistics transport modes under severe port congestion?',
        choices: [
          {
            id: 'c3-a',
            title: 'The "Split-Shipment" Optimization: Air-Freight 40,000 Chips (₹1.4 Cr) + Ocean-Freight 80,000 Chips',
            description: 'Apply inventory staging logic: charter a partial air-freight shipment of 40,000 chips (costing only ₹1.4 Cr) to provide exactly 12 days of plant production buffer, while sending the remaining 80,000 chips via standard ocean container freight (which will arrive just as the air-freight buffer completes).',
            tradeOffs: {
              pros: ['Zero factory downtime; assembly lines operate without interruption', 'Saves ₹2.4 Cr in unnecessary air cargo expenses compared to flying the entire batch'],
              cons: ['Requires managing two simultaneous customs and logistics documentation pipelines', 'Must closely track the container vessel tracking telemetry']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Logistics triumph! Assembly ran continuously at a fraction of full charter cost.',
              detailedAnalysis: 'Splitting freight modes based on Lead Time vs Production Run-Rate is standard operational excellence. Flying only the buffer volume saved ₹2.4 Cr while guaranteeing 100% factory continuity.',
              metricDeltas: { plantUptime: 1.0, serviceLevel: 1.8, inventoryDays: 14, unitProductionCost: -60, airFreightSpent: 1.4 },
              competitorReaction: 'Competitors who flew 100% of their cargo blew through their annual logistics budgets.',
              stakeholderFeedback: 'VP of Manufacturing: "The air shipment landed on Friday morning right as our last tray was emptied. The ocean containers docked two weeks later as scheduled. Perfect synchronization."',
              theorySnippet: {
                framework: 'Multimodal Logistics & Cost-to-Service Trade-Offs',
                takeaway: 'In supply chain disruptions, optimize transport mode by splitting shipments: air-freight the minimum critical buffer needed to prevent stockouts, and ocean-freight the remainder to preserve margin.'
              }
            }
          },
          {
            id: 'c3-b',
            title: 'All-In Air Cargo: Fly 100% of All 120,000 Chips via Chartered 747 (₹4.2 Cr Cost)',
            description: 'Panic and charter an entire cargo aircraft to fly all 120,000 chips, spending ₹4.2 Cr from the emergency budget.',
            tradeOffs: {
              pros: ['Fastest possible arrival of all components in one go', 'Zero risk of ocean delays'],
              cons: ['Wastes ₹2.8 Cr flying heavy pallets that won\'t be assembled for another 3 weeks anyway', 'Consumes 35% of total emergency logistics budget unnecessarily']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Expensive over-insurance. Chips arrived quickly, but sat idle in factory warehouse.',
              detailedAnalysis: 'Paying premium air freight for inventory that will sit unused on warehouse racks for 20 days is logistics waste. The unnecessary air cargo burned cash.',
              metricDeltas: { plantUptime: 0.0, serviceLevel: 0.0, inventoryDays: 28, unitProductionCost: 240, airFreightSpent: 4.2 },
              competitorReaction: 'Airlines profited from Zenith\'s panic chartering.',
              stakeholderFeedback: 'Logistics Controller: "We paid ₹4.2 Cr to fly 120,000 chips in 48 hours, and 80,000 of them sat in our warehouse for three weeks."'
            }
          },
          {
            id: 'c3-c',
            title: 'Refuse Air Freight Completely: Put 100% on the Stuck Ocean Container Ship',
            description: 'Save the ₹1.4 Cr logistics cost; put all chips on the container ship and let the factory shut down for 12 days.',
            tradeOffs: {
              pros: ['Saves ₹1.4 Cr in air freight expenses', 'Cheap ocean transportation rate'],
              cons: ['Assembly lines halt for 12 days right during peak festive shipping', 'Misses the Diwali delivery window, resulting in ₹45 Cr in canceled retail orders']
            },
            riskLevel: 'High',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Penny-wise, pound-foolish catastrophe. Saved ₹1.4 Cr in freight and lost ₹45 Cr in revenue.',
              detailedAnalysis: 'Failing to compare freight cost to lost gross contribution is a classic amateur operational error. Saving ₹1.4 Cr in freight caused a 12-day shutdown that destroyed ₹45 Cr in festive revenue.',
              metricDeltas: { plantUptime: -24.0, serviceLevel: -28.0, inventoryDays: -12, unitProductionCost: 350, airFreightSpent: 0.0 },
              competitorReaction: 'Competitors captured all festive television sales across India.',
              stakeholderFeedback: 'Board Chairman: "You saved ₹1.4 Cr on an airplane ticket and lost our company ₹45 Cr in retail sales. This is incomprehensible operational management."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Week 12: Post-Crisis Supply Chain Resiliency & The Multi-Echelon Buffer',
        quarterOrTimeline: 'Crisis Week 12 - Institutionalizing Resiliency',
        briefing: 'The festive season has concluded as a triumphant success! Zenith fulfilled 96.2% of retail orders, generated record revenue of ₹840 Cr, and kept total air freight expenses within ₹7.1 Cr. The Taiwan supplier has rebuilt its cleanroom and is back online alongside the Korean supplier. The Board now mandates a permanent "Resilient Supply Chain Constitution" to ensure Zenith is never again vulnerable to component extortion or catastrophic single-point failures.',
        marketIntel: {
          headline: 'Gartner Supply Chain Top 25: Resilient, multi-source networks outperform lean JIT single-source operators by 3.2x in shareholder return',
          competitorMove: 'Unprepared rivals are still untangling backlogs and paying off emergency broker debts.',
          macroEnvironment: 'The era of fragile, hyper-lean "Just-In-Time" is dead; the future belongs to "Just-In-Case" strategic safety stock buffering and multi-regional dual sourcing.',
          internalWhisper: 'VP of Global Operations: "What is our permanent policy for component sourcing, Economic Order Quantity (EOQ), and strategic safety stock?"'
        },
        urgentQuestion: 'What core supply chain architecture do you institutionalize across Zenith\'s global operations?',
        choices: [
          {
            id: 'c4-a',
            title: 'Enshrine the "Resilient 70/30 Dual-Sourcing Protocol" & Dynamic Multi-Echelon Safety Stock Buffer',
            description: 'Codify permanent operational policy: 1) Every single critical component must have two accredited suppliers (70% primary volume, 30% secondary volume to keep both production lines warm); 2) Maintain a dynamic 35-day safety stock calculated via statistical lead-time standard deviation ($SS = Z \\times \\sigma_{LT} \\times \\bar{D}$); 3) Formalize Point-of-Sale (POS) data integration with all tier-1 retail partners to permanently eliminate the Bullwhip Effect.',
            tradeOffs: {
              pros: ['Permanently immunizes Zenith from single-source supplier disruptions, geopolitical tariffs, or regional factory fires', 'Statistically calculated safety stock balances holding costs against 98% service level reliability'],
              cons: ['Carries slightly higher inventory holding cost than fragile ultra-lean single-source models (+12 bps of COGS)', 'Requires ongoing vendor quality audits across two supplier ecosystems']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Global supply chain benchmark! Zenith recognized by industry as a fortress of operational resilience.',
              detailedAnalysis: 'By transitioning from fragile single-source JIT to a calibrated 70/30 dual-sourcing model with statistical safety stock, you built an unassailable operational moat. Retail partners named Zenith their #1 most reliable electronics vendor in South Asia.',
              metricDeltas: { plantUptime: 1.2, serviceLevel: 3.4, inventoryDays: 16, unitProductionCost: -80, airFreightSpent: 0.0 },
              competitorReaction: 'Competitors adopted Zenith\'s 70/30 dual-sourcing blueprint as the new industry standard.',
              stakeholderFeedback: 'Group CEO & Board: "You navigated a near-fatal microchip crisis, protected our peak festive revenue, eliminated the Bullwhip effect, and built an enduring operational fortress. Promoted to Chief Operating Officer (COO)!"',
              theorySnippet: {
                framework: 'Statistical Safety Stock & Resilient Supply Network Design (Christopher & Peck)',
                takeaway: 'Resilience is not about holding excessive wasteful inventory; it is about strategic redundancy (70/30 dual sourcing) and scientific safety stock calibrated to lead-time standard deviation.'
              }
            }
          },
          {
            id: 'c4-b',
            title: 'Revert 100% to Fragile Single-Sourcing in Taiwan to Save 2% on Chip Prices',
            description: 'Cancel the Korean supplier relationship now that the crisis is over, returning 100% of orders to Taiwan to squeeze out a 2% unit price discount.',
            tradeOffs: {
              pros: ['Saves 2% on component procurement costs in normal times', 'Simpler single-vendor accounting'],
              cons: ['Leaves the company 100% vulnerable to the exact same catastrophic shutdown during the next typhoon or factory incident', 'Learns zero lessons from a near-death corporate experience']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Repeat crisis. A typhoon shut down the Taiwan plant 14 months later, catching Zenith unprepared again.',
              detailedAnalysis: 'Reverting to single-source fragility to chase a trivial 2% price concession is supply chain myopia. When the next disruption hit, Zenith was paralyzed a second time.',
              metricDeltas: { plantUptime: -18.0, serviceLevel: -22.0, inventoryDays: -15, unitProductionCost: -150, airFreightSpent: 14.5 },
              competitorReaction: 'Competitors who maintained dual-sourcing captured Zenith\'s market share.',
              stakeholderFeedback: 'Board Director: "We survived the fire by a miracle, and you put us right back in the same trap to save ₹7 on a chip. Unbelievable."'
            }
          },
          {
            id: 'c4-c',
            title: 'Extreme Hoarding: Store 18 Months of Finished Televisions and Components in Tents',
            description: 'Over-react by ordering 18 months of inventory, renting outdoor tents and airport hangars to hoard millions of chips and televisions.',
            tradeOffs: {
              pros: ['Guaranteed to never run out of chips for 18 months', 'Extreme paranoia satisfaction'],
              cons: ['Consumer electronics depreciate by 2% per month; chips become obsolete when 8K and Wi-Fi 7 standards launch', 'Massive inventory carrying costs and physical damage/spoilage in non-climate-controlled storage']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Obsolescence catastrophe. Stored components depreciated and were damaged by humidity.',
              detailedAnalysis: 'Hoarding electronics inventory is financial suicide. When new Wi-Fi 7 chip standards launched, Zenith had to write off ₹140 Cr of obsolete chips gathering dust in rented hangars.',
              metricDeltas: { plantUptime: -5.0, serviceLevel: -4.0, inventoryDays: 320, unitProductionCost: 1850, airFreightSpent: 0.0 },
              competitorReaction: 'Competitors launched faster, sleeker Wi-Fi 7 smart TVs while Zenith was stuck selling obsolete models.',
              stakeholderFeedback: 'CFO: "We spent ₹140 Cr hoarding old chips that are now obsolete. Moisture ruined 15% of the inventory. A total operational disaster."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You led Zenith Electronics through a catastrophic supply chain crisis, keeping assembly plants running at 99.2% uptime while competitors shut down. When a fire wiped out your single-source Taiwan chip supplier, you deployed a hybrid bridge strategy (buying 10 days of broker chips to maintain operations while fast-tracking an accredited Korean dual-source supplier). When distributors panicked and inflated festive orders by 80%, you neutralized the Bullwhip Effect by anchoring manufacturing on Point-of-Sale (POS) cash register scan data. You resolved port congestion through split-shipment logistics (air-freighting the critical buffer and ocean-freighting the remainder), saving ₹2.4 Cr in freight. Finally, you codified a permanent 70/30 dual-sourcing protocol with statistical safety stock buffering.',
      whyItHappened: 'Modern global supply chains have become dangerously fragile due to dogmatic pursuit of hyper-lean "Just-In-Time" (JIT) single-sourcing. When a disruption strikes, companies without redundancy face a binary choice between catastrophic downtime or extortionate spot-market prices. Furthermore, demand distortion (the Bullwhip Effect) causes panicking distributors to amplify orders, tricking manufacturers into building massive post-crisis inventory gluts. You succeeded because you balanced resilience and cost: using minimum bridge inventory, relying on real-time Point-of-Sale transparency, optimizing logistics modes based on production run-rates, and institutionalizing dual-sourcing.',
      conceptsApplied: [
        {
          name: 'The Bullwhip Effect in Supply Chains (Forrester & Lee)',
          formulaOrModel: 'Variance(Orders) > Variance(Demand) as orders move upstream',
          explanation: 'Distributor shortage gaming caused orders to spike from 280,000 to 500,000 units. Bypassing distorted purchase orders and anchoring production strictly on retail Point-of-Sale (POS) register scans prevented a catastrophic ₹120 Cr post-Diwali inventory write-down.',
          keyTakeaway: 'In a supply disruption, never trust purchase order sheets; look at actual consumer cash register velocity.'
        },
        {
          name: 'Statistical Safety Stock & Service Level (Z-score)',
          formulaOrModel: 'Safety Stock = Z \\times \\sqrt{L \\times \\sigma_D^2 + D^2 \\times \\sigma_L^2}',
          explanation: 'Safety stock is not a static guess; it is mathematically calibrated to lead-time variance ($\\sigma_L$) and demand variance ($\\sigma_D$). A 95% service level requires $Z = 1.65$, balancing stockout penalties against inventory holding costs.',
          keyTakeaway: 'Holding inventory is expensive; holding the WRONG inventory is fatal. Calculate safety stock using lead-time standard deviation.'
        },
        {
          name: 'Multimodal Transport & Lead-Time Splitting',
          formulaOrModel: 'Total Logistics Cost = Freight Cost + In-Transit Holding Cost + Stockout Downtime Cost',
          explanation: 'Comparing air freight (₹3.8 Cr) vs ocean freight (₹12 Lakhs) is incomplete without factoring in the ₹4.2 Cr plant downtime penalty and ₹115 Cr gross margin contribution. Splitting the shipment captured the speed benefit of air cargo while preserving ocean freight savings.',
          keyTakeaway: 'Logistics optimization is about synchronizing transport modes to match consumption rates, not picking the single cheapest shipping rate.'
        }
      ],
      expertExecutivePerspective: 'A Senior Partner in McKinsey\'s Global Supply Chain & Operations Practice would assess: "The bridge strategy in Round 1 was flawless operations management. Amateurs do one of two things: they either refuse to buy broker chips on principle and let the factory shut down for 3 weeks (losing ₹45 Cr in retail revenue), or they panic and buy 300,000 chips at 4x price, destroying their annual profit. Buying exactly 10 days of broker stock to keep the line moving while expediting Korean firmware validation showed total mastery of operational trade-offs."',
      alternativePaths: [
        {
          choiceTitle: 'Buying All 300,000 Broker Chips (Round 1)',
          counterfactualConsequence: 'Paying a 400% markup on 300,000 chips would have incurred a ₹43.5 Cr cost penalty, wiping out annual company operating profits and leaving the balance sheet drained of working capital.'
        },
        {
          choiceTitle: 'Fulfilling All 500,000 Inflated Distributor Orders (Round 2)',
          counterfactualConsequence: 'Falling victim to the Bullwhip Effect would have left Zenith with 210,000 unsold televisions in January. Distributors would have canceled orders, and Zenith would have suffered a devastating ₹120 Cr inventory write-down.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Toyota Supply Chain Resiliency (Post-Fukushima "Rescue" Database)',
          caseStudySummary: 'After the 2011 tsunami paralyzed auto production, Toyota built the "Rescue" database mapping 400,000 supplier parts down to Tier-4 raw material providers, requiring critical semiconductors to have 4 to 6 months of strategic safety stock, allowing Toyota to navigate the 2021 global chip shortage far better than global rivals.'
        },
        {
          company: 'Apple Dual-Sourcing Strategy (Tim Cook Operations Mastery)',
          caseStudySummary: 'Tim Cook established Apple\'s legendary operational resilience by never relying on a single vendor for critical components: pitting Qualcomm against Intel/Broadcom, and Samsung against TSMC/LG, ensuring guaranteed capacity, price competition, and zero single-point failure vulnerability.'
        }
      ]
    }
  },
  {
    id: 'ops-optimize-factory',
    subjectId: 'operations',
    conceptId: 'theory-of-constraints',
    relatedConcepts: ['Little\'s Law (WIP = TH x CT)', 'Six Sigma DMAIC & Defect Reduction', 'Overall Equipment Effectiveness (OEE)', 'Line Balancing & Lean Kaizen'],
    title: 'Optimize a Manufacturing Facility: AeroTech Precision Castings',
    tagline: 'Apply the Theory of Constraints (Goldratt), balance production lines with Little\'s Law, and eliminate scrap rates using Six Sigma.',
    role: 'Vice President of Manufacturing & Operational Excellence, AeroTech Castings',
    company: 'AeroTech Precision Castings Ltd.',
    industry: 'Advanced Aerospace & Defense / Investment Casting & Machining',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'AeroTech operates a 250,000 sq ft specialized investment casting foundry in Hyderabad, manufacturing titanium turbine blades and jet engine structural casings for Boeing, Airbus, and GE Aviation.',
      industryContext: 'Aerospace casting has zero tolerance for metallurgical defects. Turbine blades must withstand 1,600°C temperatures and 15,000 RPM centrifugal forces. Scrap rates directly dictate factory profitability.',
      currentSituation: 'The plant is in operational distress. Monthly factory throughput is bottlenecked at 1,450 turbine blades against customer demand of 2,200 blades. Work-In-Progress (WIP) inventory has swelled to 4,800 unfinished blades cluttering the factory floor, driving average cycle time to 42 days. Scrap rates have spiked to 14.2%, and Overall Equipment Effectiveness (OEE) has fallen to 56%.'
    },
    objectives: [
      'Increase finished turbine blade throughput from 1,450 to at least 2,150 blades per month without exceeding CapEx budget.',
      'Slash Work-In-Progress (WIP) cycle time from 42 days to under 18 days using Little\'s Law.',
      'Reduce metallurgical scrap defect rate from 14.2% to below 3.5% using Six Sigma DMAIC.'
    ],
    constraints: [
      'Total operational improvement budget strictly capped at ₹8.0 Crore.',
      'Cannot compromise AS9100D aerospace quality certification standards.',
      'Factory footprint cannot be physically expanded; must optimize within existing floor space.'
    ],
    initialMetrics: [
      { key: 'monthlyThroughput', label: 'Monthly Blade Throughput', value: 1450, unit: 'blades/mo', isGoodWhenHigh: true, benchmark: 2200, description: 'Finished inspection-cleared turbine blades shipped monthly' },
      { key: 'cycleTime', label: 'Manufacturing Cycle Time', value: 42, unit: 'days', isGoodWhenHigh: false, benchmark: 16, description: 'Days required for raw titanium ingot to become finished shipped blade' },
      { key: 'scrapRate', label: 'Scrap & Defect Rate', value: 14.2, unit: '%', isGoodWhenHigh: false, benchmark: 3.5, description: 'Percentage of cast blades rejected due to metallurgical porosity defects' },
      { key: 'oee', label: 'Overall Equipment Effectiveness (OEE)', value: 56.4, unit: '%', isGoodWhenHigh: true, benchmark: 82.0, description: 'Composite availability x performance x quality score of plant machinery' },
      { key: 'wipInventory', label: 'Work-In-Progress (WIP) Units', value: 4800, unit: 'blades', isGoodWhenHigh: false, benchmark: 1200, description: 'Unfinished blades sitting between manufacturing stations' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Phase 1: Theory of Constraints (Goldratt) & Bottleneck Identification',
        quarterOrTimeline: 'Sprint 1 - The Five Focusing Steps',
        briefing: 'You conduct a full plant value-stream mapping. The factory has 5 sequential stations:\n\n1. Wax Pattern Molding: Capacity = 2,800 blades/month\n2. Ceramic Shell Dipping: Capacity = 2,600 blades/month\n3. Vacuum Induction Melting (VIM) Furnace: Capacity = 1,480 blades/month (THE BOTTLENECK!)\n4. 5-Axis CNC Machining: Capacity = 2,400 blades/month\n5. X-Ray & Ultrasonic NDT Inspection: Capacity = 2,500 blades/month\n\nThe previous plant manager spent ₹6 Cr buying two extra 5-Axis CNC machines, yet factory throughput did not increase by a single blade! Stations 1 and 2 are pushing 2,700 blades into the factory, piling up mountains of WIP in front of the VIM Furnace.',
        marketIntel: {
          headline: 'Goldratt\'s Theory of Constraints: An hour lost at the bottleneck is an hour lost for the entire system',
          competitorMove: 'Leading foundries use the Drum-Buffer-Rope (DBR) scheduling methodology to subordinate non-bottlenecks.',
          macroEnvironment: 'Investing capital in non-bottleneck stations increases WIP inventory without adding a single dollar of throughput.',
          internalWhisper: 'Foundry Foreman: "The VIM furnace is turned off for 3.5 hours every day during shift changeover and manual crucible re-lining."'
        },
        urgentQuestion: 'Applying Goldratt\'s Five Focusing Steps, how do you optimize the VIM Furnace constraint?',
        choices: [
          {
            id: 'o1-a',
            title: 'Exploit & Subordinate: Implement Hot Shift Handover + Drum-Buffer-Rope Pull Scheduling',
            description: 'Apply Goldratt\'s Step 2 (Exploit) and Step 3 (Subordinate): 1) Eliminate the 3.5-hour downtime on the VIM furnace through "Hot Shift Handovers" and pre-heated quick-swap ceramic crucibles, keeping the furnace melting 24/7 (unlocking 620 blades/mo capacity); 2) Subordinate Stations 1 & 2: stop pushing 2,800 wax patterns; choke upstream release to match the furnace speed (Drum-Buffer-Rope), eliminating WIP clutter.',
            tradeOffs: {
              pros: ['Increases true plant throughput immediately to 2,100 blades/mo with near-zero CapEx (costing only ₹65 Lakhs for quick-swap tooling)', 'Instantly stops WIP accumulation in front of the furnace, dropping cycle time dramatically'],
              cons: ['Workers at Stations 1 & 2 will complain about sitting idle when their wax molds are capped', 'Requires strict operational discipline to prevent non-bottlenecks from overproducing']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Bottleneck exploited! Monthly throughput surged to 2,080 blades, and WIP dropped by 45%.',
              detailedAnalysis: 'According to the Theory of Constraints, maximizing throughput requires keeping the bottleneck operating at 100% capacity while subordinating all non-bottlenecks. Eliminating shift-change furnace downtime unlocked massive output without buying expensive new machinery.',
              metricDeltas: { monthlyThroughput: 630, cycleTime: -16, scrapRate: -1.2, oee: 16.2, wipInventory: -2100 },
              competitorReaction: 'Competitors were stunned as AeroTech shipped 600 extra turbine blades without expanding factory square footage.',
              stakeholderFeedback: 'Boeing Supplier Director: "AeroTech\'s delivery backlog cleared up in 30 days! Your Hyderabad plant is now our fastest-improving supplier."',
              theorySnippet: {
                framework: 'Goldratt\'s Theory of Constraints (Five Focusing Steps)',
                takeaway: '1. Identify the constraint; 2. Exploit it (never let it sit idle); 3. Subordinate everything else to it; 4. Elevate the constraint; 5. Prevent inertia. An hour saved at a non-bottleneck is a mirage.'
              }
            }
          },
          {
            id: 'o1-b',
            title: 'Buy More 5-Axis CNC Machines for Station 4 (₹7.5 Cr CapEx)',
            description: 'Spend your entire ₹7.5 Cr budget buying two more ultra-expensive German 5-Axis CNC machines for Station 4.',
            tradeOffs: {
              pros: ['Station 4 can machine 3,500 blades/month', 'Looks impressive when visitors tour the factory'],
              cons: ['Total factory output remains capped at 1,480 blades by the VIM furnace (zero incremental throughput!)', 'Consumes 95% of available capital budget with zero return on investment']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Zero throughput increase. The new CNC machines sat idle waiting for the furnace.',
              detailedAnalysis: 'Classic violation of the Theory of Constraints. Elevating a non-bottleneck does zero to improve total system throughput. The new machines sat cold because the furnace could only melt 1,480 blades.',
              metricDeltas: { monthlyThroughput: 0, cycleTime: 2, scrapRate: 0.0, oee: -8.5, wipInventory: 400 },
              competitorReaction: 'Machinery vendors celebrated, but AeroTech\'s cash was drained.',
              stakeholderFeedback: 'CFO: "We spent ₹7.5 Cr on shiny CNC machines, and our shipped blades per month didn\'t increase by a single unit. Total capital waste."'
            }
          },
          {
            id: 'o1-c',
            title: 'Force Upstream Stations 1 & 2 to Produce at 100% Maximum Speed 24/7',
            description: 'Order Stations 1 and 2 to produce 3,200 wax patterns and ceramic shells a month to "keep workers busy and maximize machine utilization."',
            tradeOffs: {
              pros: ['High individual station efficiency metrics on paper', 'Workers are visibly moving all day long'],
              cons: ['Massive mountain of 6,500 unfinished blades piles up on the floor, clogging aisles and getting damaged', 'Manufacturing cycle time balloons from 42 days to 65 days (Little\'s Law disaster)']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Factory floor gridlock. WIP inventory choked the aisles, and cycle time hit 68 days.',
              detailedAnalysis: 'Confusing local efficiency with system throughput is the fatal trap of traditional manufacturing. Overproducing upstream components creates inventory paralysis, damages parts, and lengthens cycle times.',
              metricDeltas: { monthlyThroughput: -50, cycleTime: 24, scrapRate: 3.5, oee: -6.0, wipInventory: 2200 },
              competitorReaction: 'Competitors watched AeroTech drown in its own work-in-progress inventory.',
              stakeholderFeedback: 'Safety Inspector: "The factory floor is an obstacle course of pallet racks. Forklifts cannot navigate without damaging blades."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Phase 2: Applying Little\'s Law to Slash Manufacturing Cycle Time',
        quarterOrTimeline: 'Sprint 2 - Little\'s Law & Lean WIP Capping',
        briefing: 'You examine cycle time through Little\'s Law:\n\n$$\\text{Work-In-Progress (WIP)} = \\text{Throughput (TH)} \\times \\text{Cycle Time (CT)}$$\n$$\\text{Cycle Time} = \\frac{\\text{WIP}}{\\text{Throughput}}$$\n\nAt 2,100 blades/month (70 blades/day), having 2,700 blades of WIP on the floor mathematically forces an average cycle time of $2,700 / 70 = 38.5$ days. Titanium sits idle in bins 92% of the time, accumulating micro-corrosion and handling scratches. Customer delivery contracts require an 18-day lead time.',
        marketIntel: {
          headline: 'Lean manufacturing revolution: How capping WIP cuts lead time without lowering output',
          competitorMove: 'Toyota and Pratt & Whitney enforce strict physical Kanban squares where upstream machines cannot produce if the square is full.',
          macroEnvironment: 'Reducing WIP frees up working capital and creates an immediate feedback loop: defects are detected in 2 days instead of 40 days.',
          internalWhisper: 'Quality Manager: "When WIP is 40 days, a casting defect made on Day 1 isn\'t discovered at X-Ray inspection until Day 40, meaning 40 days of defective blades were cast before anyone noticed!"'
        },
        urgentQuestion: 'How do you apply Little\'s Law to slash cycle time from 38 days to under 18 days?',
        choices: [
          {
            id: 'o2-a',
            title: 'Enforce Physical CONWIP (Constant WIP) Capping & 5S Lean Visual Management',
            description: 'Cap total plant WIP at exactly 1,200 blades (representing 17 days of throughput). Paint strict physical floor squares (Kanban): if a square is full, the upstream machine MUST stop casting and operators cross-train on preventative maintenance. Clear out excess WIP clutter through a 5S visual factory overhaul.',
            tradeOffs: {
              pros: ['Directly cuts cycle time from 38 days to 17.1 days via Little\'s Law ($1,200 / 70 = 17.1$ days)', 'Defect feedback loop shrinks from 38 days to 48 hours, enabling instant quality corrections'],
              cons: ['Machine operators will initially feel uncomfortable when machines are paused', 'Requires intensive change management and operator cross-training']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Cycle time collapsed to 16.8 days! Working capital freed up by ₹18.5 Crore.',
              detailedAnalysis: 'Applying Little\'s Law ($CT = WIP / TH$) proves that lead time is directly proportional to WIP. By strictly capping WIP at 1,200 units, blades flowed smoothly through the plant like water through a pipe, rather than sitting in stagnant holding reservoirs.',
              metricDeltas: { monthlyThroughput: 90, cycleTime: -21, scrapRate: -3.8, oee: 8.4, wipInventory: -1500 },
              competitorReaction: 'Airbus and GE Aviation transferred expedited orders to AeroTech due to 18-day turnaround.',
              stakeholderFeedback: 'Production Supervisor: "Our plant looks like a modern surgical hospital. No pallets blocking aisles, and parts move from wax to X-ray in two weeks!"',
              theorySnippet: {
                framework: 'Little\'s Law (WIP = Throughput x Cycle Time)',
                takeaway: 'To cut manufacturing lead time without sacrificing output, you MUST reduce Work-In-Progress inventory. Capping WIP shrinks cycle times and reveals quality defects immediately.'
              }
            }
          },
          {
            id: 'o2-b',
            title: 'Double the WIP: Build Giant Storage Racks to Store 8,000 Unfinished Blades',
            description: 'Spend ₹2.2 Cr building high-density warehouse racking to hold 8,000 WIP blades so that machines "always have raw parts to work on."',
            tradeOffs: {
              pros: ['Machines will never starve for parts even during major supplier delays', 'Lots of visible inventory everywhere'],
              cons: ['Cycle time mathematically explodes to $8,000 / 70 = 114$ days (nearly 4 months!)', 'Defects made today won\'t be discovered for 4 months, locking in multi-crore scrap liabilities']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Operational disaster. Cycle time blew out to 110 days, and holding costs soared.',
              detailedAnalysis: 'Disastrous violation of Little\'s Law. Flooding the plant with WIP stretched lead times to nearly 4 months. Customer orders were delayed, and holding costs consumed cash.',
              metricDeltas: { monthlyThroughput: -120, cycleTime: 45, scrapRate: 4.2, oee: -12.0, wipInventory: 4500 },
              competitorReaction: 'GE Aviation penalized AeroTech for chronic delivery delays.',
              stakeholderFeedback: 'Quality Inspector: "We just discovered that a ceramic core supplier had cracked molds 3 months ago. We have 3,000 scrapped blades sitting in the new racks."'
            }
          },
          {
            id: 'o2-c',
            title: 'Speed Up the Machines Beyond Manufacturer Spec by 35%',
            description: 'Override machine software limits and run the VIM furnace and CNC spindles at 135% rated speed.',
            tradeOffs: {
              pros: ['Slightly faster cycle time on paper for the first 48 hours', 'Appears aggressive and bold'],
              cons: ['Causes catastrophic thermal tool breakage, catastrophic spindle motor burnouts, and metallurgical stress cracking', 'Guarantees plant-wide machine breakdown within 7 days']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Machine burnout catastrophe. Two CNC spindles seized, halting Station 4 for two weeks.',
              detailedAnalysis: 'Over-speeding precision aerospace equipment violates engineering physics. Spindle bearings overheated and seized, causing ₹3.2 Cr in emergency repair bills.',
              metricDeltas: { monthlyThroughput: -450, cycleTime: 18, scrapRate: 8.5, oee: -25.0, wipInventory: 800 },
              competitorReaction: 'Competitors watched AeroTech self-destruct from reckless operating practices.',
              stakeholderFeedback: 'Maintenance Lead: "Both German CNC spindles burned out because they were run beyond thermal limits. The factory is down for 14 days waiting for replacement motors."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Phase 3: Six Sigma DMAIC & Root-Cause Elimination of Metallurgical Porosity',
        quarterOrTimeline: 'Sprint 3 - Defect Reduction & Statistical Process Control',
        briefing: 'Throughput is up and cycle time is down to 17 days, but your scrap rate remains painfully high at 9.2% (costing ₹1.8 Cr/month in wasted titanium and vacuum energy). Ultrasonic testing shows that 82% of all rejections are caused by "Micro-Porosity Gas Bubbles" inside the single-crystal blade root. The previous management blamed "bad titanium ingots." Your Six Sigma Black Belt team uses DMAIC (Define, Measure, Analyze, Improve, Control) to investigate.',
        marketIntel: {
          headline: 'Aerospace quality standards: Defect rates above 3% eliminate suppliers from next-generation jet engine contracts',
          competitorMove: 'Leading aerospace casting foundries utilize vacuum degasification and Design of Experiments (DOE) to eliminate porosity.',
          macroEnvironment: 'Metallurgical porosity is governed by vacuum chamber pressure, pour temperature, and ceramic mold pre-heat temperature.',
          internalWhisper: 'Senior Metallurgist: "We ran a Taguchi Design of Experiments (DOE). The porosity isn\'t in the raw titanium; it is caused by ceramic shell mold moisture and a 15°C pour temperature variance during manual ladle pouring."'
        },
        urgentQuestion: 'Which Six Sigma DMAIC intervention do you deploy to collapse scrap rates below 3.5%?',
        choices: [
          {
            id: 'o3-a',
            title: 'Deploy Automated Robotic Pouring + Controlled Ceramic De-Humidification (₹2.8 Cr)',
            description: 'Implement the DOE findings: 1) Install automated vacuum robotic pouring arms with laser pyrometer feedback to maintain pour temperature within a precise $\\pm 2^\\circ\\text{C}$ window; 2) Add a closed-loop ceramic shell vacuum de-humidification drying chamber (eliminating mold moisture); 3) Enforce real-time Statistical Process Control (SPC) X-bar and R charts on the shop floor.',
            tradeOffs: {
              pros: ['Eliminates the empirical root cause of micro-porosity defects identified by the Six Sigma investigation', 'Slashes scrap rate from 9.2% to 2.4% (saving ₹1.4 Cr in scrap waste every single month, achieving payback in 2 months!)'],
              cons: ['Requires ₹2.8 Cr CapEx allocation from operational budget', 'Requires retraining furnace operators on robotic arm calibration']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Six Sigma triumph! Metallurgical scrap defect rate plummeted from 9.2% to 2.1%.',
              detailedAnalysis: 'Applying Six Sigma DMAIC and Design of Experiments (DOE) separates factual physics from superstitious shop floor folklore. Stabilizing pour temperature and eliminating mold moisture cured the micro-porosity, saving ₹16.8 Cr annually in scrap.',
              metricDeltas: { monthlyThroughput: 140, cycleTime: -2, scrapRate: -7.1, oee: 12.8, wipInventory: -200 },
              competitorReaction: 'AeroTech achieved the lowest scrap rate in GE Aviation\'s global supplier network.',
              stakeholderFeedback: 'GE Aviation Chief Metallurgist: "AeroTech\'s micro-porosity rate dropped below 2.5%, and your X-bar control charts show Cpk > 1.67. Approved for the Leap-1B commercial jet engine program!"',
              theorySnippet: {
                framework: 'Six Sigma DMAIC & Design of Experiments (DOE)',
                takeaway: 'Do not guess at root causes. Use Taguchi Design of Experiments (DOE) to isolate critical process parameters (pour temperature and mold moisture) and lock them down with Statistical Process Control (SPC).'
              }
            }
          },
          {
            id: 'o3-b',
            title: 'Switch Raw Titanium Ingot Suppliers to an Expensive US Source (+35% Cost)',
            description: 'Fire your current certified Indian titanium ingot supplier and buy imported US ingots at a 35% cost premium, believing that "expensive metal" will fix the porosity.',
            tradeOffs: {
              pros: ['Pleases clients who like imported material stamps on paper', 'Avoids having to re-engineer the internal casting process'],
              cons: ['Does zero to fix the porosity (which was caused by mold moisture and pour temperature, not the metal!)', 'Adds ₹4,200 to the manufacturing cost of every single turbine blade']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Expensive failure. The expensive US metal still had micro-porosity defects.',
              detailedAnalysis: 'Blaming raw material without statistical root-cause verification is classic operational ignorance. The imported titanium was poured into the same moist molds at fluctuating temperatures, producing the exact same 9% defect rate at higher cost.',
              metricDeltas: { monthlyThroughput: 0, cycleTime: 0, scrapRate: -0.4, oee: 0.0, wipInventory: 0 },
              competitorReaction: 'Competitors laughed as AeroTech\'s profit margins collapsed under expensive raw metal costs.',
              stakeholderFeedback: 'Plant Metallurgist: "We bought $2M of expensive titanium from Ohio, and the X-ray still showed bubbles. The problem was our mold moisture all along."'
            }
          },
          {
            id: 'o3-c',
            title: 'Lower Quality Inspection Standards: Pass Porous Blades to Customers and Hope They Don\'t Fail',
            description: 'Instruct X-ray inspectors to loosen the calibration sensitivity and pass blades with minor micro-porosity to meet monthly shipping quotas.',
            tradeOffs: {
              pros: ['Instantly makes scrap rate look low on monthly reports (2%)', 'Meets immediate shipping quota this week'],
              cons: ['Blatant criminal violation of aviation safety laws; risk of turbine blade snapping mid-flight in a commercial airliner', 'Guarantees permanent decertification, multi-million dollar lawsuits, and criminal prosecution when detected']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Catastrophic quality audit failure. Boeing and Airbus decertified the facility immediately.',
              detailedAnalysis: 'Faking quality inspections in safety-critical industries is fatal. Boeing QA auditors detected the recalibrated X-ray sensitivity during a routine audit, halting all shipments.',
              metricDeltas: { monthlyThroughput: -1200, cycleTime: 30, scrapRate: 25.0, oee: -35.0, wipInventory: 1500 },
              competitorReaction: 'Competitors absorbed 100% of AeroTech\'s aerospace contracts.',
              stakeholderFeedback: 'Directorate General of Civil Aviation (DGCA): "AeroTech has intentionally altered non-destructive testing thresholds. Production is frozen and a criminal safety investigation has been opened."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Phase 4: World-Class Manufacturing (WCM) & Overall Equipment Effectiveness (OEE)',
        quarterOrTimeline: 'Sprint 4 - Autonomous Maintenance & World-Class OEE',
        briefing: 'One year after initiating the operational overhaul, AeroTech has delivered an extraordinary turnaround. Monthly throughput has reached 2,220 blades (exceeding customer demand!), cycle time is down to 15.6 days, and scrap rate is at an elite 2.1%. The final frontier is machine reliability: your vacuum pumps and CNC machines suffer from unplanned micro-stoppages. You must elevate Overall Equipment Effectiveness (OEE = Availability x Performance x Quality) from 72% to world-class benchmark (>85%).',
        marketIntel: {
          headline: 'Total Productive Maintenance (TPM) & OEE: World-class manufacturing benchmark is 85%+',
          competitorMove: 'Leading Japanese and German aerospace plants implement Total Productive Maintenance (TPM) Autonomous Maintenance.',
          macroEnvironment: 'Unplanned downtime is 4x more expensive than planned preventative maintenance.',
          internalWhisper: 'Maintenance Supervisor: "Currently, operators run machines until they break, then call maintenance. We need operators to take daily ownership of cleaning, lubrication, and sensor inspection (TPM Autonomous Maintenance)."'
        },
        urgentQuestion: 'How do you elevate plant OEE above the 85% World-Class Manufacturing benchmark?',
        choices: [
          {
            id: 'o4-a',
            title: 'Deploy Total Productive Maintenance (TPM) Autonomous Operator Maintenance + IoT Vibration Telemetry',
            description: 'Implement JIPM Total Productive Maintenance (TPM): train machine operators to perform daily autonomous lubrication, cleaning, and bolt-tightening checks (eliminating 80% of micro-stoppages). Equip high-wear VIM furnace vacuum pumps and CNC spindles with wireless IoT vibration and acoustic anomaly sensors for predictive maintenance before mechanical failure occurs.',
            tradeOffs: {
              pros: ['Elevates plant OEE to a world-class 86.4% through predictive failure prevention', 'Eliminates unexpected equipment breakdowns, cementing factory throughput at 2,250 blades/mo permanently'],
              cons: ['Requires allocating 20 minutes at the start of every shift for operator cleaning and inspections', 'Costs ₹1.4 Cr for IoT vibration sensors and telemetry dashboards']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'World-Class Manufacturing status achieved! OEE crossed 86.8%, and unplanned downtime dropped to 1.2%.',
              detailedAnalysis: 'Transforming machine operators into first-line maintenance stewards (TPM Autonomous Maintenance) combined with IoT predictive vibration sensors eliminates the Six Big Losses of manufacturing. AeroTech achieved the highest OEE in South Asian aerospace manufacturing.',
              metricDeltas: { monthlyThroughput: 80, cycleTime: -1.2, scrapRate: -0.3, oee: 14.6, wipInventory: -100 },
              competitorReaction: 'Airbus and Boeing awarded AeroTech "Global Aerospace Supplier of the Year".',
              stakeholderFeedback: 'Boeing Chief Operating Officer: "AeroTech has achieved World-Class Manufacturing status. Your OEE, 15-day cycle time, and 2.1% scrap rate match the best foundries in Munich and Tokyo. We are awarding you a $120M 5-year turbine blade contract!"',
              theorySnippet: {
                framework: 'Overall Equipment Effectiveness (OEE = Availability x Performance x Quality) & Total Productive Maintenance (TPM)',
                takeaway: 'World-Class OEE (>85%) is achieved not by buying newer machines, but by eliminating the Six Big Losses through Total Productive Maintenance and operator empowerment.'
              }
            }
          },
          {
            id: 'o4-b',
            title: 'Run-to-Failure Strategy: Abolish Maintenance and Run Machines 24/7 Until They Smoke',
            description: 'Cancel all scheduled maintenance shutdowns to keep machines cutting metal 24/7, fixing machines only when they catch fire or seize.',
            tradeOffs: {
              pros: ['Zero scheduled downtime on paper today', 'Immediate short-term production bump this week'],
              cons: ['Guarantees catastrophic catastrophic machine seizures that require 3 weeks to repair', 'Multiplies unpredicted downtime by 5x over the year']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Mechanical breakdown disaster. The main vacuum furnace chamber cracked.',
              detailedAnalysis: 'Run-to-failure in precision vacuum casting is operational insanity. A seized hydraulic seal cracked the VIM furnace chamber, costing ₹4.5 Cr in repairs and halting the plant for 3 weeks.',
              metricDeltas: { monthlyThroughput: -650, cycleTime: 22, scrapRate: 6.5, oee: -28.0, wipInventory: 1200 },
              competitorReaction: 'Competitors picked up AeroTech\'s delayed orders.',
              stakeholderFeedback: 'Plant Engineer: "The vacuum pump burned out because nobody changed the oil for 6 months. We are down for 20 days."'
            }
          },
          {
            id: 'o4-c',
            title: 'Outsource Maintenance to the Lowest-Bidding Local Handyman Contractor',
            description: 'Fire the internal engineering maintenance team and hire cheap local unskilled contractors to fix aerospace machines with generic auto parts.',
            tradeOffs: {
              pros: ['Saves ₹40 Lakhs in internal maintenance technician salaries', 'Simple contract structure'],
              cons: ['Unskilled contractors lack precision aerospace training; install improper seals and calibration offsets', 'Causes erratic machine tolerance deviations that ruin precision casting']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Quality tolerance failure. Unskilled contractors miscalibrated the vacuum pressure sensors.',
              detailedAnalysis: 'Using cheap generic contractors to service multi-million-dollar aerospace vacuum systems destroys machine capability. Machine tolerance deviations caused scrap rates to double.',
              metricDeltas: { monthlyThroughput: -250, cycleTime: 8, scrapRate: 5.5, oee: -14.0, wipInventory: 400 },
              competitorReaction: 'Competitors highlighted AeroTech\'s tolerance inconsistencies.',
              stakeholderFeedback: 'Aerospace Auditor: "Your maintenance contractor used generic automotive hydraulic oil in a vacuum aerospace furnace. This violates aerospace specifications."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You executed an extraordinary manufacturing turnaround at AeroTech Precision Castings, taking an underperforming aerospace foundry from chronic delivery backlogs to World-Class Manufacturing (WCM) excellence. By applying Goldratt\'s Theory of Constraints to exploit the VIM furnace bottleneck (hot shift handovers + quick-swap crucibles) and subordinating upstream stations (Drum-Buffer-Rope), you expanded finished blade throughput from 1,450 to 2,250 blades/month with near-zero CapEx. By enforcing Little\'s Law to cap Work-In-Progress (WIP) at 1,200 units, you collapsed cycle time from 42 days to 15.6 days. Through Six Sigma DMAIC and Design of Experiments (DOE), you isolated the root causes of micro-porosity (mold moisture and pour temperature variance), collapsing scrap defect rates from 14.2% to 2.1%. Finally, you instituted Total Productive Maintenance (TPM) and IoT predictive telemetry to drive Overall Equipment Effectiveness (OEE) past 86.8%, securing a $120M multi-year contract from Boeing.',
      whyItHappened: 'Factory performance is governed by immutable operational laws: Eliyahu Goldratt\'s Theory of Constraints, John Little\'s Law of Work-In-Progress, and Walter Shewhart & W. Edwards Deming\'s Statistical Process Control. Inexperienced plant managers chase local efficiencies (buying machines for non-bottlenecks, running upstream stations at full speed to keep workers busy, blaming raw material for defects), inadvertently flooding the factory with mountains of WIP, creating gridlock, stretching lead times, and burying quality defects for weeks. Mastery requires systems thinking: focusing on the single constraint, pulling inventory based on demand, eliminating process variance through empirical experiments, and treating equipment maintenance as a frontline operator culture.',
      conceptsApplied: [
        {
          name: 'Eliyahu Goldratt\'s Theory of Constraints (TOC)',
          formulaOrModel: 'Throughput is strictly limited by the single slowest bottleneck (Constraint)',
          explanation: 'Buying CNC machines when the VIM furnace was the bottleneck produced zero incremental throughput. Eliminating 3.5 hours of furnace downtime through hot handovers unlocked 620 blades/month immediately. Subordinating upstream stations prevented WIP mountains from clogging the plant.',
          keyTakeaway: 'An hour saved at a non-bottleneck is an illusion; an hour gained at the constraint increases throughput for the entire enterprise.'
        },
        {
          name: 'Little\'s Law & Lead Time Compression',
          formulaOrModel: 'WIP = Throughput x Cycle Time \\implies \\text{Cycle Time} = \\frac{\\text{WIP}}{\\text{Throughput}}',
          explanation: 'Capping WIP at 1,200 units mathematically forced cycle time down from 42 days to 16.8 days. Fast cycle times shrank the defect feedback loop from 38 days to 48 hours, enabling instantaneous quality corrections.',
          keyTakeaway: 'You cannot reduce lead times without capping Work-In-Progress inventory. Less inventory equals faster flow and higher quality.'
        },
        {
          name: 'Overall Equipment Effectiveness (OEE) & Total Productive Maintenance',
          formulaOrModel: 'OEE = \\text{Availability} \\times \\text{Performance} \\times \\text{Quality} \\ge 85\\%',
          explanation: 'OEE measures how effectively machinery is utilized. Through TPM Autonomous Maintenance and IoT predictive vibration sensors, micro-stoppages were eliminated, driving OEE from 56% to 86.8% and unlocking maximum plant capacity.',
          keyTakeaway: 'World-Class Manufacturing is built on operator equipment stewardship and continuous variance reduction.'
        }
      ],
      expertExecutivePerspective: 'A Vice President of Operations at Pratt & Whitney or Rolls-Royce Aerospace would conclude: "Phase 1 and Phase 3 were textbook operations science. In aerospace casting, the instinct of every traditional factory manager is to demand ₹20 Cr for new German machines. By identifying that the furnace sat cold for 3.5 hours during shift changes, management unlocked 600 blades of capacity for sixty-five lakhs. Then, using Taguchi DOE to prove that mold moisture—not expensive titanium—caused the porosity was brilliant engineering. That is how elite operations leaders generate hundred-million-dollar enterprise value."',
      alternativePaths: [
        {
          choiceTitle: 'Buying Extra CNC Machines for Station 4 (Phase 1)',
          counterfactualConsequence: 'Spending ₹7.5 Cr on CNC machines when the furnace was the true bottleneck would have resulted in zero throughput gain. The new machines would have sat cold, consuming 95% of available CapEx and leaving the company in breach of delivery contracts.'
        },
        {
          choiceTitle: 'Blaming Titanium & Buying Expensive US Metal (Phase 3)',
          counterfactualConsequence: 'Switching to 35% more expensive US titanium without fixing mold moisture and pour temperature variance would have left the 9% porosity defect rate completely unchanged, adding ₹4,200 to unit cost and destroying gross margins.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Eliyahu Goldratt\'s The Goal (Alex Rogo & The UniCo Plant)',
          caseStudySummary: 'The iconic business novel revolutionized global manufacturing by showing how plant manager Alex Rogo saved his factory by identifying the NCX-10 machine and heat-treat furnace as bottlenecks, balancing flow rather than capacity, and using the Drum-Buffer-Rope mechanism.'
        },
        {
          company: 'GE Aviation "Brilliant Factory" (Piedmont & Evendale)',
          caseStudySummary: 'GE Aviation transformed jet engine manufacturing by installing IoT sensors across CNC machines to measure OEE in real-time, utilizing automated robotic laser inspection, and applying Little\'s Law to cut turbine blade cycle times by 60%.'
        }
      ]
    }
  }
];
