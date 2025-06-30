// Charger les traductions depuis le fichier JSON
let translations = {};
fetch('translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        initComponents('fr'); // Par défaut, nous chargeons les traductions en français
    })
    .catch(error => console.error('Error loading translations:', error));

// Header Component
function createHeader(lang) {
    const t = translations[lang].header;
    return `
          <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#363636] px-10 py-3">
            
            <div class="flex flex-1 justify-center gap-8">
              <div class="flex items-center gap-9">
                <a class="text-white text-sm-bold leading-normal" href="#featured-projects">${t.projects}</a>
                    <a class="text-white text-sm font-medium leading-normal" href="#passions">${t.passion}</a>
                <a class="text-white text-sm font-medium leading-normal" href="#skills">${t.skills}</a>
                <a class="text-white text-sm font-medium leading-normal" href="#contact">${t.contact}</a>
              </div>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">${t.resume}</span>
              </button>
            </div>
          </header>
        `;
}

// Hero Section Component
function createHero(lang) {
    const t = translations[lang].hero;
    return `
   <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1080px] flex-1">
        <div class="@container">
            <div class="@[480px]:p-4">
                <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 hero-section relative">
                    <div class="flex flex-row items-end justify-between w-full">
                        <div class="flex flex-col gap-2 text-left">
                            <h1 id="titleHero" class="text-black text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                ${t.title}
                            </h1>
                            <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">${t.subtitle}</h2>
                            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                <span class="truncate">${t.button}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    `;
}



// About Me Section Component
function createAboutMe(lang) {
    const t = translations[lang].aboutMe;
    return `
          <section class="about-me">
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">${t.title}</h2>
            <div class="flex p-4 @container">
              <div class="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between">
                <div class="flex gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-32 w-32 profile-image"
                  ></div>
                  <div class="flex flex-col">
                    <p class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">${t.name}</p>
                    <p class="text-[#adadad] text-base font-normal leading-normal">${t.role}</p>
                    <p class="text-[#adadad] text-base font-normal leading-normal">
                      ${t.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
}

// Skills Section Component
function createSkills(lang) {
    const t = translations[lang].skills;
    const skills = [

        {
            category: "Langage de développement",
            skills: [
                { name: "PHP 5,7,8", level: "4", icon: "Code" },
                { name: "Symfony", level: "4", icon: "Code" },
                { name: "SQL", level: "4", icon: "Code" },
                { name: "Lua", level: "3", icon: "Code" },
                { name: "JavaScript", level: "3", icon: "Code" },
                { name: "TypeScript", level: "3", icon: "Code" },
                { name: "Python", level: "2", icon: "Code" },
                { name: "Angular", level: "2", icon: "Code" },
                { name: "Java", level: "1", icon: "Code" },
                { name: "C++", level: "1", icon: "Code" },
                { name: "Node JS", level: "2", icon: "Code" }
            ]
        },
        {
            category: "DevOps",
            skills: [
                { name: "GitLab CI", level: "3", icon: "Code" },
                { name: "CI/CD", level: "3", icon: "Code" },
                { name: "Docker", level: "4", icon: "Code" },
                { name: "GitHub", level: "3", icon: "Code" },
                { name: "Git", level: "3", icon: "Code" },
                { name: "VMware", level: "2", icon: "Code" },
                { name: "Azure DevOps", level: "2", icon: "Code" },
                { name: "Sonar", level: "1", icon: "Code" },
                { name: "Kubernetes (Cloud)", level: "2", icon: "Code" },
                { name: "Kibana", level: "2", icon: "Code" }
            ]
        },
    ];

    let skillsHTML = `
            <section class="skills">
                <h2 class="text-white text-[22px]  font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">${t.title}</h2>
        `;

    // Pour chaque catégorie, créer une section
    skills.forEach(category => {
        skillsHTML += `
                <div class="category">
                    <h3 class="text-white text-lg font-bold leading-tight px-4 pb-3 pt-5">${category.category}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-3 p-4">
            `;

        function generateStarRating(level) {
            let starsHTML = '';
            const maxLevel = 5;

            for (let i = 1; i <= maxLevel; i++) {
                if (i <= level) {
                    starsHTML += '<span class="star filled">★</span>'; // Étoile remplie (jaune)
                } else {
                    starsHTML += '<span class="star empty">★</span>'; // Étoile vide (blanc)
                }
            }

            return starsHTML;
        }

        // Pour chaque ligne de compétences, créer une ligne
// Utilisation dans votre code existant
        category.skills.forEach(skill => {
            skillsHTML += `
        <div class="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 items-center max-w-xs">
            <div class="text-white" data-icon="${skill.icon}" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                    ></path>
                </svg>
            </div>
            <h2 class="text-white text-base font-bold leading-tight">${skill.name} ${generateStarRating(skill.level)}</h2>
        </div>
    `;
        });

        skillsHTML += `
                    </div>
                </div>
            `;
    });

    skillsHTML += `
            </section>
        `;

    return skillsHTML;
}

// Passions Section Component
function createPassions(lang) {
    const t = translations[lang].passions;
    const passions = [
        {name: "Musique", icon: "Musique"},
        {name: "Guitare", icon: "Guitare"},
        {name: "Dessiner", icon: "Dessiner"},
        {name: "Judo", icon: "Judo"},
        // Ajoutez d'autres passions ici
    ];
    let passionsHTML = `
        <section class="passions w-screen h-screen flex flex-col">
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">${t.title}</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 flex-grow">
        `;
    passions.forEach(passion => {
        passionsHTML += `
            <div  class="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4  items-center justify-center bg-[url(contenue/bgCard.jpg)]">
              <div class="text-white" data-icon="${passion.icon}" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l18.74,31.8,0,0L154,192Zm150.57,0-16.66-28.28L186.55,112,234,192Z"
                  ></path>
                </svg>
              </div>
              <h2 class="text-white text-base font-bold leading-tight">${passion.name}</h2>
            </div>
          `;
    });
    passionsHTML += `
            </div>
          </section>
        `;
    return passionsHTML;
}


// Contact Section Component
function createContact(lang) {
    const t = translations[lang].contact;
    return `
          <section class="contact">
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">${t.title}</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-white text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="${t.emailPlaceholder}"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3 justify-start">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">${t.sendButton}</span>
              </button>
            </div>
          </section>
        `;
}

// Featured Projects Section Component
function createFeaturedProjects(lang) {
    const t = translations[lang].featuredProjects;
    const projects = [
        {
            name: t.projectZenith.name,
            description: t.projectZenith.description,
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM-YxBde3hrEYYUpMnAh6l97DVsqul0VmlSVWmd7sY-7Ejx7JPrXtUTVW6EbaFEl2N8tBcggkpY4qwTugkvCscNbbLdOGReT5SwQRAjBHERjh7pnC4n1GCkuNVVrg7ZO0qORFxwfH0VZ8DLp6FDjNgrNV4dZCgn6boPsoFwbXOMB5WLHnb7duUAESCd2vr0fMSt_xL84GdAgngYh8r65n-SlpCs0t7GBd7W2D3E_Tx4nuKoGvWjwmiVJzlSQg5io0KqY7E9JFKZFM"
        },
        {
            name: t.projectZenith.name,
            description: t.projectZenith.description,
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM-YxBde3hrEYYUpMnAh6l97DVsqul0VmlSVWmd7sY-7Ejx7JPrXtUTVW6EbaFEl2N8tBcggkpY4qwTugkvCscNbbLdOGReT5SwQRAjBHERjh7pnC4n1GCkuNVVrg7ZO0qORFxwfH0VZ8DLp6FDjNgrNV4dZCgn6boPsoFwbXOMB5WLHnb7duUAESCd2vr0fMSt_xL84GdAgngYh8r65n-SlpCs0t7GBd7W2D3E_Tx4nuKoGvWjwmiVJzlSQg5io0KqY7E9JFKZFM"
        },
        {
            name: t.projectZenith.name,
            description: t.projectZenith.description,
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM-YxBde3hrEYYUpMnAh6l97DVsqul0VmlSVWmd7sY-7Ejx7JPrXtUTVW6EbaFEl2N8tBcggkpY4qwTugkvCscNbbLdOGReT5SwQRAjBHERjh7pnC4n1GCkuNVVrg7ZO0qORFxwfH0VZ8DLp6FDjNgrNV4dZCgn6boPsoFwbXOMB5WLHnb7duUAESCd2vr0fMSt_xL84GdAgngYh8r65n-SlpCs0t7GBd7W2D3E_Tx4nuKoGvWjwmiVJzlSQg5io0KqY7E9JFKZFM"
        },
        // Ajoutez d'autres projets ici
    ];
    let projectsHTML = `
          <section class="featured-projects">
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">${t.title}</h2>
        `;
    projects.forEach(project => {
        projectsHTML += `
            <div class="p-10 @container ">
              <div class=" projectContainer flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl project-image" style="margin: 2em"
                ></div>
                <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">${project.name}</p>
                  <div class="flex items-end gap-3 justify-between">
                    <p class="text-black text-base font-normal leading-normal">
                      ${project.description}
                    </p>
                    <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-black text-white text-sm font-medium leading-normal"
                    >
                      <span class="truncate">${t.projectZenith.button}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
    });
    projectsHTML += `
          </section>
        `;
    return projectsHTML;
}

// Footer Component
function createFooter() {
    return `
          <footer class="flex justify-center">
            <div class="flex max-w-[960px] flex-1 flex-col">
              <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
                <div class="flex flex-wrap justify-center gap-4">
                  <a href="#">
                    <div class="text-[#adadad]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.08,129.72-123.45,0-3.68-.35-7.31-.98-10.89a80.82,80.82,0,0,1,25.41-28.57,8,8,0,0,0,2.37-8.49c.28-6.6-.23-13.26-.23-19.98a8,8,0,0,0-12.4-7.65c3.83,7,5.94,14.55,5.94,22.35s-2.12,15.35-5.94,22.36a80.21,80.21,0,0,1-34.43,28.11c-1.92,1.18-3.87,2.31-5.85,3.39.69,4.09,1.08,8.25,1.08,12.49a104.4,104.4,0,0,1-32.79,31.5,2.34,2.34,0,0,0,.38,2.73,2.34,2.34,0,0,0,2.35.2,104.33,104.33,0,0,1,32.79-31.5c0-2.21-.17-4.4-.24-6.56a8,8,0,0,0-2.35-.86A64.12,64.12,0,0,1,168.1,132c0-35.34-28.67-64-64.07-64A64.17,64.17,0,0,0,16.1,132a64,64,0,0,0,95.87,60.06,8,8,0,0,0,10.16-10.16,63.87,63.87,0,0,1,87.22,0,8,8,0,0,0,10.17,10.17,80,80,0,0,1-28.9,46.7c49.67-4.5,93-40.23,98.43-87.68A16,16,0,0,0,247.39,68.94Z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </footer>
            </div>
          </footer>
        `;
}

// Fonction pour initialiser les composants
function initComponents(lang) {
    document.getElementById('header').innerHTML = createHeader(lang);
    document.getElementById('hero').innerHTML = createHero(lang);
    document.getElementById('about-me').innerHTML = createAboutMe(lang);
    document.getElementById('skills').innerHTML = createSkills(lang);
    document.getElementById('passions').innerHTML = createPassions(lang);
    document.getElementById('contact').innerHTML = createContact(lang);
    document.getElementById('featured-projects').innerHTML = createFeaturedProjects(lang);
    document.getElementById('footer').innerHTML = createFooter();
}