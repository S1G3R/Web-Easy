document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica para o Checklist da Aula (aula_exemplo.html) ---
    const checklist = document.querySelector('.checklist');
    if (checklist) { // Verifica se o checklist existe na página
        const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
        // Obtém o ID único da aula do atributo data-lesson-id
        const lessonId = checklist.dataset.lessonId || 'default_lesson';

        // Carrega o estado do checklist ao carregar a página
        checkboxes.forEach(checkbox => {
            const storageKey = `${lessonId}_${checkbox.id}`;
            if (localStorage.getItem(storageKey) === 'checked') {
                checkbox.checked = true;
                checkbox.nextElementSibling.classList.add('completed'); // Adiciona a classe para riscar
            }
        });

        // Salva o estado do checklist ao clicar e atualiza o estilo
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const storageKey = `${lessonId}_${this.id}`;
                if (this.checked) {
                    localStorage.setItem(storageKey, 'checked');
                    this.nextElementSibling.classList.add('completed');
                } else {
                    localStorage.removeItem(storageKey);
                    this.nextElementSibling.classList.remove('completed');
                }
            });
        });
    }


    // --- Lógica para o Acordeão do FAQ (faq.html) ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) { // Verifica se há perguntas FAQ na página
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.closest('.faq-item');
                // Fecha qualquer outro item aberto antes de abrir este
                document.querySelectorAll('.faq-item.active').forEach(item => {
                    if (item !== faqItem) { // Se não for o item clicado, fecha
                        item.classList.remove('active');
                    }
                });
                faqItem.classList.toggle('active');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Opcional: Fechar o menu quando um link é clicado (útil para mobile)
    const navLinks = document.querySelectorAll('.nav-list .nav-button');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Função para o Formulário de Reportar Problema ---

    // Certifique-se de que a tag <form> no seu HTML tenha id="reportForm"
    const reportForm = document.getElementById('reportForm');

    if (reportForm) {
        reportForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            // Aqui você faria a validação real dos dados do formulário
            // e enviaria para um servidor (AJAX/Fetch API).
            // Por agora, vamos simular o sucesso.
            
            // Opcional: Coleta de dados do formulário (apenas para demonstração no console)
            const formData = new FormData(reportForm);
            console.log("Dados do formulário de Reportar Problema enviados (simulado):");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            alert('Seu problema foi reportado com sucesso. Agradecemos seu feedback!'); // Mensagem de sucesso

            // Redireciona para o index.html após um pequeno atraso
            setTimeout(function() {
                window.location.href = '/index.html';
            }, 500); // 500ms de atraso (meio segundo)
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Função para o Formulário de Login ---

    // Certifique-se de que a tag <form> no seu HTML tenha id="login"
    const loginForm = document.getElementById('login');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            // Aqui você faria a validação real dos dados do formulário
            // (ex: verificar e-mail/senha) e enviaria para um servidor (AJAX/Fetch API).
            // Por agora, vamos simular o sucesso.
            
            // Opcional: Coleta de dados do formulário (apenas para demonstração no console)
            const formData = new FormData(loginForm);
            console.log("Dados do formulário de Login enviados (simulado):");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            alert('Login efetuado com sucesso!'); // Mensagem de sucesso

            // Redireciona para o index.html após um pequeno atraso
            setTimeout(function() {
                window.location.href = '/index.html'; // Redireciona para a página inicial
            }, 500); // 500ms de atraso (meio segundo)
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Função para o Formulário de Cadastro ---

    // Certifique-se de que a tag <form> no seu HTML tenha id="cadastroForm"
    const cadastroForm = document.getElementById('cadastroForm');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            // Aqui você faria a validação real dos dados do formulário
            // (ex: verificar senhas iguais, formato de e-mail)
            // e enviaria para um servidor (AJAX/Fetch API).
            // Por agora, vamos simular o sucesso.

            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;

            if (password !== confirmPassword) {
                alert('As senhas não coincidem. Por favor, verifique.');
                return; // Impede o envio se as senhas não forem iguais
            }
            
            // Opcional: Coleta de dados do formulário (apenas para demonstração no console)
            const formData = new FormData(cadastroForm);
            console.log("Dados do formulário de Cadastro enviados (simulado):");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            alert('Cadastro realizado com sucesso! Bem-vindo(a)!'); // Mensagem de sucesso

            // Redireciona para o index.html após um pequeno atraso
            setTimeout(function() {
                window.location.href = '/index.html'; // Redireciona para a página inicial
            }, 500); // 500ms de atraso (meio segundo)
        });
    }
});