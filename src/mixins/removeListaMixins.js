export default {
    methods: {
        removerItem(){
            this.itens.pop()
        }
    },
    created(){
        console.log('RemoveListaMixin foi criado') //Entendendo o life cycle, aula 213.
    }
    //Quando estamos trabalhando com técnicas de mixins, os métodos do life cycle, não são sobrepostos, diferente das propriedades.
    //Que os valores da propriedade são modificados pelo componente, quando definido.
}