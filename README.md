# STRATEX MBA LAB
### Next-Gen Experiential Management Learning Management System

> *"Don't just teach me how businesses work. Put me in charge of one."*

**STRATEX MBA** is a real-world, simulation-driven management learning platform designed for MBA students, executive trainees, and business leaders. Instead of learning theoretical models through static slides or multiple-choice questions, students step into executive roles (CEO, CMO, VP of Operations, Head of Strategy), make high-stakes trade-off decisions under uncertainty, and experience live business consequences.

---

## 🌟 Key Highlights

- **16 Interactive Business Simulations across 8 MBA Core Disciplines:**
  - 📢 **Marketing Management:** FMCG beverage brand strategy, digital vs. traditional allocation, retail margin defense.
  - 🚀 **Product Management:** B2B SaaS product-market fit, freemium conversion, tech debt vs. growth.
  - 📈 **Microeconomics:** Dynamic airline pricing, price elasticity of demand, marginal revenue vs. fixed costs.
  - 👥 **Organizational Behaviour:** Cross-functional friction, psychological safety, engineering incentive alignment.
  - 🧭 **Business Strategy:** Electric vehicle transition, incumbent ambidexterity, vertical integration.
  - 💰 **Financial Resource Analysis & Accounting:** Working capital turnaround, Cash Conversion Cycle (CCC), debt restructuring.
  - 📊 **Business Statistics & Analytics:** Multivariate regression, A/B test sample sizing, hypothesis testing.
  - 📦 **Operations & Supply Chain Management:** Theory of Constraints (TOC), bottleneck elevation, buffer management.

- **Realistic Executive Decision Engine:**
  - Dynamic KPI shifts (Market Share, Cash Runway, EBITDA Margin, Burn Rate, etc.).
  - Non-binary decision trade-offs: every path involves competing objectives, stakeholder reactions, and counterfactuals.
  - Multi-round strategic storylines where outcomes in Round 1 directly impact challenges in subsequent quarters.

- **Rigorous Educational Debriefs:**
  - *"What Happened & Why It Happened"* deep dives.
  - Theoretical framework mapping (STP, DuPont, TOC, Kotter 8-Step, Little's Law, RICE, JTBD).
  - Counterfactual analysis: examining alternative pathways and missed opportunities.
  - Real-world case study parallels (Inditex/Zara, Netflix, Toyota Rescue Database, Google Project Aristotle).

- **Personalized Decision Analytics & Behavioral Fingerprinting:**
  - Executive trait metrics: **Risk Appetite**, **Strategic Horizon**, **Customer vs. Margin Orientation**, and **Analytical Prudence**.
  - Dynamic Concept Mastery tracking.
  - AI Adaptive Learning recommendations suggesting next optimal simulations.

- **Enterprise-Grade Student Authentication & Isolation:**
  - Native **Web Crypto PBKDF2-HMAC-SHA256** password hashing with 100,000 iterations and per-student 16-byte random salts.
  - Completely isolated progress and simulation records per Student ID (`MBA2026001`, `MBA2026002`, etc.).
  - Identity-verified account recovery ("Forgot Password?") and student provisioning.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS v4, Lucide Icons
- **Security & Cryptography:** Web Crypto API (SubtleCrypto PBKDF2 + SHA-256)
- **Effects:** Canvas Confetti

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18+ or 20+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/harshalbhatt346/STRATEX-MBA.git

# Navigate into project directory
cd STRATEX-MBA

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Typecheck and build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 🔑 Demo Cohort Credentials

You can immediately test the platform using any of the pre-provisioned demo MBA candidate accounts:

| Student Name | Student ID | Password | Role |
| :--- | :--- | :--- | :--- |
| **Alex Mercer** | `MBA2026001` | `Password@123` | MBA Candidate (Class of 2027) |
| **Priya Sharma** | `MBA2026002` | `Password@123` | MBA Candidate (Class of 2027) |
| **Rohan Mehta** | `MBA2026003` | `Password@123` | MBA Candidate (Class of 2027) |

*(Or click **Activate Account** on the login page to provision your own unique Student ID).*

---

## 📄 License

Educational and research project for MBA learning methodologies. All rights reserved.
