import Footer from './Footer.vue';
import FooterColumnLogo from './footerComponents/FooterColumnSocial.vue';
import FooterColumnAboutUs from './footerComponents/FooterColumnAboutUs.vue';
import FooterColumnSocial from './footerComponents/FooterColumnSocial.vue';

const components = [
    {name: 'Footer', component: Footer},
    {name: 'FooterColumnLogo', component: Footer},
    {name: 'FooterColumnAboutUs', component: Footer},
    {name: 'FooterColumnSocial', component: Footer}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}