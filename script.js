console.log("Portfolio Loaded Successfully");
// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(8,17,31,.98)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    }else{

        navbar.style.background = "rgba(8,17,31,.85)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(
".card, .skill-card, .certificate-card, .contact-box"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".8s";

    observer.observe(card);

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 20px rgba(56,189,248,.4)";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Certificate Image Click
// ===============================

const certificates = document.querySelectorAll(".certificate-card img");

certificates.forEach(img=>{

    img.style.cursor="pointer";

    img.addEventListener("click",()=>{

        window.open(img.src,"_blank");

    });

});
