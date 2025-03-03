import { createRouter, createWebHistory } from "vue-router";
import { i18n } from "../lib/i18n";
import IndexView from "../views/IndexView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView,
      name: "NotFound",
    },
    {
      path: "/",
      component: IndexView,
      name: "Index-BR",
      meta: { locale: "pt-BR" },
    },
    {
      path: "/en",
      component: IndexView,
      name: "Index-EN",
      meta: { locale: "en" },
    },
  ],
  scrollBehavior(to) {
    let el = "";

    if (to.hash) {
      el = to.hash;
    } else if (to.path === "/" || to.path === "/en") {
      el = "#hero";
    }

    return {
      el,
      behavior: "smooth",
      top: 72,
    };
  },
});

router.beforeEach((to, _from, next) => {
  if (to.meta.locale) {
    i18n.global.locale.value = to.meta.locale as "pt-BR" | "en";
  }
  next();
});

export default router;
