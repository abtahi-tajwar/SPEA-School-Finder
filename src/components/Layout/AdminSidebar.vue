<template>
  <div class="admin-sidebar bg-white fixed-top">
    <div class="admin-sidebar-logo-box py-2 px-3 border-bottom border-grey-500">
      <div class="admin-sidebar-logo-box-img">
        <img src="../../assets/images/Logo.png" class="img-fluid" alt="Logo">
      </div>
    </div>
    <div class="p-3 py-4 admin-sidebar-inner custom-scroll">
      <ul class="list-unstyled m-0">
        <li class="">
          <a href="/backend/" class="active d-flex align-items-center">
            <i class="material-icons me-3">home</i>
            <span class="text-md fw-bold">Dashboard</span>
          </a>
        </li>
        <li class="">
          <a href="/backend/users" class="d-flex align-items-center">
            <i class="material-icons me-3">group</i>
            <span class="text-md fw-bold">Users</span>
          </a>
        </li>
        <hr class="border-grey-600 opacity-100 border-top">
        <button
            class="border-0 mb-2 fw-semibold text-grey-400 w-100 text-12 px-3 py-2 text-uppercase d-flex align-items-center justify-content-between bg-white"
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
            aria-controls="collapseExample">
          SCHOOL DATA
          <i class="material-icons text-grey-400 text-lg ms-auto">keyboard_arrow_up</i>
        </button>
        <div class="collapse show" id="collapseExample">
          <li class="">
            <a href="/backend/users" class="d-flex align-items-center">
              <i class="material-icons me-3">show_chart</i>
              <span class="text-md fw-bold">Forecasts</span>
            </a>
          </li>
          <li class="">
            <a href="/backend/schools" class="d-flex align-items-center">
              <i class="material-icons me-3">school</i>
              <span class="text-md fw-bold">School Data</span>
            </a>
          </li>
          <li class="">
            <a href="/backend/imports" class="d-flex align-items-center">
              <i class="material-icons me-3">drive_folder_upload</i>
              <span class="text-md fw-bold">Import / Export</span>
            </a>
          </li>
        </div>
        <hr class="border-grey-600 opacity-100 border-top">
        <button
            class="border-0 mb-2 fw-semibold text-grey-400 w-100 text-12 px-3 py-2 text-uppercase d-flex align-items-center justify-content-between bg-white"
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
            aria-controls="collapseExample2">
          SHARJAH
          <i class="material-icons text-grey-400 text-lg ms-auto">keyboard_arrow_up</i>
        </button>
        <div class="collapse show" id="collapseExample2">
          <li class="">
            <a href="/backend/areas" class="d-flex align-items-center">
              <i class="material-icons me-3">location_on</i>
              <span class="text-md fw-bold">Area</span>
            </a>
          </li>
          <li class="">
            <a href="/backend/genders" class="d-flex align-items-center">
              <i class="material-icons me-3">person</i>
              <span class="text-md fw-bold">Gender</span>
            </a>
          </li>
          <li class="">
            <a href="/backend/origins" class="d-flex align-items-center">
              <i class="material-icons me-3">flag</i>
              <span class="text-md fw-bold">Origin</span>
            </a>
          </li>
        </div>
        <hr class="border-grey-600 opacity-100 border-top">
        <button
            class="border-0 mb-2 fw-semibold text-grey-400 w-100 text-12 px-3 py-2 text-uppercase d-flex align-items-center justify-content-between bg-white"
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false"
            aria-controls="collapseExample3">
          metadata
          <i class="material-icons text-grey-400 text-lg ms-auto">keyboard_arrow_up</i>
        </button>
        <div class="collapse show" id="collapseExample3">
          <li class="">
            <a href="/backend/facilities" class="d-flex align-items-center">
              <i class="material-icons me-3">flare</i>
              <span class="text-md fw-bold">Facilities & Special Programs</span>
            </a>
          </li>
        </div>
      </ul>

    </div>

  </div>
</template>

<script>
export default {
  name: "AdminSidebar"
}
</script>

<style scoped>

</style>