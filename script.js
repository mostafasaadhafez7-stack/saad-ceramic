// تغيير لون النافبار أثناء النزول

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.style.background = "#0b3b63";
        navbar.style.padding = "15px 8%";
    } else {
        navbar.style.background = "#0f4c81";
        navbar.style.padding = "20px 8%";
    }

});


// ظهور العناصر أثناء النزول

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => observer.observe(card));


// زر الرجوع لأعلى الصفحة

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
function counter(id,end){

let count=0;

let speed=Math.ceil(end/100);

let x=setInterval(()=>{

count+=speed;

document.getElementById(id).innerHTML=count+"+";

if(count>=end){

document.getElementById(id).innerHTML=end+"+";

clearInterval(x);

}

},20);

}

counter("projects",500);

counter("clients",480);

counter("experience",10);
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

});
const images=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

images.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

document.getElementById("closeLightbox").onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=()=>{

lightbox.style.display="none";

};
const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".navbar ul");

menu.onclick=()=>{

nav.classList.toggle("active");

}
