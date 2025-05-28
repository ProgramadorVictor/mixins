<template>
    <div>
        <h3>{{ titulo }}</h3>
        <input type="text" name="" id="" placeholder="Nome do filme" v-model="item">
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
        data: () => ({
            titulo: 'Lista Filmes'
        }),
        mixins: [ListaMixins, RemoverListaMixin]
    }
</script>
<style lang="css">
</style>