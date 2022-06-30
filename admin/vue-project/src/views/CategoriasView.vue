<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [
        {
          id: "001",
          descricao: "Administração, Negócios e Economia",
        },
        {
          id: "002",
          descricao: "Artesanato, Casa e Estilo de Vida",
        },
        {
          id: "003",
          descricao: "Biografias e Histórias Reais",
        },
        {
          id: "004",
          descricao: "Direito",
        },
        {
          id: "005",
          descricao: "Fantasia, Horror e Ficção Científica",
        },
        {
          id: "006",
          descricao: "HQs, Mangás e Graphic Novels",
        },
        {
          id: "007",
          descricao: "Romance",
        },
        {
          id: "008",
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
