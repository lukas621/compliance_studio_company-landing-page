# MECC Website — Update Brief & Claude CLI Prompts

Prepared June 14, 2026. Use the prompts in Part 5 with Claude Code (paste one at a time, in order). They are self-contained — each restates the shared context so it works in a fresh session.

---

## Part 1 — Analysis of the current site

**Pages:** `index, program, pathway, evidence, executives, about, accessibility, contact` + a 1.3 MB standalone `MECC - The Pathway.html`.

**Two gaps:**

1. **Content is outdated.** Every page still describes a *single accessibility program* ("One program · Five components," five license tiers). MECC is now a compliance-training firm across **six areas**, plus apps and a flagship bot. The site doesn't show this.
2. **The design reads as the generic "Claude editorial" template.** Signature tells to remove: numbered mono eyebrows (`N° 01`, `data-num`, `01 / 05`), uppercase mono micro-labels everywhere, oversized serif display with accent `<em>` italics, strict alternating cream/dark bands, austere section names ("The gap," "The standard").

**Keep the brand** — the palette and type are good and should not change (see Part 3).

**Remove all staff/personnel:** named partner "Jacqueline Silvera — Founding Senior Partner" (`index`, `about`, `contact`), "leadership team" (`index`, `executives`), and the entire `executives.html` page. Shift to institution-level voice ("MECC," at most "our founding team").

**Retire old positioning lines site-wide:** the tagline "Policy, made practice." and "institutional capability infrastructure for healthcare" are from the prior single-program thesis — remove or replace with MECC's current line. Also retire the old 5-tier ladder (Discovery → Pilot → Essentials → Strategic → Enterprise) and its dollar figures ($15k/$45k/$65k/$125k/$225k) wherever they appear — replaced by the new offering ladder (see the approach-page prompt).

---

## Part 2 — Target information architecture

| Page | Purpose |
|---|---|
| `index.html` | Hero (MECC = compliance training across 6 areas, healthcare-first, Canada) → 6-area overview → flagship bot teaser → evidence/credibility → CTA |
| `services.html` (replaces `program.html`) | The six training areas as a card grid; each links to its detail/section |
| `products.html` (new) | Signage/screen-board app, compliance poster app, ⭐ flagship Training Bot |
| `approach.html` (replaces `pathway.html`) | How MECC builds & delivers + the **offering ladder**: Basic → Intermediate → Premium courses, then the ⭐ Training Bot (apex). Retire the old 5-tier Discovery→Enterprise ladder and its dollar figures. |
| `evidence.html` | Audit-ready outputs — keep, but generalize beyond accessibility |
| `about.html` | The company — no individuals |
| `contact.html` | Contact — no individuals |
| ~~`executives.html`~~ | **Delete** (staff) |
| ~~`accessibility.html`~~ | Keep as the WCAG **accessibility statement** page (required — MECC sells accessibility) |

Nav: `Services · Products · Approach · Evidence · About` + a solid `Contact` CTA. Remove "For Executives."

**Single contact page:** `contact.html` is the *only* page for getting in touch. There is **no team / staff / leadership / executives page anywhere** on the site, and no named individuals.

The six areas (exact labels): **1. Social Accountability & IDEAA · 2. Accessibility (18-course series) · 3. SOGIE across the lifespan (incl. ERG toolkits) · 4. Equity, anti-Black racism & cultural humility · 5. Trauma-informed care & psychological safety · 6. Indigenous cultural safety.**

---

## Part 3 — Brand tokens (DO NOT change)

```
--navy:#0A1628  --navy-2:#0E1B30  --navy-3:#152238
--ink:#0A1628   --paper:#FFFFFF   --paper-2:#F7F5F2   --paper-3:#EFEBE4
--accent:#0D4F4F (teal)   --gold:#C9A96E
--serif:'Instrument Serif'   --sans:'Inter'   --mono:'JetBrains Mono'
```

Voice: senior, plain-spoken, evidence-led. Never "revolutionary," "disruptive," "AI-powered." Canada-first (Accreditation Canada, AODA, CNO, PHIPA).

---

## Part 4 — Design direction ("less Claude, same brand")

Keep tokens; change execution:

- **Cut mono labels by ~70%** — use mono for data only (stats, codes), not section intros. Replace numbered eyebrows (`N° 01`) with a short label + a 24px gold rule.
- **Cards over editorial lists.** The 6 areas = a responsive 3×2 card grid: serif area name, one-line description, a simple line icon, subtle shadow, gold top-accent, hover lift. This replaces the "01/05" component list.
- **Break the cream/dark alternation.** Vary section rhythm; reserve full navy for ONE or two high-impact bands (hero + flagship-bot feature), not every other section.
- **One signature element.** Pick a single distinctive motif (e.g. a thin gold rule system, or a consistent card corner treatment) and repeat it — that's what makes it feel bespoke, not templated.
- **Depth & spacing.** Soft shadows on cards, an 8px spacing scale, container max 1360px.
- **Flagship bot = the bold moment.** Give the Training Bot its own feature band with a distinct (slightly bolder) treatment — it's the flagship.
- **Real imagery.** Replace stocky hero gradients with one strong healthcare photograph or a custom brand graphic (see Part 6 for image-gen prompts).
- **Accessibility is non-negotiable** (you sell it): WCAG 2.2 AA contrast, visible focus states, semantic landmarks, alt text, reduced-motion support.

---

## Part 5 — Claude CLI prompts (paste in order)

### ▸ PROMPT 1 — Information architecture, content & staff removal

```
You are updating the MECC website (static HTML/CSS/JS in this folder). MECC = Modernized Equity Compliance Consulting Inc., a compliance-training consulting firm (healthcare-first, Canada-first). Keep the existing brand tokens and fonts exactly (navy #0A1628, teal #0D4F4F, gold #C9A96E, cream #F7F5F2; Instrument Serif / Inter / JetBrains Mono). Voice: senior, plain-spoken, evidence-led — never "revolutionary/AI-powered."

Goal of THIS task: fix information architecture, content, and remove all staff. Do NOT restyle yet.

1. The site currently describes a single accessibility program. Rework it to present MECC's full catalogue: SIX training areas — (1) Social Accountability & IDEAA, (2) Accessibility [an 18-course series], (3) SOGIE across the lifespan [includes ERG toolkits], (4) Equity, anti-Black racism & cultural humility, (5) Trauma-informed care & psychological safety, (6) Indigenous cultural safety — PLUS products: an accessibility signage/screen-board app, a compliance poster app, and the flagship "Training Bot" (a RAG assistant over in-house content that generates training material, performance-support tools, and scenario-based training).
2. New page structure: index.html (home), services.html (the 6 areas as a grid — rename/replace program.html), products.html (new — the two apps + flagship bot), approach.html (how MECC builds & delivers; rename/replace pathway.html), evidence.html (keep, generalize beyond accessibility), about.html (company, no individuals), contact.html, accessibility.html (keep as the WCAG statement).
3. REMOVE ALL STAFF and have ONE contact page: delete executives.html and every link to it; do NOT create any team/staff/leadership page. contact.html is the single place for getting in touch. Remove "Jacqueline Silvera," "Founding Senior Partner," "leadership team," "Led by [name]" from index.html, about.html, contact.html. Replace with institution-level voice ("MECC," at most "our founding team"). No named individuals anywhere.
4. Update the nav on every page to: Services · Products · Approach · Evidence · About + a Contact CTA. Update the footer sitemap to match; no personal names.
5. Keep copy concise and evidence-led. Don't invent statistics — use placeholders like "[stat]" where a real number is needed, and list them at the end.

Work page by page. After editing, give me a short summary of content changes and a list of any placeholders/stats I need to supply.
```

### ▸ PROMPT 2 — Design-system polish (de-templatize, keep brand)

```
Now polish the visual design of the MECC site so it reads as a bespoke consulting brand, NOT a generic editorial template — while keeping the brand tokens and fonts unchanged.

Remove these "templated" tells:
- Numbered mono eyebrows (N° 01, data-num="0x", "01 / 05"). Replace each section intro with a short text label + a 24px gold rule (var(--gold)).
- Reduce uppercase mono micro-labels by ~70% — reserve JetBrains Mono for data only (stats, codes), not prose or section intros.
- Stop the strict cream/dark alternation. Reserve full-navy bands for only the hero and the flagship-bot feature; render other sections on paper/cream.

Add craft:
- A reusable CARD component: white card, 1px var(--rule-light) border, soft shadow (0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(10,22,40,.06)), 2px gold top-accent, hover lift (translateY(-2px) + deeper shadow, 150ms). Use it for the 6 training areas (responsive grid: 3 cols desktop, 2 tablet, 1 mobile).
- One signature motif repeated site-wide: a thin gold rule used as section dividers and card accents.
- An 8px spacing scale; container max-width 1360px; generous but consistent vertical rhythm.
- A slim sticky top nav: MECC wordmark (Instrument Serif) left, links center/right, a solid teal or gold Contact button, mobile hamburger.
- Refined focus styles (2px gold outline, offset) and prefers-reduced-motion handling.

Edit assets/site.css (and add small per-page styles only where needed). Keep all CSS variables. Do not change the palette or fonts. After, show me before/after notes for the homepage.
```

### ▸ PROMPT 3 — Rebuild the homepage

```
Rebuild index.html as the flagship page using the polished design system and the new content. Sections, in order:
1. Sticky nav (Services · Products · Approach · Evidence · About + Contact CTA).
2. Hero (navy band): one Instrument Serif headline positioning MECC as compliance training that turns policy into measurable capability; one short subhead; max ONE mono kicker; two CTAs (primary "Explore the training areas", secondary "See the evidence"). Use a strong healthcare photograph or brand graphic, not a plain gradient.
3. The six training areas as the card grid (link each to services.html#area).
4. A flagship-bot FEATURE band (the bold moment, distinct treatment) introducing the Training Bot.
5. A credibility/evidence row — 2–3 audit-ready proof points (mono only for the numbers; use [stat] placeholders).
6. Closing CTA band → contact.html. No named individuals.

Keep WCAG 2.2 AA: semantic landmarks, alt text, contrast, visible focus. Match the design system from the previous step. Show me the result and any placeholders.
```

### ▸ PROMPT 4 — Build services.html and products.html

```
Build two pages consistent with the homepage system:

services.html — the six training areas. Intro + the card grid, then a detailed section per area (id anchors: #social-accountability-ideaa, #accessibility, #sogie, #equity-anti-black-racism, #trauma-informed, #indigenous-cultural-safety). For Accessibility note the 18-course series; for SOGIE note it includes the ERG toolkits. Evidence-led copy, no staff, no invented stats (use [placeholders]).

products.html — TWO products only: the flagship Training Bot and the Compliance Poster App. There is NO signage / screen-board / digital-display product — if one is present on the page, delete it entirely (and remove it from the intro copy).
- ⭐ Training Bot — FLAGSHIP, boldest treatment. RAG over MECC's SME-validated library; generates scenario-based training, performance-support tools, facilitator prompts, assessment items, plain-language policy summaries; human-in-the-loop, named-reviewer guardrails, no patient data. Label it "Currently in development · early-access partnerships."
- Compliance Poster App — AVAILABLE. A managed, co-branded library of compliance posters (workplace rights, health & safety, AODA/accessibility obligations, regulatory notices) kept current with legislative change; print + digital; coverage dashboard. Sold STANDALONE or bundled with training. Real CTA ("Request the Poster App").
CTAs to contact.html. Do NOT use the retired "Policy, made practice" tagline or "capability infrastructure for healthcare" line (footer included).

Reuse the nav, footer, card, and gold-rule components. WCAG 2.2 AA throughout.
```

### ▸ PROMPT 4b — Build approach.html (offering ladder)

```
Rebuild approach.html. DELETE the old "pathway" content entirely — the five institutional license tiers (Discovery → Pilot → Essentials → Strategic → Enterprise), every dollar figure ($15k/$45k/$65k/$125k/$225k), the "credited forward / cumulative pathway" language, and the "Policy, made practice" tagline. Keep brand tokens, nav, footer, card + gold-rule components, WCAG 2.2 AA. Voice: senior, evidence-led, plain-spoken.

approach.html has two sections.

SECTION A — "How we build" (a five-step production process; broaden beyond clinical-only):
01 Obligation mapping — policy + regulation mapped to roles, settings, decision moments.
02 Scenario authoring — instructional designers with domain expertise.
03 Expert validation — every scenario validated by named clinical, disability, AND cultural reviewers; auditable.
04 LMS packaging — SCORM/xAPI, integration tested before deployment.
05 Evidence architecture — assessment and reporting that produce audit-ready evidence of capability, not completion checkmarks.
Note: AI augments the pipeline (drafting, regulatory updates, consistency); it does not replace the expert, editor, or institutional review.

SECTION B — "The offering ladder" — FOUR ascending, CUMULATIVE tiers (each includes everything below it). Spine: Awareness → Application → Mastery → Continuous. IMPORTANT design logic: Basic and Intermediate are the SAME universal fundamentals at increasing depth; PERSONALIZATION is deliberately reserved for Premium (tailoring matters most for applied judgment, not baseline awareness). Each tier card: name + spine word + a short "what's included" list + the price (see Pricing block below); show the cumulative "everything in the prior tier, plus…" visually.

- Basic — Foundations (Awareness). Self-paced eLearning fundamentals: narrated modules + knowledge check + completion record. The same core content for every role. Entry tier.
- Intermediate — Applied (Application). Everything in Basic, plus interactive video + participant workbook + applied exercises (optional facilitator-led in-service session). Still the universal fundamentals — richer, more engaging delivery.
- Premium — Mastery (personalized, role-based). Everything in Intermediate, plus:
   • a short PRE-ASSESSMENT that routes each learner by ROLE (RN / RPN / allied health / administrative / leadership) and by demonstrated gaps — learners test out of what they already know and focus on what they don't;
   • role-indexed, SME-validated BRANCHING SCENARIO SIMULATIONS with a structured DEBRIEF (name the debrief explicitly — it's where judgment transfers to practice);
   • progress- and mastery-based gamification — levels/badges tied to real skill and visible progress; NO competitive leaderboards;
   • certificate / micro-credential;
   • audit-ready evidence export + institutional customization.
- ⭐ Training Bot (apex / flagship) — Continuous. Everything in Premium, plus an ongoing AI assistant (RAG over MECC + the institution's own policies) with on-shift micro-scenario practice, performance-support tools, and auto-updates for regulatory change. Continuous capability, not a one-time course. Visually the boldest tier; link to products.html.

The four tiers apply across all six training areas. Optionally add ONE understated, evidence-led line near the ladder — e.g. "Personalization and simulation are concentrated where they matter most: applied skill and judgment." — but no statistics or academic citations on the page.

Pricing & UNITS — CRITICAL: make the unit unmistakable so no one reads "$150k" as the price of a single course. Split the ladder into TWO visually distinct lanes (a divider or two sub-headings), and show the unit ("/ course" vs "/ category") on every price in the same style:

LANE 1 — "Buy by the course" (priced per fundamental course):
- Basic — "$5,000 / course" + small note "fundamentals bundle available at a discount."
- Intermediate — "from $10,000 / course."

LANE 2 — "License a full category" (priced per category = the ENTIRE area: all its courses + every role path):
- Premium — "from $150,000 / category · scoped per institution." Make "/ category" prominent. STARTING price only — no range or upper number on the page; the floor must be real (smallest category, smallest institution).
- ⭐ Training Bot — NO price. "Custom — let's talk." (continuous platform; link to Contact).

Add ONE clarifying line directly under the ladder: "Basic and Intermediate are priced per fundamental course. Premium licenses an entire category — every course and every role path — not a single course." Model: institutional licenses, value-based by category size and institution scale, NOT per-seat. Keep the full Premium range internal (calculator/quotes), never on the page. End with a Contact CTA ("Every engagement starts with a conversation").
```

### ▸ PROMPT 5 — Global QA pass

```
Final QA on the MECC site:
1. Confirm executives.html is gone and no page links to it; confirm NO named individuals remain (search "Jacqueline", "Silvera", "Founding Senior Partner", "Led by", "leadership team").
2. Verify every nav/footer link resolves; nav and footer are identical across all pages.
3. Responsive check at 360px, 768px, 1280px — no overflow; card grids reflow correctly.
4. WCAG 2.2 AA: run through contrast on navy/gold/teal combos, ensure visible focus on all interactive elements, alt text on all images, one <h1> per page, logical heading order, prefers-reduced-motion respected.
5. Confirm brand tokens/fonts unchanged from the original.
List anything you couldn't fix and any [placeholders]/stats I still owe you.
```

### ▸ PROMPT 6 — Logo & favicon wiring

```
Wire the finalized MECC logo assets into the site. The brand files live in the sibling folder ../../01_Brand (relative to this website folder): mecc_logo_horizontal_light.svg, mecc_logo_horizontal_dark.svg, mecc_logo_light.svg, mecc_mark.svg, and png/ versions (mecc_mark_32.png, mecc_mark_180.png, mecc_logo_horizontal_light@2x.png).

1. Copy these into assets/ (or assets/brand/): mecc_logo_horizontal_light.svg, mecc_logo_horizontal_dark.svg, mecc_logo_light.svg, mecc_mark.svg, mecc_mark_32.png, mecc_mark_180.png.
2. Nav wordmark: replace the text "MECC" brand link in the nav with an <img> (or inline SVG) using mecc_logo_horizontal_light.svg on light navs and mecc_logo_horizontal_dark.svg on dark/navy navs. Constrain height to ~34–40px, width auto; wrap in the home link; alt="MECC — Modernized Equity Compliance Consulting".
3. Footer: use mecc_logo_horizontal_dark.svg (footer is on navy) at ~32px height, or the full mecc_logo_light.svg if the footer is light.
4. Favicon: add to every page <head>:
   <link rel="icon" type="image/svg+xml" href="assets/mecc_mark.svg">
   <link rel="icon" type="image/png" sizes="32x32" href="assets/mecc_mark_32.png">
   <link rel="apple-touch-icon" sizes="180x180" href="assets/mecc_mark_180.png">
5. Do not recolor or restretch the logos; keep aspect ratio. The SVGs are transparent and already match the brand tokens. Confirm the nav logo stays crisp at 1x and 2x and that it has a visible focus ring as a link.
```

---

## Part 6 — Optional image prompts (for NanoBanana / Midjourney / GPT Image)

Generate externally, then drop into `assets/`:

- **Hero:** "Editorial photograph, Canadian hospital corridor with diverse clinical staff in conversation, natural window light, calm and professional, muted desaturated tones with deep navy shadows, shallow depth of field, no text, documentary style — not stock-posed." 2400×1400.
- **Area cards (optional line icons):** "Minimal single-line icon, 2px stroke, gold #C9A96E on transparent, representing [accessibility / inclusion / cultural safety], geometric, consistent set." 240×240.
- **Flagship-bot band:** "Abstract brand graphic, calm navy-to-teal gradient with fine gold linework forming a subtle conversational/network motif, premium and restrained, no literal robot." 2000×1200.

(Per your tooling: don't use Canva for image generation.)
```
```
