<template>
    <div>
        <h3>Lista Filmes</h3>
        <input type="text" name="" id="" placeholder="Nome do filme" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <br>
        <ul>
            <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
    import ListaMixins from '@/mixins/listaMixins';

    export default {
        name: 'ListaFilmes',
        mixins: [ListaMixins]
    }
</script>
<style lang="css">
</style>