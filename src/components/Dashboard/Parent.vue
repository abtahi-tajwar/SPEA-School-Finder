<template>
  <div class="main-wrapper d-flex vh-100">
    <div
      class="offcanvas-lg offcanvas-start"
      tabindex="-1"
      id="offcanvasResponsive"
      aria-labelledby="offcanvasResponsiveLabel"
    >
      <!--SIDEBAR-->
      <div class="main-sidebar bg-white fixed-top border-end border-grey-100">
        <div
          class="main-sidebar-logo-box py-2 px-4 border-bottom border-grey-100"
        >
          <div class="main-sidebar-logo-box-img">
            <img
              src="../../assets/images/Logo.png"
              class="img-fluid"
              alt="Logo"
            />
          </div>
        </div>
        <div class="p-4 main-sidebar-inner custom-scroll d-flex flex-column">
          <h6 class="f-poppins text-lg mb-4"><render-translation>Sharjah Education Map</render-translation></h6>
          <div class="custom-input-group mb-2 position-relative">
            <input
              class="custom-input-sm"
              :placeholder="renderTranslation('Search', isTranslated)"
              v-model="searchValue"
            />
            <i class="material-icons text-lg position-absolute">search</i>
          </div>
          <!--      <a href="#" class="text-info text-decoration-underline">Advanced Search</a>-->
          <p class="text-md text-uppercase mb-3 mt-3 fw-semibold">
            <render-translation>Private Schools Data</render-translation>
          </p>
          <div class="dropdown custom-dropdown mb-3">
            <button
              class="custom-input-sm text-start w-100 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="closeSchoolDetails()"
            >
              <span v-if="areaValues.length == 0"
                ><render-translation>By Area</render-translation></span
              >
              <span v-else>{{ areaText }}</span>
            </button>
            <ul class="dropdown-menu dropdown-scroll custom-scroll">
              <li v-for="area in areas" :key="area.id">
                <button class="dropdown-item d-flex align-items-center">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      :value="area.id"
                      class="form-check-input"
                      v-model="areaValues"
                    />
                    <label class="form-check-label text-sm">
                      <render-dynamic-translation
                        :english="area.name"
                        :arabic="area.name_ar"
                      />
                      <!-- {{area.name}} -->
                    </label>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown custom-dropdown mb-3">
            <button
              class="custom-input-sm text-start w-100 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="closeSchoolDetails()"
            >
              <span v-if="genderValues.length == 0"
                ><render-translation>By Gender</render-translation></span
              >
              <span v-else>{{ genderText }}</span>
            </button>
            <ul class="dropdown-menu dropdown-scroll custom-scroll">
              <li v-for="gender in genders" :key="gender.id">
                <button class="dropdown-item d-flex align-items-center">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="genderValues"
                      :value="gender.id"
                    />
                    <label class="form-check-label text-sm">
                      <render-dynamic-translation
                        :english="gender.name_en"
                        :arabic="gender.name_ar"
                      />
                    </label>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown custom-dropdown mb-3">
            <button
              class="custom-input-sm text-start w-100 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="closeSchoolDetails()"
            >
              <span v-if="curriculumsValues.length == 0"
                ><render-translation>By Curriculum</render-translation></span
              >
              <span v-else>{{ curriculumText }}</span>
            </button>
            <ul class="dropdown-menu dropdown-scroll custom-scroll">
              <li v-for="curriculum in curriculums" :key="curriculum.id">
                <button class="dropdown-item d-flex align-items-center">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      :value="curriculum.id"
                      class="form-check-input"
                      v-model="curriculumsValues"
                    />
                    <label class="form-check-label text-sm">
                      <render-dynamic-translation
                        :english="curriculum.name"
                        :arabic="curriculum.name_ar"
                      />
                    </label>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          <div class="dropdown custom-dropdown mb-3">
            <button
              class="custom-input-sm text-start w-100 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="closeSchoolDetails()"
            >
              <span v-if="gradeLevelValues.length == 0"
                ><render-translation>By Grade Level</render-translation></span
              >
              <span v-else>{{ gradeText }}</span>
            </button>
            <ul class="dropdown-menu dropdown-scroll custom-scroll">
              <li v-for="grade in gradeLevel" :key="grade.id">
                <button class="dropdown-item d-flex align-items-center">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      :value="grade.id"
                      class="form-check-input"
                      v-model="gradeLevelValues"
                    />
                    <label class="form-check-label text-sm">
                      <render-dynamic-translation
                        :english="grade.name"
                        :arabic="grade.name_ar"
                      />
                    </label>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="isSpecialEducationalNeeds"
              @change="changeStatusOfSpecialNeeds()"
              @click="closeSchoolDetails()"
            />
            <label class="form-check-label text-md">
              <render-translation>Special Educational Needs</render-translation>
            </label>
          </div>
          <div
            class="dropdown custom-dropdown mb-3"
            v-if="isSpecialEducationalNeeds == true"
          >
            <button
              class="custom-input-sm text-start w-100 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="closeSchoolDetails()"
            >
              <span v-if="specialNeedValues.length == 0">
                <render-translation>Special Educational Needs</render-translation>
              </span>
              <span v-else>{{ needsText }}</span>
            </button>
            <ul class="dropdown-menu dropdown-scroll custom-scroll">
              <li v-for="education in specialNeeds" :key="education.id">
                <button class="dropdown-item d-flex align-items-center">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      :value="education.id"
                      v-model="specialNeedValues"
                    />
                    <label class="form-check-label text-sm">
                      <render-dynamic-translation
                          :english="education.name"
                          :arabic="education.name_ar"
                      />
                      <!-- {{ education.name }} -->
                    </label>
                    <p class="text-mini text-grey-400 m-0">
                      {{ education.description }}
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div class="mb-3 mt-3 pt-1">
            <label class="text-dark mb-2">
              <render-translation>Fees</render-translation>
            </label>
            <vue-slider
              ref="slider"
              v-model="feesValue"
              :min="0"
              :max="100000"
              :tooltip="'always'"
              :tooltip-formatter="formatter1"
            ></vue-slider>
          </div>
          <div class="translation-switch-container">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                @change="($event) => toggleTranslation($event)"
              />
              <label
                v-if="!isTranslated"
                class="form-check-label"
                for="flexSwitchCheckDefault"
                >English (الإنكليزية)</label
              >
              <label
                v-else
                class="form-check-label"
                for="flexSwitchCheckDefault"
                >Arabic (العربية)</label
              >
            </div>
          </div>
          <div class="mt-auto">
            
            <!-- <toggle-button @change="toggleTranslation"/> -->
            <!-- <toggle-button :value="false" color="#82C7EB" :sync="true" :labels="true"/> -->
            <!-- <vue-toggle-btn @isActive="toggleTranslation($event)"></vue-toggle-btn> -->
            <button class="btn btn-primary w-100" @click="getSchools()">
              <render-translation>Find Schools</render-translation>
            </button>
            <button
              class="btn btn-outline-info border border-grey-100 mt-3 w-100"
              @click="
                () => {
                  isAdvanceSearch = true;
                  isSchools = false;
                  isLoading = false;
                  isSchoolDetails = false;
                }
              "
            >
              <render-translation>Advanced Search</render-translation>
            </button>
            <button
              class="btn btn-outline-info border border-grey-100 mt-3 w-100"
              @click="removeFilters()"
              v-if="isClearButton == true"
            >
              <render-translation>Clear Filters</render-translation>
            </button>
          </div>
        </div>
      </div>
      <!--      &lt;!&ndash;ADVANCED SEARCH&ndash;&gt;-->
      <div
        class="main-sidebar-2 bg-white fixed-top border-end border-grey-100"
        v-if="isAdvanceSearch == true"
      >
        <div
          class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center"
        >
          <a href="#" class="d-flex align-items-center">
            <i
              class="material-icons text-dark d-inline"
              @click="
                () => {
                  isAdvanceSearch = false;
                }
              "
              >arrow_back</i
            >
            <span class="ms-2 text-base text-dark fw-semibold f-poppins"
              >
              <render-translation>Advanced Search</render-translation>
            </span
            >
          </a>
        </div>
        <div class="px-3 py-4 main-sidebar-inner custom-scroll">
          <div class="mb-2">
            <label for="customRange2" class="text-dark mb-2"
              >
              <render-translation>Teacher to Student Ratio</render-translation>
            </label>
            <vue-slider
              ref="slider"
              v-model="studentValue"
              :min="0"
              :max="100000"
              :tooltip="'always'"
              :tooltip-formatter="formatter1"
            ></vue-slider>
          </div>

          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              v-model="availabilitySearch"
            />
            <label class="form-check-label text-md">
              <render-translation>Availability of Nursery/Preschool</render-translation>
            </label>
          </div>
          <p class="text-uppercase fw-semibold text-md my-3">
            <render-translation>Recreational Facilities</render-translation>
          </p>
          <div
            class="form-check mb-2"
            v-for="facility in recreationalFacilities"
            :key="facility.id"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="facility.id"
              v-model="facilitiesValues"
            />
            <label class="form-check-label text-md">
              <render-dynamic-translation
                  :english="facility.name"
                  :arabic="facility.name_ar"
              />
              <!-- {{ facility.name }} -->
            </label>
          </div>
          <p class="text-uppercase fw-semibold text-md my-3">
            <render-translation>Facilities for SEND Students</render-translation>
          </p>
          <div
            class="form-check mb-2"
            v-for="assistiveEquipment in assistiveEquipments"
            :key="assistiveEquipment.id"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="assistiveEquipment.id"
              v-model="assistiveValues"
            />
            <label class="form-check-label text-md">
              <render-dynamic-translation
                  :english="assistiveEquipment.name"
                  :arabic="assistiveEquipment.name_ar"
              />
              <!-- {{ assistiveEquipment.name }} -->
            </label>
            <!--                        <p class="text-sm text-grey-800 m-0">-->
            <!--                            Equipped with soothing items and sensory products such as sound machines, ball chairs, gel-->
            <!--                            mats-->
            <!--                        </p>-->
          </div>
        </div>
      </div>
      <!--SEARCH RESULTS LOADING-->
      <div
        class="main-sidebar-3 bg-white fixed-top border-end border-grey-100"
        v-if="isLoading == true"
      >
        <div
          class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center justify-content-between"
        >
          <span class="text-base text-dark fw-semibold f-poppins"
            ><render-translation>Searching for schools</render-translation>...
          </span>
          <button
            class="border-0 bg-white text-dark text-lg material-icons p-0"
          >
            close
          </button>
        </div>
        <div class="px-3 py-4 main-sidebar-inner custom-scroll">
          <img
            src="../../assets/images/placeholder.png"
            class="img-fluid mb-2"
            alt="Placeholder"
          />
          <img
            src="../../assets/images/placeholder.png"
            class="img-fluid mb-2"
            alt="Placeholder"
          />
          <img
            src="../../assets/images/placeholder.png"
            class="img-fluid mb-2"
            alt="Placeholder"
          />
          <img
            src="../../assets/images/placeholder.png"
            class="img-fluid mb-2"
            alt="Placeholder"
          />
          <img
            src="../../assets/images/placeholder.png"
            class="img-fluid mb-2"
            alt="Placeholder"
          />
          <img
            src="../../assets/images/placeholder.png"
            class="img-fluid mb-2"
            alt="Placeholder"
          />
        </div>
      </div>
      <!--SEARCH RESULTS-->
      <div
        class="main-sidebar-3 bg-white fixed-top border-end border-grey-100"
        v-if="isSchools == true"
      >
        <div
          class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center justify-content-between"
          style="justify-content: space-between"
        >
          <span class="text-base text-dark fw-semibold f-poppins"
            ><render-translation :numeric="true">{{ filteredResults.length }}</render-translation> <render-translation>Schools Found</render-translation>
          </span>
          <button
            class="border-0 bg-white text-dark text-lg material-icons p-0"
            @click="
              () => {
                isSchools = false;
              }
            "
          >
            close
          </button>
        </div>
        <div class="px-3 py-4 main-sidebar-inner custom-scroll">
          <div
            v-for="school in filteredResults"
            :key="school.id"
            @click="getDetailsOfSchool(school)"
            class="card border cursor-pointer mb-2 main-card-search-results main-card-hover border-grey-100 p-sm-3 p-2 rounded-2"
          >
            <div
              class="flex-row d-flex align-items-center justify-content-start"
            >
              <div
                class="icon-84 border border-grey-100 rounded-2 bg-light me-3"
              >
                <img
                  src="../../assets/images/logo-placeholder.svg"
                  class="img-fluid rounded-2"
                  alt="image"
                />
              </div>
              <div
                class="d-flex flex-column me-sm-3 overflow-hidden position-relative"
              >
                <p
                  class="fw-semibold mb-sm-1 mb-0 f-poppins text-base lh-sm mt-md-1 text-truncate"
                >
                  <render-dynamic-translation 
                    :english="school.name_en"
                    :arabic="school.name_ar"
                  />
                  <!-- {{ school.name_en }} -->
                </p>
                <p class="text-sm mb-md-3 mb-0">
                  <render-dynamic-translation 
                    :english="curriculumName(school.curriculum)"
                    :arabic="curriculumNameArabic(school.curriculum)"
                  />
                  <!-- {{ curriculumName(school.curriculum) }} -->
                </p>
                <!-- {{curriculumName(schoolDetail.curriculum)}} -->
                <p class="text-sm mb-lg-1 mb-0 text-grey-400 lh-sm">
                  <render-dynamic-translation 
                    :english="school.grade_year"
                    :arabic="school.grade_year_ar"
                  />
                  <!-- {{ school.grade_year }} -->
                </p>
              </div>
              <div class="ms-auto d-sm-block d-none">
                <i class="material-icons text-grey-800">keyboard_arrow_right</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      SCHOOL DETAILS-->
      <div
        class="main-sidebar-lg bg-transparent fixed-top"
        v-if="isSchoolDetails"
      >
        <div
          class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center justify-content-between"
          @click="closeSchoolDetailBox()"
        >
          <a href="#" class="d-flex align-items-center">
            <i class="material-icons text-dark d-inline">arrow_back</i>
            <span
              class="ms-2 text-base d-xl-block d-lg-none text-dark fw-semibold f-poppins"
              >
              <render-translation>Back to results</render-translation></span
            >
          </a>
        </div>
        <div
          class="px-3 py-4 main-sidebar-inner bg-white custom-scroll border-end border-grey-100"
        >
          <img
            src="../../assets/images/logo-placeholder.svg"
            class="main-sidebar-detail-logo"
          />
          <div class="row mt-3">
            <div class="col-lg-7">
              <p
                v-if="!isTranslated"
                class="text-lg fw-semibold f-poppins mb-lg-4 mb-3 lh-sm"
              >
                {{ schoolDetail.name_en }}
              </p>
              <p
                v-else
                class="text-lg fw-semibold f-poppins mb-lg-4 mb-3 lh-sm"
              >
                {{ schoolDetail.name_ar }}
              </p>
            </div>
            <div
              class="col-lg-5 d-flex align-items-center mb-lg-4 mb-3 justify-content-lg-end"
            >
              <a
                v-if="schoolDetail.website"
                :href="schoolDetail.website"
                target="_blank"
                class="text-info me-3 fw-medium text-sm d-flex align-items-center"
              >
                <render-translation>Visit Website</render-translation>
                <i class="material-icons ms-1 text-base">open_in_new</i>
              </a>
              <a
                :href="schoolDetail.location"
                target="_blank"
                class="text-info fw-medium text-sm d-flex align-items-center"
              >
                <render-translation>Get Directions</render-translation>
                <i class="material-icons ms-1 text-base">open_in_new</i>
              </a>
            </div>
          </div>
          <swiper
            :slidesPerView="'auto'"
            :navigation="true"
            :spaceBetween="10"
            :modules="modules"
            class="mySwiper main-school-slider"
            v-if="schoolDetail.school_media.length == 0"
          >
            <swiper-slide>
              <img
                src="../../assets/images/image-placeholder.svg"
                class="img-fluid rounded-3"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="../../assets/images/image-placeholder.svg"
                class="img-fluid rounded-3"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="../../assets/images/image-placeholder.svg"
                class="img-fluid rounded-3"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="../../assets/images/image-placeholder.svg"
                class="img-fluid rounded-3"
              />
            </swiper-slide>
          </swiper>
          <swiper
            :slidesPerView="'auto'"
            :navigation="true"
            :spaceBetween="10"
            :modules="modules"
            class="mySwiper main-school-slider"
            v-else
          >
            <swiper-slide
              v-for="media in schoolDetail.school_media"
              :key="media.id"
            >
              <img
                :src="media.url_path"
                class="img-fluid rounded-3"
                style="height: 160px; width: 280px"
              />
            </swiper-slide>
          </swiper>
          <ul
            class="nav my-3 nav-tabs main-school-tabs"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item pe-sm-4 pe-2" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                <render-translation>Overview</render-translation>
              </button>
            </li>
            <li class="nav-item pe-sm-4 pe-2" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                <render-translation>Enrollment & Capacity</render-translation>
              </button>
            </li>
            <li class="nav-item pe-sm-4 pe-2" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                <render-translation>Facilities and Services</render-translation>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabled-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabled-tab-pane"
                aria-selected="false"
              >
                <render-translation>Special Educational Needs Capacity</render-translation>
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div class="row">
                <div class="col-lg-6">
                  <p class="text-sm">{{ schoolDetail.overview }}</p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>CITY</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-dynamic-translation 
                      :english="schoolDetail.city_name"
                      :arabic="schoolDetail.city_name_ar"
                    />
                    <!-- {{ schoolDetail.city_name }} -->
                  </p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Municipality</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-dynamic-translation 
                      :english="schoolDetail.area_name"
                      :arabic="schoolDetail.area_name_ar"
                    />
                    <!-- {{ schoolDetail.area_name }} -->
                  </p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Average Tuition Fees (AED)</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4"><render-translation :numeric="true">47,264</render-translation></p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Curriculum</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-dynamic-translation 
                      :english="curriculumName(schoolDetail.curriculum)"
                      :arabic="curriculumNameArabic(schoolDetail.curriculum)"
                    />
                    <!-- {{ curriculumName(schoolDetail.curriculum) }} -->
                  </p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Student Gender</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-dynamic-translation 
                      :english="genderName(schoolDetail.gender)"
                      :arabic="genderNameArabic(schoolDetail.gender)"
                    />
                    <!-- {{ genderName(schoolDetail.gender) }} -->
                  </p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Accreditation</render-translation>
                  </p>
                  <div
                    class="mb-4"
                    v-for="accreditation in accrediationNames(
                      schoolDetail.accreditations
                    )"
                    :key="accreditation.id"
                  >
                    <p class="text-sm lh-sm m-1">
                      <render-dynamic-translation 
                        :english="accreditation.name"
                        :arabic="accreditation.name_ar"
                      />
                    </p>
                    <!-- <p class="text-sm lh-sm m-1">{{ accreditation.name }}</p> -->
                  </div>
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>PISA - Average Reading Literacy Score</render-translation> <render-translation :numeric="true">2018</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-translation :numeric="true">{{ schoolDetail.reading_score }}</render-translation>
                  </p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>PISA- Average Mathematical Literacy Score</render-translation> <render-translation :numeric="true">2018</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-translation :numeric="true">{{ schoolDetail.mathematical_score }}</render-translation>
                  </p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>PISA - Average Scientific Literacy Score</render-translation> <render-translation :numeric="true">2018</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-translation :numeric="true">{{ schoolDetail.scientific_score }}</render-translation>
                  </p>

                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>affiliated with an international school/nursery or group</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm mb-4"
                    v-if="schoolDetail.international_affiliated == false"
                  >
                    <render-translation>NO</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm mb-4"
                    v-if="schoolDetail.international_affiliated == true"
                  >
                    <render-translation>YES</render-translation>
                  </p>
                </div>
              </div>
              ...
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div class="row">
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Availability of Nursery/Preschool</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm mb-4"
                    v-if="
                      schoolCapacities.nursery_pre_reception == null ||
                      schoolCapacities.nursery_pre_reception == 0
                    "
                  >
                    <render-translation>No</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4" v-else><render-translation>Yes</render-translation></p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Total Students Enrolled</render-translation> <render-translation :numeric="true">2021/2022</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4">
                    <render-translation :numeric="true">{{ schoolEnrollments.total }}</render-translation>
                  </p>
                </div>
                <div class="col-lg-12">
                  <p class="fw-bold f-poppins"><render-translation>Current Available Seats</render-translation></p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Early Years - Nursery/ Pre-Reception</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm text-purple mb-4"
                    v-if="
                      schoolCapacities.nursery_pre_reception == null ||
                      schoolCapacities.nursery_pre_reception == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>KG 1 Pre-Kindergarten/Reception</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.kg1_pre_kindergarten_reception == null ||
                      schoolCapacities.kg1_pre_kindergarten_reception == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>KG 2 Kindergarten/Year 1</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.kg2_kindergarten_year1 == null ||
                      schoolCapacities.kg2_kindergarten_year1 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">1</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">2</render-translation>
                    <!-- <render-translation>Grade 1/Year 2</render-translation> -->
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade1_year2 == null ||
                      schoolCapacities.grade1_year2 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">2</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">3</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade2_year3 == null ||
                      schoolCapacities.grade2_year3 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">3</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">4</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade3_year4 == null ||
                      schoolCapacities.grade3_year4 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">4</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">5</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade4_year5 == null ||
                      schoolCapacities.grade4_year5 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">5</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">6</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade5_year6 == null ||
                      schoolCapacities.grade5_year6 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">6</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">7</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade6_year7 == null ||
                      schoolCapacities.grade6_year7 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">7</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">8</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade7_year8 == null ||
                      schoolCapacities.grade7_year8 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">8</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">9</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade8_year9 == null ||
                      schoolCapacities.grade8_year9 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">9</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">10</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade9_year10 == null ||
                      schoolCapacities.grade9_year10 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">10</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">11</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade10_year11 == null ||
                      schoolCapacities.grade10_year11 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">11</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">12</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade11_year12 == null ||
                      schoolCapacities.grade11_year12 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Grade</render-translation> <render-translation :numeric="true">12</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">13</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolCapacities.grade12_year13 == null ||
                      schoolCapacities.grade12_year13 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <p class="fw-bold f-poppins">
                <render-translation>Facilities</render-translation>
              </p>
              <ul class="list-unstyled m-0 col-xl-10">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                >
                  <div class="col-7 px-0 d-flex align-items-center">
                    <i class="material-icons me-2 text-info text-lg">water</i>
                    <render-translation>Swimming pools</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-purple fw-medium"
                    v-if="
                      schoolDetail.school_facilities.number_swimming_pools ==
                        null ||
                      schoolDetail.school_facilities.number_swimming_pools == 0
                    "
                  >
                    <render-translation>Not Available</render-translation>
                  </div>
                  <div class="col-5 px-0 text-primary fw-medium" v-else>
                    <render-translation>Available</render-translation>
                  </div>
                </li>
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                >
                  <div class="col-7 px-0 d-flex align-items-center">
                    <i class="material-icons me-2 text-info text-lg"
                      >sports_gymnastics</i
                    >
                    <render-translation>Gyms</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-purple fw-medium"
                    v-if="
                      schoolDetail.school_facilities.number_gyms == null ||
                      schoolDetail.school_facilities.number_gyms == 0
                    "
                  >
                  <render-translation>Not Available</render-translation>
                  </div>
                  <div class="col-5 px-0 text-primary fw-medium" v-else>
                    <render-translation>Available</render-translation>
                  </div>
                </li>
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                >
                  <div class="col-7 px-0 d-flex align-items-center">
                    <i class="material-icons me-2 text-info text-lg"
                      >sports_kabaddi</i
                    >
                    <render-translation>Playgrounds</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-purple fw-medium"
                    v-if="
                      schoolDetail.school_facilities.number_playgrounds ==
                        null ||
                      schoolDetail.school_facilities.number_playgrounds == 0
                    "
                  >
                    <render-translation>Not Available</render-translation>
                  </div>
                  <div class="col-5 px-0 text-primary fw-medium" v-else>
                    <render-translation>Available</render-translation>
                  </div>
                </li>
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                >
                  <div class="col-7 px-0 d-flex align-items-center">
                    <i class="material-icons me-2 text-info text-lg"
                      >house_siding</i
                    >
                    <render-translation>Air conditioned playing Courts</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-purple fw-medium"
                    v-if="
                      schoolDetail.school_facilities
                        .number_air_conditioned_courts == null ||
                      schoolDetail.school_facilities
                        .number_air_conditioned_courts == 0
                    "
                  >
                    <render-translation>Not Available</render-translation>
                  </div>
                  <div class="col-5 px-0 text-primary fw-medium" v-else>
                    <render-translation>Available</render-translation>
                  </div>
                </li>
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                >
                  <div class="col-7 px-0 d-flex align-items-center">
                    <i class="material-icons me-2 text-info text-lg"
                      >golf_course</i
                    >
                    <render-translation>Open air playing Courts</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-purple fw-medium"
                    v-if="
                      schoolDetail.school_facilities.number_open_air_courts ==
                        null ||
                      schoolDetail.school_facilities.number_open_air_courts == 0
                    "
                  >
                    <render-translation>Not Available</render-translation>
                  </div>
                  <div class="col-5 px-0 text-primary fw-medium" v-else>
                    <render-translation>Available</render-translation>
                  </div>
                </li>
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                >
                  <div class="col-7 px-0 d-flex align-items-center">
                    <i class="material-icons me-2 text-info text-lg"
                      >food_bank</i
                    >
                    <render-translation>Cafeterias/Lunch Areas</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-purple fw-medium"
                    v-if="
                      schoolDetail.school_facilities.number_cafeterias ==
                        null ||
                      schoolDetail.school_facilities.number_cafeterias == 0
                    "
                  >
                    <render-translation>Not Available</render-translation>
                  </div>
                  <div class="col-5 px-0 text-primary fw-medium" v-else>
                    <render-translation>Available</render-translation>
                  </div>
                </li>
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                >
                  <div class="col-7 px-0 d-flex align-items-center">
                    <i class="material-icons me-2 text-info text-lg"
                      >directions_car_filled</i
                    >
                    <render-translation>Transportation</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-grey-400 fw-medium"
                    v-if="schoolDetail.transportation_type == 1"
                  >
                    <render-translation>Yes, provided by the school/nursery</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-grey-400 fw-medium"
                    v-if="schoolDetail.transportation_type == 2"
                  >
                    <render-translation>Yes, provided by outside contractors</render-translation>
                  </div>
                  <div
                    class="col-5 px-0 text-grey-400 fw-medium"
                    v-if="schoolDetail.transportation_type == 3"
                  >
                    <render-translation>No provided transportation</render-translation>
                  </div>
                </li>
              </ul>
              <p class="fw-bold f-poppins my-3"><render-translation>Sports/Fitness Activities</render-translation></p>
              <ul class="list-unstyled m-0 col-xl-10">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                  v-for="sport in SportFitnessNames(
                    schoolDetail.sport_activities
                  )"
                  :key="sport.id"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-dynamic-translation
                    :english="sport.name"
                    :arabic="sport.name_ar"
                  />
                  <!-- {{ sport.name }} -->
                </li>
              </ul>
              <ul class="list-unstyled m-0 col-xl-10" v-if="noneSports == true">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-grey-100"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-translation>None</render-translation>
                </li>
              </ul>
              <p class="fw-bold f-poppins my-3"><render-translation>Creative Activities</render-translation></p>
              <ul class="list-unstyled m-0 col-xl-10">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                  v-for="creative in creativeActivitiesNames(
                    schoolDetail.creative_activities
                  )"
                  :key="creative.id"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                    <render-dynamic-translation
                      :english="creative.name"
                      :arabic="creative.name_ar"
                    />
                  <!-- {{ creative.name }} -->
                </li>
              </ul>
              <ul
                class="list-unstyled m-0 col-xl-10"
                v-if="noneCreative == true"
              >
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-grey-100"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-translation>None</render-translation>
                </li>
              </ul>
              <p class="fw-bold f-poppins my-3">
                <render-translation>Academic and Work-Related Activities</render-translation>
              </p>
              <ul class="list-unstyled m-0 col-xl-10">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                  v-for="acadamic in AcadamicNames(
                    schoolDetail.academic_activities
                  )"
                  :key="acadamic.id"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                    <render-dynamic-translation
                      :english="acadamic.name"
                      :arabic="acadamic.name_ar"
                    />
                  <!-- {{ acadamic.name }} -->
                </li>
              </ul>
              <ul
                class="list-unstyled m-0 col-xl-10"
                v-if="noneAcademic == true"
              >
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-grey-100"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-translation>None</render-translation>
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="disabled-tab-pane"
              role="tabpanel"
              aria-labelledby="disabled-tab"
              tabindex="0"
            >
              <div class="row">
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>equipped for SEND students</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm mb-4"
                    v-if="schoolDetail.send_student_equipped == false"
                  >
                    <render-translation>No</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4" v-else>
                    <render-translation>Yes</render-translation>
                  </p>
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Special Educational Need(s) Catered To</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm mb-4"
                    v-for="educationNeeds in specialEduationNames(
                      schoolDetail.special_educational_needs
                    )"
                    :key="educationNeeds.id"
                  >
                    <render-dynamic-translation
                      :english="educationNeeds.name"
                      :arabic="educationNeeds.name_ar"
                    />
                    <!-- {{ educationNeeds.name }} -->
                  </p>
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>counseling sessions for parents of SEND students</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm mb-4"
                    v-if="schoolDetail.counseling_sessions == true"
                  >
                    <render-translation>Yes</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm mb-4"
                    v-if="schoolDetail.counseling_sessions == false"
                  >
                    <render-translation>No</render-translation>
                  </p>
                  <p class="text-sm lh-sm mb-4" v-else>
                    <render-translation>None</render-translation>
                  </p>
                </div>
                <p class="fw-bold f-poppins">
                  <render-translation>Special Educational Needs Capacity</render-translation>
                </p>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>Early Years - Nursery/ Pre-Reception</render-translation>
                  </p>
                  <p
                    class="text-sm lh-sm text-purple mb-4"
                    v-if="
                      schoolSpecialCapacity.nursery_pre_reception == null ||
                      schoolSpecialCapacity.nursery_pre_reception == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>KG 1 Pre-Kindergarten/Reception</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.kg1_pre_kindergarten_reception ==
                        null ||
                      schoolSpecialCapacity.kg1_pre_kindergarten_reception == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                    <render-translation>KG 2 Kindergarten/Year 1</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.kg2_kindergarten_year1 == null ||
                      schoolSpecialCapacity.kg2_kindergarten_year1 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">1</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">2</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade1_year2 == null ||
                      schoolSpecialCapacity.grade1_year2 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">2</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">3</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade2_year3 == null ||
                      schoolSpecialCapacity.grade2_year3 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">3</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">4</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade3_year4 == null ||
                      schoolSpecialCapacity.grade3_year4 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">4</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">5</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade4_year5 == null ||
                      schoolSpecialCapacity.grade4_year5 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">5</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">6</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade5_year6 == null ||
                      schoolSpecialCapacity.grade5_year6 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">6</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">7</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade6_year7 == null ||
                      schoolSpecialCapacity.grade6_year7 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">7</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">8</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade7_year8 == null ||
                      schoolSpecialCapacity.grade7_year8 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">8</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">9</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade8_year9 == null ||
                      schoolSpecialCapacity.grade8_year9 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">9</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">10</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade9_year10 == null ||
                      schoolSpecialCapacity.grade9_year10 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">10</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">11</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade10_year11 == null ||
                      schoolSpecialCapacity.grade10_year11 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">11</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">12</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade11_year12 == null ||
                      schoolSpecialCapacity.grade11_year12 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="text-uppercase mb-1 fw-semibold text-grey-400 text-10"
                  >
                  <render-translation>Grade</render-translation> <render-translation :numeric="true">12</render-translation>/<render-translation>Year</render-translation> <render-translation :numeric="true">13</render-translation>
                  </p>
                  <p
                    class="text-sm text-purple lh-sm mb-4"
                    v-if="
                      schoolSpecialCapacity.grade12_year13 == null ||
                      schoolSpecialCapacity.grade12_year13 == 0
                    "
                  >
                    <render-translation>No Seats Available</render-translation>
                  </p>
                  <p class="text-sm text-primary fw-medium lh-sm mb-4" v-else>
                    <render-translation>Seats Available</render-translation>
                  </p>
                </div>
              </div>
              <p class="fw-bold f-poppins my-3">
                <render-translation>Special Education Staff Resources</render-translation>
              </p>
              <ul class="list-unstyled m-0 col-xl-10">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                  v-for="(resource, index) in educationalResourceNames(
                    schoolDetail.special_educational_resources
                  )"
                  :key="index"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-dynamic-translation 
                    :english="resource.name"
                    :arabic="resource.name_ar"
                  />
                  <!-- {{ resource.name }} -->
                </li>
              </ul>
              <ul
                class="list-unstyled m-0 col-xl-10"
                v-if="noneEducational == true"
              >
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-grey-100"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-translation>None</render-translation>
                </li>
              </ul>
              <p class="fw-bold f-poppins my-3"><render-translation>Support Services</render-translation></p>
              <ul class="list-unstyled m-0 col-xl-10">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                  v-for="support in supportServicesNames(
                    schoolDetail.support_services
                  )"
                  :key="support.id"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                    <render-dynamic-translation 
                      :english="support.name"
                      :arabic="support.name_ar"
                    />
                  <!-- {{ support.name }} -->
                </li>
              </ul>
              <ul
                class="list-unstyled m-0 col-xl-10"
                v-if="noneSupportive == true"
              >
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-grey-100"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-translation>None</render-translation>
                </li>
              </ul>
              <p class="fw-bold f-poppins my-3">
                <render-translation>Assistive Equipment and Facilities Provided</render-translation>
              </p>
              <ul class="list-unstyled m-0 col-xl-10">
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                  v-for="equipment in assisstiveEquipmentNames(
                    schoolDetail.assistive_equipments
                  )"
                  :key="equipment.id"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                    <render-dynamic-translation 
                      :english="equipment.name"
                      :arabic="equipment.name_ar"
                    />
                  <!-- {{ equipment.name }} -->
                </li>
              </ul>
              <ul
                class="list-unstyled m-0 col-xl-10"
                v-if="noneAssistive == true"
              >
                <li
                  class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-grey-100"
                >
                  <i class="material-icons me-2 text-info text-lg"
                    >check_circle_outline</i
                  >
                  <render-translation>None</render-translation>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-content vh-100 position-relative">
      <nav
        class="main-navbar navbar bg-white"
        style="width: 1095px"
        v-if="isSchoolDetails == true"
      ></nav>
      <GoogleMap
        api-key="AIzaSyB5p9rRsJ-TRP_vYzNhFA_xmfwbdb1360Y"
        style="width: 100%; height: 100vh"
        :center="{ lat: lat, lng: lng }"
        :zoom="13"
        :styles="snazzy"
      >
        <span v-for="(school, index) in filteredResults" :key="index">
          <CustomMarker
            :options="{
              position: {
                lat: parseFloat(school.latitude),
                lng: parseFloat(school.longitude),
              },
              anchorPoint: 'BOTTOM_CENTER',
            }"
            @click="
              () => {
                schoolIdInfoBox = school.id;
                isShowInfoWindow = true;
              }
            "
          >
            <div style="text-align: center">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                v-if="schoolIdInfoBox !== school.id"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.13 0 0 3.13 0 7C0 8.74 0.5 10.37 1.41 11.84C2.36 13.38 3.61 14.7 4.57 16.24C5.04 16.99 5.38 17.69 5.74 18.5C6 19.05 6.21 20 7 20C7.79 20 8 19.05 8.25 18.5C8.62 17.69 8.95 16.99 9.42 16.24C10.38 14.71 11.63 13.39 12.58 11.84C13.5 10.37 14 8.74 14 7C14 3.13 10.87 0 7 0ZM7 9.75C5.62 9.75 4.5 8.63 4.5 7.25C4.5 5.87 5.62 4.75 7 4.75C8.38 4.75 9.5 5.87 9.5 7.25C9.5 8.63 8.38 9.75 7 9.75Z"
                  fill="#324597"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                v-if="isShowInfoWindow && schoolIdInfoBox == school.id"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z"
                  fill="#E92C2C"
                />
              </svg>
            </div>
            <InfoWindow v-if="isShowInfoWindow && schoolIdInfoBox == school.id">
              <div class="position-absolute p-3">
                <div class="card-shadow bg-white card-map">
                  <div class="border-grey-100 p-3 border-top">
                    <h6
                      class="text-dark f-poppins fw-medium"
                      @click="getDetailsOfSchool(school)"
                    >
                    <render-dynamic-translation 
                        :english="school.name_en"
                        :arabic="school.name_ar"
                    />
                    </h6>
                    <p class="text-grey-800 m-0 text-uppercase text-mini">
                      <render-dynamic-translation 
                          :english="school.city_name"
                          :arabic="school.city_name_ar"
                      />
                    </p>
                  </div>
                  <div class="card-logo p-3">
                    <img
                      src="../../assets/images/logo-placeholder.svg"
                      class="img-fluid"
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </InfoWindow>
          </CustomMarker>
          <!--                <Marker :options="{position:{ lat: parseFloat(school.latitude), lng: parseFloat(school.longitude) }}"/>-->
        </span>
      </GoogleMap>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { CustomMarker, GoogleMap } from "vue3-google-map";
import { snazzy } from "../../themes/snazzyMap";
import VueSlider from "vue-slider-component";
import { ToggleButton } from "vue-js-toggle-button";
import renderTranslation from "@/utils/renderTranslation.js";
import RenderTranslation from "@/components/RenderTranslation.vue";
import RenderDynamicTranslation from "../RenderDynamicTranslation.vue";
import "vue-slider-component/theme/default.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    RenderTranslation,
    RenderDynamicTranslation,
    GoogleMap,
    CustomMarker,
    VueSlider,
    ToggleButton
  },
  setup() {
    return {
      modules: [Navigation],
      snazzy,
    };
  },
  data: function () {
    return {
      lat: null,
      lng: null,
      areas: [],
      curriculums: [],
      gradeLevel: [],
      specialNeeds: [],
      availabilitySearch: false,
      searchValue: "",
      schools: [],
      assistiveEquipments: [],
      recreationalFacilities: [],
      accreditationsData: [],
      sportsFitnessData: [],
      acadamicData: [],
      accreditationsItems: [],
      sportsFitnessItems: [],
      acadamicItems: [],
      specialEducationalItems: [],
      gender: [],
      areaValues: [],
      genderValues: [],
      assistiveValues: [],
      studentFacilities: [],
      specialNeedValues: [],
      curriculumsValues: [],
      gradeLevelValues: [],
      facilitiesValues: [],
      schoolDetail: "",
      lastItems: [],
      isLoading: false,
      isSchools: false,
      isAdvanceSearch: false,
      isSchoolDetails: false,
      isSpecialEducationalNeeds: false,
      feesValue: [0, 90000],
      dotOptions: [
        {
          tooltip: "always",
        },
        {
          tooltip: "none",
        },
        {
          tooltip: "always",
        },
      ],
      studentValue: [0, 90000],
      schoolCapacities: [],
      schoolEnrollments: [],
      schoolSpecialCapacity: [],
      eduResourceItems: [],
      educationalResource: [],
      supportItems: [],
      equipmentItems: [],
      serviceSupportData: [],
      formatter1: (v) => {
        const translationState = this.$store.state.isTranslated
        return `${renderTranslation('AED', translationState)} ${renderTranslation(("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ","), translationState)}`
      },
      isShowInfoWindow: false,
      schoolIdInfoBox: null,
      noneEducational: null,
      noneAssistive: null,
      noneSupportive: null,
      noneCreative: null,
      noneSports: null,
      noneAcademic: null,
      creativeActivityData: [],
      creativeItems: [],
      isClearButton: false,
      areaText: "By Area",
      genderText: "By Gender",
      curriculumText: "By Curriculum",
      gradeText: "By Grade Level",
      needsText: "Special Educational Needs",
      genders: [],
    };
  },
  created() {
    this.getData();
    axios
      .get(process.env.VUE_APP_BASE_URL + `/schools`)
      .then((response) => {
        this.schools = response.data.data.schools;
      })
      .catch((error) => {
        console.error(error);
      });
    this.lat = 25.3446812;
    this.lng = 55.4143102;
  },
  computed: {
    isTranslated() {
      return this.$store.state.isTranslated;
    },
    filteredResults() {
      let _self = this;
      let items = _self.schools;

      if (
        _self.searchValue == "" &&
        _self.genderValues.length == 0 &&
        _self.gradeLevelValues.length == 0 &&
        _self.facilitiesValues.length == 0 &&
        _self.availabilitySearch == false &&
        _self.studentValue[0] == 0 &&
        _self.studentValue[1] == 90000 &&
        _self.feesValue[0] == 0 &&
        _self.feesValue[1] == 90000 &&
        _self.assistiveValues.length == 0 &&
        _self.specialNeedValues.length == 0 &&
        _self.curriculumsValues.length == 0 &&
        _self.areaValues.length == 0
      ) {
        _self.isClearButton = false;
      } else {
        _self.isClearButton = true;
      }
      // Process search input
      if (_self.searchValue != "" && _self.searchValue) {
        items = items.filter((item) => {
          return item.name_en
            .toUpperCase()
            .includes(_self.searchValue.toUpperCase());
        });
      }
      if (_self.areaValues.length !== 0) {
        _self.areas.forEach((item) => {
          if (item.id == _self.areaValues[0]) {
            if (this.$store.state.isTranslated) {
              _self.areaText = item.name_ar + " ...";
            } else {
              _self.areaText = item.name + " ...";
            }
          }
        });
        _self.lastItems = [];
        _self.areaValues.forEach((searchValue) => {
          items.forEach((item) => {
            if (item.city == searchValue) {
              _self.lastItems.push(item);
            }
          });
        });
        items = _self.lastItems;
      }
      if (_self.genderValues.length !== 0) {
        _self.genders.forEach((item) => {
          if (item.id == _self.genderValues[0]) {
            if (this.$store.state.isTranslated) {
              _self.genderText = item.name_ar + " ...";
            } else {
              _self.genderText = item.name_en + " ...";
            }
          }
        });
        _self.lastItems = [];
        _self.genderValues.forEach((searchValue) => {
          items.forEach((item) => {
            if (item.gender == searchValue) {
              _self.lastItems.push(item);
            }
          });
        });
        items = _self.lastItems;
      }
      if (_self.gradeLevelValues.length !== 0) {
        _self.gradeLevel.forEach((item) => {
          if (item.id == _self.gradeLevelValues[0]) {
            if (this.$store.state.isTranslated) {
              _self.gradeText = item.name_ar + " ...";
            } else {
              _self.gradeText = item.name + " ...";
            }
          }
        });
        _self.lastItems = [];
        _self.gradeLevelValues.forEach((searchValue) => {
          items.forEach((item) => {
            item.grade_ids.forEach((grade) => {
              if (grade == searchValue) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            });
          });
        });
        items = _self.lastItems;
      }
      if (_self.curriculumsValues.length !== 0) {
        _self.curriculums.forEach((item) => {
          if (item.id == _self.curriculumsValues[0]) {
            if (this.$store.state.isTranslated) {
              _self.curriculumText = item.name_ar + " ...";
            } else {
              _self.curriculumText = item.name + " ...";
            }
          }
        });
        _self.lastItems = [];
        _self.curriculumsValues.forEach((searchValue) => {
          items.forEach((item) => {
            if (item.curriculum == searchValue) {
              _self.lastItems.push(item);
            }
          });
        });
        items = _self.lastItems;
      }
      if (_self.specialNeedValues.length !== 0) {
        _self.specialNeeds.forEach((item) => {
          if (item.id == _self.specialNeedValues[0]) {
            if (this.$store.state.isTranslated) {
              _self.needsText = item.name_ar.substring(0, 25) + " ...";
            } else {
              _self.needsText = item.name.substring(0, 25) + " ...";
            }
          }
        });
        _self.lastItems = [];
        _self.specialNeedValues.forEach((searchValue) => {
          items.forEach((item) => {
            item.special_educational_needs.forEach((education) => {
              if (education == searchValue) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            });
          });
        });
        items = _self.lastItems;
      }
      if (_self.assistiveValues.length !== 0) {
        _self.lastItems = [];
        _self.assistiveValues.forEach((searchValue) => {
          items.forEach((item) => {
            item.assistive_equipments.forEach((education) => {
              if (education == searchValue) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            });
          });
        });
        items = _self.lastItems;
      }
      if (_self.feesValue.length !== 0) {
        _self.lastItems = [];
        items.forEach((item) => {
          if (
            item.tution_fees >= _self.feesValue[0] &&
            item.tution_fees <= _self.feesValue[1]
          ) {
            _self.lastItems.push(item);
          }
        });
        items = _self.lastItems;
      }
      if (_self.studentValue.length !== 0) {
        _self.lastItems = [];
        items.forEach((item) => {
          if (
            item.school_staff.student_teacher_ratio >= _self.studentValue[0] &&
            item.school_staff.student_teacher_ratio <= _self.studentValue[1]
          ) {
            _self.lastItems.push(item);
          }
        });
        items = _self.lastItems;
      }
      if (_self.availabilitySearch) {
        _self.lastItems = [];
        items.forEach((item) => {
          if (
            item.school_enrollments.nursery_pre_reception != null &&
            item.school_enrollments.nursery_pre_reception > 0
          ) {
            _self.lastItems.push(item);
          }
        });
        items = _self.lastItems;
      }
      if (_self.facilitiesValues.length !== 0) {
        _self.lastItems = [];
        items.forEach((item) => {
          _self.facilitiesValues.forEach((searchValue) => {
            if (searchValue == 1) {
              if (
                item.school_facilities.number_classrooms != null &&
                item.school_facilities.number_classrooms > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 2) {
              if (
                item.school_facilities.number_libraries != null &&
                item.school_facilities.number_libraries > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 3) {
              if (
                item.school_facilities.number_computer_labs != null &&
                item.school_facilities.number_computer_labs > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 4) {
              if (
                item.school_facilities.number_science_labs != null &&
                item.school_facilities.number_science_labs > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 5) {
              if (
                item.school_facilities.number_swimming_pools != null &&
                item.school_facilities.number_swimming_pools > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 6) {
              if (
                item.school_facilities.number_gyms != null &&
                item.school_facilities.number_gyms > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 7) {
              if (
                item.school_facilities.number_playgrounds != null &&
                item.school_facilities.number_playgrounds > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 8) {
              if (
                item.school_facilities.number_air_conditioned_courts != null &&
                item.school_facilities.number_air_conditioned_courts > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 9) {
              if (
                item.school_facilities.number_open_air_courts != null &&
                item.school_facilities.number_open_air_courts > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
            if (searchValue == 10) {
              if (
                item.school_facilities.number_cafeterias != null &&
                item.school_facilities.number_cafeterias > 0
              ) {
                if (
                  !_self.lastItems.find((lastItem) => lastItem.id == item.id)
                ) {
                  _self.lastItems.push(item);
                }
              }
            }
          });
        });
        items = _self.lastItems;
      }
      return items;
    },
  },
  methods: {
    renderTranslation,
    async getData() {
      let _self = this;
      await axios
        .get(process.env.VUE_APP_BASE_URL + `/data`)
        .then((response) => {
          _self.areas = response.data.data.cities;
          _self.curriculums = response.data.data.curriculums;
          _self.gradeLevel = response.data.data.age_groups;
          _self.genders = response.data.data.genders;
          _self.specialNeeds = response.data.data.special_educational_needs;
          _self.assistiveEquipments = response.data.data.assistive_equipments;
          _self.recreationalFacilities = response.data.data.facilities;
          _self.accreditationsData = response.data.data.accreditations;
          _self.sportsFitnessData = response.data.data.sport_activities;
          _self.creativeActivityData = response.data.data.creative_activities;
          _self.acadamicData = response.data.data.academic_activities;
          _self.educationalResource =
            response.data.data.special_educational_resources;
          _self.serviceSupportData = response.data.data.support_services;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    changeStatusOfSpecialNeeds() {
      let _self = this;
      if (_self.isSpecialEducationalNeeds == true) {
        _self.isSpecialEducationalNeeds == false;
      } else {
        _self.isSpecialEducationalNeeds == true;
      }
    },
    getSchools() {
      this.isLoading = true;
      let _self = this;
      _self.isAdvanceSearch = false;
      _self.isSchoolDetails = false;
      _self.isLoading = false;
      _self.isSchools = true;
    },
    getDetailsOfSchool(school) {
      let _self = this;
      _self.schoolDetail = school;
      _self.schoolDetail.school_capacities.forEach((capacity) => {
        if (capacity.current_year == true) {
          _self.schoolCapacities = capacity;
        }
      });
      _self.schoolDetail.school_enrollments.forEach((enrollment) => {
        if (enrollment.current_year == true) {
          _self.schoolEnrollments = enrollment;
        }
      });
      _self.schoolDetail.school_send_capacities.forEach((schl_capacity) => {
        if (schl_capacity.current_year == true) {
          _self.schoolSpecialCapacity = schl_capacity;
        }
      });
      _self.schoolIdInfoBox = school.id;
      _self.isShowInfoWindow = true;
      _self.isLoading = false;
      _self.isAdvanceSearch = false;
      _self.isSchools = false;
      _self.isSchoolDetails = true;
    },
    curriculumName(id) {
      let item = null;
      this.curriculums.forEach((curri) => {
        if (curri.id == id) {
          item = curri;
        }
      });
      return item.name;
    },
    curriculumNameArabic(id) {
      let item = null;
      this.curriculums.forEach((curri) => {
        if (curri.id == id) {
          item = curri;
        }
      });
      return item.name_ar;
    },
    genderName(id) {
      let item = null;
      this.genders.forEach((curri) => {
        if (curri.id == id) {
          item = curri;
        }
      });
      return item.name_en;
    },
    genderNameArabic(id) {
      let item = null;
      this.genders.forEach((curri) => {
        if (curri.id == id) {
          item = curri;
        }
      });
      return item.name_ar;
    },
    accrediationNames(values) {
      if (values.length !== 0) {
        this.accreditationsItems = [];
        values.forEach((searchValue) => {
          this.accreditationsData.forEach((item) => {
            if (item.id == searchValue) {
              this.accreditationsItems.push(item);
            }
          });
        });
        return this.accreditationsItems;
      }
    },
    SportFitnessNames(values) {
      if (values.length !== 0) {
        this.sportsFitnessItems = [];
        values.forEach((searchValue) => {
          this.sportsFitnessData.forEach((item) => {
            if (item.id == searchValue) {
              this.sportsFitnessItems.push(item);
            }
          });
        });
        return this.sportsFitnessItems;
      } else {
        this.noneSports = true;
      }
    },
    AcadamicNames(values) {
      if (values.length !== 0) {
        this.acadamicItems = [];
        values.forEach((searchValue) => {
          this.acadamicData.forEach((item) => {
            if (item.id == searchValue) {
              this.acadamicItems.push(item);
            }
          });
        });
        return this.acadamicItems;
      } else {
        this.noneAcademic = true;
      }
    },
    specialEduationNames(values) {
      if (values.length !== 0) {
        this.specialEducationalItems = [];
        values.forEach((searchValue) => {
          this.specialNeeds.forEach((item) => {
            if (item.id == searchValue) {
              this.specialEducationalItems.push(item);
            }
          });
        });
        return this.specialEducationalItems;
      }
    },
    educationalResourceNames(values) {
      if (values.length !== 0) {
        this.eduResourceItems = [];
        values.forEach((searchValue) => {
          this.educationalResource.forEach((item) => {
            if (item.id == searchValue) {
              this.eduResourceItems.push(item);
            }
          });
        });
        return this.eduResourceItems;
      } else {
        this.noneEducational = true;
      }
    },
    supportServicesNames(values) {
      if (values.length !== 0) {
        this.supportItems = [];
        values.forEach((searchValue) => {
          this.serviceSupportData.forEach((item) => {
            if (item.id == searchValue) {
              this.supportItems.push(item);
            }
          });
        });
        return this.supportItems;
      } else {
        this.noneSupportive = true;
      }
    },
    assisstiveEquipmentNames(values) {
      if (values.length !== 0) {
        this.equipmentItems = [];
        values.forEach((searchValue) => {
          this.assistiveEquipments.forEach((item) => {
            if (item.id == searchValue) {
              this.equipmentItems.push(item);
            }
          });
        });
        return this.equipmentItems;
      } else {
        this.noneAssistive = true;
      }
    },
    creativeActivitiesNames(values) {
      if (values.length !== 0) {
        this.creativeItems = [];
        values.forEach((searchValue) => {
          this.creativeActivityData.forEach((item) => {
            if (item.id == searchValue) {
              this.creativeItems.push(item);
            }
          });
        });
        return this.creativeItems;
      } else {
        this.noneCreative = true;
      }
    },
    removeFilters() {
      this.availabilitySearch = false;
      this.feesValue = [0, 90000];
      this.studentValue = [0, 90000];
      this.searchValue = "";
      this.areaValues = [];
      this.genderValues = [];
      this.assistiveValues = [];
      this.specialNeedValues = [];
      this.curriculumsValues = [];
      this.facilitiesValues = [];
      this.gradeLevelValues = [];
      this.areaText = "By Area";
      this.genderText = "By Gender";
      this.curriculumText = "By Curriculum";
      this.gradeText = "By Grade Level";
      this.needsText = "Special Educational Needs";
    },
    closeSchoolDetails() {
      if (this.isSchoolDetails) {
        this.isSchoolDetails = false;
        this.isShowInfoWindow = false;
        this.isSchools = true;
      }
    },
    closeSchoolDetailBox() {
      let _self = this;
      _self.isSchoolDetails = false;
      _self.isSchools = true;
    },
    toggleTranslation(e) {
      this.isSchoolDetails = false;
      this.$store.commit("toggleTranslation");
    },
  },
};
</script>

<style scoped>
.main-school-slider .swiper-slide {
  width: auto !important;
}

.text-10 {
  font-size: 10px !important;
}

.card-map {
  top: 130px;
  z-index: 9;
  width: 240px;
}

@media (max-width: 767px) {
  .card-map {
    width: 200px !important;
  }
}
</style>
