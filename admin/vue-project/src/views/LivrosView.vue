<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "'123'",
          nome: "'título'",
          ISBN: "'123'",
          Categoria_ID: "'123'",
          Editora_ID: "'123'",
          Autor_ID: "'123'",
          quantidade: "'999'",
          preco: "'0,00'",
        },
      ],
      novo_livro: "",
      novo_pre: "",
      novo_quant: "",
      novo_autor_ID: "",
      novo_categoria_ID: "",
      novo_editora_ID: "",
    };
  },
  methods: {
    salvar() {
      if (
        (this.novo_livro !== "",
        this.novo_pre !== "",
        this.novo_quant !== "",
        this.novo_autor_ID !== "",
        this.novo_categoria_ID !== "",
        this.novo_editora_ID !== "")
      ) {
        const novo_id = uuidv4();
        const novo_ISBN = uuidv4();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
          quantidade: this.novo_quant,
          preco: this.novo_pre,
          ISBN: novo_ISBN,
          Categoria_ID: this.novo_categoria_ID,
          Editora_ID: this.novo_editora_ID,
          Autor_ID: this.novo_autor_ID,
        });
        this.novo_livro = "";
        this.novo_quant = "";
        this.novo_pre = "";
        this.novo_autor_ID = "";
        this.novo_categoria_ID = "";
        this.novo_editora_ID = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Gerenciamento de livros</h1>
      </div>
      <div class="form-input">
        <div class="center_input">
          <input
            id="input_tit"
            type="text"
            v-model="novo_livro"
            placeholder="Título"
          />
          <input
            id="input_tit"
            type="text"
            v-model="novo_categoria_ID"
            placeholder="ID da categoria"
          />
          <input
            id="input_tit"
            type="text"
            v-model="novo_editora_ID"
            placeholder="ID da editora"
          />
          <input
            id="input_tit"
            type="text"
            v-model="novo_autor_ID"
            placeholder="ID da autor"
          />
          <input
            id="input_quant"
            type="number"
            v-model="novo_quant"
            placeholder="Quantidade"
          />
          <input
            id="input_pre"
            type="number"
            v-model="novo_pre"
            placeholder="Preço"
          />
          <div class="center">
            <button @click="salvar">Salvar</button>
          </div>
        </div>
      </div>
      <div class="list-livros">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>ISBN</th>
              <th>Categoria_ID</th>
              <th>Editora_ID</th>
              <th>Autor_ID</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro">
              <td>{{ livro.id }}</td>
              <td>{{ livro.nome }}</td>
              <td>{{ livro.ISBN }}</td>
              <td>{{ livro.Categoria_ID }}</td>
              <td>{{ livro.Editora_ID }}</td>
              <td>{{ livro.Autor_ID }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(livro)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style></style>
