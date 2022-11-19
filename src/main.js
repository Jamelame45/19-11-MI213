import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from "./router";
import './assets/main.css'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const appInstance = createApp(App);
appInstance.use(Antd);
appInstance.use(router);
appInstance.use(VueSweetalert2);

appInstance.mount("#app");