import { createRouter, createWebHistory } from "vue-router";

const path = (path) => "/:language" + path;

const routes = [
  {
    path: "/",
    name: "anasayfa",
    redirect: "/cihazlar-sistemler",
  },
  {
    path: path("/cihazlar-sistemler"),
    name: "cihazlar-sistemler",
    component: () => import("@/views/DevicesView.vue"),
  },
  {
    path: path("/mobil-uygulamalar"),
    name: "mobil-uygulamalar",
    component: () => import("@/views/MobileAppsView.vue"),
  },
  {
    path: path("/masaustu-uygulamalar"),
    name: "masaustu-uygulamalar",
    component: () => import("@/views/DesktopAppsView.vue"),
  },
  {
    path: path("/iletisim"),
    name: "iletisim",
    component: () => import("@/views/ContactUsView.vue"),
  },
  {
    path: path("/urunler/:productName"),
    name: "urunler",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: path("/gizlilik-politikalari"),
    name: "gizlilik-politikalari",
    component: () => import("@/views/PrivacyPoliciesView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    !to.params.language &&
    (routes.some((route) => to.path.startsWith("/" + route.name)) || to.path === "/")
  ) {
    let defaultLanguage = "en";

    if (from.params.language) {
      defaultLanguage = from.params.language;
    } else {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang === "tr-TR") {
        defaultLanguage = "tr";
      }
    }
    next({
      path: "/" + defaultLanguage + to.path,
      replace: true,
    });
  } else if (to.name === "NotFound") {
    next({
      path: "/",
      replace: true,
    });
  } else {
    next();
  }
});

export default router;
