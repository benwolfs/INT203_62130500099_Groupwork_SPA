import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton.vue'
import BaseForm from './components/UI/BaseForm.vue'
import BaseMember from './components/UI/BaseMember.vue'
import './assets/tailwind.css'

//const app = createApp(App).use(router).mount('#app')
const app = createApp(App).use(router)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-form', BaseForm)
app.component('base-member', BaseMember)
app.mount('#app')
