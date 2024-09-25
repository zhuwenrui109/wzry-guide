import "./styles/index.less";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const startupWrap = document.querySelector(".startup-wrap");
startupWrap?.addEventListener("click", function () {
	const app = createApp(App);
	app.use(createPinia());
	app.use(router);
	app.mount("#app");
  console.log('localStorage :>> ', localStorage);
});
