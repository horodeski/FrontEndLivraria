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
      nova_categoria: "",
    };
  },
  methods: {
    salvar() {
      if (this.nova_categoria !== "") {
        const novo_id = uuidv4();
        this.categorias.push({
          id: novo_id,
          descricao: this.nova_categoria,
        });
        this.nova_categoria = "";
      }
    },
    excluir(categoria) {
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Gerenciamento de categorias</h1>
      </div>
      <div class="form">
        <input
          type="text"
          v-model="nova_categoria"
          placeholder="Categoria..."
        />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-livros">
        <table v-if="categorias.length > 0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td>{{ categoria.id }}</td>
              <td>{{ categoria.descricao }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(categoria)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="senao" v-else>
          <span class="aviso">Não existem categorias cadastradas</span>
          <i class="bx bx-error"></i>
        </div>
      </div>
    </div>
  </main>
</template>
<style></style>
