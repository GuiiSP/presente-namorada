const text = `
Há 10 meses você entrou na minha vida.

Desde então os dias ficaram mais leves,
os sorrisos mais sinceros e o futuro muito mais bonito.

Obrigado por cada abraço,
cada conversa,
cada carinho
e cada momento ao seu lado.

Você é minha pessoa favorita.

Eu te amo, Grazielle. ❤️
`;

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,35);
    }
}

setTimeout(typeWriter,4500);

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el=>{
    observer.observe(el);
});

const startDate = new Date("2025-08-05");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const months = Math.floor(days / 30);

    const hours = Math.floor(diff/(1000*60*60));
    const minutes = Math.floor(diff/(1000*60));

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
}

updateCounter();
setInterval(updateCounter,1000);

document.getElementById("musicBtn").onclick = ()=>{
    document.getElementById("music").play();
};

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.querySelectorAll(".gallery-img").forEach(img=>{

    img.onclick = ()=>{

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    };

});

lightbox.onclick = ()=>{
    lightbox.style.display = "none";
};