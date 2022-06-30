<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor !== "") {
        const novo_id = uuidv4();
        this.autores.push({
          id: novo_id,
          autor: this.novo_autor,
        });
        this.novo_autor = "";
      }
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Gerenciamento de autores</h1>
      </div>
      <div class="form">
        <input type="text" v-model="novo_autor" placeholder="Autor..." />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-livros">
        <table v-if="autores.length > 0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="autor in autores" :key="autor.id">
              <td>{{ autor.id }}</td>
              <td>{{ autor.autor }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(autor)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="senao" v-else>
          <span class="aviso">Não existem autores cadastrados</span>
          <i class="bx bx-error"></i>
        </div>
      </div>
    </div>
  </main>
</template>
<style></style>
