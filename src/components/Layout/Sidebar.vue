<template>
  <div class="main-sidebar bg-white fixed-top border-end border-grey-100">
    <div class="main-sidebar-logo-box py-2 px-4 border-bottom border-grey-100">
      <div class="main-sidebar-logo-box-img">
        <img src="../../assets/images/Logo.png" class="img-fluid" alt="Logo">
      </div>
    </div>
    <div class="p-4 main-sidebar-inner custom-scroll d-flex flex-column">
      <h6 class="f-poppins text-lg mb-4">Sharjah Education Map</h6>
      <div class="custom-input-group mb-2 position-relative">
        <input class="custom-input-sm" placeholder="Search">
        <i class="material-icons text-lg position-absolute">search</i>
      </div>
<!--      <a href="#" class="text-info text-decoration-underline">Advanced Search</a>-->
      <p class="text-md text-uppercase mb-3 mt-3  fw-semibold">Private Schools Data</p>
      <div class="dropdown custom-dropdown mb-3">
        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          By Area
        </button>
        <ul class="dropdown-menu dropdown-scroll custom-scroll">
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Al Batayeh
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Al Dhaid
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Al Madam
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Dibba
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Al Hesn

                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Kalba

                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Khor Fakkan


                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Milehah
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Sharjah City
                </label>
              </div>
            </button>
          </li>

        </ul>
      </div>
      <div class="dropdown custom-dropdown mb-3">
        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          By Gender
        </button>
        <ul class="dropdown-menu dropdown-scroll custom-scroll">
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Male
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Female
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Mixed
                </label>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div class="dropdown custom-dropdown mb-3">
        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          By Curriculum
        </button>
        <ul class="dropdown-menu dropdown-scroll custom-scroll">
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  American
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Australian
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  British
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Filipino
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  French
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  German
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Indian
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Ministry of Education
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Pakistani
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Sabis
                </label>
              </div>
            </button>
          </li>
        </ul>
      </div>

      <div class="dropdown custom-dropdown mb-3">
        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          By Grade Level
        </button>
        <ul class="dropdown-menu dropdown-scroll custom-scroll">
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Early Years - Nursery/Pre-Reception
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  KG 1 Pre-Kindergarten/Reception
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  KG 2 Kindergarten/Year 1
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Grade 1/Year 2
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Grade 2/Year 3
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Grade 4/Year 5
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Grade 5/Year 6
                </label>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck3">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Grade 6/Year 7
                </label>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label text-md" for="flexCheckDefault">
          Special Educational Needs
        </label>
      </div>
      <div class="dropdown custom-dropdown mb-3">
        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Special Educational Needs
        </button>
        <ul class="dropdown-menu dropdown-scroll custom-scroll">
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Communication and interaction needs
                </label>
                <p class="text-mini text-grey-400 m-0">Difficulty with one, some or all of the different aspects of speech, language or social communication</p>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Cognition and learning needs
                </label>
                <p class="text-mini text-grey-400 m-0">
                  Learning at a slower pace than their peers, even with appropriate differentiation
                </p>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Social, emotional and mental health needs
                </label>
                <p class="text-mini text-grey-400 m-0">
                  Social and emotional difficulties, may include becoming withdrawn or isolated, as well as displaying challenging or disruptive behavior. </p>
              </div>
            </button>
          </li>
          <li>
            <button class="dropdown-item d-flex align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label text-sm" for="dropdownCheck2">
                  Sensory and/or physical needs
                </label>
                <p class="text-mini text-grey-400 m-0">
                  Disability requiring additional ongoing support and equipment to access all the opportunities available to their peers
                </p>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div class="mb-3 mt-3 pt-1">
        <label for="customRange2" class="text-dark mb-2">Fees</label>
        <input type="range" class="form-range" min="0" max="5" id="customRange2">
      </div>
      <div class=" mt-auto">
        <button class="btn btn-primary  w-100">Find Schools</button>
        <button class="btn btn-outline-info border border-grey-100  mt-3 w-100">Advanced Search</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>