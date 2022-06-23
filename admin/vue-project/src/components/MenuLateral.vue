<script>
export default {};
</script>
<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/inicio" class="link_logo">
            <i id="logo" class="bx bx-book-heart"></i>
            <span class="livraria_link">Livraria do dudu</span>
          </RouterLink>
        </li>
        <div>
          <RouterLink to="/livros" class="livros">
            <li>
              <i class="bx bxs-food-menu"></i>
              <span class="livros_link">Livros</span>
            </li>
          </RouterLink>
          <RouterLink to="/autores" class="autores">
            <li>
              <i class="bx bx-edit-alt"></i>
              <span class="autores_link">Autores</span>
            </li>
          </RouterLink>
          <RouterLink to="/categorias" class="categorias">
            <li>
              <i class="bx bx-book-bookmark"></i>
              <span class="categorias_link">Categorias</span>
            </li>
          </RouterLink>
          <RouterLink to="/editoras" class="editoras">
            <li>
              <i class="bx bx-building-house"></i>
              <span class="editoras_link">Editoras</span>
            </li>
          </RouterLink>
        </div>
        <div>
          <li class="admin">
            <i class="bx bxs-user-circle"></i>
            <span class="usuarios_link">Admin</span>
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>
<style></style>
