import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const app =
  document.querySelector<HTMLDivElement>("#app") ??
  document.body.appendChild(document.createElement("div"));

app.id = "app";

createRoot(app).render(
  createElement(
    "main",
    null,
    createElement("span", { className: "eyebrow" }, "Projeto inicial"),
    createElement("h1", null, "Low Ticket Sales Pages"),
    createElement(
      "p",
      null,
      "Ambiente preparado para criar, personalizar e testar páginas de vendas de produtos digitais."
    ),
    createElement(
      "span",
      { className: "status" },
      "React + Vite + TypeScript prontos"
    )
  )
);
