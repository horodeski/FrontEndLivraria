<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Gerenciamento de editoras</h1>
      </div>
      <div class="form">
        <input
          id="edsi"
          type="text"
          v-model="editora.nome"
          placeholder="Editora..."
        />
        <input
          id="edsi"
          type="url"
          v-model="editora.site"
          placeholder="Site..."
        />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-livros" id="list-livros-view">
        <table id="margin" v-if="editoras.length > 0">
          <thead>
            <tr>
              <th class="canto_ce">ID</th>
              <th>Editora</th>
              <th>Site</th>
              <th class="canto_cd">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="editora in editoras" :key="editora.id">
              <td>{{ editora.id }}</td>
              <td>{{ editora.nome }}</td>
              <td>{{ editora.site }}</td>
              <td>
                <button @click="editar(editora)">editar</button>
                <button @click="excluir(editora)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="senao" v-else>
          <span class="aviso">Não existem editoras cadastradas</span>
          <i class="bx bx-error"></i>
        </div>
      </div>
    </div>
  </main>
</template>
<style></style>
