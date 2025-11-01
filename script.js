document.addEventListener("DOMContentLoaded", function () {
  // 📩 Contact Form Submission
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      if (name && email && message) {
        // ✅ Show success message on page
        const successMsg = document.createElement('div');
        successMsg.className = 'alert alert-success mt-3';
        successMsg.innerText = `✅ Thank you, ${name}! Your message has been sent successfully.`;
        form.parentElement.appendChild(successMsg);

        form.reset();
      } else {
        alert("⚠️ Please fill out all fields before submitting.");
      }
    });
  }

  // 🧭 Navbar Scroll Effect
  const navbar = document.querySelector('.custom-navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 100);
  });

  // 🎬 Animate Flip Cards on Scroll
  const cards = document.querySelectorAll(".flip-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
});

