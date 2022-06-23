<script setup>
import MenuLateral from "./components/MenuLateral.vue";
import MainView from "./views/MainView.vue";
</script>
<template>
  <MenuLateral />
  <RouterView />
  <MainView />
</template>
<style>
@import "@/assets/base.css";
</style>
