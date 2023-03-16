<template>
  <ul class="nav my-3 nav-tabs main-school-tabs" id="myTab" role="tablist">
    <li class="nav-item pe-sm-4 pe-2" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
              role="tab" aria-controls="home-tab-pane" aria-selected="true">Overview
      </button>
    </li>
    <li class="nav-item pe-sm-4 pe-2" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
              role="tab" aria-controls="profile-tab-pane" aria-selected="false">Enrollment & Capacity
      </button>
    </li>
    <li class="nav-item pe-sm-4 pe-2" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button"
              role="tab" aria-controls="contact-tab-pane" aria-selected="false">Facilities & Services
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button"
              role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Special Educational Needs Capacity
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <div class="row">
        <div class="col-lg-6">
          <p class="text-sm">AIS presents outstanding education with a difference.
            Our students' journey to success is mapped along a
            path where the best of the world's schooling
            curriculum stands alongside a proud Emirati culture,
            producing young adults who are not just resourceful
            global citizens but happy children of proud parents.
          </p>
          <p class="text-sm">
            Established over fourteen years ago in response to
            the need for a school respecting the culture, faith and
            language of the people of the UAE whilst utilising the
            best education system for a new digital and global
            era, the Al Sharif Investment Trading Group
            partnered with the Government of Queensland to
            build the first Australian school in the Middle East.
          </p>
          <p class="text-sm">
            Using the innovative Australian Curriculum
            framework, highly experienced teachers from
            Australia, Arabic specialists and a leadership team
            passionate about delivering exceptional educational
            and wellbeing outcomes have together developed
            AIS into a school where each child i nurtured and
            supported to reach for the stars.
          </p>
          <p class="text-sm">
            At AIS, the relationship between home and school is
            viewed as pivotal in a child's education and is
            characterised by a supportive partnership and open
            communication. This is more than simply a place to
            be educated; it is a strong schooling community filled
            with a network of families, teachers and staff
            invested in providing an outstanding, innovative
            education to happy students.</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">CITY</p>
          <p class="text-sm lh-sm mb-4">Sharjah</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Municipality</p>
          <p class="text-sm lh-sm mb-4">Al Nasserya</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Average Tuition Fees (AED)</p>
          <p class="text-sm lh-sm mb-4">47,264</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Curriculum</p>
          <p class="text-sm lh-sm mb-4">Australian</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Student Gender</p>
          <p class="text-sm lh-sm mb-4">Mixed</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Accreditation</p>
          <div class="mb-4">
            <p class="text-sm lh-sm m-1">Edexcel Academic Qualifications</p>
            <p class="text-sm lh-sm m-1">AIS</p>
            <p class="text-sm lh-sm m-1">IB</p>
          </div>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">PISA - Average Reading Literacy Score
            2018</p>
          <p class="text-sm lh-sm mb-4">447</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">PISA- Average Mathematical Literacy Score
            2018</p>
          <p class="text-sm lh-sm mb-4">447</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">PISA - Average Scientific Literacy Score
            2018</p>
          <p class="text-sm lh-sm mb-4">447</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">affiliated with an international
            school/nursery or group</p>
          <p class="text-sm lh-sm mb-4">NO</p>
        </div>
      </div>
      ...
    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <div class="row">
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Availability of Nursery/Preschool</p>
          <p class="text-sm lh-sm mb-4">No</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Total Students Enrolled 2021/2022</p>
          <p class="text-sm lh-sm mb-4">904</p>
        </div>
        <div class="col-lg-12">
          <p class="fw-bold f-poppins">Current Available Seats</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Early Years - Nursery/ Pre-Reception</p>
          <p class="text-sm lh-sm text-purple mb-4">No Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">KG 2 Kindergarten/Year 1</p>
          <p class="text-sm text-purple lh-sm mb-4">No Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">KG 2 Kindergarten/Year 1</p>
          <p class="text-sm text-purple lh-sm mb-4">No Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 1/Year 2</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 2/Year 3</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 3/Year 4</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 4/Year 5</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 5/Year 6</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 6/Year 7</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 7/Year 8</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 8/Year 9</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 9/Year 10</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 10/Year 11</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 11/Year 12</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 12/Year 13</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <p class="fw-bold f-poppins">Facilities</p>

      <ul class="list-unstyled m-0 col-xl-10">
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <div class="col-7 px-0 d-flex  align-items-center">
            <i class="material-icons me-2 text-info text-lg">water</i>
            Swimming pools
          </div>
          <div class="col-5  px-0 text-purple fw-medium">
            Not Available
          </div>
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <div class="col-7 px-0 d-flex  align-items-center">
            <i class="material-icons me-2 text-info text-lg">sports_gymnastics</i>
            Gyms
          </div>
          <div class="col-5  px-0 text-primary fw-medium">
            Available
          </div>
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <div class="col-7 px-0 d-flex  align-items-center">
            <i class="material-icons me-2 text-info text-lg">sports_kabaddi</i>
            Playgrounds
          </div>
          <div class="col-5 px-0 text-primary fw-medium">
            Available
          </div>
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <div class="col-7 px-0 d-flex  align-items-center">
            <i class="material-icons me-2 text-info text-lg">house_siding</i>
            Air conditioned playing Courts
          </div>
          <div class="col-5 px-0 text-primary fw-medium">
            Available
          </div>
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <div class="col-7 px-0 d-flex  align-items-center">
            <i class="material-icons me-2 text-info text-lg">golf_course</i>
            Open air playing Courts
          </div>
          <div class="col-5  px-0 text-primary fw-medium">
            Available
          </div>
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <div class="col-7 px-0 d-flex  align-items-center">
            <i class="material-icons me-2 text-info text-lg">food_bank</i>
            Cafeterias/Lunch Areas
          </div>
          <div class="col-5  px-0 text-primary fw-medium">
            Available
          </div>
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <div class="col-7 px-0 d-flex  align-items-center">
            <i class="material-icons me-2 text-info text-lg">directions_car_filled</i>
            Transportation
          </div>
          <div class="col-5  px-0 text-grey-400 fw-medium">
            Yes, provided by outside contractors
          </div>
        </li>
      </ul>
      <p class="fw-bold f-poppins my-3">Sports/Fitness Activities</p>
      <ul class="list-unstyled m-0 col-xl-10">
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Football
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Volleyball
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Basketball
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Running Track
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Tennis
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Badminton
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Table Tennis
        </li>
      </ul>
      <p class="fw-bold f-poppins my-3">Sports/Fitness Activities</p>
      <ul class="list-unstyled m-0 col-xl-10">
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Drawing
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Photography
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Graphic Design
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Speech
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          School/Nursery Play
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Talent Show
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Poetry
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Music Band
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Music Show
        </li>
      </ul>
      <p class="fw-bold f-poppins my-3">Academic and Work-Related Activities</p>
      <ul class="list-unstyled m-0 col-xl-10">
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Math Club
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Science Club
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Economics Club
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Debating
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Spelling Bee
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Writing Competitions
        </li>
        <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
          <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
          Participation in student committees or school/nursery council
        </li>
      </ul>
    </div>
    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
      <div class="row">
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">equipped for SEND students</p>
          <p class="text-sm lh-sm mb-4">No</p>

          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Special Educational Need(s) Catered To</p>
          <p class="text-sm lh-sm mb-4">Communication and interaction needs
            Cognition and learning needs
            Social, emotional and mental health needs
            Sensory and/or physical needs</p>
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">counseling sessions for parents of SEND students</p>
          <p class="text-sm lh-sm mb-4">Yes</p>
        </div>
        <p class="fw-bold f-poppins">Special Educational Needs Capacity</p>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Early Years - Nursery/ Pre-Reception</p>
          <p class="text-sm lh-sm text-purple mb-4">No Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">KG 2 Kindergarten/Year 1</p>
          <p class="text-sm text-purple lh-sm mb-4">No Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">KG 2 Kindergarten/Year 1</p>
          <p class="text-sm text-purple lh-sm mb-4">No Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 1/Year 2</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 2/Year 3</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 3/Year 4</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 4/Year 5</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 5/Year 6</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 6/Year 7</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 7/Year 8</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 8/Year 9</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 9/Year 10</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 10/Year 11</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 11/Year 12</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
        <div class="col-lg-6">
          <p class="text-uppercase mb-1 fw-semibold text-grey-400 text-10">Grade 12/Year 13</p>
          <p class="text-sm text-primary lh-sm mb-4">Seats Available</p>
        </div>
      </div>
        <p class="fw-bold f-poppins my-3">Special Education Staff Resources</p>
        <ul class="list-unstyled m-0 col-xl-10">

          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Special education teachers
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Psychologists
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Occupational therapists
          </li>
        </ul>
        <p class="fw-bold f-poppins my-3">Support Services</p>
        <ul class="list-unstyled m-0 col-xl-10">
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Assessment and diagnosis by multidisciplinary teams
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Speech and language sessions
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Behavior modification sessions
          </li>
        </ul>
        <p class="fw-bold f-poppins my-3">Assistive Equipment and Facilities Provided</p>
        <ul class="list-unstyled m-0 col-xl-10">
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Ramps
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Dedicated Toilets
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Sensory rooms (equipped with soothing items and sensory products such as sound machines, ball chairs, gel mats)
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Audio players and recorders
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Dedicated Buses/Cars
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Elevators
          </li>
          <li class="d-flex mb-2 text-md align-items-center fw-medium pb-2 border-bottom border-grey-100">
            <i class="material-icons me-2 text-info text-lg">check_circle_outline</i>
            Special education resource rooms (rooms for special instruction in an individualized or small group setting for a portion of the day)
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchoolTabs"
}
</script>

<style scoped>
.text-10 {
  font-size: 10px !important;
}

</style>