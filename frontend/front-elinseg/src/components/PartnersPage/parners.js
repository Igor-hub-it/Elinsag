import PartnersPage from './PartnersPage.vue';

const components = [
    {name: 'PartnersPage', component: PartnersPage}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}