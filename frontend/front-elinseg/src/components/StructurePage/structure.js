import StructurePage from './StructurePage.vue';

const components = [
    {name: 'StructurePage', component: StructurePage}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}