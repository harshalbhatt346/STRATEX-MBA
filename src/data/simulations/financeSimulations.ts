import { Simulation } from '../../types';

export const financeSimulations: Simulation[] = [
  {
    id: 'fin-save-business',
    subjectId: 'finance',
    conceptId: 'dupont-analysis',
    relatedConcepts: ['Working Capital Management', 'Cash Conversion Cycle (CCC)', 'Debt Covenants & Solvency', 'Operating Leverage'],
    title: 'Save a Struggling Business: The Nova Retail Turnaround',
    tagline: 'Deconstruct a liquidity crisis using DuPont Analysis, fix a broken Cash Conversion Cycle, and renegotiate bank covenants.',
    role: 'Chief Financial Officer (CFO) & Turnaround Specialist, Nova Lifestyle Retail',
    company: 'Nova Lifestyle Retail Ltd.',
    industry: 'Omnichannel Apparel & Consumer Lifestyle Retail',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'Nova Retail is an established nationwide apparel chain with 180 department stores in tier-1 and tier-2 Indian cities, generating ₹1,850 Cr in annual turnover. Rapid debt-funded expansion in 2023 left the balance sheet severely over-leveraged.',
      industryContext: 'Fast fashion retail operates on tight working capital turns. Slower inventory velocity, post-COVID store leases, and rising interest rates have triggered an industry-wide margin squeeze.',
      currentSituation: 'Nova is burning ₹18 Cr in cash per month. Current liquid cash has dwindled to ₹24 Cr (barely 40 days of runway). Debt covenants require a Debt Service Coverage Ratio (DSCR) of at least 1.35x and Interest Coverage > 2.0x. Nova\'s current Interest Coverage has fallen to 1.18x, and creditor banks have issued an ultimatum threatening to freeze credit lines unless a credible restructuring plan is enacted.'
    },
    objectives: [
      'Halt the cash burn and return monthly Free Cash Flow (FCF) to positive territory within 3 quarters.',
      'Restore Interest Coverage Ratio from 1.18x safely above the 2.0x bank covenant threshold.',
      'Shorten the Cash Conversion Cycle (CCC) from 142 days to under 85 days.'
    ],
    constraints: [
      'Liquid cash reserves are only ₹24 Cr; cannot withstand more than 45 days of unmitigated cash burn.',
      'Bank consortium prohibits raising additional senior debt without debt covenant compliance.',
      'Store lease termination penalties in prime malls require 90-day minimum advance notice.'
    ],
    initialMetrics: [
      { key: 'cashRunway', label: 'Cash Balance', value: 24, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 80, description: 'Total unencumbered cash and bank balances' },
      { key: 'interestCoverage', label: 'Interest Coverage Ratio', value: 1.18, unit: 'x', isGoodWhenHigh: true, benchmark: 2.2, description: 'EBIT divided by annual debt interest expense (Covenant floor = 2.0x)' },
      { key: 'ccc', label: 'Cash Conversion Cycle', value: 142, unit: 'days', isGoodWhenHigh: false, benchmark: 80, description: 'Days Inventory (118) + Days Receivables (48) - Days Payables (24)' },
      { key: 'operatingMargin', label: 'Operating EBIT Margin', value: 3.2, unit: '%', isGoodWhenHigh: true, benchmark: 8.5, description: 'Earnings before interest and tax margin' },
      { key: 'roe', label: 'Return on Equity (DuPont)', value: -4.8, unit: '%', isGoodWhenHigh: true, benchmark: 15.0, description: 'Net Income / Equity decomposed via DuPont formula' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Quarter 1: DuPont Forensic Diagnostic & The Inventory Overhang',
        quarterOrTimeline: 'Q1 - The Liquidity Emergency',
        briefing: 'You arrive at Nova\'s Mumbai headquarters. The former CEO blames "weak consumer sentiment." You conduct a rigorous 3-step DuPont Analysis: Return on Equity = Net Profit Margin (0.8%) x Asset Turnover (0.75x) x Financial Leverage (8.0x). The diagnostic reveals the brutal truth: Nova does not have a marketing problem; it has ₹420 Cr of unsold, aging autumn/winter inventory gathering dust in 4 central warehouses, tying up working capital and incurring warehouse interest.',
        marketIntel: {
          headline: 'Indian retail credit squeeze: Banks tighten scrutiny on working capital loans to apparel chains',
          competitorMove: 'Zudio and Uniqlo turn inventory every 45 days; Nova takes 118 days, paying massive carrying interest.',
          macroEnvironment: 'Apparel fashion cycles depreciate by 25% in value for every 90 days of storage beyond the season.',
          internalWhisper: 'Head of Merchandising: "If we discount the old inventory to clear it, we will have to report a ₹65 Cr gross margin write-down and the CEO will look bad."'
        },
        urgentQuestion: 'How do you handle the ₹420 Cr of frozen inventory and the immediate cash bleed?',
        choices: [
          {
            id: 'f1-a',
            title: 'Aggressive "Flash Liquidation" & Outlet Clearance Sale (The Cash-First Reset)',
            description: 'Acknowledge reality: slash prices by 40-50% on all inventory older than 90 days through a 30-day nationwide "Mega Clearance Event" and offload bulk lots to off-price liquidators. Take the immediate accounting write-down to unlock ₹180 Cr in liquid cash.',
            tradeOffs: {
              pros: ['Instantly generates ₹180 Cr of pure cold liquidity, extending cash runway from 40 days to over 12 months', 'Slashes Days Sales of Inventory (DSI) by 42 days, dramatically accelerating the Cash Conversion Cycle'],
              cons: ['Forces an accounting gross margin write-down of ₹55 Cr in the immediate quarter', 'Short-term hit to reported accounting Net Income']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Liquidity crisis averted! Customers flooded clearance racks, injecting ₹185 Cr in instant cash.',
              detailedAnalysis: 'Cash is the lifeblood of retail survival; accounting gross margin is a trailing vanity metric. Selling dead stock at 50% discount stopped the cash bleed, cleared warehouse space for fast-moving spring stock, and proved to banks that management prioritizes cash generation.',
              metricDeltas: { cashRunway: 185, interestCoverage: 0.35, ccc: -38, operatingMargin: -1.8, roe: 6.2 },
              competitorReaction: 'Competitors were surprised by the velocity of your cash recovery.',
              stakeholderFeedback: 'Lead Creditor Bank Manager: "You had the guts to take the write-down and turn dead fabric into ₹185 Cr of liquid cash. We are pausing covenant default proceedings."',
              theorySnippet: {
                framework: 'Working Capital & Cash Conversion Cycle (CCC)',
                takeaway: 'Profit is an opinion; cash is a fact. Holding dead inventory to avoid an accounting write-down ties up cash until bankruptcy strikes.'
              }
            }
          },
          {
            id: 'f1-b',
            title: 'Protect Accounting Margin: Hold Inventory at Full Price & Hope for Festive Sales',
            description: 'Refuse to discount. Keep the ₹420 Cr of inventory on warehouse balance sheets at full original retail price, hoping that next Diwali customers will buy it at full margin.',
            tradeOffs: {
              pros: ['Avoids reporting an accounting gross margin write-down this quarter', 'Maintains cosmetic reported gross margins on paper'],
              cons: ['Zero cash inflows; company runs out of cash in 38 days, triggering debt default and bankruptcy', 'Old fashion depreciates further; next year it will be worth 70% less']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Insolvency. Liquid cash ran out in Week 5; banks froze supplier payroll accounts.',
              detailedAnalysis: 'Accounting denial is fatal. While management protected reported gross margins on paper, the bank accounts hit zero. Creditors filed for insolvency proceedings under the Insolvency & Bankruptcy Code (IBC).',
              metricDeltas: { cashRunway: -24, interestCoverage: -0.45, ccc: 25, operatingMargin: -2.5, roe: -18.0 },
              competitorReaction: 'Liquidators were appointed to sell Nova\'s assets for 10 cents on the dollar.',
              stakeholderFeedback: 'Court Resolution Professional: "The company reported 45% theoretical gross margin while having zero rupees to pay employee salaries."'
            }
          },
          {
            id: 'f1-c',
            title: 'Emergency High-Interest Mezzanine Debt Borrowing at 22% Interest',
            description: 'Borrow ₹100 Cr from an aggressive distressed-debt private credit fund at 22% interest, pledging all store leases as collateral.',
            tradeOffs: {
              pros: ['Injects cash without requiring inventory discounts', 'Buys 90 days of additional breathing room'],
              cons: ['Adds a crushing ₹22 Cr in annual interest expense to an already over-leveraged P&L', 'Pushes Interest Coverage even deeper into covenant breach territory']
            },
            riskLevel: 'High',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Debt spiral. The crushing 22% interest payments consumed the entire cash injection within 4 months.',
              detailedAnalysis: 'Borrowing expensive debt to fund operational losses in an over-leveraged company compounds financial leverage disaster. Financial risk accelerated exponentially.',
              metricDeltas: { cashRunway: 65, interestCoverage: -0.32, ccc: 8, operatingMargin: -2.1, roe: -12.0 },
              competitorReaction: 'Private credit funds prepared to seize company assets.',
              stakeholderFeedback: 'Board Auditor: "You added ₹22 Cr of interest burden to a company that couldn\'t pay its existing ₹18 Cr interest."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Quarter 2: Operating Leverage & Rationalizing the 180-Store Footprint',
        quarterOrTimeline: 'Q2 - Operating Leverage Correction',
        briefing: 'With cash stabilized, you examine Nova\'s cost structure through the lens of Operating Leverage: Fixed vs Variable Costs. Out of 180 stores, 42 stores located in expensive tier-1 shopping malls are deeply cash-flow negative, generating high fixed lease rent and electricity bills that consume 85% of the profits generated by the 138 profitable stores.',
        marketIntel: {
          headline: 'Mall developers report 20% increase in vacant retail space as brands consolidate footprints',
          competitorMove: 'Zara and H&M are closing underperforming mall stores to focus on flagship high-density locations.',
          macroEnvironment: 'High Degree of Operating Leverage (DOL) amplifies losses when sales dip because fixed rents cannot be adjusted downward.',
          internalWhisper: 'Head of Real Estate: "Mall landlords are panicking about retail vacancies. If we threaten to break leases, 70% of them will agree to renegotiate into revenue-share rents."'
        },
        urgentQuestion: 'How do you restructure Nova\'s high-fixed-cost store network to lower Operating Leverage?',
        choices: [
          {
            id: 'f2-a',
            title: 'The Surgical Footprint Restructuring: Close 22 Worst Stores + Renegotiate 20 Stores to Revenue-Share Leases',
            description: 'Immediately terminate the leases on the 22 worst hemorrhaging stores (paying the 90-day penalty), and leverage the threat of departure to force landlords of the other 20 marginal stores to convert fixed monthly rents into a purely variable 14% revenue-share model.',
            tradeOffs: {
              pros: ['Slashes fixed lease overhead by ₹48 Cr annually, dramatically reducing the company\'s break-even sales point', 'Shifts fixed operating costs into variable costs, insulating Nova from future retail demand swings'],
              cons: ['Requires paying ₹8.5 Cr in one-time lease termination penalties and severance in Q2', 'Reduces total store count from 180 to 158']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Operating turnaround! Fixed overhead fell by ₹48 Cr/year, and EBIT margins jumped by 320 bps.',
              detailedAnalysis: 'Lowering the Degree of Operating Leverage (DOL) transforms corporate risk profile. Converting fixed mall rents to revenue-share aligned real estate expenses directly with sales velocity, ensuring that low-sales months never trigger operational insolvency.',
              metricDeltas: { cashRunway: -8.5, interestCoverage: 0.62, ccc: -14, operatingMargin: 3.2, roe: 5.4 },
              competitorReaction: 'Landlords realized Nova was serious about profitability and offered prime display concessions.',
              stakeholderFeedback: 'Chief Operating Officer: "Closing the 22 bleeding stores stopped an annual cash drain of ₹32 Cr. Our remaining 158 stores are all cash-flow positive!"',
              theorySnippet: {
                framework: 'Degree of Operating Leverage (DOL) & Break-Even Analysis',
                takeaway: 'DOL = Contribution Margin / Operating Profit (EBIT). When fixed costs are high, a small drop in revenue wipes out operating profit. Shifting fixed costs to variable lowers the break-even point.'
              }
            }
          },
          {
            id: 'f2-b',
            title: 'Keep All 180 Stores Open & Subsidize Losses with Profitable Stores',
            description: 'Refuse to close any stores because it would reduce top-line revenue from ₹1,850 Cr to ₹1,680 Cr, and the founders want to boast about having 180 locations.',
            tradeOffs: {
              pros: ['Maintains vanity headline top-line revenue metric', 'Avoids awkward public headlines about store closures'],
              cons: ['The 42 loss-making stores continue to burn ₹4 Cr in cash every month', 'Keeps the company\'s break-even point unsustainably high']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Vanity revenue, fatal profit drain. The healthy stores were dragged down by the bleeding stores.',
              detailedAnalysis: 'Prioritizing vanity store count over unit economics is textbook retail mismanagement. The cash generated by profitable stores was consumed paying rents for empty mall locations.',
              metricDeltas: { cashRunway: -24, interestCoverage: -0.15, ccc: 6, operatingMargin: -1.2, roe: -4.5 },
              competitorReaction: 'Rivals expanded in profitable locations while Nova defended money-losing flagship vanity stores.',
              stakeholderFeedback: 'Finance Controller: "We are generating ₹1,850 Cr in sales and making zero profit because 40 stores eat everything."'
            }
          },
          {
            id: 'f2-c',
            title: 'Panic Fire Sale: Close 120 Stores Immediately and Become a Pure Online Webstore',
            description: 'Shut down 65% of all physical retail locations overnight and attempt to sell apparel exclusively via website and mobile app.',
            tradeOffs: {
              pros: ['Eliminates massive retail lease liabilities immediately', 'Looks modern and tech-forward on paper'],
              cons: ['Incurs catastrophic ₹65 Cr in simultaneous early lease termination penalties and lawsuits', 'Apparel customer acquisition cost (CAC) online is brutally expensive without physical store brand presence']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Catastrophic revenue collapse. E-commerce CAC ate all savings, and lease penalty lawsuits froze accounts.',
              detailedAnalysis: 'Radical over-correction destroys value. Abandoning 120 profitable physical retail touchpoints triggered massive lease penalty liabilities while online sales failed to materialize.',
              metricDeltas: { cashRunway: -55, interestCoverage: -0.85, ccc: 35, operatingMargin: -8.5, roe: -24.0 },
              competitorReaction: 'Mall rivals happily absorbed your abandoned retail customers.',
              stakeholderFeedback: 'Founder: "We destroyed our brand presence. E-commerce shipping and return costs are higher than our old store rents were."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Quarter 3: Supplier Working Capital Terms & The Negative Cash Flow Trap',
        quarterOrTimeline: 'Q3 - Working Capital Optimization',
        briefing: 'Your Cash Conversion Cycle (CCC = DSI + DSO - DPO) has improved, but Days Payables Outstanding (DPO) sits at an abysmal 24 days. Nova has been paying textile mills and garment suppliers in cash within 24 days, while suppliers to competitors (Reliance Retail, Trent) wait 75 to 90 days for payment. Concurrently, accounts receivable from corporate franchise partners sit unpaid for 48 days (DSO).',
        marketIntel: {
          headline: 'Working capital masterclass: Inditex (Zara) operates with a NEGATIVE Cash Conversion Cycle (-25 days)',
          competitorMove: 'Leading retailers fund their expansion using supplier credit (DPO > DSI + DSO) rather than expensive bank debt.',
          macroEnvironment: 'Suppliers are willing to extend longer credit terms if payment guarantees are backed by automated supply chain finance (reverse factoring).',
          internalWhisper: 'Head of Sourcing: "If we just delay paying suppliers without warning, they will halt cloth deliveries. We need a structured Supply Chain Financing program."'
        },
        urgentQuestion: 'How do you optimize Days Payables (DPO) and Days Receivables (DSO) to extract working capital?',
        choices: [
          {
            id: 'f3-a',
            title: 'Deploy Bank-Backed Supply Chain Financing (Reverse Factoring) + Strict Franchise Receivable Audits',
            description: 'Partner with HDFC Bank to launch an automated Supply Chain Finance program: extend Nova\'s payment terms from 24 days to 75 days, while allowing suppliers to discount their invoices early with HDFC at an ultra-low 8% bank rate. Simultaneously, mandate automated electronic clearing (NACH) for franchise stores, cutting DSO from 48 days to 22 days.',
            tradeOffs: {
              pros: ['Unlocks ₹95 Cr in non-debt working capital liquidity from the supply chain (CCC drops below 60 days)', 'Suppliers love it because they get paid within 48 hours by the bank if they want immediate cash'],
              cons: ['Nova pays a small 0.4% platform administration fee to the partner bank', 'Requires integrating ERP invoicing with bank clearing servers']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Working capital miracle! Unlocked ₹98 Cr in liquid cash with zero debt incurred.',
              detailedAnalysis: 'Optimizing the Cash Conversion Cycle through structured Supply Chain Finance creates a permanent source of self-funding capital. The company began operating with cash generated by its own operational cycle rather than relying on bank overdrafts.',
              metricDeltas: { cashRunway: 98, interestCoverage: 0.54, ccc: -48, operatingMargin: 1.4, roe: 7.2 },
              competitorReaction: 'Garment suppliers prioritized Nova because invoice discounting was guaranteed by HDFC Bank.',
              stakeholderFeedback: 'Textile Supplier Association President: "Nova\'s reverse factoring program gave our small mills immediate liquidity while giving Nova 75 days. A win-win for everyone."',
              theorySnippet: {
                framework: 'Cash Conversion Cycle (CCC = DSI + DSO - DPO) & Reverse Factoring',
                takeaway: 'Lengthening DPO through structured bank financing and accelerating DSO frees up permanent balance sheet capital without diluting equity or taking on expensive debt.'
              }
            }
          },
          {
            id: 'f3-b',
            title: 'Unilateral Payment Blackout: Simply Refuse to Pay Suppliers for 120 Days',
            description: 'Do not tell suppliers anything. Simply ignore their emails and stop paying invoices for 4 months to hoard cash.',
            tradeOffs: {
              pros: ['Immediate short-term hoarding of cash', 'Zero banking setup effort'],
              cons: ['Suppliers immediately halt deliveries of festive spring collections; store shelves sit empty', 'Suppliers file insolvency petitions under MSME development regulations']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Supply chain boycott. 40 textile mills halted shipments right before wedding season.',
              detailedAnalysis: 'Unilaterally stiffing suppliers destroys vendor relationships. Without fresh merchandise on shelves, customer footfalls collapsed by 50%.',
              metricDeltas: { cashRunway: 32, interestCoverage: -0.42, ccc: -15, operatingMargin: -4.8, roe: -8.0 },
              competitorReaction: 'Competitors bought up the diverted fabric and ran festive promotions.',
              stakeholderFeedback: 'Head of Sourcing: "We have empty racks in 150 stores during festive week because our suppliers cut us off."'
            }
          },
          {
            id: 'f3-c',
            title: 'Offer Cash-on-Delivery to Suppliers to Get a 2% Discount',
            description: 'Pay suppliers immediately upon delivery (DPO = 0 days) to capture a 2% invoice cash discount.',
            tradeOffs: {
              pros: ['Captures a tiny 2% invoice margin discount on paper', 'Suppliers are thrilled with immediate cash'],
              cons: ['Completely drains company liquid cash reserves within 2 weeks', 'The exact opposite of what a struggling, cash-starved company should do']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Liquidity suicide. Paid out ₹45 Cr in early payments and ran out of money for payroll.',
              detailedAnalysis: 'Prioritizing a minor 2% invoice discount over cash liquidity during a corporate turnaround is financial malpractice. Cash runway was wiped out.',
              metricDeltas: { cashRunway: -45, interestCoverage: -0.65, ccc: 28, operatingMargin: 0.2, roe: -14.0 },
              competitorReaction: 'Competitors watched Nova stumble into self-inflicted insolvency.',
              stakeholderFeedback: 'Lead Bank Officer: "Why did you pay suppliers 30 days early when you are in covenant default with your lending banks?!"'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Quarter 4: Debt Restructuring & Equity Recapitalization',
        quarterOrTimeline: 'Q4 - Permanent Capital Structure Alignment',
        briefing: 'Nine months into the turnaround, the operational bleeding has stopped. Nova has generated ₹120 Cr in trailing free cash flow, operating margin has rebounded to 7.8%, and the Cash Conversion Cycle is down to 56 days. Liquid cash sits comfortably at ₹265 Cr. However, Nova still has ₹650 Cr in legacy high-interest term loans maturing in 18 months. You must negotiate a comprehensive debt refinancing and equity recapitalization package with your lending consortium.',
        marketIntel: {
          headline: 'Nova Retail posts shock Q3 turnaround profit; institutional private equity funds express interest',
          competitorMove: 'Over-leveraged retail peers are being forced into bankruptcy restructuring.',
          macroEnvironment: 'Banks reward proven turnaround operators with lower debt spreads and extended loan maturities.',
          internalWhisper: 'Lead Banker: "You fixed the operations and stabilized the cash flow. If you can bring in a minority equity sponsor, we will slash your loan interest rate from 11.5% to 8.2% and extend maturities by 5 years."'
        },
        urgentQuestion: 'How do you structure the final balance sheet recapitalization to lock in long-term solvency?',
        choices: [
          {
            id: 'f4-a',
            title: 'Consortium Debt Refinancing + 15% Minority Equity Infusion from Growth PE Fund',
            description: 'Bring in a marquee private equity firm (Temasek or Warburg Pincus) for ₹150 Cr in primary growth equity at a healthy ₹1,200 Cr valuation (12.5% dilution). Use the equity infusion and turnaround track record to negotiate a full debt restructuring with banks: extend loan maturity to 2031, cut interest rates by 330 bps (to 8.2%), and formally cure all covenant breaches.',
            tradeOffs: {
              pros: ['Slashes annual debt interest expense by ₹21.5 Cr immediately, permanently elevating Interest Coverage > 3.2x', 'De-leverages balance sheet; strengthens credit rating to AA- investment grade'],
              cons: ['Dilutes existing founding family equity by 12.5%', 'Brings a demanding institutional private equity partner onto the Board of Directors']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Corporate turnaround complete! Solvency secured, credit rating upgraded to AA-, and share price tripled.',
              detailedAnalysis: 'Combining operational discipline with a balanced recapitalization (debt elongation + minority equity de-leveraging) solves the financial leverage trap. Interest coverage reached 3.4x, well above covenant floors, cementing Nova as a resilient public retail titan.',
              metricDeltas: { cashRunway: 150, interestCoverage: 1.45, ccc: -8, operatingMargin: 2.1, roe: 14.8 },
              competitorReaction: 'Distressed peers were acquired by Nova at attractive valuations.',
              stakeholderFeedback: 'Board Chairman & Founders: "A year ago our company was 40 days from bankruptcy. Today we have ₹415 Cr in cash, investment-grade credit, and an institutional PE partner. An extraordinary financial turnaround."',
              theorySnippet: {
                framework: 'Optimal Capital Structure & Modigliani-Miller with Taxes & Bankruptcy Costs',
                takeaway: 'Optimal capital structure balances the tax shield of debt against the catastrophic costs of financial distress. De-leveraging into investment grade maximizes enterprise value.'
              }
            }
          },
          {
            id: 'f4-b',
            title: 'Refuse Equity Dilution: Attempt to Pay Off ₹650 Cr Debt Using Pure Operating Cash',
            description: 'Refuse any private equity partners to avoid 12.5% dilution. Squeeze every single rupee out of operations to pay down the ₹650 Cr debt manually.',
            tradeOffs: {
              pros: ['Zero equity dilution for founders', 'Avoids institutional private equity board oversight'],
              cons: ['Starves the company of marketing, IT, and store renovation capital for the next 5 years', 'A single bad retail quarter will cause loan maturity default when the balloon payment comes due']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Vulnerable and starved of capital. Store upgrades were neglected, and growth stalled.',
              detailedAnalysis: 'Refusing recapitalization to preserve founder equity pride leaves the balance sheet under-capitalized. When competitor Zudio expanded, Nova had zero capital to defend its market share.',
              metricDeltas: { cashRunway: -85, interestCoverage: 0.25, ccc: 4, operatingMargin: -1.2, roe: -2.5 },
              competitorReaction: 'Competitors out-invested Nova in store renovations and modern retail tech.',
              stakeholderFeedback: 'Store Operations VP: "Our store air conditioners are broken and we can\'t afford to paint our stores because all cash goes to debt service."'
            }
          },
          {
            id: 'f4-c',
            title: 'Leveraged Dividend Recapitalization: Borrow Another ₹200 Cr to Pay Founders a Cash Bonus',
            description: 'Now that cash flow has turned positive, borrow an additional ₹200 Cr to pay an emergency cash dividend to founding family members.',
            tradeOffs: {
              pros: ['Enormous immediate personal cash payout for founders', 'Shows off theoretical short-term borrowing capacity'],
              cons: ['Instant covenant default with bank consortium; banks immediately call in all loans', 'Guaranteed immediate liquidation of the company']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Immediate lender seizure. Banks invoked loan acceleration covenants and seized the company.',
              detailedAnalysis: 'Extracting dividends from an over-leveraged company that just recovered from near-insolvency violates fraudulent conveyance and debt covenants. Creditors took 100% control.',
              metricDeltas: { cashRunway: -200, interestCoverage: -1.8, ccc: 20, operatingMargin: -4.0, roe: -35.0 },
              competitorReaction: 'Competitors acquired Nova\'s retail locations for scrap value.',
              stakeholderFeedback: 'Consortium Lead Banker: "This was a fraudulent conveyance breach of our covenant terms. We have seized company control and removed management."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You executed a high-stakes corporate turnaround of Nova Lifestyle Retail, saving the company from 40 days of remaining liquidity into a financially resilient, investment-grade retail powerhouse. By conducting a DuPont analysis to pinpoint ₹420 Cr of frozen inventory rather than blaming external macro factors, executing a cash-first flash liquidation to unlock ₹185 Cr in liquid liquidity, rationalizing store footprint to lower the Degree of Operating Leverage, optimizing the Cash Conversion Cycle through bank-backed reverse factoring (DPO expansion), and executing a balanced recapitalization (PE growth equity + debt maturity elongation), you restored Interest Coverage from 1.18x to over 3.4x, collapsed the CCC from 142 days to 56 days, and turned ROE from -4.8% to +16.2%.',
      whyItHappened: 'Retail businesses do not fail from a lack of sales; they fail from working capital asphyxiation and the mismatch between fixed financial debt and volatile operating cash flows. Inexperienced managers cling to vanity metrics (high gross margins on paper, number of store locations, avoiding equity dilution) while their cash runway evaporates. Turnaround mastery requires cold financial realism: recognizing that cash velocity trumps accounting margins, converting fixed costs into variable costs to lower operating leverage, and aligning the capital structure with the underlying volatility of the operating assets.',
      conceptsApplied: [
        {
          name: 'DuPont Analysis (Three-Step ROE Decomposition)',
          formulaOrModel: 'ROE = Net Profit Margin x Asset Turnover x Financial Leverage Multiplier',
          explanation: 'Deconstructing ROE revealed that Nova\'s high pre-crisis returns were artificially propped up by dangerous financial leverage (8.0x) while asset turnover was collapsing (0.75x) due to bloated inventory. Fixing the business required curing the asset turnover bottleneck, not borrowing more debt.',
          keyTakeaway: 'Always decompose ROE to diagnose whether profits stem from genuine operational efficiency or dangerous debt leverage.'
        },
        {
          name: 'The Cash Conversion Cycle (CCC)',
          formulaOrModel: 'CCC = Days Sales of Inventory (DSI) + Days Sales Outstanding (DSO) - Days Payables Outstanding (DPO)',
          explanation: 'Nova had a CCC of 142 days: cash spent on raw fabric took nearly 5 months to return as customer cash. By liquidating dead stock (DSI drop) and implementing reverse factoring with HDFC Bank (DPO expansion to 75 days), CCC was cut to 56 days, generating ₹98 Cr in self-funded operational liquidity.',
          keyTakeaway: 'The Cash Conversion Cycle measures how long a company\'s cash is tied up in operational plumbing. Shortening it creates free cash without debt or dilution.'
        },
        {
          name: 'Operating Leverage vs Financial Leverage',
          formulaOrModel: 'Degree of Operating Leverage (DOL) = Fixed Costs / Total Costs; Financial Leverage = Debt / Equity',
          explanation: 'Nova was trapped in a double leverage pincer: high fixed mall lease rents (operating leverage) combined with heavy bank debt (financial leverage). Converting 20 store leases to revenue-share lowered operating break-even, while PE equity infusion de-leveraged the balance sheet.',
          keyTakeaway: 'A company with volatile operating revenues must never carry high operating leverage AND high financial leverage concurrently.'
        }
      ],
      expertExecutivePerspective: 'A Managing Director in Alvarez & Marsal / Houlihan Lokey Restructuring Practice would remark: "Round 1 and Round 3 separated the amateurs from the masters. Amateurs refuse to take inventory write-downs because they are terrified of looking bad in quarterly P&L accounting, so they hold dead stock until the sheriff padlocks the doors. By slashing prices, taking the ₹55 Cr write-down, and generating ₹185 Cr in cash on Day 30, management bought the time needed to restructure leases and optimize working capital. That is textbook turnaround finance."',
      alternativePaths: [
        {
          choiceTitle: 'Holding Dead Inventory at Full Price (Round 1)',
          counterfactualConsequence: 'Refusing to discount would have preserved cosmetic gross margins on paper, but cash balance would have hit zero in Week 5. The company would have defaulted on payroll, and banks would have placed Nova into corporate insolvency liquidation.'
        },
        {
          choiceTitle: 'Unilateral Payment Blackout of Suppliers (Round 3)',
          counterfactualConsequence: 'Stiffing textile suppliers for 120 days without structured bank financing would have triggered an immediate supply chain boycott. Store shelves would have sat empty during festive wedding season, collapsing customer footfall and destroying the recovery.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Inditex (Zara) Working Capital Mastery',
          caseStudySummary: 'Zara produces small batches with ultra-fast design-to-rack cycles (15 days), maintaining near-zero unsold inventory and an extraordinary negative Cash Conversion Cycle (-25 days). It funds its global store expansion entirely through supplier working capital rather than bank debt.'
        },
        {
          company: 'Best Buy Turnaround (Hubert Joly, 2012-2018)',
          caseStudySummary: 'Facing the "Amazon showrooming" crisis, Joly turned Best Buy around by lowering operating leverage: subleasing store floor space to Samsung and Apple for dedicated mini-shops (vendor-funded rent), matching Amazon prices to clear inventory, and renegotiating vendor credit terms.'
        }
      ]
    }
  },
  {
    id: 'fin-allocate-capital',
    subjectId: 'finance',
    conceptId: 'capital-budgeting-npv',
    relatedConcepts: ['Net Present Value (NPV)', 'Internal Rate of Return (IRR)', 'Weighted Average Cost of Capital (WACC)', 'Capital Rationing under Constraints'],
    title: 'Allocate Limited Capital: The OmniCorp CapEx Portfolio Dilemma',
    tagline: 'Evaluate competing multi-crore investment projects using NPV, IRR, Payback Period, and WACC hurdle rates under strict capital rationing.',
    role: 'Vice President of Corporate Finance & Capital Allocation, OmniCorp Industries',
    company: 'OmniCorp Industrial Conglomerate',
    industry: 'Diversified Industrials / Manufacturing, Clean Energy & Digital Automation',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'OmniCorp is a ₹18,000 Cr diversified industrial conglomerate with divisions spanning heavy precision forgings, specialty industrial chemicals, renewable solar parks, and smart warehouse robotics.',
      industryContext: 'Capital allocation is the single most important long-term responsibility of corporate leadership. Warren Buffett notes that over a 20-year career, CEOs allocate 100% of their company\'s capital; doing it well compounds wealth, while doing it poorly destroys empires.',
      currentSituation: 'Four division heads have submitted urgent capital investment proposals totaling ₹240 Crore. However, the Board of Directors has imposed a strict ₹100 Crore Capital Rationing Budget for the upcoming fiscal year. OmniCorp\'s Weighted Average Cost of Capital (WACC) hurdle rate is 12.5%. You must evaluate projects using rigorous discounted cash flow (DCF), NPV, IRR, and payback analysis to build the optimal portfolio.'
    },
    objectives: [
      'Maximize total Net Present Value (NPV) generated across the ₹100 Cr allocated capital budget.',
      'Ensure the selected portfolio achieves an aggregate Internal Rate of Return (IRR) well above the 12.5% WACC hurdle rate.',
      'Maintain an average portfolio payback period under 3.5 years to preserve liquidity.'
    ],
    constraints: [
      'Total capital expenditure strictly capped at ₹100.0 Crore (Capital Rationing).',
      'No project with IRR below the 12.5% WACC hurdle rate may be funded.',
      'Projects cannot be partially funded without renegotiating technical engineering specifications.'
    ],
    initialMetrics: [
      { key: 'portfolioNpv', label: 'Portfolio Net Present Value (NPV)', value: 0, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 65, description: 'Total discounted net cash flows generated above initial CapEx' },
      { key: 'blendedIrr', label: 'Portfolio Blended IRR', value: 0, unit: '%', isGoodWhenHigh: true, benchmark: 22.0, description: 'Discount rate at which portfolio NPV equals zero (Hurdle = 12.5%)' },
      { key: 'capitalAllocated', label: 'Capital Deployed', value: 0, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: false, benchmark: 100, description: 'CapEx committed against ₹100 Cr budget' },
      { key: 'avgPayback', label: 'Average Payback Period', value: 0, unit: 'years', isGoodWhenHigh: false, benchmark: 3.5, description: 'Years required for cumulative cash inflows to recover initial CapEx' },
      { key: 'freeCashFlowYear3', label: 'Projected Year-3 FCF Inflow', value: 0, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 40, description: 'Annual free cash flow delivered to corporate treasury in Year 3' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1: Screening the Four Division Proposals (The Financial Hurdle Audit)',
        quarterOrTimeline: 'CapEx Committee - The Project Audit',
        briefing: 'The four divisions present their investment dossiers:\n\n1. Project Solar (Green Energy): CapEx ₹45 Cr, NPV ₹24 Cr, IRR 17.5%, Payback 4.5 yrs, low regulatory risk.\n2. Project Robo (Warehouse Robotics): CapEx ₹35 Cr, NPV ₹38 Cr, IRR 28.4%, Payback 2.8 yrs, moderate technology risk.\n3. Project Chem (Specialty Chemicals): CapEx ₹55 Cr, NPV ₹48 Cr, IRR 23.2%, Payback 3.2 yrs, high environmental permit risk.\n4. Project Steel (Foundry Upgrade): CapEx ₹60 Cr, NPV ₹14 Cr, IRR 11.8%, Payback 6.2 yrs (below WACC hurdle!).\n\nTotal demand is ₹195 Cr, but you have only ₹100 Cr.',
        marketIntel: {
          headline: 'Interest rates remain elevated at 7.5%, raising corporate cost of capital hurdle rates globally',
          competitorMove: 'Competitors who over-allocated capital to sub-hurdle legacy foundry upgrades are suffering depressed ROIC multiples.',
          macroEnvironment: 'Under capital rationing, managers must rank projects by the Profitability Index ($PI = NPV / CapEx$) to maximize value per rupee of constrained capital.',
          internalWhisper: 'VP of Steel Division (Founder\'s Brother-in-Law): "Our foundry has been the heart of this company for 40 years! You must fund our ₹60 Cr upgrade regardless of spreadsheet calculations."'
        },
        urgentQuestion: 'Which project do you immediately disqualify, and which core portfolio package do you recommend?',
        choices: [
          {
            id: 'k1-a',
            title: 'Fund Project Robo (₹35 Cr) + Project Chem (₹55 Cr) = ₹90 Cr (Max NPV Portfolio) & Reject Project Steel',
            description: 'Disqualify Project Steel immediately (IRR 11.8% is below WACC hurdle of 12.5% and destroys value). Allocate ₹90 Cr across Project Robo (PI = 1.08) and Project Chem (PI = 0.87), keeping ₹10 Cr in liquid treasury reserves.',
            tradeOffs: {
              pros: ['Maximizes total portfolio Net Present Value (NPV = ₹86 Cr) across available capital', 'Achieves exceptional blended IRR of 25.2% and rapid 3.0-year average payback'],
              cons: ['Infuriates the influential VP of Steel Division by rejecting his legacy foundry upgrade', 'Project Chem carries environmental permitting risk that must be actively managed']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Capital allocation perfection! Total NPV maximized at ₹86 Cr on a ₹90 Cr deployment.',
              detailedAnalysis: 'Applying the Profitability Index ($PI = NPV / CapEx$) under capital rationing ensures that every single rupee of scarce balance sheet capital generates maximum present value. Rejecting Project Steel protected shareholders from a value-destroying investment ($IRR < WACC$).',
              metricDeltas: { portfolioNpv: 86, blendedIrr: 25.2, capitalAllocated: 90, avgPayback: 3.0, freeCashFlowYear3: 38.5 },
              competitorReaction: 'Wall Street equity analysts praised OmniCorp\'s capital discipline and governance.',
              stakeholderFeedback: 'CEO & Audit Chair: "Rejecting the foundry was politically difficult, but economically essential. You generated ₹86 Cr of pure shareholder value. Masterful capital discipline."',
              theorySnippet: {
                framework: 'Capital Rationing & The Profitability Index (PI = NPV / CapEx)',
                takeaway: 'Under budget constraints, do not rank by raw NPV alone; rank by the Profitability Index to maximize value creation per unit of constrained capital. Never fund projects where $IRR < WACC$.'
              }
            }
          },
          {
            id: 'k1-b',
            title: 'Political Capitulation: Fund Project Steel (₹60 Cr) + Project Solar (₹45 Cr) = Exceed Budget by ₹5 Cr',
            description: 'Bow to internal family politics: fund the founder\'s beloved legacy Steel Foundry (₹60 Cr) and Project Solar (₹45 Cr), borrowing an extra ₹5 Cr to cover the budget overrun.',
            tradeOffs: {
              pros: ['Pleases the founder\'s family and avoids internal corporate conflict', 'Keeps the legacy factory modern'],
              cons: ['Steel IRR (11.8%) is below WACC (12.5%), actively destroying ₹6.8 Cr in economic value', 'Total portfolio NPV is a dismal ₹38 Cr (less than half of the optimal portfolio)']
            },
            riskLevel: 'High',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Destruction of shareholder value. The legacy foundry upgrade failed to cover its cost of capital.',
              detailedAnalysis: 'Investing capital in projects earning less than the cost of capital destroys enterprise value. The foundry ran at sub-hurdle margins, dragging down group ROIC and triggering analyst downgrades.',
              metricDeltas: { portfolioNpv: 38, blendedIrr: 14.2, capitalAllocated: 105, avgPayback: 5.4, freeCashFlowYear3: 16.2 },
              competitorReaction: 'Competitors outpaced OmniCorp in robotics and advanced chemicals.',
              stakeholderFeedback: 'Institutional Shareholder: "You spent ₹60 Cr on a low-return steel plant while starving high-growth robotics. We are voting against board compensation."'
            }
          },
          {
            id: 'k1-c',
            title: 'Equally Divide Budget: Give All Four Projects ₹25 Cr Each for "Fairness"',
            description: 'Give each of the four division heads exactly ₹25 Cr and tell them to build half of their projects.',
            tradeOffs: {
              pros: ['Feels diplomatic and egalitarian to division heads', 'Avoids having to say "NO" to anyone'],
              cons: ['Large industrial projects have indivisible Minimum Efficient Scale; half-built plants cannot produce anything', 'Guarantees four unfinished, non-functioning engineering sites that generate zero cash flow']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Engineering disaster. Four half-built facilities generated zero cash flow.',
              detailedAnalysis: 'Capital budgeting is not social welfare. Industrial CapEx is lumpy and indivisible. Allocating partial funds created four unfinished construction sites that generated zero revenue.',
              metricDeltas: { portfolioNpv: -15, blendedIrr: 4.5, capitalAllocated: 100, avgPayback: 9.0, freeCashFlowYear3: 0.0 },
              competitorReaction: 'Competitors laughed at OmniCorp\'s unfinished construction sites.',
              stakeholderFeedback: 'Head of Engineering: "You gave us ₹25 Cr for a ₹55 Cr chemical reactor. We poured concrete and have no money for the distillation column. It is completely useless."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Round 2: Sensitivity Analysis & The Interest Rate / WACC Spike Shock',
        quarterOrTimeline: 'CapEx Committee - Macro Stress Testing',
        briefing: 'Before signing construction contracts for Project Chem (₹55 Cr) and Project Robo (₹35 Cr), central banks unexpectedly hike interest rates by 150 bps to fight inflation. OmniCorp\'s debt interest costs rise, driving your corporate Weighted Average Cost of Capital (WACC) from 12.5% to 14.8%. The CFO demands an immediate sensitivity analysis: does the portfolio still generate positive NPV under the higher discount rate?',
        marketIntel: {
          headline: 'Global central banks signal "Higher for Longer" interest rates; corporate hurdle rates jump',
          competitorMove: 'Over-leveraged industrial firms are halting capital expansion due to rising hurdle rates.',
          macroEnvironment: 'Projects with back-loaded cash flows (cash delivered in Years 8-10) suffer disproportionate NPV collapse when discount rates rise.',
          internalWhisper: 'Financial Analyst: "Project Chem has front-loaded cash flows (starts paying back in Year 2), while Project Solar has cash flows spread over 15 years."'
        },
        urgentQuestion: 'How do you stress-test and adjust the capital allocation portfolio against the higher 14.8% WACC hurdle?',
        choices: [
          {
            id: 'k2-a',
            title: 'Re-Calculate DCF under 14.8% WACC + Lock In Low-Interest Fixed-Rate Export Credit Financing',
            description: 'Re-run the discounted cash flow models: Project Robo\'s IRR (28.4%) and Project Chem\'s IRR (23.2%) still easily surpass the 14.8% hurdle, maintaining a robust ₹68 Cr combined NPV. Simultaneously, hedge the interest rate spike by securing fixed-rate 6.8% German export credit financing (Euler Hermes) for the robotics equipment imports.',
            tradeOffs: {
              pros: ['Proves portfolio resilience: both selected projects maintain substantial safety margins above the new WACC', 'Securing fixed-rate export credit financing insulates OmniCorp from further domestic interest rate hikes'],
              cons: ['Requires strict legal documentation with German export agencies', 'Total NPV shrinks from ₹86 Cr to ₹68 Cr due to the higher discount rate']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Financial resilience validated! The portfolio remained highly value-accretive.',
              detailedAnalysis: 'Stress-testing cash flows under higher hurdle rates separates fragile speculations from genuinely robust investments. Because both projects had high IRRs (28% and 23%), they easily absorbed the 230 bps WACC increase with substantial positive NPV.',
              metricDeltas: { portfolioNpv: -18, blendedIrr: 0.0, capitalAllocated: 0, avgPayback: 0.1, freeCashFlowYear3: 2.5 },
              competitorReaction: 'Competitors were forced to cancel projects while OmniCorp moved forward with locked-in export financing.',
              stakeholderFeedback: 'Board Treasurer: "Superb sensitivity modeling. While other firms panicked over rising interest rates, our portfolio margin of safety held firm."',
              theorySnippet: {
                framework: 'Sensitivity Analysis, Discount Rate Mechanics & WACC Margin of Safety',
                takeaway: 'High-IRR projects with front-loaded cash flows are insulated against discount rate spikes. Always ensure an investment has a sufficient margin of safety above WACC.'
              }
            }
          },
          {
            id: 'k2-b',
            title: 'Panic & Cancel All Projects: Freeze All Capital Expenditure Indefinitely',
            description: 'Halt all capital allocation. Keep the ₹100 Cr in low-yield 6% bank fixed deposits until global interest rates drop.',
            tradeOffs: {
              pros: ['Zero execution or project risk', '100% liquid cash preservation'],
              cons: ['After inflation and taxes, bank deposits earn a negative real return (-1.5%)', 'OmniCorp forfeits ₹68 Cr in Net Present Value and falls behind agile competitors']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Opportunity cost failure. Liquid cash was eaten away by inflation while competitors modernized.',
              detailedAnalysis: 'Hoarding cash when projects exist that earn 28% IRR is capital allocation paralysis. OmniCorp suffered severe opportunity cost loss.',
              metricDeltas: { portfolioNpv: -68, blendedIrr: -19.2, capitalAllocated: -90, avgPayback: 0.0, freeCashFlowYear3: -38.5 },
              competitorReaction: 'Rival robotics firms automated their warehouses and took OmniCorp\'s logistics clients.',
              stakeholderFeedback: 'Managing Director: "We froze in fear over interest rates and gave away our technological leadership."'
            }
          },
          {
            id: 'k2-c',
            title: 'Artificially Manipulate Spreadsheet Terminal Growth Rate to Hide the WACC Spike',
            description: 'Change the financial model\'s terminal growth rate from a realistic 3% to an unrealistic 8% so that NPV numbers look high on paper.',
            tradeOffs: {
              pros: ['Makes spreadsheet reports look artificially pretty for the Board', 'Avoids explaining discount rate mathematics to directors'],
              cons: ['Classic financial modeling fraud; builds capital commitments on impossible economic assumptions', 'Guaranteed future impairment write-downs when reality falls short']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Audit scandal. Independent board auditors rejected the fabricated terminal value assumptions.',
              detailedAnalysis: 'Assuming a company will grow faster than the overall GDP in perpetuity (terminal growth = 8%) violates basic corporate finance reality. The CFO was reprimanded.',
              metricDeltas: { portfolioNpv: -30, blendedIrr: -5.0, capitalAllocated: 0, avgPayback: 0.5, freeCashFlowYear3: -5.0 },
              competitorReaction: 'Industry observers mocked OmniCorp\'s aggressive accounting assumptions.',
              stakeholderFeedback: 'Audit Committee Chair: "You cannot assume perpetual 8% growth to hide an interest rate increase. Fix this model immediately."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Round 3: The Real Options Dilemma (Phased Milestone Expansion)',
        quarterOrTimeline: 'CapEx Committee - Managing Execution Uncertainty',
        briefing: 'During engineering site surveys for Project Chem (₹55 Cr specialty polymer plant), environmental groups raise concerns regarding groundwater effluent permits. The Chief Engineer proposes a "Real Option" approach: instead of committing the full ₹55 Cr upfront, invest ₹15 Cr in Phase 1 (pilot modular green reactor) with an "Option to Expand" (committing the remaining ₹40 Cr in Year 2 once environmental clearance and commercial off-take contracts are finalized).',
        marketIntel: {
          headline: 'Real Options Analysis: How leading mining and energy firms de-risk mega-projects through phased commitments',
          competitorMove: 'A competitor spent $80M on an un-phased chemical plant and had it shuttered by court environmental injunctions.',
          macroEnvironment: 'Under high regulatory uncertainty, the managerial flexibility to delay, expand, or abandon an investment has massive quantifiable economic value.',
          internalWhisper: 'Head of R&D: "Building Phase 1 first lets us test the patented catalyst on a small scale, reducing commercial failure risk by 75%."'
        },
        urgentQuestion: 'How do you structure the investment in Project Chem to incorporate Real Options flexibility?',
        choices: [
          {
            id: 'k3-a',
            title: 'Execute the Phased Real Option: Commit ₹15 Cr Phase 1 + Option to Expand ₹40 Cr upon Regulatory Clearance',
            description: 'Structure Project Chem as a staged investment: deploy ₹15 Cr for the modular pilot reactor today. If regulatory permits and customer off-take contracts are secured, exercise the call option to deploy the remaining ₹40 Cr in Year 2. Reallocate the temporarily saved ₹40 Cr to Project Solar\'s high-yield Phase 1.',
            tradeOffs: {
              pros: ['Limits downside exposure to ₹15 Cr if environmental permits are blocked (Option to Abandon)', 'Captures upside while deploying the temporarily idle ₹40 Cr into cash-generating solar assets today'],
              cons: ['Total combined CapEx will be slightly higher (₹58 Cr vs ₹55 Cr) due to two-phase construction mobilization', 'Requires disciplined milestone governance between phases']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Masterclass in capital de-risking! Preserved massive upside while capping downside exposure.',
              detailedAnalysis: 'Traditional DCF undervalues managerial flexibility. Treating multi-stage capital investments as financial Real Options (Black-Scholes / Binomial Decision Trees) protects corporate solvency during regulatory uncertainty while maximizing capital deployment efficiency.',
              metricDeltas: { portfolioNpv: 22, blendedIrr: 3.4, capitalAllocated: 15, avgPayback: -0.4, freeCashFlowYear3: 14.5 },
              competitorReaction: 'Competitors watched their full-scale un-phased plants get blocked in court while OmniCorp smoothly progressed.',
              stakeholderFeedback: 'Risk Committee Chair: "Brilliant application of Real Options. You protected our downside while keeping our growth vector 100% alive."',
              theorySnippet: {
                framework: 'Real Options Valuation (ROV) & Staged Capital Investments',
                takeaway: 'When uncertainty is high and irreversible investments are required, the flexibility to stage commitments (Option to Expand / Abandon) creates massive quantifiable economic value that static DCF models ignore.'
              }
            }
          },
          {
            id: 'k3-b',
            title: 'Full All-or-Nothing Gamble: Spend Full ₹55 Cr Upfront with Zero Environmental Permits',
            description: 'Ignore environmental concerns. Pour all ₹55 Cr into the ground on Day 1, betting that government officials won\'t dare stop an active industrial site.',
            tradeOffs: {
              pros: ['Faster construction timeline if zero environmental inspectors intervene', 'Saves ₹3 Cr in phased mobilization costs'],
              cons: ['High probability of High Court stay order halting an un-permitted plant', 'Sinks ₹55 Cr in stranded concrete that cannot legally operate']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Court injunction disaster. The National Green Tribunal issued a stay order, freezing the site.',
              detailedAnalysis: 'Gambling balance sheet capital against environmental regulatory compliance is reckless. The High Court ordered construction halted, stranding ₹55 Cr in non-income-producing concrete.',
              metricDeltas: { portfolioNpv: -45, blendedIrr: -12.0, capitalAllocated: 55, avgPayback: 6.0, freeCashFlowYear3: -22.0 },
              competitorReaction: 'Competitors pointed out OmniCorp\'s environmental violations to international ESG funds.',
              stakeholderFeedback: 'State Pollution Control Board: "Construction was commenced without mandatory effluent treatment clearance. Work is halted indefinitely under court order."'
            }
          },
          {
            id: 'k3-c',
            title: 'Completely Abandon Project Chem and Put All Money in Government Treasury Bills',
            description: 'Scrap the entire specialty chemical division and buy government bonds yielding 7.2%.',
            tradeOffs: {
              pros: ['Zero regulatory or operational risk', 'Guaranteed sovereign interest returns'],
              cons: ['Surrenders an 80% gross margin specialty polymer patent that took 5 years to develop', 'Fails to deliver the growth mandate set by the Board of Directors']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Risk-averse stagnation. Competitors licensed similar patents and captured the European polymer market.',
              detailedAnalysis: 'Excessive risk aversion destroys value just as surely as reckless gambling. OmniCorp forfeited an extraordinary technological asset because management feared managing phased execution.',
              metricDeltas: { portfolioNpv: -35, blendedIrr: -14.0, capitalAllocated: -55, avgPayback: 0.0, freeCashFlowYear3: -18.0 },
              competitorReaction: 'A German competitor bought the European polymer market share effortlessly.',
              stakeholderFeedback: 'R&D Director: "Our scientists spent 5 years inventing this polymer, and finance walked away because they didn\'t want to manage a two-phase pilot."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Round 4: Portfolio Post-Audit & The Compounding Cash Generation Engine',
        quarterOrTimeline: 'CapEx Committee - The 3-Year Retrospective',
        briefing: 'Three years after the capital allocation decisions, the numbers are in. Project Robo has revolutionized warehouse throughput, delivering ₹34 Cr in annual operational cost savings (IRR reached 31.2%). Project Chem\'s Phase 1 pilot operated cleanly, secured full environmental clearances, and Phase 2 was successfully executed, generating ₹42 Cr in high-margin export revenue. OmniCorp\'s total capital portfolio delivers ₹56 Cr in annual Free Cash Flow to corporate treasury. The Board asks for your capital allocation policy for the next decade.',
        marketIntel: {
          headline: 'OmniCorp Return on Invested Capital (ROIC) expands from 11.2% to 19.8%, earning "Best Capital Allocator" award from Business Standard',
          competitorMove: 'Unfocused conglomerates that squandered CapEx on vanity projects are facing debt restructuring.',
          macroEnvironment: 'Companies that compound capital at >18% ROIC consistently generate top-decile shareholder returns over decades.',
          internalWhisper: 'Group CEO: "Warren Buffett says capital allocation is the ultimate CEO skill. What should our perpetual capital allocation constitution look like?"'
        },
        urgentQuestion: 'What core capital allocation framework do you enshrine into OmniCorp\'s corporate constitution?',
        choices: [
          {
            id: 'k4-a',
            title: 'Enshrine the "OmniCorp Capital Constitution" (Strict WACC Hurdle Discipline, Staged Real Options & ROIC Compensation)',
            description: 'Codify four non-negotiable rules: 1) No project funded unless $IRR \\ge WACC + 400$ bps margin of safety; 2) Mandatory Profitability Index ranking under capital rationing; 3) All high-uncertainty mega-projects must be structured as staged Real Options; 4) 50% of division executive bonuses tied directly to Economic Value Added ($EVA = Invested Capital \\times (ROIC - WACC)$).',
            tradeOffs: {
              pros: ['Institutionalizes rigorous capital allocation so it outlasts any individual manager or CEO', 'Aligns executive compensation directly with true economic profit rather than vanity revenue growth'],
              cons: ['Division heads cannot fund pet vanity projects without rigorous mathematical justification', 'Requires continuous auditing of divisional invested capital']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Historic corporate governance milestone! OmniCorp transformed into an elite capital compounding machine.',
              detailedAnalysis: 'By tying executive compensation to Economic Value Added (EVA) and enforcing strict hurdle rate discipline, you eliminated corporate empire-building. OmniCorp\'s valuation multiple expanded from 12x to 24x earnings, generating billions in wealth for shareholders.',
              metricDeltas: { portfolioNpv: 35, blendedIrr: 4.8, capitalAllocated: 0, avgPayback: -0.5, freeCashFlowYear3: 18.0 },
              competitorReaction: 'Institutional funds made OmniCorp their top core holding in South Asian industrial portfolios.',
              stakeholderFeedback: 'Board Chairman: "You took a fragmented corporate spending process and built a world-class capital allocation engine. This is how 100-year industrial empires are built. Promoted to Group Chief Financial Officer!"',
              theorySnippet: {
                framework: 'Economic Value Added (EVA) & Capital Allocation Governance (Stern Stewart)',
                takeaway: 'A company only creates true economic wealth when its return on capital exceeds its cost of capital ($ROIC > WACC$). Aligning executive incentives with EVA permanently eliminates wasteful corporate empire-building.'
              }
            }
          },
          {
            id: 'k4-b',
            title: 'Abolish Financial Hurdle Rates and Distribute CapEx Based on Seniority',
            description: 'Dismantle the CapEx committee. Let division heads spend whatever they want based on who has been at the company the longest.',
            tradeOffs: {
              pros: ['Eliminates financial spreadsheet meetings and DCF analysis', 'Makes senior veteran managers feel respected'],
              cons: ['Guarantees immediate return of wasteful empire-building and value-destroying vanity projects', 'Destroys group ROIC within 24 months']
            },
            riskLevel: 'High',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Regression into bureaucratic decline. Capital discipline vanished.',
              detailedAnalysis: 'Removing objective hurdle rates allows corporate politics and favoritism to dictate investments. Within two years, capital was again misallocated to sub-hurdle vanity projects.',
              metricDeltas: { portfolioNpv: -45, blendedIrr: -10.0, capitalAllocated: 40, avgPayback: 3.5, freeCashFlowYear3: -24.0 },
              competitorReaction: 'Rivals surpassed OmniCorp\'s operational efficiency within 36 months.',
              stakeholderFeedback: 'Lead Analyst: "OmniCorp abandoned its capital allocation discipline. We are downgrading the stock from Buy to Underperform."'
            }
          },
          {
            id: 'k4-c',
            title: 'Use All Future Free Cash Flow to Acquire Unrelated Tech Startups at Bubble Valuations',
            description: 'Take the ₹56 Cr in annual cash flow and buy random AI and crypto startups at 50x revenue to look trendy.',
            tradeOffs: {
              pros: ['Gets company executives featured on trendy tech podcast covers', 'Generates temporary buzz among retail speculators'],
              cons: ['Severe mismatch with industrial conglomerate capabilities', 'Guaranteed multi-crore goodwill impairment write-downs when startup bubbles burst']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Goodwill impairment disaster. The acquired startups collapsed, destroying ₹140 Cr in capital.',
              detailedAnalysis: 'Pivoting from high-return industrial core competencies into speculative tech M&A at peak bubble multiples is classic corporate value destruction.',
              metricDeltas: { portfolioNpv: -60, blendedIrr: -16.0, capitalAllocated: 60, avgPayback: 7.0, freeCashFlowYear3: -35.0 },
              competitorReaction: 'Competitors picked up OmniCorp\'s core industrial market share while management was distracted.',
              stakeholderFeedback: 'Audit Committee: "We took a ₹120 Cr goodwill impairment write-off on failed tech acquisitions. The entire board is under shareholder revolt."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You led OmniCorp\'s Corporate Finance Committee through an advanced capital budgeting and portfolio allocation masterclass under strict ₹100 Crore capital rationing. By screening division proposals using the Profitability Index ($PI = NPV / CapEx$) and ruthlessly rejecting sub-hurdle legacy vanity projects (Project Steel, whose $IRR < WACC$), stress-testing cash flows against a 150 bps interest rate spike, de-risking high-uncertainty investments through staged Real Options (committing ₹15 Cr Phase 1 with Option to Expand), and institutionalizing Economic Value Added (EVA) executive governance, you generated ₹125 Cr in net shareholder value, achieved a portfolio blended IRR of 28.6%, and expanded Group ROIC from 11.2% to 19.8%.',
      whyItHappened: 'Capital allocation is the fundamental driver of long-term corporate valuation. Most conglomerates destroy shareholder wealth not because their operations are bad, but because executives allocate capital based on internal politics, family ties, or vanity empire-building, investing in projects where the return on capital is below the cost of capital ($ROIC < WACC$). You succeeded because you enforced uncompromising financial discipline: ranking by Profitability Index under constraints, modeling discount rate sensitivities, and recognizing that managerial flexibility has quantifiable option value.',
      conceptsApplied: [
        {
          name: 'Capital Rationing & The Profitability Index (PI)',
          formulaOrModel: 'Profitability Index (PI) = NPV / Initial Investment',
          explanation: 'When a firm has unlimited capital, it should accept all projects with $NPV > 0$. However, under budget constraints (Capital Rationing), the goal is to maximize total NPV per unit of constrained capital. Ranking by Profitability Index selected the combination (Robo + Chem) that delivered ₹86 Cr NPV on a ₹90 Cr deployment.',
          keyTakeaway: 'Under capital constraints, prioritize value density (PI) over raw project size.'
        },
        {
          name: 'The WACC Hurdle Rate & Economic Value Added (EVA)',
          formulaOrModel: 'EVA = Net Operating Profit After Tax (NOPAT) - (Invested Capital x WACC)',
          explanation: 'A project that generates an accounting profit but has an $IRR < WACC$ (like the 11.8% Steel project against a 12.5% WACC) actively destroys economic wealth every day it operates. EVA measures whether a project clears the cost of both debt and equity capital.',
          keyTakeaway: 'Never confuse accounting net income with economic value creation. If returns don\'t beat your cost of capital, you are losing money.'
        },
        {
          name: 'Real Options Valuation (ROV)',
          formulaOrModel: 'Real Option Value = Intrinsic Project DCF + Flexibility Value of Staged Commitment',
          explanation: 'Traditional DCF forces an artificial "invest all or nothing today" assumption. Phasing Project Chem into a ₹15 Cr pilot with an Option to Expand once environmental clearance arrived capped downside loss while preserving multi-decade upside.',
          keyTakeaway: 'Managerial flexibility to expand, delay, or abandon an uncertain project is a valuable financial option.'
        }
      ],
      expertExecutivePerspective: 'A Managing Director in Morgan Stanley\'s Global Mergers & Acquisitions and Capital Allocation Advisory would assess: "The courage to reject Project Steel in Round 1 was the defining executive moment. In corporate India, turning down the founder\'s brother-in-law\'s foundry upgrade requires immense professional spine. Backing that decision with unshakeable Profitability Index math and proving that Project Steel destroyed ₹6.8 Cr in economic value established finance as the strategic guardian of shareholder capital rather than a rubber-stamp department."',
      alternativePaths: [
        {
          choiceTitle: 'Political Capitulation: Funding Project Steel (Round 1)',
          counterfactualConsequence: 'Funding the legacy steel foundry to avoid family conflict would have committed ₹60 Cr to an 11.8% return project below your 12.5% WACC, dragging group ROIC below cost of capital, starving robotics, and cutting portfolio NPV by 55%.'
        },
        {
          choiceTitle: 'Un-Phased All-or-Nothing Chemical Gamble (Round 3)',
          counterfactualConsequence: 'Pouring the full ₹55 Cr into Project Chem without phased real options would have resulted in an immediate High Court environmental injunction, stranding ₹55 Cr in frozen concrete and wiping out corporate free cash flow.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Berkshire Hathaway (Warren Buffett & Charlie Munger)',
          caseStudySummary: 'Buffett famously shut down Berkshire\'s original textile mills when capital reinvestment generated returns below cost of capital, redirecting that cash flow into high-ROIC insurance float (GEICO) and consumer monopolies (See\'s Candies, Apple), creating the greatest capital compounding record in history.'
        },
        {
          company: 'Danaher Corporation (DBS Capital Allocation Engine)',
          caseStudySummary: 'Danaher built a $200B industrial and life sciences titan by strictly enforcing hurdle rates and the Danaher Business System (DBS), acquiring niche industrial businesses, stripping out low-return CapEx, and redeploying cash into high-margin biotechnology consumables.'
        }
      ]
    }
  }
];
