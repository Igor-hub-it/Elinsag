import PageNews from './PageNews.vue';

const components = [
    {name: 'PageNews', component: PageNews}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}