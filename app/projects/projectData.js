export const projectCaseStudies = [
  {
    slug: "paygate",
    title: "Paygate Crypto Payment Gateway",
    company: "SOFTIC",
    role: "Software Engineer",
    period: "2025 - Present",
    summary:
      "A NestJS-based merchant payment gateway backend for provider-driven deposits, withdrawals, invoices, exchanges, payouts, webhooks, balances, currencies, and dashboard operations.",
    hero:
      "Built secure payment and merchant workflows across deposits, withdrawals, invoices, exchanges, payouts, callback validation, and operational dashboard experiences.",
    challenge:
      "The platform needed to support multiple providers, accurate reconciliation, callback-safe transaction updates, merchant-level controls, and real-time visibility without making the payment experience feel confusing to end users.",
    contribution: [
      "Worked on a NestJS backend with modules for transactions, providers, payment systems, balances, currencies, OTP, auth, dashboards, IP whitelist, and access-route rules.",
      "Implemented payment flows across deposit, withdraw, withdraw request, invoice, payout, exchange, transaction callback, and outbound webhook services while integrating provider-specific logic for Alphapo and Pay2Play.",
      "Improved merchant operations through dashboard, balance, company, payment-system, currency-rate, callback, and reconciliation-related backend workflows using PostgreSQL, Redis, scheduled jobs, and seeded RBAC setup.",
    ],
    impact: [
      "Made merchant operations easier through clearer reporting, balance visibility, provider management, and wallet-oriented transaction control.",
      "Reduced risk in transaction handling by strengthening verification, callback processing, webhook behavior, and exchange reconciliation logic.",
      "Helped the product support real business use cases across deposits, withdrawals, invoices, payouts, and provider-based transaction routing in a Dockerized production-ready service.",
    ],
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Redis", "Docker", "Provider Integrations"],
    links: [
      { label: "Platform Context", href: "https://dev.thepaygate.com/dashboard", external: true },
    ],
    showcase: [
      {
        title: "Crypto Deposit QR Flow",
        label: "Payment Screen",
        description:
          "A deposit flow backed by crypto-address, deposit, deposit-transaction, deposit-fee, and callback handling so end users can complete QR or wallet-based payments safely.",
        tone: "payment",
        features: ["Crypto Address", "QR Payment", "Deposit Callback", "Minimum Deposit Guard"],
      },
      {
        title: "UPI Transfer Confirmation",
        label: "Checkout Step",
        description:
          "A confirmation-oriented payment step that maps well to provider-managed invoice, exchange, or payout request workflows where proof and status updates matter.",
        tone: "checkout",
        features: ["Invoice Flow", "Exchange Status", "Transaction ID", "Countdown"],
      },
      {
        title: "Merchant Dashboard",
        label: "Operations View",
        description:
          "An internal dashboard backed by dashboard, balance, currency, company, provider, and transaction modules for merchant metrics, deposit and withdrawal activity, exchange summaries, and reporting.",
        tone: "dashboard",
        features: ["Merchant Metrics", "Balances", "Currency Rates", "Deposit Report", "Withdrawal Summary"],
      },
    ],
  },
  {
    slug: "support-chat",
    title: "Support Chat Platform",
    company: "SOFTIC",
    role: "Software Engineer",
    period: "2025 - Present",
    summary:
      "A multi-tenant support and chatbot platform built with a Next.js frontend for real-time chats, widget flows, admin operations, and multi-channel support management.",
    hero:
      "Created messaging workflows that connect customers, support teams, and automated chat experiences across admin dashboards, embedded widgets, and multiple social channels.",
    challenge:
      "The system had to balance agent usability, multi-channel message delivery, automation, and admin control while keeping response flow manageable at scale.",
    contribution: [
      "Built and worked on a Next.js frontend with dashboard routes for chats, notifications, profile, user management, roles, permission, call list, settings, and owner dashboard behavior.",
      "Implemented support workflows for real-time agent communication, chatbot orchestration, widget chat, request callback, call-now panels, and message handling across multiple channels.",
      "Worked with Redux Toolkit, Socket.IO events, dynamic dashboard modules, and supporting components for notes, files, reply flows, call requests, and customer conversation history.",
    ],
    impact: [
      "Reduced support friction by centralizing communication flows for agents and customers.",
      "Made conversation management more scalable through automation, channel integrations, settings control, and clearer admin workflows.",
      "Supported a product experience that combines live agent chat, chatbot steps, owner or admin dashboards, widget conversations, and operational control in one system.",
    ],
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Socket.IO", "Sass", "Admin Dashboard"],
    links: [],
    showcase: [
      {
        title: "Widget and Conversation Flows",
        label: "Chat Journeys",
        description:
          "Structured chat journeys covering guest-user onboarding, start-chat forms, callback requests, call-now panels, widget messaging, and rich conversation states.",
        tone: "chatflow",
        features: ["Guest User Form", "Request Callback", "Call Now", "Widget Chat"],
      },
      {
        title: "Admin Dashboard and Control Workspace",
        label: "Support Operations",
        description:
          "A dashboard-style workspace with chats, notifications, settings, roles, permission, user management, call lists, and owner-facing operational controls.",
        tone: "admin",
        features: ["Chats", "Notifications", "Roles", "Permission", "Settings", "Call List"],
      },
    ],
  },
  {
    slug: "zhealth",
    title: "ZHealth",
    company: "Zaynax Limited",
    role: "Software Engineer",
    period: "2021 - 2025",
    summary:
      "A health-tech product involving product, order, payment, and communication services including chat and video call capabilities.",
    hero:
      "Contributed to a consumer-facing health platform where commerce, communication, and service operations had to work together smoothly.",
    challenge:
      "Health-tech journeys require dependable service logic, smooth order and payment handling, and communication tools that patients can actually trust.",
    contribution: [
      "Worked on product, order, and payment-related service behavior to support day-to-day health platform operations.",
      "Contributed to communication features including chat and video-call-related capabilities inside the broader product ecosystem.",
      "Helped maintain platform workflows where reliability and user confidence directly affect business performance.",
    ],
    impact: [
      "Supported a connected product experience across service discovery, order flow, communication, and payment interactions.",
      "Helped the platform serve real user needs through dependable backend and service integration work.",
    ],
    stack: ["ASP.NET Core", "NestJS", "MongoDB", "Redis", "Payment Integration", "Communication Services"],
    links: [
      { label: "Website", href: "https://zaynaxhealth.com/", external: true },
      {
        label: "Android App",
        href: "https://play.google.com/store/apps/details?id=zaynaxhealth.com&pli=1",
        external: true,
      },
    ],
    showcase: [
      {
        title: "Product and Service Journeys",
        label: "Live Platform",
        description:
          "Focused on the service layer behind product selection, ordering, payments, and communication inside a health-tech ecosystem.",
        tone: "health",
        features: ["Order Flow", "Payments", "Communication Services"],
      },
    ],
  },
  {
    slug: "zdrop",
    title: "Zdrop",
    company: "Zaynax Limited",
    role: "Software Engineer",
    period: "2021 - 2025",
    summary:
      "An e-commerce and logistics platform with order flow, payment integration, and notification-driven customer operations.",
    hero:
      "Worked on a commerce platform where order movement, logistics coordination, and notification flows all needed to stay dependable.",
    challenge:
      "Commerce products become fragile quickly when order states, payments, and notifications drift apart, so the underlying backend workflows had to be consistent.",
    contribution: [
      "Contributed to order flow and operational service logic inside the e-commerce and logistics platform.",
      "Worked on payment-related integration points and notification behavior to keep customer and business workflows aligned.",
      "Helped strengthen the backend processes that support day-to-day platform movement from order creation to fulfillment updates.",
    ],
    impact: [
      "Supported a more reliable commerce workflow across ordering, payment handling, and notifications.",
      "Helped the platform connect logistics and customer communication in a more maintainable system.",
    ],
    stack: ["ASP.NET Core", "SQL Server", "Commerce Workflows", "Notifications", "Payments"],
    links: [
      { label: "Website", href: "https://zdrop.com.bd/", external: true },
      {
        label: "Android App",
        href: "https://play.google.com/store/apps/details?id=com.zdrop.bd",
        external: true,
      },
    ],
    showcase: [
      {
        title: "Commerce and Delivery Operations",
        label: "Live Platform",
        description:
          "Focused on backend-driven commerce behavior across order progress, payment connections, and logistics-aware notifications.",
        tone: "commerce",
        features: ["Order Progress", "Payment Flow", "Notifications"],
      },
    ],
  },
  {
    slug: "accounting-demo",
    title: "Accounting Demo",
    company: "Personal / Portfolio Project",
    role: "Full-Stack Developer",
    period: "Independent Project",
    summary:
      "A full-stack accounting system with Angular frontend, backend services, SQL scripts, and reporting support for ledgers, account groups, invoices, journals, banks, and financial reports.",
    hero:
      "Built an accounting-focused application that covers core operational modules like ledger, account grouping, customers, suppliers, journals, invoices, banks, and reporting in one full-stack project.",
    challenge:
      "Accounting systems need structured data flow, clean record organization, and dependable reporting because small inconsistencies in ledger or invoice behavior can quickly break user trust.",
    contribution: [
      "Built frontend and backend layers across AccountingFrontend, backend services, SQL scripts, and report-oriented API structure so the core modules could work together in one accounting workflow.",
      "Implemented routed modules for dashboard, user and role permission management, account list, add or edit account chart, customer and supplier flows, bank setup, journal entry flows, sales invoice screens, and financial report views.",
      "Structured the project around practical accounting operations with separate list, edit, and detail screens for journals and invoices, plus reporting support through dedicated report services and financial report pages.",
    ],
    impact: [
      "Created a strong full-stack demo that shows experience beyond isolated APIs by covering actual business operations end to end.",
      "Demonstrated the ability to model accounting workflows where records, journals, invoices, banks, and reports need to stay consistent.",
      "Added a portfolio project that is especially useful for recruiters looking for ERP, finance, or business-platform engineering experience.",
    ],
    stack: ["Angular", "TypeScript", "ASP.NET", "SQL Script", "Financial Reports", "Business Logic"],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/nasrinakter1109/AccountingDemo.git",
        external: true,
      },
    ],
    showcase: [
      {
        title: "Account Chart, Ledger, and Journal Modules",
        label: "Core Accounting Workspace",
        description:
          "Designed around account chart management, customer and supplier ledgers, bank configuration, and journal-related record handling where transaction consistency matters.",
        tone: "commerce",
        features: ["Account List", "Customer Ledger", "Supplier Ledger", "Bank Setup", "Journal Entry"],
      },
      {
        title: "Invoices, Role Permission, and Financial Reports",
        label: "Operational Workspace",
        description:
          "Includes sales invoice create, list, edit, and view screens together with role-permission control and financial reporting pages for day-to-day accounting operations.",
        tone: "dashboard",
        features: ["Sales Invoice", "Edit/View Flow", "Role Permission", "Financial Report"],
      },
    ],
  },
];

export const projectCaseStudyMap = Object.fromEntries(
  projectCaseStudies.map((project) => [project.slug, project])
);

export const homepageFeaturedProjects = [
  {
    title: "Paygate Crypto Payment Gateway",
    role: "Software Engineer, SOFTIC",
    summary:
      "Built secure payment initiation, callback handling, provider abstraction, and transaction operations for a NestJS-based payment gateway backend.",
    impact:
      "Strengthened payment reliability through reconciliation, validation, callbacks, webhooks, and provider-driven transaction workflows.",
    stack: ["NestJS", "PostgreSQL", "Redis", "Docker"],
    slug: "paygate",
    features: ["Deposits", "Withdrawals", "Invoices", "Webhooks"],
  },
  {
    title: "ZHealth",
    role: "Software Engineer, Zaynax Limited",
    summary:
      "Contributed to product, order, payment, and communication services including chat and video call capabilities in a health-tech platform.",
    impact:
      "Supported dependable service workflows that connect commerce, communication, and user-facing health operations.",
    stack: ["ASP.NET Core", "NestJS", "MongoDB", "Redis"],
    slug: "zhealth",
    features: ["Order Flow", "Payments", "Communication"],
  },
  {
    title: "Support Chat Platform",
    role: "Software Engineer, SOFTIC",
    summary:
      "Created a multi-tenant chatbot and support system for Telegram, WhatsApp, and Facebook Messenger with real-time agent communication.",
    impact:
      "Reduced manual support load through automated workflows and scalable concurrent messaging services.",
    stack: ["ExpressJS", "MongoDB", "Socket.IO", "Redis"],
    slug: "support-chat",
    features: ["Widget Chat", "Roles", "Settings", "Call Requests"],
  },
];

export const homepageMoreProjects = [
  {
    title: "Accounting Demo",
    company: "Personal / Portfolio Project",
    summary:
      "A full-stack accounting project with ledger, group, invoice, and report modules across both frontend and backend.",
    slug: "accounting-demo",
    features: ["Ledger", "Invoices", "Reports"],
  },
  {
    title: "Zdrop",
    company: "Zaynax Limited",
    summary:
      "Worked on an e-commerce and logistics platform with order flow, payment integration, and notifications.",
    slug: "zdrop",
    features: ["Order Flow", "Payments", "Notifications"],
  },
  {
    title: "Invoice and Billing Management System",
    company: "SOFTIC",
    summary:
      "Developed a billing platform for customer management, invoice generation, payment tracking, and role-based access control.",
  },
  {
    title: "Confidential Microservice Platform",
    company: "SOFTIC",
    summary:
      "Worked on auth, payment, transaction, rewards, and notification services in a microservice architecture.",
  },
  {
    title: "Accounting System",
    company: "Zaynax Limited",
    summary:
      "Designed ledgers, subledgers, fiscal year logic, transactional consistency, and financial reports.",
  },
  {
    title: "ERP Solution",
    company: "Zaynax Limited",
    summary:
      "Built accounting, HR, and invoicing workflows for business operations using .NET and SQL Server.",
  },
  {
    title: "Human Resource Management",
    company: "Software Arena Ltd",
    summary:
      "Developed payroll, allowance, deduction, and dynamic salary calculation modules with API support.",
  },
];
