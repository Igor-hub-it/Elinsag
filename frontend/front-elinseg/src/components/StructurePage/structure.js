import StructurePage from './StructurePage.vue';
import CardStructure from './components-structure-pge/CardStructure.vue';

const components = [
    {name: 'StructurePage', component: StructurePage},
    {name: 'CardStructure', component: CardStructure}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}