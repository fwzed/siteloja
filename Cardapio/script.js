var carrinho = []
const LULU_INVERNO = 'LI'
const LULU_COSMICA= 'LC'
const LULU_DOCEIRA= 'LD'
const LULU_PERVERSA= 'LP'
const LULU_ESTELAR= 'LGE'

const ZED_JURADO= 'ZJM'
const ZED_MUNDIAL= 'ZM'
const ZED_DIZIMADOR= 'ZDG'
const ZED_PROJETO= 'ZP'
const ZED_LAMINA= 'ZLT'

const SHACO_QUEBRA= 'SQN'
const SHACO_ARCANISTA= 'SA'
const SHACO_GOSEONG= 'SG'
const SHACO_MANIKAS= 'SM'
const SHACO_STAR= 'SEN'


const NUNU_BRINQUEDO= 'TNB'
const NUNU_DEMOLIDOR= 'ND'
const NUNU_ROBOTICO= 'NR'
const NUNU_NATAL= 'NN'
const NUNU_GRANDE= 'NPG'


const SHEN_GELIDO= 'SG'
const SHEN_INFERNAL= 'SI'
const SHEN_LUA= 'SLS'
const SHEN_PULSE= 'SP'
const SHEN_SCORPION= 'SAR'

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
var nota = []

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })

function addToCart(id){
    switch(id){
        case LULU_INVERNO:
            carrinho.push({id:LULU_INVERNO, nome:"Macarons", valor:12})
            break;
        case LULU_COSMICA:
            carrinho.push({id:LULU_COSMICA, nome:"Cupcake de Morango", valor:12})
            break;
        case LULU_DOCEIRA:
            carrinho.push({id:LULU_DOCEIRA, nome:"Donut de Chocolate ", valor:7})
            break;
        case LULU_PERVERSA:
            carrinho.push({id:LULU_PERVERSA, nome:"Panqueca", valor:7})
            break;
        case LULU_ESTELAR:
            carrinho.push({id:LULU_ESTELAR, nome:"Torta de Mirtilo", valor:7})
            break;
        case ZED_JURADO:
            carrinho.push({id:ZED_JURADO, nome:"Pink Lemonade", valor:5})
            break;
        case ZED_MUNDIAL:
            carrinho.push({id:ZED_MUNDIAL, nome:"Água", valor:7})
            break;
        case ZED_DIZIMADOR:
            carrinho.push({id:ZED_DIZIMADOR, nome:"Café Gelado ", valor:12})
            break;
        case ZED_PROJETO:
            carrinho.push({id:ZED_PROJETO, nome:"Matcha Gelado", valor:12})
            break;
        case ZED_LAMINA:
            carrinho.push({id:ZED_LAMINA, nome:"Refrigerante", valor:12})
            break;
        case SHACO_QUEBRA:
            carrinho.push({id:SHACO_QUEBRA, nome:"Pizza", valor:12})
            break;
        case SHACO_ARCANISTA:
            carrinho.push({id:SHACO_ARCANISTA, nome:"torrada com Ovo", valor:12})
            break;
        case SHACO_GOSEONG:
            carrinho.push({id:SHACO_GOSEONG, nome:"Croassaint de Presunto", valor:12})
            break;
        case SHACO_MANIKAS:
            carrinho.push({id:SHACO_MANIKAS, nome:"Bagel Tradicional ", valor:12})
            break;
        case SHACO_STAR:
            carrinho.push({id:SHACO_STAR, nome:"Misto Quente  ", valor:12})
            break;
        case NUNU_BRINQUEDO:
            carrinho.push({id:NUNU_BRINQUEDO, nome:"Chá de Ibiso", valor:12})
            break;
        case NUNU_DEMOLIDOR:
            carrinho.push({id:NUNU_DEMOLIDOR, nome:"Matcha Latte", valor:12})
            break;
        case NUNU_ROBOTICO:
            carrinho.push({id:NUNU_ROBOTICO, nome:"Café de Canela", valor:12})
            break;
        case NUNU_NATAL:
            carrinho.push({id:NUNU_NATAL, nome:"Café Espresso", valor:12})
            break;
        case NUNU_GRANDE:
            carrinho.push({id:NUNU_GRANDE, nome:"Chá de Camomila", valor:12})
            break;
        case SHEN_GELIDO:
            carrinho.push({id:SHEN_GELIDO, nome:"Pelúcia Oficial", valor:12})
            break;
        case SHEN_INFERNAL:
            carrinho.push({id:SHEN_INFERNAL, nome:"Necessaire", valor:12})
            break;
        case SHEN_LUA:
            carrinho.push({id:SHEN_LUA, nome:"Guarda Chuva", valor:12})
            break;
        case SHEN_PULSE:
            carrinho.push({id:SHEN_PULSE, nome:"Chaveiro", valor:12})
            break;
        case SHEN_SCORPION:
            carrinho.push({id:SHEN_SCORPION, nome:"Garrafinha", valor:12})
            break;      
            
        }

    alert("Item adicionado ao carrinho")
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    fechaModal()
    viewCart()
}

function removeFromCart(id){
    var index = carrinho.findIndex((item)=> item.id ==id)
    if(index > -1){
        carrinho.splice(index, 1)
    }
    fechaModal()
    viewCart()
}

function viewCart(){
    nota = [] // Cria um array para mostrar ao usuario
    totalvalue = 0;
    carrinho.forEach((item)=> {
        if (!nota.filter((x) => x.id == item.id).length > 0){ //valida se dentro da nota já tem o item a ser adicionado
            var arr = carrinho.filter(x => x.id === item.id)
            totalItem = 0
            arr.forEach(item => {totalItem += item.valor})
            nota.push({id: item.id, nome: item.nome, quantidade: arr.length, valor: totalItem}) // agrupa os itens pelo Id para mostrar a quantidade de cada um dos itens
        }
    })
    document.querySelectorAll(".caixinha").forEach(element => element.remove())
    document.querySelectorAll(".totalvalue").forEach(element => element.remove())
    nota.forEach(item => {
        var content = document.createElement("div") // cria a caixinha
        content.classList = "caixinha row"

        var nome = document.createElement('h3') // cria o nome do item
        nome.textContent = item.nome
        nome.classList = "col"

        var valor = document.createElement('h3') // cria o valor total dos itens
        valor.textContent = item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        valor.classList = "col valor"

        var quantidade = document.createElement('h3') // cria a quantidade dos itens
        quantidade.textContent = item.quantidade
        quantidade.classList = "col"

        var addRemove = document.createElement("div") // cria o div para os botoes de + e -
        addRemove.classList = "addremove"
        addRemove.classList = "col"

        var addCart = document.createElement('button') // cria o botao +
        addCart.classList = "btn btn-primary"
        addCart.onclick = function() {addToCart(item.id)}
        addCart.type = "button"
        addCart.textContent = "+"

        var removeCart = document.createElement('button')// cria o botao -
        removeCart.classList = "btn btn-danger"
        removeCart.onclick = function() {removeFromCart(item.id)}
        removeCart.type = "button"
        removeCart.textContent = "-"
        
        content.appendChild(nome) //adiciona o nome no div 
        content.appendChild(valor) // adiciona o valor no div
        content.appendChild(quantidade) // adiciona a quantidade no div

        addRemove.appendChild(addCart) // adiciona o botao + do div
        addRemove.appendChild(removeCart) // adiciona o botao - no div
        content.appendChild(addRemove) // adiciona os botoes de + e - no div 

        document.getElementById("items").appendChild(content) //adiciona todos os textos e botoes no div principal

        totalvalue += item.valor;
        
    })
    var total = document.createElement('h3') // cria o elemento do valor total 
    total.classList = "totalvalue col";
    total.textContent = "Valor total: " + totalvalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    document.getElementById("informativo").appendChild(total); // adiciona o valor total na div principal

}

function fechaModal() {
    document.querySelectorAll(".caixinha").forEach(element => element.remove())
    document.querySelectorAll(".totalvalue").forEach(element => element.remove())

}

function enviar(){
    var registro = new Date();
    dt = formatarData(registro)
    var mensagem = ""
    var valorTotal = 0
    nota.forEach(item => {
        mensagem += item.nome + " " + item.quantidade + " " + item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + `%0a` //  %0a -> pula linha no whatsApp
        valorTotal += item.valor;
    })
    mensagem += "Valor total: " + valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + `%0a`
    mensagem += "Data do pedido: " + dt
    var numeroTelefone = "554192793002"
    var linkWhatsApp = 
    "https://wa.me/" + 
    numeroTelefone + 
    "?text=" + 
    mensagem; 

    window.open(linkWhatsApp, "_blank")
} 

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    return item.toLocaleString("pt-BR", options)
}