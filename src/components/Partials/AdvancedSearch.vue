<template>
  <div class="main-sidebar-2 bg-white fixed-top border-end border-grey-100">
    <div class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center">
      <a href="#" class="d-flex align-items-center">
        <i class="material-icons text-dark d-inline">arrow_back</i>
        <span class="ms-2 text-base text-dark fw-semibold f-poppins">Advanced Search</span>
      </a>
    </div>
    <div class="px-3 py-4 main-sidebar-inner custom-scroll">
      <div class="mb-2">
        <label for="customRange2" class="text-dark mb-2">Teacher to Student Ratio</label>
        <input type="range" class="form-range" min="0" max="5" id="customRange2">
      </div>

      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Availability of Nursery/Preschool
        </label>
      </div>
      <p class="text-uppercase fw-semibold text-md my-3">Recreational Facilities</p>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Gyms
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Playgrounds
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Air conditioned playing Courts
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Open air playing Courts
        </label>
      </div>
      <p class="text-uppercase fw-semibold text-md  my-3">Facilities for SEND Students</p>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Elevators
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          iPad and or Tablet
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Special education resource rooms
        </label>
        <p class="text-sm text-grey-800 m-0">Rooms for special instruction in an individualized or small group setting for a portion of the day</p>
      </div>
     <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Audio players and recorders
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Dedicated Buses/Cars
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Dedicated Parking spaces Sensory rooms
        </label>
        <p class="text-sm text-grey-800 m-0">
          Equipped with soothing items and sensory products such as sound machines, ball chairs, gel mats
        </p>
      </div>

      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Dedicated Toilets
        </label>
      </div>

      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Ramps
        </label>
      </div>

      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Wheelchairs
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AdvancedSearch"
}
</script>

<style scoped>

</style>