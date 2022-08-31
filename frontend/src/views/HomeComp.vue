<script>
import UserComp from "../components/UserComp.vue";
import TabelaLivro from "../components/TabelaLivro.vue";
import EstoqueParceria from "../components/EstoqueParceria.vue";
export default {
  components: {
    UserComp,
    TabelaLivro,
    EstoqueParceria,
  },
};
</script>
<template>
  <div class="header-pgnadm">
    <div class="iniciopg">
      <h1 class="pgnadm">Página de <strong>administração</strong></h1>
      <EstoqueParceria
        id="bemvindo"
        conteudo="Olá, seja bem-vindo a administração!"
      />
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
