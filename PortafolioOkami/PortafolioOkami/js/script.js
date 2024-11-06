
const projects = {
    project1: {
      title: "Proyecto 1",
      image: "project1.jpg",
      description: "Descripción detallada del proyecto 1."
    },
    project2: {
      title: "Proyecto 2",
      image: "project2.jpg",
      description: "Descripción detallada del proyecto 2."
    }
    
  };
  
  
  function openModal(projectId) {
    const modal = document.getElementById("modal");
    const project = projects[projectId];
  
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-image").src = project.image;
    document.getElementById("modal-description").textContent = project.description;
  
    modal.style.display = "flex";
  }
  

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
 
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      closeModal();
    }
  };
  
const services = {
    service1: {
      title: "Servicio 1",
      description: "Descripción completa y detallada del servicio 1. Explica lo que se ofrece y en qué consiste este servicio."
    },
    service2: {
      title: "Servicio 2",
      description: "Descripción completa y detallada del servicio 2. Explica lo que se ofrece y en qué consiste este servicio."
    },
    service3: {
      title: "Servicio 3",
      description: "Descripción completa y detallada del servicio 3. Explica lo que se ofrece y en qué consiste este servicio."
    }
    // aca ponemos mas servicios siguiendo la estructura de services
  };
  
  
  function openServiceModal(serviceId) {
    const service = services[serviceId];
    document.getElementById("serviceModal-title").textContent = service.title;
    document.getElementById("serviceModal-description").textContent = service.description;
    document.getElementById("serviceModal").style.display = "flex";
  }
  
 
  function closeServiceModal() {
    document.getElementById("serviceModal").style.display = "none";
  }
  
  
  window.onclick = function(event) {
    const modal = document.getElementById("serviceModal");
    if (event.target == modal) {
      closeServiceModal();
    }
  };
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");
  
    
    if (name && email && subject && message) {
    
      formMessage.textContent = "Gracias por tu mensaje, te responderé pronto.";
      formMessage.style.color = "green";
      document.getElementById("contactForm").reset();
    } else {
      formMessage.textContent = "Por favor, completa todos los campos.";
      formMessage.style.color = "red";
    }
  });

 