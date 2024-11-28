// Função para carregar projetos do JSON e exibi-los
async function loadProjects() {
    try {
        const response = await fetch('./projects.json');
        const projects = await response.json();

        const container = document.getElementById('projects-container');
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'bg-slate-800 p-4 rounded shadow-md flex flex-col gap-4';

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.name}" class="rounded">
                <h3 class="text-2xl font-bold text-amber-500">${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="text-sky-700 font-bold hover:underline">Acessar Projeto</a>
            `;

            container.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
    }
}

// Carregar os projetos ao carregar a página
document.addEventListener('DOMContentLoaded', loadProjects);






//faq
const faqJsonUrl = "./faq.json";

const faqContainer = document.getElementById("faq-container");

async function loadFAQs() {
    try {
        // Fetch do JSON
        const response = await fetch(faqJsonUrl);
        const data = await response.json();

        // Gerar e inserir os detalhes dinamicamente
        data.faq.forEach(item => {
            const faqItem = document.createElement("details");
            faqItem.classList.add("bg-slate-700", "rounded-lg", "p-6", "shadow-lg");

            faqItem.innerHTML = `
                    <summary class="font-bold text-lg text-amber-500 cursor-pointer">${item.question}</summary>
                    <p class="mt-2 text-sm leading-relaxed">${item.answer}</p>
                `;

            faqContainer.appendChild(faqItem);
        });
    } catch (error) {
        console.error("Erro ao carregar o FAQ:", error);
    }
}

// Chamar a função ao carregar a página
loadFAQs();
