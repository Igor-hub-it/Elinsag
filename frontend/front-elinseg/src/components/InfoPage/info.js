import InfoPage from './InfoPage.vue';
import TextInfoPage from './components-info-page/TextInfoPage.vue';
 
const components = [
    {name: 'InfoPage', component: InfoPage},
    {name: 'TextInfoPage', component: TextInfoPage}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}