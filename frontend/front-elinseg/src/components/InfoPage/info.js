import InfoPage from './InfoPage.vue';

const components = [
    {name: 'InfoPage', component: InfoPage}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}