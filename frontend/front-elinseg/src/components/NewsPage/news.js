import NewsPage from './NewsPage.vue';

const components = [
    {name: 'NewsPage', component: NewsPage}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}