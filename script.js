// ============================================
// INTRO ANIMATION
// ============================================

window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    setTimeout(() => {
        intro.style.display = 'none';
    }, 4000);
});

// ============================================
// NAVIGATION
// ============================================

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SMOOTH SCROLLING
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// COUNTER (Time Together)
// ============================================

function updateCounter() {
    const startDate = new Date('2024-11-16T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    // Calculate time units
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalDays / 30.44); // Average month length
    
    // Calculate remaining time for display
    const months = totalMonths;
    const weeks = totalWeeks;
    const days = totalDays;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update main counter
    document.getElementById('months').textContent = months;
    document.getElementById('weeks').textContent = weeks;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Update special stats
    document.getElementById('totalHours').textContent = totalHours.toLocaleString();
    
    // Calculate heartbeats (average 70 bpm)
    const heartbeats = totalMinutes * 70;
    document.getElementById('heartbeats').textContent = heartbeats.toLocaleString();
    
    // Check for milestones
    checkMilestones(totalDays, totalHours);
}

// ============================================
// MILESTONES CHECKER
// ============================================

let shownMilestones = new Set();

function checkMilestones(days, hours) {
    const milestones = [
        { days: 7, text: '🎉 1 SEMANA JUNTOS! 🎉' },
        { days: 14, text: '🎊 2 SEMANAS DE AMOR! 🎊' },
        { days: 21, text: '💝 3 SEMANAS INCRÍVEIS! 💝' },
        { days: 30, text: '🌟 1 MÊS DE AMOR! 🌟' },
        { days: 50, text: '✨ 50 DIAS MÁGICOS! ✨' },
        { days: 60, text: '💖 2 MESES JUNTOS! 💖' },
        { days: 90, text: '🎆 3 MESES DE FELICIDADE! 🎆' },
        { days: 100, text: '🏆 100 DIAS ÉPICOS! 🏆' },
        { days: 120, text: '💕 4 MESES DE AMOR! 💕' },
        { days: 150, text: '🎪 150 DIAS INESQUECÍVEIS! 🎪' },
        { days: 180, text: '🎯 MEIO ANO JUNTOS! 🎯' },
        { days: 200, text: '🌈 200 DIAS DE PURA MAGIA! 🌈' },
        { days: 250, text: '🎨 250 DIAS COLORIDOS! 🎨' },
        { days: 300, text: '🎭 300 DIAS ESPETACULARES! 🎭' },
        { days: 365, text: '🎂 1 ANO COMPLETO! PARABÉNS! 🎂' },
        { days: 500, text: '💫 500 DIAS BRILHANTES! 💫' },
        { days: 730, text: '🎊 2 ANOS DE AMOR ETERNO! 🎊' }
    ];
    
    // Also check hour milestones
    const hourMilestones = [
        { hours: 100, text: '⏰ 100 HORAS JUNTOS! ⏰' },
        { hours: 500, text: '⏳ 500 HORAS DE FELICIDADE! ⏳' },
        { hours: 1000, text: '🕐 1000 HORAS MÁGICAS! 🕐' },
        { hours: 2000, text: '🕑 2000 HORAS PERFEITAS! 🕑' },
        { hours: 5000, text: '🕒 5000 HORAS DE AMOR! 🕒' }
    ];
    
    // Check day milestones
    for (let milestone of milestones) {
        const key = `day-${milestone.days}`;
        if (days >= milestone.days && !shownMilestones.has(key)) {
            showMilestone(milestone.text);
            shownMilestones.add(key);
            break; // Show only one at a time
        }
    }
    
    // Check hour milestones
    for (let milestone of hourMilestones) {
        const key = `hour-${milestone.hours}`;
        if (hours >= milestone.hours && !shownMilestones.has(key)) {
            showMilestone(milestone.text);
            shownMilestones.add(key);
            break;
        }
    }
}

function showMilestone(text) {
    const banner = document.getElementById('milestone-banner');
    const textElement = document.getElementById('milestone-text');
    
    if (banner && textElement) {
        textElement.textContent = text;
        banner.style.display = 'block';
        
        // Create confetti effect
        createConfetti();
        
        // Play celebration animation
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                setTimeout(createFloatingHeart, i * 100);
            }
        }, 100);
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            banner.style.opacity = '0';
            setTimeout(() => {
                banner.style.display = 'none';
                banner.style.opacity = '1';
            }, 500);
        }, 10000);
    }
}

// ============================================
// CONFETTI EFFECT
// ============================================

function createConfetti() {
    const colors = ['#e50914', '#d4af37', '#ffffff', '#ff69b4', '#ffd700'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.opacity = '0.8';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.transition = 'all 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.style.top = '120vh';
                confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() * 200 - 100)) + 'vw';
                confetti.style.opacity = '0';
                confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
            }, 100);
            
            setTimeout(() => {
                confetti.remove();
            }, 3100);
        }, i * 30);
    }
}

// Update counter every second
setInterval(updateCounter, 1000);
updateCounter(); // Initial call

// ============================================
// SCROLL ANIMATIONS (AOS style)
// ============================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ============================================
// MUSIC CONTROL
// ============================================

const musicControl = document.getElementById('musicControl');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

musicControl.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicControl.classList.remove('playing');
        musicControl.title = 'Tocar música';
    } else {
        backgroundMusic.play();
        musicControl.classList.add('playing');
        musicControl.title = 'Pausar música';
    }
    isPlaying = !isPlaying;
});

// ============================================
// SPECIAL EFFECTS
// ============================================

// Create floating hearts effect
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.opacity = '0.6';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.transition = 'all 2s ease-in-out';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.bottom = '120vh';
        heart.style.opacity = '0';
        heart.style.transform = `translateX(${Math.random() * 200 - 100}px)`;
    }, 100);
    
    setTimeout(() => {
        heart.remove();
    }, 4100);
}

// Create hearts periodically when scrolling to certain sections
let heartInterval;

window.addEventListener('scroll', () => {
    const reasonsSection = document.getElementById('reasons');
    const messageSection = document.getElementById('message');
    
    if (reasonsSection && messageSection) {
        const reasonsRect = reasonsSection.getBoundingClientRect();
        const messageRect = messageSection.getBoundingClientRect();
        
        if ((reasonsRect.top < window.innerHeight && reasonsRect.bottom > 0) ||
            (messageRect.top < window.innerHeight && messageRect.bottom > 0)) {
            if (!heartInterval) {
                heartInterval = setInterval(createFloatingHeart, 2000);
            }
        } else {
            if (heartInterval) {
                clearInterval(heartInterval);
                heartInterval = null;
            }
        }
    }
});

// ============================================
// EASTER EGG - Secret Message
// ============================================

let clickCount = 0;
const heroTitle = document.querySelector('.hero-title');

if (heroTitle) {
    heroTitle.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            showSecretMessage();
            clickCount = 0;
        }
    });
}

function showSecretMessage() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.95)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10000';
    modal.style.animation = 'fadeIn 0.5s ease';
    
    modal.innerHTML = `
        <div style="text-align: center; padding: 40px; max-width: 600px;">
            <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 20px; color: #e50914;">
                Mensagem Secreta 💌
            </h2>
            <p style="font-size: 1.3rem; line-height: 1.8; margin-bottom: 30px; color: #b3b3b3;">
                Leonor, descobriste a mensagem secreta! 🎉<br><br>
                Este site foi feito com todo o amor do mundo, pensando em cada detalhe que nos representa. 
                Cada palavra, cada cor, cada animação foi escolhida a pensar em nós.<br><br>
                És e sempre serás o amor da minha vida. ❤️
            </p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: linear-gradient(135deg, #e50914, #b20710); 
                           color: white; 
                           border: none; 
                           padding: 15px 40px; 
                           font-size: 1.1rem; 
                           border-radius: 5px; 
                           cursor: pointer;
                           font-weight: 600;">
                Fechar ❤️
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Create extra hearts for the secret message
    for (let i = 0; i < 20; i++) {
        setTimeout(createFloatingHeart, i * 200);
    }
}

// ============================================
// SEASON CARDS INTERACTION
// ============================================

const seasonCards = document.querySelectorAll('.season-card');

seasonCards.forEach(card => {
    const episodes = card.querySelectorAll('.episode');
    
    episodes.forEach(episode => {
        if (!episode.classList.contains('coming-soon')) {
            episode.addEventListener('click', () => {
                const episodeText = episode.textContent;
                showEpisodeDetails(episodeText);
            });
        }
    });
});

function showEpisodeDetails(episodeText) {
    const details = {
        'Ep. 1: O Primeiro Encontro': 'O dia em que os nossos olhares se cruzaram pela primeira vez. Ainda me lembro de cada detalhe...',
        'Ep. 2: A Primeira Conversa Profunda': 'Quando percebi que podíamos falar de tudo. Horas a conversar como se fossem minutos.',
        'Ep. 3: Quando Percebi Que Era Especial': 'Foi gradual, mas de repente... soube. Tu eras diferente. Eras especial.',
        'Ep. 1: Dias Aconchegados': 'Os dias mais perfeitos. Juntinhos em tua casa, sem precisar de mais nada além de nós.',
        'Ep. 2: O Melhor Aniversário': 'O meu aniversário mais especial. Mesmo com o episódio da pulseira, foi perfeito porque estavas lá.',
        'Ep. 3: Os Aviões e As Músicas': 'A nossa música. "Anda comigo ver os aviões de Os Azeitonas" - momentos únicos.',
        'Ep. 4: A Pulseira Perdida': 'Eu sei que ficaste chateada, mas até nos momentos difíceis, o que importa é estarmos juntos.',
        'Ep. 1: Mil Novas Aventuras': 'Tantos lugares para conhecer, tantas memórias para criar. Tudo contigo.',
        'Ep. 2: Sonhos a Dois': 'Construir um futuro juntos. Cada sonho é melhor quando é partilhado contigo.',
        'Ep. 3: Para Sempre': 'Porque o nosso amor não tem data de validade. É para sempre. ❤️'
    };
    
    const detail = details[episodeText] || 'Um momento especial da nossa história...';
    
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.95)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10000';
    modal.style.animation = 'fadeIn 0.5s ease';
    modal.style.padding = '20px';
    
    modal.innerHTML = `
        <div style="text-align: center; padding: 40px; max-width: 600px; background: rgba(229, 9, 20, 0.1); border-radius: 20px; border: 2px solid #e50914;">
            <h2 style="font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 20px; color: #e50914;">
                ${episodeText}
            </h2>
            <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 30px; color: #b3b3b3;">
                ${detail}
            </p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: linear-gradient(135deg, #e50914, #b20710); 
                           color: white; 
                           border: none; 
                           padding: 15px 40px; 
                           font-size: 1.1rem; 
                           border-radius: 5px; 
                           cursor: pointer;
                           font-weight: 600;">
                Fechar
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// ============================================
// REASON CARDS SPECIAL EFFECT
// ============================================

const reasonCards = document.querySelectorAll('.reason-card');

reasonCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.1) rotate(2deg)';
        setTimeout(() => {
            card.style.transform = '';
        }, 300);
        
        // Create hearts on click
        for (let i = 0; i < 5; i++) {
            setTimeout(createFloatingHeart, i * 100);
        }
    });
});

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c❤️ Feito com amor para a Leonor ❤️', 
    'color: #e50914; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);');
console.log('%cPor Manuel Antonio Matos Araujo', 
    'color: #d4af37; font-size: 14px; font-style: italic;');
console.log('%c16 de Novembro de 2024 - Para Sempre', 
    'color: #b3b3b3; font-size: 12px;');

// ============================================
// LAZY LOADING IMPROVEMENTS
// ============================================

// Add loading state
document.addEventListener('DOMContentLoaded', () => {
    // Simulate content loading
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Log statistics
    const stats = {
        daysCount: document.getElementById('days')?.textContent || '0',
        reasonsCount: document.querySelectorAll('.reason-card').length,
        momentsCount: document.querySelectorAll('.moment-card').length,
        seasonsCount: document.querySelectorAll('.season-card').length
    };
    
    console.log('Website Stats:', stats);
});

// ============================================
// KEYBOARD SHORTCUTS (EASTER EGG)
// ============================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-8);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateKonamiMode();
        konamiCode = [];
    }
});

function activateKonamiMode() {
    // Create massive heart explosion
    for (let i = 0; i < 100; i++) {
        setTimeout(createFloatingHeart, i * 50);
    }
    
    // Show achievement
    const achievement = document.createElement('div');
    achievement.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: linear-gradient(135deg, #e50914, #d4af37); 
                    padding: 40px; border-radius: 20px; 
                    text-align: center; z-index: 10000; 
                    box-shadow: 0 20px 60px rgba(229, 9, 20, 0.5);
                    animation: fadeIn 0.5s ease;">
            <h2 style="font-size: 2.5rem; margin-bottom: 15px; color: white;">🏆 Conquista Desbloqueada! 🏆</h2>
            <p style="font-size: 1.3rem; color: white;">Descobriste o código secreto do amor! 💖</p>
        </div>
    `;
    document.body.appendChild(achievement);
    
    setTimeout(() => {
        achievement.remove();
    }, 3000);
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Página carregada em ${pageLoadTime}ms`);
        }, 0);
    });
}