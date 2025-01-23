document.addEventListener("scroll", () => {
    const section = document.querySelector(".programas");
    const bars = document.querySelectorAll(".bar");
  
    // Calcula a posição da seção em relação à janela de visualização
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.getBoundingClientRect().height;
  
    // Inicia a animação apenas quando a seção está totalmente visível
    if (sectionTop < window.innerHeight - sectionHeight / 4) {
      bars.forEach((bar, index) => {
        setTimeout(() => {
          bar.classList.add("grow");
        }, index * 200); // Delay de 200ms entre cada barra
      });
  
      // Remove o listener para que a animação aconteça apenas uma vez
      document.removeEventListener("scroll", arguments.callee);
    }
  });
  const hamb = document.querySelector('.menu-hamb'); // Botão hambúrguer
  const nav = document.querySelector('nav ul'); // O modal ou menu
  
  // Abre o menu/modal
  hamb.addEventListener('click', () => {
    nav.style.top = "0";
  });
  
  // Fecha o menu/modal ao clicar fora
  document.addEventListener('click', (event) => {
    // Verifica se o clique não foi no botão nem no menu
    if (!nav.contains(event.target) && !hamb.contains(event.target)) {
      nav.style.top = "-100%"; // Reposiciona o menu para fora da tela
    }
  });







const links = document.querySelectorAll(".list li a")

links.forEach((i) => {
  i.addEventListener('click',()=> {
    setTimeout(() => {
      nav.style.top = "-100%"; 
    },500)
    
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".aulas > h1");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          } 
      });
  });

  observer.observe(target);
});


document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".items-wrapper");
  const items = document.querySelectorAll(".items-wrapper div");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              // Aplica classe `visible` sequencialmente em cada item
              items.forEach((item, index) => {
                  setTimeout(() => {
                      item.classList.add("visible");
                  }, index * 200); // Intervalo de 200ms entre cada item
              });

              // Para observar novamente, desconecte o observer
              observer.disconnect();
          }
      });
  });

  observer.observe(wrapper);
});

const linkAula = document.querySelector('.more')

linkAula.addEventListener('click', () => {
  document.querySelector('.aulas-schema').classList.add('active')
  document.body.classList.add('no-scroll');
  
})

document.querySelector('.close2').addEventListener('click', () => {
  document.querySelector('.aulas-schema').classList.remove('active')
  
  document.body.classList.remove('no-scroll');

})

  