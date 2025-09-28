import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data untuk sertifikat
  const certificates = [
    { id: 1, src: "/assets/sertif1.png", alt: "Sertifikat 1", title: "Sertifikat Prestasi 1" },
    { id: 2, src: "/assets/sertif2.png", alt: "Sertifikat 2", title: "Sertifikat Prestasi 2" },
    { id: 3, src: "/assets/sertif3.png", alt: "Sertifikat 3", title: "Sertifikat Prestasi 3" },
    { id: 4, src: "/assets/sertif4.png", alt: "Sertifikat 4", title: "Sertifikat Prestasi 4" }
  ];

  // Data untuk project - Diperbarui dengan project lengkap
  const projects = [
    // UI/UX Design Projects
    {
      id: 1,
      title: "UI/UX Design - SEWARAS",
      image: "/assets/sewaras.png",
      description: "Platform penyewaan baju adat (ethnic outfit) dengan fokus pada user experience yang intuitif dan modern. Design mencakup seluruh flow user dari registrasi hingga penyewaan.",
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Research"],
      link: "https://www.figma.com/design/BkUzHI7w6TPLQTABb8KubR/SEWARAS?node-id=0-1&t=4CptcUJFSXfukk7L-1",
      category: "ui-ux",
      featured: true
    },
    {
      id: 2,
      title: "UI/UX Design - HiVo (Hidden Voice)",
      image: "/assets/hivo.png",
      description: "Platform fullstack development dengan integrasi machine learning untuk analisis suara. Design menekankan pada simplicity dan functionality untuk complex system.",
      technologies: ["Figma", "UI/UX", "Machine Learning", "Fullstack", "Dashboard Design"],
      link: "https://www.figma.com/design/adNglUJHAwyQ5GRyKEwV5J/HIdden-Voice?node-id=0-1&t=PZi2WqUDs9xaLQ6I-1",
      category: "ui-ux",
      featured: true
    },

    // Frontend Development Projects
    {
      id: 3,
      title: "SMK Negeri 7 Semarang - Website",
      image: "/assets/smk.png",
      description: "Website official SMK Negeri 7 Semarang dengan design responsive dan modern. Menampilkan informasi sekolah, program keahlian, dan kegiatan siswa.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Bootstrap"],
      link: "https://smk-negeri-7-semarang.vercel.app/",
      category: "frontend",
      featured: true
    },
    {
      id: 4,
      title: "Musync - Music Player Web App",
      image: "/assets/project-musync.jpg",
      description: "Aplikasi web music player dengan interface yang elegan dan user-friendly. Fitur playlist management dan responsive design untuk berbagai device.",
      technologies: ["JavaScript", "CSS3", "HTML5", "Web Audio API", "Responsive"],
      link: "https://musync-cuy.vercel.app/",
      category: "frontend"
    },
    {
      id: 5,
      title: "Sapa Hewan - Animal Care Platform",
      image: "/assets/sapa.png",
      description: "Platform informasi dan perawatan hewan dengan design yang menarik dan informatif. Cocok untuk pet lovers yang ingin belajar tentang perawatan hewan.",
      technologies: ["HTML", "CSS", "JavaScript", "Animal Care", "UI Design"],
      link: "https://sapa-hewan.netlify.app/",
      category: "frontend"
    },
    {
      id: 6,
      title: "BelanjaKuy - E-commerce Template",
      image: "/assets/belanja.png",
      description: "Template e-commerce modern dengan shopping cart functionality dan product catalog yang terorganisir dengan baik.",
      technologies: ["JavaScript", "CSS", "E-commerce", "Shopping Cart", "UI Design"],
      link: "https://belanja-kuy.vercel.app/",
      category: "frontend"
    },
    {
      id: 7,
      title: "BelanjaYuk Plus - Enhanced E-commerce",
      image: "/assets/plus.png",
      description: "Pengembangan lebih lanjut dari template e-commerce dengan fitur tambahan dan improvement pada user experience.",
      technologies: ["JavaScript", "CSS3", "E-commerce", "UX Improvement", "Web Design"],
      link: "https://belanja-yuk-plus.vercel.app/",
      category: "frontend"
    },
    {
      id: 8,
      title: "Ramein - Social Media Concept",
      image: "/assets/ramein.png",
      description: "Konsep platform social media dengan focus pada community engagement dan content sharing dalam interface yang modern.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Social Media", "UI/UX"],
      link: "https://ramein.vercel.app/",
      category: "frontend"
    },
    {
      id: 9,
      title: "MamYuk - Food Delivery Concept",
      image: "/assets/mam.png",
      description: "Konsep aplikasi food delivery dengan design yang menarik dan user flow yang sederhana untuk pemesanan makanan.",
      technologies: ["JavaScript", "CSS", "Food Delivery", "UI Design", "Responsive"],
      link: "https://mam-yuk.vercel.app/",
      category: "frontend"
    },
    {
      id: 10,
      title: "TAKUTNYO",
      image: "/assets/takut.png",
      description: "Project JavaScript pertama yang mencakup fundamental programming concepts dengan implementasi praktis dalam web development.",
      technologies: ["JavaScript", "HTML", "CSS", "Beginner", "Fundamentals"],
      link: "https://project-js-pertama.netlify.app/",
      category: "frontend"
    }
  ];

  // Kategori project
  const projectCategories = [
    { id: 'all', label: 'Semua Project' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'frontend', label: 'Frontend Development' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  // Filter projects berdasarkan kategori
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle navigation click
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside atau pada resize
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Komponen Header
  const Header = () => (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-brand">
          <span className="logo">NZ</span>
          <span className="brand-name">Nadine Zaskia</span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {[
            { id: 'beranda', icon: 'fa-home', label: 'Beranda' },
            { id: 'tentang', icon: 'fa-user', label: 'Tentang' },
            { id: 'project', icon: 'fa-code', label: 'Project' },
            { id: 'pencapaian', icon: 'fa-trophy', label: 'Pencapaian' }
          ].map((item) => (
            <li key={item.id} className="nav-item">
              <a 
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavClick(item.id); 
                }}
              >
                <i className={`fas ${item.icon}`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
    </header>
  );

  // Fallback image handler
  const handleImageError = (e, fallbackUrl = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80') => {
    e.target.src = fallbackUrl;
  };

  // Komponen Home/Beranda
  const Home = () => (
    <section className="hero-section" id="beranda">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="welcome-badge">Selamat Datang!</div>
            <h1>Saya, <span className="highlight">Nadine Zaskia Zafira</span></h1>
            <p className="hero-description">
              Seorang siswa SMK Negeri 7 Semarang jurusan SIJA yang passionate di bidang Fullstack Development, 
              IoT, UI/UX Design, dan Machine Learning. Telah menyelesaikan 10+ project dalam pengembangan web dan design.
            </p>
            
            <div className="hero-buttons">
              <a 
                href="#project"
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); handleNavClick('project'); }}
              >
                <i className="fas fa-code"></i> Lihat Project Saya
              </a>
              
              <a 
                href="https://www.linkedin.com/search/results/people/?firstName=Nadine&lastName=Zaskia&origin=SEO_PSERP&sid=OW%3A" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="/assets/nadine.jpg" 
                alt="Nadine Zaskia Zafira"
                className="profile-image"
                onError={(e) => handleImageError(e)}
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Komponen About/Tentang
  const About = () => (
    <section className="about-section" id="tentang">
      <div className="container">
        <div className="section-header">
          <h2>Tentang Saya</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/assets/nadine2.jpg" 
              alt="Nadine Zaskia Zafira" 
              className="about-profile"
              onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')}
            />
          </div>
          
          <div className="about-details">
            <div className="info-card">
              <h3>Informasi Pribadi</h3>
              <div className="info-grid">
                <div className="info-item">
                  <strong>Nama:</strong>
                  <span>Nadine Zaskia Zafira</span>
                </div>
                <div className="info-item">
                  <strong>Nama Panggilan:</strong>
                  <span>Nadine</span>
                </div>
                <div className="info-item">
                  <strong>Pendidikan:</strong>
                  <span>SMK Negeri 7 Semarang – Jurusan SIJA</span>
                </div>
                <div className="info-item">
                  <strong>Minat:</strong>
                  <span>Fullstack Development, IoT, UI/UX Design, Machine Learning</span>
                </div>
                <div className="info-item">
                  <strong>Total Project:</strong>
                  <span>{projects.length}+ Project Selesai</span>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <h3>Keahlian Teknis</h3>
              <div className="technologies">
                {['HTML5', 'CSS3', 'JavaScript', 'Figma', 'UI/UX Design', 'Responsive Design', 'Web Development', 'Prototyping'].map((skill, index) => (
                  <span key={index} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="info-card">
              <h3>Fun Facts</h3>
              <ul className="fun-facts">
                <li>Suka menonton anime dan drama Korea sebagai hiburan</li>
                <li>Senang belajar hal baru walaupun harus mulai dari nol</li>
                <li>Telah menyelesaikan 10+ project web development dan design</li>
                <li>Motto pribadi: <i>"Belajar sambil berkarya, berkarya sambil belajar"</i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Komponen Project yang diperbarui dengan filter kategori
  const Project = () => (
    <section className="projects-section" id="project">
      <div className="container">
        <div className="section-header">
          <h2>Project Saya</h2>
          <p>Berikut adalah {projects.length} project yang telah saya kerjakan dalam bidang UI/UX Design dan Frontend Development</p>
          <div className="section-divider"></div>
        </div>

        {/* Filter Kategori */}
        <div className="projects-filter">
          {projectCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card fade-in-up ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')}
                />
                <div className="project-overlay">
                  <div className="project-category">
                    {project.category === 'ui-ux' ? 'UI/UX Design' : 'Frontend Development'}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    aria-label={`View ${project.title}`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn"
                >
                  {project.category === 'ui-ux' ? 'View Design' : 'Visit Website'} 
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-stats text-center mt-2">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>{projects.length}+</h3>
              <p>Total Project</p>
            </div>
            <div className="stat-item">
              <h3>{projects.filter(p => p.category === 'ui-ux').length}</h3>
              <p>UI/UX Design</p>
            </div>
            <div className="stat-item">
              <h3>{projects.filter(p => p.category === 'frontend').length}</h3>
              <p>Frontend Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Komponen Achievements/Pencapaian
  const Achievements = () => (
    <section className="achievements-section" id="pencapaian">
      <div className="container">
        <div className="section-header">
          <h2>Portofolio & Pencapaian</h2>
          <p>Berikut adalah beberapa sertifikat yang saya dapatkan selama di SMK NEGERI 7 SEMARANG</p>
          <div className="section-divider"></div>
        </div>
        
        <div className="certificates-grid">
          {certificates.map(cert => (
            <div key={cert.id} className="certificate-card fade-in-up">
              <img 
                src={cert.src} 
                alt={cert.alt}
                onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')}
              />
              <div className="certificate-info">
                <span>{cert.title}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-2">
          <p className="hero-description">
            Selain sertifikat di atas, saya juga telah menyelesaikan {projects.length} project dalam bidang web development 
            dan UI/UX design yang menunjukkan perkembangan skill dan dedikasi dalam belajar teknologi.
          </p>
        </div>
      </div>
    </section>
  );

  // Komponen Footer yang disederhanakan
  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; 2025 Nadine Zaskia Zafira. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );

  // Render section berdasarkan state aktif
  const renderSection = () => {
    const sections = {
      'beranda': <Home />,
      'tentang': <About />,
      'project': <Project />,
      'pencapaian': <Achievements />
    };
    
    return sections[activeSection] || <Home />;
  };

  return (
    <div className="App">
      <Header />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;