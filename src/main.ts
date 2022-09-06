import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import store from './store/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const app = createApp(App);
// createApp(App).use(router).mount('#app')
app.use(router);
app.use(store);
app.mount('#app');
