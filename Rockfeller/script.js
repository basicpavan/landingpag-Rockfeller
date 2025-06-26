// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Funcionalidade do Carrossel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        
        let currentSlide = 0;
        let interval;
        
        // Função para trocar imagens baseado no tamanho da tela
        function updateCarouselImages() {
            const isMobile = window.innerWidth <= 768;
            const images = slides.querySelectorAll('.carousel-image');
            
            if (isMobile) {
                // Usar imagens 01, 02, 03 para mobile
                images[0].src = 'imagens/imagem01.webp';
                images[1].src = 'imagens/imagem02.png';
                images[2].src = 'imagens/imagem03.png';
            } else {
                // Usar banners 01, 02, 03 para desktop
                images[0].src = 'imagens/banner01.webp';
                images[1].src = 'imagens/banner02.png';
                images[2].src = 'imagens/banner03.webp';
            }
        }
        
        // Função para mostrar slide específico
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }
        
        // Função para próximo slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Função para slide anterior
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Iniciar carrossel automático
        function startCarousel() {
            interval = setInterval(nextSlide, 6000); // Muda a cada 5 segundos
        }
        
        // Parar carrossel automático
        function stopCarousel() {
            clearInterval(interval);
        }
        
        // Event listeners para controles
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevSlide();
                stopCarousel();
                startCarousel();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
                stopCarousel();
                startCarousel();
            });
        }
        
        // Event listeners para indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                showSlide(index);
                stopCarousel();
                startCarousel();
            });
        });
        
        // Pausar carrossel no hover
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
        
        // Atualizar imagens quando a tela for redimensionada
        window.addEventListener('resize', updateCarouselImages);
        
        // Inicializar imagens baseado no tamanho atual da tela
        updateCarouselImages();
        
        // Iniciar carrossel
        startCarousel();
        
        // Navegação por teclado
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                stopCarousel();
                startCarousel();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                stopCarousel();
                startCarousel();
            }
        });
    }
    
    // Navegação suave para links internos
    const navLinks = document.querySelectorAll('.nav-link, .footer-section a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pega os valores do formulário
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validação básica
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Simula envio do formulário
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    // Animação de scroll para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplica animação aos cards de serviço
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Header com efeito de transparência no scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.7)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.5)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Adiciona classe ativa ao link de navegação atual
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Adiciona estilo para link ativo
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #3498db !important;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
    
    // Botões Se inscrever
    const inscreverButtons = document.querySelectorAll('.btn-inscrever');
    inscreverButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            window.location.href = 'inscricao.html';
        });
    });
    
    // Botão Teste seu inglês
    const englishButton = document.querySelector('.btn-english');
    if (englishButton) {
        englishButton.addEventListener('click', function() {
            // Aqui você pode adicionar a funcionalidade desejada
            // Por exemplo, abrir um modal, redirecionar para uma página, etc.
            alert('Funcionalidade do teste de inglês será implementada aqui!');
            
            // Exemplo de redirecionamento (descomente se necessário):
            // window.open('https://exemplo.com/teste-ingles', '_blank');
        });
    }
    
    // Botão Contato
    const contatoButton = document.querySelector('.btn-contato');
    if (contatoButton) {
        contatoButton.addEventListener('click', function() {
            window.location.href = 'contato.html';
        });
    }
    
    console.log('Site Rockfeller carregado com sucesso! 🚀');
    console.log('Carrossel ativo com 3 banners! 🎠');
});
