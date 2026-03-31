const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const audio = document.getElementById('audioPlayer');
const checkbox = document.getElementById('checkboxInput');
const loader = document.getElementById('preloader');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const footer = document.querySelector('footer');
const pupils = Array.from(document.getElementsByClassName('footer-pupil'));
const languageButtons = Array.from(document.querySelectorAll('.lang-btn'));

const translations = {
    az: {
        title: 'Afsana Mustafazada | Portfolio',
        selectors: {
            'html@lang': 'az',
            '.navbar a[href="#home"]': 'Ana səhifə',
            '.navbar a[href="#about"]': 'Haqqımda',
            '.navbar a[href="#education"]': 'Təhsil və təcrübə',
            '.navbar a[href="#skills"]': 'Bacarıqlar',
            '.navbar a[href="#certificates"]': 'Sertifikatlar',
            '.navbar a[href="#contact"]': 'Əlaqə',
            '.eyebrow': 'AI • Cybersecurity • IT Operations',
            '.home-content h1 .kello': 'Salam, mən',
            '.text-animate h3': 'IT mütəxəssisi və AI yönümlü tədqiqatçı',
            '.home-content > p:nth-of-type(2)': 'Süni intellekt, kibertəhlükəsizlik və sistem inzibatçılığı sahələrində ixtisaslaşmış mütəxəssisəm. Şəbəkə infrastrukturu, helpdesk idarəetməsi, təhlükəsizlik analizi və real iş mühitində texniki komandaların koordinasiyası üzrə praktiki təcrübəyə sahibəm. Məqsədim təhlükəsiz, dayanıqlı və ağıllı texnoloji həllər qurmaqdır.',
            '.hero-highlights .highlight-card:nth-child(1) span': 'aktiv layihə və əməkdaşlıq',
            '.hero-highlights .highlight-card:nth-child(2) span': 'tədqiqat və praktik tətbiq',
            '.hero-highlights .highlight-card:nth-child(3) span': 'IT proseslərinin idarə olunması',
            '.btn-box .btn[href^="mailto:"]': 'Əlaqə',
            '.btn-box .btn[href$=".pdf"]': 'CV yüklə',
            '#about .heading .mello': 'Haqqımda',
            '#about .section-intro': 'Texniki dərinliklə strateji baxışı birləşdirərək təşkilatlar üçün təhlükəsiz və effektiv IT mühiti qurmağa fokuslanıram.',
            '#about .about-content h3': 'IT mütəxəssisi',
            '#about .about-content p': 'Süni intellekt və kibertəhlükəsizlik istiqamətində ixtisaslaşmış mütəxəssis kimi şəbəkə infrastrukturu, sistem inzibatçılığı, helpdesk idarəetməsi və təhlükəsizlik təhlili sahələrində geniş praktik təcrübəyə sahibəm. Hazırda AI əsaslı təhlükə aşkarlama yanaşmaları, fişinq və sosial mühəndislik hücumlarının analizi üzrə tədqiqat fəaliyyətimi davam etdirirəm. Paralel olaraq komandaların koordinasiyası, proseslərin optimallaşdırılması və kritik sistemlərin dayanıqlılığının təmin edilməsi istiqamətində real iş mühitində aktiv rol alıram.',
            '#education .heading .kello': 'Təhsil',
            '#education .heading .heading-join': 'və',
            '#education .heading .jello': 'təcrübə',
            '#education .section-intro': 'Akademik baza, ixtisaslaşmış texniki təlimlər və real iş təcrübəsi üzərində qurulmuş inkişaf yolum.',
            '#education .education-column:nth-child(1) .title': 'Təhsil və inkişaf',
            '#education .education-column:nth-child(2) .title': 'Peşəkar təcrübə',
            '#education .education-column:nth-child(1) .education-content:nth-child(1) h3': 'Bakı Dövlət Universiteti',
            '#education .education-column:nth-child(1) .education-content:nth-child(1) p': 'Riyaziyyat ixtisası üzrə bakalavr təhsilimi tamamlamışam. Bu mərhələ analitik düşüncə, problem həlli və sistemli yanaşma bacarıqlarımın formalaşmasında mühüm rol oynayıb.',
            '#education .education-column:nth-child(1) .education-content:nth-child(2) h3': 'Istanbul Gedik Universiteti - Süni İntellekt',
            '#education .education-column:nth-child(1) .education-content:nth-child(2) p': 'Magistratura səviyyəsində süni intellekt, maşın öyrənməsi, məlumat analizi və ağıllı sistemlərin qurulması istiqamətində biliklərimi dərinləşdirirəm.',
            '#education .education-column:nth-child(1) .education-content:nth-child(3) h3': 'İdTech Academy - RHCSA Linux',
            '#education .education-column:nth-child(1) .education-content:nth-child(3) p': 'Linux sistemlərinin idarə olunması, server konfiqurasiyası və sistem təhlükəsizliyi üzrə praktik bacarıqlar əldə etmişəm.',
            '#education .education-column:nth-child(1) .education-content:nth-child(4) h3': 'MilliSec - Red Team Təlimi',
            '#education .education-column:nth-child(1) .education-content:nth-child(4) p': 'Penetrasiya testləri, fişinq ssenariləri və real hücum simulyasiyaları üzərində çalışaraq hücum və müdafiə mexanizmlərini praktik şəkildə öyrənmişəm.',
            '#education .education-column:nth-child(1) .education-content:nth-child(5) h3': 'Code Academy - Game Development Scholarship',
            '#education .education-column:nth-child(1) .education-content:nth-child(5) p': 'Layihə əsaslı işləmə, proqramlaşdırma məntiqi və texniki yaradıcılıq bacarıqlarımı inkişaf etdirmişəm.',
            '#education .education-column:nth-child(2) .education-content:nth-child(1) h3': 'Elm və Təhsil Nazirliyi İnformasiya Texnologiyaları İnstitutu - Researcher',
            '#education .education-column:nth-child(2) .education-content:nth-child(1) p': 'Freelance əsasda tədqiqatçı kimi informasiya texnologiyaları, süni intellekt və tətbiqi araşdırmalar istiqamətində yeni layihələr üzərində işləməyə başlamışam.',
            '#education .education-column:nth-child(2) .education-content:nth-child(2) h3': 'CyberVia Platform - Təsisçi və direktor',
            '#education .education-column:nth-child(2) .education-content:nth-child(2) p': 'Kibertəhlükəsizlik, IT xidmətləri və rəqəmsal həllər sahəsində platformanın strategiyasına, xidmət strukturuna və inkişaf istiqamətlərinə rəhbərlik edirəm.',
            '#education .education-column:nth-child(2) .education-content:nth-child(3) h3': 'RST Global Center - IT Team Lead',
            '#education .education-column:nth-child(2) .education-content:nth-child(3) p': 'Şəbəkə infrastrukturu, təhlükəsizlik sistemləri, helpdesk prosesləri və komanda idarəetməsi üzrə rəhbərlik edirəm.',
            '#education .education-column:nth-child(2) .education-content:nth-child(4) h3': 'Arab East College - Research Engineer',
            '#education .education-column:nth-child(2) .education-content:nth-child(4) p': 'Fişinq və sosial mühəndislik hücumları üzrə tətbiqi tədqiqatlar aparır, AI əsaslı təhlükə aşkarlama metodları üzərində işləyirəm.',
            '#education .education-column:nth-child(2) .education-content:nth-child(5) h3': 'Bakı Dövlət Universiteti - Sistem inzibatçısı',
            '#education .education-column:nth-child(2) .education-content:nth-child(5) p': 'Serverlərin idarə olunması, istifadəçi səlahiyyətlərinin tənzimlənməsi və daxili IT dəstəyi istiqamətində fəaliyyət göstərmişəm.',
            '#education .education-column:nth-child(2) .education-content:nth-child(6) h3': 'MilliSec - Biznes inkişafı üzrə menecer',
            '#education .education-column:nth-child(2) .education-content:nth-child(6) p': 'Korporativ tərəfdaşlıqların qurulması, strateji əməkdaşlıqların inkişafı və təşkilati koordinasiya proseslərinə töhfə verirəm.',
            '#education .education-column:nth-child(2) .education-content:nth-child(7) h3': 'AR Polis Akademiyası',
            '#education .education-column:nth-child(2) .education-content:nth-child(7) p': 'İnformasiya təhlükəsizliyi ixtisası üçün tədris vəsaitlərinin hazırlanmasına dəstək göstərmişəm.',
            '#skills .heading .jello': 'Bacarıqlarım',
            '#skills .section-intro': 'Həm texniki, həm də idarəetmə yönümlü bacarıqlarımı real layihələr və gündəlik iş təcrübəsi ilə formalaşdırmışam.',
            '#skills .skills-column:nth-child(1) .title': 'Texniki bacarıqlar',
            '#skills .skills-column:nth-child(2) .title': 'Peşəkar bacarıqlar',
            '#skills .skills-column:nth-child(1) .progress:nth-child(1) h3': 'Şəbəkə infrastrukturu və sistem inzibatçılığı 90%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(2) h3': 'VMware / Proxmox / Docker 80%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(3) h3': 'IT Helpdesk idarəetməsi 95%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(4) h3': 'GrandStream və ZKBioTime sistemləri 75%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(5) h3': 'Phishing və Social Engineering analizi 75%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(6) h3': 'Server monitorinqi və sistem sabitliyi 75%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(1) h3': 'Problem həll etmə bacarığı 80%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(2) h3': 'Strateji planlama və qərarvermə 85%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(3) h3': 'Adaptasiya və dəyişikliklərə uyğunlaşma 70%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(4) h3': 'Məsuliyyətlilik və nəticəyönümlülük 73%',
            '#portfolio .heading .heading-primary': 'Seçilmiş',
            '#portfolio .heading > span:last-child': 'layihələrim',
            '#portfolio .section-intro': 'İşlədiyim və dəstək verdiyim layihələrdən seçilmiş nümunələr.',
            '#portfolio .portfolio-box:nth-child(1) .portfolio-tag': 'Web Architecture',
            '#portfolio .portfolio-box:nth-child(2) .portfolio-tag': 'Enterprise Support',
            '#portfolio .portfolio-box:nth-child(3) .portfolio-tag': 'AI Security Research',
            '#portfolio .portfolio-box:nth-child(4) .portfolio-tag': 'Helpdesk Platform',
            '#portfolio .portfolio-box:nth-child(4) .portfolio-layer p': 'İstifadəçi sorğularının qəbulu, izlənməsi və operativ texniki dəstək proseslərinin idarə olunması üçün işlədiyim helpdesk platforması.',
            '#certificates .heading span': 'Sertifikatlarım',
            '#certificates .section-intro': 'Təhlükəsizlik, AI və texniki inkişaf sahələrində əldə etdiyim sertifikat və nailiyyətlər.',
            '#contact .heading .mello': 'Mənimlə',
            '#contact .heading .kello': 'əlaqə',
            '#contact .section-intro': 'Əməkdaşlıq, layihə və ya peşəkar əlaqə üçün mənə yazın.',
            '#contact .btn-box .btn': 'Göndər',
            '.quote-wrapper p:nth-child(1)': 'Öyrənmək',
            '.quote-wrapper p:nth-child(2)': 'mənim üçün',
            '.quote-wrapper p:nth-child(3)': 'davamlı',
            '.quote-wrapper p:nth-child(4)': 'inkişaf',
            '.quote-wrapper p:nth-child(5)': 'deməkdir.'
        },
        placeholders: {
            'input[name="full-name"]': 'Ad və soyad',
            'input[name="email-address"]': 'Email ünvanı',
            'input[name="number"]': 'Mobil nömrə',
            'input[name="email-sub"]': 'Mövzu',
            'textarea[name="message"]': 'Mesajınız'
        }
    },
    en: {
        title: 'Afsana Mustafazada | Portfolio',
        selectors: {
            'html@lang': 'en',
            '.navbar a[href="#home"]': 'Home',
            '.navbar a[href="#about"]': 'About',
            '.navbar a[href="#education"]': 'Education & Experience',
            '.navbar a[href="#skills"]': 'Skills',
            '.navbar a[href="#certificates"]': 'Certificates',
            '.navbar a[href="#contact"]': 'Contact',
            '.eyebrow': 'AI • Cybersecurity • IT Operations',
            '.home-content h1 .kello': 'Hello, I am',
            '.text-animate h3': 'IT specialist and AI-focused researcher',
            '.home-content > p:nth-of-type(2)': 'I am a specialist focused on artificial intelligence, cybersecurity, and system administration. I have hands-on experience in network infrastructure, helpdesk management, security analysis, and coordinating technical teams in real work environments. My goal is to build secure, resilient, and intelligent technology solutions.',
            '.hero-highlights .highlight-card:nth-child(1) span': 'active projects and collaborations',
            '.hero-highlights .highlight-card:nth-child(2) span': 'research and practical application',
            '.hero-highlights .highlight-card:nth-child(3) span': 'IT process leadership',
            '.btn-box .btn[href^="mailto:"]': 'Contact',
            '.btn-box .btn[href$=".pdf"]': 'Download CV',
            '#about .heading .mello': 'About Me',
            '#about .section-intro': 'I focus on building secure and efficient IT environments by combining technical depth with strategic thinking.',
            '#about .about-content h3': 'IT Specialist',
            '#about .about-content p': 'As a specialist in artificial intelligence and cybersecurity, I have broad practical experience in network infrastructure, system administration, helpdesk management, and security analysis. I am currently continuing research on AI-based threat detection approaches and the analysis of phishing and social engineering attacks. Alongside that, I actively contribute to team coordination, process optimization, and the resilience of critical systems.',
            '#education .heading .kello': 'Education',
            '#education .heading .heading-join': '&',
            '#education .heading .jello': 'Experience',
            '#education .section-intro': 'My journey is built on academic foundations, specialized technical training, and real-world work experience.',
            '#education .education-column:nth-child(1) .title': 'Education & Development',
            '#education .education-column:nth-child(2) .title': 'Professional Experience',
            '#education .education-column:nth-child(1) .education-content:nth-child(1) h3': 'Baku State University',
            '#education .education-column:nth-child(1) .education-content:nth-child(1) p': 'I completed my bachelor’s degree in Mathematics. This stage played an important role in shaping my analytical thinking, problem-solving, and systematic approach.',
            '#education .education-column:nth-child(1) .education-content:nth-child(2) h3': 'Istanbul Gedik University - Artificial Intelligence',
            '#education .education-column:nth-child(1) .education-content:nth-child(2) p': 'At the master’s level, I am deepening my knowledge in artificial intelligence, machine learning, data analysis, and intelligent systems.',
            '#education .education-column:nth-child(1) .education-content:nth-child(3) h3': 'IdTech Academy - RHCSA Linux',
            '#education .education-column:nth-child(1) .education-content:nth-child(3) p': 'I gained practical skills in Linux system administration, server configuration, and system security.',
            '#education .education-column:nth-child(1) .education-content:nth-child(4) h3': 'MilliSec - Red Team Training',
            '#education .education-column:nth-child(1) .education-content:nth-child(4) p': 'I learned attack and defense mechanisms in practice by working on penetration testing, phishing scenarios, and real attack simulations.',
            '#education .education-column:nth-child(1) .education-content:nth-child(5) h3': 'Code Academy - Game Development Scholarship',
            '#education .education-column:nth-child(1) .education-content:nth-child(5) p': 'I improved my project-based working style, programming logic, and technical creativity.',
            '#education .education-column:nth-child(2) .education-content:nth-child(1) h3': 'Institute of Information Technology of the Ministry of Science and Education - Researcher',
            '#education .education-column:nth-child(2) .education-content:nth-child(1) p': 'I recently started working on new projects as a freelance researcher in information technologies, artificial intelligence, and applied research.',
            '#education .education-column:nth-child(2) .education-content:nth-child(2) h3': 'CyberVia Platform - Founder & Director',
            '#education .education-column:nth-child(2) .education-content:nth-child(2) p': 'I lead the platform’s strategy, service structure, and growth direction in cybersecurity, IT services, and digital solutions.',
            '#education .education-column:nth-child(2) .education-content:nth-child(3) h3': 'RST Global Center - IT Team Lead',
            '#education .education-column:nth-child(2) .education-content:nth-child(3) p': 'I lead network infrastructure, security systems, helpdesk processes, and team management.',
            '#education .education-column:nth-child(2) .education-content:nth-child(4) h3': 'Arab East College - Research Engineer',
            '#education .education-column:nth-child(2) .education-content:nth-child(4) p': 'I conduct applied research on phishing and social engineering attacks and work on AI-based threat detection methods.',
            '#education .education-column:nth-child(2) .education-content:nth-child(5) h3': 'Baku State University - System Administrator',
            '#education .education-column:nth-child(2) .education-content:nth-child(5) p': 'I worked on server administration, user permission management, and internal IT support.',
            '#education .education-column:nth-child(2) .education-content:nth-child(6) h3': 'MilliSec - Business Development Manager',
            '#education .education-column:nth-child(2) .education-content:nth-child(6) p': 'I contribute to corporate partnerships, strategic collaborations, and organizational coordination processes.',
            '#education .education-column:nth-child(2) .education-content:nth-child(7) h3': 'Police Academy of the Republic of Azerbaijan',
            '#education .education-column:nth-child(2) .education-content:nth-child(7) p': 'I supported the preparation of educational materials for the information security specialization.',
            '#skills .heading .jello': 'My Skills',
            '#skills .section-intro': 'I have shaped both my technical and professional skills through real projects and day-to-day work experience.',
            '#skills .skills-column:nth-child(1) .title': 'Technical Skills',
            '#skills .skills-column:nth-child(2) .title': 'Professional Skills',
            '#skills .skills-column:nth-child(1) .progress:nth-child(1) h3': 'Network infrastructure and system administration 90%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(2) h3': 'VMware / Proxmox / Docker 80%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(3) h3': 'IT Helpdesk management 95%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(4) h3': 'GrandStream and ZKBioTime systems 75%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(5) h3': 'Phishing and Social Engineering analysis 75%',
            '#skills .skills-column:nth-child(1) .progress:nth-child(6) h3': 'Server monitoring and system stability 75%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(1) h3': 'Problem-solving ability 80%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(2) h3': 'Strategic planning and decision-making 85%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(3) h3': 'Adaptation and change readiness 70%',
            '#skills .skills-column:nth-child(2) .progress:nth-child(4) h3': 'Responsibility and results orientation 73%',
            '#portfolio .heading .heading-primary': 'Selected',
            '#portfolio .heading > span:last-child': 'Projects',
            '#portfolio .section-intro': 'A curated selection of the projects I have worked on and supported.',
            '#portfolio .portfolio-box:nth-child(1) .portfolio-tag': 'Web Architecture',
            '#portfolio .portfolio-box:nth-child(2) .portfolio-tag': 'Enterprise Support',
            '#portfolio .portfolio-box:nth-child(3) .portfolio-tag': 'AI Security Research',
            '#portfolio .portfolio-box:nth-child(4) .portfolio-tag': 'Helpdesk Platform',
            '#portfolio .portfolio-box:nth-child(1) .portfolio-layer p': 'I contributed to the architecture and development process of the website for a partner company.',
            '#portfolio .portfolio-box:nth-child(2) .portfolio-layer p': 'I provided technical support for the admin panel and code analysis of the official website.',
            '#portfolio .portfolio-box:nth-child(3) .portfolio-layer p': 'A research project focused on AI-based phishing and social engineering attack analysis.',
            '#portfolio .portfolio-box:nth-child(4) .portfolio-layer p': 'A helpdesk platform I worked on for receiving, tracking, and managing fast technical support operations.',
            '#certificates .heading span': 'My Certificates',
            '#certificates .section-intro': 'Certificates and achievements I have earned in security, AI, and technical development.',
            '#contact .heading .mello': 'Get in',
            '#contact .heading .kello': 'Touch',
            '#contact .section-intro': 'Feel free to contact me for collaboration, projects, or professional networking.',
            '#contact .btn-box .btn': 'Send',
            '.quote-wrapper p:nth-child(1)': 'Learning',
            '.quote-wrapper p:nth-child(2)': 'for me means',
            '.quote-wrapper p:nth-child(3)': 'continuous',
            '.quote-wrapper p:nth-child(4)': 'growth',
            '.quote-wrapper p:nth-child(5)': '.'
        },
        placeholders: {
            'input[name="full-name"]': 'Full name',
            'input[name="email-address"]': 'Email address',
            'input[name="number"]': 'Phone number',
            'input[name="email-sub"]': 'Subject',
            'textarea[name="message"]': 'Your message'
        }
    }
};

function applyLanguage(language) {
    const locale = translations[language] || translations.az;
    document.title = locale.title;

    Object.entries(locale.selectors).forEach(([selector, value]) => {
        if (selector === 'html@lang') {
            document.documentElement.lang = value;
            return;
        }

        const element = document.querySelector(selector);
        if (element) {
            element.textContent = value;
        }
    });

    Object.entries(locale.placeholders).forEach(([selector, value]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.placeholder = value;
        }
    });

    languageButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === language);
    });

    localStorage.setItem('portfolio-language', language);
}

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

function playpause() {
    if (!audio || !checkbox) {
        return;
    }

    if (checkbox.checked) {
        audio.play().catch(() => {});
    } else {
        audio.pause();
    }
}

if (checkbox) {
    checkbox.addEventListener('change', playpause);
}

languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        applyLanguage(button.dataset.lang);
    });
});

window.addEventListener('load', () => {
    if (!loader) {
        return;
    }

    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});

window.onscroll = () => {
    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove('active'));

            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });

    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    if (footer) {
        footer.classList.toggle(
            'show-animate',
            window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
        );
    }
};

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;
    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;

    const pupilXCurrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
    const pupilYCurrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

    pupils.forEach((pupil) => {
        pupil.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`;
    });
};

const windowResize = () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);

const savedLanguage = localStorage.getItem('portfolio-language') || 'az';
applyLanguage(savedLanguage);
