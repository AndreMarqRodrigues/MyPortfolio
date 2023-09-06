import { createApp } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'; // Import the App component
import router from './router';

createApp(App) // Use the App component as the main app component
  .use(router)
  .mount('#app');
