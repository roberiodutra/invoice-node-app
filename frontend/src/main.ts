import 'bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes';
import './styles/sass/palettes.scss';

createApp(App).use(router).mount('#app');
