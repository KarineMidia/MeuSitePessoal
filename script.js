alert("Bem-vindo ao meu site 😍")

const titulo =document.querySelector("h1")

titulo.style.textAlign = "right"
titulo.style.color= "gray"
titulo.style.fontSize = "20px"

const cards = [
    {titulo: "Criativa Mídia", descricao: "Serviços de Mídias Digitais"},
    {titulo: "Psicologia", descricao: "Acolhimento Psicoligo"},
    {titulo: "Autoestima", descricao: "Serviços de estetica"}
]

const quadros = document.querySelector(".cards")
for(let i = 0; i < cards.length; i++){
    const card = document.createElement("div");
    card.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = cards[i].titulo

    const p = document.createElement('p')
    p.textContent = cards[i].descricao

    card.append(h2, p)
    quadros.append(card)

}