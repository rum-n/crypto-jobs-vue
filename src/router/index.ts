import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompaniesView from "../views/CompaniesView.vue";
import SavedJobsView from "../views/SavedJobsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/companies",
      name: "companies",
      component: CompaniesView,
    },
    {
      path: "/saved",
      name: "savedJobs",
      component: SavedJobsView,
    },
  ],
});

export default router;
