const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navItems = [...document.querySelectorAll('.nav-links a:not(.nav-cta)')];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
/* =========================================================
   SERVICE DETAILS
   ========================================================= */

const serviceData = {

infrastructure: {
  title: "IT Infrastructure",
  intro:
    "Reliable IT infrastructure solutions designed to keep business environments stable, secure, and scalable.",
  services: [
    {
      title: "Server Deployment & Management",
      description:
        "Server deployment, configuration and ongoing management for reliable business operations."
    },
    {
      title: "Windows / Linux Administration",
      description:
        "Administration and support for Windows and Linux server environments."
    },
    {
      title: "Virtualization Solutions",
      description:
        "Virtualization solutions designed to improve resource utilization, flexibility and scalability."
    },
    {
      title: "Infrastructure Monitoring",
      description:
        "Monitor infrastructure performance and availability to identify issues and maintain stable operations."
    },
    {
      title: "Backup & Recovery",
      description:
        "Backup and recovery solutions designed to protect business data and support operational continuity."
    },
    {
      title: "Hardware Installation & Support",
      description:
        "Hardware installation, configuration and technical support for IT infrastructure environments."
    },
    {
      title: "IT Infrastructure Assessment",
      description:
        "Assess existing IT infrastructure to identify improvement opportunities, risks and operational requirements."
    },
    {
      title: "Troubleshooting & Maintenance",
      description:
        "Technical troubleshooting and maintenance to keep IT infrastructure reliable and operational."
    }
  ]
},


  software: {
  title: "Software Development",
  intro:
    "Custom software solutions focused on business-oriented applications, internal tools, automation and operational efficiency.",
  services: [
    {
      title: "Custom Business Applications",
      description:
        "Develop custom applications designed around specific business requirements and operational processes."
    },
    {
      title: "Web Application Development",
      description:
        "Develop responsive web applications for business operations, internal users and customers."
    },
    {
      title: "Internal Tools & Dashboards",
      description:
        "Build internal tools and dashboards to improve visibility, reporting and operational efficiency."
    },
    {
      title: "API Development & Integration",
      description:
        "Develop and integrate APIs to connect applications, systems and business processes."
    },
    {
      title: "Database-Driven Applications",
      description:
        "Develop applications that use structured business data to support operational requirements."
    },
    {
      title: "Automation Software",
      description:
        "Develop software solutions that automate repetitive tasks and improve business workflows."
    },
    {
      title: "Application Maintenance & Support",
      description:
        "Provide ongoing application maintenance, troubleshooting and technical support."
    },
    {
      title: "Existing Application Enhancement",
      description:
        "Enhance existing applications with new features, improvements and required modifications."
    }
  ]
},

  cloud: {
  title: "Cloud Solutions",
  intro:
    "Scalable cloud solutions that help businesses modernize infrastructure, improve availability, and manage IT efficiently.",
  services: [
    {
      title: "Cloud Infrastructure Setup",
      description:
        "Set up cloud infrastructure based on business requirements, workload needs and scalability objectives."
    },
    {
      title: "Cloud Migration",
      description:
        "Plan and execute cloud migrations with focus on reliability, security and minimal operational disruption."
    },
    {
      title: "Cloud Server Deployment",
      description:
        "Deploy and configure cloud-based servers to support business applications and workloads."
    },
    {
      title: "Cloud Monitoring & Management",
      description:
        "Monitor and manage cloud environments to maintain performance, availability and operational visibility."
    },
    {
      title: "Cloud Backup & Disaster Recovery",
      description:
        "Implement cloud-based backup and disaster recovery solutions to protect business data and support continuity."
    },
    {
      title: "Hybrid Cloud Solutions",
      description:
        "Design and support hybrid cloud environments connecting on-premises infrastructure with cloud resources."
    },
    {
      title: "Cloud Security & Access Management",
      description:
        "Support cloud security controls and access management to help protect systems and business resources."
    },
    {
      title: "Cloud Optimization & Support",
      description:
        "Optimize cloud environments for efficient resource utilization, performance and ongoing operational support."
    }
  ]
},

  datacenter: {
  title: "Data Center Solutions",
  intro:
    "Reliable data center solutions designed to support secure, resilient, and highly available IT infrastructure.",
  services: [
    {
      title: "Data Center Infrastructure Deployment",
      description:
        "Deploy data center infrastructure based on availability, performance and business requirements."
    },
    {
      title: "Server & Rack Installation",
      description:
        "Install and configure servers, racks and related data center infrastructure."
    },
    {
      title: "Data Center Migration",
      description:
        "Plan and execute data center migrations with focus on reliability, coordination and minimal disruption."
    },
    {
      title: "Storage Infrastructure Solutions",
      description:
        "Provide storage infrastructure solutions designed around capacity, performance and data availability."
    },
    {
      title: "Data Center Monitoring",
      description:
        "Monitor data center infrastructure health, performance and availability to maintain stable operations."
    },
    {
      title: "Hardware Maintenance & Support",
      description:
        "Provide hardware maintenance and technical support for data center infrastructure."
    },
    {
      title: "Data Center Optimization",
      description:
        "Identify opportunities to improve infrastructure utilization, performance and operational efficiency."
    },
    {
      title: "Backup & Disaster Recovery Solutions",
      description:
        "Implement backup and disaster recovery solutions to protect critical systems and support business continuity."
    }
  ]
},

  automation: {
  title: "Automation",
  intro:
    "Practical automation solutions that reduce repetitive work, improve operational efficiency, and provide better visibility across IT and business processes.",
  services: [
    {
      title: "IT Operations Automation",
      description:
        "Automate repetitive IT operations to reduce manual effort and improve operational consistency."
    },
    {
      title: "Infrastructure Monitoring & Alerting",
      description:
        "Automate infrastructure monitoring and alerting to improve visibility and identify issues quickly."
    },
    {
      title: "Automated Reporting",
      description:
        "Automate recurring reports and data collection to save time and improve reporting efficiency."
    },
    {
      title: "Server & Storage Automation",
      description:
        "Automate server and storage tasks to improve operational efficiency and reduce repetitive manual work."
    },
    {
      title: "Network Automation",
      description:
        "Automate network operations and repetitive tasks to improve consistency and operational efficiency."
    },
    {
      title: "Data Collection & Dashboard Automation",
      description:
        "Automate data collection and dashboard updates to provide better operational visibility."
    },
    {
      title: "Business Process Automation",
      description:
        "Automate repetitive business processes to reduce manual effort and streamline workflows."
    },
    {
      title: "Custom Scripts & Automation Tools",
      description:
        "Develop custom scripts and automation tools based on specific operational requirements."
    },
    {
      title: "Workflow Automation",
      description:
        "Create automated workflows that connect operational activities and reduce unnecessary manual steps."
    },
    {
      title: "Scheduled Task Automation",
      description:
        "Automate scheduled and recurring tasks to improve consistency and reduce manual intervention."
    }
  ]
},

  network: {
    title: "Network & Storage Solutions",

    intro:
      "Robust network and storage solutions designed to provide reliable connectivity, scalable capacity and dependable data access.",

    services: [
      {
        title: "Network Infrastructure",
        description:
          "Design and support reliable network environments for secure and efficient business connectivity."
      },
      {
        title: "Network Monitoring",
        description:
          "Monitor network performance and availability to improve visibility and identify connectivity issues."
      },
      {
        title: "Storage Solutions",
        description:
          "Implement scalable storage solutions designed around capacity, performance and data availability requirements."
      },
      {
        title: "Storage Management",
        description:
          "Manage storage environments to improve utilization, performance and operational reliability."
      },
      {
        title: "Network & Storage Support",
        description:
          "Provide ongoing technical support for network and storage environments to maintain reliable access to business resources."
      }
    ]
  },
  telecom: {
  title: "Telecom & Business Process Solutions",
  intro: "Reliable voice, non-voice, chat, email, telecom and back-office solutions designed to improve customer experience and operational efficiency.",
  services: [
    {
      title: "Voice Support",
      description: "Inbound and outbound customer support, query handling, assistance and issue resolution."
    },
    {
      title: "Non-Voice Support",
      description: "Back-office operations, data processing, validation, documentation and ticket processing."
    },
    {
      title: "Chat Support",
      description: "Live chat support for customer queries, service assistance and multi-channel communication."
    },
    {
      title: "Email Support",
      description: "Customer email handling, request management, complaint handling and follow-up operations."
    },
    {
      title: "Telecom Operations",
      description: "Order management, service activation, provisioning, telecom ticket processing and incident coordination."
    },
    {
      title: "Technical Support",
      description: "L1 technical support, troubleshooting, issue resolution, ticket handling and escalation coordination."
    },
    {
      title: "Back-Office Operations",
      description: "Data entry, verification, quality checks, documentation and workflow support."
    }
  ]
}
};


/* =========================================================
   SERVICE MODAL LOGIC
   ========================================================= */

const serviceModal = document.getElementById("serviceModal");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalIntro = document.getElementById("serviceModalIntro");
const serviceDetailList = document.getElementById("serviceDetailList");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceQuoteButton = document.getElementById("serviceQuoteButton");

const serviceCards = document.querySelectorAll(".service-card");
const enquiryModal = document.getElementById("enquiryModal");
const enquiryModalClose = document.getElementById("enquiryModalClose");
const enquiryModalOverlay = enquiryModal?.querySelector(".enquiry-modal-overlay");
const enquiryForm = document.getElementById("enquiryForm");
const enquiryService = document.getElementById("enquiryService");


/* =========================================================
   OPEN SERVICE MODAL
   ========================================================= */

function openServiceModal(serviceKey) {

  const service = serviceData[serviceKey];

  if (!service) {
    console.error("Service not found:", serviceKey);
    return;
  }

  /* Make sure modal elements exist */

  if (
    !serviceModal ||
    !serviceModalTitle ||
    !serviceModalIntro ||
    !serviceDetailList ||
    !serviceQuoteButton
  ) {
    console.error(
      "Service modal HTML elements are missing."
    );
    return;
  }


  /* -------------------------------------------------------
     SERVICE TITLE
     ------------------------------------------------------- */

  serviceModalTitle.textContent = service.title;


  /* -------------------------------------------------------
     SERVICE INTRODUCTION
     ------------------------------------------------------- */

  serviceModalIntro.textContent = service.intro;


  /* -------------------------------------------------------
     CLEAR OLD SERVICE DETAILS
     ------------------------------------------------------- */

  serviceDetailList.innerHTML = "";


  /* -------------------------------------------------------
     ADD THE 5 SERVICES
     ------------------------------------------------------- */

  service.services.forEach((item, index) => {

    const serviceItem = document.createElement("div");

    serviceItem.className = "service-detail-item";

    serviceItem.innerHTML = `
      <div class="service-detail-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="service-detail-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    serviceDetailList.appendChild(serviceItem);

  });


  /* -------------------------------------------------------
     REQUEST A QUOTE BUTTON
     ------------------------------------------------------- */

  const subject = encodeURIComponent(
    "Request for Quote - " + service.title
  );

  const body = encodeURIComponent(
    "Hello Adibex Technologies,\n\n" +
    "I am interested in your " +
    service.title +
    " services.\n\n" +
    "Please contact me to discuss my requirements and provide a quotation.\n\n" +
    "Thank you."
  );

  serviceQuoteButton.href =
    "mailto:info@adibextechnologies.com" +
    "?subject=" +
    subject +
    "&body=" +
    body;


  /* -------------------------------------------------------
     OPEN MODAL
     ------------------------------------------------------- */

  serviceModal.classList.add("active");

  serviceModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "service-modal-open"
  );


  /* Prevent page scrolling */

  document.body.style.overflow = "hidden";


  /* Move keyboard focus to close button */

  if (serviceModalClose) {
    serviceModalClose.focus();
  }

}


/* =========================================================
   CLOSE SERVICE MODAL
   ========================================================= */

function closeServiceModal() {

  if (!serviceModal) {
    return;
  }

  serviceModal.classList.remove("active");

  serviceModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "service-modal-open"
  );

  document.body.style.overflow = "";

}


/* =========================================================
   SERVICE CARD CLICK
   ========================================================= */

serviceCards.forEach((card) => {

  card.addEventListener("click", () => {

    const serviceKey =
      card.getAttribute("data-service");

    openServiceModal(serviceKey);

  });


  /* -------------------------------------------------------
     KEYBOARD ACCESSIBILITY
     ------------------------------------------------------- */

  card.addEventListener("keydown", (event) => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      const serviceKey =
        card.getAttribute("data-service");

      openServiceModal(serviceKey);

    }

  });

});


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

if (serviceModalClose) {

  serviceModalClose.addEventListener(
    "click",
    closeServiceModal
  );

}


/* =========================================================
   CLICK OUTSIDE MODAL
   ========================================================= */

if (serviceModal) {

  serviceModal.addEventListener(
    "click",
    (event) => {

      if (
        event.target.classList.contains(
          "service-modal-overlay"
        )
      ) {

        closeServiceModal();

      }

    }
  );

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      serviceModal &&
      serviceModal.classList.contains("active")
    ) {

      closeServiceModal();

    }

  }
);
/* =========================================================
   ENQUIRY FORM MODAL
   ========================================================= */

function openEnquiryModal(serviceName = "") {

  if (!enquiryModal) return;

  if (enquiryService) {
    enquiryService.value = serviceName || "";
  }

  enquiryModal.classList.add("active");
  enquiryModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    document.getElementById("enquiryName")?.focus();
  }, 100);
}


function closeEnquiryModal() {

  if (!enquiryModal) return;

  enquiryModal.classList.remove("active");
  enquiryModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


/* CLOSE BUTTON */

enquiryModalClose?.addEventListener("click", closeEnquiryModal);


/* CLICK OUTSIDE */

enquiryModalOverlay?.addEventListener("click", closeEnquiryModal);


/* ESCAPE KEY */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape" && enquiryModal?.classList.contains("active")) {
    closeEnquiryModal();
  }

});


/* =========================================================
   CONTACT / QUOTE BUTTONS
   ========================================================= */

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    openEnquiryModal();

  });

});
