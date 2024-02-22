function toggleMode() {
    const html = document.documentElement // Usa o '.' para acessar propriedades do documento.

    // if abreviado:
    // html.classList.toggle('light')
    if (html.classList.contains('light')) { 
        html.classList.remove('light') 
    } else {
        html.classList.add('light')
    }

    // pegar a tag img
    const img = document.querySelector('#profile img')

    // substituir a imagem
    if (html.classList.contains('light')) {
        img.setAttribute('src', './imagens/eu-oficial-normal.png')
    } else {
        img.setAttribute('src', './imagens/eu-amarelo.png')
    }

    


}

