// ============================================================
// THIS IS THE ONLY FILE YOU EDIT TO ADD NEW WORK.
// To add a paper: copy one { ... }, block inside ENTRIES,
// paste it at the top of the list, and change the text.
//
// Files:
//   pdf   -> put the PDF in the "pdfs" folder, e.g. "pdfs/my-paper.pdf"
//   cover -> put an image in the "covers" folder, e.g. "covers/my-paper.jpg"
//            (save the first page of the PDF as a JPG, or use the infographic itself).
//            Leave it "" and the site draws a plain coloured cover for you.
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

// "type" can be: Paper, Article, Infographic, Brief (or anything you like).
// "date" must be written as YYYY-MM-DD.
// Leave "pdf" empty ("") and the link will say "PDF coming soon".
const ENTRIES = [
  {
    title: "Sample entry: How a carbon price changes who pays",
    authors: "Author One, Author Two",
    topic: "carbon",
    type: "Paper",
    date: "2026-10-20",
    summary: "This is a sample entry. Replace it with your real paper. Write two short sentences that tell the reader what the paper asks and what it finds.",
    pdf: "",
    cover: ""
  },
  {
    title: "Sample entry: Reading a power plant benchmark",
    authors: "Author Three",
    topic: "power",
    type: "Brief",
    date: "2026-10-05",
    summary: "This is a sample entry. Replace it with your real piece. Keep the summary to about two sentences so the layout stays tidy.",
    pdf: "",
    cover: ""
  },
  {
    title: "Sample entry: Carbon markets in one picture",
    authors: "Author Two",
    topic: "carbon",
    type: "Infographic",
    date: "2026-09-12",
    summary: "This is a sample entry for an infographic. For an infographic, use the image itself as the cover.",
    pdf: "",
    cover: ""
  },
  {
    title: "Sample entry: Where the grid is heading",
    authors: "Author One, Author Four",
    topic: "power",
    type: "Article",
    date: "2026-08-30",
    summary: "This is a sample entry. Use it to see how a longer title and two authors look on the home page and in the topic list.",
    pdf: "",
    cover: ""
  }
];
