<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [
        {
          id: "783d2265-3368-47c5-8d29-8e958295eff0",
          descricao: "Administração, Negócios e Economia",
        },
        {
          id: "f1f48ff7-7a2f-439a-bf1d-f2252f6416f1",
          descricao: "Artesanato, Casa e Estilo de Vida",
        },
        {
          id: "6b88323e-c2a7-45bb-8689-23cecdd4dc52",
          descricao: "Biografias e Histórias Reais",
        },
        {
          id: "f9bac5f0-2513-4516-9b3e-9285faaa4f10",
          descricao: "Direito",
        },
        {
          id: "0a9c9d5b-935c-44ea-a254-8b0963cb94d4",
          descricao: "Fantasia, Horror e Ficção Científica",
        },
        {
          id: "a9d4326f-1c10-49a5-aeba-e7614650b875",
          descricao: "HQs, Mangás e Graphic Novels",
        },
        {
          id: "79d1d7cf-fd03-47cb-b253-f3c792c38a40",
          descricao: "Romance",
        },
        {
          id: "00be5b0b-5284-489d-b9e8-00084af4c18e",
          descricao: "Policial, Suspense e Mistério",
        },
      ],
      livros: [],
      novo_livro: "",
      novo_pre: 0,
      novo_quant: 0,
      novo_autor_ID: "",
      nova_categoria: "",
      novo_editora_ID: "",
    };
  },
  methods: {
    salvar() {
      if (
        this.novo_livro !== "" &&
        this.novo_pre > 0 &&
        this.novo_quant > 0 &&
        this.novo_autor_ID !== "" &&
        this.nova_categoria !== "" &&
        this.novo_editora_ID !== ""
      ) {
        const novo_id = uuidv4();
        const novo_ISBN = uuidv4();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
          quantidade: this.novo_quant,
          preco: this.novo_pre,
          ISBN: novo_ISBN,
          Categoria: this.nova_categoria,
          Editora_ID: this.novo_editora_ID,
          Autor_ID: this.novo_autor_ID,
        });
        this.novo_livro = "";
        this.novo_quant = "";
        this.novo_pre = "";
        this.novo_autor_ID = "";
        this.nova_categoria = "";
        this.novo_editora_ID = "";
      } else {
        alert("Todos os campos são obrigatórios");
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
          <select name="cat" id="categorias" v-model="nova_categoria">
            <option disabled value="">Escolha uma categoria</option>
            <option v-for="id of categorias" :key="id.id">
              {{ id.descricao }}
            </option>
          </select>
          <input
            id="input_tit"
            type="text"
            v-model="novo_editora_ID"
            placeholder="ID da editora"
          />
          <!-- <label for="input_tit">autor</label> -->
          <input
            id="input_aut"
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
        <table v-if="livros.length > 0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>ISBN</th>
              <th>Categoria</th>
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
              <td>{{ livro.Categoria }}</td>
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
        <div class="senao" v-else>
          <span class="aviso">Não existem livros cadastrados</span>
          <i class="bx bx-error"></i>
        </div>
      </div>
    </div>
  </main>
</template>
<style></style>
