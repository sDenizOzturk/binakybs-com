import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "anasayfa",
    redirect: "/cihazlar-sistemler",
  },
  {
    path: "/cihazlar-sistemler",
    name: "cihazlar-sistemler",
    component: () => import("@/views/DevicesView.vue"),
  },
  {
    path: "/mobil-uygulamalar",
    name: "mobil-uygulamalar",
    component: () => import("@/views/MobileAppsView.vue"),
  },
  {
    path: "/masaustu-uygulamalar",
    name: "masaustu-uygulamalar",
    component: () => import("@/views/DesktopAppsView.vue"),
  },
  {
    path: "/iletisim",
    name: "iletisim",
    component: () => import("@/views/ContactUsView.vue"),
  },
  {
    path: "/urunler/:productName",
    name: "urun",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/gizlilik-politikalari",
    name: "gizlilik-politikalari",
    component: () => import("@/views/PrivacyPoliciesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
