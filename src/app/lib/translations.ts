import type { Language } from "./locale";

const translations = {
  en: {
    navigation: {
      home: "Home",
      whatWeDo: "What We Do",
      services: "Services",
      solutions: "Solutions",
      howWeWork: "How We Work",
      caseStudies: "Case Studies",
      company: "Company",
      about: "About",
      team: "Team",
      lab: "The Lab",
      insights: "Insights",
      careers: "Careers",
      contact: "Contact",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      languageUnavailable: "Arabic unavailable",
      languageShortUnavailable: "Unavailable",
      toggleMenu: "Toggle menu",
      english: "EN",
      arabic: "العربية",
    },
    footer: {
      quickLinks: "Quick Links",
      more: "More",
      connect: "Connect",
      rightsReserved: "All rights reserved.",
      privacy: "Privacy Policy",
      cookies: "Cookies Policy",
      terms: "Terms & Conditions",
    },
    cookieConsent: {
      title: "Privacy Preference",
      bodyBeforeLink:
        "We use essential cookies to keep our site secure and optional analytics cookies to help us improve. We never sell your personal data. View our ",
      bodyAfterLink: ".",
      acceptAll: "Accept All",
      essentialOnly: "Essential Only",
      saved: "Preferences Saved",
      close: "Close",
    },
    home: {
      seoTitle: "Enterprise Systems, AI Integration, and Digital Modernisation",
      seoDescription:
        "AURMAK designs enterprise systems, digital infrastructure, and AI-enabled operational intelligence for complex operations across key regional markets.",
      heroTitleLead: "Built to Think",
      heroTitleHighlight: "and Deliver.",
      heroLead:
        "We design and deliver enterprise systems that power modern operations, from SaaS platforms and digital infrastructure to AI-enabled automation.",
      startConversation: "Start a Conversation",
      servicesEyebrow: "What AURMAK Builds",
      servicesTitleLead: "Systems That Power",
      servicesTitleHighlight: "Modern Operations",
      servicesIntro:
        "AURMAK partners with organisations to design, build, and modernise the digital systems that power operations, decision-making, and growth.",
      servicesIntroSecondary:
        "Our work combines strategic consulting with hands-on engineering. We help organisations move from concept to reliable enterprise execution.",
      service1Title: "Enterprise SaaS Platforms",
      service1Description:
        "Design and development of scalable SaaS products built to support complex enterprise operations at scale.",
      service2Title: "Digital Infrastructure & Automation",
      service2Description:
        "Modernising legacy systems and building reliable digital infrastructure for more connected, efficient operations.",
      service3Title: "AI-Enabled Operational Intelligence",
      service3Description:
        "Applying AI and data models to improve operational visibility, decision-making, and performance.",
      capabilityTitleLead: "Engineering Capability.",
      capabilityTitleHighlight: "Strategic Thinking.",
      capability1Title: "AI-Accelerated Engineering",
      capability1Description:
        "Human engineering judgement supported by AI-assisted tooling to accelerate delivery while maintaining enterprise-grade quality.",
      capability2Title: "Enterprise Delivery Discipline",
      capability2Description:
        "Structured delivery with governance controls, defined checkpoints, and measurable operational outcomes.",
      capability3Title: "Venture-Led Innovation",
      capability3Description:
        "Client insight informs internal product incubation, enabling proven solutions and delivery patterns to be applied faster across industries.",
      exploreServices: "Explore Services",
      deliveryTitleLead: "Global Delivery.",
      deliveryTitleHighlight: "Proven Execution.",
      deliveryIntro:
        "A delivery model built around regional presence, disciplined execution, and measurable enterprise outcomes.",
      metric1Title: "Regional Operating Centres",
      metric1Value: "3",
      metric1Description: "London, Dubai, and Lahore supporting integrated global delivery.",
      metric2Title: "Core Delivery Capabilities",
      metric2Value: "4",
      metric2Description: "SaaS platforms, system modernisation, AI integration, and smart infrastructure.",
      metric3Title: "Measured Outcomes",
      metric3Value: "95%",
      metric3Description: "Reporting consistency after enterprise data model alignment.",
      clientsTitleLead: "Partnering with",
      clientsTitleHighlight: "Industry Leaders",
      clientsIntro: "Enterprise systems delivered across SaaS, infrastructure, media, operations, and digital platforms.",
      exploreCaseStudies: "Explore Case Studies",
      labTitleLead: "Beyond Delivery.",
      labTitleHighlight: "Building What Comes Next.",
      labIntro:
        "Alongside enterprise client partnerships, AURMAK operates a venture studio, incubating internal SaaS platforms and technology ventures.",
      labIntroSecondary:
        "This model keeps our teams closely connected to both enterprise delivery and product innovation.",
      exploreLab: "Explore the Lab",
      finalTitleLead: "Planning Your Next",
      finalTitleHighlight: "Enterprise System?",
      finalLead: "Let’s discuss the right approach for your organisation.",
    },
    about: {
      seoTitle: "About AURMAK | Global Technology Leadership",
      seoDescription:
        "AURMAK combines UK and UAE leadership with Lahore engineering delivery to execute enterprise systems with governance, clarity, and accountability.",
      eyebrow: "About AURMAK",
      heroTitleLead: "Global Technology",
      heroTitleHighlight: "Leadership",
      heroLead:
        "Strategic leadership in London and Dubai works alongside globally distributed engineering teams to deliver complex enterprise technology programmes with clear accountability across international engagements.",
      heroBadge: "🌍 Global Presence",
      builtTitleLead: "Built on International",
      builtTitleHighlight: "Foundations",
      builtBody1:
        "AURMAK represents a new technology brand built on the foundations of an established international technology group with operations in the UK and UAE.",
      builtBody2:
        "This heritage provides the operational maturity, governance standards, and cross-regional experience required to deliver complex enterprise technology programmes.",
      builtBody3:
        "Our international footprint strengthens delivery oversight, infrastructure awareness, and the ability to support organisations operating across multiple markets.",
      builtBody4BeforeServices: "Explore our ",
      builtBody4BetweenServicesAndSolutions: ", ",
      builtBody4BetweenSolutionsAndLab: ", and ",
      builtBody4AfterLab: " to see how this model translates into delivery capability.",
      centresTitleLead: "Three Centres.",
      centresTitleHighlight: "One Vision.",
      london: "London",
      dubai: "Dubai",
      lahore: "Lahore",
      centresBody:
        "London, Dubai, and Lahore form AURMAK’s integrated global delivery network, combining strategic leadership, engineering capability, and operational execution. Our teams operate as a unified system, with the flexibility to deploy engineering and delivery capability across regions based on project requirements, regulatory needs, and client preferences.",
      modelTitleLead: "Strategic Leadership.",
      modelTitleHighlight: "Engineering Delivery.",
      modelIntro:
        "AURMAK’s delivery model combines international leadership with scalable engineering execution.",
      modelPoint1: "International governance standards anchored in London and Dubai",
      modelPoint2: "Disciplined engineering delivery executed across globally distributed teams",
      modelPoint3: "Integrated strategy and execution under shared leadership",
      modelPoint4: "Operational maturity supported by established UK and UAE parent foundations",
      systemsTitleLead: "Focused on Enterprise",
      systemsTitleHighlight: "Systems",
      systemsBody:
        "AURMAK designs and delivers enterprise technology systems that power modern operations, from SaaS platforms and digital infrastructure to AI-enabled operational intelligence.",
      systemsBody2BeforeCaseStudies: "View our ",
      systemsBody2Between: " or ",
      systemsBody2AfterContact: " with the team.",
      ventureTitleLead: "Venture",
      ventureTitleHighlight: "Development",
      ventureBody1:
        "Alongside enterprise client partnerships, AURMAK operates a venture studio focused on developing internal SaaS platforms and technology products.",
      ventureBody2:
        "This work keeps our teams closely connected to product architecture, infrastructure design, and long-term platform thinking — experience that directly strengthens the systems we deliver for clients.",
      exploreLab: "Explore The Lab",
      finalTitleLead: "Planning Your Next",
      finalTitleHighlight: "Enterprise System?",
      finalBody:
        "Speak with our team to explore the right technology approach for your organisation.",
      startConversation: "Start a Conversation",
    },
    services: {
      seoTitle: "Enterprise Systems Development, AI Integration, and Modernisation",
      seoDescription:
        "AURMAK designs enterprise systems, digital infrastructure, and AI integration with delivery governance, data governance, and system scalability built in.",
      eyebrow: "Services",
      heroTitleLead: "Enterprise Systems.",
      heroTitleHighlight: "Built and Delivered.",
      heroLead:
        "Our teams design, build, and modernise the technology platforms organisations rely on to operate, scale, and make decisions, from SaaS and AI integration to digital infrastructure and operational intelligence.",
      coreTitleLead: "Technology Systems That",
      coreTitleHighlight: "Power Modern Operations",
      coreIntro:
        "Our engineering capabilities focus on building, modernising, and integrating enterprise technology systems.",
      coreProofBeforeRbs: "Proof points include ",
      coreProofBetweenRbsAndCarlounge: ", ",
      coreProofBetweenCarloungeAndAljazeera: ", ",
      coreProofBetweenAljazeeraAndCisco: ", and ",
      coreProofAfterCisco: ".",
      service1Title: "SaaS Product Development",
      service1Description:
        "Design and development of scalable SaaS platforms for enterprise operations.",
      service2Title: "Legacy System Modernisation",
      service2Description:
        "Improving reliability and scalability across legacy systems and infrastructure.",
      service3Title: "AI Integration",
      service3Description:
        "Applying AI to improve operational visibility, automation, and decision-making.",
      service4Title: "Building Management Systems",
      service4Description:
        "Design and integration of intelligent building systems that improve operational visibility and infrastructure performance.",
      deliveryTitleLead: "Structured Enterprise",
      deliveryTitleHighlight: "Delivery",
      deliveryPoint1: "Defined implementation stages with clear ownership and review gates.",
      deliveryPoint2: "Governance, security, and compliance integrated from the start.",
      deliveryPoint3: "Cross-functional execution led by accountable delivery leadership.",
      deliveryPoint4: "Performance tracking aligned to agreed commercial and operational outcomes.",
      approachTitle: "Our Delivery Approach",
      approachBody:
        "Projects move through structured stages: discovery, architecture, pilot, rollout, and long-term support, with clear accountability at every step.",
      approachExamplesBeforeAljazeera: "For delivery examples, review the ",
      approachExamplesBetweenAljazeeraAndCarlounge: " and the ",
      approachExamplesAfterCarlounge: ".",
      approachStage1: "Discovery",
      approachStage2: "Architecture",
      approachStage3: "Pilot",
      approachStage4: "Rollout",
      approachStage5: "Long-Term Support",
      howWeWork: "How We Work",
      standardsTitle: "Enterprise-Grade Standards",
      standard1: "Security",
      standard2: "Compliance",
      standard3: "QA Discipline",
      standard4: "Data Governance",
      standardsBody:
        "Security, compliance, QA discipline, and structured data governance are built into every system we deliver.",
      faqEyebrow: "Frequently Asked Questions",
      faqTitleLead: "What Clients",
      faqTitleHighlight: "Ask",
      faq1Question: "Can AURMAK work with our existing technology stack?",
      faq1Answer:
        "Yes. Most organisations operate complex technology environments, and our work typically involves integrating with existing systems rather than replacing them. Our teams assess current architecture, identify integration points, and design solutions that modernise or extend your systems while maintaining stability, security, and operational continuity.",
      faq2Question: "How does AURMAK approach legacy system modernisation?",
      faq2Answer:
        "Modernising legacy systems requires balancing innovation with operational stability. Our teams assess the existing architecture and dependencies, then design a phased modernisation approach that improves reliability, scalability, and integration without disrupting critical operations. This allows organisations to evolve their technology environments while maintaining continuity and control.",
      faq3Question: "How long does an AI integration project typically take?",
      faq3Answer:
        "AI integration projects typically take 3-6 months, depending on system complexity and implementation scope. Our teams follow a structured delivery process that covers discovery, architecture, integration, testing, and controlled deployment, ensuring reliable performance within the existing enterprise environment.",
      faq4Question: "How does AURMAK ensure data security and compliance?",
      faq4Answer:
        "Security and compliance are embedded throughout our delivery process, from system architecture to deployment. Our teams implement structured governance, secure development practices, and rigorous testing to ensure every system meets enterprise standards for reliability, data protection, and regulatory compliance.",
      faq5Question: "Do you work with internal engineering teams?",
      faq5Answer:
        "Yes. We frequently work alongside internal engineering and technology teams. Our role is to complement existing capabilities, supporting architecture, system development, and complex integrations while collaborating closely with internal stakeholders.",
      faq6Question: "Do you provide ongoing support after system delivery?",
      faq6Answer:
        "Yes. Many client partnerships continue beyond the initial system delivery. We provide ongoing system optimisation, maintenance, and operational assistance through structured service arrangements designed to match each organisation’s operational and SLA requirements. Our global team ensures systems remain reliable, secure, and aligned with evolving business needs.",
      faq7Question: "What makes AURMAK different from other technology partners?",
      faq7Answer:
        "AURMAK combines strategic technology consulting with disciplined engineering delivery. Our teams work with leadership to diagnose operational challenges, design the right technology architecture, and deliver enterprise systems through structured, accountable implementation. Alongside client partnerships, our venture-led model keeps our teams closely connected to real product development and emerging technologies.",
      faq8Question: "What industries does AURMAK work with?",
      faq8Answer:
        "AURMAK supports organisations across sectors, including infrastructure, real estate, energy, and enterprise technology. Our experience in complex operational environments allows us to design and deliver systems that support modern digital operations across multiple industries.",
      faq9Question: "When can organisations expect ROI from AI initiatives?",
      faq9Answer:
        "The timeline for measurable return depends on the scope of the implementation and the maturity of existing systems and data. Organisations often begin to see operational improvements early in deployment as automation and better data visibility are introduced. Clear performance indicators are defined during discovery so progress can be measured against agreed operational and commercial outcomes.",
      startConversation: "Start a Conversation",
    },
    solutions: {
      seoTitle: "Operational Solutions for Complex Enterprise Environments",
      seoDescription:
        "AURMAK delivers enterprise systems that improve operational control, data governance, and decision-making across complex operational environments.",
      eyebrow: "Solutions",
      heroTitleLead: "Operational Solutions.",
      heroTitleHighlight: "Built for Complex Environments.",
      heroLead:
        "We design and deliver enterprise systems that improve visibility, strengthen operational control, and support faster decision-making across complex environments.",
      heroBadge: "🏭 Operational Systems",
      domainsTitleLead: "Where Our",
      domainsTitleHighlight: "Systems Operate",
      domain1Title: "Infrastructure Operations",
      domain1Description:
        "Platforms designed for environments where infrastructure, facilities, or equipment must be monitored and managed in real time.",
      domain2Title: "Asset & Portfolio Management",
      domain2Description:
        "Systems that connect operational dashboards, performance data, and reporting environments across complex asset portfolios.",
      domain3Title: "Enterprise Operations",
      domain3Description:
        "Integrated operational systems that bring together data, workflows, and decision environments across complex organisations.",
      contextsTitleLead: "Operational",
      contextsTitleHighlight: "Environments",
      context1: "Operational monitoring and performance intelligence",
      context2: "Facilities and estate performance monitoring",
      context3: "Portfolio-level reporting across projects and assets",
      context4: "Regional operational dashboards for multi-region teams",
      outcomesTitleLead: "Operational",
      outcomesTitleHighlight: "Outcomes",
      pillar1Title: "Single Pane Visibility",
      pillar1Description:
        "A unified operational view across systems, assets, and performance data.",
      pillar2Title: "Data Integrity",
      pillar2Description:
        "Reliable, governed data that supports accurate reporting and confident decisions.",
      pillar3Title: "Operational Pace",
      pillar3Description:
        "Faster operational decisions enabled by integrated systems and real-time visibility.",
      finalBody:
        "Enterprise systems require careful planning and structured delivery. Our teams work with organisations to design technology solutions aligned with operational goals and long-term performance.",
      startConversation: "Start a Conversation",
    },
    caseStudies: {
      seoTitle: "Enterprise Technology Case Studies and Delivery Outcomes",
      seoDescription:
        "Review AURMAK case studies across SaaS, financial services, public sector, infrastructure, and operations programmes with measurable delivery outcomes.",
      eyebrow: "Case Studies",
      heroTitle: "Case Studies.",
      heroLead:
        "Explore selected programmes delivered across enterprise technology, financial services, public sector, and automotive industries. Each case shows the operating challenge, the engineering approach, and measurable outcomes.",
      heroBadge: "📊 Proven Results",
      filterAll: "All",
      filterEnterpriseTechnology: "Enterprise Technology",
      filterFinancialServices: "Financial Services",
      filterPublicSector: "Public Sector",
      filterAutomotive: "Automotive",
      readCaseStudy: "Read Case Study",
      finalTitle: "Ready to Move Your Operations Forward?",
      finalBody:
        "We work with organisations to simplify complexity, align teams, and design systems that scale from early discovery through to implementation.",
      startConversation: "Start a Conversation",
      case1Meta: "Enterprise Technology",
      case1Title: "Real-Time Building Performance Intelligence",
      case1Summary:
        "Visibility into occupancy, energy performance, and operational efficiency across commercial buildings, supporting more efficient and sustainable operations through an integrated data platform.",
      case1Kpi1: "45% faster insights delivery",
      case1Kpi2: "62% increase in user engagement",
      case2Meta: "Enterprise Technology",
      case2Title: "Structuring Workflow & Execution Systems",
      case2Summary:
        "A structured redesign of an engineer-built platform, improving workflow clarity, usability, and execution efficiency.",
      case2Kpi1: "100% task success rate",
      case2Kpi2: "Reduced task completion time to 12 minutes",
      case3Meta: "Financial Services",
      case3Title: "Premium Travel Booking Portal",
      case3Summary:
        "Modernisation of a legacy travel platform, enabling premium banking customers to book travel across web and mobile, with improved usability and access to discounted rates.",
      case3Kpi1: "Multiple travel categories supported",
      case3Kpi2: "Mobile-first responsive design",
      case4Meta: "Enterprise Technology",
      case4Title: "Simplifying Cybersecurity Decision-Making",
      case4Summary:
        "Research-led redesign of a cybersecurity platform, informed by direct engagement with enterprise decision-makers, improving how CIO and CTO-level users evaluate network threat detection solutions.",
      case4Kpi1: "3x increase in user engagement",
      case4Kpi2: "75%+ usability success rate",
      case5Meta: "Enterprise Technology",
      case5Title: "Modernising Enterprise Service Operations",
      case5Summary:
        "Platform redesign and migration combining UX improvements and system transition from ServiceNow to Jira, improving workflow clarity, usability, and adoption across enterprise service operations.",
      case5Kpi1: "50% increase in sign-ups (first month)",
      case5Kpi2: "100% clutter reduction",
      case5Kpi3: "ServiceNow to Jira migration",
      case6Meta: "Automotive",
      case6Title: "Automotive Customer Experience Transformation",
      case6Summary:
        "End-to-end design of a consumer and garage platform, introducing structured UX to improve booking flows, operational visibility, and overall customer experience.",
      case6Kpi1: "2,000+ garages onboarded globally",
      case6Kpi2: "80% increase in customer satisfaction",
      case6Kpi3: "£4.5m funding secured",
      case7Meta: "Enterprise Technology",
      case7Title: "Enterprise Cloud, Made Usable",
      case7Summary:
        "Enterprise SaaS/IaaS platform design simplifying complex cloud infrastructure for non-technical users, with functionality comparable to leading cloud platforms, validated through multiple rounds of usability testing.",
      case7Kpi1: "4 usability testing rounds completed",
      case7Kpi2: "80% approval rating achieved",
      case7Kpi3: "Users migrated from AWS/Azure platforms",
      case8Meta: "Public Sector",
      case8Title: "Structuring Complex Government Services",
      case8Summary:
        "Consolidation of 700+ government services into a structured, user-friendly system through research-led UX, simplifying navigation across a complex government and trade ecosystem.",
      case8Kpi1: "700+ services structured across unified categories",
      case8Kpi2: "5 key user personas identified",
      case8Kpi3: "100% stakeholder sign-off achieved",
    },
    howWeWork: {
      seoTitle: "Enterprise Delivery Model and Implementation Approach",
      seoDescription:
        "Learn how AURMAK delivers enterprise systems through a structured model covering discovery, audit, roadmap, pilot, rollout, governance, and long-term support.",
      eyebrow: "Delivery Framework",
      heroTitleLead: "Structured Delivery",
      heroTitleHighlight: "for Complex Systems",
      heroLead:
        "Every engagement follows a defined execution model from discovery and architecture through deployment and long-term system optimisation.",
      heroBadge: "⚙️ Structured Delivery",
      frameworkTitleLead: "Our Delivery",
      frameworkTitleHighlight: "Framework",
      frameworkIntro:
        "Each engagement follows defined stages with clear outputs, review checkpoints, and accountable ownership.",
      stage1Title: "Discovery",
      stage1Description:
        "Define operational goals, constraints, and success metrics with leadership and technical stakeholders.",
      stage2Title: "Assessment",
      stage2Description:
        "Evaluate existing architecture, data environments, integrations, and operational risks.",
      stage3Title: "Architecture",
      stage3Description:
        "Design the system architecture and define the phased delivery roadmap.",
      stage4Title: "Pilot",
      stage4Description:
        "Validate system assumptions through controlled deployment and early operational testing.",
      stage5Title: "Rollout",
      stage5Description:
        "Deploy the system through controlled release stages with stability and adoption monitoring.",
      stage6Title: "Governance",
      stage6Description:
        "Run structured operating reviews tracking delivery progress, system performance, and commercial outcomes.",
      stage7Title: "Support & Optimisation",
      stage7Description:
        "Provide ongoing system optimisation, enhancements, and operational support.",
      standardsTitleLead: "Enterprise Delivery",
      standardsTitleHighlight: "Standards",
      standardsIntro:
        "Structured safeguards ensure systems are delivered securely, reliably, and in alignment with enterprise operational standards.",
      marker1Title: "Security Practices",
      marker1Description:
        "Secure development processes and infrastructure standards are embedded throughout system design and deployment.",
      marker2Title: "Compliance Standards",
      marker2Description:
        "Delivery processes align with recognised security, data protection, and operational compliance requirements.",
      marker3Title: "Contract Model",
      marker3Description:
        "Engagements operate under clearly defined delivery scopes, milestones, and accountability frameworks.",
      marker4Title: "Governance Cadence",
      marker4Description:
        "Regular operating reviews track delivery progress, system performance, and key programme risks.",
      marker5Title: "QA Discipline",
      marker5Description:
        "Structured testing and quality assurance ensure system stability, performance, and reliability before release.",
      marker6Title: "Data Handling",
      marker6Description:
        "Clear data governance frameworks protect system integrity, access control, and operational transparency.",
      startConversation: "Start a Conversation",
    },
    team: {
      seoTitle: "AURMAK Leadership Team",
      seoDescription:
        "Meet the AURMAK leadership team guiding technology strategy, engineering delivery, and operational execution across global enterprise engagements.",
      eyebrow: "Team",
      heroTitle: "Leadership",
      heroLead:
        "AURMAK’s leadership brings extensive experience across complex global enterprise engagements, guiding technology strategy, engineering delivery, and operational execution.",
      heroBadge: "👥 Leadership",
      sectionTitleLead: "Leadership",
      sectionTitleHighlight: "Team",
      member1Role: "Co-founder",
      member1Bio:
        "Engineering executive with more than 30 years of leadership experience across power generation, manufacturing operations, and large-scale infrastructure programmes. Masood provides operational leadership and strategic oversight across AURMAK’s enterprise engagements.",
      member2Role: "Chief Operating Officer",
      member2Bio:
        "Programme delivery leader with more than 15 years of experience managing complex projects across manufacturing, oil and gas environments. Umer specialises in delivery governance, stakeholder coordination, and operational execution across large-scale initiatives.",
      member3Role: "Managing Director",
      member3Bio:
        "Operations and business transformation consultant with more than 12 years of leadership experience across logistics, construction, and professional services. Khurram focuses on operational performance, commercial strategy, and sustainable growth initiatives.",
      networkTitleLead: "Global Expert",
      networkTitleHighlight: "Network",
      networkBody1:
        "Alongside its leadership team, AURMAK works with a global network of specialist engineers, architects, and delivery partners supporting enterprise programmes across infrastructure systems, data platforms, and AI-enabled solutions.",
      networkBody2:
        "This model enables AURMAK to assemble the right expertise for each engagement while maintaining disciplined programme oversight and strategic leadership.",
      careersTitleLead: "Careers at",
      careersTitleHighlight: "AURMAK",
      careersBody:
        "We design and build technology systems for real operational environments. If you’re motivated by solving complex technical challenges, we’d like to hear from you.",
      careersCta: "Explore Opportunities",
    },
    contact: {
      seoTitle: "Contact AURMAK | Start an Enterprise Systems Conversation",
      seoDescription:
        "Contact AURMAK to discuss enterprise systems, AI integration, SaaS platforms, and digital modernisation with our London, Dubai, and Lahore teams.",
      eyebrow: "Contact",
      heroTitleLead: "Start the Conversation That Moves",
      heroTitleHighlight: "Your Operations Forward.",
      heroLead:
        "Tell us where your systems are slowing you down or limiting scale. We’ll help you define a clear, structured path forward.",
      heroBadge: "📞 Get in Touch",
      startConversation: "Start a Conversation",
      officesTitleLead: "Global Presence.",
      officesTitleHighlight: "Local Understanding.",
      office1Country: "United Kingdom",
      office1Focus: "Client strategy & delivery",
      office2Country: "United Arab Emirates",
      office2Focus: "Regional delivery & coordination",
      office3Country: "Pakistan",
      office3Focus: "Engineering & platform development",
      speakDirectly: "Speak with our team directly",
      calendlyLabel: "Calendly",
      bookingTitleLead: "Start with a",
      bookingTitleHighlight: "Focused Conversation",
      bookingLead:
        "30 minutes with a senior team member to understand your current systems, challenges, and priorities and outline a clear path forward.",
      divider: "or send us a message",
      messageTitleLead: "Send a",
      messageTitleHighlight: "Message",
      messageLead:
        "Share a brief outline of your current priorities — we’ll respond with a clear next step.",
      successTitle: "Enquiry Submitted Successfully",
      successBody: "Our team will contact you shortly.",
      submitErrorGeneric: "Unable to submit your enquiry right now.",
      fullName: "Full Name *",
      fullNamePlaceholder: "John Doe",
      email: "Email Address *",
      emailPlaceholder: "john@company.com",
      company: "Company Name",
      companyPlaceholder: "Your Company",
      serviceRequirement: "Service Requirement *",
      selectService: "Select a service",
      message: "Message *",
      messagePlaceholder:
        "Tell us about your business, what you're looking to achieve, and any timelines or constraints.",
      securityCheck: "Please complete the security check before submitting.",
      submitting: "Submitting...",
      submitEnquiry: "Submit Enquiry",
      service1: "SaaS Product Development",
      service2: "Legacy System Modernisation",
      service3: "AI Integration",
      service4: "Building Management Systems",
      service5: "General Advisory",
    },
    careers: {
      seoTitle: "Careers at AURMAK",
      seoDescription:
        "Explore current AURMAK roles across engineering, delivery, frontend development, and product execution within our global delivery model.",
      eyebrow: "Careers",
      heroTitleLead: "Careers at",
      heroTitleHighlight: "AURMAK.",
      heroLead:
        "Join a team where commercial clarity, technical discipline, and accountable delivery define how work gets done.",
      heroBadge: "🚀 Join Us",
      viewOpenRoles: "View Open Roles",
      getInTouch: "Get in Touch",
      openTitleLead: "Open",
      openTitleHighlight: "Positions",
      openIntro:
        "Current openings include a dedicated role detail page and direct application submission.",
      role1Title: "Tech Lead (Backend/AI)",
      role2Title: "Product Owner (Delivery Lead)",
      role3Title: "Frontend Developer (SaaS & Modern UI)",
      roleLocation: "Lahore, Pakistan",
      roleModel1: "Hybrid, Full-time",
      roleModel2: "Hybrid, Full-time",
      roleModel3: "On-site / Hybrid, Full-time",
      viewRoleApply: "View Role & Apply",
      whyJoinTitle: "Why Join AURMAK",
      whyJoinLead:
        "Contribute to enterprise delivery while building practical product capability through our innovation model.",
      whyJoin1: "Disciplined engineering culture with leadership accountability.",
      whyJoin2: "Cross-regional collaboration across London, Dubai, and Lahore teams.",
      whyJoin3: "Balanced exposure to client delivery and internal product development.",
      whyJoin4: "Clear ownership, governance, and measurable outcomes.",
      benefitsTitle: "Company Benefits",
      benefitsLead:
        "We invest in long-term team development with international exposure and structured benefits after probation.",
      benefit1: "Opportunity to work from AURMAK's Dubai and London offices.",
      benefit2:
        "Long-term team members may be offered a permanent role in an AURMAK international office.",
      benefit3: "After successful completion of probation, eligibility for a company car.",
      benefit4:
        "After successful completion of probation, eligibility for medical insurance and paid holidays.",
    },
    jobDetail: {
      notFoundTitle: "Role Not Found",
      notFoundBody: "The job you're looking for doesn't exist or has been removed.",
      returnToCareers: "Return to Careers",
      eyebrow: "Structured Opportunity",
      heroBadge: "💼 Career Opportunity",
      roleSummary: "Role Summary",
      jobCode: "Job Code",
      location: "Location",
      workModel: "Work Model",
      experience: "Experience",
      responsibilities: "Core Responsibilities",
      requirements: "Requirements",
      benefits: "Benefits",
      submitApplication: "Submit Application",
      submitLead:
        "Submit your application details below. Your CV will be attached to the review email.",
      successTitle: "Application submitted successfully!",
      successBody: "Our team will review your profile and respond shortly.",
      submitErrorGeneric: "Unable to submit your application right now.",
      fullName: "Full Name *",
      workEmail: "Work Email *",
      phone: "Phone Number *",
      currentLocation: "Current Location",
      portfolio: "Portfolio or LinkedIn",
      note: "Application Note",
      uploadCv: "Upload CV * (PDF, DOC, DOCX, max 5MB)",
      chooseFile: "Choose file",
      securityCheck: "Please complete the security check before submitting.",
      cvReviewNote: "Your CV is sent as an attachment to the AURMAK careers inbox for review.",
      submitting: "Submitting...",
      submitCta: "Submit Application",
      fileTooLarge: "CV file must be less than 5MB",
      fileInvalid: "CV must be PDF, DOC, or DOCX format",
      experience5: "5+ years",
      experience3: "3+ years",
      job1Lead:
        "Lead the Lahore engineering hub and build the scalable systems that power modern operations, from SaaS platforms to AI-enabled automation.",
      job1Location: "Lahore, Pakistan (with London and Dubai collaboration)",
      job1WorkModel: "Hybrid, Full-time",
      job1Summary:
        "We are seeking an enterprise-grade architect to lead our engineering hub in Lahore. You will balance high-level architecture with AI-accelerated execution across client delivery and internal product incubation.",
      job1Resp1:
        "System Architecture: Design and maintain robust backend environments using PostgreSQL and Supabase.",
      job1Resp2:
        "AI-Accelerated Development: Lead development cycles using Cursor to maintain high velocity without compromising enterprise-grade quality.",
      job1Resp3:
        "Dual-Track Execution: Manage technical delivery for both high-end client services and internal product incubation.",
      job1Resp4:
        "Enterprise Standards: Ensure all systems meet strict standards for security, governance, and data integrity.",
      job1Req1: "Expertise in PostgreSQL and modern backend architecture.",
      job1Req2:
        "Proficiency in Supabase and AI-assisted coding workflows, specifically Cursor.",
      job1Req3:
        "Experience modernizing legacy systems and building reliable digital infrastructure.",
      job2Lead:
        "Bridge strategic leadership in London and Dubai with daily engineering execution in Lahore while maintaining disciplined delivery against commercial goals.",
      job2Location: "Lahore, Pakistan",
      job2WorkModel: "Hybrid, Full-time",
      job2Summary:
        "As the primary on-ground commander in Lahore, you will enforce AURMAK’s delivery model, maintain the 50/50 workflow, and keep engineering execution aligned with strategic leadership.",
      job2Resp1:
        "Workflow Management: Strictly enforce the 50/50 Rule, with Monday to Wednesday focused on client projects and Thursday to Friday reserved for internal SaaS products.",
      job2Resp2:
        "Stakeholder Coordination: Act as the primary link between the engineering team and the Dubai front office for requirements and reporting.",
      job2Resp3:
        "Structured Delivery: Oversee the full lifecycle from discovery and architecture to pilot and rollout.",
      job2Resp4:
        "Diagnostic Leadership: Facilitate human-led diagnostics to ensure technology is an outcome of clear problem definition.",
      job2Req1: "Strong background in ticket management, sprint planning, and client reporting.",
      job2Req2:
        "Ability to manage complex transformations without allowing tech-for-tech's-sake.",
      job2Req3:
        "Experience in a proxy model of management, ensuring execution while partners are engaged globally.",
      job3Lead:
        "Build minimalist, high-performance interfaces that bring engineering clarity to complex enterprise systems and operational dashboards.",
      job3Location: "Lahore, Pakistan",
      job3WorkModel: "On-site / Hybrid, Full-time",
      job3Summary:
        "You will use modern boilerplates to accelerate delivery while maintaining AURMAK’s corporate, high-tech aesthetic across SaaS products and client systems.",
      job3Resp1:
        "Rapid Implementation: Build responsive UIs using React or Vue, leveraging Antigravity or similar boilerplates to test ideas quickly.",
      job3Resp2:
        "Visual Precision: Implement clean, grid-based layouts inspired by Palantir's design language.",
      job3Resp3:
        "Performance Dashboards: Create unified operational views that provide single-pane visibility across assets and data.",
      job3Req1: "Mastery of React or Vue.js and Tailwind CSS.",
      job3Req2: "Ability to work with Ant Design 6.3.0 and the 8-point grid system.",
      job3Req3:
        "Focus on visual explanation over long text, utilising diagrams and system flows.",
    },
    lab: {
      seoTitle: "Venture Lab for Enterprise Technology Capability",
      seoDescription:
        "The Venture Lab strengthens AURMAK’s enterprise systems, AI-enabled operational intelligence, and delivery model through disciplined product exploration.",
      eyebrow: "The Lab",
      heroTitleLead: "The Venture",
      heroTitleHighlight: "Lab",
      heroLead:
        "Where internal product ideas become real technology capability. Concepts are tested, refined, and built using the same engineering discipline that powers our client systems.",
      heroBadge: "🔬 Innovation Lab",
      principlesTitleLead: "How the Lab",
      principlesTitleHighlight: "Operates",
      principle1Title: "Human-Led Diagnostics",
      principle1Description:
        "We begin by analysing operational problems and commercial needs before defining what should be built.",
      principle2Title: "Structured Build Cycles",
      principle2Description:
        "Product concepts are developed through controlled build cycles with clear checkpoints and technical governance.",
      principle3Title: "Scalability Readiness",
      principle3Description:
        "Every output is designed to scale, informing both client delivery and future venture opportunities.",
      deliveryTitleLead: "Innovation That",
      deliveryTitleHighlight: "Strengthens Delivery",
      deliveryBody1:
        "The Venture Studio exists to explore new technology approaches that may influence how enterprise systems are designed, built, and operated.",
      deliveryBody2:
        "Insights from these initiatives inform AURMAK’s delivery capability, ensuring our teams remain closely connected to emerging platforms, architectures, and operational models.",
      deliveryBody3BeforeServices: "This work directly supports our ",
      deliveryBody3BetweenServicesAndSolutions: ", ",
      deliveryBody3BetweenSolutionsAndCaseStudies: ", and selected ",
      deliveryBody3AfterCaseStudies: ".",
      focusTitleLead: "Current Exploration",
      focusTitleHighlight: "Areas",
      focus1Title: "Predictive Maintenance Workflows",
      focus1Description:
        "Anticipating equipment issues through AI-driven operational intelligence.",
      focus2Title: "Governed AI Interfaces",
      focus2Description:
        "Secure AI interaction layers for enterprise systems.",
      focus3Title: "Facility Performance Modelling",
      focus3Description:
        "Simulating infrastructure performance and optimisation.",
      focus4Title: "Integration Accelerators",
      focus4Description:
        "Reusable frameworks for faster enterprise system integration.",
    },
    legal: {
      legalEyebrow: "Legal",
      privacyTitle: "Privacy Policy",
      privacyLead:
        "This policy explains how AURMAK collects, uses, stores, and protects personal data submitted through this website.",
      privacyDescription:
        "Read AURMAK's privacy policy covering enquiries, recruitment submissions, data handling, retention, and contact details.",
      privacySection1Title: "Information We Collect",
      privacySection1Lead:
        "We collect personal information that you voluntarily provide when using our website, including:",
      privacyItem1: "Contact information (name, email, phone number)",
      privacyItem2: "Company or organisation details",
      privacyItem3: "Professional information and CVs for job applications",
      privacyItem4: "Project requirements and business enquiries",
      privacyItem5: "Portfolio links and professional profiles",
      privacyItem6: "Booking details submitted through our scheduling tools",
      privacySection2Title: "How We Use Information",
      privacySection2Lead:
        "We use the collected information for the following purposes:",
      privacyUse1: "Responding to enquiries and consultation requests",
      privacyUse2: "Processing job applications and recruitment activities",
      privacyUse3: "Managing scheduling requests and discovery calls",
      privacyUse4: "Providing information about our services and solutions",
      privacyUse5: "Improving our website and user experience",
      privacyUse6: "Complying with legal obligations and contractual requirements",
      privacySection2Body:
        "We do not sell your personal information. We may share limited information with service providers that help us operate the website, process enquiries, manage recruitment submissions, or provide scheduling and analytics tools, where that is necessary to operate our services.",
      privacySection3Title: "Storage and Security",
      privacySection3Lead:
        "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes:",
      privacySecurity1: "Secure data transmission protocols (SSL/TLS encryption)",
      privacySecurity2: "Restricted access to personal information on a need-to-know basis",
      privacySecurity3: "Regular security assessments and updates",
      privacySecurity4: "Data retention policies aligned with legal requirements",
      privacySection3Body:
        "Personal data is retained only for as long as necessary to handle enquiries, recruitment submissions, and related business communications, or as required by applicable law.",
      privacySection4Title: "Contact",
      privacySection4BodyBefore: "For privacy requests, questions, or to exercise your data protection rights, please use our ",
      privacySection4BodyAfter: ".",
      cookiesTitle: "Cookies Policy",
      cookiesLead:
        "This policy explains how AURMAK uses essential cookies, analytics cookies, and local storage preferences on this website.",
      cookiesDescription:
        "Review AURMAK's cookies policy, including essential cookies, analytics usage, and visitor cookie controls.",
      cookiesSection1Title: "Essential Cookies",
      cookiesSection1Lead:
        "Essential cookies are necessary for the website to function properly. These cookies enable core functionality such as:",
      cookiesEssential1: "Navigation and core site functionality",
      cookiesEssential2: "Form submission and validation",
      cookiesEssential3: "Cookie consent preferences",
      cookiesEssential4: "Display and interface preferences where applicable",
      cookiesSection1Body:
        "Essential cookies do not require user consent as they are strictly necessary for the operation of the website.",
      cookiesSection2Title: "Analytics Cookies",
      cookiesSection2Lead:
        "Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This information helps us:",
      cookiesAnalytics1: "Analyse website traffic and user behaviour patterns",
      cookiesAnalytics2: "Identify popular content and pages",
      cookiesAnalytics3: "Improve website performance and user experience",
      cookiesAnalytics4: "Understand visitor demographics and interests",
      cookiesSection2Body:
        "We use aggregated analytics data to make informed decisions about website improvements, content performance, and user experience.",
      cookiesSection3Title: "Consent Choices",
      cookiesSection3Body1:
        "When you first visit the website, AURMAK may present a cookie consent notice allowing you to accept optional cookies or continue with essential-only settings.",
      cookiesSection3Body2:
        "Your cookie preference may be stored in your browser using local storage so that the notice does not reappear on every visit.",
      cookiesSection4Title: "Managing Cookies",
      cookiesSection4Lead:
        "You can control and manage cookies in your browser settings. Most browsers allow you to:",
      cookiesManage1: "View what cookies are stored and delete them individually",
      cookiesManage2: "Block third-party cookies",
      cookiesManage3: "Block cookies from particular sites",
      cookiesManage4: "Block all cookies from being set",
      cookiesManage5: "Delete all cookies when you close your browser",
      cookiesSection4Body1:
        "Please note that blocking or deleting cookies may impact your experience on our website and limit access to certain features.",
      cookiesSection4Body2Before: "For more information about cookies and how to manage them, visit ",
      cookiesSection4Body2After: ".",
      termsTitle: "Terms & Conditions",
      termsLead:
        "By using this website, you agree to these terms governing access to AURMAK’s content, communications, and online services.",
      termsDescription:
        "Review AURMAK's website terms and conditions, including permitted use, intellectual property, and liability provisions.",
      termsSection1Title: "Use of Website",
      termsSection1Body1:
        "By accessing and using this website, you agree to these terms. The materials on this website are provided for general information about AURMAK, its services, its case studies, its careers opportunities, and related business enquiries.",
      termsSection1Lead: "You may not:",
      termsUse1: "Use this website in any way that causes damage to the website or impairs user access",
      termsUse2: "Use this website in any unlawful manner or for any unlawful purpose",
      termsUse3: "Attempt to gain unauthorised access to any portion or feature of the website",
      termsUse4: "Modify, copy, distribute, transmit, display, perform, reproduce, publish, or create derivative works from any materials",
      termsUse5: "Use automated systems or software to extract data from this website (screen scraping)",
      termsSection1Body2:
        "We reserve the right to restrict or suspend access to the website where necessary to protect the website, our users, or our legal rights.",
      termsSection2Title: "Intellectual Property",
      termsSection2Body1:
        "All content, materials, information, and intellectual property on this website, including text, graphics, logos, images, case study materials, software, and design, are owned by or licensed to AURMAK and are protected by copyright, trademark, and other intellectual property laws.",
      termsSection2Body2:
        "Unless otherwise stated, AURMAK and/or its licensors own the intellectual property rights for all material on this website. You may view, download, and print pages from the website for your own personal use, subject to restrictions set in these terms and conditions.",
      termsSection2Lead: "You must not:",
      termsIp1: "Republish material from this website without proper attribution",
      termsIp2: "Sell, rent, or sub-license material from the website",
      termsIp3: "Reproduce, duplicate, or copy material for commercial purposes",
      termsIp4: "Redistribute content from AURMAK without explicit permission",
      termsSection3Title: "Liability",
      termsSection3Lead:
        "The information on this website is provided on an \"as is\" basis. To the fullest extent permitted by law, AURMAK:",
      termsLiability1: "Excludes all representations and warranties relating to this website and its contents",
      termsLiability2: "Excludes all liability for damages arising out of or in connection with your use of this website",
      termsLiability3: "Does not warrant that the website will be constantly available or available at all",
      termsLiability4: "Reserves the right to discontinue or alter any or all of the website services without notice",
      termsSection3Body:
        "Nothing in these terms and conditions will limit or exclude our liability for death or personal injury resulting from negligence, fraud, or any liability that cannot be excluded or limited by applicable law.",
      termsSection4Title: "Contact",
      termsSection4BodyBefore: "For legal enquiries or questions about these terms, please use our ",
      termsSection4BodyAfter: ".",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you requested could not be found.",
      body: "The page you're looking for doesn't exist or has been moved.",
      goHome: "Go Home",
      goBack: "Go Back",
    },
    routeError: {
      brand: "AURMAK",
      title: "Something went wrong",
      description: "Please refresh the page and try again.",
      refreshingTitle: "Refreshing the latest version",
      refreshingDescription:
        "The site was updated while this page was open. Refresh once to load the latest version.",
      pageNotFound: "Page not found",
      goHome: "Go Home",
      refreshPage: "Refresh page",
    },
    insights: {
      seoTitle: "Enterprise Systems Insights, Strategy, and Delivery Thinking",
      seoDescription:
        "Browse AURMAK insights on enterprise SaaS, product strategy, validation, delivery practices, and business-focused digital modernisation.",
      eyebrow: "Insights",
      heroTitle: "Business Strategy Through Design.",
      heroLead:
        "Expert insights on leveraging UX and product design to drive revenue growth, reduce risk, and accelerate digital transformation.",
      heroBadge: "📊 Strategic Resources",
      filterAllTopics: "All Topics",
      filterProductDevelopment: "Product Development",
      filterDesignTesting: "Design & Testing",
      topicProductDevelopment: "Product Development",
      topicDesignTesting: "Design & Testing",
      readArticle: "Read article",
      backToInsights: "Back to Insights",
      notFoundTitle: "Insight Not Found",
      notFoundBody: "The article you requested is not available.",
      returnToInsights: "Return to Insights",
      editorialPerspective: "Editorial Perspective",
      editorialQuote:
        "The strongest product content does not just explain UX. It translates design decisions into adoption, revenue, delivery confidence, and operational clarity.",
      keyTakeaways: "Key Takeaways",
      nextStep: "Next Step",
      talkToAurmak: "Talk to AURMAK",
      seeCaseStudies: "See Case Studies",
      continueReading: "Continue Reading",
      moreFromInsights: "More from Insights",
      allInsights: "All insights",
    },
    caseStudyDetail: {
      notFoundTitle: "Case Study Not Found",
      notFoundBody: "The requested case study could not be found.",
      backToCaseStudies: "Back to Case Studies",
      challenge: "The Challenge",
      solution: "Our Solution",
      execution: "Execution",
      businessImpact: "Business Impact",
      projectOverview: "Project Overview",
      projectScope: "Project Scope",
      keyActivities: "Key Activities",
      finalTitle: "Ready to Move Your Operations Forward?",
      finalBody:
        "We work with organisations to simplify complexity, align teams, and design systems that scale from early discovery through to implementation.",
      startConversation: "Start a Conversation",
      closeModal: "Close modal",
      home: "Home",
    },
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      whatWeDo: "ما الذي نقدمه",
      services: "الخدمات",
      solutions: "الحلول",
      howWeWork: "آلية العمل",
      caseStudies: "دراسات الحالة",
      company: "الشركة",
      about: "من نحن",
      team: "الفريق",
      lab: "المختبر",
      insights: "الرؤى",
      careers: "الوظائف",
      contact: "اتصل بنا",
      switchToLight: "التبديل إلى الوضع الفاتح",
      switchToDark: "التبديل إلى الوضع الداكن",
      languageUnavailable: "العربية غير متاحة",
      languageShortUnavailable: "غير متاح",
      toggleMenu: "فتح القائمة",
      english: "EN",
      arabic: "العربية",
    },
    footer: {
      quickLinks: "روابط سريعة",
      more: "المزيد",
      connect: "تواصل معنا",
      rightsReserved: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
      terms: "الشروط والأحكام",
    },
    cookieConsent: {
      title: "تفضيلات الخصوصية",
      bodyBeforeLink:
        "نستخدم ملفات تعريف الارتباط الأساسية للحفاظ على أمان الموقع، ونستخدم ملفات اختيارية للتحليلات لمساعدتنا على تحسينه. نحن لا نبيع بياناتك الشخصية مطلقاً. راجع ",
      bodyAfterLink: ".",
      acceptAll: "قبول الكل",
      essentialOnly: "الضرورية فقط",
      saved: "تم حفظ التفضيلات",
      close: "إغلاق",
    },
    home: {
      seoTitle: "الأنظمة المؤسسية وتكامل الذكاء الاصطناعي والتحديث الرقمي",
      seoDescription:
        "تصمم AURMAK الأنظمة المؤسسية والبنية الرقمية والذكاء التشغيلي المدعوم بالذكاء الاصطناعي للعمليات المعقدة عبر الأسواق الإقليمية الرئيسية.",
      heroTitleLead: "نبني لنفكر",
      heroTitleHighlight: "وننجز.",
      heroLead:
        "نصمم وننفذ الأنظمة المؤسسية التي تدعم العمليات الحديثة، من منصات البرمجيات كخدمة والبنية الرقمية إلى الأتمتة المدعومة بالذكاء الاصطناعي.",
      startConversation: "ابدأ المحادثة",
      servicesEyebrow: "ما الذي تبنيه AURMAK",
      servicesTitleLead: "أنظمة تدعم",
      servicesTitleHighlight: "العمليات الحديثة",
      servicesIntro:
        "تتعاون AURMAK مع المؤسسات لتصميم وبناء وتحديث الأنظمة الرقمية التي تدعم العمليات واتخاذ القرار والنمو.",
      servicesIntroSecondary:
        "يجمع عملنا بين الاستشارات الاستراتيجية والتنفيذ الهندسي العملي. نساعد المؤسسات على الانتقال من الفكرة إلى التنفيذ المؤسسي الموثوق.",
      service1Title: "منصات برمجيات مؤسسية كخدمة",
      service1Description:
        "تصميم وتطوير منتجات SaaS قابلة للتوسع لدعم العمليات المؤسسية المعقدة على نطاق واسع.",
      service2Title: "البنية الرقمية والأتمتة",
      service2Description:
        "تحديث الأنظمة القديمة وبناء بنية رقمية موثوقة لعمليات أكثر ترابطاً وكفاءة.",
      service3Title: "الذكاء التشغيلي المدعوم بالذكاء الاصطناعي",
      service3Description:
        "تطبيق الذكاء الاصطناعي ونماذج البيانات لتحسين الرؤية التشغيلية واتخاذ القرار والأداء.",
      capabilityTitleLead: "قدرة هندسية.",
      capabilityTitleHighlight: "تفكير استراتيجي.",
      capability1Title: "هندسة متسارعة بالذكاء الاصطناعي",
      capability1Description:
        "حكم هندسي بشري مدعوم بأدوات مساعدة بالذكاء الاصطناعي لتسريع التنفيذ مع الحفاظ على الجودة المؤسسية.",
      capability2Title: "انضباط في التسليم المؤسسي",
      capability2Description:
        "تنفيذ منظم مع ضوابط حوكمة ونقاط مراجعة واضحة ونتائج تشغيلية قابلة للقياس.",
      capability3Title: "ابتكار تقوده المشاريع الريادية",
      capability3Description:
        "تغذي خبرات العملاء تطوير المنتجات الداخلية، ما يتيح تطبيق حلول وأنماط تنفيذ مجربة بسرعة أكبر عبر الصناعات.",
      exploreServices: "استكشف الخدمات",
      deliveryTitleLead: "تنفيذ عالمي.",
      deliveryTitleHighlight: "وأداء مثبت.",
      deliveryIntro:
        "نموذج تنفيذ مبني على الحضور الإقليمي والانضباط التشغيلي والنتائج المؤسسية القابلة للقياس.",
      metric1Title: "مراكز تشغيل إقليمية",
      metric1Value: "3",
      metric1Description: "لندن ودبي ولاهور تدعم نموذج تنفيذ عالمي متكامل.",
      metric2Title: "قدرات تنفيذ أساسية",
      metric2Value: "4",
      metric2Description: "منصات SaaS، وتحديث الأنظمة، وتكامل الذكاء الاصطناعي، والبنية الذكية.",
      metric3Title: "نتائج قابلة للقياس",
      metric3Value: "95%",
      metric3Description: "اتساق في التقارير بعد مواءمة نموذج البيانات المؤسسي.",
      clientsTitleLead: "شراكات مع",
      clientsTitleHighlight: "قادة الصناعة",
      clientsIntro: "أنظمة مؤسسية تم تنفيذها عبر البرمجيات كخدمة والبنية التحتية والإعلام والعمليات والمنصات الرقمية.",
      exploreCaseStudies: "استكشف دراسات الحالة",
      labTitleLead: "ما بعد التنفيذ.",
      labTitleHighlight: "نبني ما يأتي بعد ذلك.",
      labIntro:
        "إلى جانب الشراكات مع العملاء من المؤسسات، تدير AURMAK استوديو مشاريع لتطوير منصات SaaS داخلية ومشاريع تقنية.",
      labIntroSecondary:
        "يبقي هذا النموذج فرقنا قريبة من كل من التنفيذ المؤسسي وابتكار المنتجات.",
      exploreLab: "استكشف المختبر",
      finalTitleLead: "تخطط لنظامك",
      finalTitleHighlight: "المؤسسي القادم؟",
      finalLead: "دعنا نناقش النهج المناسب لمؤسستك.",
    },
    about: {
      seoTitle: "عن AURMAK | قيادة تقنية عالمية",
      seoDescription:
        "تجمع AURMAK بين القيادة في المملكة المتحدة والإمارات والتنفيذ الهندسي العالمي لتقديم الأنظمة المؤسسية بحوكمة ووضوح ومساءلة.",
      eyebrow: "عن AURMAK",
      heroTitleLead: "قيادة تقنية",
      heroTitleHighlight: "عالمية",
      heroLead:
        "تعمل القيادة الاستراتيجية في لندن ودبي جنباً إلى جنب مع فرق هندسية موزعة عالمياً لتقديم برامج تقنية مؤسسية معقدة بمساءلة واضحة عبر المشاريع الدولية.",
      heroBadge: "🌍 حضور عالمي",
      builtTitleLead: "مرتكزة على أسس",
      builtTitleHighlight: "دولية",
      builtBody1:
        "تمثل AURMAK علامة تقنية جديدة مبنية على أسس مجموعة تقنية دولية راسخة لها عمليات في المملكة المتحدة والإمارات.",
      builtBody2:
        "يوفر هذا الإرث النضج التشغيلي ومعايير الحوكمة والخبرة العابرة للمناطق اللازمة لتقديم برامج تقنية مؤسسية معقدة.",
      builtBody3:
        "يعزز انتشارنا الدولي الإشراف على التنفيذ وفهم البنية التحتية والقدرة على دعم المؤسسات العاملة عبر أسواق متعددة.",
      builtBody4BeforeServices: "استكشف ",
      builtBody4BetweenServicesAndSolutions: " و",
      builtBody4BetweenSolutionsAndLab: " و",
      builtBody4AfterLab: " لمعرفة كيف يتحول هذا النموذج إلى قدرة تنفيذية.",
      centresTitleLead: "ثلاثة مراكز.",
      centresTitleHighlight: "رؤية واحدة.",
      london: "لندن",
      dubai: "دبي",
      lahore: "لاهور",
      centresBody:
        "تشكل لندن ودبي ولاهور شبكة التسليم العالمية المتكاملة لدى AURMAK، حيث تجمع بين القيادة الاستراتيجية والقدرة الهندسية والتنفيذ التشغيلي. تعمل فرقنا كنظام موحد مع مرونة لنشر قدرات الهندسة والتسليم عبر المناطق وفقاً لمتطلبات المشروع والاحتياجات التنظيمية وتفضيلات العميل.",
      modelTitleLead: "قيادة استراتيجية.",
      modelTitleHighlight: "تنفيذ هندسي.",
      modelIntro:
        "يجمع نموذج التسليم لدى AURMAK بين القيادة الدولية والتنفيذ الهندسي القابل للتوسع.",
      modelPoint1: "معايير حوكمة دولية ترتكز في لندن ودبي",
      modelPoint2: "تنفيذ هندسي منضبط يتم عبر فرق موزعة عالمياً",
      modelPoint3: "تكامل بين الاستراتيجية والتنفيذ تحت قيادة موحدة",
      modelPoint4: "نضج تشغيلي مدعوم بأسس الشركة الأم في المملكة المتحدة والإمارات",
      systemsTitleLead: "تركيز على",
      systemsTitleHighlight: "الأنظمة المؤسسية",
      systemsBody:
        "تصمم AURMAK وتنفذ أنظمة تقنية مؤسسية تدعم العمليات الحديثة، من منصات SaaS والبنية الرقمية إلى الذكاء التشغيلي المدعوم بالذكاء الاصطناعي.",
      systemsBody2BeforeCaseStudies: "اطلع على ",
      systemsBody2Between: " أو ",
      systemsBody2AfterContact: " مع الفريق.",
      ventureTitleLead: "تطوير",
      ventureTitleHighlight: "المشاريع",
      ventureBody1:
        "إلى جانب شراكات العملاء من المؤسسات، تدير AURMAK استوديو مشاريع يركز على تطوير منصات SaaS داخلية ومنتجات تقنية.",
      ventureBody2:
        "يبقي هذا العمل فرقنا على اتصال وثيق بهندسة المنتجات وتصميم البنية التحتية والتفكير طويل الأمد في المنصات، وهي خبرة تعزز مباشرة الأنظمة التي نقدمها للعملاء.",
      exploreLab: "استكشف المختبر",
      finalTitleLead: "تخطط لنظامك",
      finalTitleHighlight: "المؤسسي القادم؟",
      finalBody:
        "تحدث مع فريقنا لاستكشاف النهج التقني الأنسب لمؤسستك.",
      startConversation: "ابدأ المحادثة",
    },
    services: {
      seoTitle: "تطوير الأنظمة المؤسسية وتكامل الذكاء الاصطناعي والتحديث",
      seoDescription:
        "تصمم AURMAK الأنظمة المؤسسية والبنية الرقمية وتكامل الذكاء الاصطناعي مع حوكمة تنفيذ وحوكمة بيانات وقابلية توسع مدمجة.",
      eyebrow: "الخدمات",
      heroTitleLead: "أنظمة مؤسسية.",
      heroTitleHighlight: "مبنية ومنفذة.",
      heroLead:
        "تصمم فرقنا وتبني وتحدّث المنصات التقنية التي تعتمد عليها المؤسسات للتشغيل والتوسع واتخاذ القرار، من SaaS وتكامل الذكاء الاصطناعي إلى البنية الرقمية والذكاء التشغيلي.",
      coreTitleLead: "أنظمة تقنية تدعم",
      coreTitleHighlight: "العمليات الحديثة",
      coreIntro:
        "تركز قدراتنا الهندسية على بناء الأنظمة التقنية المؤسسية وتحديثها ودمجها.",
      coreProofBeforeRbs: "تشمل أمثلة التنفيذ ",
      coreProofBetweenRbsAndCarlounge: "، ",
      coreProofBetweenCarloungeAndAljazeera: "، ",
      coreProofBetweenAljazeeraAndCisco: "، و",
      coreProofAfterCisco: ".",
      service1Title: "تطوير منتجات SaaS",
      service1Description:
        "تصميم وتطوير منصات SaaS قابلة للتوسع للعمليات المؤسسية.",
      service2Title: "تحديث الأنظمة القديمة",
      service2Description:
        "تحسين الاعتمادية وقابلية التوسع عبر الأنظمة والبنية التحتية القديمة.",
      service3Title: "تكامل الذكاء الاصطناعي",
      service3Description:
        "تطبيق الذكاء الاصطناعي لتحسين الرؤية التشغيلية والأتمتة واتخاذ القرار.",
      service4Title: "أنظمة إدارة المباني",
      service4Description:
        "تصميم ودمج أنظمة مبانٍ ذكية تحسن الرؤية التشغيلية وأداء البنية التحتية.",
      deliveryTitleLead: "تنفيذ مؤسسي",
      deliveryTitleHighlight: "منظم",
      deliveryPoint1: "مراحل تنفيذ محددة مع ملكية واضحة ونقاط مراجعة معتمدة.",
      deliveryPoint2: "الحوكمة والأمن والامتثال مدمجة منذ البداية.",
      deliveryPoint3: "تنفيذ متعدد التخصصات تقوده قيادة تسليم مسؤولة.",
      deliveryPoint4: "متابعة الأداء مرتبطة بالنتائج التجارية والتشغيلية المتفق عليها.",
      approachTitle: "نهجنا في التنفيذ",
      approachBody:
        "تنتقل المشاريع عبر مراحل منظمة: الاكتشاف، والهندسة المعمارية، والتجربة الأولية، والإطلاق، والدعم طويل الأمد، مع مساءلة واضحة في كل خطوة.",
      approachExamplesBeforeAljazeera: "للاطلاع على أمثلة تنفيذية، راجع دراسة حالة ",
      approachExamplesBetweenAljazeeraAndCarlounge: " ودراسة حالة ",
      approachExamplesAfterCarlounge: ".",
      approachStage1: "الاكتشاف",
      approachStage2: "الهندسة المعمارية",
      approachStage3: "التجربة الأولية",
      approachStage4: "الإطلاق",
      approachStage5: "الدعم طويل الأمد",
      howWeWork: "آلية العمل",
      standardsTitle: "معايير بمستوى المؤسسات",
      standard1: "الأمن",
      standard2: "الامتثال",
      standard3: "انضباط الجودة",
      standard4: "حوكمة البيانات",
      standardsBody:
        "يتم تضمين الأمن والامتثال وانضباط الجودة وحوكمة البيانات المنظمة في كل نظام نقوم بتسليمه.",
      faqEyebrow: "الأسئلة الشائعة",
      faqTitleLead: "ما الذي",
      faqTitleHighlight: "يسأله العملاء",
      faq1Question: "هل تستطيع AURMAK العمل مع البنية التقنية الحالية لدينا؟",
      faq1Answer:
        "نعم. تعمل معظم المؤسسات ضمن بيئات تقنية معقدة، وغالباً ما يركز عملنا على التكامل مع الأنظمة القائمة بدلاً من استبدالها بالكامل. تقيم فرقنا البنية الحالية، وتحدد نقاط التكامل، وتصمم حلولاً تحدث أو توسع أنظمتكم مع الحفاظ على الاستقرار والأمن واستمرارية العمليات.",
      faq2Question: "كيف تتعامل AURMAK مع تحديث الأنظمة القديمة؟",
      faq2Answer:
        "يتطلب تحديث الأنظمة القديمة موازنة الابتكار مع الاستقرار التشغيلي. تقيّم فرقنا البنية الحالية والاعتماديات، ثم تصمم نهج تحديث مرحلياً يحسن الاعتمادية وقابلية التوسع والتكامل دون التأثير على العمليات الحرجة. يتيح ذلك للمؤسسات تطوير بيئاتها التقنية مع الحفاظ على الاستمرارية والسيطرة.",
      faq3Question: "كم يستغرق مشروع تكامل الذكاء الاصطناعي عادةً؟",
      faq3Answer:
        "تستغرق مشاريع تكامل الذكاء الاصطناعي عادة من 3 إلى 6 أشهر، بحسب تعقيد الأنظمة ونطاق التنفيذ. تتبع فرقنا عملية تسليم منظمة تشمل الاكتشاف والهندسة المعمارية والتكامل والاختبار والنشر المنضبط، بما يضمن أداءً موثوقاً داخل البيئة المؤسسية القائمة.",
      faq4Question: "كيف تضمن AURMAK أمن البيانات والامتثال؟",
      faq4Answer:
        "يتم تضمين الأمن والامتثال في جميع مراحل التنفيذ، من هندسة النظام إلى النشر. تطبق فرقنا حوكمة منظمة وممارسات تطوير آمنة واختبارات دقيقة لضمان أن كل نظام يحقق معايير المؤسسات من حيث الاعتمادية وحماية البيانات والامتثال التنظيمي.",
      faq5Question: "هل تعملون مع فرق الهندسة الداخلية؟",
      faq5Answer:
        "نعم. نعمل كثيراً إلى جانب فرق الهندسة والتقنية الداخلية. يتمثل دورنا في استكمال القدرات القائمة، ودعم الهندسة المعمارية وتطوير الأنظمة والتكاملات المعقدة، مع التعاون الوثيق مع أصحاب المصلحة الداخليين.",
      faq6Question: "هل تقدمون دعماً مستمراً بعد تسليم النظام؟",
      faq6Answer:
        "نعم. تستمر العديد من شراكات العملاء بعد التسليم الأولي للنظام. نقدم تحسيناً مستمراً للنظام وصيانة ودعماً تشغيلياً من خلال ترتيبات خدمة منظمة مصممة لتناسب المتطلبات التشغيلية واتفاقيات مستوى الخدمة لكل مؤسسة. ويضمن فريقنا العالمي بقاء الأنظمة موثوقة وآمنة ومتوافقة مع احتياجات الأعمال المتطورة.",
      faq7Question: "ما الذي يميز AURMAK عن غيرها من الشركاء التقنيين؟",
      faq7Answer:
        "تجمع AURMAK بين الاستشارات التقنية الاستراتيجية والتنفيذ الهندسي المنضبط. تعمل فرقنا مع القيادة لتشخيص التحديات التشغيلية وتصميم البنية التقنية المناسبة وتسليم الأنظمة المؤسسية عبر تنفيذ منظم ومسؤول. وإلى جانب شراكات العملاء، يبقي نموذجنا القائم على المشاريع الريادية فرقنا على اتصال مباشر بتطوير المنتجات الفعلي والتقنيات الناشئة.",
      faq8Question: "ما القطاعات التي تعمل معها AURMAK؟",
      faq8Answer:
        "تدعم AURMAK المؤسسات عبر قطاعات تشمل البنية التحتية والعقارات والطاقة وتقنية المؤسسات. وتمكننا خبرتنا في البيئات التشغيلية المعقدة من تصميم وتسليم أنظمة تدعم العمليات الرقمية الحديثة عبر صناعات متعددة.",
      faq9Question: "متى يمكن للمؤسسات توقع عائد على الاستثمار من مبادرات الذكاء الاصطناعي؟",
      faq9Answer:
        "يعتمد الجدول الزمني للعائد القابل للقياس على نطاق التنفيذ ونضج الأنظمة والبيانات الحالية. وغالباً ما تبدأ المؤسسات برؤية تحسينات تشغيلية في وقت مبكر من التنفيذ مع إدخال الأتمتة وتحسين وضوح البيانات. ويتم تحديد مؤشرات أداء واضحة خلال مرحلة الاكتشاف بحيث يمكن قياس التقدم مقابل النتائج التشغيلية والتجارية المتفق عليها.",
      startConversation: "ابدأ المحادثة",
    },
    solutions: {
      seoTitle: "حلول تشغيلية لبيئات مؤسسية معقدة",
      seoDescription:
        "تقدم AURMAK أنظمة مؤسسية تعزز التحكم التشغيلي وحوكمة البيانات واتخاذ القرار عبر البيئات التشغيلية المعقدة.",
      eyebrow: "الحلول",
      heroTitleLead: "حلول تشغيلية.",
      heroTitleHighlight: "مصممة للبيئات المعقدة.",
      heroLead:
        "نصمم وننفذ أنظمة مؤسسية تعزز الرؤية وتدعم التحكم التشغيلي وتمكن اتخاذ قرارات أسرع عبر البيئات المعقدة.",
      heroBadge: "🏭 أنظمة تشغيلية",
      domainsTitleLead: "أين تعمل",
      domainsTitleHighlight: "أنظمتنا",
      domain1Title: "عمليات البنية التحتية",
      domain1Description:
        "منصات مصممة لبيئات يجب فيها مراقبة البنية التحتية أو المرافق أو المعدات وإدارتها في الوقت الحقيقي.",
      domain2Title: "إدارة الأصول والمحافظ",
      domain2Description:
        "أنظمة تربط لوحات المعلومات التشغيلية وبيانات الأداء وبيئات التقارير عبر محافظ أصول معقدة.",
      domain3Title: "عمليات المؤسسات",
      domain3Description:
        "أنظمة تشغيلية متكاملة تجمع بين البيانات وسير العمل وبيئات اتخاذ القرار عبر المؤسسات المعقدة.",
      contextsTitleLead: "البيئات",
      contextsTitleHighlight: "التشغيلية",
      context1: "المراقبة التشغيلية وذكاء الأداء",
      context2: "مراقبة أداء المرافق والعقارات",
      context3: "تقارير على مستوى المحافظ عبر المشاريع والأصول",
      context4: "لوحات تشغيل إقليمية للفرق متعددة المناطق",
      outcomesTitleLead: "النتائج",
      outcomesTitleHighlight: "التشغيلية",
      pillar1Title: "رؤية موحدة",
      pillar1Description:
        "عرض تشغيلي موحد عبر الأنظمة والأصول وبيانات الأداء.",
      pillar2Title: "سلامة البيانات",
      pillar2Description:
        "بيانات موثوقة ومحكومة تدعم تقارير دقيقة وقرارات واثقة.",
      pillar3Title: "سرعة تشغيلية",
      pillar3Description:
        "قرارات تشغيلية أسرع بفضل الأنظمة المتكاملة والرؤية الفورية.",
      finalBody:
        "تتطلب الأنظمة المؤسسية تخطيطاً دقيقاً وتنفيذاً منظماً. تعمل فرقنا مع المؤسسات لتصميم حلول تقنية تتماشى مع الأهداف التشغيلية والأداء طويل الأمد.",
      startConversation: "ابدأ المحادثة",
    },
    caseStudies: {
      seoTitle: "دراسات حالة تقنية مؤسسية ونتائج تنفيذ",
      seoDescription:
        "استعرض دراسات حالة AURMAK عبر SaaS والخدمات المالية والقطاع العام وبرامج البنية التحتية والعمليات مع نتائج تنفيذ قابلة للقياس.",
      eyebrow: "دراسات الحالة",
      heroTitle: "دراسات الحالة.",
      heroLead:
        "استكشف برامج مختارة نُفذت عبر قطاعات تقنية المؤسسات والخدمات المالية والقطاع العام والسيارات. تعرض كل حالة التحدي التشغيلي والنهج الهندسي والنتائج القابلة للقياس.",
      heroBadge: "📊 نتائج مثبتة",
      filterAll: "الكل",
      filterEnterpriseTechnology: "تقنية المؤسسات",
      filterFinancialServices: "الخدمات المالية",
      filterPublicSector: "القطاع العام",
      filterAutomotive: "قطاع السيارات",
      readCaseStudy: "اقرأ دراسة الحالة",
      finalTitle: "هل أنت مستعد لدفع أداء عملياتك إلى الأمام؟",
      finalBody:
        "نعمل مع المؤسسات على تبسيط التعقيد ومواءمة الفرق وتصميم أنظمة قابلة للتوسع من الاكتشاف المبكر وحتى التنفيذ.",
      startConversation: "ابدأ المحادثة",
      case1Meta: "تقنية المؤسسات",
      case1Title: "ذكاء فوري لأداء المباني",
      case1Summary:
        "رؤية واضحة للإشغال وأداء الطاقة والكفاءة التشغيلية عبر المباني التجارية، بما يدعم عمليات أكثر كفاءة واستدامة من خلال منصة بيانات متكاملة.",
      case1Kpi1: "تسريع الوصول إلى الرؤى بنسبة 45%",
      case1Kpi2: "زيادة تفاعل المستخدمين بنسبة 62%",
      case2Meta: "تقنية المؤسسات",
      case2Title: "هيكلة أنظمة سير العمل والتنفيذ",
      case2Summary:
        "إعادة تصميم منظمة لمنصة أنشأها مهندسون، بما يحسن وضوح سير العمل وسهولة الاستخدام وكفاءة التنفيذ.",
      case2Kpi1: "معدل نجاح للمهام بنسبة 100%",
      case2Kpi2: "خفض زمن إتمام المهمة إلى 12 دقيقة",
      case3Meta: "الخدمات المالية",
      case3Title: "بوابة حجز سفر متميزة",
      case3Summary:
        "تحديث منصة سفر قديمة لتمكين عملاء الخدمات المصرفية المتميزة من حجز السفر عبر الويب والجوال مع تحسين سهولة الاستخدام والوصول إلى أسعار مخفضة.",
      case3Kpi1: "دعم فئات سفر متعددة",
      case3Kpi2: "تصميم متجاوب يركز على الجوال",
      case4Meta: "تقنية المؤسسات",
      case4Title: "تبسيط اتخاذ القرار في الأمن السيبراني",
      case4Summary:
        "إعادة تصميم قائمة على البحث لمنصة أمن سيبراني، استندت إلى تفاعل مباشر مع صناع القرار في المؤسسات، ما حسن طريقة تقييم المستخدمين من مستوى CIO وCTO لحلول كشف تهديدات الشبكات.",
      case4Kpi1: "زيادة التفاعل ثلاثة أضعاف",
      case4Kpi2: "معدل نجاح في سهولة الاستخدام يتجاوز 75%",
      case5Meta: "تقنية المؤسسات",
      case5Title: "تحديث عمليات الخدمات المؤسسية",
      case5Summary:
        "إعادة تصميم للمنصة مع انتقال من ServiceNow إلى Jira، جمعت بين تحسينات تجربة الاستخدام والتحول النظامي لتعزيز وضوح سير العمل وسهولة الاستخدام والتبني داخل عمليات الخدمات المؤسسية.",
      case5Kpi1: "زيادة التسجيلات بنسبة 50% في الشهر الأول",
      case5Kpi2: "خفض الفوضى بنسبة 100%",
      case5Kpi3: "الانتقال من ServiceNow إلى Jira",
      case6Meta: "قطاع السيارات",
      case6Title: "تحول تجربة العملاء في قطاع السيارات",
      case6Summary:
        "تصميم شامل لمنصة المستهلكين والورش، قدم تجربة استخدام منظمة لتحسين تدفقات الحجز والرؤية التشغيلية وتجربة العملاء بشكل عام.",
      case6Kpi1: "انضمام أكثر من 2,000 ورشة عالمياً",
      case6Kpi2: "زيادة رضا العملاء بنسبة 80%",
      case6Kpi3: "الحصول على تمويل بقيمة 4.5 مليون جنيه إسترليني",
      case7Meta: "تقنية المؤسسات",
      case7Title: "السحابة المؤسسية، بشكل أبسط",
      case7Summary:
        "تصميم منصة SaaS/IaaS مؤسسية تبسط البنية السحابية المعقدة للمستخدمين غير التقنيين، مع قدرات تضاهي منصات سحابية رائدة وتم التحقق منها عبر جولات متعددة من اختبارات سهولة الاستخدام.",
      case7Kpi1: "إكمال 4 جولات من اختبارات سهولة الاستخدام",
      case7Kpi2: "تحقيق معدل قبول بنسبة 80%",
      case7Kpi3: "انتقال مستخدمين من منصات AWS وAzure",
      case8Meta: "القطاع العام",
      case8Title: "هيكلة الخدمات الحكومية المعقدة",
      case8Summary:
        "تجميع أكثر من 700 خدمة حكومية في نظام منظم وسهل الاستخدام من خلال تجربة استخدام قائمة على البحث، بما يبسط التنقل عبر منظومة حكومية وتجارية معقدة.",
      case8Kpi1: "هيكلة أكثر من 700 خدمة ضمن فئات موحدة",
      case8Kpi2: "تحديد 5 شخصيات رئيسية للمستخدمين",
      case8Kpi3: "تحقيق موافقة أصحاب المصلحة بنسبة 100%",
    },
    howWeWork: {
      seoTitle: "نموذج التسليم المؤسسي ونهج التنفيذ",
      seoDescription:
        "تعرف على كيفية تسليم AURMAK للأنظمة المؤسسية عبر نموذج منظم يشمل الاكتشاف والتقييم والخارطة التنفيذية والتجربة الأولية والإطلاق والحوكمة والدعم طويل الأمد.",
      eyebrow: "إطار التنفيذ",
      heroTitleLead: "تنفيذ منظم",
      heroTitleHighlight: "للأنظمة المعقدة",
      heroLead:
        "يتبع كل مشروع نموذج تنفيذ محدداً من الاكتشاف والهندسة المعمارية وحتى النشر والتحسين طويل الأمد للنظام.",
      heroBadge: "⚙️ تنفيذ منظم",
      frameworkTitleLead: "إطارنا",
      frameworkTitleHighlight: "للتنفيذ",
      frameworkIntro:
        "يتبع كل مشروع مراحل محددة مع مخرجات واضحة ونقاط مراجعة وملكية مسؤولة.",
      stage1Title: "الاكتشاف",
      stage1Description:
        "تحديد الأهداف التشغيلية والقيود ومقاييس النجاح مع القيادة وأصحاب المصلحة التقنيين.",
      stage2Title: "التقييم",
      stage2Description:
        "تقييم البنية الحالية وبيئات البيانات والتكاملات والمخاطر التشغيلية.",
      stage3Title: "الهندسة المعمارية",
      stage3Description:
        "تصميم بنية النظام وتحديد خارطة طريق تسليم مرحلية.",
      stage4Title: "التجربة الأولية",
      stage4Description:
        "التحقق من افتراضات النظام من خلال نشر منضبط واختبارات تشغيلية مبكرة.",
      stage5Title: "الإطلاق",
      stage5Description:
        "نشر النظام عبر مراحل إصدار منضبطة مع مراقبة الاستقرار والتبني.",
      stage6Title: "الحوكمة",
      stage6Description:
        "إجراء مراجعات تشغيلية منظمة لمتابعة تقدم التنفيذ وأداء النظام والنتائج التجارية.",
      stage7Title: "الدعم والتحسين",
      stage7Description:
        "تقديم تحسين مستمر للنظام وتطويرات إضافية ودعم تشغيلي.",
      standardsTitleLead: "معايير",
      standardsTitleHighlight: "التسليم المؤسسي",
      standardsIntro:
        "تضمن الضوابط المنظمة تسليم الأنظمة بأمان واعتمادية وبما يتماشى مع المعايير التشغيلية للمؤسسات.",
      marker1Title: "ممارسات الأمن",
      marker1Description:
        "تُدمج عمليات التطوير الآمن ومعايير البنية التحتية في جميع مراحل تصميم النظام ونشره.",
      marker2Title: "معايير الامتثال",
      marker2Description:
        "تتوافق عمليات التنفيذ مع متطلبات معترف بها للأمن وحماية البيانات والامتثال التشغيلي.",
      marker3Title: "نموذج التعاقد",
      marker3Description:
        "تدار المشاريع ضمن نطاقات تنفيذ واضحة ومعالم رئيسية وأطر مساءلة محددة.",
      marker4Title: "إيقاع الحوكمة",
      marker4Description:
        "تتابع المراجعات التشغيلية المنتظمة تقدم التنفيذ وأداء النظام ومخاطر البرنامج الرئيسية.",
      marker5Title: "انضباط الجودة",
      marker5Description:
        "تضمن الاختبارات المنظمة وضمان الجودة استقرار النظام وأداءه واعتماديته قبل الإطلاق.",
      marker6Title: "التعامل مع البيانات",
      marker6Description:
        "تحمي أطر حوكمة البيانات الواضحة سلامة النظام وضبط الوصول والشفافية التشغيلية.",
      startConversation: "ابدأ المحادثة",
    },
    team: {
      seoTitle: "فريق قيادة AURMAK",
      seoDescription:
        "تعرّف على فريق القيادة في AURMAK الذي يوجّه الاستراتيجية التقنية والتنفيذ الهندسي والتشغيل عبر المشاريع المؤسسية العالمية.",
      eyebrow: "الفريق",
      heroTitle: "القيادة",
      heroLead:
        "تتمتع قيادة AURMAK بخبرة واسعة عبر مشاريع مؤسسية عالمية معقدة، وتوجّه الاستراتيجية التقنية والتنفيذ الهندسي والتشغيل.",
      heroBadge: "👥 القيادة",
      sectionTitleLead: "فريق",
      sectionTitleHighlight: "القيادة",
      member1Role: "الشريك المؤسس",
      member1Bio:
        "تنفيذي هندسي يتمتع بأكثر من 30 عاماً من الخبرة القيادية عبر توليد الطاقة وعمليات التصنيع وبرامج البنية التحتية واسعة النطاق. يقدم مسعود القيادة التشغيلية والإشراف الاستراتيجي عبر مشاريع AURMAK المؤسسية.",
      member2Role: "الرئيس التنفيذي للعمليات",
      member2Bio:
        "قائد في تسليم البرامج يتمتع بأكثر من 15 عاماً من الخبرة في إدارة المشاريع المعقدة عبر بيئات التصنيع والنفط والغاز. يختص عمر بحوكمة التنفيذ وتنسيق أصحاب المصلحة والتنفيذ التشغيلي عبر المبادرات واسعة النطاق.",
      member3Role: "المدير العام",
      member3Bio:
        "مستشار في العمليات والتحول التجاري يتمتع بأكثر من 12 عاماً من الخبرة القيادية عبر اللوجستيات والإنشاءات والخدمات المهنية. يركز خرم على الأداء التشغيلي والاستراتيجية التجارية ومبادرات النمو المستدام.",
      networkTitleLead: "شبكة خبراء",
      networkTitleHighlight: "عالمية",
      networkBody1:
        "إلى جانب فريق القيادة، تعمل AURMAK مع شبكة عالمية من المهندسين المتخصصين والمعماريين وشركاء التنفيذ لدعم البرامج المؤسسية عبر أنظمة البنية التحتية ومنصات البيانات والحلول المدعومة بالذكاء الاصطناعي.",
      networkBody2:
        "يتيح هذا النموذج لـ AURMAK تجميع الخبرات المناسبة لكل مشروع مع الحفاظ على إشراف منضبط على البرنامج وقيادة استراتيجية واضحة.",
      careersTitleLead: "الوظائف في",
      careersTitleHighlight: "AURMAK",
      careersBody:
        "نصمم ونبني أنظمة تقنية لبيئات تشغيلية حقيقية. إذا كان دافعك هو حل التحديات التقنية المعقدة، فسنكون سعداء بالتواصل معك.",
      careersCta: "استكشف الفرص",
    },
    contact: {
      seoTitle: "اتصل بـ AURMAK | ابدأ محادثة حول الأنظمة المؤسسية",
      seoDescription:
        "تواصل مع AURMAK لمناقشة الأنظمة المؤسسية وتكامل الذكاء الاصطناعي ومنصات SaaS والتحديث الرقمي مع فرقنا في لندن ودبي ولاهور.",
      eyebrow: "اتصل بنا",
      heroTitleLead: "ابدأ المحادثة التي تدفع",
      heroTitleHighlight: "عملياتك إلى الأمام.",
      heroLead:
        "أخبرنا أين تبطئ أنظمتك العمل أو تحد من التوسع. سنساعدك على تحديد مسار واضح ومنظم للمضي قدماً.",
      heroBadge: "📞 تواصل معنا",
      startConversation: "ابدأ المحادثة",
      officesTitleLead: "حضور عالمي.",
      officesTitleHighlight: "وفهم محلي.",
      office1Country: "المملكة المتحدة",
      office1Focus: "استراتيجية العميل والتنفيذ",
      office2Country: "الإمارات العربية المتحدة",
      office2Focus: "التسليم والتنسيق الإقليمي",
      office3Country: "باكستان",
      office3Focus: "الهندسة وتطوير المنصات",
      speakDirectly: "تحدث مع فريقنا مباشرة",
      calendlyLabel: "Calendly",
      bookingTitleLead: "ابدأ بـ",
      bookingTitleHighlight: "محادثة مركزة",
      bookingLead:
        "30 دقيقة مع أحد أعضاء الفريق الكبار لفهم أنظمتك الحالية وتحدياتك وأولوياتك ورسم مسار واضح للمضي قدماً.",
      divider: "أو أرسل لنا رسالة",
      messageTitleLead: "أرسل",
      messageTitleHighlight: "رسالة",
      messageLead:
        "شاركنا ملخصاً قصيراً لأولوياتك الحالية وسنرد عليك بخطوة تالية واضحة.",
      successTitle: "تم إرسال الاستفسار بنجاح",
      successBody: "سيتواصل فريقنا معك قريباً.",
      submitErrorGeneric: "يتعذر إرسال استفسارك حالياً.",
      fullName: "الاسم الكامل *",
      fullNamePlaceholder: "الاسم الكامل",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "name@company.com",
      company: "اسم الشركة",
      companyPlaceholder: "اسم شركتك",
      serviceRequirement: "متطلب الخدمة *",
      selectService: "اختر خدمة",
      message: "الرسالة *",
      messagePlaceholder:
        "أخبرنا عن أعمالك وما الذي تريد تحقيقه وأي جداول زمنية أو قيود يجب مراعاتها.",
      securityCheck: "يرجى إكمال التحقق الأمني قبل الإرسال.",
      submitting: "جارٍ الإرسال...",
      submitEnquiry: "إرسال الاستفسار",
      service1: "تطوير منتجات SaaS",
      service2: "تحديث الأنظمة القديمة",
      service3: "تكامل الذكاء الاصطناعي",
      service4: "أنظمة إدارة المباني",
      service5: "استشارات عامة",
    },
    careers: {
      seoTitle: "الوظائف في AURMAK",
      seoDescription:
        "استكشف الوظائف الحالية في AURMAK عبر الهندسة والتنفيذ وتطوير الواجهات ضمن نموذجنا العالمي للتسليم.",
      eyebrow: "الوظائف",
      heroTitleLead: "الوظائف في",
      heroTitleHighlight: "AURMAK.",
      heroLead:
        "انضم إلى فريق يحدد فيه الوضوح التجاري والانضباط التقني والتنفيذ المسؤول طريقة إنجاز العمل.",
      heroBadge: "🚀 انضم إلينا",
      viewOpenRoles: "عرض الوظائف المتاحة",
      getInTouch: "تواصل معنا",
      openTitleLead: "الوظائف",
      openTitleHighlight: "المتاحة",
      openIntro:
        "تشمل الوظائف الحالية صفحة تفصيلية لكل دور مع إمكانية التقديم المباشر.",
      role1Title: "قائد تقني (الأنظمة الخلفية / الذكاء الاصطناعي)",
      role2Title: "مالك منتج (قائد التنفيذ)",
      role3Title: "مطور واجهات أمامية (SaaS وواجهات حديثة)",
      roleLocation: "لاهور، باكستان",
      roleModel1: "هجين، دوام كامل",
      roleModel2: "هجين، دوام كامل",
      roleModel3: "حضوري / هجين، دوام كامل",
      viewRoleApply: "عرض الدور والتقديم",
      whyJoinTitle: "لماذا تنضم إلى AURMAK",
      whyJoinLead:
        "ساهم في تنفيذ المشاريع المؤسسية مع بناء قدرة عملية على تطوير المنتجات عبر نموذجنا الابتكاري.",
      whyJoin1: "ثقافة هندسية منضبطة مع مساءلة قيادية واضحة.",
      whyJoin2: "تعاون عابر للمناطق بين فرق لندن ودبي ولاهور.",
      whyJoin3: "تعرض متوازن بين تنفيذ مشاريع العملاء وتطوير المنتجات الداخلية.",
      whyJoin4: "ملكية واضحة وحوكمة ونتائج قابلة للقياس.",
      benefitsTitle: "مزايا الشركة",
      benefitsLead:
        "نستثمر في تطوير أعضاء الفريق على المدى الطويل من خلال التعرض الدولي والمزايا المنظمة بعد فترة التجربة.",
      benefit1: "فرصة للعمل من مكاتب AURMAK في دبي ولندن.",
      benefit2: "قد يُعرض على أعضاء الفريق على المدى الطويل دور دائم في أحد مكاتب AURMAK الدولية.",
      benefit3: "بعد اجتياز فترة التجربة بنجاح، أهلية للحصول على سيارة شركة.",
      benefit4: "بعد اجتياز فترة التجربة بنجاح، أهلية للتأمين الطبي والإجازات المدفوعة.",
    },
    jobDetail: {
      notFoundTitle: "الدور غير موجود",
      notFoundBody: "الوظيفة التي تبحث عنها غير موجودة أو تمت إزالتها.",
      returnToCareers: "العودة إلى الوظائف",
      eyebrow: "فرصة منظمة",
      heroBadge: "💼 فرصة وظيفية",
      roleSummary: "ملخص الدور",
      jobCode: "رمز الوظيفة",
      location: "الموقع",
      workModel: "نمط العمل",
      experience: "الخبرة",
      responsibilities: "المسؤوليات الأساسية",
      requirements: "المتطلبات",
      benefits: "المزايا",
      submitApplication: "إرسال الطلب",
      submitLead:
        "أدخل تفاصيل طلبك أدناه. سيتم إرفاق السيرة الذاتية برسالة المراجعة.",
      successTitle: "تم إرسال الطلب بنجاح!",
      successBody: "سيقوم فريقنا بمراجعة ملفك والرد عليك قريباً.",
      submitErrorGeneric: "يتعذر إرسال طلبك حالياً.",
      fullName: "الاسم الكامل *",
      workEmail: "البريد الإلكتروني للعمل *",
      phone: "رقم الهاتف *",
      currentLocation: "الموقع الحالي",
      portfolio: "المعرض أو LinkedIn",
      note: "ملاحظة الطلب",
      uploadCv: "رفع السيرة الذاتية * (PDF أو DOC أو DOCX بحد أقصى 5MB)",
      chooseFile: "اختر ملفاً",
      securityCheck: "يرجى إكمال التحقق الأمني قبل الإرسال.",
      cvReviewNote: "يتم إرسال سيرتك الذاتية كمرفق إلى بريد التوظيف في AURMAK للمراجعة.",
      submitting: "جارٍ الإرسال...",
      submitCta: "إرسال الطلب",
      fileTooLarge: "يجب ألا يتجاوز حجم السيرة الذاتية 5MB",
      fileInvalid: "يجب أن تكون السيرة الذاتية بصيغة PDF أو DOC أو DOCX",
      experience5: "أكثر من 5 سنوات",
      experience3: "أكثر من 3 سنوات",
      job1Lead:
        "قيادة مركز الهندسة في لاهور وبناء الأنظمة القابلة للتوسع التي تدعم العمليات الحديثة، من منصات SaaS إلى الأتمتة المدعومة بالذكاء الاصطناعي.",
      job1Location: "لاهور، باكستان (مع تعاون مع لندن ودبي)",
      job1WorkModel: "هجين، دوام كامل",
      job1Summary:
        "نبحث عن معماري تقني بمستوى المؤسسات لقيادة مركزنا الهندسي في لاهور. ستوازن بين الهندسة المعمارية عالية المستوى والتنفيذ المتسارع بالذكاء الاصطناعي عبر مشاريع العملاء واحتضان المنتجات الداخلية.",
      job1Resp1:
        "هندسة الأنظمة: تصميم وصيانة بيئات خلفية قوية باستخدام PostgreSQL وSupabase.",
      job1Resp2:
        "تطوير متسارع بالذكاء الاصطناعي: قيادة دورات التطوير باستخدام Cursor للحفاظ على سرعة عالية دون الإخلال بجودة مستوى المؤسسات.",
      job1Resp3:
        "تنفيذ بمسارين: إدارة التنفيذ التقني لكل من خدمات العملاء عالية المستوى واحتضان المنتجات الداخلية.",
      job1Resp4:
        "معايير المؤسسات: ضمان أن تلبي جميع الأنظمة معايير صارمة في الأمن والحوكمة وسلامة البيانات.",
      job1Req1: "خبرة قوية في PostgreSQL والهندسة الخلفية الحديثة.",
      job1Req2: "إتقان Supabase وأساليب البرمجة المدعومة بالذكاء الاصطناعي، وبالأخص Cursor.",
      job1Req3: "خبرة في تحديث الأنظمة القديمة وبناء بنية رقمية موثوقة.",
      job2Lead:
        "ربط القيادة الاستراتيجية في لندن ودبي بالتنفيذ الهندسي اليومي في لاهور مع الحفاظ على تنفيذ منضبط يحقق الأهداف التجارية.",
      job2Location: "لاهور، باكستان",
      job2WorkModel: "هجين، دوام كامل",
      job2Summary:
        "بصفتك القائد الميداني الرئيسي في لاهور، ستقوم بتطبيق نموذج التسليم في AURMAK، والحفاظ على آلية العمل 50/50، وضمان مواءمة التنفيذ الهندسي مع القيادة الاستراتيجية.",
      job2Resp1:
        "إدارة سير العمل: التطبيق الصارم لقاعدة 50/50، بحيث تركز أيام الاثنين إلى الأربعاء على مشاريع العملاء ويخصص الخميس والجمعة لمنتجات SaaS الداخلية.",
      job2Resp2:
        "تنسيق أصحاب المصلحة: العمل كحلقة وصل أساسية بين الفريق الهندسي والمكتب الأمامي في دبي للمتطلبات والتقارير.",
      job2Resp3:
        "تنفيذ منظم: الإشراف على الدورة الكاملة من الاكتشاف والهندسة المعمارية إلى التجربة الأولية والإطلاق.",
      job2Resp4:
        "قيادة تشخيصية: تيسير التشخيصات التي يقودها البشر لضمان أن تكون التقنية نتيجة لتعريف واضح للمشكلة.",
      job2Req1: "خلفية قوية في إدارة التذاكر وتخطيط السبرنت وتقارير العملاء.",
      job2Req2: "القدرة على إدارة التحولات المعقدة دون الوقوع في فخ التقنية من أجل التقنية.",
      job2Req3: "خبرة في نموذج الإدارة بالوكالة، بما يضمن التنفيذ بينما يشارك الشركاء عالمياً.",
      job3Lead:
        "بناء واجهات عالية الأداء وبسيطة تقدم وضوحاً هندسياً للأنظمة المؤسسية المعقدة ولوحات التشغيل.",
      job3Location: "لاهور، باكستان",
      job3WorkModel: "حضوري / هجين، دوام كامل",
      job3Summary:
        "ستستخدم قوالب حديثة لتسريع التنفيذ مع الحفاظ على الطابع المؤسسي عالي التقنية الذي يميز AURMAK عبر منتجات SaaS وأنظمة العملاء.",
      job3Resp1:
        "تنفيذ سريع: بناء واجهات متجاوبة باستخدام React أو Vue مع الاستفادة من Antigravity أو قوالب مشابهة لاختبار الأفكار بسرعة.",
      job3Resp2:
        "دقة بصرية: تنفيذ تخطيطات نظيفة قائمة على الشبكات مستوحاة من لغة التصميم لدى Palantir.",
      job3Resp3:
        "لوحات أداء: إنشاء عروض تشغيلية موحدة توفر رؤية أحادية عبر الأصول والبيانات.",
      job3Req1: "إتقان React أو Vue.js وTailwind CSS.",
      job3Req2: "القدرة على العمل مع Ant Design 6.3.0 ونظام الشبكة ذي الثماني نقاط.",
      job3Req3: "التركيز على الشرح البصري بدلاً من النص الطويل باستخدام المخططات وتدفقات النظام.",
    },
    lab: {
      seoTitle: "مختبر المشاريع لقدرات التقنية المؤسسية",
      seoDescription:
        "يعزز مختبر المشاريع في AURMAK الأنظمة المؤسسية والذكاء التشغيلي المدعوم بالذكاء الاصطناعي ونموذج التسليم من خلال استكشاف منتجات منضبط.",
      eyebrow: "المختبر",
      heroTitleLead: "مختبر",
      heroTitleHighlight: "المشاريع",
      heroLead:
        "المكان الذي تتحول فيه أفكار المنتجات الداخلية إلى قدرة تقنية حقيقية. يتم اختبار المفاهيم وصقلها وبناؤها باستخدام نفس الانضباط الهندسي الذي يدعم أنظمة عملائنا.",
      heroBadge: "🔬 مختبر الابتكار",
      principlesTitleLead: "كيف يعمل",
      principlesTitleHighlight: "المختبر",
      principle1Title: "تشخيص يقوده البشر",
      principle1Description:
        "نبدأ بتحليل المشكلات التشغيلية والاحتياجات التجارية قبل تحديد ما ينبغي بناؤه.",
      principle2Title: "دورات بناء منظمة",
      principle2Description:
        "يتم تطوير مفاهيم المنتجات عبر دورات بناء منضبطة مع نقاط تحقق واضحة وحوكمة تقنية.",
      principle3Title: "جاهزية للتوسع",
      principle3Description:
        "يتم تصميم كل مخرج ليكون قابلاً للتوسع، بما يغذي تنفيذ العملاء وفرص المشاريع المستقبلية.",
      deliveryTitleLead: "ابتكار",
      deliveryTitleHighlight: "يعزز التنفيذ",
      deliveryBody1:
        "يوجد استوديو المشاريع لاستكشاف أساليب تقنية جديدة قد تؤثر في كيفية تصميم الأنظمة المؤسسية وبنائها وتشغيلها.",
      deliveryBody2:
        "تغذي الرؤى المستخلصة من هذه المبادرات قدرة AURMAK على التنفيذ، بما يضمن بقاء فرقنا على صلة وثيقة بالمنصات والبنى والنماذج التشغيلية الناشئة.",
      deliveryBody3BeforeServices: "يدعم هذا العمل بشكل مباشر ",
      deliveryBody3BetweenServicesAndSolutions: " و",
      deliveryBody3BetweenSolutionsAndCaseStudies: " وبعض ",
      deliveryBody3AfterCaseStudies: ".",
      focusTitleLead: "مجالات الاستكشاف",
      focusTitleHighlight: "الحالية",
      focus1Title: "تدفقات الصيانة التنبؤية",
      focus1Description:
        "استباق أعطال المعدات عبر ذكاء تشغيلي مدفوع بالذكاء الاصطناعي.",
      focus2Title: "واجهات ذكاء اصطناعي محكومة",
      focus2Description:
        "طبقات تفاعل آمنة مع الذكاء الاصطناعي للأنظمة المؤسسية.",
      focus3Title: "نمذجة أداء المرافق",
      focus3Description:
        "محاكاة أداء البنية التحتية وتحسينه.",
      focus4Title: "مسرّعات التكامل",
      focus4Description:
        "أطر قابلة لإعادة الاستخدام لتسريع تكامل الأنظمة المؤسسية.",
    },
    legal: {
      legalEyebrow: "قانوني",
      privacyTitle: "سياسة الخصوصية",
      privacyLead:
        "توضح هذه السياسة كيف تجمع AURMAK البيانات الشخصية المقدمة عبر هذا الموقع وتستخدمها وتخزنها وتحميها.",
      privacyDescription:
        "اطلع على سياسة الخصوصية لدى AURMAK والتي تغطي الاستفسارات وطلبات التوظيف ومعالجة البيانات والاحتفاظ بها ووسائل التواصل.",
      privacySection1Title: "المعلومات التي نجمعها",
      privacySection1Lead:
        "نجمع المعلومات الشخصية التي تقدمها طوعاً عند استخدام موقعنا، بما في ذلك:",
      privacyItem1: "معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)",
      privacyItem2: "بيانات الشركة أو الجهة",
      privacyItem3: "المعلومات المهنية والسير الذاتية لطلبات التوظيف",
      privacyItem4: "متطلبات المشاريع والاستفسارات التجارية",
      privacyItem5: "روابط الأعمال والمعارض والملفات المهنية",
      privacyItem6: "تفاصيل الحجز المقدمة عبر أدوات الجدولة لدينا",
      privacySection2Title: "كيف نستخدم المعلومات",
      privacySection2Lead:
        "نستخدم المعلومات المجمعة للأغراض التالية:",
      privacyUse1: "الرد على الاستفسارات وطلبات الاستشارة",
      privacyUse2: "معالجة طلبات الوظائف وأنشطة التوظيف",
      privacyUse3: "إدارة طلبات الجدولة ومكالمات الاكتشاف",
      privacyUse4: "تقديم معلومات عن خدماتنا وحلولنا",
      privacyUse5: "تحسين موقعنا وتجربة المستخدم",
      privacyUse6: "الامتثال للالتزامات القانونية والمتطلبات التعاقدية",
      privacySection2Body:
        "نحن لا نبيع معلوماتك الشخصية. وقد نشارك معلومات محدودة مع مزودي الخدمات الذين يساعدوننا على تشغيل الموقع أو معالجة الاستفسارات أو إدارة طلبات التوظيف أو توفير أدوات الجدولة والتحليلات، عندما يكون ذلك ضرورياً لتشغيل خدماتنا.",
      privacySection3Title: "التخزين والأمن",
      privacySection3Lead:
        "نطبق إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. ويشمل ذلك:",
      privacySecurity1: "بروتوكولات نقل بيانات آمنة (تشفير SSL/TLS)",
      privacySecurity2: "تقييد الوصول إلى المعلومات الشخصية على أساس الحاجة إلى المعرفة",
      privacySecurity3: "تقييمات أمنية وتحديثات منتظمة",
      privacySecurity4: "سياسات احتفاظ بالبيانات تتماشى مع المتطلبات القانونية",
      privacySection3Body:
        "يتم الاحتفاظ بالبيانات الشخصية فقط طالما كان ذلك ضرورياً لمعالجة الاستفسارات وطلبات التوظيف والمراسلات التجارية ذات الصلة، أو حسب ما يقتضيه القانون المعمول به.",
      privacySection4Title: "التواصل",
      privacySection4BodyBefore: "لطلبات الخصوصية أو الأسئلة أو لممارسة حقوقك في حماية البيانات، يرجى استخدام ",
      privacySection4BodyAfter: ".",
      cookiesTitle: "سياسة ملفات تعريف الارتباط",
      cookiesLead:
        "توضح هذه السياسة كيف تستخدم AURMAK ملفات تعريف الارتباط الأساسية وملفات التحليلات وتفضيلات التخزين المحلي على هذا الموقع.",
      cookiesDescription:
        "راجع سياسة ملفات تعريف الارتباط لدى AURMAK بما يشمل الملفات الأساسية واستخدام التحليلات وخيارات التحكم للزوار.",
      cookiesSection1Title: "ملفات تعريف الارتباط الأساسية",
      cookiesSection1Lead:
        "تعد ملفات تعريف الارتباط الأساسية ضرورية لعمل الموقع بشكل صحيح. وتمكن هذه الملفات الوظائف الأساسية مثل:",
      cookiesEssential1: "التنقل والوظائف الأساسية للموقع",
      cookiesEssential2: "إرسال النماذج والتحقق منها",
      cookiesEssential3: "تفضيلات موافقة ملفات تعريف الارتباط",
      cookiesEssential4: "تفضيلات العرض والواجهة عند الاقتضاء",
      cookiesSection1Body:
        "لا تتطلب ملفات تعريف الارتباط الأساسية موافقة المستخدم لأنها ضرورية بشكل صارم لتشغيل الموقع.",
      cookiesSection2Title: "ملفات التحليلات",
      cookiesSection2Lead:
        "تساعدنا ملفات التحليلات على فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول. يساعدنا ذلك على:",
      cookiesAnalytics1: "تحليل حركة الموقع وأنماط سلوك المستخدمين",
      cookiesAnalytics2: "تحديد المحتوى والصفحات الأكثر زيارة",
      cookiesAnalytics3: "تحسين أداء الموقع وتجربة المستخدم",
      cookiesAnalytics4: "فهم خصائص الزوار واهتماماتهم",
      cookiesSection2Body:
        "نستخدم بيانات التحليلات المجمعة لاتخاذ قرارات مدروسة حول تحسينات الموقع وأداء المحتوى وتجربة المستخدم.",
      cookiesSection3Title: "خيارات الموافقة",
      cookiesSection3Body1:
        "عند زيارتك الأولى للموقع، قد تعرض AURMAK إشعاراً بموافقة ملفات تعريف الارتباط يتيح لك قبول الملفات الاختيارية أو الاستمرار بإعدادات الأساسية فقط.",
      cookiesSection3Body2:
        "قد يتم تخزين تفضيلاتك الخاصة بملفات تعريف الارتباط في المتصفح باستخدام التخزين المحلي حتى لا يظهر الإشعار في كل زيارة.",
      cookiesSection4Title: "إدارة ملفات تعريف الارتباط",
      cookiesSection4Lead:
        "يمكنك التحكم في ملفات تعريف الارتباط وإدارتها من خلال إعدادات متصفحك. وتتيح معظم المتصفحات ما يلي:",
      cookiesManage1: "عرض ملفات تعريف الارتباط المخزنة وحذفها بشكل فردي",
      cookiesManage2: "حظر ملفات تعريف الارتباط الخاصة بالجهات الخارجية",
      cookiesManage3: "حظر ملفات تعريف الارتباط من مواقع معينة",
      cookiesManage4: "حظر جميع ملفات تعريف الارتباط من أن يتم تعيينها",
      cookiesManage5: "حذف جميع ملفات تعريف الارتباط عند إغلاق المتصفح",
      cookiesSection4Body1:
        "يرجى ملاحظة أن حظر أو حذف ملفات تعريف الارتباط قد يؤثر في تجربتك على موقعنا ويحد من الوصول إلى بعض الميزات.",
      cookiesSection4Body2Before: "لمزيد من المعلومات حول ملفات تعريف الارتباط وكيفية إدارتها، تفضل بزيارة ",
      cookiesSection4Body2After: ".",
      termsTitle: "الشروط والأحكام",
      termsLead:
        "باستخدام هذا الموقع، فإنك توافق على هذه الشروط التي تحكم الوصول إلى محتوى AURMAK واتصالاتها وخدماتها عبر الإنترنت.",
      termsDescription:
        "راجع الشروط والأحكام الخاصة بموقع AURMAK، بما في ذلك الاستخدام المسموح به والملكية الفكرية وأحكام المسؤولية.",
      termsSection1Title: "استخدام الموقع",
      termsSection1Body1:
        "عند دخولك إلى هذا الموقع واستخدامه فإنك توافق على هذه الشروط. ويتم تقديم المواد الموجودة على هذا الموقع كمعلومات عامة عن AURMAK وخدماتها ودراسات حالاتها وفرصها الوظيفية والاستفسارات التجارية ذات الصلة.",
      termsSection1Lead: "لا يجوز لك:",
      termsUse1: "استخدام الموقع بأي طريقة تسبب ضرراً للموقع أو تعيق وصول المستخدمين إليه",
      termsUse2: "استخدام الموقع بأي طريقة غير قانونية أو لأي غرض غير قانوني",
      termsUse3: "محاولة الوصول غير المصرح به إلى أي جزء أو ميزة من الموقع",
      termsUse4: "تعديل أو نسخ أو توزيع أو نقل أو عرض أو تنفيذ أو إعادة إنتاج أو نشر أو إنشاء أعمال مشتقة من أي مواد",
      termsUse5: "استخدام أنظمة أو برامج آلية لاستخراج البيانات من هذا الموقع",
      termsSection1Body2:
        "نحتفظ بالحق في تقييد أو تعليق الوصول إلى الموقع عند الضرورة لحماية الموقع أو مستخدمينا أو حقوقنا القانونية.",
      termsSection2Title: "الملكية الفكرية",
      termsSection2Body1:
        "جميع المحتويات والمواد والمعلومات والملكية الفكرية الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور ومواد دراسات الحالة والبرمجيات والتصميم، مملوكة لـ AURMAK أو مرخصة لها ومحمية بموجب قوانين حقوق النشر والعلامات التجارية وغيرها من قوانين الملكية الفكرية.",
      termsSection2Body2:
        "ما لم يُذكر خلاف ذلك، تمتلك AURMAK و/أو الجهات المرخصة لها حقوق الملكية الفكرية لجميع المواد الموجودة على هذا الموقع. ويجوز لك عرض صفحات الموقع وتنزيلها وطباعتها لاستخدامك الشخصي فقط مع مراعاة القيود المنصوص عليها في هذه الشروط والأحكام.",
      termsSection2Lead: "يجب ألا تقوم بما يلي:",
      termsIp1: "إعادة نشر مواد من هذا الموقع دون نسب مناسب",
      termsIp2: "بيع أو تأجير أو منح ترخيص فرعي لمواد من الموقع",
      termsIp3: "إعادة إنتاج أو تكرار أو نسخ المواد لأغراض تجارية",
      termsIp4: "إعادة توزيع محتوى AURMAK دون إذن صريح",
      termsSection3Title: "المسؤولية",
      termsSection3Lead:
        "يتم تقديم المعلومات الموجودة على هذا الموقع على أساس \"كما هي\". وإلى أقصى حد يسمح به القانون، فإن AURMAK:",
      termsLiability1: "تستبعد جميع الإقرارات والضمانات المتعلقة بهذا الموقع ومحتوياته",
      termsLiability2: "تستبعد جميع المسؤوليات عن الأضرار الناشئة عن استخدامك لهذا الموقع أو المرتبطة به",
      termsLiability3: "لا تضمن أن يكون الموقع متاحاً باستمرار أو متاحاً في جميع الأوقات",
      termsLiability4: "تحتفظ بالحق في إيقاف أو تعديل أي من خدمات الموقع أو جميعها دون إشعار",
      termsSection3Body:
        "لا يوجد في هذه الشروط والأحكام ما يحد أو يستبعد مسؤوليتنا عن الوفاة أو الإصابة الشخصية الناتجة عن الإهمال أو الاحتيال أو أي مسؤولية لا يمكن استبعادها أو الحد منها بموجب القانون المعمول به.",
      termsSection4Title: "التواصل",
      termsSection4BodyBefore: "للاستفسارات القانونية أو الأسئلة حول هذه الشروط، يرجى استخدام ",
      termsSection4BodyAfter: ".",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      description: "تعذر العثور على الصفحة التي طلبتها.",
      body: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      goHome: "العودة للرئيسية",
      goBack: "الرجوع",
    },
    routeError: {
      brand: "AURMAK",
      title: "حدث خطأ ما",
      description: "يرجى تحديث الصفحة والمحاولة مرة أخرى.",
      refreshingTitle: "جارٍ تحميل أحدث نسخة",
      refreshingDescription:
        "تم تحديث الموقع أثناء بقاء هذه الصفحة مفتوحة. حدّث الصفحة مرة واحدة لتحميل أحدث نسخة.",
      pageNotFound: "الصفحة غير موجودة",
      goHome: "العودة للرئيسية",
      refreshPage: "تحديث الصفحة",
    },
    insights: {
      seoTitle: "رؤى حول الأنظمة المؤسسية والاستراتيجية والتنفيذ",
      seoDescription:
        "تصفح رؤى AURMAK حول SaaS للمؤسسات واستراتيجية المنتجات والتحقق وممارسات التنفيذ والتحديث الرقمي الموجّه للأعمال.",
      eyebrow: "الرؤى",
      heroTitle: "الاستراتيجية التجارية عبر التصميم.",
      heroLead:
        "رؤى متخصصة حول توظيف تجربة المستخدم وتصميم المنتجات لدفع النمو وتقليل المخاطر وتسريع التحول الرقمي.",
      heroBadge: "📊 موارد استراتيجية",
      filterAllTopics: "جميع الموضوعات",
      filterProductDevelopment: "تطوير المنتجات",
      filterDesignTesting: "التصميم والاختبار",
      topicProductDevelopment: "تطوير المنتجات",
      topicDesignTesting: "التصميم والاختبار",
      readArticle: "اقرأ المقال",
      backToInsights: "العودة إلى الرؤى",
      notFoundTitle: "المقال غير موجود",
      notFoundBody: "المقال الذي طلبته غير متاح.",
      returnToInsights: "العودة إلى الرؤى",
      editorialPerspective: "رؤية تحريرية",
      editorialQuote:
        "أقوى محتوى للمنتجات لا يشرح تجربة المستخدم فقط، بل يربط قرارات التصميم بالتبني والإيرادات والثقة في التنفيذ والوضوح التشغيلي.",
      keyTakeaways: "أهم النقاط",
      nextStep: "الخطوة التالية",
      talkToAurmak: "تحدث مع AURMAK",
      seeCaseStudies: "اطلع على دراسات الحالة",
      continueReading: "تابع القراءة",
      moreFromInsights: "المزيد من الرؤى",
      allInsights: "جميع الرؤى",
    },
    caseStudyDetail: {
      notFoundTitle: "دراسة الحالة غير موجودة",
      notFoundBody: "تعذر العثور على دراسة الحالة المطلوبة.",
      backToCaseStudies: "العودة إلى دراسات الحالة",
      challenge: "التحدي",
      solution: "حلّنا",
      execution: "التنفيذ",
      businessImpact: "الأثر التجاري",
      projectOverview: "نظرة عامة على المشروع",
      projectScope: "نطاق المشروع",
      keyActivities: "الأنشطة الرئيسية",
      finalTitle: "هل أنت مستعد لدفع عملياتك إلى الأمام؟",
      finalBody:
        "نعمل مع المؤسسات على تبسيط التعقيد ومواءمة الفرق وتصميم أنظمة قابلة للتوسع من الاكتشاف المبكر وحتى التنفيذ.",
      startConversation: "ابدأ المحادثة",
      closeModal: "إغلاق النافذة",
      home: "الرئيسية",
    },
  },
} as const;

type TranslationTree = typeof translations.en;

function getValue(tree: Record<string, unknown>, key: string): unknown {
  return key.split(".").reduce<unknown>((current, segment) => {
    if (typeof current !== "object" || current === null) {
      return undefined;
    }

    return (current as Record<string, unknown>)[segment];
  }, tree);
}

export function translate(language: Language, key: string) {
  const localized = getValue(translations[language] as unknown as Record<string, unknown>, key);
  if (typeof localized === "string") {
    return localized;
  }

  const fallback = getValue(translations.en as unknown as Record<string, unknown>, key);
  return typeof fallback === "string" ? fallback : key;
}

export type TranslationKey = keyof TranslationTree;
