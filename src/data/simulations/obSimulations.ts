import { Simulation } from '../../types';

export const obSimulations: Simulation[] = [
  {
    id: 'ob-underperforming-team',
    subjectId: 'ob',
    conceptId: 'psychological-safety',
    relatedConcepts: ['Tuckman Stages of Group Development', 'Herzberg Motivation-Hygiene', 'Conflict Management', 'Accountability vs Autonomy'],
    title: 'The Underperforming Team: Turnaround of Project Apollo',
    tagline: 'Diagnose team dysfunction, restore psychological safety, rebuild trust, and align incentives in a cross-functional crisis.',
    role: 'Engineering & Product Delivery Director, Novus Cloud Solutions',
    company: 'Novus Cloud Technologies',
    industry: 'Enterprise Cloud Infrastructure & Distributed Systems',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'Novus Cloud Solutions is a mid-sized enterprise software provider. "Project Apollo" is the company\'s flagship cross-functional initiative to rebuild its core billing and cloud provisioning engine for Fortune 500 financial clients.',
      industryContext: 'The team was formed 6 months ago by combining veteran mainframe backend architects, aggressive Silicon Valley frontend engineers, and product managers. High expectations from the Board have turned into acute delivery panic.',
      currentSituation: 'Project Apollo is 14 weeks behind schedule. Sprint velocity has plummeted by 45%, employee turnover is at an all-time high (3 senior engineers resigned last month), and daily standups have deteriorated into passive-aggressive silence or bitter shouting matches between engineering and product.'
    },
    objectives: [
      'Halt team voluntary attrition and restore psychological safety index from 28 to >75.',
      'Rebound sprint delivery velocity from 32 story points back above 65 points.',
      'Ship the delayed enterprise billing milestone within 10 weeks without cutting quality.'
    ],
    constraints: [
      'Cannot terminate any employee without a mandatory 30-day HR documented performance review.',
      'Must maintain team morale without resorting to arbitrary financial cash bonuses.',
      'Executive leadership demands weekly progress demonstrations to the CEO.'
    ],
    initialMetrics: [
      { key: 'velocity', label: 'Sprint Velocity', value: 32, unit: 'pts/sprint', isGoodWhenHigh: true, benchmark: 65, description: 'Story points completed per 2-week sprint' },
      { key: 'morale', label: 'Team Psychological Safety', value: 28, unit: '/100', isGoodWhenHigh: true, benchmark: 75, description: 'Measurement of team safety for interpersonal risk-taking and candid disagreement' },
      { key: 'attritionRisk', label: 'Attrition Risk Score', value: 78, unit: '%', isGoodWhenHigh: false, benchmark: 15, description: 'Percentage of squad members actively interviewing for external jobs' },
      { key: 'bugRate', label: 'Escaped Defect Count', value: 46, unit: 'bugs', isGoodWhenHigh: false, benchmark: 10, description: 'High-severity bugs found in QA and staging environments' },
      { key: 'milestoneProgress', label: 'Milestone Progress', value: 42, unit: '%', isGoodWhenHigh: true, benchmark: 100, description: 'Percentage of core Apollo billing engine delivered' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Week 1: The Blame Game & Toxic Team Retrospective',
        quarterOrTimeline: 'Sprint Week 1 - The Diagnosis',
        briefing: 'You step into your first retrospective meeting with the Apollo team. Tension is palpable. Backend Architect Vikram accuses Product Lead Sarah of "incompetent requirement thrashing", while Sarah accuses Vikram of "deliberate sandbagging and obstructionism." The junior developers stare silently at their laptops, afraid to speak.',
        marketIntel: {
          headline: 'Glassdoor reviews for Novus Cloud mention "toxic blame culture and executive micro-management"',
          competitorMove: 'Competitors are actively reaching out on LinkedIn to your burned-out senior backend architects.',
          macroEnvironment: 'Tech talent market is highly competitive; losing Vikram will set the project back by 4 months.',
          internalWhisper: 'Junior Developer confides privately: "Nobody speaks up during planning because every time someone points out a flaw, Vikram or Sarah attacks them."'
        },
        urgentQuestion: 'How do you intervene in this dysfunctional team dynamic during your first week?',
        choices: [
          {
            id: 'o1-a',
            title: 'Establish a Blameless "Psychological Safety Reset" & Structured 1-on-1 Listening Tour',
            description: 'Call an immediate halt to public accusatory retrospectives. Establish a "Blameless Post-Mortem" ground rule: focus on system and process failures rather than personal blame. Conduct private, confidential 1-on-1s with every engineer and PM to map hidden anxieties.',
            tradeOffs: {
              pros: ['Creates a secure space for junior and quiet engineers to reveal root-cause workflow bottlenecks', 'De-escalates toxic interpersonal warfare between Vikram and Sarah without humiliating either publicly'],
              cons: ['Takes 15-20 hours of personal management time in Week 1', 'Impatient senior executives may mistake listening tours for lack of immediate action']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Psychological breakthrough! Deep unspoken bottlenecks were uncovered.',
              detailedAnalysis: 'Junior engineers revealed that PR reviews were sitting blocked for 8 days because Vikram felt personally attacked whenever code differed from his style. Establishing blameless norms allowed the team to separate technical issues from personal ego.',
              metricDeltas: { velocity: 8, morale: 22, attritionRisk: -24, bugRate: -6, milestoneProgress: 6 },
              competitorReaction: 'Recruiters noticed a decline in Novus engineers responding to poaching messages.',
              stakeholderFeedback: 'Junior Engineer: "For the first time in 6 months, someone actually listened to why our code deployment pipeline was broken."',
              theorySnippet: {
                framework: 'Amy Edmondson\'s Psychological Safety & Blameless Culture',
                takeaway: 'High performance is impossible when team members fear punishment for candor. Blameless culture separates human intent from systemic process defects.'
              }
            }
          },
          {
            id: 'o1-b',
            title: 'Publicly Reprimand Both Leads & Threaten Performance Improvement Plans (PIPs)',
            description: 'Slam your hand on the table during the retrospective, declare that "infighting will not be tolerated," and warn Vikram and Sarah that they will both be placed on PIPs if deadlines slip again.',
            tradeOffs: {
              pros: ['Projects aggressive, authoritarian authority', 'Momentarily silences arguing in the room'],
              cons: ['Deepens paranoia and drives conflict underground into toxic backchannel gossip', 'Vikram will resign within 72 hours, taking proprietary architectural knowledge with him']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Complete disaster. Vikram handed in his two-week notice the next morning.',
              detailedAnalysis: 'Using threats and public humiliation against senior knowledge workers destroys trust. Vikram\'s resignation panic spread across the engineering team, halting all progress.',
              metricDeltas: { velocity: -14, morale: -18, attritionRisk: 22, bugRate: 16, milestoneProgress: -2 },
              competitorReaction: 'Competitor announced hiring Vikram as their new Chief Cloud Architect.',
              stakeholderFeedback: 'HR Director: "You triggered an emergency senior resignation. The Apollo project is now in existential jeopardy."'
            }
          },
          {
            id: 'o1-c',
            title: 'Ignore the Personality Clash & Mandate 70-Hour Work Weeks with Free Dinner',
            description: 'Ignore the interpersonal drama as "creative friction." Mandate mandatory weekend work and 12-hour days, offering free pizza and corporate swag to push the milestone across the finish line.',
            tradeOffs: {
              pros: ['Shows senior management visible late-night activity', 'May brute-force a few extra lines of code in the short term'],
              cons: ['Accelerates severe burnout, mental exhaustion, and defect-ridden code', 'Treats motivation as a purely mechanical input rather than psychological alignment']
            },
            riskLevel: 'High',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Severe burnout collapse. Exhausted engineers introduced catastrophic bugs in production.',
              detailedAnalysis: 'Overworking a demoralized team multiplies escaped defects and resentment. Two developers took medical stress leave, bringing sprint velocity to a near standstill.',
              metricDeltas: { velocity: -10, morale: -16, attritionRisk: 20, bugRate: 24, milestoneProgress: 2 },
              competitorReaction: 'Engineers vented about sweatshop conditions on Blind and Glassdoor.',
              stakeholderFeedback: 'QA Lead: "The code written at 2 AM on Saturday was completely unmaintainable and broke the payment gateway."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Week 3: Restructuring Role Ambiguity & The RACI Matrix',
        quarterOrTimeline: 'Sprint Week 3 - Role Clarification',
        briefing: 'Your 1-on-1 listening tour revealed the structural root cause: nobody knows who has final decision-making authority. When product scope changes, Sarah believes she has the right to rewrite sprint tickets unilaterally. Vikram believes he has the right to veto any feature that adds architectural complexity. The team is trapped in Tuckman\'s "Storming" stage due to severe role ambiguity.',
        marketIntel: {
          headline: 'Study: 54% of cross-functional team failures stem from unclear decision rights and role overlap',
          competitorMove: 'Agile organizations are adopting dual-track product/engineering squads with clear separation of "What/Why" vs "How".',
          macroEnvironment: 'Fast-moving tech firms rely on high autonomy backed by explicit boundaries.',
          internalWhisper: 'Scrum Master: "Every single ticket is a political battleground because nobody knows whose signature is actually final."'
        },
        urgentQuestion: 'How do you resolve decision-making ambiguity between Product, Engineering, and Architecture?',
        choices: [
          {
            id: 'o2-a',
            title: 'Implement an Explicit RACI Matrix & "What vs How" Decision Boundaries',
            description: 'Convene an off-site alignment workshop to lock in an explicit RACI matrix (Responsible, Accountable, Consulted, Informed). Establish the core rule: Product owns the "What" and "Why" (user problems and priority); Engineering owns the "How" and "When" (architecture, estimates, and technical execution).',
            tradeOffs: {
              pros: ['Eliminates territorial stepping-on-toes by establishing clean constitutional boundaries', 'Empowers both leads within their legitimate zones of expertise'],
              cons: ['Requires continuous facilitation to prevent either lead from overstepping early on', 'Initial friction as both leads adjust to shared governance']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Clarity replaced confusion! The team exited the storming phase into structured norming.',
              detailedAnalysis: 'When role boundaries are transparent, defensiveness drops. Sarah focused on customer requirements without dictating database schemas; Vikram focused on code quality without second-guessing product value.',
              metricDeltas: { velocity: 16, morale: 18, attritionRisk: -18, bugRate: -12, milestoneProgress: 14 },
              competitorReaction: 'Sprint delivery cadence began visibly accelerating.',
              stakeholderFeedback: 'Sarah (Product Lead): "Having clear decision rights removed 90% of our arguments. Vikram and I actually had coffee together today."',
              theorySnippet: {
                framework: 'Tuckman\'s Stages of Group Development (Forming -> Storming -> Norming -> Performing)',
                takeaway: 'Teams cannot reach the "Performing" stage without explicitly resolving the "Storming" stage through structured role boundaries and decision governance.'
              }
            }
          },
          {
            id: 'o2-b',
            title: 'Appoint the Engineering Architect as Total Dictator Over Product Scope',
            description: 'Subordinate the product team entirely to engineering, making Vikram the supreme decision maker on all feature requests and roadmaps.',
            tradeOffs: {
              pros: ['Fast technical decisions with zero pushback from engineering', 'Eliminates arguments by silencing one party'],
              cons: ['Results in an over-engineered technical marvel that customers cannot use', 'Completely demoralizes product and design teams, causing them to disengage']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Technical elegance achieved at the expense of commercial viability.',
              detailedAnalysis: 'Engineering built an ultra-complex microservices cluster, but removed 3 critical client-requested features because they were "annoying to code." Fortune 500 clients pushed back on the release.',
              metricDeltas: { velocity: 6, morale: -6, attritionRisk: 10, bugRate: -8, milestoneProgress: 8 },
              competitorReaction: 'Competitors highlighted their user-friendly, business-aligned feature set.',
              stakeholderFeedback: 'Enterprise Client VP: "This new update is technically fast, but you removed the automated invoice CSV export that our accounting team needs daily."'
            }
          },
          {
            id: 'o2-c',
            title: 'Consensus-By-Committee: Require 100% Unanimous Agreement on Every Decision',
            description: 'Enforce that no ticket, feature, or code change can be approved unless every single squad member votes in unanimous agreement.',
            tradeOffs: {
              pros: ['Feels democratic and inclusive on paper', 'Ensures everyone has an equal theoretical voice'],
              cons: ['Paralyzes the team in endless circular debates; a single dissenter can hold the entire project hostage', 'Decisions are watered down to the lowest common denominator']
            },
            riskLevel: 'High',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Analysis paralysis. The team spent 3 days arguing over the color of a dashboard button.',
              detailedAnalysis: 'Consensus decision-making in high-velocity technical environments creates bureaucratic stagnation. Sprint velocity dropped to zero as trivial decisions dragged out across multi-hour committee debates.',
              metricDeltas: { velocity: -16, morale: -12, attritionRisk: 15, bugRate: 4, milestoneProgress: -4 },
              competitorReaction: 'Competitors shipped two major platform releases while Apollo debated Jira ticket naming conventions.',
              stakeholderFeedback: 'Scrum Master: "We have had 18 hours of meetings this week and completed zero tickets. Everyone is frustrated."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Week 6: Rebuilding Intrinsic Motivation & Tackling Herzberg\'s Hygiene Factors',
        quarterOrTimeline: 'Sprint Week 6 - Motivation Architecture',
        briefing: 'With role clarity established, you notice energy levels are still sluggish. The team is going through the motions. In a company-wide town hall, the CEO announced that due to cost-cutting, annual salary increments will be deferred by 6 months. Team members feel undervalued and cynical about putting in discretionary effort.',
        marketIntel: {
          headline: 'Tech industry survey: 68% of knowledge workers value autonomy, mastery, and recognition over minor salary bumps',
          competitorMove: 'Leading tech firms offer 20% hackathon innovation time, internal technical fellowships, and public recognition awards.',
          macroEnvironment: 'When external economic hygiene factors (pay) are constrained, managers must activate intrinsic motivators (achievement, ownership, impact).',
          internalWhisper: 'Senior Developer: "Why should we work late on Apollo when executives take all the credit and we don\'t even get to choose our own tools?"'
        },
        urgentQuestion: 'How do you reignite team discretionary effort when financial compensation cannot be increased immediately?',
        choices: [
          {
            id: 'o3-a',
            title: 'Empower Autonomous Squad Ownership + Direct Client Impact Visibility',
            description: 'Break the monolithic team into three autonomous, self-organizing micro-pods with full ownership over specific service domains. Arrange bi-weekly demo sessions where engineers present their code directly to actual Fortune 500 client CTOs, witnessing the real-world business impact of their work.',
            tradeOffs: {
              pros: ['Activates Daniel Pink\'s triad of intrinsic motivation: Autonomy, Mastery, and Purpose', 'Direct client feedback replaces abstract management deadlines with genuine human purpose'],
              cons: ['Requires preparing engineers to speak professionally with corporate clients', 'Micro-pods require disciplined architectural coordination']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Inspirational revival! Discretionary effort surged as engineers saw clients applaud their work.',
              detailedAnalysis: 'According to Herzberg\'s Dual-Factor theory, salary is merely a hygiene factor (preventing dissatisfaction); true motivation comes from achievement, recognition, and responsibility. Watching a Wall Street client praise their billing algorithm gave the team immense pride.',
              metricDeltas: { velocity: 18, morale: 24, attritionRisk: -22, bugRate: -10, milestoneProgress: 20 },
              competitorReaction: 'Poaching efforts failed as Novus engineers became deeply invested in their autonomous domains.',
              stakeholderFeedback: 'Senior Backend Developer: "Seeing the client\'s face light up when our real-time reconciliation engine processed 50,000 transactions in 2 seconds was the best feeling of my career."',
              theorySnippet: {
                framework: 'Herzberg\'s Motivation-Hygiene Theory & Pink\'s Drive (Autonomy, Mastery, Purpose)',
                takeaway: 'Hygiene factors (pay, policy) keep employees from walking out the door; motivators (autonomy, challenge, recognition) inspire them to run toward excellence.'
              }
            }
          },
          {
            id: 'o3-b',
            title: 'Deploy Individual Spot Cash Bonuses for the "Top Coder of the Week"',
            description: 'Scrape together a ₹50,000 spot cash pool and award it every Friday to the single engineer who closes the most Jira tickets.',
            tradeOffs: {
              pros: ['Immediate short-term spike in ticket-closing activity', 'Simple financial incentive'],
              cons: ['Creates cut-throat internal rivalry; engineers hoard easy bug fixes and refuse to help teammates with complex architecture', 'Severe Cobra Effect: engineers write low-quality code just to close tickets']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Toxic team cannibalization. Collaboration collapsed into bitter jealousy.',
              detailedAnalysis: 'Individual monetary rewards in interdependent team environments destroy cooperation. Developers refused to review colleagues\' PRs so they could win the cash prize themselves.',
              metricDeltas: { velocity: -4, morale: -16, attritionRisk: 14, bugRate: 28, milestoneProgress: 4 },
              competitorReaction: 'Engineers on the team began actively sabotaging each other\'s sprint commits.',
              stakeholderFeedback: 'QA Engineer: "Developers are cherry-picking 5-minute typo fixes to win the ₹50,000, leaving the critical database deadlocks untouched."'
            }
          },
          {
            id: 'o3-c',
            title: 'Motivational Speech by CEO + Mandatory Team Building Bowling Night',
            description: 'Bring the CEO into the engineering room to deliver a "We Are A Family" pep talk, followed by a mandatory after-work bowling and drinks social.',
            tradeOffs: {
              pros: ['Shows senior executive presence for 30 minutes', 'Free food and drinks'],
              cons: ['Introverted engineers view forced mandatory socializing as stolen personal time', 'Corporate "family" rhetoric sounds hollow when salaries are frozen']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Cynicism deepened. Engineers resented having to spend their Friday night at a mandatory corporate event.',
              detailedAnalysis: 'Superficial corporate social events do not substitute for meaningful workplace autonomy or addressing structural frustrations. Team members felt patronized.',
              metricDeltas: { velocity: 2, morale: -4, attritionRisk: 6, bugRate: 0, milestoneProgress: 2 },
              competitorReaction: 'Engineers shared memes about mandatory corporate bowling on Reddit and Twitter.',
              stakeholderFeedback: 'Junior Developer: "I have two children at home. Being forced to bowl on Friday night to prove I\'m a \'team player\' just made me want to quit more."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Week 8: The Critical Defect Crisis & Psychological Safety Under Fire',
        quarterOrTimeline: 'Sprint Week 8 - The Production Incident',
        briefing: 'Two weeks before the scheduled client release, a catastrophic concurrency bug crashes the staging environment during high-load stress testing. The root cause is traced to a flawed race condition written by Ananya, a promising junior developer. The CEO is in a fury and demands: "I want to know who wrote this code and I want them off this project today!"',
        marketIntel: {
          headline: 'Enterprise software outage costs financial sector $5.6M per hour of downtime',
          competitorMove: 'Incumbents are watching Novus\'s release timeline like hawks.',
          macroEnvironment: 'How leadership handles human error during a high-visibility crisis permanently defines the organizational culture.',
          internalWhisper: 'The room is silent. Ananya is visibly crying in the corner, expecting to be fired publicly.'
        },
        urgentQuestion: 'How do you handle this high-stakes production incident and the CEO\'s demand for a scapegoat?',
        choices: [
          {
            id: 'o4-a',
            title: 'Take Executive Shielding Responsibility + Lead a Collaborative Swarm Fix',
            description: 'Stand between the CEO and the team: "As Director, final delivery accountability belongs to ME, not an individual engineer. Our automated testing pipeline failed to catch the edge case." Protect Ananya completely. Mobilize Vikram and the squad in a 24-hour collaborative swarm to re-engineer the concurrency locking mechanism together.',
            tradeOffs: {
              pros: ['Provides legendary leadership shielding that cements unshakeable loyalty and psychological safety', 'Transforms a near-fatal crisis into a massive team bonding and learning moment'],
              cons: ['Puts your own executive standing on the line with the CEO', 'Requires the team to work under intense pressure for 24 hours to patch the defect']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Defining moment of leadership! The team rallied, fixed the defect, and emerged invincible.',
              detailedAnalysis: 'When a leader absorbs organizational pressure and shields their people from scapegoating, psychological safety reaches peak levels. The team worked through the night not out of fear, but out of profound loyalty. The defect was resolved with a 4x more resilient architecture.',
              metricDeltas: { velocity: 22, morale: 28, attritionRisk: -26, bugRate: -28, milestoneProgress: 22 },
              competitorReaction: 'Novus successfully deployed the patch to staging, stunning industry observers with its fault tolerance.',
              stakeholderFeedback: 'Ananya (Junior Engineer): "You saved my career today. I will walk through fire for this team and this company."',
              theorySnippet: {
                framework: 'Servant Leadership & Executive Shielding (Robert Greenleaf)',
                takeaway: 'Great leaders absorb organizational anxiety and radiate calm clarity. Protecting your people during crises earns discretionary commitment that money cannot buy.'
              }
            }
          },
          {
            id: 'o4-b',
            title: 'Sacrifice Ananya: Fire Her Publicly to Appease the CEO and Board',
            description: 'Throw Ananya under the bus during the emergency executive meeting, fire her on the spot to demonstrate "ruthless accountability," and demand the rest of the team fix the bug.',
            tradeOffs: {
              pros: ['Satisfies the angry CEO\'s immediate thirst for blood and decisive punishment', 'Protects your own personal corporate standing with the Board'],
              cons: ['Instantly annihilates all psychological safety; every single engineer will immediately stop taking risks and hoard information', 'Four senior developers will resign in disgust within 14 days']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Total cultural collapse. The Apollo project died the day Ananya was fired.',
              detailedAnalysis: 'Public scapegoating induces pure terror. Engineers ceased writing creative code, refusing to touch complex modules without written legal disclaimers. Mass resignations crippled the company.',
              metricDeltas: { velocity: -28, morale: -35, attritionRisk: 45, bugRate: 35, milestoneProgress: -12 },
              competitorReaction: 'Competitors held a Novus hiring open house, signing 8 senior engineers.',
              stakeholderFeedback: 'Senior Architect Vikram: "If leadership fires a junior for an edge-case concurrency bug that our testing suite missed, none of us are safe. Here is my resignation."'
            }
          },
          {
            id: 'o4-c',
            title: 'Cover Up the Bug & Push to Production Hoping the Client Won\'t Notice',
            description: 'Quietly disable the stress-testing telemetry, suppress the bug report, and push the build to production on schedule, hoping the edge case only triggers once in a blue moon.',
            tradeOffs: {
              pros: ['Avoids conflict with the CEO on the scheduled release date', 'Temporarily appears as if the milestone was hit on time on paper'],
              cons: ['Guaranteed catastrophic outage in live production with actual Fortune 500 money at stake', 'Massive breach of engineering ethics and contract liability']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Catastrophic live failure. Financial client suffered a 4-hour transaction outage, suing Novus for breach of contract.',
              detailedAnalysis: 'Suppressing defects to meet cosmetic deadlines is the cardinal sin of software delivery. The production crash made national business news and destroyed the company\'s reputation.',
              metricDeltas: { velocity: -30, morale: -30, attritionRisk: 30, bugRate: 50, milestoneProgress: -25 },
              competitorReaction: 'The Wall Street client terminated their contract and signed with your arch-rival.',
              stakeholderFeedback: 'CEO: "You shipped known defective code to our most important client. The Board has initiated formal termination proceedings."'
            }
          }
        ]
      },
      {
        roundNumber: 5,
        title: 'Week 10: Institutionalizing High Performance & Sustainable Team Culture',
        quarterOrTimeline: 'Sprint Week 10 - The High-Performing Destination',
        briefing: 'Project Apollo has launched on schedule with zero production defects, processing $45M in transactions in its first 48 hours. Sprint velocity has stabilized at an extraordinary 72 story points per sprint, psychological safety is at 88/100, and voluntary attrition has dropped to zero. The CEO and HR Vice President have asked you to codify the "Apollo Playbook" across all 14 engineering divisions in the company.',
        marketIntel: {
          headline: 'Novus Cloud Solutions awarded "Best Tech Workplace Culture of the Year" by TechHR',
          competitorMove: 'Competitors are studying how Apollo reversed its 14-week delay without hiring additional developers.',
          macroEnvironment: 'Sustainable high-performance cultures create organizational resilience that outlasts any single product cycle.',
          internalWhisper: 'CEO shares: "Two months ago I thought this project was dead. You didn\'t just save Apollo; you showed us how modern teams should be led."'
        },
        urgentQuestion: 'How do you institutionalize this culture across the broader enterprise for long-term impact?',
        choices: [
          {
            id: 'o5-a',
            title: 'Institutionalize the "Apollo Cultural Operating System" (Blameless Post-Mortems, RACI Governance & Servant Leadership Academy)',
            description: 'Formalize the Apollo practices into company-wide policy: mandate blameless retrospectives, establish transparent RACI decision rights across all squads, and launch an internal leadership training academy where Apollo engineers mentor other squad leads.',
            tradeOffs: {
              pros: ['Scales human-centric, high-performance culture across the entire enterprise of 800+ employees', 'Transforms Apollo team members into respected organizational culture ambassadors (cementing retention)'],
              cons: ['Requires sustained cross-departmental coordination with resistant legacy managers', 'Takes 6 months to train all engineering managers across the company']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Enterprise-wide transformation! Novus became an industry beacon of engineering excellence.',
              detailedAnalysis: 'By codifying psychological safety, structural role clarity, and intrinsic motivation into scalable organizational systems, you transformed a localized turnaround into an enduring institutional competitive advantage.',
              metricDeltas: { velocity: 8, morale: 12, attritionRisk: -10, bugRate: -4, milestoneProgress: 18 },
              competitorReaction: 'Industry talent flocked to Novus Cloud; inbound job applications surged 340%.',
              stakeholderFeedback: 'CEO & Board: "You proved that organizational behaviour is not touchy-feely soft science; it is the definitive operational engine of business velocity and enterprise valuation. Appointed VP of Global Engineering!"',
              theorySnippet: {
                framework: 'Edgar Schein\'s Organizational Culture & Leadership',
                takeaway: 'Culture is not slogans on an office wall; it is the shared basic assumptions, values, and behavioral habits that a group learns as it solves problems of external adaptation and internal integration.'
              }
            }
          },
          {
            id: 'o5-b',
            title: 'Keep the Playbook Secret to Preserve Apollo\'s Elite Special Status',
            description: 'Refuse to share your methods with other squads. Keep Apollo as an elite, isolated "Tiger Team" with special privileges while the rest of the company struggles.',
            tradeOffs: {
              pros: ['Preserves a sense of exclusivity for Apollo team members', 'Avoids the political hassle of reforming other departments'],
              cons: ['Breeds intense inter-departmental resentment and jealousy across the company', 'Fails to solve the broader organizational dysfunction affecting Novus as a whole']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Siloed success inside a decaying organization.',
              detailedAnalysis: 'Creating isolated "rockstar teams" alienates other departments. Apollo succeeded, but upstream and downstream dependencies in marketing and customer support broke down.',
              metricDeltas: { velocity: 0, morale: 2, attritionRisk: 4, bugRate: 0, milestoneProgress: 0 },
              competitorReaction: 'Competitors continued to poach talent from other Novus departments.',
              stakeholderFeedback: 'Head of Infrastructure: "Apollo thinks they are too good for the rest of the company. We refuse to prioritize their server tickets."'
            }
          },
          {
            id: 'o5-c',
            title: 'Declare Victory & Return to Traditional Command-and-Control Hierarchies',
            description: 'Treat the turnaround as an emergency wartime anomaly. Dismantle the autonomous micro-pods and return to strict top-down bureaucratic approvals.',
            tradeOffs: {
              pros: ['Reassures traditional legacy managers who felt threatened by team autonomy', 'Returns to comfortable old organizational habits'],
              cons: ['Engineers feel betrayed and will rapidly regress to apathy and turnover', 'Destroys all the trust and velocity built over the last 10 weeks']
            },
            riskLevel: 'High',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Immediate relapse. Sprint velocity collapsed back to 35 within two sprints.',
              detailedAnalysis: 'Reverting to command-and-control after proving the superiority of psychological safety triggers cynical employee despair. The team realized the transformation was an illusion, and resignations resumed.',
              metricDeltas: { velocity: -25, morale: -30, attritionRisk: 35, bugRate: 20, milestoneProgress: -10 },
              competitorReaction: 'Engineers who had turned down competitor offers called recruiters back.',
              stakeholderFeedback: 'Vikram (Senior Architect): "We proved autonomy works, and leadership put the chains right back on. I am leaving."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You executed a textbook organizational turnaround of Project Apollo, taking a toxic, paralyzed cross-functional engineering team from 14 weeks behind schedule to delivering on time with zero production defects. By instituting blameless retrospectives and private 1-on-1 listening tours to establish psychological safety, resolving destructive storming with an explicit RACI matrix and "What vs How" boundaries, unlocking intrinsic motivation through autonomous squad ownership and client impact, heroically shielding a junior developer during a critical defect crisis, and institutionalizing these practices enterprise-wide, you doubled sprint velocity from 32 to 72 points and collapsed attrition risk from 78% to near zero.',
      whyItHappened: 'Cross-functional project failures are rarely technical; they are almost universally sociotechnical and behavioral. When humans fear humiliation, they hide defects, blame colleagues, and hoard information. By treating team culture as an engineered system—grounded in psychological safety, clear decision rights (RACI), intrinsic motivators (autonomy, mastery, purpose), and servant leadership—you unlocked the latent human potential of an existing group of engineers without firing a single person or paying a single rupee in cash bribes.',
      conceptsApplied: [
        {
          name: 'Amy Edmondson\'s Psychological Safety',
          formulaOrModel: 'Psychological Safety = Shared belief that the team is safe for interpersonal risk-taking',
          explanation: 'In Google\'s famous Project Aristotle, psychological safety was identified as the single greatest predictor of team performance. When engineers know they will not be punished for admitting mistakes or raising difficult questions, innovation thrives and defects are caught early.',
          keyTakeaway: 'Blameless culture is not about lowering standards; it is about raising honesty.'
        },
        {
          name: 'Tuckman\'s Stages of Group Development',
          formulaOrModel: 'Forming -> Storming -> Norming -> Performing',
          explanation: 'Every newly created or reorganized team must pass through the Storming phase where egos, boundaries, and priorities clash. Effective leaders do not suppress storming; they facilitate its resolution through explicit role definitions and RACI governance to usher in the Norming phase.',
          keyTakeaway: 'Storming is a normal phase of development; lingering in storming without resolution is management failure.'
        },
        {
          name: 'Herzberg\'s Two-Factor (Motivation-Hygiene) Theory',
          formulaOrModel: 'Hygiene Factors (Dissatisfaction <-> No Dissatisfaction) vs Motivators (No Satisfaction <-> High Motivation)',
          explanation: 'Salary, company policies, and working conditions are Hygiene factors: if inadequate, they cause dissatisfaction, but improving them does not create passionate engagement. True motivation comes from Motivators: challenging work, autonomy, recognition, and personal growth.',
          keyTakeaway: 'You cannot buy discretionary passion with salary alone; you must design work that provides intrinsic purpose.'
        }
      ],
      expertExecutivePerspective: 'A Chief People Officer or Executive Coach at Google/Netflix would remark: "Round 4 was the ultimate test of leadership integrity. When the CEO demanded a scapegoat for the race-condition bug, 90% of mid-level managers would have sacrificed the junior engineer to protect their own skin. By stepping forward, absorbing the executive lightning, and taking personal accountability as the Director, management established a level of trust that transformed a demoralized group into an unstoppable high-performing unit."',
      alternativePaths: [
        {
          choiceTitle: 'Public Reprimands & PIP Threats (Round 1)',
          counterfactualConsequence: 'Threatening senior knowledge workers with PIPs during an already stressful crisis would have triggered the immediate resignation of Chief Architect Vikram, setting the project back by 4 months and ensuring corporate project cancellation.'
        },
        {
          choiceTitle: 'Scapegoating Junior Engineer Ananya (Round 4)',
          counterfactualConsequence: 'Firing Ananya to appease the CEO would have destroyed all psychological safety in a single instant. The remaining engineers would have stopped taking any initiative, 4 senior engineers would have resigned in solidarity, and the Apollo engine would have collapsed in production.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Google Project Aristotle (2015)',
          caseStudySummary: 'Google studied hundreds of engineering teams over several years to discover what made the most effective teams click. They found that intelligence, background, and tools were virtually irrelevant compared to Psychological Safety: team members feeling safe to take risks and speak candidly without fear of embarrassment.'
        },
        {
          company: 'The US Navy Submarine USS Santa Fe (David Marquet)',
          caseStudySummary: 'Captain David Marquet turned the worst-performing submarine in the US Navy into the #1 ranked vessel by shifting from traditional "Leader-Follower" command-and-control to "Leader-Leader" intent-based autonomy, giving sailors complete ownership over their decisions.'
        }
      ]
    }
  },
  {
    id: 'ob-leading-change',
    subjectId: 'ob',
    conceptId: 'kotter-change-model',
    relatedConcepts: ['Stakeholder Resistance Mapping', 'Power Bases & Influence', 'Culture Clash Management', 'Coalition Building'],
    title: 'Leading Organizational Change: Merger of Global Logistics Units',
    tagline: 'Apply Kotter\'s 8-Step Change framework to unify two warring corporate cultures into a modern digital supply chain powerhouse.',
    role: 'Vice President of Global Integration & Transformation, TransGlobal Logistics',
    company: 'TransGlobal Freight & Supply Chain Corp.',
    industry: 'Global Freight Forwarding, Intermodal Logistics & Supply Chain',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    background: {
      companyHistory: 'TransGlobal Logistics acquired regional European competitor "Nordic Cargo" in an $850M cross-border merger to create a unified intermodal transport powerhouse with 14,000 employees across 28 countries.',
      industryContext: 'The shipping and logistics industry is transitioning from manual paper manifests and faxed customs documents to real-time IoT tracking, automated digital freight matching, and centralized cloud dispatching.',
      currentSituation: 'Nine months post-merger, the integration is in crisis. TransGlobal\'s legacy US managers operate with top-down, metric-driven command hierarchies, while Nordic Cargo employees are accustomed to flat, consensus-driven Scandinavian workplace democracy. Nordic station managers are actively sabotaging the new cloud dispatch software ("OneFreight"), bypassing it to use local Excel spreadsheets. Customer shipment delivery delays have spiked by 34%.'
    },
    objectives: [
      'Achieve 95% global system adoption of the OneFreight digital dispatch platform across all 42 regional hubs.',
      'Cut inter-departmental conflict and resistance index from 82 to <20.',
      'Reduce post-merger voluntary key talent attrition from 24% to under 6%.'
    ],
    constraints: [
      'Must navigate European Works Councils and labor union legal collective bargaining agreements.',
      'Cannot shut down active freight hubs during the changeover; zero downtime tolerated by shipping clients.',
      'Integration must demonstrate $45M in synergies within 12 months to satisfy institutional bondholders.'
    ],
    initialMetrics: [
      { key: 'softwareAdoption', label: 'OneFreight System Adoption', value: 38, unit: '%', isGoodWhenHigh: true, benchmark: 95, description: 'Percentage of freight shipments booked through unified digital platform' },
      { key: 'resistanceScore', label: 'Resistance & Friction Index', value: 82, unit: '/100', isGoodWhenHigh: false, benchmark: 20, description: 'Measurement of passive and active employee pushback against integration directives' },
      { key: 'deliveryDelays', label: 'On-Time Delivery SLA', value: 66, unit: '%', isGoodWhenHigh: true, benchmark: 92, description: 'Percentage of global freight consignments arriving within promised delivery window' },
      { key: 'synergiesRealized', label: 'Realized Run-Rate Synergies', value: 8.5, unit: '$M', format: 'currency', isGoodWhenHigh: true, benchmark: 45.0, description: 'Annualized cost efficiencies achieved through consolidation' },
      { key: 'attritionRate', label: 'Key Talent Voluntary Attrition', value: 24.2, unit: '%', isGoodWhenHigh: false, benchmark: 6.0, description: 'Annualized turnover rate among senior hub managers and logistics dispatchers' }
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Month 1: Establishing True Sense of Urgency & Guiding Coalition',
        quarterOrTimeline: 'Integration Month 1 - Unfreezing the Organization',
        briefing: 'You arrive at the European headquarters in Rotterdam. Station managers view the new OneFreight software as an "arrogant American IT imposition" that strips away their local autonomy. They believe if they just delay long enough, corporate leadership will give up. Senior executives in New York want you to issue an executive ultimatum: "Use the software or be terminated."',
        marketIntel: {
          headline: 'Maersk and DHL expand digital freight platforms, threatening traditional freight forwarders',
          competitorMove: 'Digital-native freight brokers (Flexport) are winning multinational enterprise accounts with 100% API transparency.',
          macroEnvironment: 'Global trade volatility and port congestion require split-second algorithmic container rerouting.',
          internalWhisper: 'Veteran Rotterdam Hub Director: "We have run this port for 30 years with our own contacts and spreadsheets. New York bean-counters don\'t know how European customs work."'
        },
        urgentQuestion: 'How do you create genuine urgency and initiate Kotter\'s change process without triggering a union strike?',
        choices: [
          {
            id: 'c1-a',
            title: 'Create a "Burning Platform" Case & Form a Cross-Cultural Guiding Coalition',
            description: 'Convene an emergency summit of both TransGlobal and Nordic regional hub leaders. Share unvarnished commercial data: show that Flexport is taking 12% of customer volume and that without real-time tracking, major accounts (IKEA, Unilever) will cancel contracts within 6 months. Recruit the 5 most respected, skeptical Nordic station directors into a co-design "Guiding Coalition" with authority to adapt the software for European customs.',
            tradeOffs: {
              pros: ['Grounds change in existential market reality rather than arbitrary executive ego (Kotter Step 1: Urgency)', 'Co-opts informal union leaders by giving them genuine co-ownership of the solution (Kotter Step 2: Guiding Coalition)'],
              cons: ['Requires humble listening from New York executives and accepting software modifications', 'Takes 4 weeks of intensive stakeholder engagement workshops']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'The ice broke! Skeptical hub directors realized the threat was external, not internal.',
              detailedAnalysis: 'Change resistance drops when employees realize the status quo is more dangerous than the proposed future. Giving respected informal leaders a seat on the Guiding Coalition transformed them from saboteurs into vocal champions.',
              metricDeltas: { softwareAdoption: 14, resistanceScore: -26, deliveryDelays: 8, synergiesRealized: 6.2, attritionRate: -8.2 },
              competitorReaction: 'Flexport sales reps noticed TransGlobal accounts stopping their customer migrations.',
              stakeholderFeedback: 'Rotterdam Hub Director: "When we saw Unilever\'s cancellation warning letter, we understood. Having our input included in OneFreight changed everything."',
              theorySnippet: {
                framework: 'Kotter\'s 8-Step Change Model (Steps 1 & 2: Urgency & Guiding Coalition)',
                takeaway: 'People do not resist change; they resist being changed. Change begins when leaders reveal the burning platform and invite respected skeptics to co-steer the ship.'
              }
            }
          },
          {
            id: 'c1-b',
            title: 'Top-Down Executive Ultimatum & Termination of Resistant Managers',
            description: 'Send a company-wide memo signed by the CEO: anyone caught using Excel spreadsheets or failing to log into OneFreight by Friday will face immediate termination.',
            tradeOffs: {
              pros: ['Projects ruthless corporate strength and zero tolerance for disobedience', 'Sends an unmistakable message of executive intent'],
              cons: ['European Works Councils immediately file injunctions and declare an emergency harbor strike', 'Halts all shipping operations in Rotterdam, Antwerp, and Hamburg']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Catastrophic harbor strike. 18,000 containers frozen at Rotterdam port.',
              detailedAnalysis: 'Ignoring local labor laws and European labor council rights in cross-border acquisitions is fatal. The strike made global headlines, costing TransGlobal $4.2M per day in demurrage penalties.',
              metricDeltas: { softwareAdoption: -12, resistanceScore: 18, deliveryDelays: -24, synergiesRealized: -5.0, attritionRate: 16.0 },
              competitorReaction: 'Competitors rerouted cargo vessels and permanently absorbed TransGlobal clients.',
              stakeholderFeedback: 'Works Council Representative: "The management violated Dutch labor law. We have shut down the terminal until our dignity is respected."'
            }
          },
          {
            id: 'c1-c',
            title: 'Surrender & Let Each Region Use Whatever Software They Want',
            description: 'Abandon the unified OneFreight software integration. Allow European hubs to keep using legacy spreadsheets indefinitely.',
            tradeOffs: {
              pros: ['Avoids immediate conflict and employee pushback', 'Makes local station managers happy in the short term'],
              cons: ['Completely forfeits the $45M merger synergies and rationale for the $850M acquisition', 'TransGlobal becomes an uncoordinated, fragmented holding company with zero global visibility']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Integration stalled. TransGlobal stock tumbled 18% as Wall Street downgraded the merger.',
              detailedAnalysis: 'Surrendering on integration removes short-term friction but destroys long-term enterprise valuation. The company failed to provide global supply chain visibility, losing major multinational tenders.',
              metricDeltas: { softwareAdoption: -10, resistanceScore: -10, deliveryDelays: -6, synergiesRealized: -3.0, attritionRate: 4.0 },
              competitorReaction: 'DHL won the global IKEA account because TransGlobal could not track cross-border containers.',
              stakeholderFeedback: 'Lead Institutional Investor: "You paid $850M for an acquisition and gave up on integration after 30 days. We are demanding the CEO\'s resignation."'
            }
          }
        ]
      },
      {
        roundNumber: 2,
        title: 'Month 3: Creating and Communicating the Shared Transformation Vision',
        quarterOrTimeline: 'Integration Month 3 - The Vision Alignment',
        briefing: 'The Guiding Coalition is formed, but middle managers and frontline dispatchers are still confused about what the future looks like. TransGlobal\'s corporate mission statement ("Maximizing shareholder value through synergy optimization") sounds like corporate jargon to truck drivers and warehouse supervisors.',
        marketIntel: {
          headline: 'Gallup study: Only 22% of employees in merged companies understand their leadership\'s strategic vision',
          competitorMove: 'Leading logistics brands emphasize frontline empowerment and environmental sustainability.',
          macroEnvironment: 'Frontline logistics workers take immense pride in solving complex cargo puzzles under tight weather deadlines.',
          internalWhisper: 'Warehouse Supervisor: "All this synergy talk just means New York is going to fire half of us once the computer system works."'
        },
        urgentQuestion: 'How do you formulate and communicate an inspiring, credible vision that motivates frontline workers?',
        choices: [
          {
            id: 'c2-a',
            title: 'Frame the Vision as "The Green Corridor: Empowering Frontline Logistics Heroes"',
            description: 'Craft a clear, tangible vision: "OneFreight is not a surveillance tool; it is our co-pilot to eliminate empty truck miles, cut carbon emissions by 30%, and automate mindless customs paperwork so dispatchers spend time solving high-value customer logistics puzzles." Communicate through interactive town halls, visual infographics, and site visits by leadership.',
            tradeOffs: {
              pros: ['Connects technology adoption directly to human meaning, pride, and environmental sustainability (Kotter Step 3 & 4)', 'Directly disarms the fear that the software exists solely to automate layoffs'],
              cons: ['Must follow through with explicit commitments regarding worker transition pathways', 'Requires training leadership to speak simply without corporate jargon']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Emotional alignment achieved! Frontline workers embraced the vision of green efficiency.',
              detailedAnalysis: 'A compelling change vision speaks to both head (efficiency) and heart (purpose, sustainability, relief from tedious paperwork). Dispatchers realized that cutting empty truck miles made their jobs easier and more prestigious.',
              metricDeltas: { softwareAdoption: 18, resistanceScore: -22, deliveryDelays: 10, synergiesRealized: 11.4, attritionRate: -5.0 },
              competitorReaction: 'TransGlobal was featured in Supply Chain Quarterly as a model for green, digitized logistics.',
              stakeholderFeedback: 'Antwerp Dispatcher: "When they showed us that the system cuts 400 hours of manual customs data entry every month, we wanted it installed tomorrow."',
              theorySnippet: {
                framework: 'Kotter\'s Steps 3 & 4: Developing and Communicating the Change Vision',
                takeaway: 'A great change vision is simple, desirable, feasible, and imaginable. If you cannot explain the vision and how it benefits the frontline worker in under 5 minutes, it is not a vision.'
              }
            }
          },
          {
            id: 'c2-b',
            title: 'Hire a Top-Tier Consulting Firm to Deliver 120-Slide PowerPoint Presentations',
            description: 'Spend $1.8M on an external strategy firm to conduct formal 3-hour PowerPoint seminars explaining the economic synergy curves to warehouse workers.',
            tradeOffs: {
              pros: ['Looks polished and sophisticated for board presentations', 'Outsources the communication workload to consultants'],
              cons: ['Frontline workers immediately tune out dense academic financial charts', 'Reinforces the perception of an out-of-touch, wasteful corporate elite']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Alienated frontline. Workers rolled their eyes at expensive consulting jargon.',
              detailedAnalysis: 'Sending high-priced consultants in suits to lecture dockworkers on financial synergies breeds intense resentment. Trust between frontline and executive leadership deteriorated.',
              metricDeltas: { softwareAdoption: 2, resistanceScore: 8, deliveryDelays: -2, synergiesRealized: -1.8, attritionRate: 4.0 },
              competitorReaction: 'Employees leaked consulting slides to industry meme accounts on Instagram.',
              stakeholderFeedback: 'Dockworker: "They spent millions on fancy consultants telling us about \'EBITDA optimization\' while our forklift brakes are broken."'
            }
          },
          {
            id: 'c2-c',
            title: 'Surveillance Software Tracking: Log Keyboard Strokes to Force System Usage',
            description: 'Install background telemetry on all company computers to monitor whether employees are typing in OneFreight or Excel, docking pay for unapproved software usage.',
            tradeOffs: {
              pros: ['Provides 100% granular tracking of employee computer activity', 'Catches people secretly using Excel spreadsheets'],
              cons: ['Destroys trust, triggers widespread employee revolt, and violates European GDPR privacy regulations', 'Employees find creative workarounds (using personal phones) to avoid detection']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Aggressive/Disruptive',
            outcome: {
              summary: 'Legal disaster. European data privacy authorities levied a €4.5M GDPR fine.',
              detailedAnalysis: 'Surveillance software is illegal in many European jurisdictions without explicit labor union consent. Key station managers walked out in protest, paralyzing cargo dispatch.',
              metricDeltas: { softwareAdoption: -8, resistanceScore: 28, deliveryDelays: -18, synergiesRealized: -6.5, attritionRate: 14.0 },
              competitorReaction: 'Competitors ran recruitment ads: "Work for a logistics company that respects human dignity."',
              stakeholderFeedback: 'European Union Data Commissioner: "TransGlobal has engaged in unlawful employee biometric surveillance. Cease operations immediately."'
            }
          }
        ]
      },
      {
        roundNumber: 3,
        title: 'Month 6: Empowering Broad-Based Action & Generating Short-Term Wins',
        quarterOrTimeline: 'Integration Month 6 - Generating Momentum',
        briefing: 'You have cleared Kotter\'s early hurdles, but momentum is at risk of stalling. Regional dispatchers complain that the old IT permission architecture requires New York headquarters approval just to change a local truck delivery route, causing 4-hour delivery bottlenecks. You need to remove structural barriers (Kotter Step 5) and generate unmistakable short-term wins (Kotter Step 6).',
        marketIntel: {
          headline: 'Mid-merger fatigue sets in across major corporate integrations worldwide',
          competitorMove: 'Rivals are hoping TransGlobal gets bogged down in bureaucratic inertia.',
          macroEnvironment: 'Nothing builds faith in transformation like tangible, visible, undeniable success in the field.',
          internalWhisper: 'Hamburg Station Director: "If corporate gives us the authority to auto-reroute trucks around port strikes without waiting 4 hours for New York to wake up, we can win the regional BMW automotive parts contract."'
        },
        urgentQuestion: 'How do you empower local hubs and engineer a massive, visible short-term win?',
        choices: [
          {
            id: 'c3-a',
            title: 'Decentralize Operational Dispatch Rights + Launch "The Automotive Rapid Corridor" Pilot',
            description: 'Remove the New York approval bottleneck: grant local European hub managers algorithmic auto-reroute override authority in OneFreight. Launch a high-profile 30-day pilot for the BMW automotive parts corridor in Germany, offering public recognition and performance bonuses for the hub team that achieves 99% on-time delivery.',
            tradeOffs: {
              pros: ['Removes structural bureaucratic obstacles that disempowered employees (Kotter Step 5: Empowering Action)', 'Creates a highly visible, undeniable business victory within 30 days (Kotter Step 6: Short-Term Wins)'],
              cons: ['Relinquishes centralized corporate micromanagement control to local hub directors', 'Requires fast IT permission redeployment']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Sensational triumph! The BMW corridor achieved 99.4% on-time delivery, saving BMW $12M in factory shutdown risks.',
              detailedAnalysis: 'Empowering local frontline operators with decision authority removes bureaucratic paralysis. Generating a highly publicized, undeniable operational win converted remaining fence-sitters across all other hubs.',
              metricDeltas: { softwareAdoption: 22, resistanceScore: -20, deliveryDelays: 14, synergiesRealized: 16.5, attritionRate: -4.8 },
              competitorReaction: 'BMW awarded TransGlobal a 3-year exclusive European logistics contract.',
              stakeholderFeedback: 'Hamburg Hub Director: "Having the autonomy to make decisions in real time without corporate red tape made us feel proud again. The system actually works!"',
              theorySnippet: {
                framework: 'Kotter\'s Steps 5 & 6: Empowering Action & Generating Short-Term Wins',
                takeaway: 'Remove structural obstacles that block people from doing their jobs. Short-term wins provide the oxygen that keeps transformation alive against cynicism.'
              }
            }
          },
          {
            id: 'c3-b',
            title: 'Centralize All Dispatch Approvals Even Further into New York Headquarters',
            description: 'Require every single truck dispatch in Europe to be manually approved by a central committee in New York to ensure zero procedural deviations.',
            tradeOffs: {
              pros: ['Total centralized executive control over corporate procedure', 'Guarantees uniform adherence to corporate manuals'],
              cons: ['Time-zone differences create 6-hour shipment delays while European trucks idle waiting for New York to open', 'Paralyzes operational velocity and infuriates customers']
            },
            riskLevel: 'High',
            strategicOrientation: 'Operational-Efficiency',
            outcome: {
              summary: 'Operational gridlock. 400 trucks sat idling outside German factories waiting for New York emails.',
              detailedAnalysis: 'Centralizing operational execution across time zones in fast-moving industries is fatal. BMW threatened to cancel all contracts due to assembly line stoppages.',
              metricDeltas: { softwareAdoption: -5, resistanceScore: 15, deliveryDelays: -20, synergiesRealized: -8.0, attritionRate: 8.0 },
              competitorReaction: 'Competitors picked up emergency freight contracts from furious TransGlobal clients.',
              stakeholderFeedback: 'German Factory Manager: "Our assembly line stopped because your New York office was asleep while our cargo was sitting at the gate."'
            }
          },
          {
            id: 'c3-c',
            title: 'Fabricate Cosmetic Numbers to Show Wall Street an Artificial "Win"',
            description: 'Alter internal tracking metrics to artificially show 95% system adoption and fake synergy savings for the upcoming quarterly investor call.',
            tradeOffs: {
              pros: ['Temporarily boosts stock price on the day of the earnings call', 'Stops the Board from asking uncomfortable integration questions'],
              cons: ['Blatant securities fraud and accounting misrepresentation', 'Destroys all credibility inside the company as employees know the numbers are fake']
            },
            riskLevel: 'Aggressive',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Whistleblower scandal. SEC and auditor investigation launched.',
              detailedAnalysis: 'Faking operational change metrics to appease capital markets is illegal and corrosive. Internal auditors discovered the discrepancies, triggering corporate governance fallout.',
              metricDeltas: { softwareAdoption: -15, resistanceScore: 25, deliveryDelays: -10, synergiesRealized: -15.0, attritionRate: 20.0 },
              competitorReaction: 'Wall Street downgraded TransGlobal bonds to junk status.',
              stakeholderFeedback: 'Chief Compliance Officer: "All executive officers are under investigation for misleading investor earnings reports."'
            }
          }
        ]
      },
      {
        roundNumber: 4,
        title: 'Month 12: Anchoring the Transformation in Corporate Culture',
        quarterOrTimeline: 'Integration Month 12 - Institutionalizing the New Culture',
        briefing: 'Twelve months post-intervention, the transformation has succeeded. OneFreight software adoption has reached 94%, resistance has dropped below 15%, on-time delivery is at 93%, and realized synergies have crossed $48M. However, John Kotter warns that the final step (Step 8: Anchoring New Approaches in the Culture) is where most transformations fail—regressing back to old habits as soon as leadership looks away.',
        marketIntel: {
          headline: 'TransGlobal reports record quarterly operating margins, surpassing pre-merger profitability by 28%',
          competitorMove: 'Competitors are attempting to hire away your transformed bilingual cross-cultural dispatch managers.',
          macroEnvironment: 'Culture is cemented through promotion systems, folklore, and succession planning.',
          internalWhisper: 'HR Director: "Two senior VP promotions are open. Do we promote the old-school TransGlobal political insiders, or the collaborative leaders who drove this change?"'
        },
        urgentQuestion: 'How do you permanently anchor this new agile, cross-cultural operating culture so it never regresses?',
        choices: [
          {
            id: 'c4-a',
            title: 'Align Promotions, Succession Planning & Organizational Architecture with the New Culture',
            description: 'Promote the cross-cultural coalition leaders (including the Rotterdam Hub Director) into global Executive Vice President roles. Institutionalize annual "Cross-Continent Leadership Exchanges" where American dispatchers rotate through European hubs and vice-versa, tying 40% of executive bonuses directly to cross-functional collaboration and digital adoption.',
            tradeOffs: {
              pros: ['Permanently anchors new behaviors in the ultimate organizational currency: WHO GETS PROMOTED (Kotter Step 8)', 'Eliminates us-vs-them tribalism through permanent human rotation programs'],
              cons: ['Passes over some legacy New York political favorites who feel entitled to promotions', 'Requires ongoing budgetary commitment to international talent rotations']
            },
            riskLevel: 'Low',
            strategicOrientation: 'Customer-Centric',
            outcome: {
              summary: 'Transformation cemented permanently! TransGlobal became the global benchmark for post-merger integration.',
              detailedAnalysis: 'Culture only truly changes when the organization\'s promotion and incentive systems reward the new values. Promoting the heroes of the integration proved to every employee that collaborative, digital agility is the only path to career advancement at TransGlobal.',
              metricDeltas: { softwareAdoption: 4, resistanceScore: -6, deliveryDelays: 4, synergiesRealized: 6.8, attritionRate: -3.5 },
              competitorReaction: 'Rivals admitted TransGlobal was now operating as a unified, seamless global machine.',
              stakeholderFeedback: 'Newly Promoted EVP (Former Rotterdam Director): "Today we are not TransGlobal America or Nordic Cargo. We are one global team, proud of our tech, proud of our green efficiency, and proud of our people."',
              theorySnippet: {
                framework: 'Kotter\'s Step 8: Anchoring Change in Culture & Edgar Schein\'s Promotion Signals',
                takeaway: 'New practices must be anchored in social norms and shared values. The ultimate signal of culture change is who gets hired, promoted, and celebrated.'
              }
            }
          },
          {
            id: 'c4-b',
            title: 'Promote Old-School Corporate Insiders to Reassert Central New York Dominance',
            description: 'Now that the integration is stable, pass over the European coalition leaders and promote loyal New York corporate executives into all global leadership slots.',
            tradeOffs: {
              pros: ['Satisfies old-school corporate political cliques in New York headquarters', 'Reasserts traditional corporate hierarchy'],
              cons: ['European employees feel betrayed and realize the collaborative rhetoric was a cynical lie', 'Key European talent will resign, taking proprietary client relationships with them']
            },
            riskLevel: 'Moderate',
            strategicOrientation: 'Risk-Averse',
            outcome: {
              summary: 'Cynical employee backlash. Massive talent exodus across European operations.',
              detailedAnalysis: 'Promoting traditional political insiders after employees worked hard to change proves that the new values were superficial. Key hub managers resigned within 60 days.',
              metricDeltas: { softwareAdoption: -10, resistanceScore: 20, deliveryDelays: -8, synergiesRealized: -12.0, attritionRate: 18.0 },
              competitorReaction: 'Competitors hired your entire European management team to launch rival hubs.',
              stakeholderFeedback: 'Rotterdam Hub Director: "They used us to fix their software and then gave all the senior promotions to their friends in New York. We are leaving."'
            }
          },
          {
            id: 'c4-c',
            title: 'Disband All Change Programs and Cut Training Budgets to Boost Short-Term Cash',
            description: 'Declare the transformation 100% finished, cancel all ongoing digital training, eliminate cross-hub meetings, and pocket the cash.',
            tradeOffs: {
              pros: ['Saves $3M in annual training and travel expenses', 'Short-term margin bump for the next quarterly report'],
              cons: ['Without continuous reinforcement, regional stations will gradually drift back to local spreadsheet habits', 'Destroys the continuous learning momentum built over the year']
            },
            riskLevel: 'High',
            strategicOrientation: 'Financial/Margin',
            outcome: {
              summary: 'Slow cultural drift. Within 18 months, spreadsheets quietly reappeared in backroom offices.',
              detailedAnalysis: 'Change is not a one-time project; without ongoing reinforcement, entropy pulls organizations back to their comfortable legacy baseline.',
              metricDeltas: { softwareAdoption: -8, resistanceScore: 10, deliveryDelays: -4, synergiesRealized: -5.0, attritionRate: 6.0 },
              competitorReaction: 'Competitors surpassed TransGlobal\'s digital capabilities within two years.',
              stakeholderFeedback: 'IT Director: "New hires aren\'t being trained on OneFreight, so they are just copying old Excel templates from senior colleagues."'
            }
          }
        ]
      }
    ],
    educationalDebrief: {
      whatHappened: 'You led a monumental, cross-border post-merger cultural transformation at TransGlobal Logistics, unifying two hostile corporate cultures across 28 countries. By systematically applying John Kotter\'s 8-Step Change framework—establishing urgent existential market necessity (Flexport threat), co-opting influential skeptics into a cross-cultural Guiding Coalition, formulating an inspiring green logistics vision, decentralizing operational override authority to eliminate structural bottlenecks, delivering a high-profile short-term victory in the BMW automotive corridor, and permanently anchoring the new culture through promotions and succession planning—you drove digital software adoption from 38% to 98%, collapsed resistance, and delivered $51.5M in realized merger synergies.',
      whyItHappened: 'Cross-border mergers fail over 70% of the time, almost never because of financial arithmetic, but because of culture clash and change resistance. When leaders attempt to impose top-down mandates on autonomous professionals, they trigger active sabotage and passive defiance. Transformation succeeds when leaders treat change as an emotional, human journey: creating psychological safety, providing compelling purpose beyond stock price, removing structural barriers that frustrate frontline workers, and rewarding the new behaviors through promotions.',
      conceptsApplied: [
        {
          name: 'Kotter\'s 8-Step Process for Leading Change',
          formulaOrModel: 'Urgency -> Coalition -> Vision -> Communicate -> Empower -> Wins -> Consolidate -> Anchor in Culture',
          explanation: 'Kotter demonstrated that skipping any step in the sequence causes change to stall. Attempting to roll out software (Empowerment) without first establishing Urgency and a Guiding Coalition guarantees widespread resistance.',
          keyTakeaway: 'Change is a multi-stage campaign; you cannot shortcut the human alignment process.'
        },
        {
          name: 'Stakeholder Resistance Mapping & Co-Optation',
          formulaOrModel: 'Stakeholder Power vs Attitude Matrix: Convert High-Power Skeptics into Co-Leaders',
          explanation: 'The Rotterdam Hub Director was a high-power, high-influence skeptic. Instead of trying to defeat him politically, you invited him to co-design the software. When influential skeptics are given real ownership, they become your most powerful evangelists.',
          keyTakeaway: 'The best way to disarm an opponent of change is to make them a co-author of the future.'
        },
        {
          name: 'Edgar Schein\'s Levels of Organizational Culture',
          formulaOrModel: 'Artifacts (Software, Offices) -> Espoused Values (Missions) -> Basic Underlying Assumptions (Habits, Trust)',
          explanation: 'Culture does not change when you deploy a new software artifact or hang a motivational poster. It changes only when the underlying assumptions about survival, trust, and career advancement are realigned through tangible executive behavior.',
          keyTakeaway: 'True culture is revealed by who gets promoted when nobody is watching.'
        }
      ],
      expertExecutivePerspective: 'A Senior Partner in McKinsey\'s Organization & Transformation Practice would evaluate: "The mastery in this case was the patience shown in Month 1 and Month 6. Inexperienced executives mistake patience for weakness; they want to issue memos and mandate compliance by Friday. By taking the time to share real commercial data, form the cross-cultural coalition, and decentralize dispatch authority to empower the BMW corridor pilot, management built an organic groundswell of support that made adoption self-sustaining."',
      alternativePaths: [
        {
          choiceTitle: 'The Top-Down Executive Ultimatum (Month 1)',
          counterfactualConsequence: 'Issuing an ultimatum to European hub managers would have triggered an immediate harbor strike under Works Council protection, freezing 18,000 containers, costing $4.2M/day in demurrage penalties, and forcing the Board to abort the integration.'
        },
        {
          choiceTitle: 'Promoting Old-School New York Insiders (Month 12)',
          counterfactualConsequence: 'Passing over the European coalition leaders to reward corporate cronies would have proven that the collaborative transformation was a lie. The entire senior European station leadership would have resigned, crippling global freight operations.'
        }
      ],
      realWorldParallels: [
        {
          company: 'Daimler-Chrysler Merger (1998)',
          caseStudySummary: 'The infamous $36B "merger of equals" collapsed into a catastrophic failure due to severe cultural clash between hierarchical German engineering perfectionism and informal American marketing-driven culture, ultimately destroying over $30B in shareholder value.'
        },
        {
          company: 'Lou Gerstner\'s Transformation of IBM (1993-2002)',
          caseStudySummary: 'Gerstner saved IBM from bankruptcy by shifting the company from siloed hardware manufacturing to integrated enterprise services. He achieved this not through technology, but by restructuring incentives, rewarding cross-departmental collaboration, and anchoring customer-centric values in the culture.'
        }
      ]
    }
  }
];
