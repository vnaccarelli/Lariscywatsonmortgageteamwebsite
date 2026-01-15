import imgKeyPoints from "figma:asset/3873f7503301698ae9869bcbd9bac84a9e010c6b.png";
import imgRectangle4504 from "figma:asset/89f3f03978e561be316655f15795d09bdeac9181.png";
import imgCreditScore from "figma:asset/5a8f9f6c5085ca6c0b078fb0f5b6422d20e16e5c.png";
import imgGovernmentOrFed from "figma:asset/c91a0105759a74a2eed28d32cb2d100d15959dd0.png";
import imgRectangle4505 from "figma:asset/3802e23e50a099f4e804f6ac3128101c80c1ec85.png";
import imgNewsletter from "figma:asset/bb730483ac2dc77c3fa29b7e3523872a2199a690.png";

export interface BlogPostData {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  author: {
    name: string;
    initials: string;
    bio: string;
  };
  publishDate: string;
  readTime: string;
  tableOfContents: Array<{
    id: string;
    title: string;
  }>;
  content: Array<{
    type: "paragraph" | "heading" | "list" | "callout" | "warning" | "numbered-list" | "quote" | "image";
    content?: string;
    items?: string[];
    heading?: string;
    level?: 2 | 3;
    imageQuery?: string;
    caption?: string;
  }>;
}

export const blogPosts: BlogPostData[] = [
  {
    id: 1,
    slug: "may-key-points",
    category: "Interest Rates",
    title: "May - Key Points",
    excerpt: "A comprehensive look at the key interest rate trends and market movements from May 2025.",
    featuredImage: imgKeyPoints,
    author: {
      name: "Sarah Johnson",
      initials: "SJ",
      bio: "Market Analyst with 10+ years tracking mortgage rate trends and economic indicators. Provides monthly market updates to help homebuyers make informed decisions.",
    },
    publishDate: "May 31, 2025",
    readTime: "5 min read",
    tableOfContents: [
      { id: "rate-overview", title: "Interest Rate Overview" },
      { id: "market-trends", title: "Key Market Trends" },
      { id: "what-it-means", title: "What It Means for Buyers" },
      { id: "looking-ahead", title: "Looking Ahead to June" },
    ],
    content: [
      {
        type: "paragraph",
        content: "May 2025 brought significant shifts in the mortgage market, with interest rates showing more stability than we've seen in recent months. This comprehensive overview breaks down the key points you need to know.",
      },
      {
        type: "heading",
        level: 2,
        content: "Interest Rate Overview",
      },
      {
        type: "paragraph",
        content: "Average 30-year fixed mortgage rates held steady at 6.75%, marking three consecutive weeks of minimal movement. This stabilization period offers a welcome respite for homebuyers who have been monitoring rates closely.",
      },
      {
        type: "callout",
        heading: "Rate Snapshot",
        content: "30-year fixed: 6.75% | 15-year fixed: 6.125% | 5/1 ARM: 6.25%. These rates represent a significant improvement from the 7%+ levels we saw earlier this year.",
      },
      {
        type: "heading",
        level: 2,
        content: "Key Market Trends",
      },
      {
        type: "paragraph",
        content: "Several factors contributed to the rate stabilization we observed in May:",
      },
      {
        type: "list",
        items: [
          "Federal Reserve signaled a pause in rate adjustments",
          "Inflation data came in slightly below expectations",
          "Housing inventory increased by 12% month-over-month",
          "Consumer confidence showed modest improvement",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "What It Means for Buyers",
      },
      {
        type: "paragraph",
        content: "The current rate environment creates opportunities for strategic homebuyers. With rates stabilizing and inventory improving, competition has eased slightly in many markets.",
      },
      {
        type: "warning",
        content: "While rates are stable now, experts predict potential increases in the second half of 2025. If you're pre-approved and house hunting, this may be an opportune time to lock in your rate.",
      },
      {
        type: "heading",
        level: 2,
        content: "Looking Ahead to June",
      },
      {
        type: "paragraph",
        content: "All eyes will be on the upcoming Federal Reserve meeting and employment data releases. Most analysts expect rates to remain within the current range barring any major economic surprises.",
      },
    ],
  },
  {
    id: 2,
    slug: "may-31-newsletter",
    category: "Newsletter",
    title: "May 31, 2025",
    excerpt: "Your monthly mortgage market update with insights, tips, and important industry news.",
    featuredImage: imgRectangle4504,
    author: {
      name: "Michael Chen",
      initials: "MC",
      bio: "Branch Manager and mortgage industry veteran with 18 years of experience. Publishes monthly newsletters to keep clients informed about market changes and opportunities.",
    },
    publishDate: "May 31, 2025",
    readTime: "4 min read",
    tableOfContents: [
      { id: "monthly-highlights", title: "Monthly Highlights" },
      { id: "client-success", title: "Client Success Stories" },
      { id: "upcoming-changes", title: "Upcoming Changes" },
      { id: "tips-this-month", title: "Tips for This Month" },
    ],
    content: [
      {
        type: "paragraph",
        content: "Welcome to our May newsletter! This month has been busy with stable rates, increased inventory, and numerous successful closings for our clients. Let's dive into what you need to know.",
      },
      {
        type: "heading",
        level: 2,
        content: "Monthly Highlights",
      },
      {
        type: "paragraph",
        content: "May was a milestone month for our branch and the broader mortgage market. We helped 47 families close on their dream homes, and the feedback has been overwhelmingly positive.",
      },
      {
        type: "callout",
        heading: "By the Numbers",
        content: "47 successful closings | Average closing time: 23 days | 98% customer satisfaction rating | $12.4M in total loan volume",
      },
      {
        type: "heading",
        level: 2,
        content: "Client Success Stories",
      },
      {
        type: "paragraph",
        content: "This month we had the pleasure of helping first-time homebuyers Sarah and Tom purchase their starter home in the suburbs. Despite having limited funds for a down payment, we connected them with a first-time homebuyer program that made their dream possible.",
      },
      {
        type: "quote",
        content: "We never thought homeownership was possible for us, but Michael and his team made it happen. The process was smooth, and they answered every question we had.",
      },
      {
        type: "heading",
        level: 2,
        content: "Upcoming Changes",
      },
      {
        type: "paragraph",
        content: "Starting June 15th, new lending guidelines will affect jumbo loan applicants. Here's what's changing:",
      },
      {
        type: "numbered-list",
        items: [
          "Minimum credit score requirement increases to 700",
          "Debt-to-income ratio cap lowered to 43%",
          "Enhanced documentation required for self-employed borrowers",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Tips for This Month",
      },
      {
        type: "paragraph",
        content: "If you're in the market, now is the time to act. Get pre-approved, start house hunting seriously, and don't be afraid to make competitive offers. The spring market is in full swing, and opportunities abound for prepared buyers.",
      },
    ],
  },
  {
    id: 3,
    slug: "improve-credit-score",
    category: "Credit",
    title: "How to Improve Your Credit Score",
    excerpt: "Your credit score plays a crucial role in your ability to secure a mortgage with favorable terms. Learn proven strategies to boost your score.",
    featuredImage: imgCreditScore,
    author: {
      name: "John Davis",
      initials: "JD",
      bio: "Senior Loan Officer with over 15 years of experience helping families achieve their homeownership dreams. Specializes in first-time homebuyer programs and credit counseling.",
    },
    publishDate: "May 15, 2025",
    readTime: "7 min read",
    tableOfContents: [
      { id: "understanding-credit", title: "Understanding Credit Scores" },
      { id: "factors-affecting", title: "Factors Affecting Your Score" },
      { id: "quick-improvements", title: "Quick Improvements You Can Make" },
      { id: "long-term-strategies", title: "Long-Term Strategies" },
      { id: "common-mistakes", title: "Common Mistakes to Avoid" },
    ],
    content: [
      {
        type: "paragraph",
        content: "Your credit score plays a crucial role in your ability to secure a mortgage with favorable terms. Whether you're a first-time homebuyer or looking to refinance, understanding how to improve your credit score can save you thousands of dollars over the life of your loan.",
      },
      {
        type: "paragraph",
        content: "In this comprehensive guide, we'll walk you through proven strategies to boost your credit score and position yourself for mortgage approval success.",
      },
      {
        type: "heading",
        level: 2,
        content: "Understanding Credit Scores",
      },
      {
        type: "paragraph",
        content: "Credit scores typically range from 300 to 850, with higher scores indicating better creditworthiness. For mortgage purposes, most lenders use FICO scores, which are calculated based on five key factors:",
      },
      {
        type: "list",
        items: [
          "Payment history (35%) - Your track record of on-time payments",
          "Credit utilization (30%) - How much credit you're using vs. available",
          "Length of credit history (15%) - How long you've had credit",
          "Credit mix (10%) - Variety of credit types you manage",
          "New credit (10%) - Recent credit inquiries and new accounts",
        ],
      },
      {
        type: "callout",
        heading: "Pro Tip",
        content: "For conventional mortgages, a score of 620 is typically the minimum, but scores above 740 qualify for the best interest rates. Even a small increase in your score can result in significant savings.",
      },
      {
        type: "heading",
        level: 2,
        content: "Factors Affecting Your Score",
      },
      {
        type: "paragraph",
        content: "Understanding what impacts your credit score is the first step to improving it. Let's dive deeper into the most influential factors:",
      },
      {
        type: "heading",
        level: 3,
        content: "Payment History",
      },
      {
        type: "paragraph",
        content: "This is the single most important factor. Late payments, collections, and bankruptcies can significantly damage your score. The good news? The impact of negative items decreases over time, and a consistent pattern of on-time payments can rebuild your score.",
      },
      {
        type: "heading",
        level: 3,
        content: "Credit Utilization Ratio",
      },
      {
        type: "paragraph",
        content: "This represents the amount of credit you're using compared to your total available credit. Experts recommend keeping this ratio below 30%, but aiming for under 10% is even better.",
      },
      {
        type: "heading",
        level: 2,
        content: "Quick Improvements You Can Make",
      },
      {
        type: "paragraph",
        content: "While building good credit takes time, there are several actions you can take right now that may improve your score within weeks:",
      },
      {
        type: "numbered-list",
        items: [
          "Pay Down Credit Card Balances - Focus on cards with the highest utilization rates first. Even paying down one card below 30% can boost your score.",
          "Request a Credit Limit Increase - If you have good payment history, ask your credit card company for a higher limit. This instantly lowers your utilization ratio.",
          "Dispute Credit Report Errors - Review your credit reports from all three bureaus and dispute any inaccuracies. This is free and can be done online.",
          "Become an Authorized User - If a family member has excellent credit, ask to be added as an authorized user on their account. Their positive history can benefit your score.",
        ],
      },
      {
        type: "image",
        imageQuery: "credit improvement tips",
        caption: "Taking consistent action on these strategies can lead to measurable improvements in your credit score.",
      },
      {
        type: "heading",
        level: 2,
        content: "Long-Term Strategies",
      },
      {
        type: "paragraph",
        content: "Building excellent credit is a marathon, not a sprint. Here are strategies that pay off over time:",
      },
      {
        type: "quote",
        content: "The best time to start building your credit was yesterday. The second best time is today.",
      },
      {
        type: "paragraph",
        content: "Keep old accounts open, even if you don't use them regularly. The length of your credit history matters, and closing old accounts can actually hurt your score. Set up automatic payments to ensure you never miss a due date, and review your credit reports annually to catch issues early.",
      },
      {
        type: "heading",
        level: 2,
        content: "Common Mistakes to Avoid",
      },
      {
        type: "paragraph",
        content: "Many people unknowingly sabotage their credit scores. Here's what to avoid:",
      },
      {
        type: "warning",
        content: "Avoid applying for multiple credit cards in a short period. Each hard inquiry can temporarily lower your score by a few points, and too many inquiries signal financial distress to lenders.",
      },
      {
        type: "paragraph",
        content: "Don't max out your credit cards, even if you pay them off monthly. High balances can be reported before payment is received, temporarily spiking your utilization ratio. Finally, don't close old accounts just because you've paid them off—keep them open to maintain your credit history length.",
      },
    ],
  },
  {
    id: 4,
    slug: "government-shutdown-impact",
    category: "Mortgage Market",
    title: "The Government Shutdown & What It Means for Mortgages",
    excerpt: "Understanding how government shutdowns can impact mortgage applications, processing times, and the housing market.",
    featuredImage: imgGovernmentOrFed,
    author: {
      name: "Emily Rodriguez",
      initials: "ER",
      bio: "Policy Analyst and Senior Loan Officer specializing in government-backed loans. Helps clients navigate FHA, VA, and USDA loan programs.",
    },
    publishDate: "May 10, 2025",
    readTime: "6 min read",
    tableOfContents: [
      { id: "immediate-impact", title: "Immediate Impact" },
      { id: "government-backed-loans", title: "Government-Backed Loans" },
      { id: "verification-delays", title: "Verification Delays" },
      { id: "what-to-do", title: "What Borrowers Should Do" },
    ],
    content: [
      {
        type: "paragraph",
        content: "Government shutdowns can create uncertainty in the mortgage market, particularly for borrowers relying on government-backed loans or those in the middle of the application process. Here's what you need to know.",
      },
      {
        type: "heading",
        level: 2,
        content: "Immediate Impact",
      },
      {
        type: "paragraph",
        content: "During a shutdown, certain federal agencies reduce operations or close entirely. This affects mortgage processing in several ways:",
      },
      {
        type: "list",
        items: [
          "IRS tax transcript requests may be delayed or unavailable",
          "Social Security verification services may be limited",
          "FHA, VA, and USDA loan processing can slow significantly",
          "Federal employee income verification becomes complicated",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Government-Backed Loans",
      },
      {
        type: "paragraph",
        content: "If you're pursuing an FHA, VA, or USDA loan, a shutdown directly impacts your timeline. These programs require federal agency approval, and reduced staffing can extend processing times by weeks.",
      },
      {
        type: "callout",
        heading: "Important Note",
        content: "Conventional loans through Fannie Mae and Freddie Mac typically continue processing during shutdowns, making them a more reliable option during periods of government uncertainty.",
      },
      {
        type: "heading",
        level: 2,
        content: "Verification Delays",
      },
      {
        type: "paragraph",
        content: "Even conventional loans can face delays. Lenders often need to verify income through IRS tax transcripts, and without access to these systems, alternative documentation may be required, extending your closing timeline.",
      },
      {
        type: "heading",
        level: 2,
        content: "What Borrowers Should Do",
      },
      {
        type: "numbered-list",
        items: [
          "Gather all documentation early - Have tax returns, pay stubs, and bank statements ready",
          "Communicate with your lender - Stay in close contact about potential delays",
          "Consider conventional loans - They're less impacted by government operations",
          "Build buffer time - If you're house hunting, factor potential delays into your timeline",
        ],
      },
      {
        type: "paragraph",
        content: "While shutdowns create challenges, experienced loan officers can navigate these situations. Working with a knowledgeable team ensures you have contingency plans in place.",
      },
    ],
  },
  {
    id: 5,
    slug: "new-home-sales-jump",
    category: "First Time Homebuyers",
    title: "New Home Sales Jump While Builders Pump Up Inventory",
    excerpt: "New construction offers opportunities for first-time buyers as builders increase inventory and offer incentives.",
    featuredImage: imgRectangle4505,
    author: {
      name: "David Thompson",
      initials: "DT",
      bio: "New Construction Specialist with expertise in builder incentives and new home communities. Helps buyers navigate the unique aspects of purchasing newly built homes.",
    },
    publishDate: "May 5, 2025",
    readTime: "5 min read",
    tableOfContents: [
      { id: "market-snapshot", title: "Market Snapshot" },
      { id: "builder-incentives", title: "Builder Incentives" },
      { id: "first-time-buyers", title: "Opportunities for First-Time Buyers" },
      { id: "what-to-consider", title: "What to Consider" },
    ],
    content: [
      {
        type: "paragraph",
        content: "The new home construction market is experiencing a significant surge, with sales jumping 18% compared to last year. For first-time homebuyers, this trend presents unique opportunities.",
      },
      {
        type: "heading",
        level: 2,
        content: "Market Snapshot",
      },
      {
        type: "paragraph",
        content: "Builders are responding to pent-up demand by increasing inventory across price points. Many are focusing on entry-level homes, which have been in short supply in recent years.",
      },
      {
        type: "list",
        items: [
          "New home inventory up 25% year-over-year",
          "Average days on market decreased to 45 days",
          "Builder confidence at highest level since 2021",
          "More entry-level communities breaking ground",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Builder Incentives",
      },
      {
        type: "paragraph",
        content: "Competition among builders means generous incentives for buyers. These can significantly reduce your out-of-pocket costs and monthly payments:",
      },
      {
        type: "callout",
        heading: "Common Incentives",
        content: "Rate buydowns (reducing your interest rate by 1-2%), closing cost assistance ($5,000-$15,000), upgraded finishes at no cost, and flexible down payment options.",
      },
      {
        type: "heading",
        level: 2,
        content: "Opportunities for First-Time Buyers",
      },
      {
        type: "paragraph",
        content: "New construction offers advantages that resonate particularly well with first-time buyers:",
      },
      {
        type: "numbered-list",
        items: [
          "Everything is brand new - No immediate repairs or maintenance needed",
          "Energy efficiency - Lower utility bills and potential tax credits",
          "Customization options - Choose finishes and features that match your style",
          "Builder warranties - Protection against defects for several years",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "What to Consider",
      },
      {
        type: "paragraph",
        content: "While new construction offers many benefits, there are important factors to consider. Construction timelines can shift, and buying in a developing community means amenities may not be complete. Work with a lender experienced in new construction to ensure smooth coordination with builder timelines.",
      },
      {
        type: "warning",
        content: "Always get an independent home inspection, even for new construction. Builder inspections may not catch everything, and a third-party inspection protects your investment.",
      },
    ],
  },
  {
    id: 6,
    slug: "home-maintenance-checklist",
    category: "Homebuying Tips",
    title: "Home Maintenance Checklist",
    excerpt: "Essential maintenance tasks to protect your investment and keep your home in top condition year-round.",
    featuredImage: imgNewsletter,
    author: {
      name: "Lisa Anderson",
      initials: "LA",
      bio: "Homeownership Advisor helping new homeowners understand the responsibilities and best practices of maintaining their investment. Former real estate agent with 12 years of experience.",
    },
    publishDate: "May 1, 2025",
    readTime: "6 min read",
    tableOfContents: [
      { id: "monthly-tasks", title: "Monthly Tasks" },
      { id: "seasonal-maintenance", title: "Seasonal Maintenance" },
      { id: "annual-checkups", title: "Annual Checkups" },
      { id: "budgeting-for-maintenance", title: "Budgeting for Maintenance" },
    ],
    content: [
      {
        type: "paragraph",
        content: "Congratulations on your new home! Proper maintenance protects your investment and prevents small issues from becoming expensive problems. This checklist helps you stay on top of essential tasks.",
      },
      {
        type: "heading",
        level: 2,
        content: "Monthly Tasks",
      },
      {
        type: "paragraph",
        content: "These quick checks should become part of your routine:",
      },
      {
        type: "list",
        items: [
          "Replace HVAC filters (or clean if reusable)",
          "Test smoke and carbon monoxide detectors",
          "Check for water leaks under sinks and around toilets",
          "Clean range hood filters",
          "Run water in rarely used drains to prevent dry traps",
        ],
      },
      {
        type: "callout",
        heading: "Time Saver",
        content: "Set reminders on your phone for monthly tasks. Many smart home systems can also track maintenance schedules automatically.",
      },
      {
        type: "heading",
        level: 2,
        content: "Seasonal Maintenance",
      },
      {
        type: "paragraph",
        content: "Each season brings specific maintenance needs:",
      },
      {
        type: "heading",
        level: 3,
        content: "Spring",
      },
      {
        type: "numbered-list",
        items: [
          "Inspect roof for winter damage",
          "Clean gutters and downspouts",
          "Service air conditioning system",
          "Check exterior caulking and weather stripping",
          "Power wash exterior surfaces",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "Fall",
      },
      {
        type: "numbered-list",
        items: [
          "Clean gutters again before leaves fall",
          "Service heating system",
          "Winterize outdoor faucets and sprinkler systems",
          "Seal driveway cracks",
          "Check attic insulation",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Annual Checkups",
      },
      {
        type: "paragraph",
        content: "Once a year, tackle these more involved tasks or hire professionals:",
      },
      {
        type: "list",
        items: [
          "Professional HVAC inspection and cleaning",
          "Water heater flush and inspection",
          "Chimney cleaning and inspection (if applicable)",
          "Septic system inspection (if applicable)",
          "Pressure wash and seal deck or patio",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Budgeting for Maintenance",
      },
      {
        type: "paragraph",
        content: "Financial experts recommend setting aside 1-2% of your home's value annually for maintenance and repairs. For a $300,000 home, that's $3,000-$6,000 per year.",
      },
      {
        type: "quote",
        content: "An ounce of prevention is worth a pound of cure. Regular maintenance prevents emergency repairs and extends the life of your home's systems.",
      },
      {
        type: "paragraph",
        content: "Consider opening a dedicated savings account for home maintenance. Automate monthly transfers so you're prepared when maintenance needs arise.",
      },
    ],
  },
];

// Helper function to get related posts (excluding the current post)
export function getRelatedPosts(currentPostId: number, limit: number = 3): BlogPostData[] {
  return blogPosts
    .filter((post) => post.id !== currentPostId)
    .slice(0, limit);
}

// Helper function to get a single post by ID
export function getBlogPostById(id: number): BlogPostData | undefined {
  return blogPosts.find((post) => post.id === id);
}

// Helper function to get previous/next posts
export function getAdjacentPosts(currentPostId: number): {
  previous: BlogPostData | null;
  next: BlogPostData | null;
} {
  const currentIndex = blogPosts.findIndex((post) => post.id === currentPostId);
  return {
    previous: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
  };
}
