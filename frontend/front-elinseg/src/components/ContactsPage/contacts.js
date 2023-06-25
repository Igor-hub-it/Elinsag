import ContactsPage from './ContactsPage.vue';
import ContactPerson from './components-contacts-page/ContactPerson.vue';
import ContactsMap from './components-contacts-page/ContactsMap.vue'

const components = [
    {name: 'ContactsPage', component: ContactsPage},
    {name: 'ContactPerson', component: ContactPerson},
    {name: 'ContactsMap', component: ContactsMap}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}