//aqui será colocada a const por ter inserido o uuid, vai ficar assim:

const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

module.exports = {
    servicos: [
    { 
        id1:
        nome: 'Consultoria Fitness',
        valor: 'R$ 150,00',
        descricao: "Consultoria personalizada de treinos"
    },
    {
            id2:
            nome: 'Treino com personal',
            valor: 'R$ 180,00',
            descricao: "Treino com personal individual"
    },
    {
            id3:
            nome: 'PLano alimentar',
            valor: 'R$ 550,00',
            descricao: "Pacote de treino 5x na semana com adicional de plano alimentar exclusivo, feito pelo nosso nutricionista"
    },
],
}

index () {
    return this.servicos
},

criar ( {nome, valor, descricao}, File){
    if (!nome || !valor || !descricao) return
    const filePatch = File ? path.join('/images/uploads', File.filename) : ''
    this.servicos.push({ id: uuid(), nome, valor, descricao, image: filePatch});
},

buscar (id) {
    return this.servicos.find(servico => servico.id == id);
},

atualizar (id, {nome, valor, descricao }) {
    if (!id) return
    if (!nome || !valor || !descricao) return
    const servico = this.buscar(id);

    servico.nome = nome;
    servico.valor = valor;
    servico.descricao = descricao;
},

deletar (id) {
    if (!id) return
    const servico = this.buscar(id);
    const filePatch = servico.image;

    fs.unlink('public' + filePatch, (err) => console.log('err'));

    const index = this.servicos.findIndex(servico => servico.id == id);
}
}









//colocar crud aqui quando já tiver os ids dos serviços acima


