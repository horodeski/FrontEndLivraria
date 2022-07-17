<script setup>
import ComprasComp from "@/components/ComprasComp.vue";
import EstoqueComp from "@/components/EstoqueComp.vue";
import RecentesComp from "@/components/RecentesComp.vue";
</script>
<template>
  <main class="pgadmin">
    <h1><strong>Administração</strong> geral</h1>
    <RecentesComp />
    <div class="linha_CE">
      <ComprasComp />
      <EstoqueComp />
    </div>
  </main>
</template>
