<script>
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditorasApi from "@/api/editoras.js";
const livrosApi = new LivrosApi();
const autoresApi = new AutoresApi();
const categoriasApi = new CategoriasApi();
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
      categoria: {},
      categorias: [],
      editora: {},
      editoras: [],
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
    this.autores = await autoresApi.buscarTodosOsAutores();
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
};
</script>
<template>
  <div class="list-livros">
    <table v-if="livros.length > 0">
      <thead>
        <tr>
          <th class="canto_ce">ID</th>
          <th>Título</th>
          <th>Categoria</th>
          <th>Editora</th>
          <th>Autor</th>
          <th>Quantidade</th>
          <th class="canto_cd">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" :key="livro.id">
          <td>{{ livro.id }}</td>
          <td>{{ livro.nome }}</td>
          <td>{{ livro.categoria }}</td>
          <td>{{ livro.editora }}</td>
          <td>{{ livro.autor }}</td>
          <td>{{ livro.quantidade }}</td>
          <td>{{ livro.preco }}</td>
        </tr>
      </tbody>
    </table>
    <div class="senao" v-else>
      <span class="aviso">Não existem livros cadastrados</span>
      <i class="bx bx-error"></i>
    </div>
  </div>
</template>
