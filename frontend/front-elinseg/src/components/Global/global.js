import Button from './Button.vue';


const components = [
    {name: 'Button', component: Button}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}