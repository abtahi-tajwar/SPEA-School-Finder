<template>
    <div class="main-wrapper d-flex vh-100">
        <div class="offcanvas-lg offcanvas-start" tabindex="-1" id="offcanvasResponsive"
             aria-labelledby="offcanvasResponsiveLabel">
            <!--SIDEBAR-->
            <div class="main-sidebar bg-white fixed-top border-end border-grey-100">
                <div class="main-sidebar-logo-box py-2 px-4 border-bottom border-grey-100">
                    <div class="main-sidebar-logo-box-img">
                        <img src="../../assets/images/Logo.png" class="img-fluid" alt="Logo">
                    </div>
                </div>
                <div class="p-4 main-sidebar-inner custom-scroll d-flex flex-column">
                    <h6 class="f-poppins text-lg mb-4"><render-translation>Sharjah Education Map</render-translation></h6>
                    <div class="custom-input-group mb-2 position-relative">
                        <input 
                            class="custom-input-sm" 
                            :placeholder="renderTranslation('Search', isTranslated)"
                            v-model="searchValue"
                        >
                        <i class="material-icons text-lg position-absolute">search</i>
                    </div>
                    <!--      <a href="#" class="text-info text-decoration-underline">Advanced Search</a>-->
                    <p class="text-md text-uppercase mb-3 mt-3  fw-semibold"><render-translate>Private Schools Data</render-translate></p>
                    <div class="dropdown custom-dropdown mb-3">
                        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" @click="closeSchoolDetails()">
                            <span v-if="areaValues.length==0"><render-translation>By Area</render-translation></span>
                            <span v-else>{{areaText}}</span>
                        </button>
                        <ul class="dropdown-menu dropdown-scroll custom-scroll">
                            <li v-for="area in areas" :key="area.id">
                                <button class="dropdown-item d-flex align-items-center">
                                    <div class="form-check">
                                        <input type="checkbox" :value="area.id" class="form-check-input"
                                               v-model="areaValues">
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
                        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" @click="closeSchoolDetails()">
                            <span v-if="genderValues.length==0"><render-translation>By Gender</render-translation></span>
                            <span v-else>{{genderText}}</span>
                        </button>
                        <ul class="dropdown-menu dropdown-scroll custom-scroll">
                            <li v-for="gender in genders" :key="gender.id">
                                <button class="dropdown-item d-flex align-items-center">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input"
                                               v-model="genderValues" :value="gender.id">
                                        <label class="form-check-label text-sm">
                                            <render-dynamic-translation
                                                :english="gender.name_en"
                                                :arabic="gender.name_ar"
                                            />
                                            <!-- {{gender.name_en}} -->
                                        </label>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown custom-dropdown mb-3">
                        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" @click="closeSchoolDetails()">
                            <span v-if="curriculumsValues.length==0"><render-translation>By Curriculum</render-translation></span>
                            <span v-else>{{curriculumText}}</span>
                        </button>
                        <ul class="dropdown-menu dropdown-scroll custom-scroll">
                            <li v-for="curriculum in curriculums" :key="curriculum.id">
                                <button class="dropdown-item d-flex align-items-center">
                                    <div class="form-check">
                                        <input type="checkbox" :value="curriculum.id" class="form-check-input"
                                               v-model="curriculumsValues">
                                        <label class="form-check-label text-sm">
                                            <render-dynamic-translation
                                                :english="curriculum.name"
                                                :arabic="curriculum.name_ar"
                                            />
                                            <!-- {{curriculum.name}} -->
                                        </label>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown custom-dropdown mb-3">
                        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" @click="closeSchoolDetails()">
                            <span v-if="gradeLevelValues.length==0"><render-translation>By Grade Level</render-translation></span>
                            <span v-else>{{gradeText}}</span>
                        </button>
                        <ul class="dropdown-menu dropdown-scroll custom-scroll">
                            <li v-for="grade in gradeLevel" :key="grade.id">
                                <button class="dropdown-item d-flex align-items-center">
                                    <div class="form-check">
                                        <input type="checkbox" :value="grade.id" class="form-check-input"
                                               v-model="gradeLevelValues">
                                        <label class="form-check-label text-sm">
                                            <render-dynamic-translation
                                                :english="grade.name"
                                                :arabic="grade.name_ar"
                                            />
                                            <!-- {{grade.name}} -->
                                        </label>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" v-model="isSpecialEducationalNeeds"
                               @change="changeStatusOfSpecialNeeds()" @click="closeSchoolDetails()">
                        <label class="form-check-label text-md">
                            <render-translation>Special Educational Needs</render-translation>
                        </label>
                    </div>
                    <div class="dropdown custom-dropdown mb-3" v-if="isSpecialEducationalNeeds">
                        <button class="custom-input-sm  text-start w-100 dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" @click="closeSchoolDetails()">
                            <span v-if="specialNeedValues.length==0"><render-translation>Special Educational Needs</render-translation></span>
                            <span v-else>{{needsText}}</span>
                        </button>
                        <ul class="dropdown-menu dropdown-scroll custom-scroll">
                            <li v-for="education in specialNeeds" :key="education.id">
                                <button class="dropdown-item d-flex align-items-center">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input"
                                               :value="education.id" v-model="specialNeedValues">
                                        <label class="form-check-label text-sm">
                                            <render-dynamic-translation
                                                :english="education.name"
                                                :arabic="education.name_ar"
                                            />
                                            <!-- {{education.name}} -->
                                        </label>
                                        <p class="text-mini text-grey-400 m-0">{{education.description}}</p>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-3 mt-3 pt-1">
                        <label class="text-dark mb-2">Fees</label>
                        <vue-slider
                                ref="slider"
                                v-model.lazy="feesValue"
                                :max="100000"
                                :min="0"
                                :tooltip="'always'"
                                @click="closeSchoolDetails()"
                                :tooltip-formatter="formatter1">
                        </vue-slider>
                    </div>
                    <div class=" mt-auto">
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
                        <button class="btn btn-primary w-100" @click="getSchools()">
                            <render-translation>Find Schools</render-translation>
                        </button>
                        <button class="btn btn-outline-info border border-grey-100  mt-3 w-100"
                                @click="openAdvanceSearchBox()">
                            <render-translation>Advanced Search</render-translation>
                        </button>
                        <button class="btn btn-outline-info border border-grey-100  mt-3 w-100"
                                @click="removeFilters()" v-if="isClearButton">
                            <render-translation>Clear Filters</render-translation>
                        </button>
                    </div>
                </div>

            </div>
            <!--      &lt;!&ndash;ADVANCED SEARCH&ndash;&gt;-->
            <div class="main-sidebar-2 bg-white fixed-top border-end border-grey-100" v-if="isAdvanceSearch">
                <div class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center">
                    <a href="#" class="d-flex align-items-center">
                        <i class="material-icons text-dark d-inline" @click="isAdvanceSearch=false">arrow_back</i>
                        <span class="ms-2 text-base text-dark fw-semibold f-poppins">
                            <render-translate>Advanced Search</render-translate>
                        </span>
                    </a>
                </div>
                <div class="px-3 py-4 main-sidebar-inner custom-scroll">
                    <div class="mb-2">
                        <label class="text-dark mb-2">Teacher to Student Ratio</label>
                        <vue-slider
                                ref="slider"
                                v-model.lazy="studentValue"
                                :min="0"
                                :max="100000"
                                :tooltip="'always'"
                                :tooltip-formatter="formatter1"
                        ></vue-slider>
                    </div>

                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value=""
                               v-model="availabilitySearch">
                        <label class="form-check-label text-md">
                            <render-translate>Availability of Nursery/Preschool</render-translate>
                        </label>
                    </div>
                    <p class="text-uppercase fw-semibold text-md my-3">Recreational Facilities</p>
                    <div class="form-check mb-2" v-for="facility in recreationalFacilities" :key="facility.id">
                        <input class="form-check-input" type="checkbox" :value="facility.id"
                               v-model="facilitiesValues">
                        <label class="form-check-label text-md">
                            <render-dynamic-translation
                                :english="facility.name"
                                :arabic="facility.name_ar"
                            />
                            <!-- {{facility.name}} -->
                        </label>
                    </div>
                    <p class="text-uppercase fw-semibold text-md  my-3">Facilities for SEND Students</p>
                    <div class="form-check mb-2" v-for="assistiveEquipment in assistiveEquipments"
                         :key="assistiveEquipment.id">
                        <input class="form-check-input" type="checkbox" :value="assistiveEquipment.id"
                               v-model="assistiveValues">
                        <label class="form-check-label text-md">
                            <render-dynamic-translation
                                :english="assistiveEquipment.name"
                                :arabic="assistiveEquipment.name_ar"
                            />
                            <!-- {{assistiveEquipment.name}} -->
                        </label>
                    </div>
                </div>

            </div>
            <!--SEARCH RESULTS LOADING-->
            <div class="main-sidebar-3 bg-white fixed-top border-end border-grey-100" v-if="isLoading">
                <div class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center justify-content-between">
                    <span class="text-base text-dark fw-semibold f-poppins">
                        <render-translation>Searching for schools</render-translation>...
                    </span>
                    <button class="border-0 bg-white text-dark text-lg material-icons p-0">
                        <render-translation>close</render-translation>
                    </button>
                </div>
                <div class="px-3 py-4 main-sidebar-inner custom-scroll">
                    <img src="../../assets/images/placeholder.png" class="img-fluid mb-2" alt="Placeholder">
                    <img src="../../assets/images/placeholder.png" class="img-fluid mb-2" alt="Placeholder">
                    <img src="../../assets/images/placeholder.png" class="img-fluid mb-2" alt="Placeholder">
                    <img src="../../assets/images/placeholder.png" class="img-fluid mb-2" alt="Placeholder">
                    <img src="../../assets/images/placeholder.png" class="img-fluid mb-2" alt="Placeholder">
                    <img src="../../assets/images/placeholder.png" class="img-fluid mb-2" alt="Placeholder">
                </div>

            </div>
            <!--SEARCH RESULTS-->
            <div class="main-sidebar-3 bg-white fixed-top border-end border-grey-100" v-if="isSchools">
                <div
                        class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center justify-content-between">
                    <span class="text-base text-dark fw-semibold f-poppins">
                        <render-translation :numeric="true">{{filteredResults.length}}</render-translation> <render-translation>Schools Found</render-translation>
                    </span>
                    <button class="border-0 bg-white text-dark text-lg material-icons p-0"
                            @click="isSchools=false">
                        <render-translation>close</render-translation>
                    </button>
                </div>
                <div class="px-3 py-4 main-sidebar-inner custom-scroll">
                    <div v-for="school in filteredResults" :key="school.id" @click="getDetailsOfSchool(school)"
                         class="card border cursor-pointer mb-2 main-card-search-results main-card-hover border-grey-100 p-sm-3 p-2 rounded-2">
                        <div class="flex-row d-flex align-items-center justify-content-start">
                            <div class="icon-84 border border-grey-100 rounded-2 bg-light me-3">
                                <img src="../../assets/images/logo-placeholder.svg" class="img-fluid rounded-2"
                                     alt="image">
                            </div>
                            <div class="d-flex flex-column me-sm-3 overflow-hidden position-relative">
                                <p class="fw-semibold mb-sm-1 mb-0 f-poppins text-base lh-sm mt-md-1 text-truncate">
                                    <render-dynamic-translation
                                        :english="school.name_en"
                                        :arabic="school.name_ar"
                                    />
                                    <!-- {{school.name_en}} -->
                                </p>
                                <p class="text-sm mb-md-3 mb-0">
                                    <render-dynamic-translation
                                        :english="curriculumName(school.curriculum)"
                                        :arabic="curriculumNameArabic(school.curriculum)"
                                    />
                                    <!-- {{curriculumName(school.curriculum)}} -->
                                </p>
                                <p class="text-sm mb-lg-1 mb-0 text-grey-400 lh-sm">
                                    <render-dynamic-translation
                                        :english="school.grade_year"
                                        :arabic="school.grade_year_ar"
                                    />
                                    <!-- {{school.grade_year}} -->
                                </p>
                            </div>
                            <div class="ms-auto d-sm-block d-none">
                                <i class="material-icons text-grey-800">keyboard_arrow_right</i>
                            </div>
                        </div>
                        <div class="mt-1">
                            <ul class="list-unstyled m-0">
                                <li class="d-flex align-items-center text-grey-400 mt-2 justify-content-between text-sm"
                                    v-if="switchEnrollment">
                                    <div class="d-flex align-items-center">
                                        <i class="material-icons text-info text-xs me-2">circle</i>
                                        <span><render-translation>Enrollment</render-translation></span>
                                    </div>
                                    <div class="w-50 ps-md-4 ps-2"><render-translation :numeric="true">{{getEnrollment(school.school_enrollments)}}</render-translation>
                                        <render-translation>Students</render-translation>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center text-grey-400 mt-2 justify-content-between text-sm"
                                    v-if="switchCapacity">
                                    <div class="d-flex align-items-center">
                                        <i class="material-icons text-info text-xs me-2">circle</i>
                                        <span>Maximum Capacity</span>
                                    </div>
                                    <div class="w-50 ps-md-4 ps-2"><render-translation :numeric="true">{{getCapacity(school.school_capacities)}}</render-translation>
                                        <render-translation>Students</render-translation>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center text-grey-400 mt-2 justify-content-between text-sm"
                                    v-if="switchUtilization">
                                    <div class="d-flex align-items-center">
                                        <i class="material-icons text-info text-xs me-2">circle</i>
                                        <span><render-translation>Utilization Rate</render-translation></span>
                                    </div>
                                    <div class="w-50 ps-md-4 ps-2">
                                        <render-translation :numeric="true">{{getUtilization(school.school_capacities)}}</render-translation>%
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
            <!--      SCHOOL DETAILS-->
            <div class="main-sidebar-lg bg-transparent fixed-top" v-if="isSchoolDetails">
                <div class="main-sidebar-logo-box py-2 px-3 border-bottom border-grey-100 d-flex align-items-center justify-content-between"
                     @click="closeSchoolDetailBox()">
                    <a href="#" class="d-flex align-items-center">
                        <i class="material-icons text-dark d-inline"
                        >arrow_back</i>
                        <span class="ms-2 text-base d-xl-block d-lg-none text-dark fw-semibold f-poppins">
                            <render-translation>Back to results</render-translation>
                        </span>
                    </a>
                </div>
                <div class="px-3 py-4 main-sidebar-inner bg-white custom-scroll border-end border-grey-100">
                    <img src="../../assets/images/logo-placeholder.svg" class="main-sidebar-detail-logo">
                    <div class="row mt-3">
                        <div class="col-lg-7">
                            <p class="text-lg fw-semibold f-poppins mb-lg-4 mb-3 lh-sm">
                                <render-dynamic-translation 
                                    :english="schoolDetail.name_en"
                                    :arabic="schoolDetail.name_ar"
                                />
                                <!-- {{schoolDetail.name_en}} -->
                            </p>
                        </div>
                        <div class="col-lg-5 d-flex align-items-center mb-lg-4 mb-3 justify-content-lg-end">
                            <a v-if="schoolDetail.website" :href="schoolDetail.website" target="_blank"
                               class="text-info me-3 fw-medium text-sm d-flex align-items-center">
                                <render-translation>Visit Website</render-translation>
                                <i class="material-icons ms-1 text-base">open_in_new</i>
                            </a>
                            <a :href="schoolDetail.location" target="_blank"
                               class="text-info fw-medium  text-sm d-flex align-items-center">
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
                            v-if="schoolDetail.school_media.length==0"
                    >
                        <swiper-slide>
                            <img src="../../assets/images/image-placeholder.svg" class="img-fluid rounded-3">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../../assets/images/image-placeholder.svg" class="img-fluid rounded-3">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../../assets/images/image-placeholder.svg" class="img-fluid rounded-3">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../../assets/images/image-placeholder.svg" class="img-fluid rounded-3">
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
                        <swiper-slide v-for="media in schoolDetail.school_media" :key="media.id">
                            <img :src="media.url_path" class="img-fluid rounded-3"
                                 style="height: 160px; width: 280px;">
                        </swiper-slide>
                    </swiper>
                    <ul class="nav my-3 nav-tabs main-school-tabs" id="myTab" role="tablist">
                        <li class="nav-item pe-sm-4 pe-2" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" type="button"
                                    role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                    <render-translation>Overview</render-translation>
                            </button>
                        </li>
                        <li class="nav-item pe-sm-4 pe-2" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button"
                                    role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                    <render-translation>Enrollment & Capacity</render-translation>
                            </button>
                        </li>
                        <li class="nav-item pe-sm-4 pe-2" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#contact-tab-pane" type="button"
                                    role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                <render-translation>Facilities &Services</render-translation>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab"
                                    data-bs-target="#disabled-tab-pane" type="button"
                                    role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                <render-translation>Special Educational Needs Capacity</render-translation>
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                             aria-labelledby="home-tab" tabindex="0">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p class="text-sm">{{schoolDetail.overview}}
                                    </p>
                                </div>
                                <div class="col-lg-6">
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>CITY</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-dynamic-translation 
                                            :english="schoolDetail.city_name"
                                            :arabic="schoolDetail.city_name_ar"
                                        />
                                        <!-- {{schoolDetail.city_name}} -->
                                    </p>

                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>Municipality</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-dynamic-translation 
                                            :english="schoolDetail.area_name"
                                            :arabic="schoolDetail.area_name_ar"
                                        />
                                        <!-- {{schoolDetail.area_name}} -->
                                    </p>

                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>Average Tuition Fees (AED)</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-translation :numeric="true">47,264</render-translation>
                                    </p>

                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>Curriculum</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-dynamic-translation 
                                            :english="curriculumName(schoolDetail.curriculum)"
                                            :arabic="curriculumNameArabic(schoolDetail.curriculum)"
                                        />
                                        <!-- {{curriculumName(schoolDetail.curriculum)}} -->
                                    </p>

                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>Student Gender</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-dynamic-translation 
                                            :english="genderName(schoolDetail.gender)"
                                            :arabic="genderNameArabic(schoolDetail.gender)"
                                        />
                                        <!-- {{genderName(schoolDetail.gender)}} -->
                                    </p>

                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>
                                            affiliated with an international school/nursery or group
                                        </render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4" v-if="schoolDetail.international_affiliated==false">
                                        <render-translation>NO</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4" v-if="schoolDetail.international_affiliated">
                                        <render-translation>YES</render-translation>
                                    </p>
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Total Teachers</p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-translation :numeric="true">{{schoolDetail.school_staff.total}}</render-translation>
                                    </p>
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Number Of Senior
                                        <render-translation>Administrators</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-translation :numeric="true">{{schoolDetail.school_staff.total_admin}}</render-translation>
                                    </p>
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Land Size (SQM)</p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-translation :numeric="true">{{schoolDetail.area}}</render-translation>
                                    </p>
                                </div>
                            </div>
                            ...
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                             tabindex="0">
                            <div class="row">
                                <div class="col-lg-6" v-for="(enrollment,index) in schoolDetail.school_enrollments"
                                     :key="index">
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>TOTAL number of students</render-translation> <render-translation :numeric="true">{{getYear(enrollment.academic_year_id)}}</render-translation></p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-translation :numeric="true">{{enrollment.total}}</render-translation>
                                    </p>
                                </div>
                                <div class="col-lg-6">
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>Open seats</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4">
                                        <render-translation :numeric="true">293</render-translation>
                                    </p>
                                </div>
                                <div class="col-lg-6">
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>Maximum enrollment capactiy</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4"
                                       v-if="schoolCapacities.maximum_capacity>0 && schoolCapacities.maximum_capacity!=null">
                                       <render-translation :numeric="true">{{schoolCapacities.maximum_capacity}}</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4" v-else>
                                        <render-translation>No data</render-translation>
                                    </p>
                                </div>
                                <div class="col-lg-6">
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>Utilization rate</render-translation>
                                    </p>
                                    <p class="text-sm lh-sm mb-4"
                                       v-if="schoolCapacities.utilization_rate>0 && schoolCapacities.utilization_rate!=null">
                                       <render-translation :numeric="true">{{(schoolCapacities.utilization_rate)}}</render-translation>%
                                    </p>
                                    <p class="text-sm lh-sm mb-4" v-else><render-translation>No data</render-translation></p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                             tabindex="0">
                            <p class="fw-bold f-poppins">
                                <render-translation>Facilities</render-translation>
                            </p>
                            <ul class="list-unstyled m-0 col-xl-10">
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">menu_book</i>
                                        <render-translation>Classrooms</render-translation>
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_classrooms>0 && schoolDetail.school_facilities.number_classrooms!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_classrooms}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">book</i>
                                        <render-translation>Libraries</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_libraries>0 && schoolDetail.school_facilities.number_libraries!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_libraries}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">computer</i>
                                        <render-translation>Computer Labs</render-translation>
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_computer_labs>0 && schoolDetail.school_facilities.number_computer_labs!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_computer_labs}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">science</i>
                                        <render-translation>Science Labs</render-translation>
                                    </div>
                                    <div class="col-5  px-0 text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_science_labs>0 && schoolDetail.school_facilities.number_science_labs!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_science_labs}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">water</i>
                                        <render-translation>Swimming pools</render-translation>
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_swimming_pools>0 && schoolDetail.school_facilities.number_swimming_pools!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_swimming_pools}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">sports_gymnastics</i>
                                        <render-translation>Gyms</render-translation>
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_gyms>0 && schoolDetail.school_facilities.number_gyms!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_gyms}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">sports_kabaddi</i>
                                        <render-translation>Playgrounds</render-translation>
                                    </div>
                                    <div class="col-5 px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_playgrounds>0 && schoolDetail.school_facilities.number_playgrounds!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_playgrounds}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">house_siding</i>
                                        <render-translation>Air conditioned playing Courts</render-translation>
                                    </div>
                                    <div class="col-5 px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_air_conditioned_courts>0 && schoolDetail.school_facilities.number_air_conditioned_courts!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_air_conditioned_courts}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">golf_course</i>
                                        <render-translation>Open air playing Courts</render-translation>
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_open_air_courts>0 && schoolDetail.school_facilities.number_open_air_courts!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_open_air_courts}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation>
                                    </div>
                                </li>
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
                                    <div class="col-7 px-0 d-flex  align-items-center">
                                        <i class="material-icons me-2 text-info text-lg">food_bank</i>
                                        <render-translation>Cafeterias/Lunch Areas</render-translation>
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium"
                                         v-if="schoolDetail.school_facilities.number_cafeterias>0 && schoolDetail.school_facilities.number_cafeterias!=null">
                                         <render-translation :numeric="true">{{schoolDetail.school_facilities.number_cafeterias}}</render-translation> <render-translation>Units</render-translation> 
                                    </div>
                                    <div class="col-5  px-0  text-grey-400 text-md fw-medium" v-else>
                                        <render-translation :numeric="true">0</render-translation> <render-translation>Units</render-translation>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                             tabindex="0">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">
                                        <render-translation>equipped for SEND students</render-translation></p>
                                    <p class="text-sm lh-sm mb-4" v-if="!schoolDetail.send_student_equipped">
                                        <render-translation>No</render-translation></p>
                                    <p class="text-sm lh-sm mb-4" v-else><render-translation>Yes</render-translation></p>
                                </div>
                            </div>
                            <p class="fw-bold f-poppins my-3">
                                <render-translation>Assistive Equipment and Facilities Provided</render-translation>
                            </p>
                            <ul class="list-unstyled m-0 col-xl-10">
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100"
                                    v-for="equipment in assisstiveEquipmentNames(schoolDetail.assistive_equipments)"
                                    :key="equipment.id"
                                >
                                    <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
                                    <render-dynamic-translation 
                                        :english="equipment.name"
                                        :arabic="equipment.name_ar"
                                    />
                                    <!-- {{equipment.name}} -->
                                </li>
                            </ul>
                            <ul class="list-unstyled m-0 col-xl-10" v-if="noneAssistive">
                                <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-grey-100">
                                    <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
                                    <render-translation>None</render-translation>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <!--forecasts-->
            <div class="offcanvas offcanvas-forecasts min-vh-100 overflow-auto offcanvas-start bg-white" tabindex="-1"
                 id="offcanvasExample2"
                 aria-labelledby="offcanvasExample2Label">
                <div class="bg-white">
                    <div class="main-sidebar-logo-box w-100 py-2 px-3 border-bottom border-grey-100 d-flex align-items-center">
                        <a href="#" class="d-block main-sidebar-logo-box-img">
                            <img src="../../assets/images/Logo.png" class="img-fluid" alt="Logo">
                        </a>
                        <a href="#" class="d-flex align-items-center ms-auto" data-bs-dismiss="offcanvas"
                           data-bs-target="#offcanvasExample2" aria-label="Close">
                            <i class="material-icons text-dark d-inline">close</i>
                        </a>
                    </div>
                    <div class="px-md-4 py-5">
                        <div class="container-fluid" id="chart-container">
                            <h5 class="text-center mb-4  fw-bold pb-2">
                                <render-translation>Private Schools Demand Forecast 2022-2026</render-translation>
                            </h5>
                            <div class="row">
                                <div class="col-md-4 px-md-4">
                                    <div class="px-md-3 mb-5 border-grey-100 border-end border-start">
                                        <p class="text-sm text-grey-400 text-center mb-4">
                                            <render-translation>Demand - Scenario A</render-translation>
                                        </p>
                                        <div id="chartdiv-one" class="mx-auto"></div>
                                    </div>
                                    <table class="table w-100 table-bordered border-grey-100 mb-5">
                                        <thead>
                                        <tr class="bg-light">
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Year</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Additional
                                                Students</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Students Above
                                                Capacity</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Schools Needed</render-translation>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2022</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">10,753</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle"> -
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle"> -</td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2023</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">11,792</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">7,847</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">5</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2024</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">9,460</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">9,460</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">6</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2025</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">7,054</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">7,054</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">5</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2026</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">4,438</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">4,438</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">3</render-translation>
                                            </td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th class="text-info text-center fw-bold  text-sm align-middle"><render-translation>Total</render-translation></th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">45,794</render-translation>
                                            </th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">31,096</render-translation>
                                            </th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">19</render-translation>
                                            </th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="col-md-4 px-md-4">
                                    <div class="px-md-3 mb-5 border-grey-100 border-end border-start">
                                        <p class="text-sm text-grey-400 text-center mb-4"><render-translation>Demand - Scenario B</render-translation></p>
                                        <div id="chartdiv-two" class="mx-auto"></div>
                                    </div>
                                    <table class="table w-100 table-bordered border-grey-100 mb-5">
                                        <thead>
                                        <tr class="bg-light">
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Year</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Additional
                                                Students</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Students Above
                                                Capacity</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Schools Needed</render-translation>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2022</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">11,614</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle"> -
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle"> -</td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2023</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">12,735</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">9,651</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">6</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2024</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">10,217</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">10,217</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">7</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2025</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">7,618</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">7,618</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">5</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2026</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">4,793</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">4,793</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">3</render-translation>
                                            </td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th class="text-info text-center fw-bold  text-sm align-middle">
                                                <render-translation :numeric="true">Total</render-translation>
                                            </th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">46,977</render-translation>
                                            </th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">32,279</render-translation>
                                            </th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">21</render-translation>
                                            </th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="col-md-4 px-md-4">
                                    <div class="px-md-3 mb-5 border-grey-100 border-end border-start">
                                        <p class="text-sm text-grey-400 text-center mb-4">
                                            <render-translation>Demand - Scenario C</render-translation>
                                        </p>
                                        <div id="chartdiv-three" class="mb-4 mx-auto"></div>
                                    </div>
                                    <table class="table w-100 table-bordered border-grey-100 mb-5">
                                        <thead>
                                        <tr class="bg-light">
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Year</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Additional
                                                Students</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Students Above
                                                Capacity</render-translation>
                                            </th>
                                            <th class="text-grey-800 text-center align-middle fw-medium text-sm bg-light">
                                                <render-translation>Schools Needed</render-translation>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle"><render-translation :numeric="true">2022</render-translation></td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">12,474</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle"> -
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle"> -</td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2023</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">13,678</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">11,454</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">8</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2024</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">10,974</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">10,974</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">7</td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2025</render-translation></td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">8,183</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">8,183</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">6</render-translation>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-info text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">2026</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">5,148</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">5,148</render-translation>
                                            </td>
                                            <td class="text-grey-400 text-center fw-medium text-sm align-middle">
                                                <render-translation :numeric="true">3</render-translation>
                                            </td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th class="text-info text-center fw-bold  text-sm align-middle">
                                                <render-translation>Total</render-translation></th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">50,457</render-translation>
                                            </th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">35,759</render-translation>
                                            </th>
                                            <th class="text-grey-400 text-center fw-bold text-sm align-middle">
                                                <render-translation :numeric="true">24</render-translation></th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-content vh-100 position-relative">
            <nav class="main-navbar navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand d-lg-none" href="#">
                        <img src="../../assets/images/Logo.png" class="img-fluid" alt="Logo">
                    </a>
                    <button class="navbar-toggler border-0 p-0 ms-auto d-lg-none"
                            type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"
                            aria-controls="offcanvasResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <div class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
                            <div class="form-check form-switch pe-4" v-if="!isSchoolDetails">
                                <input class="form-check-input" type="checkbox"
                                       @click="switchEnrollment = !switchEnrollment">
                                <label class="form-check-label text-sm text-grey400">
                                    <render-translation>Enrollment</render-translation>
                                </label>
                            </div>
                            <div class="form-check form-switch pe-4" v-if="!isSchoolDetails">
                                <input class="form-check-input" type="checkbox"
                                       @click="switchCapacity = !switchCapacity">
                                <label class="form-check-label text-sm text-grey400">
                                    <render-translation>Capacity</render-translation>
                                </label>
                            </div>

                            <div class="form-check form-switch  pe-4" v-if="!isSchoolDetails">
                                <input class="form-check-input" type="checkbox"
                                       @click="switchUtilization = !switchUtilization">
                                <label class="form-check-label text-sm text-grey400">
                                    <render-translation>Utilization rate</render-translation>
                                </label>
                            </div>
                            <button class="btn border-grey-100 border btn-outline-primary d-flex align-items-center px-3 fw-semibold"
                                    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2"
                                    aria-controls="offcanvasExample2">
                                <i class="material-icons me-2 text-primary text-lg">trending_up</i>
                                <render-translation>Forecasts</render-translation>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <!--CARDS-->
            <div class="position-absolute card-investors-wrapper" style="z-index:9999">
                <div class="card-investors-insights w-100 d-flex mt-2 justify-content-between bg-white p-3"
                     v-if="switchEnrollment && !isSchoolDetails">
                    <div class="me-2">
                        <h6 class="f-poppins text-sm mb-1"><render-translation>Total Enrollment</render-translation></h6>
                        <p class="text-lg f-poppins fw-semibold mb-2">
                            <render-translation :numeric="true">{{getValuesInFormat(totalAppData.total_enrollments)}}</render-translation>
                        </p>
                        <p class="text-md ms-2 m-0 text-purple"><render-translation>Students</render-translation></p>
                    </div>
                    <img src="../../assets/images/enrollment.png" class="img-fluid ms-auto card-investors-insights-icon"
                         alt="Enrollment">
                </div>


                <div class="card-investors-insights w-100 d-flex mt-2 justify-content-between bg-white p-3"
                     v-if="switchCapacity && !isSchoolDetails">
                    <div class="me-2">
                        <h6 class="f-poppins text-sm mb-1"><render-translation>Total Capacity</render-translation></h6>
                        <p class="text-lg f-poppins fw-semibold mb-2">
                            <render-translation :numeric="true">{{getValuesInFormat(totalAppData.total_capacities)}}</render-translation>
                            <!-- {{getValuesInFormat(totalAppData.total_capacities)}} -->
                        </p>
                        <p class="text-md ms-2 m-0 text-purple"><render-translation>Students</render-translation></p>
                    </div>
                    <img src="../../assets/images/capacity.png" class="img-fluid ms-auto card-investors-insights-icon"
                         alt="Land">
                </div>

                <div class="card-investors-insights w-100 d-flex mt-2 justify-content-between bg-white p-3"
                     v-if="switchUtilization && !isSchoolDetails">
                    <div class="me-2">
                        <h6 class="f-poppins text-sm mb-1">Utilization Rate</h6>
                        
                        <p class="text-lg f-poppins fw-semibold mb-2">
                            <render-translation :numeric="true">{{getValuesInFormat(totalAppData.total_capacities)}}</render-translation>%
                        </p>
                        <div class="d-flex align-items-center" v-if="totalAppData.compare_rate !=null">
                            <img src="../../assets/images/arrow-up.png" class="img-fluid" alt="Enrollment"
                                 v-if="totalAppData.compare_rate>0">
                            <img src="../../assets/images/arrow-down.png" class="img-fluid" alt="Enrollment"
                                 v-if="totalAppData.compare_rate<0">
                            <span class="text-sm text-danger ms-1" v-if="totalAppData.compare_rate<0">
                                <render-translation :numeric="true">
                                    {{totalAppData.compare_rate}}
                                </render-translation>
                                </span>
                            <span class="text-sm text-success ms-1" v-if="totalAppData.compare_rate>0">
                                <render-translation :numeric="true">
                                    {{totalAppData.compare_rate}}
                                </render-translation>
                                
                            </span>
                            <span class="text-mini ms-2 text-uppercase text-grey-800">
                                <render-translation>
                                    vs prev. year
                                </render-translation>
                            </span>
                        </div>
                    </div>
                    <img src="../../assets/images/student.png" class="img-fluid ms-auto card-investors-insights-icon"
                         alt="Student/Teacher">
                </div>

            </div>

            <!--MAP-->
            <GoogleMap api-key="AIzaSyB5p9rRsJ-TRP_vYzNhFA_xmfwbdb1360Y" style="width: 100%; height:100vh"
                       :center="{ lat: lat, lng: lng }" :zoom="13" :styles="snazzy">
                 <span v-for="(school,index) in filteredResults" :key="index">
                    <CustomMarker
                            :options="{ position:{ lat: parseFloat(school.latitude), lng: parseFloat(school.longitude) }, anchorPoint: 'BOTTOM_CENTER' }"
                            @click="()=>{ schoolIdInfoBox=school.id; isShowInfoWindow=true}">
                              <div style="text-align: center">
                                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none"
                                       v-if="schoolIdInfoBox!==school.id"
                                       xmlns="http://www.w3.org/2000/svg"><path
                                          d="M7 0C3.13 0 0 3.13 0 7C0 8.74 0.5 10.37 1.41 11.84C2.36 13.38 3.61 14.7 4.57 16.24C5.04 16.99 5.38 17.69 5.74 18.5C6 19.05 6.21 20 7 20C7.79 20 8 19.05 8.25 18.5C8.62 17.69 8.95 16.99 9.42 16.24C10.38 14.71 11.63 13.39 12.58 11.84C13.5 10.37 14 8.74 14 7C14 3.13 10.87 0 7 0ZM7 9.75C5.62 9.75 4.5 8.63 4.5 7.25C4.5 5.87 5.62 4.75 7 4.75C8.38 4.75 9.5 5.87 9.5 7.25C9.5 8.63 8.38 9.75 7 9.75Z"
                                          fill="#324597"/></svg>

                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       v-if="isShowInfoWindow && schoolIdInfoBox==school.id"
                                       xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z"
                                              fill="#E92C2C"/>
                                  </svg>
                              </div>
                            <InfoWindow v-if="isShowInfoWindow && schoolIdInfoBox==school.id">
                                    <div class="position-absolute p-3">
                                        <div class="card-shadow bg-white card-map">
                                            <div class="border-grey-100  p-3 border-top ">
                                                <h6 class="text-dark f-poppins fw-medium" @click="getDetailsOfSchool(school)">
                                                    <render-dynamic-translation 
                                                        :english="school.name_en"
                                                        :arabic="school.name_ar"
                                                    />
                                                    <!-- {{school.name_en}} -->
                                                </h6>
                                                <p class="text-grey-800 m-0 text-uppercase text-mini">
                                                    <render-dynamic-translation 
                                                        :english="school.city_name"
                                                        :arabic="school.city_name_ar"
                                                    />
                                                    <!-- {{school.city_name}} -->
                                                </p>
                                              </div>
                                              <div class="card-logo p-3">
                                                <img src="../../assets/images/logo-placeholder.svg" class="img-fluid"
                                                     alt="Logo">
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
    import axios from 'axios'
    import {Swiper, SwiperSlide} from "swiper/vue";
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    // import required modules
    import {Navigation} from "swiper";
    import {CustomMarker, GoogleMap} from "vue3-google-map";
    import { ToggleButton } from "vue-js-toggle-button";
    import {snazzy} from "../../themes/snazzyMap";
    import VueSlider from 'vue-slider-component'
    import renderTranslation from "@/utils/renderTranslation.js";
    import RenderTranslation from "@/components/RenderTranslation.vue";
    import RenderDynamicTranslation from "../RenderDynamicTranslation.vue";
    import 'vue-slider-component/theme/default.css'
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";

    export default {
        components: {
            Swiper,
            SwiperSlide,
            GoogleMap, 
            CustomMarker, 
            VueSlider,
            ToggleButton,
            RenderTranslation,
            RenderDynamicTranslation
        },
        setup() {
            return {
                modules: [Navigation], snazzy
            };
        },
        data: function () {
            return {
                areas: [],
                lat: null,
                lng: null,
                curriculums: [],
                gradeLevel: [],
                specialNeeds: [],
                searchValue: '',
                schools: [],
                gender: '',
                switchEnrollment: false,
                switchUtilization: false,
                schoolDetail: '',
                lastItems: [],
                switchCapacity: false,
                isLoading: false,
                isSchools: false,
                isAdvanceSearch: false,
                isSpecialEducationalNeeds: false,
                assistiveEquipments: [],
                areaValues: [],
                genderValues: [],
                assistiveValues: [],
                specialNeedValues: [],
                curriculumsValues: [],
                gradeLevelValues: [],
                isSchoolDetails: false,
                facilitiesValues: [],
                studentFacilities: [],
                feesValue: [0, 90000],
                studentValue: [0, 90000],
                dotOptions: [{
                    tooltip: 'always'
                }, {
                    tooltip: 'none'
                }, {
                    tooltip: 'always'
                }],
                totalAppData: [],
                availabilitySearch: false,
                recreationalFacilities: [],
                accreditationsData: [],
                sportsFitnessData: [],
                acadamicData: [],
                accreditationsItems: [],
                sportsFitnessItems: [],
                acadamicItems: [],
                specialEducationalItems: [],
                schoolCapacities: [],
                schoolEnrollments: [],
                schoolSpecialCapacity: [],
                eduResourceItems: [],
                educationalResource: [],
                supportItems: [],
                equipmentItems: [],
                academicYearsItems: [],
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
                creativeActivityData: [],
                creativeItems: [],
                noneSports: null,
                noneAcademic: null,
                isClearButton: false,
                areaText: 'By Area',
                genderText: 'By Gender',
                curriculumText: 'By Curriculum',
                gradeText: 'By Grade Level',
                needsText: 'Special Educational Needs',
                genders: []
            }
        },
        mounted() {

            // create chart
            let chart_one = am4core.create("chartdiv-one", am4charts.XYChart);

            chart_one.colors.list = [
                am4core.color("#3CB4E5"),
                am4core.color("#F0806F"),
                am4core.color("#969696"),
                am4core.color("#FAC56B"),
                am4core.color("#324597"),
            ];

            chart_one.data = [{
                "country": "2022",
                "visits": 127,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2023",
                "visits": 132,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2024",
                "visits": 138,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2025",
                "visits": 143,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2026",
                "visits": 146,
                "color": am4core.color("#8F2D56")
            }];

            chart_one.padding(0, 0, 0, 0);
            chart_one.margin(0, 0, 0, 0);
            chart_one.logo.disabled = true;

            let categoryAxis_one = chart_one.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis_one.renderer.grid.template.location = 0;
            categoryAxis_one.dataFields.category = "country";
            categoryAxis_one.renderer.minGridDistance = 60;
            categoryAxis_one.renderer.inversed = false;
            categoryAxis_one.renderer.grid.template.disabled = true;


            let valueAxis_one = chart_one.yAxes.push(new am4charts.ValueAxis());
            valueAxis_one.min = 0;
            valueAxis_one.extraMax = 0.1;
            valueAxis_one.labelsEnabled = false;
            valueAxis_one.renderer.grid.template.strokeWidth = 0;

//valueAxis.rangeChangeEasing = am4core.ease.linear;
//valueAxis.rangeChangeDuration = 1500;


            let series_one = chart_one.series.push(new am4charts.ColumnSeries());
            series_one.dataFields.categoryX = "country";
            series_one.dataFields.valueY = "visits";
            series_one.tooltipText = "{valueY.value}"
            series_one.columns.template.strokeOpacity = 0;
            series_one.columns.template.column.cornerRadiusTopRight = 3;
            series_one.columns.template.column.cornerRadiusTopLeft = 3;
            series_one.columns.template.strokeWidth = 0;
            series_one.columns.template.width = am4core.percent(100);
            series_one.columns.template.stroke = 0;
            series_one.yAxis.hide();
//series.interpolationDuration = 1500;
//series.interpolationEasing = am4core.ease.linear;
            let labelBullet_one = series_one.bullets.push(new am4charts.LabelBullet());
            labelBullet_one.label.verticalCenter = "bottom";
            labelBullet_one.label.dy = -10;
            labelBullet_one.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

            chart_one.zoomOutButton.disabled = true;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
            series_one.columns.template.adapter.add("fill", function (fill, target) {
                return chart_one.colors.getIndex(target.dataItem.index);
            });

            // create chart
            let chart_two = am4core.create("chartdiv-two", am4charts.XYChart);
            chart_two.colors.list = [
                am4core.color("#3CB4E5"),
                am4core.color("#F0806F"),
                am4core.color("#969696"),
                am4core.color("#FAC56B"),
                am4core.color("#324597"),
            ];

            chart_two.data = [{
                "country": "2022",
                "visits": 127,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2023",
                "visits": 133,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2024",
                "visits": 140,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2025",
                "visits": 146,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2026",
                "visits": 148,
                "color": am4core.color("#8F2D56")
            }];

            chart_two.padding(0, 0, 0, 0);
            chart_two.margin(0, 0, 0, 0);
            chart_two.logo.disabled = true;
            let categoryAxis_two = chart_two.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis_two.renderer.grid.template.location = 0;
            categoryAxis_two.dataFields.category = "country";
            categoryAxis_two.renderer.minGridDistance = 60;
            categoryAxis_two.renderer.inversed = false;
            categoryAxis_two.renderer.grid.template.disabled = true;


            let valueAxis_two = chart_two.yAxes.push(new am4charts.ValueAxis());
            valueAxis_two.min = 0;
            valueAxis_two.extraMax = 0.1;
            valueAxis_two.labelsEnabled = false;
            valueAxis_two.renderer.grid.template.strokeWidth = 0;
//valueAxis.rangeChangeEasing = am4core.ease.linear;
//valueAxis.rangeChangeDuration = 1500;

            let series_two = chart_two.series.push(new am4charts.ColumnSeries());
            series_two.dataFields.categoryX = "country";
            series_two.dataFields.valueY = "visits";
            series_two.tooltipText = "{valueY.value}"
            series_two.columns.template.strokeOpacity = 0;
            series_two.columns.template.column.cornerRadiusTopRight = 3;
            series_two.columns.template.column.cornerRadiusTopLeft = 3;
            series_two.columns.template.strokeWidth = 0;
            series_two.columns.template.width = am4core.percent(100);
            series_two.columns.template.stroke = 0;
            series_two.yAxis.hide();
//series.interpolationDuration = 1500;
//series.interpolationEasing = am4core.ease.linear;
            let labelBullet_two = series_two.bullets.push(new am4charts.LabelBullet());
            labelBullet_two.label.verticalCenter = "bottom";
            labelBullet_two.label.dy = -10;
            labelBullet_two.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

            chart_two.zoomOutButton.disabled = true;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
            series_two.columns.template.adapter.add("fill", function (fill, target) {
                return chart_two.colors.getIndex(target.dataItem.index);
            });
            // create chart
            let chart_three = am4core.create("chartdiv-three", am4charts.XYChart);
            chart_three.colors.list = [
                am4core.color("#3CB4E5"),
                am4core.color("#F0806F"),
                am4core.color("#969696"),
                am4core.color("#FAC56B"),
                am4core.color("#324597"),
            ];

            chart_three.data = [{
                "country": "2022",
                "visits": 127,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2023",
                "visits": 133,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2024",
                "visits": 140,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2025",
                "visits": 146,
                "color": am4core.color("#8F2D56")
            }, {
                "country": "2026",
                "visits": 148,
                "color": am4core.color("#8F2D56")
            }];

            chart_three.padding(0, 0, 0, 0);
            chart_three.margin(0, 0, 0, 0);
            chart_three.logo.disabled = true;
            let categoryAxis_three = chart_three.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis_three.renderer.grid.template.location = 0;
            categoryAxis_three.dataFields.category = "country";
            categoryAxis_three.renderer.minGridDistance = 60;
            categoryAxis_three.renderer.inversed = false;
            categoryAxis_three.renderer.grid.template.disabled = true;


            let valueAxis_three = chart_three.yAxes.push(new am4charts.ValueAxis());
            valueAxis_three.min = 0;
            valueAxis_three.extraMax = 0.1;
            valueAxis_three.labelsEnabled = false;
            valueAxis_three.renderer.grid.template.strokeWidth = 0;
//valueAxis.rangeChangeEasing = am4core.ease.linear;
//valueAxis.rangeChangeDuration = 1500;

            let series_three = chart_three.series.push(new am4charts.ColumnSeries());
            series_three.dataFields.categoryX = "country";
            series_three.dataFields.valueY = "visits";
            series_three.tooltipText = "{valueY.value}"
            series_three.columns.template.strokeOpacity = 0;
            series_three.columns.template.column.cornerRadiusTopRight = 3;
            series_three.columns.template.column.cornerRadiusTopLeft = 3;
            series_three.columns.template.strokeWidth = 0;
            series_three.columns.template.width = am4core.percent(100);
            series_three.columns.template.stroke = 0;
            series_three.yAxis.hide();
//series.interpolationDuration = 1500;
//series.interpolationEasing = am4core.ease.linear;
            let labelBullet_three = series_three.bullets.push(new am4charts.LabelBullet());
            labelBullet_three.label.verticalCenter = "bottom";
            labelBullet_three.label.dy = -10;
            labelBullet_three.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

            chart_three.zoomOutButton.disabled = true;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
            series_three.columns.template.adapter.add("fill", function (fill, target) {
                return chart_three.colors.getIndex(target.dataItem.index);
            });
        },
        beforeDestroy() {
            if (this.chart) {
                this.chart.dispose();
            }
        },
        created() {
            this.getData();
            this.appData();
            axios.get(process.env.VUE_APP_BASE_URL + `/schools`)
                .then(response => {
                    this.schools = response.data.data.schools;
                })
                .catch(error => {
                    console.error(error)
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
                if (_self.searchValue == '' && _self.genderValues.length == 0 && _self.gradeLevelValues.length == 0 && _self.facilitiesValues.length == 0 && _self.availabilitySearch == false && (_self.studentValue[0] == 0 && _self.studentValue[1] == 90000) && (_self.feesValue[0] == 0 && _self.feesValue[1] == 90000) && _self.assistiveValues.length == 0 && _self.specialNeedValues.length == 0 && _self.curriculumsValues.length == 0 && _self.areaValues.length == 0) {
                    _self.isClearButton = false;
                } else {
                    _self.isClearButton = true;
                }
                // Process search input
                if (_self.searchValue != '' && _self.searchValue) {
                    items = items.filter((item) => {
                        return item.name_en
                            .toUpperCase()
                            .includes(_self.searchValue.toUpperCase())
                    })
                }
                if (_self.areaValues.length !== 0) {
                    _self.areas.forEach(item => {
                        if (item.id == _self.areaValues[0]) {
                            if (this.$store.state.isTranslated) {
                                _self.areaText = item.name_ar + ' ...';
                            } else {
                                _self.areaText = item.name + ' ...';
                            }
                            
                        }
                    });
                    _self.lastItems = [];
                    _self.areaValues.forEach((searchValue) => {
                        items.forEach(item => {
                            if (item.city == searchValue) {
                                _self.lastItems.push(item);
                            }
                        });
                    });
                    items = _self.lastItems;
                }
                if (_self.genderValues.length !== 0) {
                    _self.genders.forEach(item => {
                        if (item.id == _self.genderValues[0]) {
                            if (this.$store.state.isTranslated) {
                                _self.genderText = item.name_ar + ' ...';
                            } else {
                                _self.genderText = item.name_en + ' ...';
                            }
                            
                        }
                    });
                    _self.lastItems = [];
                    _self.genderValues.forEach((searchValue) => {
                        items.forEach(item => {
                            if (item.gender == searchValue) {
                                _self.lastItems.push(item);
                            }
                        });
                    });
                    items = _self.lastItems;
                }
                if (_self.curriculumsValues.length !== 0) {
                    _self.curriculums.forEach(item => {
                        if (item.id == _self.curriculumsValues[0]) {
                            if (this.$store.state.isTranslated) {
                                _self.curriculumText = item.name_ar + ' ...';
                            } else {
                                _self.curriculumText = item.name + ' ...';
                            }
                            
                        }
                    });
                    _self.lastItems = [];
                    _self.curriculumsValues.forEach((searchValue) => {
                        items.forEach(item => {
                            if (item.curriculum == searchValue) {
                                _self.lastItems.push(item);
                            }
                        });
                    });
                    items = _self.lastItems;
                }
                if (_self.gradeLevelValues.length !== 0) {
                    _self.gradeLevel.forEach(item => {
                        if (item.id == _self.gradeLevelValues[0]) {
                            if (this.$store.state.isTranslated) {
                                _self.gradeText = item.name_ar + ' ...';
                            } else {
                                _self.gradeText = item.name + ' ...';
                            }
                            
                        }
                    });
                    _self.lastItems = [];
                    _self.gradeLevelValues.forEach((searchValue) => {
                        items.forEach(item => {
                            item.grade_ids.forEach((grade) => {
                                if (grade == searchValue) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            })
                        });
                    });
                    items = _self.lastItems;
                }
                if (_self.specialNeedValues.length !== 0) {
                    _self.specialNeeds.forEach(item => {
                        if (item.id == _self.specialNeedValues[0]) {
                            if (this.$store.state.isTranslated) {
                                _self.needsText = item.name_ar.substring(0, 25) + ' ...';
                            } else {
                                _self.needsText = item.name.substring(0, 25) + ' ...';
                            }
                            
                        }
                    });
                    _self.lastItems = [];
                    _self.specialNeedValues.forEach((searchValue) => {
                        items.forEach(item => {
                            item.special_educational_needs.forEach((education) => {
                                if (education == searchValue) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            })
                        });
                    });
                    items = _self.lastItems;
                }
                if (_self.assistiveValues.length !== 0) {
                    _self.lastItems = [];
                    _self.assistiveValues.forEach((searchValue) => {
                        items.forEach(item => {
                            item.assistive_equipments.forEach((education) => {
                                if (education == searchValue) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            })
                        });
                    });
                    items = _self.lastItems;
                }
                if (_self.feesValue.length !== 0) {
                    _self.lastItems = [];
                    items.forEach(item => {
                        if (item.tution_fees >= _self.feesValue[0] && item.tution_fees <= _self.feesValue[1]) {
                            _self.lastItems.push(item);
                        }
                    });
                    items = _self.lastItems;
                }
                if (_self.studentValue.length !== 0) {
                    _self.lastItems = [];
                    items.forEach(item => {
                        if (item.school_staff.student_teacher_ratio >= _self.studentValue[0] && item.school_staff.student_teacher_ratio <= _self.studentValue[1]) {
                            _self.lastItems.push(item);
                        }
                    });
                    items = _self.lastItems;
                }
                if (_self.availabilitySearch) {
                    _self.lastItems = [];
                    items.forEach(item => {
                        if (item.school_enrollments.nursery_pre_reception != null && item.school_enrollments.nursery_pre_reception > 0) {
                            _self.lastItems.push(item);
                        }
                    });
                    items = _self.lastItems;
                }
                if (_self.facilitiesValues.length !== 0) {
                    _self.lastItems = [];
                    items.forEach(item => {
                        _self.facilitiesValues.forEach((searchValue) => {
                            if (searchValue == 1) {
                                if (item.school_facilities.number_classrooms != null && item.school_facilities.number_classrooms > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 2) {
                                if (item.school_facilities.number_libraries != null && item.school_facilities.number_libraries > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 3) {
                                if (item.school_facilities.number_computer_labs != null && item.school_facilities.number_computer_labs > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 4) {
                                if (item.school_facilities.number_science_labs != null && item.school_facilities.number_science_labs > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 5) {
                                if (item.school_facilities.number_swimming_pools != null && item.school_facilities.number_swimming_pools > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 6) {
                                if (item.school_facilities.number_gyms != null && item.school_facilities.number_gyms > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 7) {
                                if (item.school_facilities.number_playgrounds != null && item.school_facilities.number_playgrounds > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 8) {
                                if (item.school_facilities.number_air_conditioned_courts != null && item.school_facilities.number_air_conditioned_courts > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 9) {
                                if (item.school_facilities.number_open_air_courts != null && item.school_facilities.number_open_air_courts > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }
                            if (searchValue == 10) {
                                if (item.school_facilities.number_cafeterias != null && item.school_facilities.number_cafeterias > 0) {
                                    if (!_self.lastItems.find(lastItem => lastItem.id == item.id)) {
                                        _self.lastItems.push(item);
                                    }
                                }
                            }

                        });
                    });
                    items = _self.lastItems;
                }
                return items
            },
        },
        methods: {
            renderTranslation,
            async getData() {
                let _self = this;
                await axios.get(process.env.VUE_APP_BASE_URL + `/data`)
                    .then(response => {
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
                        _self.educationalResource = response.data.data.special_educational_resources;
                        _self.serviceSupportData = response.data.data.support_services;
                        _self.academicYearsItems = response.data.data.academic_years;
                    })
                    .catch(error => {
                        console.error(error)
                    });
            },
            async appData() {
                let _self = this;
                await axios.get(process.env.VUE_APP_BASE_URL + `/schools/data`)
                    .then(response => {
                        _self.totalAppData = response.data.data;
                    })
                    .catch(error => {
                        console.error(error)
                    });
            },
            changeStatusOfSpecialNeeds() {
                let _self = this;
                if (_self.isSpecialEducationalNeeds == true) {
                    _self.isSpecialEducationalNeeds == false
                } else {
                    _self.isSpecialEducationalNeeds == true
                }
            },
            getSchools() {
                let _self = this;
                _self.isLoading = false;
                _self.isAdvanceSearch = false;
                _self.isSchoolDetails = false;
                _self.isSchools = true;
            },
            getDetailsOfSchool(school) {
                let _self = this;
                _self.schoolDetail = school;
                _self.schoolDetail.school_capacities.forEach(capacity => {
                    if (capacity.current_year == true) {
                        _self.schoolCapacities = capacity;
                    }
                });
                _self.schoolDetail.school_enrollments.forEach(enrollment => {
                    if (enrollment.current_year == true) {
                        _self.schoolEnrollments = enrollment;
                    }
                });
                _self.schoolDetail.school_send_capacities.forEach(schl_capacity => {
                    if (schl_capacity.current_year == true) {
                        _self.schoolSpecialCapacity = schl_capacity;
                    }
                });
                _self.schoolIdInfoBox = school.id;
                _self.isShowInfoWindow = true;
                _self.isLoading = false;
                _self.switchEnrollment = false;
                _self.switchCapacity = false;
                _self.switchUtilization = false;
                _self.isAdvanceSearch = false;
                _self.isSchools = false;
                _self.isSchoolDetails = true;
            },
            curriculumName(id) {
                let item = null;
                this.curriculums.forEach(curri => {
                    if (curri.id == id) {
                        item = curri;
                    }
                });
                return item.name;
            },
            curriculumNameArabic(id) {
                let item = null;
                this.curriculums.forEach(curri => {
                    if (curri.id == id) {
                        item = curri;
                    }
                });
                return item.name_ar;
            },
            genderName(id) {
                let item = null;
                this.genders.forEach(curri => {
                    if (curri.id == id) {
                        item = curri;
                    }
                });
                return item.name_en;
            },
            genderNameArabic(id) {
                let item = null;
                this.genders.forEach(curri => {
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
                        this.accreditationsData.forEach(item => {
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
                        this.sportsFitnessData.forEach(item => {
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
                        this.acadamicData.forEach(item => {
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
                        this.specialNeeds.forEach(item => {
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
                        this.educationalResource.forEach(item => {
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
                        this.serviceSupportData.forEach(item => {
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
                        this.assistiveEquipments.forEach(item => {
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
            getEnrollment(enrollments) {
                let item = [];
                enrollments.forEach(enrollment => {
                    if (enrollment.current_year == true) {
                        item = enrollment;
                    }
                });
                return item.total
            },
            getCapacity(capacities) {
                let item = [];
                capacities.forEach(capacity => {
                    if (capacity.current_year == true) {
                        item = capacity;
                    }
                });
                return item.maximum_capacity
            },
            getUtilization(capacities) {
                let item = [];
                capacities.forEach(utlization => {
                    if (utlization.current_year == true) {
                        item = utlization;
                    }
                });
                return item.utilization_rate
            },
            getValuesInFormat(value) {
                return `${('' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
            },
            creativeActivitiesNames(values) {
                if (values.length !== 0) {
                    this.creativeItems = [];
                    values.forEach((searchValue) => {
                        this.creativeActivityData.forEach(item => {
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
                this.searchValue = '';
                this.areaValues = [];
                this.genderValues = [];
                this.assistiveValues = [];
                this.specialNeedValues = [];
                this.curriculumsValues = [];
                this.facilitiesValues = [];
                this.gradeLevelValues = [];
                this.areaText = 'By Area';
                this.genderText = 'By Gender';
                this.curriculumText = 'By Curriculum';
                this.gradeText = 'By Grade Level';
                this.needsText = 'Special Educational Needs';
            },
            getYear(acdamic_id) {
                let _self = this;
                let name = '';
                _self.academicYearsItems.forEach((item) => {
                    if (item.id == acdamic_id) {
                        name = item.name.split(" ").join("");
                    }
                });
                return name.replace(/\-/g, "/");
            },
            closeSchoolDetails() {
                if (this.isSchoolDetails) {
                    this.isSchoolDetails = false;
                    this.isShowInfoWindow = false;
                    this.isSchools = true;
                }
            },
            openAdvanceSearchBox() {
                let _self = this;
                _self.isAdvanceSearch = true;
                _self.isSchools = false;
                _self.isLoading = false;
                _self.isSchoolDetails = false;
            },
            closeSchoolDetailBox() {
                let _self = this;
                _self.isSchoolDetails = false;
                _self.isSchools = true;
            },
            openCustomMarkerBox(id) {
                this.schoolIdInfoBox = id;
                this.isShowInfoWindow = true;
            },
            toggleTranslation(e) {
                this.$store.commit("toggleTranslation");
            }
        }
    }
</script>

<style scoped>
    .main-school-slider .swiper-slide {
        width: auto !important;
    }

    .text-10 {
        font-size: 10px !important;
    }

    #chartdiv-one {
        height: 300px;
    }

    #chartdiv-two {
        height: 300px;
    }

    #chartdiv-three {
        height: 300px;
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

    /*#chart-container > div {*/
    /*    width: 100px;*/
    /*    height: 100px;*/
    /*    border: 2px dashed red*/
    /*}*/
</style>
