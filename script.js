// 1. Teks Ketik Otomatis
const text = "Selamat hari jadi yang ke-sekian buat kesayanganku... ❤️";
let i = 0;
function typing() {
    if (i < text.length) {
        document.getElementById("teks-ketik").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

// 2. Musik Control
const lagu = document.getElementById("lagu");
function putarMusik() {
    if (lagu.paused) {
        lagu.play();
        document.querySelector(".music-btn").innerHTML = "⏸️";
    } else {
        lagu.pause();
        document.querySelector(".music-btn").innerHTML = "🎵";
    }
}

// 3. Efek Scroll Muncul
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 4. Efek Hati Jatuh (Floating Hearts)
function buatHati() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
        position: fixed; bottom: -20px; 
        left: ${Math.random() * 100}vw; 
        font-size: ${Math.random() * 20 + 10}px;
        color: #ff8fa3; z-index: -1; opacity: 0.6;
        animation: floatUp ${Math.random() * 3 + 2}s linear forwards;
    `;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(buatHati, 400);

const style = document.createElement('style');
style.innerHTML = `@keyframes floatUp { to { transform: translateY(-110vh); opacity: 0; } }`;
document.head.appendChild(style);

window.onload = typing;
