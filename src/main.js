import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/main.scss'

// Fontawsome Stuff
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import Fragezeichen
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
library.add(faQuestion)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
