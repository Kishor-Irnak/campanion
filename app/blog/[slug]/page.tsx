import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { notFound } from "next/navigation";

// ── All blog posts content ──────────────────────────────────────
const posts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    icon: string;
    color: string;
    bg: string;
    border: string;
    tags: string[];
    content: React.ReactNode;
  }
> = {
  "meta-ads-lead-gen-strategy-2024": {
    title: "The Meta Ads Lead Gen Blueprint That Gets ₹100 CPL or Less",
    category: "Meta Ads",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    icon: "solar:monitor-camera-line-duotone",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tags: ["Meta Ads", "Lead Gen", "Strategy"],
    content: (
      <>
        <p>
          Most businesses waste ₹10,000 or more testing Meta ads before getting
          a single quality lead. The frustration is real — but the problem is
          almost always structural, not algorithmic.
        </p>
        <p>
          After managing over ₹10 Crore in Meta ad spend, we've cracked a
          repeatable system that consistently delivers leads at ₹80–₹120,
          regardless of the industry.
        </p>

        <h2>Step 1: Campaign Objective</h2>
        <p>
          Always use <strong>Leads</strong> as your campaign objective, not
          Traffic or Engagement. Most beginners choose Traffic thinking "more
          visitors = more leads." Wrong. Facebook optimises for what you tell it
          to optimise for.
        </p>

        <h2>Step 2: The Audience Structure</h2>
        <p>We run two ad sets in every new Lead Gen campaign:</p>
        <ul>
          <li>
            <strong>Ad Set 1 — Broad:</strong> No interest targeting. Just
            location + age. Let the algorithm find winners.
          </li>
          <li>
            <strong>Ad Set 2 — Interest Stack:</strong> 3–5 tightly related
            interests layered together. This acts as a control group.
          </li>
        </ul>
        <p>
          After 5–7 days, we turn off the underperformer and scale the winner.
        </p>

        <h2>Step 3: Creative Formula</h2>
        <p>
          The creative is 80% of your result. We use this format consistently:
        </p>
        <ul>
          <li>
            <strong>Hook (0–2s):</strong> A bold question or stat your audience
            instantly relates to
          </li>
          <li>
            <strong>Problem:</strong> 5 seconds of pain amplification
          </li>
          <li>
            <strong>Solution:</strong> Your offer as the obvious answer
          </li>
          <li>
            <strong>CTA:</strong> Single, clear action — "Fill the form below"
          </li>
        </ul>

        <h2>Step 4: The Landing Experience</h2>
        <p>
          We use <strong>Meta Instant Forms</strong> for most lead gen campaigns
          — not a website landing page. Why? Because instant forms reduce
          friction. Users don't leave the app. Conversion rates are typically
          2–4x higher.
        </p>
        <p>
          Use a 2-field form: Name + Phone. Every extra field you add drops
          conversion rate by ~20%.
        </p>

        <h2>The Scaling Rule</h2>
        <p>
          Once you hit ₹100–₹120 CPL with at least 10 leads in 3 days, increase
          budget by 20–25% every 2 days. Never double overnight — the algorithm
          will restart its learning phase and CPL will spike.
        </p>

        <p className="font-semibold text-stone-200">
          That's the system. No hacks, no tricks — just a proven structure you
          can deploy in under 48 hours.
        </p>
      </>
    ),
  },
  "why-your-google-ads-are-burning-money": {
    title: "Why Your Google Ads Are Burning Money (And How to Fix It in 48h)",
    category: "Google Ads",
    date: "Feb 18, 2026",
    readTime: "8 min read",
    icon: "solar:magnifer-line-duotone",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    tags: ["Google Ads", "Audit", "ROI"],
    content: (
      <>
        <p>
          Google Ads has the highest commercial intent of any ad platform. Users
          are actively searching for what you sell. So why are your ads losing
          money?
        </p>
        <p>
          In 9 out of 10 accounts we audit, the problem comes down to 3 root
          causes. Here's the checklist we run on every new client account.
        </p>

        <h2>Problem 1: Broad Match Keywords Without Controls</h2>
        <p>
          Broad match keywords give Google permission to show your ad for
          loosely related (sometimes completely unrelated) searches. If you're
          running a plumbing business and bidding on "pipe repair," broad match
          might show you for "Mario Kart" or "vaping accessories."
        </p>
        <p>
          <strong>Fix:</strong> Start with Exact Match and Phrase Match only.
          Build a list of 20–30 negative keywords before you even launch. Review
          search term reports weekly and add irrelevant terms to your negative
          list.
        </p>

        <h2>Problem 2: No Conversion Tracking</h2>
        <p>
          If you haven't set up Google Ads conversion tracking (not just
          Analytics goals), you are flying blind. The algorithm has no data to
          optimise for — so it just burns budget randomly.
        </p>
        <p>
          <strong>Fix:</strong> Install the Google Ads conversion tag for your
          primary action (form fill, call, purchase). Verify it's firing using
          Google Tag Assistant. Then switch your bidding strategy to Target CPA
          or Maximise Conversions — but only after you have at least 30
          conversions in the last 30 days.
        </p>

        <h2>Problem 3: Single Ad Group, Single Ad</h2>
        <p>
          Running one ad per ad group means zero data to work with. You have no
          way to know which headline, which description, which CTA works better.
        </p>
        <p>
          <strong>Fix:</strong> Use Responsive Search Ads (RSAs) with at least
          10 headlines and 4 descriptions. Google will automatically test
          combinations and surface the highest-performing version. Pin your
          primary CTA in position 1.
        </p>

        <h2>The 48-Hour Fix Plan</h2>
        <ul>
          <li>
            Day 1 Morning: Set up proper conversion tracking, pause all broad
            match keywords
          </li>
          <li>
            Day 1 Afternoon: Add 30 negative keywords, restructure into tight ad
            groups (1 theme = 1 ad group)
          </li>
          <li>
            Day 2: Launch RSA for each ad group, set to Maximise Clicks while
            data accumulates
          </li>
        </ul>
        <p>
          In 7–14 days with this structure, most accounts see a 30–60% drop in
          wasted spend.
        </p>
      </>
    ),
  },
  "meta-retargeting-funnel-guide": {
    title: "The 3-Layer Meta Retargeting Funnel Every Brand Needs",
    category: "Meta Ads",
    date: "Feb 15, 2026",
    readTime: "7 min read",
    icon: "solar:users-group-rounded-line-duotone",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tags: ["Meta Ads", "Retargeting", "E-commerce"],
    content: (
      <>
        <p>
          Cold audiences cost ₹40–₹80 per click. Your website visitors? They
          already know your brand. The economics of retargeting are undeniable —
          yet most brands either don't run retargeting at all, or run it wrong.
        </p>
        <p>
          Here's the exact 3-layer funnel we deploy for every e-commerce client.
        </p>

        <h2>Layer 1: Hot Intent (Website Visitors — Last 7 Days)</h2>
        <p>
          These are people who visited your site in the last 7 days. They're the
          warmest possible audience. Your ad to this group should be direct and
          product-specific.
        </p>
        <ul>
          <li>
            Show the exact product they viewed (use Dynamic Product Ads if you
            have a catalog)
          </li>
          <li>
            Message: Urgency + social proof ("Selling fast — 47 people bought
            this today")
          </li>
          <li>Budget: 15–20% of your total Meta budget</li>
        </ul>

        <h2>Layer 2: Medium Intent (Video Views + Engagers — Last 30 Days)</h2>
        <p>
          People who watched 50%+ of your video ads or engaged with your page
          are familiar but not yet buyers. Your ad here should build trust.
        </p>
        <ul>
          <li>
            Show testimonials, before/after results, or a "most popular product"
            carousel
          </li>
          <li>
            Message: Social proof + risk removal ("1,200 happy customers · Free
            returns")
          </li>
          <li>Budget: 10% of total budget</li>
        </ul>

        <h2>Layer 3: Cold Lookalikes (Similar to Buyers — Last 90 Days)</h2>
        <p>
          Create a custom audience of all past purchasers, then generate a 1%
          Lookalike. This is your most scalable cold audience — it behaves like
          your buyers because it is statistically similar to them.
        </p>
        <ul>
          <li>Message: Brand introduction + value prop + first-order offer</li>
          <li>Budget: 70–75% of total budget</li>
        </ul>

        <h2>How They Work Together</h2>
        <p>
          Cold Lookalike → feeds engaged audiences → feeds hot retargeting. It's
          a self-refilling funnel. The more you spend at the top, the more
          people move through to the bottom where your CPL or CPA is lowest.
        </p>
        <p className="font-semibold text-stone-200">
          With this structure, our clients typically see 2–3x ROAS on their
          retargeting layer compared to cold campaigns alone.
        </p>
      </>
    ),
  },
  "google-pmax-vs-search-which-to-use": {
    title: "Google Performance Max vs Search: When to Use Each",
    category: "Google Ads",
    date: "Feb 12, 2026",
    readTime: "5 min read",
    icon: "solar:video-frame-play-horizontal-line-duotone",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    tags: ["Google Ads", "P-Max", "Strategy"],
    content: (
      <>
        <p>
          When Google launched Performance Max, many advertisers made the
          mistake of replacing all their Search campaigns with it. Months later,
          they came to us confused — their CPL had doubled and they had no idea
          why a campaign was underperforming.
        </p>
        <p>
          Here's the truth: P-Max and Search are not competitors. They serve
          fundamentally different roles.
        </p>

        <h2>What Google Search Does Best</h2>
        <p>
          Search campaigns capture <strong>existing demand</strong>. These users
          are actively searching for what you sell. Search gives you granular
          control — exact keywords, exact match types, location bid adjustments,
          and full auction insight data.
        </p>
        <p>
          <strong>Use Search when:</strong> You have high-intent keywords you
          want to own, you need transparent performance data, or you're managing
          a small budget that requires precise targeting.
        </p>

        <h2>What Performance Max Does Best</h2>
        <p>
          P-Max uses Google's AI to serve ads across Search, Display, YouTube,
          Gmail, and Maps simultaneously. It finds conversions you'd never find
          manually, especially in cross-channel journeys.
        </p>
        <p>
          <strong>Use P-Max when:</strong> You have a product catalog
          (e-commerce), you have 30+ conversions/month for the algorithm to
          learn from, or you want to expand reach beyond branded search terms.
        </p>

        <h2>Our Recommended Structure</h2>
        <ul>
          <li>
            <strong>Search Campaign:</strong> 60% of budget — high-intent, brand
            and competitor keywords
          </li>
          <li>
            <strong>P-Max Campaign:</strong> 40% of budget — product feed, asset
            groups by category, audience signals based on purchasers
          </li>
        </ul>
        <p>
          The key: always add your brand terms as negative keywords inside
          P-Max. Otherwise P-Max will steal credit for conversions that were
          going to happen anyway through brand search.
        </p>

        <h2>The One Rule</h2>
        <p className="font-semibold text-stone-200">
          Don't run P-Max without conversion data. It needs at least 30–50
          conversions to learn properly. Launching P-Max on a fresh account is
          burning money.
        </p>
      </>
    ),
  },
  "ad-copy-formula-that-converts": {
    title: "The 4-Part Ad Copy Formula That Works on Both Meta and Google",
    category: "Copywriting",
    date: "Feb 10, 2026",
    readTime: "9 min read",
    icon: "solar:pen-new-round-line-duotone",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    tags: ["Copywriting", "Meta Ads", "Google Ads"],
    content: (
      <>
        <p>
          Great ad copy isn't clever writing. It's a system. After writing
          thousands of ads for Meta and Google campaigns, we've reduced
          everything to 4 parts that work every single time.
        </p>

        <h2>Part 1: The Hook</h2>
        <p>
          You have 1.7 seconds to stop the scroll. Your hook must create an
          immediate emotional reaction — curiosity, pain, surprise, or
          recognition.
        </p>
        <p>
          <strong>Formats that work:</strong>
        </p>
        <ul>
          <li>
            Bold stat: "₹102. That's what our clients pay per lead on Meta."
          </li>
          <li>
            Provocative question: "Why is your Google Ads campaign still
            hemorrhaging money?"
          </li>
          <li>
            Direct address: "If you're a D2C brand spending ₹50K/month on ads,
            read this."
          </li>
        </ul>
        <p>
          For Google Search, your hook is your first headline. Your top keyword
          should appear here verbatim.
        </p>

        <h2>Part 2: The Problem</h2>
        <p>
          Amplify the pain your audience feels. Don't just state the problem —
          make them feel it. If you're selling to business owners wasting money
          on agencies, say: "₹50,000/month. 3-month contracts. Zero guarantees.
          Sound familiar?"
        </p>
        <p>
          For Google, this goes in your second headline or first description
          line.
        </p>

        <h2>Part 3: The Solution</h2>
        <p>
          Position your offer as the inevitable solution to the problem you just
          amplified. Keep it specific and benefit-focused, not feature-focused.
        </p>
        <ul>
          <li>❌ "We offer campaign creation services" (feature)</li>
          <li>
            ✅ "Get a complete Meta or Google campaign built in 48 hours, flat
            fee." (benefit)
          </li>
        </ul>

        <h2>Part 4: The Proof</h2>
        <p>
          One specific, believable data point beats 10 vague claims. Examples:
        </p>
        <ul>
          <li>"₹102 average CPL across 200+ campaigns"</li>
          <li>"4.7★ from 83 clients on Google"</li>
          <li>"Delivered 500+ campaigns without missing a deadline"</li>
        </ul>

        <h2>Putting It Together: Full Ad Example</h2>
        <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 my-6 text-sm">
          <p className="font-bold text-stone-100 mb-2">🪝 Hook:</p>
          <p className="text-stone-300 mb-4">
            Your ad agency charges ₹50,000/mo. We charge ₹699.
          </p>
          <p className="font-bold text-stone-100 mb-2">😤 Problem:</p>
          <p className="text-stone-300 mb-4">
            Long retainers. Slow turnarounds. No guarantees. Agencies were built
            for their revenue, not your results.
          </p>
          <p className="font-bold text-stone-100 mb-2">✅ Solution:</p>
          <p className="text-stone-300 mb-4">
            companion builds and launches your Meta or Google campaign in 48
            hours — for a flat ₹699.
          </p>
          <p className="font-bold text-stone-100 mb-2">📊 Proof:</p>
          <p className="text-stone-300">
            500+ campaigns delivered. ₹102 avg CPL. Profitable in 24 hours or
            your money back.
          </p>
        </div>
        <p className="font-semibold text-stone-200">
          Use this framework as a template. Swap in your own numbers, your own
          pain points, your own proof. It works for video scripts, static ads,
          Google RSAs, and email subject lines.
        </p>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

const SITE_URL = "https://companion.evoclabs.com";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return {};

  const url = `${SITE_URL}/blog/${params.slug}/`;
  return {
    title: post.title,
    description: `${post.title} — Expert marketing insights from companion. Category: ${post.category}. ${post.readTime}.`,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: `${post.title} — Expert marketing insights from companion.`,
      siteName: "companion",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: `${SITE_URL}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: `${post.title} — companion blog.`,
      images: [`${SITE_URL}/android-chrome-512x512.png`],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#09090b] text-stone-100 font-sans antialiased">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid opacity-40" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-stone-800/60 bg-stone-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-stone-300 hover:text-stone-100 transition-colors text-sm font-medium"
          >
            <Icon icon="solar:arrow-left-linear" className="text-base" />
            All Posts
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-100 font-semibold tracking-tight"
          >
            <img
              src="/apple-touch-icon.png"
              alt="logo"
              className="w-5 h-5 rounded-md"
            />
            companion<span className="text-blue-400">.</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <Icon icon="solar:clock-circle-line-duotone" />
            {post.readTime}
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-14 pb-32">
        {/* Article Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.bg} border ${post.border} ${post.color} uppercase tracking-wider`}
            >
              {post.category}
            </span>
            <span className="text-stone-600 text-xs">{post.date}</span>
            <span className="text-stone-600 text-xs">· {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-100 leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-stone-800 text-stone-400 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-stone-800/60 mb-10" />

        {/* Article Body */}
        <div className="prose-custom text-stone-400 leading-relaxed space-y-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-stone-100 [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-stone-200 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:text-stone-400 [&_p]:leading-relaxed">
          {post.content}
        </div>

        {/* CTA */}
        <div className="mt-16 relative bg-[#0a0a0a] border border-stone-800/60 rounded-3xl p-8 text-center">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-900/5 to-transparent rounded-3xl pointer-events-none" />
          <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-3">
            Ready to launch?
          </p>
          <h3 className="text-2xl font-bold text-stone-100 mb-3">
            Get your first campaign live in 48 hours
          </h3>
          <p className="text-stone-400 text-sm mb-6 max-w-sm mx-auto">
            Flat ₹699. No retainer. Meta Ads & Google Ads — built by experts and
            delivered to your account as a ready-to-publish draft.
          </p>
          <a
            href="https://wa.me/919548833953?text=I%20want%20to%20start%20a%20campaign%20for%20%E2%82%B9699%2Fmo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-100 text-stone-950 font-bold px-6 py-3 rounded-xl hover:bg-white transition-all hover:scale-[1.02] text-sm"
          >
            Start for ₹699 <Icon icon="solar:arrow-right-linear" />
          </a>
        </div>
      </main>
    </div>
  );
}
