// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById('comentarioForm');
  const nomeInput = document.getElementById('nome');
  const mensagemInput = document.getElementById('mensagem');
  const comentariosContainer = document.getElementById('comentarios');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const modalText = document.getElementById('modalText');

  // Função para formatar a data e hora
  function getCurrentDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Função para adicionar o comentário
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = nomeInput.value;
    const mensagem = mensagemInput.value;
    const hora = getCurrentDateTime();

    if (nome && mensagem) {
      // Criar novo comentário
      const comentario = document.createElement('div');
      comentario.classList.add('comentario');
      comentario.innerHTML = `
        <div class="comentario-avatar">
          <img src="https://via.placeholder.com/40" alt="Avatar" style="border-radius: 50%;">
        </div>
        <div class="comentario-texto">
          <strong>${nome}</strong> <span style="color: #777; font-size: 0.8rem;">${hora}</span>
          <p>${mensagem}</p>
        </div>
      `;
      
      // Adicionar o comentário à seção de comentários
      comentariosContainer.appendChild(comentario);
      
      // Exibir o modal
      modalText.innerText = `Comentário de ${nome} enviado com sucesso!`;
      modal.style.display = "block";

      // Limpar os campos do formulário
      nomeInput.value = '';
      mensagemInput.value = '';
    }
  });

  // Fechar o modal
  closeModal.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // Fechar o modal se clicar fora do conteúdo do modal
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

