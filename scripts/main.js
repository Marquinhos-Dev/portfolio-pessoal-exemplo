// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Executa a função do formulário ao carregar a página
    mostrarFormulario();

    // Configura o evento de submit do formulário
    const form = document.getElementById('contactForm');

    // Chama a função quando o botão é clicado
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        mostrarMensagemSucesso();
    });
});

// Função para mostrar a mensagem
function mostrarMensagemSucesso()
{    
    // Oculta o formulário e mostra a mensagem de sucesso
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensagemSucesso').style.display = 'block';
};

// Função para voltar ao formulário
function mostrarFormulario()
{
    // Oculta a mensagem e mostra o formulário
    document.getElementById('mensagemSucesso').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
    
    // Limpa os campos do formulário
    document.getElementById('contactForm').reset();
};