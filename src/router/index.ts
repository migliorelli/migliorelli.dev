import { createRouter, createWebHistory } from "vue-router";
import { i18n } from "../lib/i18n";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFoundView.vue"),
      name: "NotFound",
    },
    {
      path: "/",
      component: () => import("../views/IndexView.vue"),
      name: "Index-BR",
      meta: { locale: "pt-BR" },
    },
    {
      path: "/en",
      component: () => import("../views/IndexView.vue"),
      name: "Index-EN",
      meta: { locale: "en" },
    },
  ],
  scrollBehavior(to, from) {
    let el = "";
    const locales = ["/", "/en"];

    if (to.path !== from.path && from.name !== "NotFound") {
      return {};
    }

    if (to.hash) {
      el = to.hash;
    } else if (locales.includes(to.path)) {
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
