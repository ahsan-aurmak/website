# AURMAK Website Build Specification (Figma Make)

## 1. Purpose
This document defines the full content and product structure for rebuilding the AURMAK website in Figma Make.

This specification intentionally excludes visual styling direction (colour, typography, spacing, visual effects) so Figma Make can generate design decisions independently.

## 2. Product Scope
Build a multi-page corporate website for AURMAK with:

1. Company and service positioning pages
2. Case studies index and six dedicated case study detail pages
3. Insights library with topic filtering
4. Team, Careers, and Job Application flow
5. Contact form flow
6. Legal pages (Privacy, Cookies, Terms)
7. Shared global navigation, footer, and localisation entry points

## 3. Information Architecture (Sitemap)
| Route | File | Navigation Label | Purpose |
|---|---|---|---|
| `/` | `index.html` | Home | Landing page and business summary |
| `/about.html` | `about.html` | About | Company model and operating footprint |
| `/services.html` | `services.html` | Services | Service pillars and delivery confidence |
| `/how-we-work.html` | `how-we-work.html` | How We Work | Delivery lifecycle and trust markers |
| `/solutions.html` | `solutions.html` | Solutions | Sector deployment and outcomes |
| `/case-studies.html` | `case-studies.html` | Case Studies | Filterable case study listing |
| `/case-study-gridpulse-command-centre.html` | same | Case Study Detail | Power case |
| `/case-study-siteflow-pmo.html` | same | Case Study Detail | Construction case |
| `/case-study-assetnexus-tower-suite.html` | same | Case Study Detail | Real estate case |
| `/case-study-plantos-modern-erp.html` | same | Case Study Detail | Industrial case |
| `/case-study-leaselens-intelligence.html` | same | Case Study Detail | Real estate sales case |
| `/case-study-fieldsense-maintenance-ai.html` | same | Case Study Detail | Industrial maintenance AI case |
| `/insights.html` | `insights.html` | Insights | Filterable thought-leadership library |
| `/lab.html` | `lab.html` | The Lab | Internal product and R&D model |
| `/team.html` | `team.html` | Team | Board and leadership |
| `/career.html` | `career.html` | Careers | Open roles listing |
| `/job-detail.html?job=<slug>` | `job-detail.html` | Job Detail | Dynamic role detail + application form |
| `/contact.html` | `contact.html` | Contact | Office details + contact form |
| `/privacy.html` | `privacy.html` | Privacy Policy | Legal page |
| `/cookies.html` | `cookies.html` | Cookies Policy | Legal page |
| `/terms.html` | `terms.html` | Terms & Conditions | Legal page |

## 4. Global IA Components
### 4.1 Header Navigation
Primary navigation pattern:

1. Home
2. Services
3. Solutions
4. Case Studies
5. Insights
6. About (parent group)
7. Contact

About group menu items:

1. About
2. Team
3. The Lab
4. Careers

Mobile behaviour:

1. Toggle button opens and closes nav
2. Menu closes on link click on mobile breakpoint
3. Menu closes on outside click and Escape key

### 4.2 Footer Navigation
Footer text links:

1. Home
2. About
3. Services
4. How We Work
5. Solutions
6. Case Studies
7. Insights
8. The Lab
9. Team
10. Careers
11. Contact

Footer legal links:

1. Privacy Policy
2. Cookies Policy
3. Terms & Conditions

Footer social links:

1. LinkedIn: `https://www.linkedin.com/company/aurmak`
2. X: `https://x.com/aurmak`
3. YouTube: `https://www.youtube.com/@aurmak`

Footer language links:

1. EN
2. AR

Language implementation status:

1. English is active
2. Arabic entry exists but is not yet available
3. Arabic click shows status: "Arabic version coming soon."

Footer brand text:

1. Company: `AURMAK`
2. Locations: `London | Dubai | Lahore`
3. Copyright: `© <current year> AURMAK. All rights reserved.`

## 5. Page Specifications (Content + Structure)
## 5.1 Home (`/`)
### SEO
Title: `Modernising How Business Works | AURMAK`

Meta description: `AURMAK is a London-GCC technology group helping organisations digitise operations using AI-driven systems and automation.`

### Hero
Eyebrow: none

H1: `Build Faster. Operate Smarter.`

Lead: `We help organisations modernise operations through AI-enabled systems, automation, and disciplined execution from strategy to rollout.`

Primary CTA: `Review Services` -> `/services.html`

Secondary CTA: `Request Consultation` -> `/contact.html`

### Section A: Operational Signals (3 linked cards)
1. Label: `Regional Operating Centres`
Value: `3`
Body: `London, Dubai, and Lahore integrated delivery model.`
Link: `/about.html`

2. Label: `Core Delivery Pillars`
Value: `4`
Body: `SaaS, Modernisation, AI Integration, and Smart BMS.`
Link: `/services.html`

3. Label: `Measured Outcomes`
Value: `95%`
Body: `Reporting quality consistency after data model alignment.`
Link: `/case-studies.html`

### Section B: Operational Differentiators (3 content cards with linked image)
1. H3: `AI-Enabled Build Velocity`
Body: `We combine human engineering judgement with AI tooling to reduce cycle time without sacrificing quality.`
Image alt: `Futuristic robotic hardware and circuit architecture`
Link: `/services.html`

2. H3: `Enterprise Operating Discipline`
Body: `Programmes are executed through structured checkpoints, compliance controls, and measurable operating outcomes.`
Image alt: `Engineers operating AI-enabled industrial systems`
Link: `/solutions.html`

3. H3: `Venture-Led Innovation Loop`
Body: `Client insight feeds internal product incubation, helping us apply proven patterns faster across sectors.`
Image alt: `Smart city architecture at night with connected digital infrastructure`
Link: `/lab.html`

## 5.2 About (`/about.html`)
### SEO
Title: `About AURMAK | Global Vision, Local Execution`

Meta description: `Learn how AURMAK combines strategic leadership in London and Dubai with engineering delivery in Lahore.`

### Hero
Eyebrow: `About AURMAK`

H1: `Global Vision.`

Lead: `AURMAK is a technology company backed by an established international technology group. We combine strategic leadership in London and Dubai with disciplined engineering execution from Lahore to deliver transformation with clear ownership.`

### Section A: Regional Offices (3 columns)
1. `London` -> `Strategic headquarters for governance, commercial direction, and portfolio-level decision-making.`
2. `Dubai` -> `Regional execution and client coordination centre for GCC programmes and enterprise implementation.`
3. `Lahore` -> `Engineering and integration hub delivering software builds, modernisation programmes, and quality assurance.`

### Section B: Model
H2: `Global HQ / Local Delivery`

List:

1. International governance standards anchored in London and Dubai.
2. Disciplined engineering delivery led from Lahore.
3. Integrated strategy and execution model under shared leadership oversight.
4. Operational maturity supported by established UK and UAE parent foundations.

Supporting image alt: `Global command centre display wall with technical overlays`

## 5.3 Services (`/services.html`)
### SEO
Title: `Services | AURMAK Enterprise Technology Delivery`

Meta description: `AURMAK services include SaaS product development, legacy system modernisation, AI integration, and building management systems.`

### Hero
Eyebrow: `Services`

H1: `Structured Delivery.`

Lead: `We deliver through defined frameworks that align business objectives, architecture decisions, and accountable implementation.`

### Section A: Core Service Pillars (4 cards)
1. `SaaS Product Development` -> `Building enterprise SaaS products through defined delivery models that reduce risk and accelerate validated market entry.`
2. `Legacy System Modernisation` -> `Modernising legacy environments to improve security posture, scalability, and operational reliability.`
3. `AI Integration` -> `Implementing AI capabilities within governed models to improve decision speed, process quality, and operational control.`
4. `Building Management Systems` -> `Deploying building and facility automation systems that improve energy performance, monitoring, and infrastructure oversight.`

### Section B: Delivery Discipline
H2: `Delivery Discipline`

List:

1. Defined implementation stages with clear ownership and review gates.
2. Governance, security, and compliance integrated from the start.
3. Cross-functional execution led by accountable delivery leadership.
4. Performance tracking aligned to agreed commercial and operational outcomes.

Technical diagram semantic labels:

1. Data Layer
2. AI Services
3. BMS
4. Enterprise Operations Dashboard

### Section C: Transition to Framework
Card 1:

1. H2: `How We Work`
2. Body: `Our delivery method covers discovery, audit, roadmap, pilot, rollout, governance, and long-term support with clear accountability at each stage.`
3. CTA: `View Delivery Framework` -> `/how-we-work.html`

Card 2:

1. H3: `Built for Enterprise Confidence`
2. Body: `Security practices, compliance awareness, QA discipline, and formal data handling controls are embedded in every engagement.`

## 5.4 How We Work (`/how-we-work.html`)
### SEO
Title: `How We Work | AURMAK Delivery Method`

### Hero
Eyebrow: `Delivery Framework`

H1: `How We Work.`

Lead: `We deliver with a structured model that balances speed, control, and accountability from first briefing through long-term support.`

### Section A: Delivery Lifecycle
Eyebrow: `Seven-stage execution model`

H2: `Delivery Lifecycle`

Intro: `Each stage has clear outputs, review checks, and named owners before we move ahead.`

7 stages:

1. `Discovery` -> `Define business priorities, decision constraints, and success criteria with key stakeholders.`
2. `Audit` -> `Assess architecture, data quality, integrations, and process risk before technical decisions are locked.`
3. `Roadmap` -> `Translate findings into phased scope, ownership, milestones, and measurable delivery outcomes.`
4. `Pilot` -> `Validate assumptions with a controlled deployment, baseline metrics, and rapid iteration loops.`
5. `Rollout` -> `Roll out in planned waves with release checks, environment controls, and adoption planning.`
6. `Governance` -> `Run regular operating reviews covering delivery cadence, quality signals, and commercial performance.`
7. `Support` -> `Provide ongoing optimisation, incident response, and enhancement planning to maintain performance over time.`

### Section B: Trust Markers
H2: `Trust Markers`

Body: `Every engagement includes operational safeguards expected in enterprise delivery environments.`

CTA: `Arrange a Consultation` -> `/contact.html`

List:

1. Security Practices: Principle-of-least-privilege access, environment isolation, and controlled credential handling.
2. Compliance Awareness: Delivery aligned to sector obligations, audit readiness, and documented decision trails.
3. Contract Model: Clear scope definitions, change-control process, and stage-gated commercial accountability.
4. Delivery Governance: Fixed review cadence, escalation pathways, and transparent milestone reporting.
5. QA Approach: Structured test coverage, regression control, and release sign-off before production rollout.
6. Data Handling: Defined retention boundaries, role-based access, and secure transfer protocols.

## 5.5 Solutions (`/solutions.html`)
### SEO
Title: `Solutions | Enterprise-Grade Industrial Digitisation | AURMAK`

Meta description: `AURMAK delivers bespoke enterprise dashboards and industrial digitisation solutions for power, construction, and real estate sectors.`

### Hero
Eyebrow: `Solutions`

H1: `Industrial Digitisation.`

Lead: `We build systems that give teams clearer operational visibility, tighter execution control, and faster decisions.`

### Section A: Solution Domains
1. `Power & Construction Systems` -> `Operational platforms for power and construction contexts requiring controlled delivery and real-time visibility.`
2. `Real Estate & Industrial Platforms` -> `Enterprise dashboards, ERP systems, and automation layers designed around measurable business outcomes.`

### Section B: 3 Outcome Pillars
1. `Single Pane` -> `Operational and executive visibility in one interface.`
2. `Data Integrity` -> `Consistent metrics with auditable lineage across systems.`
3. `Operational Pace` -> `Faster decisions with context-rich, live reporting.`

### Section C: Deployment Contexts
H2: `Deployment Contexts`

List:

1. Production oversight and operations intelligence.
2. Facilities and estate performance monitoring.
3. Portfolio-level reporting and project control environments.
4. Regional command views for distributed operations teams.

Supporting image alt: `Digital operations room with live analytics dashboards`

## 5.6 Case Studies (`/case-studies.html`)
### SEO
Title: `Case Studies | AURMAK`

### Hero
Eyebrow: `Case Studies`

H1: `Case Studies.`

Lead: `Explore selected programmes delivered across power, construction, real estate, and industrial operations. Each case shows the operating challenge, the engineering approach, and measurable outcomes.`

### Section A: Filter Controls
Filter chips:

1. All
2. Power
3. Construction
4. Real Estate
5. Industrial

### Section B: Case Grid (6 cards)
1. Sector meta: `Power · Saudi Arabia`
Title: `GridPulse Command Centre`
Summary: `Unified plant and field telemetry into one executive-grade operating dashboard with governed data pipelines.`
KPIs: `38% Faster incident resolution`, `94% Reporting consistency`
CTA: `View Case Study` -> `/case-study-gridpulse-command-centre.html`

2. Sector meta: `Construction · United Arab Emirates`
Title: `SiteFlow PMO Dashboard`
Summary: `Built a cross-project control tower linking schedule, cost, and procurement milestones for leadership visibility.`
KPIs: `31% Reduction in reporting effort`, `22% Improved schedule adherence`
CTA -> `/case-study-siteflow-pmo.html`

3. Sector meta: `Real Estate · Dubai`
Title: `AssetNexus Tower Suite`
Summary: `Integrated building management systems across multiple towers to centralise alarms, energy data, and asset health.`
KPIs: `19% Energy use optimisation`, `4.7x Faster alert triage`
CTA -> `/case-study-assetnexus-tower-suite.html`

4. Sector meta: `Industrial · Pakistan`
Title: `PlantOS Modern ERP Core`
Summary: `Modernised legacy ERP workflows with phased migration, stronger security controls, and full audit traceability.`
KPIs: `47% Lower process latency`, `100% Audit trail completeness`
CTA -> `/case-study-plantos-modern-erp.html`

5. Sector meta: `Real Estate · Saudi Arabia`
Title: `LeaseLens Sales Intelligence`
Summary: `Delivered a developer sales intelligence stack combining CRM, lead quality scoring, and pipeline forecasting.`
KPIs: `27% Increase in qualified leads`, `35% Faster forecast reporting`
CTA -> `/case-study-leaselens-intelligence.html`

6. Sector meta: `Industrial · GCC`
Title: `FieldSense Maintenance AI`
Summary: `Implemented AI-assisted preventive maintenance planning to reduce repeat faults and improve field task sequencing.`
KPIs: `29% Reduction in repeat faults`, `41% Better technician utilisation`
CTA -> `/case-study-fieldsense-maintenance-ai.html`

### Section C: KPI Summary
1. `6` -> `Mock delivery programmes across priority sectors.`
2. `4` -> `Sectors represented: power, construction, real estate, and industrial.`
3. `100%` -> `Case studies mapped to measurable business outcomes.`

### Section D: CTA Band
H2: `Need Similar Results in Your Operating Context?`

Lead: `We can map your current systems, identify delivery priorities, and define a practical implementation roadmap.`

CTA: `Arrange a Consultation` -> `/contact.html`

## 5.7 Case Study Detail Template
Common sections across all case detail pages:

1. Hero with case category and lead
2. Primary CTAs: Discuss Similar Programme, Back to Case Studies
3. Project Snapshot (facts definition list)
4. The Challenge
5. What We Built
6. Outcomes
7. KPI summary row

Additional section on GridPulse detail page:

1. Delivery Journey (3-step sequence)

### 5.7.1 GridPulse Command Centre (`/case-study-gridpulse-command-centre.html`)
Hero kicker: `Saudi Arabia · 18-Week Programme · Operations Command Centre`

Lead: `A regional utility needed one trusted operating view across plant performance, outages, and field response. We delivered a governed command environment for executive and operational teams.`

Hero metrics:

1. `38%` faster incident response
2. `94%` reporting consistency
3. `24/7` monitoring readiness

Snapshot:

1. Client Type: Regional power operator
2. Region: Saudi Arabia
3. Delivery Window: 18 weeks
4. Engagement: Platform modernisation and data integration
5. Programme Focus: Control room visibility and incident execution speed

Challenge: `Operations data sat across SCADA exports, maintenance logs, and spreadsheet reports. Leadership had delayed visibility and field teams lacked a common incident picture.`

What We Built body: `We delivered a central dashboard environment with staged data ingestion, quality controls, and role-based operational views for control room, maintenance, and leadership teams.`

What We Built list:

1. Unified telemetry and work-order feeds with governed schemas.
2. Live incident board with criticality scoring and escalation logic.
3. Executive view for downtime, dispatch, and plant-level variance.

Outcomes list:

1. 38% faster incident resolution across priority service zones.
2. 94% reporting consistency after data quality standardisation.
3. Single operating picture adopted by field and central teams.

Delivery Journey:

1. Signal Mapping: Mapped operational signals across SCADA, maintenance systems, and field reporting inputs.
2. Command Layer Build: Designed command views for control-room teams, engineering managers, and executive decision-makers.
3. Operational Adoption: Introduced alert prioritisation workflows, escalation logic, and training-led rollout governance.

KPI row:

1. `38%` Faster incident response time.
2. `94%` Reporting consistency across plants.
3. `24/7` Monitoring capability with escalation controls.

### 5.7.2 SiteFlow PMO Dashboard (`/case-study-siteflow-pmo.html`)
Lead: `A multi-project construction programme needed dependable visibility across schedule, cost, and procurement signals. We built a PMO dashboard that unified delivery governance across stakeholders.`

Snapshot:

1. Client Type: Property development group
2. Region: United Arab Emirates
3. Delivery Window: 14 weeks
4. Engagement: PMO dashboard and workflow automation

Challenge: `Project teams relied on manual updates from different contractors and formats. Leadership reviews were delayed and risk escalation often arrived too late.`

What We Built: `We implemented a construction control tower that connected planning inputs, procurement checkpoints, and on-site progress into one reporting layer.`

List:

1. Automated daily progress ingestion from site teams.
2. Risk heatmap with variance and delayed-milestone flags.
3. Weekly board-ready pack generated from live project data.

Outcomes:

1. 31% reduction in manual reporting effort for PMO teams.
2. 22% improvement in schedule adherence on active projects.
3. Single governance workflow across client, consultant, and contractor groups.

KPI row:

1. `31%` Lower reporting overhead.
2. `22%` Improvement in schedule adherence.
3. `12` Projects tracked through one dashboard.

### 5.7.3 AssetNexus Tower Suite (`/case-study-assetnexus-tower-suite.html`)
Lead: `A high-rise portfolio operator required one operational lens across alarms, energy performance, and engineering tasks. We designed a central BMS operations suite to standardise control.`

Snapshot:

1. Client Type: Real estate asset operator
2. Region: Dubai
3. Delivery Window: 16 weeks
4. Engagement: BMS integration and operations analytics

Challenge: `Each tower ran its own controls and alerting conventions. Engineering teams had fragmented performance data and limited cross-site benchmarking.`

What We Built: `We integrated BMS feeds into a unified monitoring and performance environment with alert prioritisation and portfolio-level visibility.`

List:

1. Centralised alarms, equipment status, and asset health scoring.
2. Energy baseline modelling by tower and asset category.
3. Service workflow linkage for engineering response tracking.

Outcomes:

1. 19% energy use optimisation across priority tower clusters.
2. 4.7x faster alert triage for critical systems.
3. 98% adherence to internal response SLAs.

KPI row:

1. `19%` Energy performance improvement.
2. `4.7x` Faster alert prioritisation.
3. `98%` Engineering SLA adherence.

### 5.7.4 PlantOS Modern ERP Core (`/case-study-plantos-modern-erp.html`)
Lead: `A manufacturing operation was constrained by ageing ERP modules and disconnected workflows. We delivered a phased modernisation programme without disrupting production continuity.`

Snapshot:

1. Client Type: Manufacturing plant network
2. Region: Pakistan
3. Delivery Window: 20 weeks
4. Engagement: ERP modernisation and security hardening

Challenge: `Legacy workflows depended on spreadsheet workarounds and unsupported modules. Core approvals lacked traceability and process latency affected operational planning.`

What We Built: `We re-architected core ERP modules, introduced governance checkpoints, and migrated data in controlled phases aligned with plant operations.`

List:

1. Procurement, inventory, and maintenance modules rebuilt for scale.
2. Role-based security model with full audit tracing.
3. Phased migration plan with rollback controls and validation gates.

Outcomes:

1. 47% reduction in process latency across critical workflows.
2. 100% audit trail completeness for approvals and exceptions.
3. 26% improvement in planning accuracy for production support functions.

KPI row:

1. `47%` Lower workflow latency.
2. `100%` Audit trail completeness.
3. `26%` Improvement in planning accuracy.

### 5.7.5 LeaseLens Sales Intelligence (`/case-study-leaselens-intelligence.html`)
Lead: `A developer sales organisation needed better signal quality from lead to close. We delivered a commercial intelligence stack connecting CRM, campaign analytics, and forecast modelling.`

Snapshot:

1. Client Type: Regional property developer
2. Region: Saudi Arabia
3. Delivery Window: 12 weeks
4. Engagement: Sales intelligence and CRM integration

Challenge: `Sales and marketing teams worked in separate systems with inconsistent lead qualification methods. Forecast confidence remained low during launch cycles.`

What We Built: `We deployed a unified reporting and scoring layer across lead intake, campaign channels, and sales conversion stages for commercial decision-makers.`

List:

1. Lead quality scoring model with source-level attribution.
2. Pipeline performance dashboards by project and segment.
3. Weekly forecasting workflow for commercial leadership.

Outcomes:

1. 27% increase in qualified leads entering sales pipeline.
2. 35% faster commercial forecast reporting cycle.
3. 2.3x improvement in marketing-to-sales attribution clarity.

KPI row:

1. `27%` Increase in qualified leads.
2. `35%` Faster forecast reporting.
3. `2.3x` Improvement in attribution clarity.

### 5.7.6 FieldSense Maintenance AI (`/case-study-fieldsense-maintenance-ai.html`)
Lead: `A distributed maintenance operation needed better planning precision and fewer repeat breakdowns. We introduced AI-assisted maintenance planning with practical workflow controls.`

Snapshot:

1. Client Type: Industrial maintenance services group
2. Region: GCC
3. Delivery Window: 15 weeks
4. Engagement: AI planning and field mobility integration

Challenge: `Maintenance planning depended on manual judgement, creating uneven task quality and recurring equipment faults. Teams lacked a consistent prioritisation model.`

What We Built: `We integrated AI-assisted planning recommendations into existing maintenance workflows with controls for supervisor review and field execution.`

List:

1. Fault pattern analysis linked to preventive task scheduling.
2. Work-order prioritisation with operational criticality scoring.
3. Mobile-ready field execution views for technicians and supervisors.

Outcomes:

1. 29% reduction in repeat faults on monitored assets.
2. 41% improvement in technician utilisation efficiency.
3. 34% faster maintenance planning cycle for weekly schedules.

KPI row:

1. `29%` Reduction in repeat faults.
2. `41%` Improvement in technician utilisation.
3. `34%` Faster planning cycle.

## 5.8 Insights (`/insights.html`)
### SEO
Title: `Insights | AURMAK Product and Design Perspectives`

### Hero
Eyebrow: `Insights`

H1: `Design and UX Thinking.`

Lead: `A curated library of long-form insights on UX, product strategy, SaaS delivery, and enterprise design execution.`

### Topic Filters
1. All Topics
2. SaaS
3. UX Design
4. Product Strategy
5. AI Systems
6. Leadership

### Insight Cards (9)
1. Topic: AI Systems
Title: Designing AI Dashboards for Operational Clarity
Body: How to structure dashboard hierarchies so executives and operators both see what matters without noise.
Meta: UX Strategy · 7 min read
CTA: Read Full Article
URL: `https://www.linkedin.com/in/vertage/recent-activity/articles/`

2. Topic: Product Strategy
Title: From Features to Decisions: A Better Product Review Model
Body: A practical framework for reviewing product roadmaps through business decisions, not just feature velocity.
Meta: Product Leadership · 6 min read
URL: LinkedIn above

3. Topic: UX Design
Title: Modernising Legacy UX in Enterprise Platforms
Body: How to redesign legacy interfaces incrementally without disrupting mission-critical operations.
Meta: Enterprise Design · 8 min read
URL: LinkedIn above

4. Topic: UX Design
Title: UX Governance for Multi-Region Product Teams
Body: Setting design standards that scale across London, Dubai, and Lahore while preserving delivery speed.
Meta: Design Systems · 9 min read
URL: `https://medium.com/@ahsanjalil`

5. Topic: UX Design
Title: Reducing Cognitive Load in Industrial Interfaces
Body: Design techniques for control-room tools where speed, safety, and comprehension are equally critical.
Meta: Industrial UX · 8 min read
URL: Medium above

6. Topic: Product Strategy
Title: Designing Product Metrics That Actually Change Behaviour
Body: A practical approach to selecting UX and product metrics that lead to accountable decisions.
Meta: Product Analytics · 7 min read
URL: Medium above

7. Topic: SaaS
Title: Enterprise UX Patterns for High-Stakes Workflows
Body: Pattern-level guidance for designing transaction-critical systems with auditability and speed.
Meta: Enterprise UX · 10 min read
URL: `https://www.toptal.com/designers`

8. Topic: Leadership
Title: Design Leadership in Enterprise Delivery Teams
Body: How design leadership can balance client delivery and internal product incubation without dilution.
Meta: Leadership · 8 min read
URL: Toptal above

9. Topic: AI Systems
Title: AI-Assisted Product Discovery: Risks and Controls
Body: Where AI can accelerate discovery and where governance is needed to avoid strategic drift.
Meta: AI Product Strategy · 9 min read
URL: Toptal above

### Insights KPI Row
1. `9+` -> Featured long-form design and product insights.
2. `5` -> Core topics: SaaS, UX Design, Product Strategy, AI Systems, and Leadership.
3. `100%` -> Focused on practical enterprise delivery and decision quality.

## 5.9 The Lab (`/lab.html`)
### SEO
Title: `The Venture Lab | AURMAK`

Meta description: `Discover AURMAK's internal venture lab for R&D, product experiments, and AI-led industrial innovation.`

### Hero
Eyebrow: `The Lab`

H1: `The Venture Lab.`

Lead: `The Lab converts internal product thinking into practical delivery capability. We test, refine, and operationalise ideas using the same discipline applied to client programmes.`

### Section A: Principles
1. `Human-Led Diagnostics` -> We begin with commercial and operational diagnosis before defining what should be built.
2. `Structured Build Cycles` -> Product experiments are developed through controlled cycles with clear checkpoints and technical governance.
3. `Scalability Readiness` -> Outputs are designed to scale, informing both client delivery and future venture opportunities.

### Section B: Current Focus Areas
List:

1. Predictive maintenance workflows for industrial reliability.
2. Governed AI interfaces for enterprise reporting systems.
3. Facility performance modelling for building operations.
4. Integration accelerators for legacy modernisation programmes.

Supporting image alt: `Engineers testing intelligent automation interfaces`

## 5.10 Team (`/team.html`)
### SEO
Title: `Leadership Team | AURMAK`

Meta description: `Meet the AURMAK leadership team driving product strategy, operations, and engineering delivery across regions.`

### Hero
Eyebrow: `Team`

H1: `Leadership Team.`

Lead: `Our leadership team aligns product strategy, operational control, and engineering delivery to ensure disciplined execution across all engagements.`

### Section: Board & Leadership
1. Role: Chief Product Officer
Name: Ahsan Jalil
Bio: Leads product strategy and ensures each solution aligns user value with commercial objectives.
LinkedIn: `https://www.linkedin.com/in/vertage/`

2. Role: Chief Operating Officer
Name: Umer Jalil
Bio: Leads international operations and growth planning across GCC and wider regional markets.
LinkedIn: `https://www.linkedin.com/in/umar-jalil/`

3. Role: Chief Executive Officer
Name: Masood Zafar
Bio: Oversees execution standards, compliance, and engineering delivery governance in Pakistan.
LinkedIn: `https://www.linkedin.com/in/masood-zafar-7b45582a/`

4. Role: Managing Director
Name: Khurram Sultan
Bio: Manages day-to-day delivery controls, hiring operations, and execution discipline.
LinkedIn: `https://www.linkedin.com/in/khuram-sultan-555a893a4/`

## 5.11 Careers (`/career.html`)
### SEO
Title: `Careers | Build Industrial AI Systems at AURMAK`

Meta description: `Explore career opportunities at AURMAK across product engineering, AI integration, and enterprise delivery.`

### Hero
Eyebrow: `Careers`

H1: `Careers at AURMAK.`

Lead: `Join a team where commercial clarity, technical discipline, and accountable delivery define how work gets done.`

CTAs:

1. Browse Open Roles -> `#open-positions`
2. Discuss Opportunities -> `/contact.html`

### Section A: Open Positions
Intro: `Current openings include a dedicated role detail page and direct application submission.`

Cards:

1. `AUR-ENG-001` Senior AI Product Engineer
Location: Lahore, Pakistan
Model: Hybrid, Full-time
CTA: `View Role & Apply` -> `/job-detail.html?job=senior-ai-product-engineer`

2. `AUR-SOL-002` Enterprise Solutions Architect
Location: Dubai, UAE
Model: Hybrid, Full-time
CTA -> `/job-detail.html?job=enterprise-solutions-architect`

3. `AUR-ENG-003` Full Stack Product Engineer
Location: Lahore, Pakistan
Model: On-site / Hybrid, Full-time
CTA -> `/job-detail.html?job=full-stack-product-engineer`

### Section B: Why Join / Hiring Pipeline
Card 1:

1. H2: Why Join AURMAK
2. Body: Contribute to enterprise delivery while building practical product capability through our innovation model.
3. List:
   1. Disciplined engineering culture with leadership accountability.
   2. Cross-regional collaboration across London, Dubai, and Lahore teams.
   3. Balanced exposure to client delivery and internal product development.
   4. Clear ownership, governance, and measurable outcomes.

Card 2:

1. H2: Hiring Pipeline
2. Body: Apply through the job detail form with CV upload. Every application is reviewed through a defined evaluation process.
3. List:
   1. Select a role and submit your application profile.
   2. Include portfolio or project links where relevant.
   3. Applications are reviewed by engineering and operations leads.
   4. Shortlisted candidates receive a structured interview plan.

## 5.12 Job Detail (`/job-detail.html?job=<slug>`)
### SEO
Title is dynamic and updated by JS based on selected role.

### Hero
Eyebrow: `Structured Opportunity`

H1: dynamic (`jobTitleHeading`)

Lead: dynamic (`jobLead`)

CTA: `Return to Careers` -> `/career.html`

### Section A: Role Summary
Static headings:

1. Role Summary
2. Core Responsibilities
3. Requirements

Dynamic data placeholders:

1. Job Code
2. Location
3. Work Model
4. Experience
5. Summary paragraph
6. Responsibilities list
7. Requirements list

### Section B: Submit Application
H2: `Submit Application`

Body intro: `Submit your application details below. Your CV will be attached to the review email.`

Form fields:

1. Full Name (required)
2. Work Email (required)
3. Phone Number (required)
4. Current Location (optional)
5. Portfolio or LinkedIn (optional URL)
6. Application Note (optional textarea)
7. Upload CV (required file, PDF/DOC/DOCX, max 5MB)
8. Hidden: jobCode
9. Hidden: jobTitle
10. Hidden: returnUrl
11. Hidden honeypot: website

Supporting text: `Your CV is sent as an attachment to info@aurmak.com for review.`

Submit button: `Submit Application`

Status region: live polite feedback.

### Role Data (from `job-detail.js`)
#### `senior-ai-product-engineer`
Code: `AUR-ENG-001`
Title: `Senior AI Product Engineer`
Lead: `Lead implementation of production AI workflows in enterprise SaaS and industrial systems.`
Location: `Lahore, Pakistan (with Dubai collaboration)`
Work model: `Hybrid, Full-time`
Experience: `5+ years`
Summary: `You will own AI-enabled product features from architecture to deployment and work directly with product and delivery leadership.`

Responsibilities:

1. Design, build, and deploy AI-powered modules for enterprise products.
2. Integrate LLM and data pipelines into secure, production-ready services.
3. Collaborate with UX, backend, and DevOps teams on release delivery.
4. Improve model performance, observability, and inference cost efficiency.

Requirements:

1. Strong experience in Python or TypeScript backend engineering.
2. Hands-on experience with modern AI APIs and vector data workflows.
3. Solid understanding of cloud deployment and CI/CD practices.
4. Ability to communicate technical trade-offs with clarity.

#### `enterprise-solutions-architect`
Code: `AUR-SOL-002`
Title: `Enterprise Solutions Architect`
Lead: `Design scalable architectures for industrial digitisation and multi-system integrations.`
Location: `Dubai, UAE (regional travel as required)`
Work model: `Hybrid, Full-time`
Experience: `7+ years`
Summary: `You will define technical solution blueprints for enterprise dashboards, ERP modernisation, and automation programmes.`

Responsibilities:

1. Lead architecture design for client platforms across multiple sectors.
2. Define integration standards, data contracts, and security baselines.
3. Translate business goals into practical technical roadmaps.
4. Support pre-sales technical workshops and implementation planning.

Requirements:

1. Proven experience in enterprise solution architecture roles.
2. Deep understanding of APIs, event-driven systems, and data platforms.
3. Experience with cloud infrastructure and governance controls.
4. Strong stakeholder communication and documentation discipline.

#### `full-stack-product-engineer`
Code: `AUR-ENG-003`
Title: `Full Stack Product Engineer`
Lead: `Build and modernise web applications for enterprise operations and analytics use cases.`
Location: `Lahore, Pakistan`
Work model: `On-site / Hybrid, Full-time`
Experience: `3+ years`
Summary: `You will ship frontend and backend features for internal products and client delivery projects with measurable business outcomes.`

Responsibilities:

1. Develop robust web interfaces and APIs for B2B products.
2. Implement secure authentication, role management, and reporting features.
3. Write maintainable tests and support production troubleshooting.
4. Collaborate with product teams to iterate quickly and safely.

Requirements:

1. Strong JavaScript or TypeScript across frontend and backend.
2. Experience with modern component-based frontend frameworks.
3. Comfort with relational databases and REST API design.
4. Clear communication and ownership mindset.

Invalid job slug behaviour:

1. Show `Role Not Found`
2. Disable form inputs and submit
3. Prompt user to return to careers

## 5.13 Contact (`/contact.html`)
### SEO
Title: `Contact AURMAK | UK, UAE, Pakistan`

Meta description: `Contact AURMAK in London, Ajman, and Lahore to discuss AI-driven digital transformation and enterprise delivery.`

### Hero
Eyebrow: `Contact`

H1: `Start the Conversation.`

Lead: `Share your commercial priorities and operational constraints. We will respond with a structured path to execution.`

### Section A: Office Addresses
1. United Kingdom: `124 City Road, London, EC1V 2NX.`
2. United Arab Emirates: `BLA-507, Block A, Ajman Main Boulevard.`
3. Pakistan: `306 Tipu Block, Bahria Town, Lahore.`

### Section B: Contact Form
H2: `Discuss Your Requirement`

Body: `Provide your requirements and we will connect you with the appropriate regional lead and delivery team.`

Fields:

1. Full Name (required)
2. Work Email (required)
3. Company / Organisation (required)
4. Service Requirement (required select)
5. Project Brief (required textarea)
6. Hidden honeypot: website
7. Hidden returnUrl

Service options:

1. SaaS Product Development
2. Legacy System Modernisation
3. AI Integration
4. Building Management Systems
5. General Advisory

Textarea placeholder: `Summarise your objective, constraints, and expected timeline.`

Submit button: `Submit Enquiry`

Live status text region included.

Supporting image alt: `Connected digital network architecture for cross-regional operations`

## 5.14 Privacy (`/privacy.html`)
### SEO
Title: `Privacy Policy | AURMAK`

Meta description: `Read the AURMAK privacy policy for website visitors and enquiry submissions.`

Hero:

1. Eyebrow: Legal
2. H1: Privacy Policy
3. Lead: This policy describes how AURMAK collects, processes, and protects personal data submitted via this website.

Sections:

1. Information We Collect
2. How We Use Information
3. Storage and Security
4. Contact

Contact line: `For privacy requests, contact info@aurmak.com.`

Arabic availability note: `Arabic version available through language switch (AR) in the footer.`

## 5.15 Cookies (`/cookies.html`)
### SEO
Title: `Cookies Policy | AURMAK`

Meta description: `Read the AURMAK cookies policy and browser controls for cookie preferences.`

Hero:

1. Eyebrow: Legal
2. H1: Cookies Policy
3. Lead: This website may use essential cookies for site functionality and analytics cookies for usage insights.

Sections:

1. Essential Cookies
2. Analytics Cookies
3. Managing Cookies

Arabic availability note included.

## 5.16 Terms (`/terms.html`)
### SEO
Title: `Terms and Conditions | AURMAK`

Meta description: `Read the terms and conditions for use of the AURMAK website.`

Hero:

1. Eyebrow: Legal
2. H1: Terms & Conditions
3. Lead: By using this website, you agree to these terms and applicable laws and regulations.

Sections:

1. Use of Website
2. Intellectual Property
3. Liability
4. Contact

Contact line: `For legal enquiries, contact info@aurmak.com.`

Arabic availability note included.

## 6. Structured Data, Meta, and Indexing Requirements
### 6.1 Common Meta Patterns
All pages include:

1. Canonical URL
2. Open Graph tags
3. Twitter card tags
4. `og:locale` set to `en_GB`
5. Favicon path: `assets/aurmak-symbol-primary.png`

### 6.2 Pre-Launch Robots Controls
Page-level robots meta on all pages:

1. `noindex`
2. `nofollow`
3. `noarchive`
4. `nosnippet`
5. `noimageindex`

`robots.txt` content:

1. `User-agent: *`
2. `Disallow: /`

### 6.3 Sitemap
XML sitemap exists and lists major pages including:

1. Home
2. Core pages (About, Services, How We Work, Lab, Solutions, Case Studies, Insights)
3. All 6 case detail pages
4. Team, Career, Contact

## 7. Functional Behaviour Specification
## 7.1 Case Studies Filter (`case-studies.js`)
Rules:

1. Clicking a filter chip marks it active
2. Update `aria-pressed` true/false on all chips
3. Show cards where `data-case-sector` matches filter
4. `all` shows all cards
5. Non-matching cards are hidden (`hidden=true`)

## 7.2 Insights Filter (`insights.js`)
Rules:

1. Clicking a topic chip marks it active
2. Update `aria-pressed` true/false on all chips
3. Show cards where `data-insight-topic` matches filter
4. `all` shows all cards
5. Non-matching cards are hidden

## 7.3 Contact Form Validation + Submission (`contact-form.js`)
Validation:

1. Browser constraint validation for required fields
2. Inline field error message per invalid field
3. Set `aria-invalid` and `aria-describedby`
4. Focus first invalid field
5. Status message for failure and recovery

Submission:

1. `POST /api/contact`
2. JSON payload
3. Disable submit while sending
4. Success message: `Enquiry submitted successfully. Our team will contact you shortly.`
5. Error states return API message if available

## 7.4 Job Application Validation + Submission (`job-application-form.js`)
Validation:

1. Browser validation for required fields
2. CV required
3. CV extension must be PDF/DOC/DOCX
4. CV max size 5MB
5. Inline error and status handling

Submission:

1. `POST /api/apply`
2. `multipart/form-data`
3. Disable submit while sending
4. Success message: `Application submitted successfully. Our team will review your profile and respond shortly.`

## 7.5 Navigation Behaviour (`nav.js`)
1. Mobile nav toggle via button
2. Close on link click (mobile)
3. Close on resize above mobile breakpoint
4. Close on outside click (mobile)
5. Close on Escape key

## 7.6 Language Behaviour (`site.js`)
1. Persist language in localStorage key `site_lang`
2. Supported language set currently includes `en` only
3. `AR` is disabled with announcement "Arabic version coming soon."
4. `html lang` and `dir` are set by selected language mode
5. Insert skip-link to main content if absent
6. Update footer year automatically

## 8. Backend Delivery Requirements
## 8.1 Runtime
Node.js Express server (`server.js`) serves static site and handles form APIs.

## 8.2 Email Transport
SMTP environment variables:

1. `SMTP_HOST`
2. `SMTP_PORT` (default 587)
3. `SMTP_SECURE` (optional)
4. `SMTP_USER`
5. `SMTP_PASS`
6. `CONTACT_FROM`
7. `CONTACT_TO` (default `info@aurmak.com`)
8. `APPLICATION_TO` (fallback to CONTACT_TO, default `info@aurmak.com`)

## 8.3 Contact Submission Email
To: `CONTACT_TO` or default `info@aurmak.com`

Reply-To: submitter email

Subject format: `AURMAK Enquiry | <Name> | <Company>`

Formats:

1. HTML formatted table email
2. Plain text fallback

Included fields:

1. Full Name
2. Work Email
3. Company / Organisation
4. Service Requirement
5. Project Brief
6. Submission timestamp (Europe/London)

## 8.4 Job Application Email
To: `APPLICATION_TO` or fallback chain ending at `info@aurmak.com`

Reply-To: candidate email

Subject format: `AURMAK Application | <Job Title> | <Full Name>`

Formats:

1. HTML formatted table email
2. Plain text fallback

Attachment:

1. CV file as uploaded

Included fields:

1. Job Title
2. Job Code
3. Full Name
4. Email
5. Phone
6. Location
7. Portfolio / LinkedIn
8. CV attachment metadata
9. Application Note
10. Submission timestamp (Europe/London)

## 8.5 Security and Validation Rules
1. Input cleaning strips angle brackets
2. Email format validation regex
3. Honeypot field `website` for anti-bot filtering
4. Return URL sanitisation to prevent open redirect
5. File upload type and size checks on server side (multer)

## 9. Copy and Tone Rules for Build
1. Language: British English
2. Tone: confident, engineering-first, precise, low-jargon
3. Content should remain factual and operational
4. Keep CTA labels exactly as specified above
5. Do not introduce promotional slang

## 10. Accessibility and Semantic Requirements
1. Single H1 per page
2. Preserve semantic heading order
3. Preserve meaningful alt text for content images
4. Use SR-only headings where used for screen-reader context
5. Keep `aria-live` status regions for form feedback
6. Keep filter buttons with `aria-pressed`
7. Keep menu toggle with `aria-expanded` and `aria-controls`
8. Keep skip-link to main content

## 11. Build Acceptance Criteria (Figma Make Output)
A build is accepted when:

1. All pages in Section 3 exist with correct routing.
2. All content in Section 5 is present and matches text exactly.
3. Header and footer navigation match Section 4.
4. Case Studies and Insights filters work as in Section 7.
5. Contact and Job Application forms match fields and validation rules.
6. Form submissions are sent to `info@aurmak.com` via formatted HTML email plus text fallback.
7. Job detail page supports all three role slugs and invalid slug fallback.
8. Footer social links and legal links are present and correct.
9. EN/AR language switch exists; AR is currently unavailable messaging unless full Arabic is implemented.
10. Robots controls remain blocked pre-launch (`Disallow: /`, noindex directives).

## 12. Source of Truth Files
This specification is derived from the live project files under:

`Aurmak website/`

Primary content files:

1. `index.html`
2. `about.html`
3. `services.html`
4. `how-we-work.html`
5. `solutions.html`
6. `case-studies.html`
7. `case-study-*.html`
8. `insights.html`
9. `lab.html`
10. `team.html`
11. `career.html`
12. `job-detail.html`
13. `contact.html`
14. `privacy.html`
15. `cookies.html`
16. `terms.html`

Interaction and backend files:

1. `nav.js`
2. `site.js`
3. `case-studies.js`
4. `insights.js`
5. `contact-form.js`
6. `job-detail.js`
7. `job-application-form.js`
8. `server.js`
9. `robots.txt`
10. `sitemap.xml`
