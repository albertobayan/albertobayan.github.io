const links = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/albertobayan",
  email: "mailto:tuemail@ejemplo.com",

  cvSpanish: "cv-alberto-bayan-es.pdf",
  cvEnglish: "cv-alberto-bayan-en.pdf",

  opsguard: "https://github.com/albertobayan/OpsGuard-Cloud",
  clusterx: "https://github.com/albertobayan/ClusterX",
  windowsServerLab: "https://github.com/albertobayan/Windows-Server-Lab"
};

const chatArea = document.getElementById("chatArea");
const buttons = document.querySelectorAll(".action-btn");

function scrollChatToBottom() {
  chatArea.scrollTo({
    top: chatArea.scrollHeight,
    behavior: "smooth"
  });
}

function addUserMessage(text) {
  const message = document.createElement("div");

  message.className = "message user-message";
  message.textContent = text;

  chatArea.appendChild(message);
  scrollChatToBottom();
}

function addBotMessage(html) {
  const message = document.createElement("div");

  message.className = "message bot-message";
  message.innerHTML = html;

  chatArea.appendChild(message);
  scrollChatToBottom();
}

function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function showAbout() {
  addUserMessage("Sobre mí");

  addBotMessage(`
    <h3>Sobre mí</h3>

    <p>
      Soy <strong>Alberto Bayán</strong>, Técnico Superior en Administración
      de Sistemas Informáticos en Red (ASIR).
    </p>

    <p>
      Busco una oportunidad junior en <strong>soporte IT, sistemas, redes
      o ciberseguridad</strong>, donde pueda seguir creciendo y aportar una
      forma de trabajar práctica, responsable y orientada a resolver problemas.
    </p>

    <p>
      Tengo experiencia y formación en Windows, Active Directory, Linux,
      TCP/IP, DNS, DHCP, virtualización, Docker, Azure y seguridad.
    </p>
  `);
}

function showCV() {
  addUserMessage("Mi CV");

  addBotMessage(`
    <h3>Currículum</h3>

    <p>Puedes abrir mi CV en español o en inglés:</p>

    <div class="project-list">
      <button class="project-button" onclick="openLink('${links.cvSpanish}')">
        <strong>CV en español ↗</strong>
        <span>Perfil técnico, formación, experiencia y proyectos.</span>
      </button>

      <button class="project-button" onclick="openLink('${links.cvEnglish}')">
        <strong>CV in English ↗</strong>
        <span>English version of my technical profile and experience.</span>
      </button>
    </div>

    <p style="margin-top: 12px; color: #9fb9aa; font-size: 0.86rem;">
      Sube los PDF al repositorio con esos nombres para que los enlaces funcionen.
    </p>
  `);
}

function showProjects() {
  addUserMessage("Mis proyectos");

  addBotMessage(`
    <h3>Proyectos destacados</h3>

    <p>
      Estos proyectos reflejan mi forma de aprender: construir infraestructuras,
      documentarlas, proteger accesos y entender cada parte del entorno.
    </p>

    <div class="project-list">
      <button class="project-button" onclick="showProjectDetails('opsguard')">
        <strong>OpsGuard Cloud ↗</strong>
        <span>Gestión de incidencias, auditoría y monitorización.</span>
      </button>

      <button class="project-button" onclick="showProjectDetails('clusterx')">
        <strong>ClusterX ↗</strong>
        <span>Alta disponibilidad, Galera, HAProxy y Keepalived.</span>
      </button>

      <button class="project-button" onclick="showProjectDetails('windows')">
        <strong>Windows Server Lab ↗</strong>
        <span>Active Directory, GPOs, permisos NTFS y redes.</span>
      </button>
    </div>
  `);
}

function showProjectDetails(project) {
  const projects = {
    opsguard: {
      name: "OpsGuard Cloud",
      url: links.opsguard,
      content: `
        <p>
          Plataforma de gestión de incidencias, auditoría de accesos
          y monitorización básica para simular un entorno moderno de operaciones.
        </p>

        <ul>
          <li>FastAPI, PostgreSQL, Docker y Nginx.</li>
          <li>Autenticación JWT y control de roles.</li>
          <li>Eventos de seguridad y registros de auditoría.</li>
          <li>Métricas con Prometheus y paneles de Grafana.</li>
        </ul>
      `
    },

    clusterx: {
      name: "ClusterX",
      url: links.clusterx,
      content: `
        <p>
          Proyecto de alta disponibilidad centrado en replicación,
          balanceo de carga y tolerancia a fallos.
        </p>

        <ul>
          <li>Cluster MariaDB Galera multi-master.</li>
          <li>HAProxy para balanceo TCP.</li>
          <li>Keepalived y VRRP para failover automático.</li>
          <li>Auditoría, alertas y copias de seguridad.</li>
        </ul>
      `
    },

    windows: {
      name: "Windows Server Lab",
      url: links.windowsServerLab,
      content: `
        <p>
          Laboratorio corporativo simulado con Windows Server y equipos
          cliente unidos a dominio.
        </p>

        <ul>
          <li>Active Directory, usuarios, grupos y OU.</li>
          <li>GPOs y mapeo automático de unidades.</li>
          <li>Permisos NTFS y recursos compartidos.</li>
          <li>DNS, gestión de equipos y soporte de incidencias.</li>
        </ul>
      `
    }
  };

  const selected = projects[project];

  addUserMessage(selected.name);

  addBotMessage(`
    <h3>${selected.name}</h3>

    ${selected.content}

    <div class="project-list">
      <button class="project-button" onclick="openLink('${selected.url}')">
        <strong>Ver repositorio en GitHub ↗</strong>
        <span>Abrir código, documentación y capturas del proyecto.</span>
      </button>
    </div>
  `);
}

function showContact() {
  addUserMessage("Contacto");

  addBotMessage(`
    <h3>Contacto y enlaces</h3>

    <p>
      Estoy disponible para oportunidades junior de soporte IT,
      sistemas, redes y ciberseguridad.
    </p>

    <div class="project-list">
      <button class="project-button" onclick="openLink('${links.linkedin}')">
        <strong>LinkedIn ↗</strong>
        <span>Conecta conmigo y revisa mi perfil profesional.</span>
      </button>

      <button class="project-button" onclick="openLink('${links.github}')">
        <strong>GitHub ↗</strong>
        <span>Explora mis repositorios y proyectos técnicos.</span>
      </button>

      <button class="project-button" onclick="window.location.href='${links.email}'">
        <strong>Email ↗</strong>
        <span>Contacta conmigo directamente.</span>
      </button>
    </div>
  `);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "about") {
      showAbout();
    }

    if (action === "cv") {
      showCV();
    }

    if (action === "projects") {
      showProjects();
    }

    if (action === "contact") {
      showContact();
    }
  });
});
