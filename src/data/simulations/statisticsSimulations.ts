import { Simulation } from '../../types';

export const statisticsSimulations: Simulation[] = [
  {
    id: 'sta-investigate-csat',
    subjectId: 'statistics',
    conceptId: 'correlation-vs-causation',
    relatedConcepts: ['Multiple Linear Regression', 'Pearson Correlation Matrix', 'Omitted Variable Bias', 'Descriptive Statistics & Outliers'],
    title: 'Investigate Declining Customer Satisfaction: Skyline Telecom CSAT Forensic',
    tagline: 'Analyze a live multivariate customer dataset, run correlation & regression models, and separate correlation from causation.',
    role: 'Lead Business Analyst & Decision Science Lead, Skyline Telecom',
    company: 'Skyline Cellular & Broadband Ltd.',
    industry: 'Telecommunications & Broadband Service Provider',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'Skyline Telecom serves 4.2 million fiber broadband and 5G mobile subscribers across western India. Over the last three quarters, Customer Satisfaction (CSAT) scores have slid from a stellar 82/100 to an alarming 58/100, while monthly subscriber churn jumped to 3.8%.',
      industryContext: 'Telecom customer experience is influenced by network latency, bill transparency, technical support response times, and contract pricing. Senior executives frequently fixate on the wrong variable due to misleading superficial correlations.',
      currentSituation: 'The CEO believes the issue is "slow broadband speed" and wants to spend ₹80 Cr upgrading fiber nodes. However, your analytics team has compiled a representative random sample of 20 customer cohort clusters (incorporating CSAT, Network Latency, Support Wait Time, Billing Errors, and Monthly Bill Amount). You must conduct rigorous statistical analysis to identify the true root causes before capital is wasted.'
    },
    objectives: [
      'Analyze the provided customer dataset to determine which independent variable has the highest explanatory power ($R^2$) on CSAT.',
      'Differentiate between superficial correlation ($r$) and true causative operational drivers.',
      'Deploy targeted operational interventions that restore CSAT from 58 to >75 within 6 months.'
    ],
    constraints: [
      'Analytics recommendations must be supported by empirical regression coefficients and p-values ($p < 0.05$).',
      'Total operational improvement budget capped at ₹15 Crore (avoiding the unneeded ₹80 Cr network CapEx).',
      'Cannot change published tariff plans without regulatory approval.'
    ],
    initialMetrics: [
      { key: 'csatScore', label: 'Average CSAT Score', value: 58.4, unit: '/100', isGoodWhenHigh: true, benchmark: 80.0, description: 'Customer satisfaction score measured via quarterly survey' },
      { key: 'subscriberChurn', label: 'Monthly Churn Rate', value: 3.8, unit: '%', isGoodWhenHigh: false, benchmark: 1.5, description: 'Percentage of subscribers canceling service monthly' },
      { key: 'networkLatency', label: 'Average Network Latency', value: 32, unit: 'ms', isGoodWhenHigh: false, benchmark: 25, description: 'Average ping time in milliseconds across network' },
      { key: 'supportHoldTime', label: 'Support Queue Hold Time', value: 14.8, unit: 'mins', isGoodWhenHigh: false, benchmark: 4.0, description: 'Average minutes customer waits to speak to human agent' },
      { key: 'billingDisputeRate', label: 'Billing Dispute Frequency', value: 12.4, unit: '%', isGoodWhenHigh: false, benchmark: 2.0, description: 'Percentage of customer invoices resulting in billing inquiries or complaints' }
    ],
    dataset: [
      { cohortId: 'C-101', region: 'Pune Central', sampleSize: 1250, avgCsat: 82, latencyMs: 24, supportHoldMin: 3.2, billingErrorPct: 1.2, monthlySpend: 799 },
      { cohortId: 'C-102', region: 'Mumbai South', sampleSize: 2400, avgCsat: 79, latencyMs: 28, supportHoldMin: 4.1, billingErrorPct: 1.8, monthlySpend: 1199 },
      { cohortId: 'C-103', region: 'Ahmedabad West', sampleSize: 1800, avgCsat: 74, latencyMs: 31, supportHoldMin: 5.5, billingErrorPct: 3.4, monthlySpend: 699 },
      { cohortId: 'C-104', region: 'Nagpur East', sampleSize: 950, avgCsat: 68, latencyMs: 38, supportHoldMin: 8.2, billingErrorPct: 5.1, monthlySpend: 599 },
      { cohortId: 'C-105', region: 'Nashik Industrial', sampleSize: 1100, avgCsat: 52, latencyMs: 26, supportHoldMin: 16.4, billingErrorPct: 14.2, monthlySpend: 899 },
      { cohortId: 'C-106', region: 'Surat Tech Park', sampleSize: 3100, avgCsat: 56, latencyMs: 22, supportHoldMin: 14.8, billingErrorPct: 12.8, monthlySpend: 1499 },
      { cohortId: 'C-107', region: 'Thane Urban', sampleSize: 2200, avgCsat: 61, latencyMs: 29, supportHoldMin: 12.1, billingErrorPct: 8.5, monthlySpend: 999 },
      { cohortId: 'C-108', region: 'Navi Mumbai', sampleSize: 1950, avgCsat: 54, latencyMs: 35, supportHoldMin: 17.5, billingErrorPct: 15.6, monthlySpend: 899 },
      { cohortId: 'C-109', region: 'Kolhapur', sampleSize: 850, avgCsat: 76, latencyMs: 34, supportHoldMin: 4.8, billingErrorPct: 2.1, monthlySpend: 499 },
      { cohortId: 'C-110', region: 'Vadodara North', sampleSize: 1400, avgCsat: 59, latencyMs: 30, supportHoldMin: 13.9, billingErrorPct: 11.2, monthlySpend: 799 },
      { cohortId: 'C-111', region: 'Pune IT Corridor', sampleSize: 4200, avgCsat: 48, latencyMs: 21, supportHoldMin: 19.2, billingErrorPct: 18.5, monthlySpend: 1299 },
      { cohortId: 'C-112', region: 'Aurangabad', sampleSize: 780, avgCsat: 71, latencyMs: 36, supportHoldMin: 6.2, billingErrorPct: 4.2, monthlySpend: 549 },
      { cohortId: 'C-113', region: 'Rajkot Commercial', sampleSize: 1320, avgCsat: 53, latencyMs: 33, supportHoldMin: 15.8, billingErrorPct: 13.9, monthlySpend: 849 },
      { cohortId: 'C-114', region: 'Mumbai Suburbs', sampleSize: 5100, avgCsat: 50, latencyMs: 27, supportHoldMin: 18.4, billingErrorPct: 17.1, monthlySpend: 999 },
      { cohortId: 'C-115', region: 'Solapur', sampleSize: 650, avgCsat: 78, latencyMs: 39, supportHoldMin: 3.9, billingErrorPct: 1.5, monthlySpend: 499 },
      { cohortId: 'C-116', region: 'Goa Coastal', sampleSize: 920, avgCsat: 65, latencyMs: 42, supportHoldMin: 7.8, billingErrorPct: 6.2, monthlySpend: 899 },
      { cohortId: 'C-117', region: 'Amravati', sampleSize: 540, avgCsat: 75, latencyMs: 35, supportHoldMin: 4.5, billingErrorPct: 2.8, monthlySpend: 449 },
      { cohortId: 'C-118', region: 'Jalgaon', sampleSize: 610, avgCsat: 73, latencyMs: 37, supportHoldMin: 5.1, billingErrorPct: 3.1, monthlySpend: 499 },
      { cohortId: 'C-119', region: 'Bhavnagar', sampleSize: 810, avgCsat: 67, latencyMs: 33, supportHoldMin: 8.9, billingErrorPct: 7.4, monthlySpend: 649 },
      { cohortId: 'C-120', region: 'Gandhinagar', sampleSize: 1650, avgCsat: 80, latencyMs: 25, supportHoldMin: 3.6, billingErrorPct: 1.4, monthlySpend: 1099 }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Phase 1: Descriptive Statistics & Bivariate Correlation Analysis',
        quarterOrTimeline: 'Sprint 1 - Correlation Matrix & Data Exploration',
        briefing: 'You load the dataset of 20 customer cohorts into your statistical software. The CEO insists: "Look at the big cities (Pune IT Corridor C-111, Mumbai Suburbs C-114)—they have the lowest CSAT (48 and 50)! That must be because tech workers hate slow latency. Let\'s order ₹80 Cr of fiber optics." You calculate the Pearson Correlation Matrix against CSAT:\n\n• CSAT vs Network Latency: $r = +0.28$ (p = 0.23, NOT statistically significant! Notice latency is actually LOWER in cities with low CSAT!)\n• CSAT vs Support Hold Time: $r = -0.91$ ($p < 0.001$, extremely strong negative correlation!)\n• CSAT vs Billing Error Rate: $r = -0.94$ ($p < 0.001$, extremely strong negative correlation!)\n• CSAT vs Monthly Spend: $r = -0.42$ ($p = 0.06$).',
        marketIntel: {
          headline: 'Statistical malpractice in telecom: Executives confuse high-traffic urban areas with latency defects',
          competitorMove: 'Competitors automated their billing invoice reconciliation, eliminating unexpected hidden charges.',
          macroEnvironment: 'When consumers receive an unexpected ₹400 surcharge on their monthly bill and wait 20 minutes on hold, CSAT collapses.',
          internalWhisper: 'Customer Service Lead: "Our call center staffing was cut 30% to save money, right when the new automated billing billing engine started generating rogue roaming fees."'
        },
        urgentQuestion: 'How do you interpret the statistical correlation matrix to the executive leadership committee?',
        choices: [
          {
            id: 't1-a',
            title: 'Present the Correlation Matrix: Reject the ₹80 Cr Fiber Upgrade & Prove Billing/Support Dominance',
            description: 'Show the data: Network latency has a weak positive correlation ($r = +0.28, p > 0.05$), proving that internet speed is NOT the driver of dissatisfaction (in fact, Pune IT corridor has blazing 21ms ping but the lowest CSAT!). In contrast, Billing Errors ($r = -0.94$) and Support Hold Times ($r = -0.91$) explain over 88% of the variance in customer dissatisfaction.',
            tradeOffs: {
              pros: ['Saves the company ₹80 Cr in wasted capital expenditure on unnecessary fiber optics', 'Pinpoints the exact operational bottleneck: billing software bugs and call center understaffing'],
              cons: ['Directly contradicts the CEO\'s gut intuition in front of the executive committee', 'Requires educating non-technical executives on correlation coefficients ($r$) and p-values']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Statistical clarity saved ₹80 Crore! The Board rejected the unnecessary network upgrade.',
              detailedAnalysis: 'A textbook example of data-driven leadership. By demonstrating that latency was statistically uncorrelated with dissatisfaction, you prevented catastrophic misallocation of capital. Focus shifted entirely to fixing billing bugs and support wait times.',
              metricDeltas: { csatScore: 6.2, subscriberChurn: -0.6, networkLatency: 0, supportHoldTime: -2.1, billingDisputeRate: -1.8 },
              competitorReaction: 'Competitors who spent millions on speed advertising wondered why Skyline\'s customer sentiment improved without network CapEx.',
              stakeholderFeedback: 'Chief Commercial Officer: "The scatter plot showing low CSAT in areas with 21ms ping was undeniable. You saved us ₹80 Cr of pointless CapEx."',
              theorySnippet: {
                framework: 'Pearson Correlation Coefficient (r) & Statistical Significance (p-value)',
                takeaway: 'Correlation measures linear association, but must always be paired with p-values to rule out random noise ($p < 0.05$). Never commit capital based on executive gut assumptions that contradict the empirical correlation matrix.'
              }
            }
          },
          {
            id: 't1-b',
            title: 'Capitulate to the CEO: Agree that Network Latency is the Primary Culprit',
            description: 'Ignore the statistical data. Tell the CEO he is right, approve the ₹80 Cr fiber procurement, and ignore billing complaints.',
            tradeOffs: {
              pros: ['Pleases the CEO\'s ego and avoids awkward statistical disagreements', 'Vendors are thrilled with the ₹80 Cr fiber purchase contract'],
              cons: ['Network latency drops from 32ms to 24ms, but CSAT continues to crash because customers are still being overbilled and kept on hold for 18 minutes', 'Burns ₹80 Cr of corporate cash reserves']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Fiasco. Spent ₹80 Cr on fiber cables, and CSAT plunged to 51.',
              detailedAnalysis: 'Improving an operational dimension that is already satisfactory while ignoring the active irritants (billing errors) does zero to improve customer satisfaction. Churn reached 4.8%.',
              metricDeltas: { csatScore: -7.4, subscriberChurn: 1.0, networkLatency: -8, supportHoldTime: 1.5, billingDisputeRate: 2.2 },
              competitorReaction: 'Competitors poached your frustrated subscribers with "Zero Hidden Fees" guarantees.',
              stakeholderFeedback: 'Customer on Social Media: "Skyline\'s internet is fast, but they overcharge me by ₹350 every single month and keep me on hold for 25 minutes. Switching to Airtel today."'
            }
          },
          {
            id: 't1-c',
            title: 'Delete Outlier Data Points (Pune IT & Mumbai Suburbs) to Make the Data Look Better',
            description: 'Arbitrarily delete the 4 largest cohorts (representing 14,000 customers) as "statistical outliers" because their CSAT is embarrassing, reporting an artificial 76 CSAT to the Board.',
            tradeOffs: {
              pros: ['Temporarily makes reported quarterly metrics look healthy', 'Stops the Board from asking uncomfortable customer service questions'],
              cons: ['Gross violation of statistical data integrity and professional ethics', 'Masks the reality that the company\'s highest-paying urban customers are fleeing']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Whistleblower discovery. Fabricating statistical sample data triggered internal audit investigation.',
              detailedAnalysis: 'Deleting legitimate data points because they contradict desired outcomes is statistical falsification. The audit committee discovered the omission, triggering executive disciplinary hearings.',
              metricDeltas: { csatScore: -12.0, subscriberChurn: 1.8, networkLatency: 0, supportHoldTime: 3.2, billingDisputeRate: 4.5 },
              competitorReaction: 'Competitors capitalized on Skyline\'s leadership crisis.',
              stakeholderFeedback: 'Audit Committee Chair: "Removing our largest urban cohorts to fake a 76 CSAT is an outrageous breach of data ethics."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Phase 2: Multiple Linear Regression & Multicollinearity Testing',
        quarterOrTimeline: 'Sprint 2 - Multivariate Econometric Modeling',
        briefing: 'You run a Multiple Linear Regression model with CSAT as the dependent variable ($Y$) against Support Hold Time ($X_1$) and Billing Error Rate ($X_2$):\n\nModel: $\\text{CSAT} = \\beta_0 + \\beta_1(\\text{HoldTime}) + \\beta_2(\\text{BillingError}) + \\epsilon$\n\nResults:\n• Intercept ($\\beta_0$): $88.42$ ($p < 0.001$)\n• Hold Time ($\\beta_1$): $-0.85$ ($t = -3.42, p = 0.003$)\n• Billing Error Rate ($\\beta_2$): $-1.38$ ($t = -5.18, p < 0.001$)\n• Model $R^2$: $0.914$ (Explains 91.4% of all variance in customer satisfaction!)\n• F-statistic: $90.5$ ($p < 0.0001$).\n\nThe regression proves: For every 1% increase in billing dispute rate, CSAT drops by 1.38 points. For every minute spent on hold, CSAT drops by 0.85 points.',
        marketIntel: {
          headline: 'Econometric regression reveals: Billing disputes trigger 1.6x more customer damage than hold times',
          competitorMove: 'Top telecoms deploy AI real-time dispute waivers for any bill error under ₹500.',
          macroEnvironment: 'Variance Inflation Factor (VIF = 2.1) confirms low multicollinearity between hold time and billing disputes, validating that both are independent operational drivers.',
          internalWhisper: 'Lead Data Scientist: "Billing errors are the root trigger; when customers see an error, they call support, which causes long hold times, compounding the frustration."'
        },
        urgentQuestion: 'How do you formulate an operational intervention strategy based on the regression coefficients ($\beta_1, \beta_2$)?',
        choices: [
          {
            id: 't2-a',
            title: 'The Dual Remediation Engine: Fix Automated Billing Engine (₹6 Cr) + AI Self-Serve Resolution (₹5 Cr)',
            description: 'Deploy ₹6 Cr to patch the automated billing software bug (reconciling international roaming and tax calculation errors) to cut dispute rates below 2%, and deploy ₹5 Cr for 1-click self-serve automated bill dispute credits in the mobile app, slashing call center hold queue times from 14.8 mins to under 3.5 mins.',
            tradeOffs: {
              pros: ['Directly attacks the two statistically proven root causes identified by the regression model ($R^2 = 0.91$)', 'Delivers immediate projected CSAT rebound from 58 to >76 points based on regression coefficients'],
              cons: ['Total cost of ₹11 Cr required from operational budget', 'Requires cross-functional coordination between IT billing and call center teams']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Empirical model validated! Billing errors collapsed to 1.8%, hold times dropped to 3.2 mins, and CSAT soared to 77.2.',
              detailedAnalysis: 'Using econometric regression coefficients ($\beta_1 = -0.85, \beta_2 = -1.38$) allowed leadership to accurately forecast the exact return on operational investment. The intervention hit both critical variables simultaneously, causing churn to drop by half.',
              metricDeltas: { csatScore: 18.8, subscriberChurn: -1.6, networkLatency: 0, supportHoldTime: -11.6, billingDisputeRate: -10.6 },
              competitorReaction: 'Competitors were stunned as Skyline\'s churn rate dropped from 3.8% to 1.6%.',
              stakeholderFeedback: 'Customer Support Director: "When we fixed the billing engine bugs, 60% of our incoming call volume vanished overnight! Our hold times plummeted to 3 minutes."',
              theorySnippet: {
                framework: 'Multiple Linear Regression & Coefficient Interpretation',
                takeaway: 'Regression coefficients quantify the precise marginal impact of each independent variable while holding other variables constant. $R^2 = 0.91$ proved that 91% of customer sentiment was driven by these two operational factors.'
              }
            }
          },
          {
            id: 't2-b',
            title: 'Hire 1,000 Extra Call Center Agents to Answer Phones Faster Without Fixing Billing',
            description: 'Spend ₹18 Cr hiring massive armies of temporary human phone operators to answer calls in 30 seconds, leaving the broken billing engine unpatched.',
            tradeOffs: {
              pros: ['Slashes hold times quickly by sheer human brute force', 'Easy to execute without touching IT code'],
              cons: ['Does zero to fix the underlying billing errors; 250,000 customers still receive incorrect charges every month', 'Continuous high recurring operational expense (OpEx) that bleeds cash']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Expensive partial band-aid. Hold times dropped, but customers remained furious about being overcharged.',
              detailedAnalysis: 'Treating the symptom (hold time) while ignoring the root cause (billing errors) provides diminished returns. As the regression showed ($\beta_2 = -1.38$), billing errors carry higher negative utility than hold time.',
              metricDeltas: { csatScore: 5.2, subscriberChurn: -0.4, networkLatency: 0, supportHoldTime: -10.5, billingDisputeRate: 1.2 },
              competitorReaction: 'Competitors pointed out that Skyline was still overcharging users.',
              stakeholderFeedback: 'Customer Review: "The agent picked up in 30 seconds, which was nice, but they couldn\'t explain why my bill was ₹400 higher than my contract."'
            }
          },
          {
            id: 't2-c',
            title: 'Shut Down the Call Center Completely & Force Customers to Use a Broken Rule-Based Chatbot',
            description: 'Disable phone support to force hold time to "zero" on company reports, forcing all customers to talk to an unhelpful automated bot.',
            tradeOffs: {
              pros: ['Reduces call center operational costs to zero', 'Technically eliminates "phone hold queue time" metric on paper'],
              cons: ['Infuriates customers who cannot get billing errors resolved by a dumb bot', 'Triggers massive viral social media backlash and 40% surge in cancellations']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Customer revolt. The bot enraged subscribers; churn spiked to 6.2%.',
              detailedAnalysis: 'Manipulating metric definitions (eliminating phone hold time by eliminating phone support) is a classic toxic KPI distortion. Unresolved billing complaints led to mass cancellations.',
              metricDeltas: { csatScore: -16.0, subscriberChurn: 2.4, networkLatency: 0, supportHoldTime: -14.8, billingDisputeRate: 6.5 },
              competitorReaction: 'Airtel and Jio ran ads: "Talk to a real human in 60 seconds—switch from Skyline today."',
              stakeholderFeedback: 'Consumer Forum Petition: "Skyline has disabled customer support to trap users in rogue billing charges. 18,000 subscribers sign class action petition."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Phase 3: Hypothesis Testing & Evaluating the Post-Intervention Impact (Paired t-Test)',
        quarterOrTimeline: 'Sprint 3 - Verification & Inferential Statistics',
        briefing: 'Six months after deploying the billing patch and self-serve app, your team conducts a randomized follow-up survey of 1,000 subscribers across the same 20 cohort regions. The new sample mean CSAT is $\\bar{X}_2 = 78.2$ ($s_2 = 6.4$), compared to the pre-intervention baseline mean $\\bar{X}_1 = 58.4$ ($s_1 = 8.2$). A skeptical board member asks: "How do we know this 19.8-point jump isn\'t just random seasonal sampling noise?"',
        marketIntel: {
          headline: 'Statistical verification in management: The power of Two-Sample t-Tests and 95% Confidence Intervals',
          competitorMove: 'Leading tech firms mandate statistical hypothesis testing before declaring any business initiative a success.',
          macroEnvironment: 'Managers must test the Null Hypothesis ($H_0: \\mu_2 - \\mu_1 = 0$) against the Alternative ($H_1: \\mu_2 > \\mu_1$).',
          internalWhisper: 'Statistician: "The t-statistic is $t = 60.1$ with degrees of freedom $df = 1,998$. The p-value is effectively $p = 0.0000000001$. The 95% Confidence Interval for the improvement is $[19.14, 20.46]$ points."'
        },
        urgentQuestion: 'How do you formulate the hypothesis test presentation to definitively satisfy the Board?',
        choices: [
          {
            id: 't3-a',
            title: 'Present the Two-Sample t-Test ($t = 60.1, p < 0.001$) & 95% Confidence Interval ($[19.14, 20.46]$)',
            description: 'Demonstrate inferential proof: Reject the Null Hypothesis ($H_0$) with 99.999% statistical confidence ($p < 0.0001$). Show that the 19.8-point CSAT improvement has a razor-thin margin of error of $\\pm 0.66$ points, proving beyond mathematical doubt that the operational intervention caused the turnaround.',
            tradeOffs: {
              pros: ['Provides irrefutable scientific proof of business impact that silences skeptical directors', 'Establishes gold-standard inferential statistics as the default decision language of the company'],
              cons: ['Requires walking non-technical directors through the difference between sample statistics and population parameters', 'Must explain Type I error ($\\alpha = 0.05$) vs Type II error ($\\beta$)']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Unanimous Board praise! The mathematical proof was unshakeable.',
              detailedAnalysis: 'Using formal hypothesis testing ($t$-test, $p$-value, and 95% confidence intervals) elevates business analytics from subjective storytelling to empirical science. The Board formally recognized the analytics team for saving ₹80 Cr in wasted fiber spend while delivering a proven 19.8-point CSAT turnaround.',
              metricDeltas: { csatScore: 19.8, subscriberChurn: -1.8, networkLatency: 0, supportHoldTime: -11.5, billingDisputeRate: -10.5 },
              competitorReaction: 'Competitors acknowledged Skyline\'s operational turnaround in quarterly earnings analysis.',
              stakeholderFeedback: 'Skeptical Board Member: "When you showed that the probability of this result being random noise was less than 1 in 10 billion ($p < 0.0001$), all my doubts vanished. Outstanding scientific rigor."',
              theorySnippet: {
                framework: 'Two-Sample Student t-Test & Null Hypothesis Testing (H0 vs H1)',
                takeaway: 'Hypothesis testing separates real operational signals from random sampling variance. A p-value < 0.05 provides the statistical threshold to reject the null hypothesis and confirm causality.'
              }
            }
          },
          {
            id: 't3-b',
            title: 'Shrug Shoulders: "Nobody Really Understands Statistics, Just Trust Us It Worked"',
            description: 'Refuse to calculate hypothesis tests or p-values. Dismiss the board member\'s question as academic hair-splitting.',
            tradeOffs: {
              pros: ['Avoids doing any statistical calculations', 'Simple informal presentation'],
              cons: ['Eats away at executive credibility and leaves doubts about whether the numbers were cherry-picked', 'Fails to institutionalize data-driven decision-making']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Skepticism lingered. The board withheld approval for future data science budgets.',
              detailedAnalysis: 'Dismissing statistical rigor when questioned by stakeholders weakens confidence. In the absence of inferential proof, critics assumed the improvement was temporary festive goodwill.',
              metricDeltas: { csatScore: 4.0, subscriberChurn: -0.2, networkLatency: 0, supportHoldTime: -2.0, billingDisputeRate: -2.0 },
              competitorReaction: 'Competitors continued to challenge your customer claims.',
              stakeholderFeedback: 'Board Chairman: "If you cannot mathematically prove your results with confidence intervals, we cannot allocate capital based on your claims."'
            }
          },
          {
            id: 't3-c',
            title: 'Cherry-Pick Only the Single Best Cohort (Gandhinagar C-120: CSAT 86) to Boast',
            description: 'Hide the 1,000-subscriber aggregate dataset and present only Gandhinagar\'s isolated 86 CSAT score as representing the entire company.',
            tradeOffs: {
              pros: ['Shows an impressive individual headline number (86 CSAT)', 'Easy to put on marketing billboards'],
              cons: ['Classic survivorship and selection bias; misleading to the Board of Directors', 'Exposed as soon as regional churn data is reviewed']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Loss of credibility. Directors saw through the cherry-picked selection bias.',
              detailedAnalysis: 'Presenting a single non-representative outlier instead of the population mean is statistical malpractice. Directors demanded an external audit of all analytics reports.',
              metricDeltas: { csatScore: -4.0, subscriberChurn: 0.5, networkLatency: 0, supportHoldTime: 0.0, billingDisputeRate: 0.0 },
              competitorReaction: 'Competitors pointed out the selection bias in industry press.',
              stakeholderFeedback: 'Audit Committee: "Gandhinagar represents 2% of our customers. Why are you presenting an outlier as if it represents the company?"'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Phase 4: Institutionalizing Decision Science & The Predictive Churn Model',
        quarterOrTimeline: 'Sprint 4 - Predictive Analytics & Machine Learning',
        briefing: 'Having proven the power of descriptive and inferential statistics, you are tasked with building a permanent "Predictive Churn Early-Warning System". Your team trains a logistic regression classification model ($P(\\text{Churn}) = \\frac{1}{1 + e^{-z}}$) to score every subscriber daily based on billing dispute history and support queue interactions.',
        marketIntel: {
          headline: 'Predictive churn modeling cuts telecom customer replacement costs by $450M annually',
          competitorMove: 'Leading subscription platforms intervene automatically with proactive bill credits BEFORE customers call to cancel.',
          macroEnvironment: 'Moving from reactive descriptive reporting to proactive predictive modeling is the highest tier of organizational data maturity.',
          internalWhisper: 'Head of Data Engineering: "The logistic regression model achieves an Area Under the ROC Curve (AUC-ROC) of 0.89, with 84% sensitivity and 88% specificity."'
        },
        urgentQuestion: 'How do you deploy this predictive statistical model into live operations?',
        choices: [
          {
            id: 't4-a',
            title: 'Deploy Automated Real-Time Intervention for High-Risk Churn Scores (Probability > 0.70)',
            description: 'Integrate the logistic model with the CRM: whenever a subscriber\'s predicted churn probability crosses 0.70 (due to a billing error or support delay), automatically trigger a personalized SMS notification with an instant ₹250 courtesy credit and route their next call to a senior concierge agent with zero hold time.',
            tradeOffs: {
              pros: ['Intervenes proactively before the customer reaches the point of defection, cutting churn by another 45%', 'High model precision (84%) prevents giving wasteful credits to un-frustrated customers'],
              cons: ['Requires ₹2.2M monthly budget for courtesy credits', 'Requires continuous monitoring to prevent model concept drift over time']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Predictive analytics triumph! Monthly churn dropped to an all-time low of 1.1%, and CSAT crossed 84.',
              detailedAnalysis: 'Transforming statistical models into automated real-time operational interventions closes the loop between data science and commercial value. Skyline became the benchmark for data-driven customer retention in South Asia.',
              metricDeltas: { csatScore: 6.8, subscriberChurn: -0.5, networkLatency: 0, supportHoldTime: -1.2, billingDisputeRate: -1.0 },
              competitorReaction: 'Competitors were baffled as their customer poaching campaigns stopped working completely.',
              stakeholderFeedback: 'Group CEO: "You saved us ₹80 Cr in network CapEx, used linear regression to find our real problems, proved your turnaround with t-tests, and built an AI predictive churn engine. You are promoted to Chief Data & Analytics Officer!"',
              theorySnippet: {
                framework: 'Logistic Regression & Receiver Operating Characteristic (ROC-AUC)',
                takeaway: 'Logistic regression models bounded probabilities ($0 \\le P \\le 1$) for binary outcomes. Setting optimal decision thresholds balances false positives (Type I) and false negatives (Type II) to maximize commercial ROI.'
              }
            }
          },
          {
            id: 't4-b',
            title: 'Keep the Predictive Model as a Theoretical Research Paper on an Internal Wiki',
            description: 'Publish a beautiful PDF report about the logistic model on the company intranet, but never connect it to the live CRM or customer service systems.',
            tradeOffs: {
              pros: ['Zero software integration effort or credit budgets', 'Safe academic exercise'],
              cons: ['Generates zero commercial business value', 'Subscribers continue to churn while data scientists admire their AUC curves']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Academic shelfware. Great math, zero business impact.',
              detailedAnalysis: 'Data science without operational integration is vanity. The model sat on an intranet page while customers continued to churn.',
              metricDeltas: { csatScore: 0.0, subscriberChurn: 0.0, networkLatency: 0, supportHoldTime: 0.0, billingDisputeRate: 0.0 },
              competitorReaction: 'Competitors deployed active machine learning while Skyline wrote internal whitepapers.',
              stakeholderFeedback: 'Customer Support Lead: "I don\'t care about your AUC curve if our agents don\'t know who to call."'
            }
          },
          {
            id: 't4-c',
            title: 'Spam Every Single Subscriber with ₹500 Free Credits Regardless of Model Score',
            description: 'Ignore the predictive model. Hand out ₹500 credits to all 4.2 million subscribers every month.',
            tradeOffs: {
              pros: ['Everyone loves free money on Day 1', 'Zero statistical modeling required'],
              cons: ['Costs an astronomical ₹210 Cr per month in lost revenue, completely bankrupting the company within 60 days', 'Subsidizes millions of perfectly happy users who had zero intention of leaving']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Financial insolvency. Burned ₹210 Cr in a single month.',
              detailedAnalysis: 'Failing to target retention spending with statistical precision leads to financial bleeding. OmniCorp was nearly bankrupted by the untargeted giveaways.',
              metricDeltas: { csatScore: 2.0, subscriberChurn: -0.2, networkLatency: 0, supportHoldTime: 0.0, billingDisputeRate: 0.0 },
              competitorReaction: 'Competitors watched Skyline burn through its entire cash reserves.',
              stakeholderFeedback: 'CFO: "You handed out ₹210 Cr of free credits to customers who were already happy! This is financial madness."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You led a masterclass in business statistics and decision science at Skyline Telecom, turning around a collapsing customer satisfaction crisis. By analyzing a live 20-cohort multivariate dataset to calculate the Pearson Correlation Matrix, you debunked the CEO\'s gut assumption that network latency drove dissatisfaction ($r = +0.28, p > 0.05$), saving ₹80 Cr in wasted fiber CapEx. By running a Multiple Linear Regression model ($R^2 = 0.914$), you isolated Billing Errors ($\beta_2 = -1.38$) and Support Hold Times ($\beta_1 = -0.85$) as the true causative drivers, deploying an ₹11 Cr operational fix. You proved the turnaround to the Board using a Two-Sample t-Test ($t = 60.1, p < 0.0001, CI: [19.14, 20.46]$) and built an automated predictive churn logistic regression engine (AUC = 0.89), reducing monthly churn to 1.1% and elevating CSAT to 84.',
      whyItHappened: 'In business, correlation is routinely confused with causation, and senior executives frequently fall victim to confirmation bias—committing millions of dollars to pet theories that contradict empirical data. Effective managers know how to look beneath surface metrics: examining scatter plots, testing for statistical significance ($p < 0.05$), checking for omitted variable bias and multicollinearity, quantifying marginal impact through regression coefficients, and proving impact through inferential hypothesis testing.',
      conceptsApplied: [
        {
          name: 'Correlation vs Causation & Omitted Variable Bias',
          formulaOrModel: 'r = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sqrt{\\sum(X-\\bar{X})^2 \\sum(Y-\\bar{Y})^2}}',
          explanation: 'Low latency correlated with low CSAT only because high-density tech hubs had both modern fiber AND understaffed call centers with buggy billing software. Bivariate correlation without controlling for other variables generates disastrously misleading conclusions.',
          keyTakeaway: 'Never assume that two variables moving together have a cause-and-effect relationship; always test multivariate models to control for confounding variables.'
        },
        {
          name: 'Multiple Linear Regression & The Coefficient of Determination (R²)',
          formulaOrModel: 'Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\epsilon; \\quad R^2 = 1 - \\frac{SS_{res}}{SS_{tot}}',
          explanation: 'The regression model explained 91.4% of the variance ($R^2 = 0.914$) in customer satisfaction, proving that Billing Errors ($\beta = -1.38$) exerted 1.6x more negative drag on customer sentiment than call center hold time ($\beta = -0.85$).',
          keyTakeaway: 'Regression coefficients give managers the exact marginal utility of operational levers, enabling precision capital allocation.'
        },
        {
          name: 'Two-Sample Student t-Test & p-Value Interpretation',
          formulaOrModel: 't = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}; \\quad p < 0.001',
          explanation: 'Testing the Null Hypothesis ($H_0: \\mu_1 = \\mu_2$) yielded a $t$-statistic of 60.1, indicating that the probability of the 19.8-point CSAT improvement occurring by random sampling chance was less than 1 in 10 billion ($p < 0.0001$).',
          keyTakeaway: 'Never declare victory on a business initiative without proving statistical significance against the null hypothesis.'
        }
      ],
      expertExecutivePerspective: 'A Chief Data Officer or Senior Partner in Bain & Company\'s Advanced Analytics Practice would note: "The defining moment of this simulation was Phase 1: standing firm in the boardroom and refusing to let the CEO spend ₹80 Cr on fiber optic nodes. Many analysts lack the courage to tell a senior executive that their gut instinct is mathematically wrong. Backing that stance with the Pearson correlation matrix and proving that Pune IT Corridor had both 21ms ping and 48 CSAT saved the company from a disastrous capital mistake."',
      alternativePaths: [
        {
          choiceTitle: 'Approving the ₹80 Cr Fiber Upgrade (Phase 1)',
          counterfactualConsequence: 'If you had approved the fiber upgrade to please the CEO, network latency would have dropped from 32ms to 24ms, but CSAT would have continued to crash because customers were still being overcharged and kept on hold for 15 minutes, wasting ₹80 Cr.'
        },
        {
          choiceTitle: 'Deleting Urban Outlier Cohorts (Phase 1)',
          counterfactualConsequence: 'Deleting the 4 largest urban cohorts to make reported CSAT look artificially high would have constituted statistical falsification. The audit committee would have uncovered the deception, resulting in executive termination and reputational disgrace.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Netflix Churn Analytics & Recommendation Engine',
          caseStudySummary: 'Netflix uses multiple regression and survival analysis across billions of streaming viewing minutes, discovering that streaming buffering latency was far less correlated with subscriber churn than whether a user discovered 3 engaging shows within their first 14 days of sign-up.'
        },
        {
          company: 'Target Customer Lifetime Analytics',
          caseStudySummary: 'Target statistical analysts used multivariate predictive modeling on purchase histories to identify life transitions (such as pregnancy) with 95% statistical confidence, allowing them to send personalized baby product coupons before competitors even knew the customer was expecting.'
        }
      ]
    }
  },
  {
    id: 'sta-ab-test-campaign',
    subjectId: 'statistics',
    conceptId: 'hypothesis-testing-p-value',
    relatedConcepts: ['A/B Testing & Controlled Experiments', 'Type I (Alpha) vs Type II (Beta) Errors', 'Statistical Power & Minimum Sample Size', 'Avoiding p-Hacking & Peeking Bias'],
    title: 'Make a Decision Using Data: PulsePay A/B Checkout Experiment',
    tagline: 'Design an A/B test, calculate sample size power, avoid p-hacking and peeking bias, and evaluate statistical significance.',
    role: 'Head of Experimentation & Conversion Optimization, PulsePay Fintech',
    company: 'PulsePay Digital Payments',
    industry: 'Fintech / Digital Payments & Payment Gateway Checkout',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'PulsePay processes 12 million checkout transactions monthly for 25,000 e-commerce merchants across India, taking a 1.8% transaction fee on completed checkouts.',
      industryContext: 'Checkout conversion rate (the percentage of shoppers who complete payment after initiating checkout) is the holy grail of digital payments. A 0.5% lift in checkout conversion generates ₹18 Cr ($2.2M) in annualized revenue for PulsePay.',
      currentSituation: 'Your growth team designed a new checkout flow ("Flow B: 1-Click Biometric UPI Autopay") to replace the legacy 3-screen OTP flow ("Flow A: Control"). You have run a 14-day randomized controlled trial on 100,000 visitors per variant. Initial telemetry shows Flow B has a 3.42% conversion rate vs Flow A at 3.15% (an apparent +27 bps lift). However, the team is arguing over whether the result is statistically meaningful, whether sample size power was met, and whether someone engaged in "peeking bias".'
    },
    objectives: [
      'Evaluate whether the observed 27 bps conversion lift is statistically significant ($p < 0.05$) or random noise.',
      'Calculate statistical power ($1 - \\beta$) to confirm the test was not underpowered (avoiding Type II errors).',
      'Defend experimentation integrity by identifying and eliminating p-hacking, peeking bias, and novelty effect.'
    ],
    constraints: [
      'Cannot ship Flow B to 100% of merchant traffic without confirming a 95% Confidence Interval that excludes zero.',
      'Must ensure payment gateway API error rate remains below 0.05%.',
      'The Board demands an exact annualized revenue projection based on the lower bound of the confidence interval.'
    ],
    initialMetrics: [
      { key: 'convRateA', label: 'Control (Flow A) Conversion', value: 3.15, unit: '%', isGoodWhenHigh: true, benchmark: 3.15, description: 'Baseline conversion rate across 100,000 control visitors' },
      { key: 'convRateB', label: 'Variant (Flow B) Conversion', value: 3.42, unit: '%', isGoodWhenHigh: true, benchmark: 3.40, description: 'Observed conversion rate across 100,000 variant visitors' },
      { key: 'zScore', label: 'Two-Proportion Z-Score', value: 3.41, unit: '', isGoodWhenHigh: true, benchmark: 1.96, description: 'Test statistic for difference between two independent proportions' },
      { key: 'pValue', label: 'p-Value', value: 0.00065, unit: '', isGoodWhenHigh: false, benchmark: 0.05, description: 'Probability of observing this difference by random luck if H0 is true' },
      { key: 'annualRevenueImpact', label: 'Projected Annual Revenue Lift', value: 9.72, unit: '₹ Cr', format: 'currency', isGoodWhenHigh: true, benchmark: 10.0, description: 'Incremental net revenue generated by the conversion lift' }
    ],
    dataset: [
      { day: 1, variantA_visitors: 7140, variantA_conversions: 221, variantB_visitors: 7145, variantB_conversions: 268, pValue_daily: 0.038 },
      { day: 2, variantA_visitors: 7120, variantA_conversions: 230, variantB_visitors: 7130, variantB_conversions: 254, pValue_daily: 0.042 },
      { day: 3, variantA_visitors: 7150, variantA_conversions: 218, variantB_visitors: 7160, variantB_conversions: 242, pValue_daily: 0.058 },
      { day: 4, variantA_visitors: 7130, variantA_conversions: 228, variantB_visitors: 7140, variantB_conversions: 239, pValue_daily: 0.081 },
      { day: 5, variantA_visitors: 7145, variantA_conversions: 222, variantB_visitors: 7150, variantB_conversions: 248, pValue_daily: 0.065 },
      { day: 6, variantA_visitors: 7160, variantA_conversions: 229, variantB_visitors: 7155, variantB_conversions: 251, pValue_daily: 0.052 },
      { day: 7, variantA_visitors: 7135, variantA_conversions: 224, variantB_visitors: 7140, variantB_conversions: 240, pValue_daily: 0.048 },
      { day: 8, variantA_visitors: 7150, variantA_conversions: 225, variantB_visitors: 7150, variantB_conversions: 244, pValue_daily: 0.035 },
      { day: 9, variantA_visitors: 7140, variantA_conversions: 220, variantB_visitors: 7145, variantB_conversions: 238, pValue_daily: 0.028 },
      { day: 10, variantA_visitors: 7130, variantA_conversions: 227, variantB_visitors: 7135, variantB_conversions: 241, pValue_daily: 0.019 },
      { day: 11, variantA_visitors: 7155, variantA_conversions: 231, variantB_visitors: 7160, variantB_conversions: 246, pValue_daily: 0.012 },
      { day: 12, variantA_visitors: 7140, variantA_conversions: 226, variantB_visitors: 7145, variantB_conversions: 245, pValue_daily: 0.006 },
      { day: 13, variantA_visitors: 7150, variantA_conversions: 224, variantB_visitors: 7150, variantB_conversions: 243, pValue_daily: 0.002 },
      { day: 14, variantA_visitors: 7155, variantA_conversions: 225, variantB_visitors: 7195, variantB_conversions: 241, pValue_daily: 0.00065 }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Phase 1: The Peeking Problem & Evaluating Test Significance',
        quarterOrTimeline: 'Sprint 1 - The Statistical Audit',
        briefing: 'You examine the daily experimentation log. On Day 1, the growth hacker saw $p = 0.038$ and wanted to stop the test immediately and declare victory. On Day 4, the p-value drifted up to $p = 0.081$ (non-significant!). By Day 14, cumulative visitors reached 100,000 per variant, yielding:\n\n• Flow A: $n_1 = 100,000, X_1 = 3,150$ ($p_1 = 3.15\\%$)\n• Flow B: $n_2 = 100,000, X_2 = 3,420$ ($p_2 = 3.42\\%$)\n• Difference: $+0.27\\%$ (+27 basis points)\n• Standard Error: $SE = \\sqrt{\\frac{p_1(1-p_1)}{n_1} + \\frac{p_2(1-p_2)}{n_2}} = 0.000791$\n• Z-score: $Z = \\frac{0.0342 - 0.0315}{0.000791} = 3.41$\n• p-value: $p = 0.00065$ ($Z > 3.29$, statistically significant at $\\alpha = 0.001$).',
        marketIntel: {
          headline: 'Tech study: 60% of A/B test "wins" published by tech startups are false positives caused by continuous peeking',
          competitorMove: 'Stripe and Adyen enforce fixed sample size horizons before examining test metrics to prevent false positives.',
          macroEnvironment: 'Stopping a test the moment $p < 0.05$ inflates the true false positive rate from 5% to over 30%.',
          internalWhisper: 'Growth Hacker: "Why did you make us wait 14 days when we hit p < 0.05 on Day 1? We could have shipped this two weeks ago!"'
        },
        urgentQuestion: 'How do you defend waiting for the full 14-day sample size against "Peeking Bias"?',
        choices: [
          {
            id: 'b1-a',
            title: 'Explain "Peeking Bias" & The Law of the Iterated Logarithm',
            description: 'Show why early peeking produces false positives: random early noise frequently crosses $p < 0.05$ temporarily (as happened on Day 1), before regressing to the mean (Day 4 rose to $p = 0.081$). Waiting for the predetermined sample size of 100,000 visitors ensured statistical power ($1 - \\beta = 0.88$) and protected the company from shipping a false-positive illusion.',
            tradeOffs: {
              pros: ['Educates the growth team on rigorous scientific method, eliminating future false-positive rollouts', 'Proves beyond doubt that the final Day-14 result ($Z = 3.41, p = 0.00065$) is an authentic, robust victory'],
              cons: ['Requires patience from impatient product managers who want to ship fast', 'Delayed rollout by 12 days to collect valid data']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Scientific victory! The product team recognized the dangers of peeking bias.',
              detailedAnalysis: 'Continuous monitoring without adjusting alpha thresholds is the most common cause of failed A/B tests. Demonstrating how Day 4 drifted to $p = 0.081$ proved that early peeking would have misled the company.',
              metricDeltas: { convRateB: 0.0, zScore: 0.0, pValue: 0.0, annualRevenueImpact: 0.0 },
              competitorReaction: 'Competitors who rolled out untested features suffered checkout drop-offs.',
              stakeholderFeedback: 'VP of Product: "Seeing the p-value bounce from 0.03 to 0.08 on Day 4 taught us a permanent lesson. We will never stop a test early again."',
              theorySnippet: {
                framework: 'Peeking Bias & The Optional Stopping Problem in A/B Testing',
                takeaway: 'If you test significance continuously and stop the moment $p < 0.05$, your true Type I error rate exceeds 30%. Pre-commit to a sample size based on power calculations and evaluate significance only upon completion.'
              }
            }
          },
          {
            id: 'b1-b',
            title: 'Adopt the Rule: "Always Stop the Test the Very First Second p < 0.05"',
            description: 'Establish policy that whenever a test touches $p = 0.049$ for even 5 minutes on Day 1, the test must be immediately terminated and shipped to production.',
            tradeOffs: {
              pros: ['Fastest possible shipping cycle on paper', 'Makes growth hackers feel like they are winning every day'],
              cons: ['Guarantees that 30-40% of all shipped "features" are completely useless random noise', 'Accumulates massive product complexity with zero actual long-term conversion lift']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'False-positive trap. Future features shipped under this rule failed to generate any real revenue.',
              detailedAnalysis: 'Peeking bias inflates false positives. When 5 consecutive "winning" features were shipped, annual revenue remained flat because the wins were purely random noise.',
              metricDeltas: { convRateB: -0.15, zScore: -1.8, pValue: 0.04, annualRevenueImpact: -4.5 },
              competitorReaction: 'Competitors kept their checkout simple while PulsePay cluttered theirs with placebo widgets.',
              stakeholderFeedback: 'CFO: "We supposedly shipped 6 features that won A/B tests this quarter, but our total revenue hasn\'t increased by a single rupee."'
            }
          },
          {
            id: 'b1-c',
            title: 'Declare the Test a Failure Because the Lift (+0.27%) Looks "Too Small"',
            description: 'Refuse to ship Flow B because 0.27% sounds like a tiny number to non-technical executives.',
            tradeOffs: {
              pros: ['Zero change to existing codebase', 'Requires zero merchant updates'],
              cons: ['Fails to understand that in high-volume payments, 27 basis points across 12M monthly transactions is worth ₹9.72 Crore annually', 'Throws away a statistically proven $p = 0.00065$ revenue engine']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Massive opportunity cost loss. Forfeited ₹9.72 Cr in annual net profit.',
              detailedAnalysis: 'In high-scale transaction networks, basis points compound into tens of crores. Confusing a small percentage point with a small business impact is an elementary failure of scale economics.',
              metricDeltas: { convRateB: -0.27, zScore: -3.41, pValue: 0.5, annualRevenueImpact: -9.72 },
              competitorReaction: 'Rival payment gateways implemented biometric UPI checkout and captured merchants.',
              stakeholderFeedback: 'Board Chairman: "You killed a feature that had a proven $p = 0.00065$ lift worth ₹10 Crore because you thought 27 basis points sounded small?!"'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Phase 2: Segment Heterogeneity & Detecting Simpson\'s Paradox',
        quarterOrTimeline: 'Sprint 2 - Subgroup Segmentation Analysis',
        briefing: 'Before full rollout, you slice the 200,000 visitors by platform: Mobile Web vs Desktop Web. You discover an alarming paradox:\n\n• Mobile Web: Flow B has 4.10% vs Flow A at 3.90% (+20 bps lift for B)\n• Desktop Web: Flow B has 1.80% vs Flow A at 1.70% (+10 bps lift for B)\n\nHowever, in Week 2, a partner marketing campaign dumped 30,000 low-converting Desktop users disproportionately into Flow B. A junior analyst panics, claiming: "The aggregate conversion numbers are distorted! We have an unequal sample distribution!"',
        marketIntel: {
          headline: 'Simpson\'s Paradox in tech analytics: How lurking distribution imbalances mislead decision makers',
          competitorMove: 'Top platforms use stratified randomization to ensure equal desktop/mobile splits across variants.',
          macroEnvironment: 'When a confounding variable (device type) correlates with both the variant assignment and conversion probability, Simpson\'s Paradox can reverse apparent conclusions.',
          internalWhisper: 'Senior Analytics Architect: "Run the Cochran-Mantel-Haenszel (CMH) test controlling for device type to verify that Flow B is genuinely superior in both subgroups."'
        },
        urgentQuestion: 'How do you handle the device-type distribution imbalance and verify the true conversion lift?',
        choices: [
          {
            id: 'b2-a',
            title: 'Apply Stratified Randomization Weighting & The Cochran-Mantel-Haenszel (CMH) Test',
            description: 'Control for device heterogeneity: recalculate conversion rates using post-stratification weighting across Mobile (75% of traffic) and Desktop (25% of traffic). The CMH test confirms that Flow B is statistically superior in BOTH segments independently (Mobile: $p = 0.002$; Desktop: $p = 0.014$), ruling out Simpson\'s Paradox.',
            tradeOffs: {
              pros: ['Mathematically proves that Flow B wins across both device segments independently', 'Provides the true de-biased conversion lift (+24 bps) with zero confounding distortion'],
              cons: ['Requires running stratified contingency table statistics', 'Shows slightly lower headline lift (+24 bps vs unweighted +27 bps)']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Simpson\'s Paradox neutralized! Proved Flow B wins in every customer segment.',
              detailedAnalysis: 'Stratified subgroup analysis confirmed that Flow B\'s biometric 1-click flow was genuinely superior across both mobile and desktop. Controlling for the traffic imbalance gave leadership total confidence in the rollout.',
              metricDeltas: { convRateB: -0.03, zScore: 3.22, pValue: 0.0012, annualRevenueImpact: -1.08 },
              competitorReaction: 'Competitors struggled with buggy desktop checkouts while PulsePay optimized both.',
              stakeholderFeedback: 'Lead Architect: "Controlling for device type proved that Flow B wasn\'t an illusion. The stratified lift is solid as a rock."',
              theorySnippet: {
                framework: 'Simpson\'s Paradox & Stratified Randomization',
                takeaway: 'Simpson\'s Paradox occurs when a trend appears in different groups of data but disappears or reverses when the groups are combined. Always segment A/B test data by key confounding variables (device, traffic source) to ensure the lift is authentic.'
              }
            }
          },
          {
            id: 'b2-b',
            title: 'Delete All Desktop Traffic and Make PulsePay 100% Mobile-Only',
            description: 'Since Desktop conversion is lower (1.8% vs 4.1%), shut down the desktop payment gateway completely and force all merchants to use mobile.',
            tradeOffs: {
              pros: ['Artificially elevates reported blended conversion rate', 'Eliminates desktop testing complexity'],
              cons: ['Destroys 25% of company transaction volume overnight (e-commerce merchants process ₹800 Cr on desktop laptops)', 'Merchants immediately revolt and migrate to Razorpay']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Commercial catastrophe. Major corporate enterprise merchants terminated contracts.',
              detailedAnalysis: 'Confusing low subgroup conversion with zero business value is disastrous. B2B travel and software buyers purchase on desktop. Abandoning desktop alienated enterprise clients.',
              metricDeltas: { convRateB: 0.65, zScore: 0.0, pValue: 0.5, annualRevenueImpact: -38.5 },
              competitorReaction: 'Razorpay and PayU absorbed all desktop enterprise merchant accounts.',
              stakeholderFeedback: 'Merchant Partner: "Our corporate travel clients book $5,000 hotel packages on desktop. You broke our desktop checkout and cost us millions."'
            }
          },
          {
            id: 'b2-c',
            title: 'P-Hack the Subgroups: Search Through 40 Random Segments Until You Find a Fake 50% Lift',
            description: 'Slice the data by browser, time of day, operating system version, and city until you find a tiny sub-segment (e.g., "Safari users in Pune on Tuesday afternoon") with an artificial 50% lift and present that as the headline.',
            tradeOffs: {
              pros: ['Produces a sensational, clickbait headline number for internal slide decks', 'Looks impressive to unsophisticated managers'],
              cons: ['Textbook definition of p-hacking and the Multiple Comparisons Problem', 'Guaranteed false discovery; feature will fail completely when shipped to the broader population']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'P-hacking exposed. The Bonferroni correction showed the finding was pure noise.',
              detailedAnalysis: 'When you test 40 independent subgroups at $\\alpha = 0.05$, the probability of finding at least one false positive by chance is $1 - (1-0.05)^{40} = 87\\%$. The team was reprimanded for p-hacking.',
              metricDeltas: { convRateB: -0.2, zScore: 0.5, pValue: 0.35, annualRevenueImpact: -8.0 },
              competitorReaction: 'Industry data scientists publicly critiqued PulsePay\'s p-hacked press releases.',
              stakeholderFeedback: 'Chief Data Officer: "Testing 40 random segments without Bonferroni correction is textbook p-hacking. Stop torturing the data until it confesses to something that isn\'t real."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Phase 3: The 95% Confidence Interval & Boardroom Revenue Modeling',
        quarterOrTimeline: 'Sprint 3 - Economic Valuation & Confidence Intervals',
        briefing: 'You present the final stratified results to the Chief Executive Officer and Chief Financial Officer. The true de-biased conversion difference is $\\Delta = +0.24\\%$ (+24 basis points). The 95% Confidence Interval for the lift is $[+0.10\\%, +0.38\\%]$.\n\nThe CFO asks: "If we roll Flow B out to 100% of our 12 million monthly transactions, what is the guaranteed minimum annualized revenue impact, and what is the risk of a loss?"',
        marketIntel: {
          headline: 'CFOs demand Confidence Intervals over point estimates to budget risk-adjusted cash flows',
          competitorMove: 'Top fintech firms use the lower bound of the 95% CI for conservative corporate budgeting.',
          macroEnvironment: 'Point estimates (+24 bps) give a false sense of certainty; Confidence Intervals provide the range of plausible reality.',
          internalWhisper: 'Head of FP&A: "If you budget on the point estimate and reality lands at the lower bound, we face an earnings miss. Budget on the lower bound ($+0.10\\%$); anything above is a bonus."'
        },
        urgentQuestion: 'How do you formulate the financial projection based on the 95% Confidence Interval $[+0.10\\%, +0.38\\%]$?',
        choices: [
          {
            id: 'b3-a',
            title: 'Budget on the Conservative Lower Bound (₹3.6 Cr Guaranteed Minimum) + Expected Base Case (₹8.64 Cr)',
            description: 'Present the full confidence interval: The 95% CI is strictly positive ($[+0.10\\%, +0.38\\%]$), proving a 97.5% probability that the true population lift is AT LEAST +10 basis points (generating ₹3.6 Cr minimum recurring revenue). The expected base case is +24 bps (₹8.64 Cr), with upside potential up to +38 bps (₹13.68 Cr). Recommend budgeting on the lower bound.',
            tradeOffs: {
              pros: ['Provides bulletproof financial conservatism that delights CFOs and credit rating agencies', 'Completely eliminates the risk of missing corporate budget targets while capturing full upside'],
              cons: ['Presents a lower headline "guaranteed" number than naive point estimate boosters', 'Requires explaining interval estimation to executives']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'CFO commended the mathematical rigor! Approved 100% rollout to all merchants.',
              detailedAnalysis: 'Using confidence intervals for risk-adjusted financial planning is elite corporate finance. When the actual full-fleet rollout delivered +26 basis points (₹9.36 Cr), PulsePay exceeded conservative budget guidance, driving stock price appreciation.',
              metricDeltas: { convRateB: 0.02, zScore: 0.1, pValue: 0.0001, annualRevenueImpact: 8.64 },
              competitorReaction: 'PulsePay merchants saw checkout conversion jump, reducing shopping cart abandonment.',
              stakeholderFeedback: 'CFO: "Presenting the lower bound of the 95% CI as our baseline budget gave us total confidence. We exceeded budget targets by ₹5 Cr. Outstanding data stewardship."',
              theorySnippet: {
                framework: 'Confidence Intervals vs Point Estimates in Financial Risk Budgeting',
                takeaway: 'A point estimate tells you what happened in a single sample; a Confidence Interval ($CI = \\bar{X} \\pm Z^* \\times SE$) tells you the range of plausible values in the broader population. Always budget on the conservative lower bound.'
              }
            }
          },
          {
            id: 'b3-b',
            title: 'Promise the Extreme Upper Bound (₹13.68 Cr) as a Guaranteed Contractual Minimum',
            description: 'Tell the Board that Flow B will guaranteed deliver +38 basis points (₹13.68 Cr) every year, budgeting company expenses around the maximum ceiling.',
            tradeOffs: {
              pros: ['Looks sensational in board presentations today', 'Makes the growth team look like magicians'],
              cons: ['High probability that actual population mean lands near the base case (+24 bps), resulting in a massive ₹5 Cr revenue shortfall and earnings miss', 'Damages executive credibility permanently']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Budget shortfall and earnings miss. Company missed quarterly guidance by ₹4.3 Cr.',
              detailedAnalysis: 'Budgeting on the extreme upper bound of a confidence interval guarantees future underperformance due to regression to the mean. PulsePay missed its EBITDA target, triggering stock downgrades.',
              metricDeltas: { convRateB: -0.05, zScore: 0.0, pValue: 0.05, annualRevenueImpact: -4.32 },
              competitorReaction: 'Wall Street downgraded PulsePay stock due to missed quarterly guidance.',
              stakeholderFeedback: 'Lead Analyst: "PulsePay over-promised conversion lift and missed earnings guidance. We are downgrading the stock to Neutral."'
            }
          },
          {
            id: 'b3-c',
            title: 'Refuse to Roll Out Flow B Unless the Confidence Interval Has Zero Width',
            description: 'Refuse to ship until the confidence interval has an exact margin of error of $\\pm 0.0000\\%$, requiring a sample size of 500 million visitors (taking 4 years of testing).',
            tradeOffs: {
              pros: ['Theoretical mathematical certainty on paper', 'Eliminates all statistical variance'],
              cons: ['Paralyzes the business for 4 years; competitor moves forward and captures market share', 'Demonstrates total ignorance of sampling theory (infinite sample sizes are impossible in business)']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Paralysis by analysis. Competitors shipped identical 1-click checkout flows while PulsePay waited.',
              detailedAnalysis: 'Demanding zero confidence interval width in business is absurd. While PulsePay ran a 4-year sample test, competitor gateways launched 1-click UPI and stole 30% of PulsePay merchants.',
              metricDeltas: { convRateB: -0.24, zScore: 0.0, pValue: 0.5, annualRevenueImpact: -18.0 },
              competitorReaction: 'Razorpay captured 400 tier-1 merchants with their 1-click checkout rollout.',
              stakeholderFeedback: 'CEO: "We spent 2 years waiting for \'perfect certainty\' while Razorpay took all our enterprise merchants."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Phase 4: Full-Fleet Rollout & Guardrail Metric Monitoring',
        quarterOrTimeline: 'Sprint 4 - The Production Scale-Up',
        briefing: 'You initiate the 100% full-fleet rollout of Flow B across all 25,000 merchants. In experimentation science, tracking the primary metric (Conversion Rate) is only half the battle; you must monitor "Guardrail Metrics" (Payment Gateway Error Rates, Fraud Dispute Chargebacks, and API Latency) to ensure that the conversion lift did not come at the expense of hidden operational costs.',
        marketIntel: {
          headline: 'Fintech cautionary tale: Biometric 1-click checkouts see 40% surge in accidental purchases and fraud disputes',
          competitorMove: 'Leading payment networks implement machine learning anomaly detectors to catch fraud surges during checkout rollouts.',
          macroEnvironment: 'If chargebacks exceed 1.0% of volume, Visa and Mastercard levy massive fines and revoke payment licenses.',
          internalWhisper: 'Head of Fraud & Risk: "Our checkout conversion is up, but our fraud chargeback rate ticked up from 0.08% to 0.18% in low-tier gaming merchants."'
        },
        urgentQuestion: 'How do you structure the Guardrail Metric monitoring and risk mitigation architecture?',
        choices: [
          {
            id: 'b4-a',
            title: 'Deploy Automated Guardrail Circuit-Breakers + Step-Up Biometrics for High-Risk Tiers',
            description: 'Implement an automated guardrail monitoring engine: if chargebacks or API error rates exceed pre-set statistical thresholds ($Z > 2.58$) in any merchant vertical, trigger an automatic "Step-Up Authentication Circuit-Breaker" (requiring SMS OTP only for suspicious high-risk transactions >₹5,000), while keeping frictionless 1-click checkout for 95% of verified low-risk retail purchases.',
            tradeOffs: {
              pros: ['Protects the core conversion lift (+24 bps) across 95% of safe transactions', 'Prevents payment network regulatory fines by keeping total chargebacks well below the 1.0% threshold (0.11%)'],
              cons: ['Adds minor friction to the top 5% highest-risk transactions', 'Requires real-time ML risk scoring pipeline']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Flawless production scale! Conversion lift held solid at +24 bps while chargebacks remained at an ultra-safe 0.11%.',
              detailedAnalysis: 'Professional experimentation requires holistic guardrail governance. By protecting against fraud without diluting the conversion gains of safe users, you delivered ₹8.64 Cr in clean, risk-free incremental annual revenue.',
              metricDeltas: { convRateB: 0.0, zScore: 0.0, pValue: 0.0001, annualRevenueImpact: 8.64 },
              competitorReaction: 'Competitors who rolled out un-guarded checkouts suffered severe fraud fines from Visa/Mastercard.',
              stakeholderFeedback: 'Head of Risk & Fraud: "The automated step-up circuit breaker was pure genius. We got the conversion upside with zero regulatory risk."',
              theorySnippet: {
                framework: 'Experimentation Guardrail Metrics & The Multi-Armed Bandit Approach',
                takeaway: 'Never optimize a primary business metric in isolation. Always define statistical guardrails (fraud, latency, margin) with automated circuit-breakers to protect total enterprise value.'
              }
            }
          },
          {
            id: 'b4-b',
            title: 'Ignore Fraud & Chargebacks: Focus Exclusively on the Conversion Rate Metric',
            description: 'Tell the risk team to stop complaining. Ignore chargeback reports and keep 100% 1-click checkout for everyone, including high-risk offshore gambling sites.',
            tradeOffs: {
              pros: ['Maximizes raw transaction conversion metric today', 'Zero friction for any user'],
              cons: ['Chargebacks surge past 1.2%, triggering immediate Visa/Mastercard audit fines ($2.5M)', 'Card networks threaten to revoke PulsePay\'s payment gateway license']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Regulatory catastrophe. Visa levied a $2.5M fine and placed PulsePay on fraud probation.',
              detailedAnalysis: 'Optimizing a single metric without guardrails is corporate suicide. The surge in fraudulent chargebacks destroyed merchant trust and wiped out all revenue gains in fines.',
              metricDeltas: { convRateB: -0.45, zScore: -2.5, pValue: 0.01, annualRevenueImpact: -18.5 },
              competitorReaction: 'Visa and Mastercard issued compliance warnings against PulsePay.',
              stakeholderFeedback: 'Chief Legal Officer: "Visa has levied a $2.5M penalty on our gateway for excessive fraud chargebacks. All 1-click checkouts are suspended by card network mandate."'
            }
          },
          {
            id: 'b4-c',
            title: 'Emergency Over-Reaction: Roll Back 100% to the Old 3-Screen Flow for Everyone',
            description: 'Panic over a tiny 0.10% uptick in fraud; immediately scrap Flow B entirely and force all 25,000 merchants back to the slow, high-friction legacy checkout.',
            tradeOffs: {
              pros: ['Eliminates fraud uptick completely', 'Comfortable legacy status quo'],
              cons: ['Throws away the entire ₹8.64 Cr conversion revenue lift', 'Demoralizes product, engineering, and data science teams who spent 6 months building the feature']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Total strategic surrender. Forfeited the entire competitive advantage.',
              detailedAnalysis: 'Knee-jerk risk aversion throws out the baby with the bathwater. Instead of targeting risk with precision, abandoning the entire innovation surrendered ₹8.6 Cr in annual profits.',
              metricDeltas: { convRateB: -0.24, zScore: -3.41, pValue: 0.5, annualRevenueImpact: -8.64 },
              competitorReaction: 'Competitors celebrated as PulsePay voluntarily retreated back to slow checkouts.',
              stakeholderFeedback: 'Head of Growth: "We spent 6 months proving a statistically significant ₹8.6 Cr lift, and leadership threw it away over a minor fraud alert that could have been fixed in 20 lines of code."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You led PulsePay\'s Experimentation and Decision Science team through a rigorous A/B checkout experiment on 200,000 visitors. By resisting the temptation of early peeking bias on Day 1 ($p = 0.038$) and maintaining the test until the pre-determined 14-day sample size power horizon ($1 - \\beta = 0.88$) was satisfied, you verified an authentic, de-biased conversion lift of +24 basis points ($Z = 3.41, p = 0.00065$). Slicing data by device type disproved Simpson\'s Paradox using the Cochran-Mantel-Haenszel test. You framed the economic value using a 95% Confidence Interval ($[+0.10\\%, +0.38\\%]$), allowing the CFO to budget conservatively on the lower bound (₹3.6 Cr guaranteed minimum) while delivering ₹8.64 Cr in base-case recurring revenue. Finally, you instituted automated guardrail circuit-breakers to contain chargeback fraud below 0.11%.',
      whyItHappened: 'Digital experimentation is plagued by false positives, p-hacking, peeking bias, and metric gaming. Growth teams under commercial pressure frequently stop tests early the moment a p-value briefly touches 0.05, confusing random sampling fluctuations with authentic population shifts. Rigorous decision science requires pre-registration of sample size based on statistical power ($1 - \\beta$), understanding the difference between point estimates and Confidence Intervals, controlling for subgroup confounding variables (Simpson\'s Paradox), and protecting total enterprise value through holistic guardrail metrics.',
      conceptsApplied: [
        {
          name: 'The Two-Proportion Z-Test & Hypothesis Formulation',
          formulaOrModel: 'Z = \\frac{(p_1 - p_2) - 0}{\\sqrt{p_{pool}(1 - p_{pool})(\\frac{1}{n_1} + \\frac{1}{n_2})}}; \\quad H_0: p_1 = p_2',
          explanation: 'Comparing Flow A ($n = 100,000, p_1 = 3.15\\%$) with Flow B ($n = 100,000, p_2 = 3.42\\%$) yielded $Z = 3.41$ and $p = 0.00065$. Because $p < 0.001$, the probability of observing this 27 bps lift by chance is less than 1 in 1,500.',
          keyTakeaway: 'In high-scale digital platforms, small percentage differences carry massive statistical and financial significance.'
        },
        {
          name: 'Peeking Bias & The Optional Stopping Problem',
          formulaOrModel: 'True \\alpha \\approx 1 - (1 - \\alpha)^k \\text{ where } k \\text{ is number of peeks}',
          explanation: 'Checking test significance daily and stopping as soon as $p < 0.05$ turns a nominal 5% significance level into an actual 30%+ false positive rate. Random walks frequently touch significance thresholds before regressing to the true mean.',
          keyTakeaway: 'Never stop an experiment early based on raw p-value peeking; adhere strictly to pre-calculated sample size horizons.'
        },
        {
          name: 'Confidence Intervals for Risk-Adjusted Decision Making',
          formulaOrModel: '95\\% \\text{ CI} = (p_2 - p_1) \\pm 1.96 \\times SE = [+0.10\\%, +0.38\\%]',
          explanation: 'The confidence interval proved that the worst-case plausible population lift was +10 basis points (generating ₹3.6 Cr), while the expected lift was +24 bps (₹8.64 Cr). This enabled the CFO to budget conservatively without fear of a negative surprise.',
          keyTakeaway: 'Point estimates create a false illusion of certainty; Confidence Intervals empower risk-adjusted financial planning.'
        }
      ],
      expertExecutivePerspective: 'A Director of Data Science at Booking.com or Stripe would assess: "Phase 1 was the hallmark of elite experimentation culture. The pressure from product managers to declare victory on Day 1 when $p = 0.038$ is enormous in fast-moving tech companies. Having the technical authority to explain the Law of the Iterated Logarithm, point out the Day-4 regression to $p = 0.081$, and hold the line until Day 14 protected the company from shipping an unverified illusion. That is the difference between a real data science organization and a growth theater circus."',
      alternativePaths: [
        {
          choiceTitle: 'Early Stopping on Day 1 (Phase 1)',
          counterfactualConsequence: 'Stopping on Day 1 based on an unadjusted $p = 0.038$ would have institutionalized peeking bias. Subsequent tests would have had a 35% false-positive rate, cluttering the checkout with useless widgets that did not generate actual revenue.'
        },
        {
          choiceTitle: 'Ignoring Guardrail Fraud Metrics (Phase 4)',
          counterfactualConsequence: 'Ignoring chargeback spikes to chase raw conversion would have pushed fraud rates past 1.2%. Visa would have issued a $2.5M fine and suspended PulsePay\'s merchant acquiring license, resulting in commercial catastrophe.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Booking.com Experimentation Culture',
          caseStudySummary: 'Booking.com runs over 1,000 concurrent A/B tests on its accommodation funnel, enforcing strict sample size horizons, automated Simpson\'s Paradox detection, and guardrail metric circuit-breakers, driving industry-leading conversion rates without compromising fraud security.'
        },
        {
          company: 'Amazon 1-Click Checkout Patent & A/B Testing',
          caseStudySummary: 'Amazon patented 1-Click checkout after rigorous experimentation proved that eliminating shopping cart confirmation screens delivered a statistically significant conversion lift that generated billions in incremental annual GMV.'
        }
      ]
    }
  }
];
