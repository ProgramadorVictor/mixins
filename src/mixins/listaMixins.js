//Mixin é um objeto não um componente, observa-se que é usado a extensão .js
export default {
    data: () => ({
        itens: [],
        item: ''
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