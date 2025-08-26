// ============================
// DADOS DOS PROJETOS
// ============================
const projects = [
  {
    id: 1,
    title: "Clean Up!",
    shortDesc: "A short 3D point and click game about cleaning up a messy room.",
    longDesc: "Clean Up! Is a 3D relaxing point and click game where you're tasked with cleaning up a messy room. Use your skills to tidy up and organize the space based on the given messy objects in the scenery.",
    tech: ["Unity", "C#", "Blender"],
    responsibilities: [
      "3D modelling & texturing",
      "Level design",
      "3D programming"
    ],
    achievements: [
      "Project finished in 5 days",
      "Relaxing gameplay",
      "Immersive 3D environment"
    ],
    duration: "5 Days",
    team: "Solo",
    platform: "Windows",
    role: "Programmer",
    category: "3D Game",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/Pa81wD2ywVU" },
      { type: "image", src: "images/projeto1.jpg" }
    ]
  },
  {
    id: 2,
    title: "Clean Up!",
    shortDesc: "A small point",
    longDesc: "Descrição detalhada do projeto 2...",
    tech: ["Unity", "C#", "Multiplayer"],
    responsibilities: [
      "Desenvolver sistema de multiplayer",
      "Criar AI para inimigos",
      "Otimizar performance"
    ],
    achievements: [
      "Projeto finalizado antes do prazo",
      "Reconhecimento da equipe de QA",
      "Destaque na apresentação do cliente"
    ],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/Pa81wD2ywVU" },
      { type: "image", src: "images/projeto1.jpg" }
    ]
  },
  {
    id: 3,
    title: "Clean Up!",
    shortDesc: "A small point",
    longDesc: "Descrição detalhada do projeto 3...",
    tech: ["Unity", "C#", "Multiplayer"],
    responsibilities: [
      "Desenvolver sistema de multiplayer",
      "Criar AI para inimigos",
      "Otimizar performance"
    ],
    achievements: [
      "Projeto finalizado antes do prazo",
      "Reconhecimento da equipe de QA",
      "Destaque na apresentação do cliente"
    ],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/Pa81wD2ywVU" },
      { type: "image", src: "images/projeto1.jpg" }
    ]
  },
  {
    id: 4,
    title: "Clean Up!",
    shortDesc: "A small point",
    longDesc: "Descrição detalhada do projeto 4...",
    tech: ["Unity", "C#", "Multiplayer"],
    responsibilities: [
      "Desenvolver sistema de multiplayer",
      "Criar AI para inimigos",
      "Otimizar performance"
    ],
    achievements: [
      "Projeto finalizado antes do prazo",
      "Reconhecimento da equipe de QA",
      "Destaque na apresentação do cliente"
    ],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/Pa81wD2ywVU" },
      { type: "image", src: "images/projeto1.jpg" }
    ]
  },
  {
    id: 5,
    title: "Clean Up!",
    shortDesc: "A small point",
    longDesc: "Descrição detalhada do projeto 5...",
    tech: ["Unity", "C#", "Multiplayer"],
    responsibilities: [
      "Desenvolver sistema de multiplayer",
      "Criar AI para inimigos",
      "Otimizar performance"
    ],
    achievements: [
      "Projeto finalizado antes do prazo",
      "Reconhecimento da equipe de QA",
      "Destaque na apresentação do cliente"
    ],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/Pa81wD2ywVU" },
      { type: "image", src: "images/projeto1.jpg" }
    ]
  },
  {
    id: 6,
    title: "Clean Up!",
    shortDesc: "A small point",
    longDesc: "Descrição detalhada do projeto 6...",
    tech: ["Unity", "C#", "Multiplayer"],
    responsibilities: [
      "Desenvolver sistema de multiplayer",
      "Criar AI para inimigos",
      "Otimizar performance"
    ],
    achievements: [
      "Projeto finalizado antes do prazo",
      "Reconhecimento da equipe de QA",
      "Destaque na apresentação do cliente"
    ],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/Pa81wD2ywVU" },
      { type: "image", src: "images/projeto1.jpg" }
    ]
  }
];

// ============================
// VARIÁVEIS GLOBAIS
// ============================
let currentProject = null;
let currentSlide = 0;

// ============================
// ABRIR MODAL
// ============================
function openModal(id) {
  currentProject = projects.find(p => p.id === id);
  if (!currentProject) return;

  const modal = document.getElementById("modal");
  modal.classList.add("active");
  document.body.classList.add("modal-open");

  // Textos principais
  document.getElementById("modal-title").innerText = currentProject.title;
  document.getElementById("modal-short").innerText = currentProject.shortDesc;
  document.getElementById("modal-desc").innerText = currentProject.longDesc;

  // Details left
document.querySelector("#modal-duration .detail-value").innerText = currentProject.duration;
document.querySelector("#modal-team .detail-value").innerText = currentProject.team;
document.querySelector("#modal-platform .detail-value").innerText = currentProject.platform;

// Details right
document.querySelector("#modal-role .detail-value").innerText = currentProject.role;
document.querySelector("#modal-category .detail-value").innerText = currentProject.category;

document.getElementById("modal-desc").innerText = currentProject.longDesc;

// Tecnologias
const techContainer = document.querySelector(".modal .modal-tags");
techContainer.innerHTML = "";
currentProject.tech.forEach(tech => {
  const span = document.createElement("span");
  span.className = "tag";
  span.innerText = tech;
  techContainer.appendChild(span);
});

// Responsabilidades
const respContainer = document.querySelector(".modal-responsabilities");
respContainer.innerHTML = "";
const ulResp = document.createElement("ul");
currentProject.responsibilities.forEach(item => {
  const li = document.createElement("li");
  li.innerText = item;
  ulResp.appendChild(li);
});
respContainer.appendChild(ulResp);

// Conquistas
const achContainer = document.querySelector(".modal-achievements");
achContainer.innerHTML = "";
const ulAch = document.createElement("ul");
currentProject.achievements.forEach(item => {
  const li = document.createElement("li");
  li.innerText = item;
  ulAch.appendChild(li);
});
achContainer.appendChild(ulAch);

  renderCarousel();
  showSlide(0);
}


// ============================
// FECHAR MODAL
// ============================
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");

  // Para qualquer vídeo que estiver tocando
  const iframes = document.querySelectorAll(".carousel-slide iframe");
  iframes.forEach(iframe => {
    const src = iframe.src;
    iframe.src = src; // reseta para parar vídeo
  });
}

function visitProject(event, url) {
  event.stopPropagation(); // impede que o card abra o modal
  window.open(url, '_blank'); // abre o site em uma nova aba
}

// Fechar ao clicar fora do conteúdo
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if(event.target === modal) closeModal();
}

// ============================
// CARROSSEL
// ============================
function renderCarousel() {
  const inner = document.getElementById("carousel-inner");
  const thumbs = document.getElementById("carousel-thumbs");
  inner.innerHTML = '';
  thumbs.innerHTML = '';

  currentProject.media.forEach((item, index) => {
    // Slide
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    slide.style.display = "none"; // inicialmente escondido

    if(item.type === "video") {
      const iframe = document.createElement("iframe");
      iframe.src = item.src;
      iframe.width = "100%";
      iframe.height = "400"; // altura igual para todos os slides
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      slide.appendChild(iframe);
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.style.width = "100%";
      img.style.height = "400px"; // altura igual
      img.style.objectFit = "cover";
      slide.appendChild(img);
    }

    inner.appendChild(slide);

    // Miniatura
    const thumb = document.createElement('img');
    if(item.type === 'video') {
      const ytId = item.src.split('/embed/')[1];
      thumb.src = `https://img.youtube.com/vi/${ytId}/0.jpg`;
    } else {
      thumb.src = item.src;
    }
    thumb.classList.add("carousel-thumb");
    thumb.onclick = () => showSlide(index);
    thumbs.appendChild(thumb);
  });
}

// Mostrar slide específico
function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  const thumbs = document.querySelectorAll(".carousel-thumb");
  if(index < 0) index = slides.length - 1;
  if(index >= slides.length) index = 0;

  // Para vídeo do slide anterior
  const prevSlideEl = slides[currentSlide];
  if(prevSlideEl) {
    const iframe = prevSlideEl.querySelector("iframe");
    if(iframe) {
      const src = iframe.src;
      iframe.src = src; // reseta vídeo
    }
  }

  currentSlide = index;

  slides.forEach((s, i) => s.style.display = i === currentSlide ? "block" : "none");
  thumbs.forEach((t, i) => t.classList.toggle("active-thumb", i === currentSlide));
}

// Botões
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function scrollToProjects() {
  const projectsSection = document.querySelector(".projects-section");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}
