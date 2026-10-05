(() => {
  document.documentElement.classList.add('js-enabled');
  const translations = {
    pt: {
      navWork:'Trabalho',navAbout:'Sobre',navContact:'Contacto',navCta:'Vamos conversar',
      heroEyebrow:'DESIGN WEB · LANDING PAGES · À DISTÂNCIA',heroLine1:'Uma boa ideia',heroLine2:'merece espaço.',heroCopy:'Crio landing pages visuais para apresentar marcas, produtos e serviços com clareza. Cada página ganha uma direção própria, pronta para chegar às pessoas — onde quer que estejam.',heroButton:'Explorar o trabalho',heroTalk:'Falar comigo',heroLocation:'BASEADO NO BRASIL · A CRIAR PARA TODO O LADO',
      workEyebrow:'01 / ESPAÇO DE PROJETOS',workLine1:'Cada marca pede',workLine2:'um olhar próprio.',workNote:'Uma seleção de trabalhos vai aparecer aqui. Os primeiros projetos entram assim que os links estiverem prontos.',projectDemo:'ESTUDO VISUAL · DEMONSTRAÇÃO',projectOne:'Bem-estar & movimento',projectTwo:'Arquitetura & interiores',projectThree:'Serviços profissionais',workFoot:'Conceitos visuais fictícios. Os projetos reais e respetivos links podem ser acrescentados quando estiverem disponíveis.',
      aboutEyebrow:'02 / UM POUCO SOBRE MIM',aboutLine1:'A página não é só',aboutLine2:'o que se vê.',aboutCopy1:'É como uma marca se apresenta, como explica o que faz e como convida alguém a dar o próximo passo. Gosto de trabalhar esses elementos juntos: estrutura, palavras e linguagem visual.',aboutCopy2:'Cada projeto começa por uma conversa e cresce a partir da ideia. Sem fórmula pronta — com intenção em cada escolha.',
      servicesEyebrow:'03 / O QUE FAÇO',servicesLine1:'Uma página.',servicesLine2:'Uma direção.',servicesCopy:'Landing pages pensadas de início ao fim para apresentar uma ideia e torná-la fácil de conhecer.',servicesLink:'Conversar sobre uma página',service1:'Direção visual própria',service1Copy:'Uma linguagem feita à medida da marca e da ideia.',service2:'Estrutura que guia',service2Copy:'Conteúdo organizado para o visitante entender e avançar.',service3:'Adaptação a cada ecrã',service3Copy:'Uma experiência confortável em computador e telemóvel.',service4:'Detalhe e interação',service4Copy:'Movimento subtil, estados cuidadosos e acabamento consistente.',
      processEyebrow:'04 / COMO A IDEIA GANHA FORMA',processLine1:'Do primeiro olá',processLine2:'à página no ar.',processNote:'Um processo simples, acompanhado de perto em cada etapa.',step1:'A conversa',step1Copy:'Falamos sobre a ideia, a marca e o que a página precisa de fazer.',step2:'O conceito',step2Copy:'Definimos juntos a estrutura, o tom e o caminho visual.',step3:'A página',step3Copy:'A ideia ganha forma numa página responsiva e pronta para apresentar.',
      contactEyebrow:'05 / TEM UMA IDEIA?',contactLine1:'Vamos dar-lhe',contactLine2:'uma boa página.',contactCopy:'Conte-me um pouco sobre o que está a imaginar. Podemos começar por aí.',contactButton:'Chamar no WhatsApp',footerNote:'Landing pages para ideias com vontade de chegar mais longe.',footerLegal:'Projetos demonstrativos assinalados como conceitos fictícios.',backTop:'VOLTAR AO TOPO ↑'
    },
    en: {
      navWork:'Work',navAbout:'About',navContact:'Contact',navCta:'Let’s talk',
      heroEyebrow:'WEB DESIGN · LANDING PAGES · REMOTE',heroLine1:'A good idea',heroLine2:'deserves space.',heroCopy:'I create visual landing pages that present brands, products and services with clarity. Each page gets its own direction, ready to reach people — wherever they are.',heroButton:'Explore the work',heroTalk:'Talk to me',heroLocation:'BASED IN BRAZIL · CREATING EVERYWHERE',
      workEyebrow:'01 / PROJECT SPACE',workLine1:'Every brand deserves',workLine2:'its own point of view.',workNote:'A selection of work will appear here. The first projects will be added as soon as their links are ready.',projectDemo:'VISUAL STUDY · DEMONSTRATION',projectOne:'Wellness & movement',projectTwo:'Architecture & interiors',projectThree:'Professional services',workFoot:'Fictional visual concepts. Real projects and their links can be added when they are available.',
      aboutEyebrow:'02 / A LITTLE ABOUT ME',aboutLine1:'A page is more than',aboutLine2:'what you see.',aboutCopy1:'It is how a brand introduces itself, explains what it does and invites someone to take the next step. I like bringing those elements together: structure, words and visual language.',aboutCopy2:'Every project starts with a conversation and grows from the idea. No ready-made formula — intention behind every choice.',
      servicesEyebrow:'03 / WHAT I DO',servicesLine1:'One page.',servicesLine2:'One clear direction.',servicesCopy:'End-to-end landing pages designed to introduce an idea and make it easy to explore.',servicesLink:'Talk about a landing page',service1:'Distinct visual direction',service1Copy:'A visual language shaped around the brand and its idea.',service2:'Structure that guides',service2Copy:'Content organised to help visitors understand and move forward.',service3:'Designed for every screen',service3Copy:'A comfortable experience on desktop and mobile.',service4:'Detail & interaction',service4Copy:'Subtle motion, considered states and a consistent finish.',
      processEyebrow:'04 / HOW THE IDEA TAKES SHAPE',processLine1:'From the first hello',processLine2:'to a page that’s live.',processNote:'A simple process, with close collaboration at every step.',step1:'The conversation',step1Copy:'We talk about the idea, the brand and what the page needs to do.',step2:'The concept',step2Copy:'Together we define the structure, tone and visual direction.',step3:'The page',step3Copy:'The idea becomes a responsive page, ready to present.',
      contactEyebrow:'05 / HAVE AN IDEA?',contactLine1:'Let’s give it',contactLine2:'a great page.',contactCopy:'Tell me a little about what you have in mind. We can start there.',contactButton:'Message me on WhatsApp',footerNote:'Landing pages for ideas ready to go further.',footerLegal:'Demonstration projects are labelled as fictional concepts.',backTop:'BACK TO TOP ↑'
    }
  };

  const languageButton = document.querySelector('.language-toggle');
  let language = 'pt';
  const applyLanguage = () => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = translations[language][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    languageButton.textContent = language === 'pt' ? 'EN ↗' : 'PT ↗';
    languageButton.setAttribute('aria-label', language === 'pt' ? 'Switch to English' : 'Mudar para português');
  };
  languageButton.addEventListener('click', () => { language = language === 'pt' ? 'en' : 'pt'; applyLanguage(); });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('open');
  }));

  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach(node => observer.observe(node));
    window.setTimeout(() => reveals.forEach(node => node.classList.add('is-visible')), 2600);
  } else reveals.forEach(node => node.classList.add('is-visible'));

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--project-x', `${(event.clientX - rect.left) / rect.width * 100}%`);
        card.style.setProperty('--project-y', `${(event.clientY - rect.top) / rect.height * 100}%`);
      });
    });
  }
})();


