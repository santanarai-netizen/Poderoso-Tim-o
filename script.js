// ==========================
// MENU MOBILE
// ==========================

const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("ativo");

});

// ==========================
// HEADER AO ROLAR
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("ativo");

    } else {

        header.classList.remove("ativo");

    }

});

// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topo.classList.add("mostrar");

    } else {

        topo.classList.remove("mostrar");

    }

});

topo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================
// CONTADORES
// ==========================

const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    contadores.forEach(contador => {

        const alvo = Number(contador.dataset.target);

        const velocidade = alvo / 150;

        let numero = 0;

        const atualizar = () => {

            numero += velocidade;

            if(numero < alvo){

                contador.innerText = Math.floor(numero).toLocaleString("pt-BR");

                requestAnimationFrame(atualizar);

            }else{

                contador.innerText = alvo.toLocaleString("pt-BR");

            }

        }

        atualizar();

    });

}

let iniciou = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".estatisticas");

    if(!stats) return;

    const pos = stats.offsetTop - 400;

    if(window.scrollY > pos && !iniciou){

        iniciarContadores();

        iniciou = true;

    }

});

// ==========================
// EFEITO NOS CARDS
// ==========================

const cards = document.querySelectorAll(".card,.titulo-card,.jogador");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ==========================
// GALERIA
// ==========================

const imagens = document.querySelectorAll(".grid-galeria img");

imagens.forEach(img=>{

    img.addEventListener("click",()=>{

        const fundo=document.createElement("div");

        fundo.style.position="fixed";
        fundo.style.left="0";
        fundo.style.top="0";
        fundo.style.width="100%";
        fundo.style.height="100vh";
        fundo.style.background="rgba(0,0,0,.9)";
        fundo.style.display="flex";
        fundo.style.justifyContent="center";
        fundo.style.alignItems="center";
        fundo.style.zIndex="99999";

        const foto=document.createElement("img");

        foto.src=img.src;

        foto.style.maxWidth="90%";
        foto.style.maxHeight="90%";
        foto.style.borderRadius="15px";

        fundo.appendChild(foto);

        document.body.appendChild(fundo);

        fundo.onclick=()=>{

            fundo.remove();

        }

    });

});

// ==========================
// DIGITAÇÃO NO HERO
// ==========================

const titulo=document.querySelector(".hero h1");

if(titulo){

    const texto=titulo.innerText;

    titulo.innerHTML="";

    let i=0;

    function escrever(){

        if(i<texto.length){

            titulo.innerHTML+=texto.charAt(i);

            i++;

            setTimeout(escrever,60);

        }

    }

    escrever();

}

// ==========================
// REVELAR ELEMENTOS
// ==========================

const revelar=document.querySelectorAll("section");

const aparecer=()=>{

    revelar.forEach(sec=>{

        const topoJanela=window.innerHeight;

        const distancia=sec.getBoundingClientRect().top;

        if(distancia<topoJanela-120){

            sec.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll",aparecer);

aparecer();

// ==========================
// PARALLAX HERO
// ==========================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let y=window.scrollY;

    hero.style.backgroundPosition=`center ${y*0.5}px`;

});

// ==========================
// ANO AUTOMÁTICO
// ==========================

const copy=document.querySelector(".copy");

if(copy){

    copy.innerHTML=`© ${new Date().getFullYear()} - Projeto Corinthians`;

}

console.log("Projeto Corinthians carregado com sucesso!");
