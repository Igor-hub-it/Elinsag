import Button from './Button.vue';
import CardNews from './CardNews.vue';


const components = [
    {name: 'Button', component: Button},
    {name: 'CardNews', component: CardNews}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}