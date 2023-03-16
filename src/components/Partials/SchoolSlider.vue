<template>
  <swiper
      :slidesPerView="'auto'"
      :navigation="true"
      :spaceBetween="10"
      :modules="modules"
      class="mySwiper main-school-slider"
  >
    <swiper-slide>
      <img src="../../assets/images/slide1.png" class="img-fluid rounded-3">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/slide3.png" class="img-fluid rounded-3">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/slide1.png" class="img-fluid rounded-3">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/slide3.png" class="img-fluid rounded-3">
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export default {
  name: "SchoolSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
}
</script>

<style scoped>
.main-school-slider .swiper-slide{
  width: auto !important;
}


</style>