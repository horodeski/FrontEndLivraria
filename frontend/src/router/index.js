import { createRouter, createWebHistory } from "vue-router";
import AutoresView from "../views/AutoresView.vue";
import LivrosView from "../views/LivrosView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import EditorasView from "../views/EditorasView.vue";
import HomeComp from "../views/HomeComp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/",
      name: "home",
      component: HomeComp,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
  ],
});

export default router;
