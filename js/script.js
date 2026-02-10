// Sub-events data
const subEvents = [
    {
        id: "event_01",
        title: "Event 1",
        category: "Cricket",
        description: "A thrilling cricket tournament.",
        date: "February 15",
        time: "10:00 AM - 4:00 PM",
        venue: "Main Ground",
        prize: "₹10,000",
        team: "11 members",
        registration: "https://docs.google.com/forms"
    },
    {
        id: "event_02",
        title: "Event 2",
        category: "Football",
        description: "A fast-paced football competition.",
        date: "February 15",
        time: "11:00 AM - 5:00 PM",
        venue: "Football Ground",
        prize: "₹8,000",
        team: "7 members",
        registration: "https://docs.google.com/forms"
    },
    {
        id: "event_03",
        title: "Event 3",
        category: "F1 Racing",
        description: "A high-speed F1 racing simulation.",
        date: "February 16",
        time: "9:00 AM - 1:00 PM",
        venue: "Gaming Arena",
        prize: "₹6,000",
        team: "Individual",
        registration: "https://docs.google.com/forms"
    },
    {
        id: "event_04",
        title: "Event 4",
        category: "Basketball",
        description: "A dynamic basketball tournament.",
        date: "February 16",
        time: "2:00 PM - 6:00 PM",
        venue: "Basketball Court",
        prize: "₹7,000",
        team: "5 members",
        registration: "https://docs.google.com/forms"
    },
    {
        id: "event_05",
        title: "Event 5",
        category: "Chess",
        description: "A battle of wits and strategy.",
        date: "February 15",
        time: "2:00 PM - 5:00 PM",
        venue: "Indoor Arena",
        prize: "₹5,000",
        team: "Individual",
        registration: "https://docs.google.com/forms"
    }
];

const categoryClasses = {
    'Cricket': 'category-cricket',
    'Football': 'category-football',
    'F1 Racing': 'category-f1',
    'Basketball': 'category-basketball',
    'Chess': 'category-chess'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    createParticles();
    renderEvents();
    setupEventListeners();
});

// Create floating particles
function createParticles() {
    const bg = document.querySelector('.animated-bg');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        bg.appendChild(particle);
    }
}

// Render events
function renderEvents() {
    const grid = document.getElementById('eventsGrid');
    
    subEvents.forEach((event, index) => {
        const card = createEventCard(event);
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });
    
    lucide.createIcons();
}

// Create event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    card.innerHTML = `
        <div class="event-card-inner">
            <div class="event-header">
                <span class="event-category ${categoryClasses[event.category]}">
                    ${event.category}
                </span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
            </div>
            
            <div class="event-body">
                <div class="event-meta">
                    <div class="meta-row">
                        <i data-lucide="calendar" class="meta-icon"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="meta-row">
                        <i data-lucide="clock" class="meta-icon"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="meta-row">
                        <i data-lucide="map-pin" class="meta-icon"></i>
                        <span>${event.venue}</span>
                    </div>
                    <div class="meta-row">
                        <i data-lucide="users" class="meta-icon"></i>
                        <span>${event.team}</span>
                    </div>
                </div>
            </div>
            
            <div class="event-footer">
                <span class="prize-badge">${event.prize}</span>
                <button class="event-register-btn" onclick="window.open('${event.registration}', '_blank')">
                    REGISTER
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        const isOpen = mobileMenu.classList.contains('active');
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
    });

    // Mobile menu links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
.
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Register button
    document.getElementById('mainRegisterBtn').addEventListener('click', () => {
        window.open('https://docs.google.com/forms', '_blank');
    });

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
        }
    });
}

// Scroll to events
function scrollToEvents() {
    document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
}