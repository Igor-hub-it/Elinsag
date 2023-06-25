import MainPage from './MainPage.vue';
import LastNews from './components-main-page/LastNews.vue';
import LastNewsSlider from './components-main-page/LastNewsSlider.vue';
import InfoMain from './components-main-page/InfoMain.vue';


const components = [
    {name: 'MainPage', component: MainPage},
    {name: 'LastNews', component: LastNews},
    {name: 'LastNewsSlider', component: LastNewsSlider},
    {name: 'InfoMain', component: InfoMain}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}