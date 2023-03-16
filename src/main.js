import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.min';
import './assets/js/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import Vue3Geolocation from 'vue3-geolocation';
import VueSlider from 'vue-slider-component'
// import VueToggleBtn from 'vue-toggle-btn';
import 'vue-slider-component/theme/default.css'
import store from './store/store';


import './assets/scss/app.scss';

const app = createApp(App);
app.use(router);
app.use(Vue3Geolocation);
app.use(store)
app.component('VueSlider', VueSlider);
// app.component('vue-toggle-btn', VueToggleBtn);
app.mount('#app');
