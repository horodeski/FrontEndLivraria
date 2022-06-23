<script>
export default {};
</script>
<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/livros" class="link_logo">
            <i id="logo" class="bx bx-book-heart"></i>
            <span class="livraria_link">Livraria do dudu</span>
          </RouterLink>
        </li>
        <div>
          <RouterLink to="/" class="livros">
            <li>
              <i class="bx bxs-food-menu"></i>
              <span class="livros_link">Livros</span>
            </li>
          </RouterLink>
          <RouterLink to="/" class="escritores">
            <li>
              <i class="bx bx-edit-alt"></i>
              <span class="escritores_link">Escritores</span>
            </li>
          </RouterLink>
          <RouterLink to="/" class="categorias">
            <li>
              <i class="bx bx-book-bookmark"></i>
              <span class="categorias_link">Categorias</span>
            </li>
          </RouterLink>
          <RouterLink to="/" class="editoras">
            <li>
              <i class="bx bx-building-house"></i>
              <span class="editoras_link">Editoras</span>
            </li>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/" class="user">
            <li>
              <i class="bx bxs-user-circle"></i>
              <span class="usuarios_link">Usuário</span>
            </li>
          </RouterLink>
        </div>
      </ul>
    </nav>
  </header>
</template>
<style></style>
