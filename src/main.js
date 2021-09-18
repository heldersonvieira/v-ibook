import { createApp } from 'vue';
import App from './App.vue';
import api from '@/plugins/api';
import store from './store/index.js';
import router from './router';
import '@/assets/css/global.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(api);
app.mount('#app');
