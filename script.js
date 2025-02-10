
const carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
    interval: 3000,
    wrap: true
});


document.getElementById('imageCarousel').addEventListener('slide.bs.carousel', event => {
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === event.to);
    });
});



 const videoModal = document.getElementById('videoModal')
 const videoIframe = document.getElementById('videoIframe')
 
 const videoUrl = 'https://www.youtube.com/embed/rTqg2hEjGdE?autoplay=1'
 
 videoModal.addEventListener('show.bs.modal', () => {
     videoIframe.setAttribute('src', videoUrl)
 })
 
 videoModal.addEventListener('hide.bs.modal', () => {
     videoIframe.setAttribute('src', '')
 })













//  stats

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stats-number');
    // Durasi total animasi dalam milidetik
    const duration = 2000; // 2 detik
    // Berapa kali update per detik
    const updateRate = 60;
    
    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                
                // Hitung berapa step yang dibutuhkan
                const totalSteps = duration / (1000 / updateRate);
                // Hitung increment per step agar selesai dalam waktu yang sama
                const incrementPerStep = target / totalSteps;
                
                const timer = setInterval(() => {
                    count += incrementPerStep;
                    if (count >= target) {
                        counter.innerText = target;
                        clearInterval(timer);
                    } else {
                        counter.innerText = Math.floor(count);
                    }
                }, 1000 / updateRate);
            }
        });
    };

    const observer = new IntersectionObserver(startCounting, {
        threshold: 0.3
    });

    counters.forEach(counter => observer.observe(counter));
});













var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});