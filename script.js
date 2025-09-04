function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pegar a tag img e criar uma const
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se estiver no light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Rogério Franco com fundo branco")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
