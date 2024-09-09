function moveButton() {
    // Obtém as dimensões da janela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Gera posições aleatórias para o container
    const randomX = Math.random() * (windowWidth - 200); // Considera uma margem para evitar que o container saia da tela
    const randomY = Math.random() * (windowHeight - 200); // Ajusta a altura do container

    // Obtém o elemento do container
    const container = document.getElementById('container_conteudo');

    // Altera a posição do container
    container.style.left = randomX + 'px';
    container.style.top = randomY + 'px';
}