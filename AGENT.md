# AGENT.md - Agile Geeks Website Redesign

## 1. Project Overview
**Company:** Agile Geeks (agilegeeks.ro)
**Mission:** We build tailor-made complex software systems, design n8n AI automation flows, and develop in-house SaaS products (Finivo.ro). We are deeply committed to Open Source.
**Goal:** Create a modern, high-performance marketing website using Astro that reflects our transition from a "small agile team" to a "sophisticated engineering partner."

## 2. Technical Architecture
* **Framework:** Astro (Latest version)
* **Styling:** Tailwind CSS (v3 or v4)
* **Icons:** Lucide React or Tabler Icons
* **Fonts:** * Headings: 'Inter' or 'Space Grotesk' (Google Fonts)
    * Body: 'Inter' or 'DM Sans'
    * Code/Accents: 'JetBrains Mono' (for that "Geek" aesthetic)
* **Deployment Target:** Static (Netlify/Vercel)

## 3. Design System & Aesthetics
* **Vibe:** "Sophisticated Engineering." Clean, precise, technical but approachable.
* **Color Palette:**
    * **Background:** Dark Slate/Charcoal (`#0f172a`) for the main theme, White (`#ffffff`) for the SaaS product section to contrast.
    * **Primary:** Electric Green (`#22c55e`) - represents code, "go", success.
    * **Secondary:** Blurple/Indigo (`#6366f1`) - represents creativity and AI.
    * **Text:** Slate-50 for dark backgrounds, Slate-900 for light backgrounds.
* **Visual Motifs:**
    * Subtle grid backgrounds.
    * Terminal-style headers for code sections.
    * Glassmorphism effects on cards.

## 4. Site Structure & Content (Single Page Application feel)

### A. Navigation
* **Logo:** Text-based "AGILE GEEKS" (Monospace font, bold).
* **Links:** Services, AI Automation, Products (Finivo), Open Source, Contact.
* **CTA:** "Get in Touch" (Button).

### B. Hero Section
* **Headline:** "Complex Systems. Automated Workflows. Tailor-Made Solutions."
* **Subhead:** "We architect enterprise-grade software and integrate intelligent AI flows for companies that demand precision. Creators of Finivo."
* **Visual:** Minimalist code abstract or a node-graph visualization (hinting at n8n).
* **Actions:** Primary Button: "Discuss Your Project", Secondary Button: "View Our Products".

### C. Services Section (Grid Layout)
1.  **Custom Software Development**
    * *Icon:* Database/Server
    * *Copy:* "We don't just write code; we solve business problems. We specialize in building complex, high-load software systems tailored specifically to your operational needs. From scalable backend architectures to reactive front-end interfaces."
2.  **AI & Business Automation (n8n)**
    * *Icon:* Workflow/Bot
    * *Copy:* "Stop doing busy work. We design customized **n8n** flows that integrate Artificial Intelligence to automate repetitive business activities. We connect your varied tools, allowing data to flow seamlessly."

### D. Product Spotlight (Featured Section)
* *Design:* Use a white/light gray background to distinguish this "SaaS" product from the service offerings.
* **Headline:** "In-House Innovation: Finivo.ro"
* **Copy:** "We practice what we preach. Finivo is our flagship SaaS solution—a modern, intuitive invoicing application designed for freelancers and small businesses. Built for speed, compliance, and ease of use."
* **Visual:** A mock browser window displaying a clean invoicing dashboard.
* **CTA:** Link to `https://finivo.ro`.

### E. Open Source (The "Geek" Section)
* *Design:* Dark terminal theme.
* **Headline:** "Built by Geeks, Shared with the World."
* **Copy:** "We believe in the power of community. Our team actively maintains open-source libraries used by developers worldwide."
* **Data Source:** If possible, fetch pinned repos from `https://github.com/agilegeeks` at build time, or hardcode these key repos:
    * `pyVat`: Python library for validating European VAT formats.
    * `eurid-epp-php`: Connecting with the EURid registry.
    * `paypal-ipn-endpoint`: Testing tools for seamless payment integration.

### F. Footer
* Copyright Agile Geeks.
* Social Links: GitHub, LinkedIn.
* Locations: Bucharest, Romania.

## 5. Implementation Instructions for the Agent
1.  **Setup:** Initialize a new Astro project with Tailwind configured.
2.  **Components:** Create reusable Astro components for `Section`, `Card`, `Button`, and `Badge`.
3.  **Layout:** Use a `Layout.astro` file to handle SEO metadata and global styles.
4.  **Interactivity:** Use standard HTML/CSS transitions for hover states. No heavy JS frameworks unless necessary.
5.  **Images:** Use placeholders (e.g., via `placehold.co`) for the Finivo screenshot, but style the container with a shadow/border-radius to look like a browser window.

## 6. Tone of Voice
Professional, technically competent, concise. Avoid fluff. We are experts talking to other business leaders and CTOs.