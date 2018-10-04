import Tab1 from "./pages/Tab1.vue";
import Content from "./pages/Content.vue";
import Content2 from "./pages/Content2.vue";
import TE from "./pages/TE.vue";
import TE2 from "./pages/TE2.vue";
import TE3 from "./pages/TE3.vue";
import Wanqu from "./pages/Wanqu.vue";
import WanquRandom from "./pages/WanquRandom.vue";
import WanquHot from "./pages/WanquHot.vue";
import I21st from "./pages/I21st.vue";
import Pocket from "./pages/Pocket.vue";
import Subtitles from "./pages/Subtitles.vue";

import NotFound from "./pages/404.vue";

// Pages
export default [
  {
    path: "/",
    component: Tab1
  },
  {
    path: "/nyt-today",
    async(routeTo, routeFrom, resolve) {
      const vueComponent = () => import('./pages/NYT-Today.vue');
      vueComponent().then((vc) => {
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: "/nyt-book",
    async(routeTo, routeFrom, resolve) {
      const vueComponent = () => import('./pages/NYT-Book.vue');
      vueComponent().then((vc) => {
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: "/pocket",
    component: Pocket
  },
  {
    path: "/subtitles",
    component: Subtitles
  },
  {
    path: "/paper",
    async(routeTo, routeFrom, resolve) {
      const vueComponent = () => import('./pages/Paper.vue');
      vueComponent().then((vc) => {
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: "/i21st",
    component: I21st
  },
  {
    path: "/te",
    component: TE
  },
  {
    path: "/te2",
    component: TE2
  },
  {
    path: "/te3",
    component: TE3
  },
  {
    path: "/times",
    async(routeTo, routeFrom, resolve) {
      const vueComponent = () => import('./pages/Times.vue');
      vueComponent().then((vc) => {
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: "/wanqu",
    component: Wanqu
  },
  {
    path: "/wanqu-random",
    component: WanquRandom
  },
  {
    path: "/wanqu-hot",
    component: WanquHot
  },
  {
    path: "/category/:name",
    async(routeTo, routeFrom, resolve) {
      const vueComponent = () => import('./pages/Category.vue');
      vueComponent().then((vc) => {
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: "/content",
    component: Content
  },
  {
    path: "/content2",
    component: Content2
  },
  {
    path: "/content3",
    async(routeTo, routeFrom, resolve) {
      const vueComponent = () => import('./pages/Content3.vue');
      vueComponent().then((vc) => {
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: "/menu",
    async(routeTo, routeFrom, resolve) {
      const vueComponent = () => import('./pages/Menu.vue');
      vueComponent().then((vc) => {
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: "(.*)",
    component: NotFound
  }
];
