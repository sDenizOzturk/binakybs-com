import { createRouter, createWebHistory } from 'vue-router';
import DevicesView from '@/views/DevicesView.vue';
import MobileAppsView from '@/views/MobileAppsView.vue';
import DesktopAppsView from '@/views/DesktopAppsView.vue';
import ContactUsView from '@/views/ContactUsView.vue';

const routes = [
  {
    path: '/',
    name: 'anasayfa',
    redirect: '/cihazlar-sistemler',
  },
  {
    path: '/cihazlar-sistemler',
    name: 'cihazlar-sistemler',
    component: DevicesView,
  },
  {
    path: '/mobil-uygulamalar',
    name: 'mobil-uygulamalar',
    component: MobileAppsView,
  },
  {
    path: '/masaustu-uygulamalar',
    name: 'masaustu-uygulamalar',
    component: DesktopAppsView,
  },
  {
    path: '/iletisim',
    name: 'iletisim',
    component: ContactUsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
