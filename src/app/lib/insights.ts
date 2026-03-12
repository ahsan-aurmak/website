import { buildCanonicalUrl } from "./site";

export interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InsightArticle {
  slug: string;
  topic: "product development" | "design & testing";
  title: string;
  excerpt: string;
  meta: string;
  readTime: string;
  publishedDate: string;
  sections: InsightSection[];
  keyTakeaways: string[];
  ctaTitle: string;
  ctaBody: string;
}

export const insightArticles: InsightArticle[] = [
  {
    slug: "scaling-enterprise-saas-design-patterns",
    topic: "product development",
    title: "Scaling Enterprise SaaS: Product Patterns That Drive Adoption",
    excerpt: "Cross-device consistency, customer evidence, and disciplined prioritisation help SaaS teams build products that are easier to adopt, easier to trust, and easier to scale.",
    meta: "Product Strategy · 7 min read",
    readTime: "7 min read",
    publishedDate: "2025-12-04",
    sections: [
      {
        heading: "Strong SaaS products start with adoption",
        paragraphs: [
          "Since the dot-com boom of the 1990s, the software as a service model has changed how businesses deliver products, build brands, and increase revenue. Early SaaS applications were often heavy on text and light on interface design. Today, users expect much more. They want products that are easy to learn, easy to trust, and easy to use across the full lifecycle of adoption.",
          "That expectation creates pressure on product teams. A weak product process does not just lead to a less attractive interface. It can undermine confidence, slow adoption, and limit the long-term value of the platform. In practice, the strongest SaaS products usually come from three habits: maintaining cross-device consistency, grounding decisions in customer evidence, and resisting feature creep."
        ]
      },
      {
        heading: "Cross-device consistency should feel intentional",
        paragraphs: [
          "One of the biggest advantages of SaaS is that users can access the same product from almost any connected device. That convenience has also shaped their expectations. People now assume the experience will feel familiar whether they are on desktop, tablet, or mobile.",
          "Cross-device consistency matters because it reduces the need to relearn the interface in different contexts. That improves productivity, makes onboarding easier, and strengthens trust in the product. For SaaS businesses, that consistency also signals care, quality, and attention to detail."
        ],
        bullets: [
          "Users can move between devices without having to decode a new interface each time.",
          "Training and onboarding become simpler because the product behaves more predictably.",
          "A consistent experience reinforces the credibility of the brand behind the product."
        ]
      },
      {
        heading: "Responsive design is the foundation",
        paragraphs: [
          "Responsive design is central to that consistency. Modern SaaS tools are used in distributed work environments where people switch between devices depending on where they are, what task they are handling, and how much time they have. The interface has to adapt to screen size, aspect ratio, and resolution without losing clarity or usefulness.",
          "A good example is Shopify. Its platform allows merchants to maintain visual consistency across devices, which is critical when their own customers are browsing and buying from a range of screens. That kind of responsiveness comes from deliberate design choices such as flexible grids, breakpoints, and fluid sizing rather than from visual cleanup at the end of the process."
        ],
        bullets: [
          "Flexible grids help maintain layout and spacing as viewports change.",
          "Breakpoints let teams adapt structure around common device sizes.",
          "Relative sizing and scalable assets help content reflow without breaking hierarchy."
        ]
      },
      {
        heading: "A shared visual language builds familiarity",
        paragraphs: [
          "Consistency is not just structural. It also depends on a recognisable visual language. Typography, colour usage, iconography, feedback states, and recurring interface patterns should all work together to create a coherent identity.",
          "Reusable components play a big role here. Buttons, cards, form inputs, and modals should behave consistently across the product so users do not have to relearn common interactions. This also helps teams scale design decisions with less ambiguity. Google Workspace is a strong example of this approach, with consistent use of colour, typography, layout patterns, and navigation conventions across desktop, web, and mobile experiences."
        ],
        bullets: [
          "Keep hover, focus, and active states consistent across screens and devices.",
          "Document patterns in a clear style guide so teams can reuse them properly.",
          "Design components as part of a system, not as isolated one-off screens."
        ]
      },
      {
        heading: "Device-appropriate design is better than strict duplication",
        paragraphs: [
          "Consistency across devices does not mean every feature should appear in exactly the same way everywhere. Different devices come with different constraints. A desktop spreadsheet can show many rows, columns, and controls at once. A mobile screen cannot do that without becoming cramped and frustrating to use.",
          "Google Sheets is a useful example. The mobile experience supports core spreadsheet work, but some advanced desktop capabilities are reduced or omitted because the context is different. That is not inconsistency. It is good product judgment. The goal is to preserve the same mental model while adapting navigation, controls, and feature depth to the device."
        ]
      },
      {
        heading: "Customer evidence reveals where growth gets blocked",
        paragraphs: [
          "Teams that do not understand customer goals, friction points, and behaviours are much more likely to create awkward products. Strong SaaS companies tend to avoid this by building customer-led product processes. Slack is a good example of a product that has improved steadily by listening carefully to workflows, feedback, and behavioural signals over time.",
          "Useful research starts by understanding what users are trying to accomplish at different stages of the journey. The method matters less than the quality of the questions. Asking only what is not working rarely gets to the heart of the problem. Asking about decision-making, workflow, performance expectations, and success criteria usually produces much better design direction."
        ],
        bullets: [
          "Use interviews and usability sessions to understand real workflows, not just stated preferences.",
          "Look at usage patterns to see where friction is happening in practice.",
          "Turn findings into clear problem statements before moving into design."
        ]
      },
      {
        heading: "Evidence can prevent expensive overengineering",
        paragraphs: [
          "In one redesign programme I led, a cloud-hosted collaborative automation platform had originally been built for engineers. As the focus shifted toward product management teams in financial services, we found that many of the existing features no longer aligned with how the new audience wanted to work.",
          "Research showed that these teams were comfortable organising planning tasks in spreadsheet-style environments such as Excel. Although our platform already supported many of the same jobs, users wanted more direct control over tables and cell-level editing. That insight helped us refine the interface without rebuilding the entire platform around the wrong assumptions."
        ]
      },
      {
        heading: "Feature discipline matters as products scale",
        paragraphs: [
          "Scaling a SaaS product is not just about handling more users or more data. It is also about protecting the usability of the product as market pressure, internal ambition, and customer requests increase. One of the most common traps is feature creep, where new capabilities are added without a clear strategy and the interface becomes overloaded.",
          "The best way to avoid that is to focus on core functionality in the early phases. That keeps the product vision clear, protects resources, and ensures teams are building around real user value rather than noise from the market."
        ]
      },
      {
        heading: "Start with essential value, then expand carefully",
        paragraphs: [
          "Notion is a useful example here. Its early product focused on a few essential workflows around note-taking, task tracking, and project management. That initial clarity made the product compelling to early adopters and gave the company a strong base to build from.",
          "Only after that foundation was established did the platform expand into broader templates, database views, collaboration features, and use cases for wider audiences. The lesson is straightforward: products grow more effectively when they first prove value around a small set of meaningful actions."
        ]
      },
      {
        heading: "Validation beats assumption when priorities are unclear",
        paragraphs: [
          "In another programme, I worked on an IoT platform that was moving toward a desktop as a service model. Rather than spending months building a large feature set upfront, we researched industry expectations, shortlisted the most relevant capabilities, and tested them through a rapid MVP.",
          "That fail-fast approach helped us separate genuinely valuable features from assumed ones. It also created a more practical decision-making process for the team. Instead of debating ideas in the abstract, we could test them early and learn from actual feedback."
        ]
      },
      {
        heading: "The best SaaS experiences balance ambition with clarity",
        paragraphs: [
          "SaaS remains a major opportunity for product teams, but the expectations around quality continue to rise. Enterprise buyers and end users expect products that feel trustworthy, coherent, and capable without becoming bloated or confusing.",
          "Cross-device consistency, user research, and disciplined feature prioritisation are not separate tactics. Together, they form a practical way of designing SaaS products that are sustainable, competitive, and genuinely useful to the people who rely on them."
        ]
      }
    ],
    keyTakeaways: [
      "Cross-device consistency builds confidence, but it works best when the experience adapts intelligently to each device.",
      "User research helps teams uncover the real workflow and decision-making needs behind product friction.",
      "Protecting core functionality early is one of the most effective ways to avoid feature creep as a SaaS product grows."
    ],
    ctaTitle: "Need a sharper SaaS product strategy?",
    ctaBody: "We help SaaS teams align product strategy, service clarity, and delivery so growth does not come at the cost of adoption, trust, or operational simplicity."
  },
  {
    slug: "ux-barriers-saas-revenue-growth",
    topic: "product development",
    title: "Product Friction That Slows SaaS Growth",
    excerpt: "SaaS comes with industry-specific constraints, and teams that ignore them often create products that are harder to adopt, harder to scale, and harder to improve.",
    meta: "Revenue Strategy · 8 min read",
    readTime: "8 min read",
    publishedDate: "2023-03-20",
    sections: [
      {
        heading: "SaaS product challenges are different from other product work",
        paragraphs: [
          "Product work varies from industry to industry. A team can be highly effective in one context and then find it much harder to create impact in another. That is not always about skill. Often it comes down to how the industry operates and what the product environment demands.",
          "SaaS is one of those environments. Teams building SaaS applications face a set of challenges that are different from many other digital products. The mix of technical dependency, feature depth, scale, security requirements, and constant iteration can make even straightforward product decisions more complex than they first appear."
        ]
      },
      {
        heading: "Complexity, consistency, and scale are built into the job",
        paragraphs: [
          "SaaS products often carry broad functionality, layered permissions, multiple workflows, and a steady stream of new features. Presenting that clearly without overwhelming users is one of the hardest parts of the work. At the same time, the product still has to feel consistent across browsers, devices, and different types of usage patterns.",
          "Designers also have to think about scalability. A SaaS product is rarely built for a small, stable audience. It needs to hold up across different levels of traffic, different account structures, and different operational contexts, all while remaining understandable to the people using it."
        ],
        bullets: [
          "Feature depth makes information architecture harder to manage.",
          "Cross-platform access makes consistency harder to maintain.",
          "Scale changes how performance, navigation, and workflows are experienced."
        ]
      },
      {
        heading: "Security, feedback loops, and rapid change add pressure",
        paragraphs: [
          "Many SaaS products also deal with sensitive user data, which means security and compliance cannot sit outside the design conversation. Whether the environment is subject to GDPR, HIPAA, or industry-specific controls, the user experience has to support secure behaviour without making the product harder to use.",
          "On top of that, SaaS products evolve quickly. Designers are expected to respond to feedback, support rapid release cycles, and adjust direction without losing the coherence of the experience. That makes adaptability essential, but it also makes it easier for products to drift if decisions are not anchored in user needs."
        ]
      },
      {
        heading: "Operational clarity has to come before visual polish",
        paragraphs: [
          "In SaaS, clarity is rarely a nice-to-have. It is what determines whether the product can actually do its job. Visual polish matters, but it should not take priority over whether people can complete tasks, understand the system, and move through workflows with confidence.",
          "This is particularly important in products that are already complex. If the foundation is unclear, stronger visuals will not fix the experience. Teams need to establish functional clarity first and then build visual refinement on top of it."
        ]
      },
      {
        heading: "Lack of product knowledge can quietly weaken design decisions",
        paragraphs: [
          "A common issue in growing SaaS companies is that deep product knowledge sits with a small group of people. New designers, or even experienced designers entering a new team, may not have full visibility into how the product works, what trade-offs shaped it, or how it creates value for customers.",
          "That gap can make design work slower and less effective. It also increases the risk of surface-level changes that improve appearance without improving the core experience. In these situations, designers need to be proactive, ask better questions, and push for access to the context they need."
        ]
      },
      {
        heading: "Design with end users in mind, not just the proposed solution",
        paragraphs: [
          "A lot of SaaS companies focus heavily on the solution they want to deliver and not enough on the people who will use it. That usually leads to products that are harder to understand, harder to adopt, and less satisfying over time.",
          "Designing with end users in mind means understanding their goals, pain points, behaviour, and working environment. It also means testing ideas throughout the process rather than waiting until the end. Even when access to users is limited, the effort is worth it. The closer the product gets to real needs, the better the chances of adoption, retention, and revenue growth."
        ]
      },
      {
        heading: "Keep multiple user groups in view",
        paragraphs: [
          "SaaS products often serve more than one audience. An end user, an internal operations team, and a business partner may all rely on the same platform in different ways. If design only focuses on one of those groups, the rest of the experience can become weak or fragmented.",
          "That is why validation needs to consider the full user landscape. A product that works beautifully for one group but creates friction for others will struggle to scale cleanly."
        ]
      },
      {
        heading: "Understand the tech stack constraints",
        paragraphs: [
          "In SaaS environments, technical realities often shape the product heavily. Engineering dependencies, legacy architecture, and platform decisions can all influence what gets prioritised. If that happens without enough product design involvement, users may end up exposed to unnecessary complexity or technical language that means little to them.",
          "A product designer has to work closely with engineers and product managers to make sure technical constraints do not become user-facing confusion. The goal is not to ignore the stack. It is to translate it into a product experience that still feels clear and usable."
        ]
      },
      {
        heading: "Know the financial impact of customisation",
        paragraphs: [
          "For start-ups and SMEs in particular, revenue concentration can create design pressure. A few large clients may have enough commercial influence to drive requests for custom features, workflow changes, or one-off design adjustments. Those changes can make sense in the moment, but they often have wider consequences for the product.",
          "Customising heavily for one client can make the experience worse for others, weaken the broader product strategy, and make future improvements harder. Designers need to understand this commercial pressure and work with the team to decide which changes support the product and which ones pull it off course."
        ],
        bullets: [
          "Assess requests using effort versus impact, not account size alone.",
          "Protect the core experience for the wider customer base.",
          "Look for ways to support client needs without damaging the main product."
        ]
      },
      {
        heading: "Question requirements before the product becomes a feature factory",
        paragraphs: [
          "One of the designer's most important responsibilities in SaaS is to stop the product from turning into a feature factory. It is easy for teams to add functionality because it seems interesting, urgent, or commercially attractive. It is much harder to step back and ask whether the feature solves a real user problem.",
          "That is why questioning matters. Designers should validate requirements with users wherever possible, challenge weak assumptions, and stay focused on the value a feature creates. User research and testing are essential here because they help separate meaningful improvements from noise."
        ]
      },
      {
        heading: "Do not assume the problem is real just because it sounds plausible",
        paragraphs: [
          "Sometimes teams spend time solving problems that do not truly exist, or that could be solved in a much simpler way. Designers need the confidence to recognise that and redirect effort when necessary.",
          "A problem statement is not enough on its own. It still needs to be checked against user feedback, real workflows, and the wider product context. Users may see the issue differently, or may have a more useful view of what success looks like."
        ]
      },
      {
        heading: "Enterprise and start-up SaaS have more in common than people think",
        paragraphs: [
          "These challenges do not only exist in smaller companies. Large enterprises face many of the same issues. Internal SaaS platforms can become fragmented when different services, teams, and roadmaps evolve separately. Users then have to move across disconnected environments just to complete related tasks.",
          "In one large organisation, I worked across multiple service areas where internal users had to navigate different platforms for cloud hosting, virtual servers, PaaS offerings, AKS clusters, and container services. The challenge was not only interface design. It was creating a more coherent experience across separate systems with different stakeholders, priorities, and roadmaps."
        ]
      },
      {
        heading: "Persistence matters when the organisation is complex",
        paragraphs: [
          "Improving enterprise SaaS often requires more research, more stakeholder alignment, and more persistence than teams expect. Consistency rarely appears on its own when departments are working toward different goals. It has to be pushed for, evidenced, and repeated until the value becomes clear.",
          "That work is demanding, but it is also where a lot of product impact comes from. When designers understand how the organisation works and stay close to real user pain points, they are much better placed to shape solutions that hold together."
        ]
      }
    ],
    keyTakeaways: [
      "SaaS design is shaped by complexity, scale, security, and constant change, not just interface polish.",
      "The strongest products stay close to real user needs and resist drifting into feature-led design.",
      "Commercial pressure, tech constraints, and organisational complexity all need active design judgment, not passive acceptance."
    ],
    ctaTitle: "Need a clearer SaaS growth model?",
    ctaBody: "We help SaaS teams cut through complexity, validate what matters, and shape products that work for customers, stakeholders, and the business."
  },
  {
    slug: "integrating-ux-into-agile-delivery",
    topic: "product development",
    title: "Getting Product Discovery to Work With Agile Delivery",
    excerpt: "Discovery should work with Agile, but forcing it into an existing sprint plan from day one usually leads to weak decisions, rushed outputs, and the wrong expectations.",
    meta: "Delivery Strategy · 5 min read",
    readTime: "5 min read",
    publishedDate: "2020-02-29",
    sections: [
      {
        heading: "Discovery and Agile are not the same thing",
        paragraphs: [
          "Every day, job adverts appear asking product designers to work inside an Agile delivery environment as if that alone proves a team understands how discovery should operate. In practice, that assumption is often poorly thought through. Asking discovery work to follow Agile rituals and sprint deliverables from day one is usually a sign that the organisation does not fully understand how product decisions should be shaped.",
          "That does not mean discovery should be separated from Agile completely. It means the relationship needs to be handled properly. When teams understand where discovery connects with Agile, life gets easier for designers, developers, stakeholders, and users. When they do not, the product tends to suffer."
        ]
      },
      {
        heading: "A common scenario sets UX up to fail",
        paragraphs: [
          "A familiar pattern shows up in many businesses. The organisation decides it needs to improve the user experience of an existing product. The development team is already working in two-week Agile sprints. User stories are written, project plans are in motion, and expectations are set around immediate delivery.",
          "Then a UX designer is brought in and expected to slot directly into that plan, produce artefacts on demand, and work to sprint deadlines that were defined before the design problem was properly understood. At that point, the team is not really asking for UX. It is asking for outputs."
        ]
      },
      {
        heading: "The first problem is confusion between discovery and interface work",
        paragraphs: [
          "Many businesses still do not distinguish clearly between UX and UI. They say they need UX when what they really want is someone to produce interface designs, tidy up screens, or deliver wireframes on a schedule.",
          "That confusion matters because UX is not only about visual output. It is about understanding the problem, identifying the right direction, validating it with users, and then translating that into something the team can build with confidence."
        ]
      },
      {
        heading: "The second problem is timing",
        paragraphs: [
          "Even if the business understands the difference between UX and UI, it may still bring UX in too late. If the roadmap is already committed, the sprint plan is locked, and the delivery team is expecting immediate artefacts, the designer is being asked to work inside decisions that have already been made.",
          "That puts UX in a reactive position from the start. Instead of helping shape the right problem and the right solution, the designer is pushed toward serving an existing plan. That almost always weakens the quality of the outcome."
        ]
      },
      {
        heading: "Discovery is not a list of deliverables",
        paragraphs: [
          "One of the biggest misconceptions in this setup is the idea that UX is mainly about deliverables. Businesses often ask for wireframes, flows, or information architecture within the current sprint as though those artefacts are the work itself.",
          "They are not. UX begins with understanding the problem, exploring possible solutions, validating them with users, and only then moving into the outputs that support delivery. When teams skip straight to deliverables, they are often creating polished versions of untested assumptions."
        ]
      },
      {
        heading: "Pre-written user stories can lock the team into the wrong perspective",
        paragraphs: [
          "Another issue is that user stories are frequently written before UX is involved. In many organisations, those stories are shaped from a business perspective rather than from the users' perspective. That can distort priorities before the design work has even begun.",
          "At that point, asking a UX designer to follow the sprint and produce outputs against those stories is like asking them to work with one hand tied behind their back. The team has already reduced the room for discovery, challenge, and validation."
        ]
      },
      {
        heading: "Discovery should inform the plan, not be trapped by it",
        paragraphs: [
          "The practical answer is not complicated. Do not force UX to follow an existing delivery plan that was created without valid design outcomes. Let the UX work reach a grounded direction first, then use that outcome to shape the Agile development plan.",
          "This does not slow delivery in the long run. It usually makes it stronger. Development can then move with clearer intent, fewer false starts, and better alignment between business goals and user needs."
        ]
      },
      {
        heading: "Agile works better when the team respects how discovery operates",
        paragraphs: [
          "UX and Agile can work well together, but only when teams stop treating design as a sprint-based service function. Agile is useful for structuring delivery. UX is useful for making sure the team is solving the right problem in the right way.",
          "When those responsibilities are connected properly, products improve. When they are blurred, everyone ends up moving quickly toward decisions that were not ready."
        ]
      }
    ],
    keyTakeaways: [
      "Forcing UX into an existing sprint plan usually confuses outputs with actual design work.",
      "UX needs room to understand and validate the problem before delivery plans are locked.",
      "Agile works best when it follows sound UX thinking instead of replacing it."
    ],
    ctaTitle: "Trying to align discovery and delivery?",
    ctaBody: "We help delivery teams build practical operating models where discovery strengthens sprint execution instead of competing with it."
  },
  {
    slug: "ux-testing-business-risk",
    topic: "design & testing",
    title: "Why Weak Validation Creates Business Risk",
    excerpt: "There is delivery without testing, and then there is delivery with the wrong testing. Both can lead to serious failure when the stakes are high.",
    meta: "Risk Management · 4 min read",
    readTime: "4 min read",
    publishedDate: "2020-06-14",
    sections: [
      {
        heading: "Poor validation can be just as dangerous as no validation",
        paragraphs: [
          "There is delivery without testing, and then there is delivery with the wrong testing. Both are dangerous. That applies whether you are working on a digital application, a machine, or any system people rely on in real life.",
          "Alongside UX, I have always been interested in aviation, and there are few better examples of the cost of inadequate testing than the Comet disaster. It is an extreme case, but it makes the point clearly: if a new design is not tested rigorously enough, the consequences can be far greater than product failure."
        ]
      },
      {
        heading: "The Comet disaster shows what happens when a new design is not tested deeply enough",
        paragraphs: [
          "In 1952, the de Havilland DH 106 Comet became the world's first commercial jet airliner. It was admired for its clean design, pressurised cabin, buried engines, and large square windows. It looked advanced, and it was treated as a major leap forward in aviation design.",
          "Yet within the first year of service, three aircraft were lost after catastrophic in-flight break-ups. Investigators eventually traced the problem back to a design flaw around the window and escape hatch areas. The aircraft had been tested, but not rigorously enough to reveal the effects of repeated pressurisation and decompression on that new design."
        ],
        bullets: [
          "The design was new, so the testing should have been even more demanding.",
          "The flaw was not obvious until the consequences became catastrophic.",
          "The design was eventually corrected, but only after lives were lost."
        ]
      },
      {
        heading: "Testing with the wrong context can be just as misleading",
        paragraphs: [
          "The second lesson is slightly different. Sometimes teams do test, but they test in the wrong environment, with the wrong users, or under the wrong conditions. That can produce a false sense of confidence.",
          "A useful example is England's smart motorway programme. The idea was tested on the M42, where the government used technology, variable speed controls, and emergency refuge areas to manage traffic flow. The pilot was treated as a success, and the model was then extended nationally."
        ]
      },
      {
        heading: "A successful pilot in one setting did not mean the design would work everywhere",
        paragraphs: [
          "The problem was that the M42 did not represent every motorway. Driver behaviour, traffic patterns, and operating conditions vary significantly between roads such as the M42, M1, M6, M25, and M4. Despite that, the broader rollout leaned too heavily on the original pilot.",
          "In some cases, emergency refuge areas were spaced much farther apart, and drivers who broke down in active lanes had far fewer safe options. The lesson is not limited to roads. It is that a design validated in one environment does not automatically transfer safely into another."
        ]
      },
      {
        heading: "Testing needs to match the actual risk",
        paragraphs: [
          "In the Comet case, the key lesson is that new designs need rigorous testing because major flaws may not appear under shallow validation. In the smart motorway case, the lesson is that testing must involve the right context and the right users, not just a convenient pilot.",
          "Both examples point to the same principle. If the testing does not reflect reality closely enough, the findings can mislead the team just as easily as no testing at all."
        ]
      },
      {
        heading: "The lesson is bigger than any one industry",
        paragraphs: [
          "Whether you are an engineer, scientist, product leader, or designer, the responsibility is similar. If you do not validate a decision properly, or if you validate it with the wrong users and assumptions, you are not only risking product failure. In some cases, you are risking serious harm.",
          "That is why validation should never be treated as a final checkpoint or a formality. It is part of responsible product decision-making. Good products are not only about ideas. They are about proving those ideas hold up in the conditions that matter."
        ]
      }
    ],
    keyTakeaways: [
      "A new design needs deeper testing, not lighter testing, because unknown risks are higher.",
      "A successful pilot is only useful if the users, conditions, and context truly match the wider rollout.",
      "Testing is part of responsible design, especially when people depend on the outcome."
    ],
    ctaTitle: "Need stronger validation before rollout?",
    ctaBody: "We help teams validate critical workflows early so product decisions are grounded in real behaviour, not internal assumptions."
  }
];

export function getInsightArticle(slug?: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export function getInsightCanonicalUrl(slug: string) {
  return buildCanonicalUrl(`/insights/${slug}`);
}

export function buildInsightArticleSchema(article: InsightArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishedDate,
    "dateModified": article.publishedDate,
    "author": {
      "@type": "Person",
      "name": "Ahsan Jalil"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AURMAK",
      "logo": {
        "@type": "ImageObject",
        "url": buildCanonicalUrl("/aurmak-logo.svg")
      }
    },
    "mainEntityOfPage": getInsightCanonicalUrl(article.slug),
    "articleSection": article.topic,
    "keywords": article.topic
  };
}
