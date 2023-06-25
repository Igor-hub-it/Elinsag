import Header from './Header.vue';

const components = [
    {name: 'Header', component: Header}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}