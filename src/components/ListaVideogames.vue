<template>
    <div>
        <h3>Lista Videogames</h3>
        <input type="text" name="" id="" placeholder="Nome do videogame" v-model="item">
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
        name: 'ListaVideogames',
        mixins: [ListaMixins, RemoverListaMixin]
    }
</script>
<style lang="css">
</style>