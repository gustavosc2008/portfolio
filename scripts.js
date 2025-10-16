// Botão "Voltar ao topo"
const topoBtn = document.getElementById("topoBtn");
window.onscroll = function () {
  topoBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topoBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Animação suave ao aparecer seção
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach((section) => observer.observe(section));

// Efeito de digitação no título + scroll reset
window.onload = function () {
  window.scrollTo(0, 0); // Garante que a página comece no topo

  const texto = "Bem-vindo ao meu Portfólio";
  let i = 0;
  function digitar() {
    if (i < texto.length) {
      document.getElementById("titulo-boasvindas").innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    }
  }
  digitar();
};
