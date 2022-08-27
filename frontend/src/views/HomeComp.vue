<script>
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditorasApi from "@/api/editoras.js";
import UserComp from "../components/UserComp.vue";
import TabelaLivro from "../components/TabelaLivro.vue";
import EstoqueParceria from "../components/EstoqueParceria.vue";
const livrosApi = new LivrosApi();
const autoresApi = new AutoresApi();
const categoriasApi = new CategoriasApi();
const editorasApi = new EditorasApi();
export default {
  components: {
    UserComp,
    TabelaLivro,
    EstoqueParceria,
  },
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
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livros = await livrosApi.buscarTodosOsLivros();
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
  },
};
</script>
<template>
  <div class="header-pgnadm">
    <div class="iniciopg">
      <h1 class="pgnadm">Página de <strong>administração</strong></h1>
      <EstoqueParceria conteudo="Olá, seja bem-vindo a administração!" />
      <div>
        <TabelaLivro />
      </div>
    </div>
    <div class="valores">
      <div class="flex">
        <div class="infos">
          <span id="span-valores">0</span>
          <h2>Vendas</h2>
        </div>
        <div class="infos" id="infos_saldo">
          <span id="span-valores">R$ 0,00</span>
          <h2>Saldo</h2>
        </div>
      </div>
      <EstoqueParceria conteudo="Estoque" />
      <EstoqueParceria conteudo="Parcerias" />
      <div id="usuarios">
        <div class="header-usuarios">
          <h2>Usuários On-line</h2>
          <button>ver mais</button>
        </div>
        <UserComp />
        <UserComp />
        <UserComp />
      </div>
    </div>
  </div>
</template>
