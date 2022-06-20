let refrigerante = 11.99
let macarrão = 6.99
let ervilha = 6.99
let arroz = 22.99
let feijão = 11.89
let vinho = 70
let valorTotal = (3 * refrigerante + 4 * macarrão + 3 * ervilha + 3 * arroz + 2 * feijão + 3 * vinho)
let media = (valorTotal % 2)
let valorTotalTrans = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


if (media >0) {
    let suaParte= (valorTotal - 70 * 3) / 2
    let seuAmigo= (valorTotal / 2) + 70 * 3
    let suaParteTrans=suaParte.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    let seuAmigoTrans=seuAmigo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    console.log(`A conta deu ${valorTotalTrans}`)
    console.log(`Você pagará ${suaParteTrans} e seu amigo pagará ${seuAmigoTrans}`)
} else {
    let dividido= valorTotal/2
    let divididoTrans= dividido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    console.log(`A conta deu ${valorTotalTrans}`)
    console.log(`Você pagará ${divididoTrans} e seu amigo pagará ${divididoTrans}`)
}

let produto=prompt("Digite o nome do produto")
let preçoDoProduto= parseFloat(prompt("Digite o preço do produto"))
let quantidade= parseFloat(prompt("Digite quantas unidades você pegou desse produto"))
let total=preçoDoProduto*quantidade
let totalTrans=total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
alert(`${quantidade} unidades de ${produto} está saindo por ${totalTrans}`)

let permissao=prompt("Gostaria de inserir algum produto?(1-sim / 2-não)")


