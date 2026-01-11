/**
 * UM SMART TECHNOLOGIES LTD — minimal storefront
 *
 * Goals (per request):
 * - Samsung + Nokia each as a horizontal row (swipe left/right)
 * - Real phone photos (official CDN links; optional local download later)
 * - Simple contact: Email + WhatsApp only
 */

const COMPANY = {
  name: "UM SMART TECHNOLOGIES LTD",
  salesEmail: "umsmarttechnologies@outlook.com",
  // Use international format without "+" and spaces for wa.me (example below).
  // User provided: 00447771122999  -> wa.me needs country code without leading 00.
  whatsappE164: "447771122999",
  whatsappDisplay: "+44 777 1122 999",
};

/**
 * Curated SKUs (not full).
 * You can add/remove items here.
 *
 * Images:
 * - Samsung images pulled from Samsung US all-phones page network requests.
 * - Nokia images pulled from HMD all-phones page (Contentful CDN).
 */
const CATALOG = {
  Samsung: [
    {
      model: "Galaxy Z Fold7",
      imageUrl:
        "assets/phones/samsung-galaxy-z-fold7.jpg",
    },
    {
      model: "Galaxy Z Flip7",
      imageUrl:
        "assets/phones/samsung-galaxy-z-flip7.jpg",
    },
    {
      model: "Galaxy S25 Ultra",
      imageUrl:
        "assets/phones/samsung-galaxy-s25-ultra.png",
    },
    {
      model: "Galaxy S25 FE",
      imageUrl:
        "assets/phones/samsung-galaxy-s25-fe.png",
    },
    {
      model: "Galaxy A56 5G",
      imageUrl:
        "assets/phones/samsung-galaxy-a56-5g.jpg",
    },
  ],
  Nokia: [
    {
      model: "XR21",
      imageUrl:
        "assets/phones/nokia-xr21.webp",
    },
    {
      model: "2660 Flip 4G",
      imageUrl:
        "assets/phones/nokia-2660-flip-4g.webp",
    },
    {
      model: "8210 4G",
      imageUrl:
        "assets/phones/nokia-8210-4g.webp",
    },
    {
      model: "6310 (2024)",
      imageUrl:
        "assets/phones/nokia-6310-2024.webp",
    },
    {
      model: "3210 4G",
      imageUrl:
        "assets/phones/nokia-3210-4g.webp",
    },
  ],
};

function $(id) {
  return document.getElementById(id);
}

function buildMailto({ email, subject, body }) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

function quoteMailtoForProduct(product) {
  const subject = `Quote request — ${product.brand} ${product.model}`;
  const body = [
    `Hello ${COMPANY.name} Sales,`,
    "",
    "Please quote the following:",
    `- Model: ${product.brand} ${product.model}`,
    "- Quantity: ",
    "- Destination/Region: ",
    "",
    "Thanks,",
    "",
  ].join("\n");

  return buildMailto({ email: COMPANY.salesEmail, subject, body });
}

function buildWhatsAppLink(product) {
  let n = String(COMPANY.whatsappE164 || "").replace(/[^\d]/g, "");
  if (n.startsWith("00")) n = n.slice(2);
  n = n.replace(/^0+/, "");
  const lines = [
    `Hello ${COMPANY.name}, I’d like a quote.`,
    product ? `Model: ${product.brand} ${product.model}` : "",
    "Quantity: ",
    "Destination/Region: ",
  ].filter(Boolean);
  const text = lines.join("\n");
  if (!n) return "#";
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (typeof text === "string") node.textContent = text;
  return node;
}

function buildProduct(brand, entry) {
  return {
    id: `${brand}-${entry.model}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    brand,
    model: entry.model,
    imageUrl: entry.imageUrl,
  };
}

function buildCard(product) {
  const btn = el("button", "p-card");
  btn.type = "button";
  btn.setAttribute("aria-label", `${product.brand} ${product.model} — get quote`);
  btn.addEventListener("click", () => openQuoteModal(product));

  const media = el("div", "p-media");
  const img = el("img", "p-img");
  img.loading = "lazy";
  img.decoding = "async";
  img.alt = `${product.brand} ${product.model}`;
  img.src = product.imageUrl || "";
  media.appendChild(img);

  const meta = el("div", "p-meta");
  const brand = el("div", "p-brand", product.brand);
  meta.appendChild(brand);

  const name = el("h3", "p-name", product.model);
  const cta = el("div", "p-cta", "Get quote →");

  btn.append(media, meta, name, cta);
  return btn;
}

function renderRow(containerId, brand) {
  const root = $(containerId);
  if (!root) return;

  const items = (CATALOG[brand] || []).map((e) => buildProduct(brand, e));
  root.innerHTML = "";

  if (items.length === 0) {
    root.appendChild(el("div", "empty", "No products configured."));
    return;
  }

  items.forEach((p) => root.appendChild(buildCard(p)));
}

function openQuoteModal(product) {
  const dialog = $("quoteModal");
  if (!dialog) return;

  const title = $("quoteTitle");
  const sub = $("quoteSub");
  const emailLink = $("quoteEmailLink");
  const emailValue = $("quoteEmailValue");
  const waLink = $("quoteWhatsAppLink");
  const waValue = $("quoteWhatsAppValue");

  if (title) title.textContent = "Get a quote";
  if (sub) {
    sub.textContent = product
      ? `For: ${product.brand} ${product.model}`
      : "Contact us via email or WhatsApp.";
  }

  if (emailValue) emailValue.textContent = COMPANY.salesEmail;
  if (waValue) waValue.textContent = COMPANY.whatsappDisplay || COMPANY.whatsappE164;

  if (emailLink) {
    emailLink.href = product ? quoteMailtoForProduct(product) : buildMailto({ email: COMPANY.salesEmail });
  }
  if (waLink) {
    waLink.href = buildWhatsAppLink(product);
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    // Fallback for browsers without <dialog>
    window.location.hash = "#contact";
  }
}

function wireContact() {
  const emailLink = $("emailLink");
  const whatsappLink = $("whatsappLink");
  const whatsappValue = $("whatsappValue");

  const subject = "Quote request — model — qty";
  const body = [
    `Hello ${COMPANY.name} Sales,`,
    "",
    "Please quote the following:",
    "- Models:",
    "- Quantities:",
    "- Destination/Region:",
    "",
    "Thanks,",
    "",
  ].join("\n");

  const mailto = buildMailto({ email: COMPANY.salesEmail, subject, body });
  if (emailLink) {
    emailLink.href = mailto;
    const value = emailLink.querySelector(".contact-pill-value");
    if (value) value.textContent = COMPANY.salesEmail;
  }

  if (whatsappValue) whatsappValue.textContent = COMPANY.whatsappDisplay || COMPANY.whatsappE164;
  if (whatsappLink) whatsappLink.href = buildWhatsAppLink();
}

document.addEventListener("DOMContentLoaded", () => {
  wireContact();
  renderRow("samsungRow", "Samsung");
  renderRow("nokiaRow", "Nokia");

  const y = $("copyrightYear");
  if (y) y.textContent = String(new Date().getFullYear());
});

