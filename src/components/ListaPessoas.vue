<template>
    <div>
        <h3>Lista Pessoas</h3>
        <input type="text" name="" id="" placeholder="Nome da pessoa" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <br>
        <ul>
            <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
        </ul>
        <button type="button" @click="removerItem()">Remover</button>
    </div>
</template>
<script>
    import ListaMixins from '@/mixins/listaMixins';
    import RemoverListaMixin from '@/mixins/removeListaMixins'

    export default {
        name: 'ListaFilmes',
        mixins: [ListaMixins, RemoverListaMixin], //Tudo que é usado pelo objeto 'ListaMixins' pode ser usado agora neste componente ListaFilmes.vue
        //Propriedades, literalmente tudo que é usado pelo mixin é trago para 'ListaFilmes'.
    }
</script>
<style lang="css">
</style>