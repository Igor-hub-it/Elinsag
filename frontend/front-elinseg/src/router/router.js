import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage/MainPage.vue';
import NewsPage from '../components/NewsPage/NewsPage.vue';
import ContactsPage from '../components/ContactsPage/ContactsPage.vue';
import InfoPage from '../components/InfoPage/InfoPage.vue';
import PartnersPage from '../components/PartnersPage/PartnersPage.vue';
import StructurePage from '../components/StructurePage/StructurePage.vue';


const routes = [
    {path: '/', name: 'main', component: MainPage},
    {path: '/contacts', name: 'contacts', component: ContactsPage},
    {path: '/news', name: 'news', component: NewsPage},
    {path: '/partners', name: 'partners', component: PartnersPage},
    {path: '/info', name: 'info', component: InfoPage},
    {path: '/structure', name: 'structure', component: StructurePage},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})


export default router;
