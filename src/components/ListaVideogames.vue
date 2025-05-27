<template>
    <div>
        <h3>Lista Videogames</h3>
        <input type="text" name="" id="" placeholder="Nome do videogame" v-model="item">
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
        name: 'ListaVideogames',
        mixins: [ListaMixins]
    }
</script>
<style lang="css">
</style>