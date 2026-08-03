/**
 * AUTHENTIC APPLE & ADYUTA TECH HIGH-PERFORMANCE ENGINE
 * Fast Snappy Terminal Engine with Idle Blinking Cursor Block
 */

document.addEventListener('DOMContentLoaded', () => {
  initRealTerminalEngine();
  initScrollAnimations();
  initSpotlightCards();
  initVideoHoverPlayer();
  initNavbarScroll();
  initMobileMenu();
  initProjectTilt();
  initProjectFilter();
  initProjectModal();
  initContactForm();
  initSmoothScroll();
  initKeyboardNav();
});

/* ==========================================================================
   0. High-Performance Video Hover Autoplay Engine
   ========================================================================== */
function initVideoHoverPlayer() {
  const videoCards = document.querySelectorAll('.project-video-wrapper');

  videoCards.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    if (!video) return;

    wrapper.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });

    wrapper.addEventListener('mouseleave', () => {
      video.pause();
    });
  });
}

/* ==========================================================================
   1. Fast Snappy Terminal Engine with Idle Blinking Cursor Block
   ========================================================================== */
function initRealTerminalEngine() {
  const taglineEl = document.getElementById('hero-tagline');
  if (!taglineEl) return;

  const phrases = [
    "Network Engineering Student",
    "Cisco CCNA & Mikrotik BNSP Certified",
    "Junior Auditor & IT Support",
    "Engineer's Discipline, Auditor's Eye for Detail."
  ];

  // Clean Alphanumeric Characters ONLY
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let phraseIndex = 0;

  function getRandomChar() {
    return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
  }

  // Fast Typewriter Forward (Kiri ke Kanan - Cepat & Responsif)
  function typeForward(targetText, onComplete) {
    let charIndex = 0;
    let scrambleTicks = 0;
    const ticksPerChar = 1; // 1 fast scramble tick per character

    function stepForward() {
      if (charIndex < targetText.length) {
        const revealedPart = targetText.substring(0, charIndex);
        const currentChar = targetText[charIndex];

        if (scrambleTicks < ticksPerChar) {
          const activeChar = (currentChar === " " || currentChar === "|" || currentChar === "," || currentChar === "." || currentChar === "&") ? currentChar : getRandomChar();
          taglineEl.innerHTML = revealedPart + `<span class="terminal-char-active">${activeChar}</span>`;
          scrambleTicks++;
        } else {
          taglineEl.innerHTML = revealedPart + `<span class="terminal-char-active">${currentChar}</span>`;
          charIndex++;
          scrambleTicks = 0;
        }
        setTimeout(stepForward, 14); // Fast 14ms speed!
      } else {
        // Full text with idle blinking cursor block at the end!
        taglineEl.innerHTML = targetText + `<span class="terminal-cursor-blink"></span>`;
        if (onComplete) onComplete();
      }
    }

    stepForward();
  }

  // Fast Terminal Eraser Reverse (Kanan ke Kiri / Hapus Cepat)
  function eraseReverse(targetText, onComplete) {
    let charIndex = targetText.length;
    let scrambleTicks = 0;
    const ticksPerChar = 1;

    function stepReverse() {
      if (charIndex > 0) {
        const revealedPart = targetText.substring(0, charIndex - 1);
        const currentChar = targetText[charIndex - 1];

        if (scrambleTicks < ticksPerChar) {
          const activeChar = (currentChar === " " || currentChar === "|" || currentChar === "," || currentChar === "." || currentChar === "&") ? currentChar : getRandomChar();
          taglineEl.innerHTML = revealedPart + `<span class="terminal-char-active">${activeChar}</span>`;
          scrambleTicks++;
        } else {
          taglineEl.innerHTML = revealedPart + `<span class="terminal-char-active">${currentChar}</span>`;
          charIndex--;
          scrambleTicks = 0;
        }
        setTimeout(stepReverse, 10); // Super fast 10ms erase!
      } else {
        taglineEl.innerHTML = `<span class="terminal-cursor-blink"></span>`;
        if (onComplete) onComplete();
      }
    }

    stepReverse();
  }

  function loopPhrases() {
    const currentPhrase = phrases[phraseIndex];

    // 1. Fast Type Forward
    typeForward(currentPhrase, () => {
      // 2. Pause 6.0s (6000ms) with Idle Blinking Cursor Block for generous reading time
      setTimeout(() => {
        // 3. Fast Erase Reverse
        eraseReverse(currentPhrase, () => {
          // 4. Brief pause before next phrase
          setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            loopPhrases();
          }, 300);
        });
      }, 6000);
    });
  }

  loopPhrases();
}

/* ==========================================================================
   2. Dynamic Spotlight Radial Glow Engine (adyuta.tech Style)
   ========================================================================== */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.timeline-card, .project-card, .about-card, .skill-category-card, .contact-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });
}

/* ==========================================================================
   3. Apple Smooth Scroll Entrance Animation Engine
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-animate');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. Navbar Scroll & Animated Active Pill Indicator
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.querySelector('.back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const activeDot = document.getElementById('nav-active-dot');

  function updateActiveDot() {
    if (!activeDot) return;
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      const parentLi = activeLink.parentElement;
      const leftPos = parentLi.offsetLeft + (parentLi.offsetWidth / 2) - 11;
      activeDot.style.transform = `translateX(${leftPos}px)`;
      activeDot.style.opacity = '1';
    } else {
      activeDot.style.opacity = '0';
    }
  }

  setTimeout(updateActiveDot, 100);
  window.addEventListener('resize', updateActiveDot, { passive: true });

  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
          if (backToTopBtn) backToTopBtn.style.opacity = '1';
        } else {
          navbar.classList.remove('scrolled');
          if (backToTopBtn) backToTopBtn.style.opacity = '0.7';
        }

        let currentSectionId = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 130;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });

        updateActiveDot();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   5. Mobile Hamburger Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-active');
      const isOpen = navLinksContainer.classList.contains('mobile-active');
      hamburger.querySelector('i').className = isOpen ? 'ri-close-line' : 'ri-menu-line';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-active');
        hamburger.querySelector('i').className = 'ri-menu-line';
      });
    });
  }
}

/* ==========================================================================
   6. 3D Card Tilt Effect
   ========================================================================== */
function initProjectTilt() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   7. Interactive Project Filtering
   ========================================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(wrapper => {
        const card = wrapper.querySelector('.project-card');
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          wrapper.style.display = 'block';
          setTimeout(() => {
            wrapper.classList.add('is-visible');
          }, 30);
        } else {
          wrapper.classList.remove('is-visible');
          setTimeout(() => {
            wrapper.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   8. Project Details Modal Viewer
   ========================================================================== */
const projectData = {
  1: {
    title: "Konfigurasi & Simulasi Jaringan",
    category: "Networking & Infrastructure (Praktikum Kuliah)",
    image: "assets/images/project_1.png",
    description: "Merancang dan mengkonfigurasi berbagai topologi jaringan menggunakan Cisco Packet Tracer dan Mikrotik/RouterOS, mencakup simulasi jaringan untuk skala kantor maupun area yang lebih luas. Meliputi konfigurasi routing, switching, subnetting, serta pengujian konektivitas antar perangkat dalam jaringan.",
    tech: ["Cisco Packet Tracer", "Mikrotik / RouterOS", "Subnetting", "Routing & Switching", "TCP/IP"],
    role: "Individu & Kelompok",
    scope: "Topologi jaringan kantor & jaringan area luas"
  },
  2: {
    title: "Gas Detector - IoT Dasar",
    category: "IoT & Hardware (Project Based Learning / PBL)",
    image: "assets/images/project_gas.png",
    description: "Merancang dan membangun perangkat pendeteksi gas sederhana berbasis IoT sebagai bagian dari pembelajaran berbasis proyek, mencakup perakitan sensor MQ-2, pemrograman mikrokontroler Arduino, dan pengujian sistem deteksi.",
    tech: ["Arduino", "Sensor MQ-2", "IoT", "Microcontroller", "C++"],
    role: "Kelompok (Hardware & IoT Programmer)",
    scope: "Prototype Pendeteksi Gas"
  },
  3: {
    title: "Edukasi Teknologi & Pancasila",
    category: "Education & Social (Proyek Edukasi SMK)",
    image: "assets/images/project_3.jpg",
    description: "Merancang proyek edukasi yang mengaitkan pemanfaatan teknologi dengan nilai-nilai Pancasila, ditujukan untuk siswa SMK di Jakarta guna meningkatkan pemahaman penerapan nilai kebangsaan dalam konteks perkembangan teknologi.",
    tech: ["Educational Workshop", "Pancasila", "Public Speaking", "Presentation"],
    role: "Kelompok (Tim Edukator)",
    scope: "SMK di Jakarta"
  },
  4: {
    title: "Produksi Video & Motion Graphics",
    category: "Multimedia & Video Production (Proyek Kreatif)",
    image: "assets/images/project_4.png",
    description: "Memproduksi berbagai proyek video kreatif dan media visual, mencakup keseluruhan alur produksi: shooting, video editing, color grading, hingga pembuatan motion graphics profesional.",
    tech: ["CapCut", "Alight Motion", "Adobe Photoshop", "Video Editing"],
    role: "Individu (Konsep, Shooting, Editing)",
    scope: "Proyek Video & Media Kreatif"
  },
  5: {
    title: "Audit Laporan Keuangan Klien",
    category: "Finance & Audit (KAP Wibisono dan Rekan)",
    image: "assets/images/project_5.jpg",
    description: "Terlibat dalam proses audit laporan keuangan untuk klien perusahaan (PT), mencakup pemeriksaan dokumen, verifikasi transaksi, dan penyusunan kertas kerja audit. Bertanggung jawab memastikan kesesuaian laporan keuangan klien dengan standar akuntansi yang berlaku.",
    tech: ["Microsoft Excel", "Financial Audit", "Akuntansi", "Kertas Kerja Audit"],
    role: "Junior Auditor",
    scope: "Audit Klien Perusahaan (PT)"
  },
  6: {
    title: "Bakti Sosial Renovasi Rumah Ibadah",
    category: "Social & Community (P3GN Pertamina)",
    image: "assets/images/project_6.jpeg",
    description: "Berpartisipasi sebagai anggota dalam program bakti sosial pembersihan dan perawatan rumah ibadah secara gotong royong tanpa biaya, sebagai bentuk kontribusi sosial kepada masyarakat di berbagai daerah di Indonesia.",
    tech: ["Social Contribution", "Volunteer", "Community Service", "P3GN"],
    role: "Member / Volunteer",
    scope: "Berbagai Daerah di Indonesia"
  }
};

function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  const projectCards = document.querySelectorAll('.project-card');

  if (!modalOverlay) return;

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-link-btn')) return;

      const projectId = card.getAttribute('data-id');
      const data = projectData[projectId];

      if (data) {
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-category').textContent = data.category;
        document.getElementById('modal-img').src = data.image;
        document.getElementById('modal-desc').textContent = data.description;
        
        const techContainer = document.getElementById('modal-tech');
        techContainer.innerHTML = data.tech.map(t => `<span class="tag-item">${t}</span>`).join('');

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function closeModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   9. Keyboard Accessibility
   ========================================================================== */
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      const navLinksContainer = document.querySelector('.nav-links');
      if (navLinksContainer && navLinksContainer.classList.contains('mobile-active')) {
        navLinksContainer.classList.remove('mobile-active');
      }
    }
  });
}

/* ==========================================================================
   10. Form Contact Handler & Real Mailto / WhatsApp Redirect Engine
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> Membuka Email...`;
      submitBtn.disabled = true;

      // Format Mailto Link directly to naranggaadennass@gmail.com
      const emailSubject = encodeURIComponent(`Pesan Portofolio dari ${name}`);
      const emailBody = encodeURIComponent(`Halo Narangga,\n\nSaya ${name} (${email}) mengirimkan pesan berikut melalui website portofolio N4z.dev:\n\n"${message}"\n\nTerima kasih.`);
      const mailtoUrl = `mailto:naranggaadennass@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      // Format WhatsApp Direct Link
      const waText = encodeURIComponent(`Halo Narangga,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n"${message}"`);
      const waUrl = `https://wa.me/6282337840357?text=${waText}`;

      // Instantly open email client to naranggaadennass@gmail.com
      window.location.href = mailtoUrl;

      if (statusMsg) {
        statusMsg.style.display = 'block';
        statusMsg.innerHTML = `
          <div style="background: rgba(52, 199, 89, 0.15); border: 1px solid #34c759; color: #ffffff; padding: 14px 18px; border-radius: var(--radius-md); text-align: left; margin-top: 14px;">
            <div style="font-weight: 700; color: #34c759; font-size: 0.95rem; margin-bottom: 4px;"><i class="ri-checkbox-circle-fill"></i> Aplikasi Email Telah Terbuka!</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              Pesan Anda telah disiapkan untuk dikirim ke <strong>naranggaadennass@gmail.com</strong>.<br>
              Atau Anda juga dapat <a href="${waUrl}" target="_blank" style="color: #2997ff; font-weight: 700; text-decoration: underline;">Kirim Pesan Langsung via WhatsApp</a>.
            </div>
          </div>
        `;
      }

      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }
}

/* ==========================================================================
   11. Smooth Navigation Scroll
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
