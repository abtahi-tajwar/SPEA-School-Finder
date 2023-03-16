<template>
  <nav class="admin-navbar border-bottom border-grey-500 navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid px-lg-4">
      <a class="navbar-brand" href="#">
        <img src="../../assets/images/Logo.png" class="img-fluid" alt="Logo">
      </a>
      <div class="d-lg-flex d-none me-auto text-md align-items-center fw-semibold">
        <a href="#" class="text-dark me-1">Users</a>
        <span class="text-grey-800">/</span>
        <span class="text-grey-800 mx-1">List of Users</span>
        <span class="text-grey-800">/</span>
        <span class="text-grey-800 ms-1">Edit</span>
      </div>
      <button class="navbar-toggler border-0 ms-auto d-lg-none"
              type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
          <li>
            <a href="#" class="bg-secondary-100 rounded-circle fw-bold lh-sm icon-42 d-flex align-items-center justify-content-center text-dark text-uppercase">
              MA
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNavbar"
}
</script>

<style scoped>

</style>