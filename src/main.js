import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";

//! Import PrimeVue Components
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import Toast from "primevue/toast";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Breadcrumb from "primevue/breadcrumb";
import Rating from "primevue/rating";
import Fieldset from "primevue/fieldset";
import Paginator from "primevue/paginator";
import FloatLabel from "primevue/floatlabel";
import Password from "primevue/password";
import ScrollTop from "primevue/scrolltop";
import MegaMenu from "primevue/megamenu";
import Galleria from "primevue/galleria";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(ConfirmationService);

//! Register PrimeVue Components
app.component("ScrollTop", ScrollTop);
app.component("Paginator", Paginator);
app.component("Fieldset", Fieldset);
app.component("Rating", Rating);
app.component("Breadcrumb", Breadcrumb);
app.component("IconField", IconField);
app.component("InputIcon", InputIcon);
app.component("Toast", Toast);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("Calendar", Calendar);
app.component("Textarea", Textarea);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("FloatLabel", FloatLabel);
app.component("Password", Password);
app.component("MegaMenu", MegaMenu);
app.component("Galleria", Galleria);

app.mount("#app");
