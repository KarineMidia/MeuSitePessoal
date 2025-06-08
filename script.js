document.addEventListener("DOMContentLoaded", () => {
    alert("Bem-vindo ao meu site 😍")
})

const titulo =document.querySelector("h1")

titulo.style.color= "gray"
titulo.style.fontSize = "20px"

const cards = [
    {titulo: "Criativa Mídia", descricao: "Serviços de Mídias Digitais"},
    {titulo: "Psicologia", descricao: "Acolhimento Psicoligo"},
    {titulo: "Beleza & Bem-Estar", descricao: "Serviços de estetica"}
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
const frases = [
    "A vida é feita de escolhas.",
    "A persistência é o caminho do êxito.",
    "A gratidão transforma o que temos em suficiente.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "Você é capaz de realizar coisas incríveis.",
    "Acredite em si mesmo e tudo será possível.",
    "A vida é uma jornada, aproveite cada passo.",
    "A mudança é o primeiro passo para o crescimento.",
    "A simplicidade é o último grau de sofisticação.",
    "A beleza está nos olhos de quem vê.",
    "A vida é uma aventura, aproveite cada momento.",
    "A paciência é amarga, mas seus frutos são doces.",
    "A sabedoria começa na reflexão.",
    "A vida é curta, faça valer a pena.",
    "A alegria é contagiante, espalhe-a por onde for.",
    "Você é mais forte do que imagina.",
]; 

const foto = document.querySelector(".minhafoto")
function mostrarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    alert(frases[indice]);
}
foto.addEventListener("click", mostrarFrase);