// ============================================================
// THIS IS THE ONLY FILE YOU EDIT TO ADD NEW WORK.
//
// To add a new piece:
//   1. Put its PDF in the "pdfs" folder.
//   2. Put its cover image in the "covers" folder (optional).
//   3. Copy the TEMPLATE block below, paste it at the TOP of ENTRIES,
//      and change the text. Do not forget the comma between blocks.
//
// The newest date is shown biggest at the top and first in the grid.
// When you add a newer piece, the older ones move one place to the right.
// ============================================================

const SITE = {
  name: "Atlas & Fritz",   // <-- site name (shown in the masthead and browser tab)
  tagline: "Research and analysis on carbon, power and the energy transition.",
  about: "Papers, articles and infographics by a group of young researchers. Open to read and download.",
  email: "mailto:taqihammam@gmail.com",
  linkedin: "https://www.linkedin.com/in/taqihammam/"
};

// Each topic has its own colour. To add a topic, copy one block.
const TOPICS = [
  {
    id: "carbon",
    name: "Carbon",
    color: "#0F6B5C",
    blurb: "Carbon pricing, emissions trading, border adjustments and carbon markets."
  },
  {
    id: "power",
    name: "Power Sector",
    color: "#C2410C",
    blurb: "Electricity systems, coal and renewables, grid planning and power sector policy."
  }
];

// TEMPLATE: copy the lines below (without the // at the start), paste at the top of ENTRIES, fill in.
//
//   {
//     title: "Title of the piece",
//     authors: "First Author, Second Author",
//     topic: "carbon",                      <- "carbon" or "power"
//     type: "Brief",                        <- Paper, Brief, Article or Infographic
//     date: "2026-11-20",                   <- YYYY-MM-DD. The newest date goes first.
//     summary: "Two short sentences: what it asks and what it finds.",
//     pdf: "pdfs/file-name.pdf",
//     cover: "covers/file-name.jpg"         <- leave "" for a plain coloured cover
//   },

const ENTRIES = [
  {
    title: "Verra’s CCS Methodology Receives ICVCM Approval: A Milestone for Integrity",
    authors: "Taqi Hammam Ariza",
    topic: "carbon",
    type: "Brief",
    date: "2026-11-12",
    summary: "Verra’s carbon capture and storage methodology, VM0049, has been approved by the ICVCM as meeting the Core Carbon Principles. A recognised integrity benchmark can strengthen the credibility of CCS credits and support more CCS in the future, with the market deciding how to use it.",
    pdf: "pdfs/carbon-insight-brief-02-verra-ccs-icvcm-approval.pdf",
    cover: "covers/carbon-insight-brief-02.jpg"
  },
  {
    title: "Rewarding the Buried Tonne: What Indonesia Can Learn from the EU’s CCS-ETS Link",
    authors: "Taqi Hammam Ariza",
    topic: "carbon",
    type: "Brief",
    date: "2026-11-08",
    summary: "In the EU, CO2 stored in a permitted site needs no allowances, so a stored tonne is worth about the allowance price. Indonesia’s CCS and carbon value regulations do not connect, so emitters have no stated reason to store carbon at home.",
    pdf: "pdfs/carbon-insight-brief-01-rewarding-the-buried-tonne.pdf",
    cover: "covers/carbon-insight-brief-01.jpg"
  },
  {
    title: "Indonesia’s 2025 Power Generation Report Card: Renewables Are Growing, but Fossil Fuels Are Growing Faster",
    authors: "Mufty Putratama Sumarto",
    topic: "power",
    type: "Brief",
    date: "2026-11-05",
    summary: "Renewable capacity grew by 1,836 MW in 2025, beating the 1,677 MW plan, but the surplus came from industry-owned captive plants rather than the utility’s plan. Fossil capacity grew by 5,014 MW, about 41% above plan, widening the gap with renewables to 76.1 GW.",
    pdf: "pdfs/energy-insight-brief-01-indonesia-2025-power-report-card.pdf",
    cover: "covers/energy-insight-brief-01.jpg"
  }
];
