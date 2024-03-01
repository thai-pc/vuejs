import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import axios from 'axios';
window.axios = axios;

import { Popconfirm ,Checkbox, Input, Select, Avatar, Table, Card, Menu, List, Drawer, Button, message } from 'ant-design-vue';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab, far);

import 'ant-design-vue/dist/reset.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

const pinia = createPinia();
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia);
app.use(Popconfirm);
app.use(Checkbox);
app.use(Input);
app.use(Select);
app.use(Avatar);
app.use(Card);
app.use(Table);
app.use(List);
app.use(Menu);
app.use(Button);
app.use(Drawer);
app.use(router);

app.mount('#app');

app.config.globalProperties.$message = message;
