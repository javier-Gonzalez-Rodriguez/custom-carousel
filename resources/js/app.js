import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import CustomCarousel from './components/CustomCarousel.vue';

const app = createApp(App);

// Registrar el componente globalmente
app.component('custom-carousel', CustomCarousel);

app.mount('#app');
