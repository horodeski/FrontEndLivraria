<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [{}],
      novo_livro: "",
      novo_pre: "",
      novo_quant: "",
    };
  },
  methods: {
    salvar() {
      if (
        (this.novo_livro !== "", this.novo_pre !== "", this.novo_quant !== "")
      ) {
        const novo_id = uuidv4();
        const novo_ISBN = uuidv4();
        const novo_categoria_ID = uuidv4();
        const novo_editora_ID = uuidv4();
        const novo_autor_ID = uuidv4();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
          quantidade: this.novo_quant,
          preco: this.novo_pre,
          ISBN: novo_ISBN,
          Categoria_ID: novo_categoria_ID,
          Editora_ID: novo_editora_ID,
          Autor_ID: novo_autor_ID,
        });
        this.novo_livro = "";
        this.novo_quant = "";
        this.novo_pre = "";
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
        <h2>Gerenciamento de livros</h2>
      </div>
      <div class="form-input">
        <input
          id="input_tit"
          type="text"
          v-model="novo_livro"
          placeholder="Titulo"
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
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-times">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Titulo</td>
              <td>ISBN</td>
              <td>Categoria_ID</td>
              <td>Editora_ID</td>
              <td>Autor_ID</td>
              <td>Quantidade</td>
              <td>Preço</td>
              <td>Ação</td>
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
