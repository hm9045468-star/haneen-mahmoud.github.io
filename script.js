const projects = {
  brainalyze: {
    type: "01 — AI / COMPUTER VISION",
    title: "Brain Tumor Classification",
    description: "A deep learning project designed to classify brain MRI images into four categories and provide a practical AI-assisted analysis workflow.",
    tags: ["Python", "TensorFlow", "EfficientNetB3", "Transfer Learning"],
    details: "<strong>Model:</strong> EfficientNetB3 with a custom classification head.<br><br><strong>Classes:</strong> Glioma, Meningioma, Pituitary Tumor, No Tumor.<br><br><strong>Workflow:</strong> preprocessing → transfer learning → training → evaluation → prediction API.<br><br><strong>Web app — results page:</strong><br><a href=\"assets/brainalyze-results-ui.jpg\" target=\"_blank\"><img src=\"assets/brainalyze-results-ui.jpg\" alt=\"Brainalyze results page UI\" style=\"width:100%;max-height:420px;object-fit:cover;object-position:top;margin-top:10px;border:1px solid #ddd\"></a>"
  },
  superstore: {
    type: "02 — BUSINESS INTELLIGENCE",
    title: "Sales Performance Dashboard",
    description: "An interactive Power BI dashboard that summarizes sales performance with KPIs and slicers for date, payment method, region, and product category.",
    tags: ["Power BI", "DAX", "Data Visualization"],
    details: "<strong>KPIs:</strong> Total Revenue, Total Units Sold, Number of Transactions, Average Unit Price.<br><br><strong>Visuals:</strong> revenue by date, product category, and region; units sold by product; revenue share by payment method; units vs. revenue by category.<br><br><img src=\"assets/powerbi-sales-dashboard.png\" alt=\"Sales Performance Dashboard\" style=\"width:100%;margin-top:10px\">"
  },
  salesprofit: {
    type: "03 — BUSINESS INTELLIGENCE",
    title: "Sales & Profit Analysis",
    description: "A Power BI project built on a star-schema data model for analyzing sales and profit across time, customers, products, and locations.",
    tags: ["Power BI", "Data Modeling", "Star Schema"],
    details: "<strong>Model:</strong> a Fact table (cost, profit, unit cost, unit price) linked one-to-many to Dim_Date, Dim_Customer, Dim_Product, and a geography dimension.<br><br><img src=\"assets/sales-profit-data-model.png\" alt=\"Star schema data model\" style=\"width:100%;margin-top:10px\">"
  },
  customer: {
    type: "04 — DATA ANALYTICS",
    title: "Customer Behavior Analysis",
    description: "A customer analytics project focused on spending patterns, repeat purchases, order behavior, and trends over time.",
    tags: ["Power BI", "Excel", "DAX"],
    details: "<strong>Questions:</strong> Who are the highest-spending customers? Which customers purchase repeatedly? How does purchasing change over time?"
  },
  fundraising: {
    type: "05 — WEB DEVELOPMENT",
    title: "Fundraising Platform",
    description: "A Django and PostgreSQL application for managing fundraising projects with authentication, CRUD operations, search, and project images.",
    tags: ["Python", "Django", "PostgreSQL"],
    details: "<strong>Features:</strong> user authentication, project creation, editing, deletion, search, image management, and database-backed project ownership."
  }
};

const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const project = projects[link.dataset.project];
    document.getElementById("modalType").textContent = project.type;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;
    document.getElementById("modalTags").innerHTML = project.tags.map(t => `<span>${t}</span>`).join("");
    document.getElementById("modalDetails").innerHTML = project.details;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

const menu = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();
