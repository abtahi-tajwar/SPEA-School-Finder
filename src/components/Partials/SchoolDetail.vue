<template>
  <div class="main-sidebar-lg bg-transparent fixed-top">
    <div
        class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center justify-content-between">
      <a href="#" class="d-flex align-items-center">
        <i class="material-icons text-dark d-inline">arrow_back</i>
        <span class="ms-2 text-base d-xl-block d-lg-none text-dark fw-semibold f-poppins"></span>
      </a>
    </div>
    <div class="px-3 py-4 main-sidebar-inner bg-white custom-scroll border-end border-grey-100">
      <img src="../../assets/images/logo-img.png" class="main-sidebar-detail-logo">
      <div class="row mt-3">
        <div class="col-lg-7">
          <p class="text-lg fw-semibold f-poppins mb-lg-4 mb-3 lh-sm">Australian International School</p>
        </div>
        <div class="col-lg-5 d-flex align-items-center mb-lg-4 mb-3 justify-content-lg-end">
          <a href="#" class="text-info me-3 fw-medium text-sm d-flex align-items-center">
            Visit Website
            <i class="material-icons ms-1 text-base">open_in_new</i>
          </a>
          <a href="#" class="text-info fw-medium  text-sm d-flex align-items-center">
            Get Directions
            <i class="material-icons ms-1 text-base">open_in_new</i>
          </a>
        </div>
      </div>
      <school-slider></school-slider>
      <school-tabs></school-tabs>
    </div>

  </div>
</template>

<script>
import SchoolSlider from "@/components/Partials/SchoolSlider";
import SchoolTabs from "@/components/Partials/SchoolTabs";
export default {
name: "SchoolDetail",
  components: {SchoolTabs, SchoolSlider}
}
</script>

<style scoped>

</style>