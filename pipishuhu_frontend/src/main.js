import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.prototype.$http = axios;
import "normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import '../public/font/iconfont.css';
Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
