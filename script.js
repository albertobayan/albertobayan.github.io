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
      Estoy orientado a oportunidades junior de <strong>soporte IT, helpdesk,
      sistemas, redes y ciberseguridad</strong>. Me interesa especialmente
      entender cómo funciona una infraestructura completa y resolver incidencias
      de forma clara, práctica y ordenada.
    </p>

    <p>
      Trabajo con Windows, Active Directory, Linux, redes TCP/IP, DNS, DHCP,
      virtualización, Docker y fundamentos de cloud y seguridad.
    </p>
  `);
}

function showCV() {
  addUserMessage("Mi CV");

  addBotMessage(`
    <h3>Currículum</h3>

    <p>
      Puedes abrir mi CV en español o en inglés:
    </p>

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
      Sube los dos PDF al repositorio con los nombres indicados para activar estos enlaces.
    </p>
  `);
}

function showProjects() {
  addUserMessage("Mis proyectos");

  addBotMessage(`
    <h3>Proyectos destacados</h3>

    <p>
      Estos proyectos reflejan lo que me gusta hacer: montar entornos,
      documentarlos, asegurar accesos y entender el funcionamiento completo
      de los sistemas.
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
  const data = {
    opsguard: {
      name: "OpsGuard Cloud",
      url: links.opsguard,
      text: `
        <p>
          Plataforma de gestión de incidencias, auditoría de accesos
          y monitorización básica construida para practicar un entorno
          de operaciones moderno.
        </p>

        <ul>
          <li>FastAPI, PostgreSQL, Docker y Nginx.</li>
          <li>Autenticación JWT y control de roles.</li>
          <li>Registro de eventos de seguridad y auditoría.</li>
          <li>Métricas con Prometheus y paneles de Grafana.</li>
        </ul>
      `
    },

    clusterx: {
      name: "ClusterX",
      url: links.clusterx,
      text: `
        <p>
          Proyecto de alta disponibilidad centrado en una infraestructura
          con replicación, balanceo y tolerancia a fallos.
        </p>

        <ul>
          <li>Cluster MariaDB Galera multi-master.</li>
          <li>HAProxy para balanceo TCP.</li>
          <li>Keepalived y VRRP para failover automático.</li>
          <li>Portal de auditoría, alertas y copias de seguridad.</li>
        </ul>
      `
    },

    windows: {
      name: "Windows Server Lab",
      url: links.windowsServerLab,
      text: `
        <p>
          Laboratorio de empresa simulado con Windows Server y clientes
          unidos a dominio para practicar administración real de sistemas.
        </p>

        <ul>
          <li>Active Directory, usuarios, grupos y unidades organizativas.</li>
          <li>GPOs para mapeo de unidades y configuración corporativa.</li>
          <li>Permisos NTFS y recursos compartidos por departamentos.</li>
          <li>DNS, gestión de equipos y resolución de incidencias.</li>
        </ul>
      `
    }
  };

  const selected = data[project];

  addUserMessage(selected.name);

  addBotMessage(`
    <h3>${selected.name}</h3>

    ${selected.text}

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
      Estoy disponible para oportunidades junior en soporte IT,
      sistemas, redes o ciberseguridad.
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
