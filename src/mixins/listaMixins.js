//Mixin é um objeto não um componente, observa-se que é usado a extensão .js
export default {
    data: () => ({
        titulo: 'Lista Padrão',
        itens: [],
        item: ''
        //Caso ocorra algum tipo de conflito entre atributos do mixin e do componente dentro da propriedade data.
        //A informação dentro do componente é prioritária, ao invés da que esta presente no mixin
    }),
    methods: {
        adicionarItem(){
            this.itens.push(this.item)
            this.item = ''
        }
    }
}
//Basicamente é a mesma ídeia que um objeto vue, com as propriedades, porém definindo um objeto em Js.
//Facilitando manutenção de código e reutilização de código