<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editoras: [
        {
          id: "'123'",
          nome: "'nome'",
          site: "'http://site.com'",
        },
      ],
      nova_editora: "",
    };
  },
  methods: {
    salvar() {
      if ((this.nova_editora !== "", this.novo_site !== "")) {
        const novo_id = uuidv4();
        this.editoras.push({
          id: novo_id,
          nome: this.nova_editora,
          site: this.novo_site,
        });
        this.nova_editora = "";
        this.novo_site = "";
      }
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
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
          v-model="nova_editora"
          placeholder="Editora..."
        />
        <input id="edsi" type="url" v-model="novo_site" placeholder="Site..." />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-livros">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Editora</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="editora in editoras" :key="editora.id">
              <td>{{ editora.id }}</td>
              <td>{{ editora.nome }}</td>
              <td>{{ editora.site }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(editora)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style></style>
