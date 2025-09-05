document.addEventListener('DOMContentLoaded', function() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  
  if (usuario) {
    // Preenche o perfil com as informações do usuário
    const perfilAvatar = document.querySelector('.profile-avatar');
    const perfilNome = document.getElementById('perfilNome');
    const perfilEmail = document.getElementById('perfilEmail');
    const perfilIdade = document.getElementById('perfilIdade');
    const perfilNascimento = document.getElementById('perfilNascimento');

    perfilNome.textContent = `${usuario.nome} ${usuario.sobrenome}`;
    perfilEmail.textContent = `Email: ${usuario.email}`;
    perfilIdade.textContent = `Idade: ${usuario.idade}`;
    perfilNascimento.textContent = `Nascimento: ${usuario.nascimento}`;

    // Detalhes completos
    document.getElementById('perfilNomeCompleto').textContent = `${usuario.nome} ${usuario.sobrenome}`;
    document.getElementById('perfilEmailCompleto').textContent = usuario.email;
    document.getElementById('perfilIdadeCompleta').textContent = usuario.idade;
    document.getElementById('perfilNascimentoCompleto').textContent = usuario.nascimento;

    // Se o usuário tiver foto, exibimos a foto; caso contrário, exibimos a inicial com cor
    if (usuario.foto) {
      perfilAvatar.innerHTML = `<img src="${usuario.foto}" alt="Foto do usuário" style="width: 100%; height: 100%; border-radius: 50%;">`;
    } else {
      const color = generateAvatarColor(usuario.nome);
      perfilAvatar.style.backgroundColor = color;
      perfilAvatar.innerHTML = `<span>${usuario.nome[0].toUpperCase()}</span>`;
    }
  }

  // Função para gerar a cor do avatar com base no nome
  function generateAvatarColor(name) {
    const colors = ['#DC143C', '#FF6347', '#FF4500', '#008080', '#FFD700', '#8A2BE2'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  }

  // Alternar detalhes do perfil
  window.toggleDetails = function() {
    const details = document.getElementById('profileDetails');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  }
});
