<template>
  <nav class="main-navbar navbar navbar-expand-lg bg-white">
    <div class="container-fluid">
      <a class="navbar-brand d-lg-none" href="#">
        <img src="../../assets/images/Logo.png" class="img-fluid" alt="Logo">
      </a>
      <button class="navbar-toggler border-0 p-0 ms-auto d-lg-none"
              type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
          <div class="form-check form-switch pe-4">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            <label class="form-check-label text-sm text-grey400" for="flexSwitchCheckChecked">Enrollment</label>
          </div>
          <div class="form-check form-switch pe-4">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
            <label class="form-check-label text-sm text-grey400" for="flexSwitchCheckDefault">Capacity</label>
          </div>

          <div class="form-check form-switch  pe-4">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" >
            <label class="form-check-label text-sm text-grey400" for="flexSwitchCheckDisabled">Utilization rate</label>
          </div>
          <button class="btn border-grey-100 border btn-outline-primary d-flex align-items-center px-3 fw-semibold"
                  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
            <i class="material-icons me-2 text-primary text-lg">trending_up</i>
            Forecasts
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>