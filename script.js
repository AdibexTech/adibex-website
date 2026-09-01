document.addEventListener("DOMContentLoaded", () => {

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
      "End-to-end IT infrastructure solutions designed to provide secure, reliable and high-performing technology environments for businesses.",

    services: [
      {
        title: "Infrastructure Design & Planning",
        description:
          "Design and plan reliable IT infrastructure based on business requirements, performance needs and future growth."
      },
      {
        title: "Server & Compute Solutions",
        description:
          "Deploy and manage server and compute environments designed for performance, reliability and operational efficiency."
      },
      {
        title: "Virtualization Solutions",
        description:
          "Implement virtualization technologies to improve resource utilization, scalability and infrastructure flexibility."
      },
      {
        title: "Infrastructure Monitoring",
        description:
          "Monitor infrastructure performance and availability to identify issues early and maintain reliable operations."
      },
      {
        title: "Infrastructure Support & Maintenance",
        description:
          "Provide ongoing technical support and maintenance to keep IT infrastructure stable, secure and operational."
      }
    ]
  },


  software: {
    title: "Software Development",

    intro:
      "Custom software solutions built around your business requirements, workflows and operational goals.",

    services: [
      {
        title: "Custom Application Development",
        description:
          "Build custom applications designed specifically around your organization's processes and requirements."
      },
      {
        title: "Web Application Development",
        description:
          "Develop responsive and scalable web applications that provide reliable access across modern devices."
      },
      {
        title: "Business Process Applications",
        description:
          "Create applications that simplify business workflows and improve operational efficiency."
      },
      {
        title: "Application Integration",
        description:
          "Connect applications and systems to improve information flow and reduce manual processes."
      },
      {
        title: "Application Maintenance",
        description:
          "Maintain and improve existing applications through enhancements, fixes and ongoing technical support."
      }
    ]
  },


  cloud: {
    title: "Cloud Solutions",

    intro:
      "Scalable, secure and cost-effective cloud solutions designed to improve business agility and simplify technology operations.",

    services: [
      {
        title: "Cloud Assessment & Planning",
        description:
          "Assess existing environments and develop a practical cloud strategy aligned with business requirements."
      },
      {
        title: "Cloud Migration",
        description:
          "Plan and execute workload migrations with focus on reliability, security and minimal operational disruption."
      },
      {
        title: "Cloud Infrastructure",
        description:
          "Design scalable cloud environments that support business applications, workloads and future growth."
      },
      {
        title: "Cloud Monitoring & Management",
        description:
          "Monitor cloud environments and help maintain performance, availability and operational visibility."
      },
      {
        title: "Cloud Optimization",
        description:
          "Improve cloud resource utilization and operational efficiency through practical optimization approaches."
      }
    ]
  },


  datacenter: {
    title: "Data Center Solutions",

    intro:
      "Modern data center solutions focused on performance, availability, reliability and efficient infrastructure operations.",

    services: [
      {
        title: "Data Center Design",
        description:
          "Design dependable data center environments based on availability, performance and business requirements."
      },
      {
        title: "Server Infrastructure",
        description:
          "Implement reliable server infrastructure designed to support critical business workloads."
      },
      {
        title: "Data Center Monitoring",
        description:
          "Monitor infrastructure health, performance and availability to help maintain stable operations."
      },
      {
        title: "Data Center Optimization",
        description:
          "Identify opportunities to improve infrastructure utilization, performance and operational efficiency."
      },
      {
        title: "Data Center Support",
        description:
          "Provide technical support and maintenance to help keep data center environments reliable and operational."
      }
    ]
  },


  automation: {
    title: "IT Automation",

    intro:
      "Automation solutions that reduce repetitive manual work, improve operational efficiency and help teams deliver faster.",

    services: [
      {
        title: "IT Task Automation",
        description:
          "Automate repetitive IT tasks to reduce manual effort and improve operational consistency."
      },
      {
        title: "Report Automation",
        description:
          "Automate recurring reports and data collection processes to save time and improve reporting efficiency."
      },
      {
        title: "Monitoring Automation",
        description:
          "Automate monitoring workflows to improve visibility and help identify operational issues quickly."
      },
      {
        title: "Workflow Automation",
        description:
          "Create automated workflows that connect operational activities and reduce unnecessary manual steps."
      },
      {
        title: "Automation Optimization",
        description:
          "Identify repetitive processes and develop practical automation opportunities that improve productivity."
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
});
