import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error('Elemento "#app" não encontrado.');
}

app.innerHTML = `
  <main>
    <span class="eyebrow">Projeto inicial</span>
    <h1>Low Ticket Sales Pages</h1>
    <p>
      Ambiente preparado para criar, personalizar e testar páginas de vendas
      de produtos digitais.
    </p>
    <span class="status">Estrutura Vite + TypeScript pronta</span>
  </main>
`;
